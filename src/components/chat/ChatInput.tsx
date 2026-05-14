import React, { useState } from "react";
import { Mic, SendHorizontal, StopCircle, X } from "lucide-react";
import { useVoice } from "@/hooks/useVoice";
import { getUIString } from "@/lib/translator";
import { useEffect, useRef } from "react";

interface ChatInputProps {
  onSend: (text: string) => void;
  isLoading: boolean;
  language: string;
  disabled?: boolean;
}

export default function ChatInput({ onSend, isLoading, language, disabled }: ChatInputProps) {
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { isListening, startListening, stopListening, error: voiceError } = useVoice({
    language,
    onResult: (text) => setInput(text),
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Auto-resize textarea
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 120)}px`;
  }, [input]);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading || disabled) return;
    if (isListening) stopListening();
    onSend(input.trim());
    setInput("");
    if (textareaRef.current) textareaRef.current.style.height = "auto";
    textareaRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleMicClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isListening) stopListening();
    else startListening();
  };

  if (!mounted) return null;

  const canSend = !!input.trim() && !isLoading && !disabled;

  return (
    <div
      ref={containerRef}
      className="px-3 pb-3 pt-2"
      style={{
        background: "var(--surface-page)",
        borderTop: "2px solid #babecc",
        paddingBottom: `max(12px, env(safe-area-inset-bottom))`,
      }}
    >
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto flex items-end gap-2 relative">

        {/* Voice error toast */}
        {voiceError && (
          <div className="absolute -top-14 left-0 right-0 flex justify-center z-50">
            <div
              className="flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold animate-in slide-in-from-bottom-2 fade-in"
              style={{
                background: "var(--surface-page)",
                boxShadow: "var(--shadow-card)",
                borderRadius: "var(--radius-md)",
                color: "var(--color-accent)",
                border: "1px solid var(--color-accent)",
              }}
            >
              <span className="led led-red w-2 h-2" />
              {voiceError}
              <button type="button" className="opacity-60 hover:opacity-100">
                <X size={12} strokeWidth={2} />
              </button>
            </div>
          </div>
        )}

        {/* ── Input well (recessed) ─────────────────────────── */}
        <div
          className="flex-1 relative flex items-end min-h-[52px]"
          style={{
            boxShadow: "var(--shadow-recessed)",
            borderRadius: "var(--radius-md)",
            background: "var(--surface-page)",
          }}
        >
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={isListening ? "// LISTENING..." : getUIString("placeholder", language)}
            className="w-full bg-transparent px-4 py-3.5 outline-none resize-none max-h-[120px] text-[14px] text-[var(--text-primary)] font-mono hide-scrollbar"
            style={{ placeholderColor: "var(--text-muted)" }}
            rows={1}
            disabled={isLoading || disabled}
            dir="auto"
          />

          {/* Mic button — floating inside input */}
          <div className="absolute right-2 bottom-2">
            <button
              type="button"
              onClick={handleMicClick}
              disabled={isLoading || disabled}
              className="w-8 h-8 flex items-center justify-center transition-all duration-150 active:translate-y-[1px]"
              style={{
                borderRadius: "50%",
                boxShadow: isListening ? "var(--shadow-pressed)" : "var(--shadow-sharp)",
                background: "var(--surface-page)",
                color: isListening ? "var(--color-accent)" : "var(--text-muted)",
              }}
              title={isListening ? "Stop listening" : "Voice input"}
              aria-label={isListening ? "Stop listening" : "Start voice input"}
            >
              {isListening
                ? <StopCircle size={16} strokeWidth={2} className="animate-pulse" />
                : <Mic size={16} strokeWidth={1.5} />
              }
            </button>
          </div>
        </div>

        {/* ── Send button — floating, accent red ─────────────── */}
        <button
          type="submit"
          disabled={!canSend}
          className="flex-shrink-0 w-[52px] h-[52px] flex items-center justify-center transition-all duration-150 active:translate-y-[2px]"
          style={{
            borderRadius: "50%",
            boxShadow: canSend ? "var(--shadow-floating)" : "var(--shadow-recessed)",
            background: canSend ? "var(--color-accent)" : "var(--surface-recessed)",
            color: canSend ? "#ffffff" : "var(--text-muted)",
          }}
          title="Send message"
          aria-label="Send message"
        >
          <SendHorizontal size={20} strokeWidth={2} className="ml-0.5" />
        </button>
      </form>
    </div>
  );
}