"use client";

import React, { useEffect, useRef, useState } from "react";
import { useLanguage, INDIAN_LANGUAGES } from "@/context/LanguageContext";
import { useChat } from "@/hooks/useChat";
import { useVoice } from "@/hooks/useVoice";
import { getProfile } from "@/lib/userProfile";
import { getUIString } from "@/lib/translator";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import QuickSuggestions from "./QuickSuggestions";
import TypingIndicator from "./TypingIndicator";
import ProfileContextBanner from "./ProfileContextBanner";
import ProfileDataPrompt from "./ProfileDataPrompt";
import ErrorBoundary from "@/components/shared/ErrorBoundary";
import { useRouter } from "next/navigation";
import { Globe, Trash2, ArrowLeft, ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── ChatHeader ───────────────────────────────────────────────────────────────

function ChatHeader({
  onClear,
  messagesCount,
}: {
  onClear: () => void;
  messagesCount: number;
}) {
  const { language, setLanguage } = useLanguage();
  const [showLangMenu, setShowLangMenu] = React.useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close language menu on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowLangMenu(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Top 12 languages for compact display
  const topLanguages = INDIAN_LANGUAGES.slice(0, 12);

  return (
    <header
      className="flex-shrink-0 z-30 flex flex-col justify-center"
      style={{
        background: "var(--surface-dark)",
        borderBottom: "3px solid #1a2530",
        height: "64px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      }}
    >
      <div className="flex items-center justify-between px-4 h-full">

        {/* Left: back + logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push('/')}
            className="md:hidden w-9 h-9 flex items-center justify-center transition-all active:translate-y-[1px]"
            style={{
              borderRadius: "var(--radius-md)",
              boxShadow: "3px 3px 6px rgba(0,0,0,0.4), -2px -2px 4px rgba(255,255,255,0.05)",
              background: "var(--surface-dark)",
              color: "#a8b2d1",
            }}
          >
            <ArrowLeft size={18} strokeWidth={2} />
          </button>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                 style={{ boxShadow: "3px 3px 6px rgba(0,0,0,0.5), -2px -2px 4px rgba(255,255,255,0.05)" }}>
              <span className="font-mono font-black text-[10px] text-[var(--color-accent)] tracking-tighter">SB</span>
              <span className="absolute -top-0.5 -right-0.5 led led-green w-2 h-2" />
            </div>
            <div className="flex flex-col leading-none hidden sm:flex">
              <span className="font-mono font-black text-sm tracking-[-0.02em] text-white uppercase">
                SCHEME<span className="text-[var(--color-accent)]">//</span>BOT
              </span>
              <span className="label-mono text-[#a8b2d1] text-[9px]">AI · ONLINE</span>
            </div>
          </div>
        </div>

        {/* Center: Language selector */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setShowLangMenu((v) => !v)}
            className="flex items-center gap-1.5 px-3 py-1.5 transition-all duration-150 active:translate-y-[1px]"
            style={{
              borderRadius: "var(--radius-md)",
              boxShadow: "3px 3px 6px rgba(0,0,0,0.4), -2px -2px 4px rgba(255,255,255,0.04)",
              background: "var(--surface-dark)",
              color: "#a8b2d1",
            }}
            aria-label="Select language"
          >
            <Globe size={14} strokeWidth={1.5} />
            <span className="text-xs font-mono">{language.nativeName}</span>
            <ChevronDown size={12} className={cn("transition-transform", showLangMenu && "rotate-180")} />
          </button>

          {showLangMenu && (
            <div
              className="absolute top-full mt-2 w-56 z-50 left-1/2 -translate-x-1/2 animate-in fade-in slide-in-from-top-2 duration-150"
              style={{
                background: "var(--surface-page)",
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-floating)",
                border: "1px solid #babecc",
              }}
            >
              <div className="p-2 grid grid-cols-2 gap-1 max-h-56 overflow-y-auto hide-scrollbar">
                {topLanguages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => { setLanguage(lang.code); setShowLangMenu(false); }}
                    className="flex items-center justify-between px-3 py-2 text-xs font-mono transition-all duration-150"
                    style={{
                      borderRadius: "var(--radius-sm)",
                      boxShadow: language.code === lang.code ? "var(--shadow-pressed)" : undefined,
                      color: language.code === lang.code ? "var(--color-accent)" : "var(--text-secondary)",
                    }}
                  >
                    <span>{lang.nativeName}</span>
                    {language.code === lang.code && <Check size={11} strokeWidth={3} />}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right: Clear */}
        <div className="flex items-center gap-1">
          {messagesCount > 0 && (
            <button
              onClick={onClear}
              className="w-9 h-9 flex items-center justify-center transition-all active:translate-y-[1px]"
              style={{
                borderRadius: "var(--radius-md)",
                boxShadow: "3px 3px 6px rgba(0,0,0,0.4), -2px -2px 4px rgba(255,255,255,0.04)",
                background: "var(--surface-dark)",
                color: "var(--color-accent)",
              }}
              aria-label="Clear chat"
              title="Clear conversation"
            >
              <Trash2 size={16} strokeWidth={2} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

// ─── MessagesList ─────────────────────────────────────────────────────────────

function MessagesList({
  messages,
  isLoading,
  language,
  onPromptChoose,
}: {
  messages: ReturnType<typeof useChat>["messages"];
  isLoading: boolean;
  language: string;
  onPromptChoose: (choice: "profile" | "new" | "update") => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const { speak } = useVoice();

  useEffect(() => {
    // Smooth scroll to bottom on new messages
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isLoading]);

  // Date separator helper
  function formatDateSep(date: Date): string {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    if (date.toDateString() === today.toDateString()) return "Today";
    if (date.toDateString() === yesterday.toDateString()) return "Yesterday";
    return date.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  }

  let lastDateStr = "";

  return (
    <div
      ref={scrollRef}
      className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-3 py-4 flex flex-col items-center w-full"
      style={{ paddingBottom: "16px" }}
    >
      <div className="w-full max-w-4xl flex flex-col space-y-1">
        {messages.map((msg, i) => {
          const msgDate = new Date(msg.timestamp);
          const dateStr = msgDate.toDateString();
          const showSep = dateStr !== lastDateStr;
          if (showSep) lastDateStr = dateStr;

          return (
            <React.Fragment key={msg.id}>
              {showSep && i > 0 && (
                <div className="flex items-center gap-3 my-4">
                  <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
                  <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500 px-2">
                    {formatDateSep(msgDate)}
                  </span>
                  <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
                </div>
              )}
              {msg.role === "assistant" && msg.content.includes('"profile_choice"') ? (
                <ProfileDataPrompt onChoose={onPromptChoose} />
              ) : (
                <MessageBubble
                  message={msg}
                  language={language}
                  onSpeak={(text) => speak(text, language)}
                />
              )}
            </React.Fragment>
          );
        })}

        {/* Typing indicator */}
        {isLoading && <TypingIndicator language={language} />}

        <div ref={bottomRef} className="h-px" />
      </div>
    </div>
  );
}

// ─── ChatInterface (main export) ──────────────────────────────────────────────

export default function ChatInterface() {
  const { language } = useLanguage();
  const langCode = language.code;
  const router = useRouter();
  
  // Mounted state for hydration fix
  const [mounted, setMounted] = useState(false);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    setMounted(true);
    setProfile(getProfile());
    
    const handler = () => setProfile(getProfile());
    window.addEventListener("profileUpdated", handler);
    return () => window.removeEventListener("profileUpdated", handler);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const hasProfile = !!profile?.state || !!profile?.age;
    const onboardingComplete = document.cookie.includes("onboardingComplete=true");
    
    if (!hasProfile && !onboardingComplete) {
      router.push("/onboarding");
    }
  }, [mounted, profile, router]);

  const { messages, isLoading, error, sendMessage, clearChat, retryLastMessage } =
    useChat({
      userProfile: profile ?? {},
      language: langCode,
    });

  const handleSuggestion = (text: string) => sendMessage(text);
  
  const handlePromptChoose = (choice: "profile" | "new" | "update") => {
    if (choice === "profile") {
      sendMessage("Use my saved profile details.");
    } else if (choice === "new") {
      sendMessage("Keep my profile unchanged, check for the new details I mentioned.");
    } else if (choice === "update") {
      sendMessage("Update my profile with these new details.");
    }
  };

  if (!mounted) return null; // Hydration fix

  return (
    <ErrorBoundary message="Chat interface encountered an error. Please refresh.">
      <div
        className="flex-1 min-h-0 flex flex-col overflow-hidden"
        style={{ background: "var(--surface-page)" }}
      >
        <ChatHeader onClear={clearChat} messagesCount={messages.length} />

        <ProfileContextBanner />

        {/* Info bar — recessed monospace strip */}
        <div
          className="flex-shrink-0 mx-4 mt-3 mb-1 px-4 py-2 text-center label-mono text-[10px]"
          style={{
            borderRadius: "var(--radius-sm)",
            boxShadow: "var(--shadow-recessed)",
            color: "var(--text-muted)",
          }}
        >
          LLAMA 3.3 // RESPONDS IN YOUR LANGUAGE // 150+ SCHEMES INDEXED
        </div>

        {/* Messages area — flex-1 so it fills remaining space */}
        {messages.length === 0 ? (
          <div className="flex-1 min-h-0 overflow-y-auto flex flex-col items-center justify-center">
            <div className="w-full max-w-4xl px-4">
              <QuickSuggestions onSelect={handleSuggestion} language={langCode} />
            </div>
          </div>
        ) : (
          <MessagesList messages={messages} isLoading={isLoading} language={langCode} onPromptChoose={handlePromptChoose} />
        )}

        {/* Bottom — input pinned */}
        <div
          className="flex-shrink-0 flex flex-col pt-2 px-2 pb-2 items-center"
          style={{ background: "var(--surface-page)", borderTop: "1px solid #babecc", boxShadow: "0 -2px 8px rgba(163,177,198,0.25)" }}
        >
          <div className="w-full max-w-4xl">
            {/* Error banner */}
            {error && (
              <div
                className="mb-3 px-4 py-3 flex items-center justify-between gap-3 label-mono text-[10px]"
                style={{ borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-recessed)", color: "var(--color-accent)" }}
              >
                <p className="flex-1">{error}</p>
                <button
                  onClick={retryLastMessage}
                  className="font-black hover:underline flex-shrink-0"
                >
                  {getUIString("retry", langCode)}
                </button>
              </div>
            )}

            <ChatInput
              onSend={sendMessage}
              isLoading={isLoading}
              language={langCode}
              disabled={isLoading}
            />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}