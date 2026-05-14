"use client";

import React, { useEffect, useState } from "react";

const THINKING_LABELS: Record<string, string> = {
  en: "PROCESSING...",
  hi: "सोच रहा है...",
  gu: "વિચારી રહ્યો છે...",
  bn: "ভাবছে...",
  ta: "யோசிக்கிறது...",
  te: "ఆలోచిస్తోంది...",
  mr: "विचार करत आहे...",
  kn: "ಯೋಚಿಸುತ್ತಿದೆ...",
  ml: "ചിന്തിക്കുന്നു...",
  pa: "ਸੋਚ ਰਿਹਾ ਹੈ...",
  or: "ଭାବୁଛି...",
  ur: "سوچ رہا ہے...",
};

interface TypingIndicatorProps { language?: string; }

export default function TypingIndicator({ language = "en" }: TypingIndicatorProps) {
  const [visible, setVisible] = useState(false);
  const label = THINKING_LABELS[language] ?? THINKING_LABELS.en;

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="flex items-end gap-3 mb-2 pr-12 animate-in fade-in slide-in-from-bottom-2 duration-300">
      {/* Avatar */}
      <div
        className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center self-end mb-1 z-10"
        style={{ background: "var(--surface-page)", boxShadow: "var(--shadow-floating)" }}
      >
        <span className="font-mono font-black text-[10px] tracking-tighter" style={{ color: "var(--color-accent)" }}>SB</span>
      </div>

      {/* Bubble — elevated card */}
      <div
        className="px-5 py-4 flex items-center gap-4"
        style={{
          background: "var(--surface-page)",
          borderRadius: "16px 16px 16px 4px",
          boxShadow: "var(--shadow-card)",
        }}
      >
        {/* LED-style bouncing dots */}
        <div className="flex items-center gap-1.5">
          {[0, 200, 400].map((delay, i) => (
            <span
              key={i}
              className="w-2 h-2 rounded-full"
              style={{
                background: "var(--color-accent)",
                boxShadow: "0 0 6px rgba(255,71,87,0.6)",
                animation: "typingBounce 1.2s ease-in-out infinite",
                animationDelay: `${delay}ms`,
              }}
            />
          ))}
        </div>
        <span className="label-mono text-[10px]" style={{ color: "var(--text-muted)" }}>{label}</span>
      </div>
    </div>
  );
}