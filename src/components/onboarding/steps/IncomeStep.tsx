"use client";
import React from "react";
import { Info } from "lucide-react";

const INCOME_RANGES = [
  { id: "below-1l",  label: "Below ₹1 Lakh",        desc: "₹8,333 or less / month" },
  { id: "1-3l",      label: "₹1L – ₹3 Lakh",         desc: "₹8,333 to ₹25,000 / month" },
  { id: "3-6l",      label: "₹3L – ₹6 Lakh",         desc: "₹25,000 to ₹50,000 / month" },
  { id: "6-12l",     label: "₹6L – ₹12 Lakh",        desc: "₹50,000 to ₹1L / month" },
  { id: "above-12l", label: "Above ₹12 Lakh",        desc: "More than ₹1L / month" },
];

export default function IncomeStep({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
      <span className="label-mono text-[var(--color-accent)] text-[10px] block mb-3">// STEP 05</span>
      <h2 className="font-sans font-black text-2xl md:text-3xl tracking-tight mb-2" style={{ color: "var(--text-primary)" }}>HOUSEHOLD INCOME</h2>
      <p className="text-sm font-medium mb-6" style={{ color: "var(--text-secondary)" }}>Total combined income of all family members per year.</p>

      {/* Info panel */}
      <div className="flex items-start gap-3 p-4 mb-8" style={{ borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-recessed)" }}>
        <Info size={16} strokeWidth={1.5} className="flex-shrink-0 mt-0.5" style={{ color: "var(--color-accent)" }} />
        <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          <span className="font-bold" style={{ color: "var(--text-primary)" }}>Why we ask: </span>
          Most financial assistance schemes have strict income caps. Being accurate ensures we show only schemes you can actually qualify for.
        </p>
      </div>

      <div className="space-y-3">
        {INCOME_RANGES.map(range => {
          const isSelected = value === range.id;
          return (
            <button
              key={range.id}
              onClick={() => onChange(range.id)}
              className="w-full flex items-center gap-4 p-4 text-left transition-all duration-150 active:translate-y-[1px]"
              style={{
                borderRadius: "var(--radius-md)",
                boxShadow: isSelected ? "var(--shadow-pressed)" : "var(--shadow-card)",
                border: isSelected ? "1px solid rgba(255,71,87,0.3)" : "1px solid transparent",
              }}
            >
              {/* Recessed radio dot */}
              <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center" style={{ boxShadow: "var(--shadow-recessed)" }}>
                {isSelected && <div className="w-2 h-2 rounded-full" style={{ background: "var(--color-accent)" }} />}
              </div>
              <div className="flex-1">
                <div className="font-mono font-bold text-sm" style={{ color: isSelected ? "var(--color-accent)" : "var(--text-primary)" }}>{range.label}</div>
                <div className="label-mono text-[9px] mt-0.5" style={{ color: "var(--text-muted)" }}>{range.desc}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}