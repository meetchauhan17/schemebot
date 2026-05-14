import React from "react";
import { Wheat, HeartPulse, GraduationCap, Baby, Home, Briefcase, ArrowRight, MessageSquare } from "lucide-react";

interface QuickSuggestionsProps {
  onSelect: (text: string) => void;
  language: string;
}

const SUGGESTIONS = [
  { icon: Wheat,        color: "#22c55e", label: "FARMER SCHEMES",    desc: "Benefits for agriculture and land.",              prompt: "What are the government schemes for farmers?" },
  { icon: GraduationCap,color: "#3b82f6", label: "SCHOLARSHIPS",      desc: "Education and higher studies support.",           prompt: "Show me scholarships for college students." },
  { icon: HeartPulse,   color: "#ff4757", label: "HEALTHCARE",        desc: "Free medical cover and insurance.",               prompt: "How can I apply for Ayushman Bharat?" },
  { icon: Briefcase,    color: "#8b5cf6", label: "SMALL BUSINESS",    desc: "Loans for startups and MSMEs.",                   prompt: "What loans are available to start a small business?" },
  { icon: Baby,         color: "#ec4899", label: "WOMEN & MATERNITY", desc: "Benefits for pregnant women and mothers.",        prompt: "What are the schemes for pregnant women?" },
  { icon: Home,         color: "#f59e0b", label: "HOUSING",           desc: "Subsidies for building a house.",                 prompt: "How do I get money to build a house under PM Awas Yojana?" },
];

export default function QuickSuggestions({ onSelect }: QuickSuggestionsProps) {
  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-8 w-full max-w-2xl mx-auto my-auto animate-in fade-in zoom-in-95 duration-500">

      {/* Bot avatar — floating circular housing */}
      <div className="relative mb-6">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ background: "var(--surface-page)", boxShadow: "var(--shadow-floating)" }}
        >
          <span className="font-mono font-black text-sm tracking-tighter" style={{ color: "var(--color-accent)" }}>SB</span>
        </div>
        {/* Concentric rings */}
        <div
          className="absolute -inset-3 rounded-full pointer-events-none"
          style={{ boxShadow: "var(--shadow-card)", opacity: 0.5 }}
        />
        <span className="absolute -top-0.5 -right-0.5 led led-green" />
      </div>

      {/* Welcome text */}
      <div className="text-center mb-8">
        <span className="label-mono text-[var(--color-accent)] block mb-2 text-[10px]">// SCHEMEBOT AI ONLINE</span>
        <h2 className="font-sans font-black text-2xl md:text-3xl tracking-tight mb-3" style={{ color: "var(--text-primary)" }}>
          NAMASTE! HOW CAN<br />I HELP YOU?
        </h2>
        <p className="text-sm text-[var(--text-secondary)] max-w-md leading-relaxed">
          I can help you find government schemes, check eligibility, and guide you through the application process — in your language.
        </p>
      </div>

      {/* Suggestion grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
        {SUGGESTIONS.map((item, i) => {
          const Icon = item.icon;
          return (
            <button
              key={i}
              onClick={() => onSelect(item.prompt)}
              className="flex items-center gap-4 p-4 text-left group transition-all duration-150 active:translate-y-[1px]"
              style={{
                background: "var(--surface-page)",
                borderRadius: "var(--radius-md)",
                boxShadow: "var(--shadow-card)",
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = "var(--shadow-floating)")}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = "var(--shadow-card)")}
            >
              {/* Category icon housing — recessed */}
              <div
                className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
                style={{ boxShadow: "var(--shadow-recessed)" }}
              >
                <Icon size={18} strokeWidth={1.5} style={{ color: item.color }} />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="label-mono text-[10px] mb-0.5" style={{ color: item.color }}>{item.label}</h3>
                <p className="text-xs text-[var(--text-secondary)] line-clamp-1">{item.desc}</p>
              </div>

              <ArrowRight
                size={14} strokeWidth={2}
                className="flex-shrink-0 transition-transform group-hover:translate-x-1"
                style={{ color: "var(--text-muted)" }}
              />
            </button>
          );
        })}
      </div>

      {/* Footer hint */}
      <div className="mt-8 flex items-center gap-2">
        <MessageSquare size={12} strokeWidth={1.5} style={{ color: "var(--text-muted)" }} />
        <span className="label-mono text-[9px]" style={{ color: "var(--text-muted)" }}>
          ASK IN YOUR NATIVE LANGUAGE — HINDI, GUJARATI, TAMIL &amp; MORE
        </span>
      </div>
    </div>
  );
}