import React, { useState } from "react";
import { type Message } from "@/hooks/useChat";
import { Copy, Volume2, ThumbsUp, ThumbsDown, CheckCheck, Loader2 } from "lucide-react";
import { getUIString } from "@/lib/translator";
import { cn } from "@/lib/utils";
import { useSavedSchemes } from "@/hooks/useSavedSchemes";
import { schemes } from "@/data/schemes";
import SchemeResultCard from "./SchemeResultCard";

interface MessageBubbleProps {
  message: Message;
  language: string;
  onSpeak?: (text: string) => void;
}

export default function MessageBubble({ message, language, onSpeak }: MessageBubbleProps) {
  const isBot = message.role === "assistant";
  const [copied, setCopied] = useState(false);
  const { toggleSave, isSaved } = useSavedSchemes();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  const handleAction = (action: string) => {
    if (action === "copy") handleCopy();
    else if (action === "speak" && onSpeak) onSpeak(message.content);
    else console.log("Action:", action);
  };

  const timeStr = new Date(message.timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const extractSchemes = (content: string) => {
    const matches = content.match(/\[SCHEME: (.*?)\]/g);
    if (!matches) return [];
    return matches.map((m) => m.replace("[SCHEME: ", "").replace("]", "").trim());
  };
  const schemesInMsg = isBot ? extractSchemes(message.content) : [];
  const foundSchemes = schemesInMsg
    .map((id) => schemes.find((s) => s.id === id || s.name === id))
    .filter(Boolean) as typeof schemes;

  const formatText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i} className="font-bold">{part.slice(2, -2)}</strong>;
      }
      return (
        <span key={i}>
          {part.split("\n").map((line, j) => (
            <React.Fragment key={j}>
              {j > 0 && <br />}
              {line}
            </React.Fragment>
          ))}
        </span>
      );
    });
  };

  const formattedContent = formatText(message.content.replace(/\[SCHEME: .*?\]/g, ""));

  return (
    <div
      className={cn(
        "flex w-full mb-4",
        isBot ? "justify-start pr-12" : "justify-end pl-12"
      )}
    >
      {/* Bot avatar — floating circular housing */}
      {isBot && (
        <div
          className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center self-end mb-1 mr-3 z-10"
          style={{
            background: "var(--surface-page)",
            boxShadow: "var(--shadow-floating)",
          }}
        >
          <span
            className="font-mono font-black text-[10px] tracking-tighter"
            style={{ color: "var(--color-accent)" }}
          >
            SB
          </span>
        </div>
      )}

      {/* Message content area */}
      <div
        className={cn(
          "relative group flex flex-col min-h-[20px]",
          isBot ? "max-w-[85%] items-start" : "max-w-[80%] items-end"
        )}
      >
        <div
          className="px-5 py-4 text-[15px] leading-relaxed transition-all"
          style={{
            wordBreak: "break-word",
            borderRadius: isBot ? "16px 16px 16px 4px" : "16px 16px 4px 16px",
            background: isBot ? "var(--surface-page)" : "var(--surface-dark)",
            boxShadow: isBot 
              ? "var(--shadow-floating)" 
              : "0 4px 12px rgba(0,0,0,0.3), inset 1px 1px 2px rgba(255,255,255,0.08)",
            color: isBot ? "var(--text-primary)" : "#ffffff",
            border: isBot ? "1px solid rgba(255,255,255,0.4)" : "1px solid rgba(255,255,255,0.05)",
          }}
        >
          {/* Vent detail on bot messages */}
          {isBot && (
            <div className="absolute top-3 right-3 flex gap-0.5 opacity-50">
              {[0, 1].map((i) => (
                <div
                  key={i}
                  className="w-[2px] h-3 rounded-full"
                  style={{
                    background: "var(--surface-recessed)",
                    boxShadow: "inset 1px 1px 1px rgba(0,0,0,0.1)",
                  }}
                />
              ))}
            </div>
          )}

          {formattedContent}

          {/* Streaming cursor */}
          {message.isStreaming && (
            <span className="streaming-cursor bg-current inline-block w-[2px] h-[1em] ml-1 align-middle opacity-70" />
          )}

          {/* Extracted scheme cards */}
          {foundSchemes.length > 0 && !message.isStreaming && (
            <div className="mt-4 space-y-3">
              {foundSchemes.map((schemeObj, i) => (
                <SchemeResultCard key={i} scheme={schemeObj} />
              ))}
            </div>
          )}
        </div>

        {/* Action row + timestamp */}
        <div
          className={cn(
            "flex items-center gap-3 mt-1.5 px-1",
            isBot ? "flex-row justify-start" : "flex-row-reverse justify-start"
          )}
        >
          <span className="label-mono text-[9px]" style={{ color: "var(--text-muted)" }}>
            {timeStr}
          </span>

          {isBot && !message.isStreaming && !message.error && (
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => handleAction("speak")}
                className="transition-colors"
                style={{ color: "var(--text-muted)" }}
                aria-label="Read aloud"
                title="Listen"
              >
                <Volume2 size={13} strokeWidth={1.5} />
              </button>
              <button
                onClick={() => handleAction("copy")}
                className="transition-colors"
                style={{ color: copied ? "var(--color-success)" : "var(--text-muted)" }}
                aria-label="Copy"
                title="Copy"
              >
                {copied ? <CheckCheck size={13} strokeWidth={2} /> : <Copy size={13} strokeWidth={1.5} />}
              </button>
              <button
                onClick={() => handleAction("like")}
                className="transition-colors"
                style={{ color: "var(--text-muted)" }}
                aria-label="Helpful"
              >
                <ThumbsUp size={13} strokeWidth={1.5} />
              </button>
              <button
                onClick={() => handleAction("dislike")}
                className="transition-colors"
                style={{ color: "var(--text-muted)" }}
                aria-label="Not helpful"
              >
                <ThumbsDown size={13} strokeWidth={1.5} />
              </button>
            </div>
          )}

          {message.error && (
            <span className="label-mono text-[9px]" style={{ color: "var(--color-accent)" }}>
              ERR
            </span>
          )}
        </div>
      </div>
    </div>
  );
}