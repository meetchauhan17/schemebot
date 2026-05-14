"use client";

import { useState, useRef, useCallback } from "react";
import type { ChatMessage, UserProfile } from "@/types";

function makeId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

import { useProfileContext } from "@/context/ProfileContext";
import { useLanguage } from "@/context/LanguageContext";

interface UseChatReturn {
  messages: ChatMessage[];
  isLoading: boolean;
  error: string | null;
  sendMessage: (content: string) => Promise<void>;
  clearChat: () => void;
  retryLastMessage: () => void;
}

export function useChat(): UseChatReturn {
  const { profile } = useProfileContext();
  const { language } = useLanguage();
  const langCode = language.code;
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Ref to keep the last user message for retry
  const lastUserMessageRef = useRef<string | null>(null);
  // Ref to abort in-flight fetch
  const abortControllerRef = useRef<AbortController | null>(null);

  const sendMessage = useCallback(
    async (content: string) => {
      if (!content.trim() || isLoading) return;
      setError(null);
      lastUserMessageRef.current = content;

      const userMessage: ChatMessage = {
        id: makeId(),
        role: "user",
        content: content.trim(),
        timestamp: new Date(),
      };

      // Optimistically add user message
      setMessages((prev) => [...prev, userMessage]);
      setIsLoading(true);

      // Fire async background call to update profile from user's message
      fetch("/api/extract-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: content.trim(), existingProfile: profile })
      })
      .then(res => res.json())
      .then(newFields => {
        if (Object.keys(newFields).length > 0) {
          import("@/lib/userProfile").then(({ updateProfile }) => {
            updateProfile(newFields);
          });
        }
      })
      .catch(err => console.error("[useChat] Background profile extraction failed", err));

      // Placeholder for streaming assistant reply
      const assistantId = makeId();
      const placeholderMessage: ChatMessage = {
        id: assistantId,
        role: "assistant",
        content: "",
        timestamp: new Date(),
        isStreaming: true,
      };
      setMessages((prev) => [...prev, placeholderMessage]);

      try {
        abortControllerRef.current = new AbortController();

        // Build conversation history (all messages including the one just added)
        const historyForApi: ChatMessage[] = [...messages, userMessage];

        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: historyForApi,
            profile,
            language: langCode,
          }),
          signal: abortControllerRef.current.signal,
        });

        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          if (errData.error === "rate_limit") {
            throw new Error(
              `Too many requests. Please wait ${errData.retryAfter ?? 60} seconds and try again.`
            );
          }
          throw new Error(errData.message ?? `Request failed (${res.status})`);
        }

        if (!res.body) throw new Error("No response body received.");

        // Read SSE stream
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let accumulated = "";

        while (true) {
          const { value, done } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split("\n");

          for (const line of lines) {
            if (!line.startsWith("data: ")) continue;
            const data = line.slice(6).trim();
            if (data === "[DONE]") break;

            try {
              const parsed = JSON.parse(data) as {
                token?: string;
                error?: string;
              };
              if (parsed.error) throw new Error(parsed.error);
              if (parsed.token) {
                accumulated += parsed.token;
                // Update streaming message token by token
                setMessages((prev) =>
                  prev.map((m) =>
                    m.id === assistantId
                      ? { ...m, content: accumulated }
                      : m
                  )
                );
              }
            } catch {
              // Ignore malformed SSE lines
            }
          }
        }

        // Finalise: stop streaming flag
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId ? { ...m, isStreaming: false } : m
          )
        );
      } catch (err: unknown) {
        const error = err as Error;
        if (error.name === "AbortError") {
          // User or component cancelled — clean up gracefully
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId
                ? { ...m, content: m.content || "(cancelled)", isStreaming: false }
                : m
            )
          );
          return;
        }

        const friendlyMessage =
          error.message.includes("rate_limit") || error.message.includes("Too many")
            ? "⏳ " + error.message
            : error.message.includes("fetch") || error.message.includes("Failed to fetch")
            ? "🌐 Network error. Please check your connection and try again."
            : `❌ ${error.message || "Something went wrong. Please try again."}`;

        setError(friendlyMessage);
        // Remove empty placeholder on error
        setMessages((prev) =>
          prev.filter((m) => !(m.id === assistantId && m.content === ""))
        );
      } finally {
        setIsLoading(false);
        abortControllerRef.current = null;
      }
    },
    [isLoading, langCode, messages, profile]
  );

  const clearChat = useCallback(() => {
    // Cancel any in-flight request
    abortControllerRef.current?.abort();
    setMessages([]);
    setError(null);
    setIsLoading(false);
    lastUserMessageRef.current = null;
  }, []);

  const retryLastMessage = useCallback(() => {
    if (!lastUserMessageRef.current) return;
    // Remove last assistant message if it errored
    setMessages((prev) => {
      const lastIdx = [...prev].reverse().findIndex((m) => m.role === "assistant");
      if (lastIdx === -1) return prev;
      const realIdx = prev.length - 1 - lastIdx;
      const last = prev[realIdx];
      if (!last.content || last.content === "(cancelled)") {
        // Remove both the failed assistant message and the user message before it
        return prev.slice(0, realIdx - 1);
      }
      return prev;
    });
    setError(null);
    sendMessage(lastUserMessageRef.current);
  }, [sendMessage]);

  return { messages, isLoading, error, sendMessage, clearChat, retryLastMessage };
}