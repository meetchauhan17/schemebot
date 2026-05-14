"use client";

import React, { useState } from "react";
import { INDIAN_LANGUAGES } from "@/context/LanguageContext";
import { Search, Check } from "lucide-react";

export default function LanguageStep({ value, onChange }: { value: string; onChange: (val: string) => void }) {
  const [search, setSearch] = useState("");
  const filtered = INDIAN_LANGUAGES.filter(l =>
    l.name.toLowerCase().includes(search.toLowerCase()) || l.nativeName.includes(search)
  );

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
      <span className="label-mono text-[var(--color-accent)] text-[10px] block mb-3">// STEP 01</span>
      <h2 className="font-sans font-black text-2xl md:text-3xl tracking-tight mb-2" style={{ color: "var(--text-primary)" }}>
        CHOOSE YOUR LANGUAGE
      </h2>
      <p className="text-sm font-medium mb-6" style={{ color: "var(--text-secondary)" }}>
        अपनी भाषा चुनें &nbsp;·&nbsp; તમારી ભાષા પસંદ કરો
      </p>

      {/* Search */}
      <div className="relative mb-6" style={{ borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-recessed)" }}>
        <Search size={16} strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "var(--text-muted)" }} />
        <input
          type="text"
          placeholder="Search languages..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-11 pr-4 py-3 bg-transparent outline-none text-sm font-mono"
          style={{ color: "var(--text-primary)", borderRadius: "var(--radius-md)" }}
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-h-[45vh] overflow-y-auto pr-1">
        {filtered.map(lang => {
          const isSelected = value === lang.code;
          return (
            <button
              key={lang.code}
              onClick={() => onChange(lang.code)}
              className="relative p-4 flex flex-col items-center justify-center text-center transition-all duration-150 active:translate-y-[1px]"
              style={{
                borderRadius: "var(--radius-md)",
                boxShadow: isSelected ? "var(--shadow-pressed)" : "var(--shadow-card)",
                background: isSelected ? `rgba(255,71,87,0.06)` : "var(--surface-page)",
                border: isSelected ? "1px solid rgba(255,71,87,0.3)" : "1px solid transparent",
              }}
            >
              {isSelected && (
                <span className="absolute top-2 right-2 w-4 h-4 rounded-full flex items-center justify-center" style={{ background: "var(--color-accent)" }}>
                  <Check size={9} strokeWidth={3} className="text-white" />
                </span>
              )}
              <span className="text-2xl mb-2">{lang.flag}</span>
              <span className="font-sans font-bold text-xs mb-0.5" style={{ color: isSelected ? "var(--color-accent)" : "var(--text-primary)" }}>{lang.nativeName}</span>
              <span className="label-mono text-[9px]" style={{ color: "var(--text-muted)" }}>{lang.name.toUpperCase()}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}