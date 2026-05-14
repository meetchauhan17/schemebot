"use client";
import React, { useState } from "react";
import { Info, X } from "lucide-react";

const CATEGORIES = [
  { id: "general",    label: "GENERAL",    desc: "No reservation category" },
  { id: "obc",        label: "OBC",        desc: "Other Backward Classes" },
  { id: "sc",         label: "SC",         desc: "Scheduled Caste" },
  { id: "st",         label: "ST",         desc: "Scheduled Tribe" },
  { id: "minority",   label: "MINORITY",   desc: "Muslim / Christian / Sikh / Buddhist" },
  { id: "pwd",        label: "PwD",        desc: "Person with Disability" },
  { id: "prefer-not", label: "SKIP",       desc: "Prefer not to answer" },
];

export default function CategoryStep({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500 relative">
      <span className="label-mono text-[var(--color-accent)] text-[10px] block mb-3">// STEP 06</span>
      <h2 className="font-sans font-black text-2xl md:text-3xl tracking-tight mb-2" style={{ color: "var(--text-primary)" }}>SOCIAL CATEGORY</h2>
      <p className="text-sm font-medium mb-4" style={{ color: "var(--text-secondary)" }}>Select your primary category for specialized welfare programs.</p>

      <button
        onClick={() => setShowModal(true)}
        className="flex items-center gap-1.5 mb-6 transition-colors hover:opacity-70"
      >
        <Info size={13} strokeWidth={1.5} style={{ color: "var(--color-accent)" }} />
        <span className="label-mono text-[10px]" style={{ color: "var(--color-accent)" }}>LEARN ABOUT CATEGORIES</span>
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {CATEGORIES.map(cat => {
          const isSelected = value === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onChange(cat.id)}
              className="p-4 text-left transition-all duration-150 active:translate-y-[1px]"
              style={{
                borderRadius: "var(--radius-md)",
                boxShadow: isSelected ? "var(--shadow-pressed)" : "var(--shadow-card)",
                border: isSelected ? "1px solid rgba(255,71,87,0.3)" : "1px solid transparent",
              }}
            >
              <div className="font-mono font-black text-sm mb-1" style={{ color: isSelected ? "var(--color-accent)" : "var(--text-primary)" }}>
                {cat.label}
              </div>
              <div className="label-mono text-[9px]" style={{ color: "var(--text-muted)" }}>{cat.desc}</div>
            </button>
          );
        })}
      </div>

      {/* Info Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-[var(--surface-dark)]/60 backdrop-blur-sm" onClick={() => setShowModal(false)} />
          <div
            className="relative w-full max-w-md p-6 animate-in zoom-in-95 duration-200 screw-corners"
            style={{ background: "var(--surface-page)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-floating)" }}
          >
            <div className="flex justify-between items-start mb-5">
              <span className="label-mono text-[10px]" style={{ color: "var(--color-accent)" }}>// ABOUT CATEGORIES</span>
              <button onClick={() => setShowModal(false)} className="w-7 h-7 flex items-center justify-center transition-all" style={{ borderRadius: "var(--radius-sm)", boxShadow: "var(--shadow-card)", color: "var(--text-muted)" }}>
                <X size={14} strokeWidth={2} />
              </button>
            </div>
            <h3 className="font-sans font-bold text-base mb-3" style={{ color: "var(--text-primary)" }}>Social Categories in India</h3>
            <div className="space-y-3 text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              <p>Government schemes often have special provisions for historically disadvantaged communities.</p>
              <ul className="space-y-2">
                {[
                  ["SC/ST", "Specific scholarship, housing, and welfare programs"],
                  ["OBC",   "Income-linked (Non-Creamy Layer) benefits available"],
                  ["Minority", "Programs run by Ministry of Minority Affairs"],
                ].map(([term, desc]) => (
                  <li key={term} className="flex items-start gap-2">
                    <span className="label-mono text-[9px] flex-shrink-0 mt-0.5" style={{ color: "var(--color-accent)" }}>{term}</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
              <p className="label-mono text-[9px]" style={{ color: "var(--text-muted)" }}>
                NOTE: YOU WILL NEED OFFICIAL CERTIFICATES (CASTE CERTIFICATE) TO APPLY.
              </p>
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="w-full mt-6 py-3 font-mono font-bold text-xs uppercase tracking-widest text-white transition-all active:translate-y-[1px]"
              style={{ background: "var(--color-accent)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-floating)" }}
            >
              UNDERSTOOD
            </button>
          </div>
        </div>
      )}
    </div>
  );
}