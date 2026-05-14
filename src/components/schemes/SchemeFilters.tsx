"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, X, Filter, Zap } from "lucide-react";
import { SchemeCategory } from "@/types";

interface Filters { category: string[]; state: string; gender: string; income: string; forMe: boolean; }
interface SchemeFiltersProps { filters: Filters; onChange: (f: Filters) => void; onCloseMobile?: () => void; }

const CATEGORIES: SchemeCategory[] = ["agriculture", "health", "education", "women", "housing", "employment", "social", "insurance", "pension", "state"];
const INCOME_RANGES = [
  { value: "below-1l", label: "Below ₹1 Lakh" },
  { value: "1-3l",     label: "₹1L – ₹3L" },
  { value: "3-6l",     label: "₹3L – ₹6L" },
  { value: "6-12l",    label: "₹6L – ₹12L" },
  { value: "above-12l",label: "Above ₹12 Lakh" },
];
const STATES = ["Gujarat", "Maharashtra", "Uttar Pradesh", "Tamil Nadu", "Karnataka", "Rajasthan", "Bihar", "West Bengal", "Madhya Pradesh", "Kerala"];

function Accordion({ title, defaultOpen = false, children }: { title: string; defaultOpen?: boolean; children: React.ReactNode }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderBottom: "1px solid #babecc" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 transition-all"
      >
        <span className="label-mono text-[10px]" style={{ color: "var(--text-primary)", letterSpacing: "0.1em" }}>{title.toUpperCase()}</span>
        {open
          ? <ChevronUp size={14} strokeWidth={2} style={{ color: "var(--text-muted)" }} />
          : <ChevronDown size={14} strokeWidth={2} style={{ color: "var(--text-muted)" }} />
        }
      </button>
      {open && <div className="pb-4 animate-in slide-in-from-top-2 duration-200">{children}</div>}
    </div>
  );
}

/* Recessed mechanical checkbox */
function MechCheckbox({ checked, onChange, label }: { checked: boolean; onChange: () => void; label: string }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group py-1">
      <div
        className="flex-shrink-0 w-5 h-5 flex items-center justify-center transition-all"
        style={{
          borderRadius: "var(--radius-sm)",
          boxShadow: checked ? "var(--shadow-pressed)" : "var(--shadow-recessed)",
          background: "var(--surface-page)",
        }}
        onClick={onChange}
      >
        {checked && <div className="w-2 h-2 rounded-sm" style={{ background: "var(--color-accent)" }} />}
      </div>
      <span className="text-xs font-mono font-bold capitalize transition-colors"
        style={{ color: checked ? "var(--text-primary)" : "var(--text-secondary)" }}>
        {label}
      </span>
    </label>
  );
}

export default function SchemeFilters({ filters, onChange, onCloseMobile }: SchemeFiltersProps) {
  const handleCategoryChange = (cat: string) => {
    const cur = new Set(filters.category);
    if (cur.has(cat)) cur.delete(cat); else cur.add(cat);
    onChange({ ...filters, category: Array.from(cur) });
  };
  const clearAll = () => onChange({ category: [], state: "all", gender: "all", income: "", forMe: false });

  return (
    <div className="flex flex-col h-full" style={{ background: "var(--surface-page)" }}>
      {/* Header */}
      <div
        className="flex items-center justify-between py-4 sticky top-0 z-10"
        style={{ background: "var(--surface-page)", borderBottom: "2px solid #babecc" }}
      >
        <div className="flex items-center gap-2">
          <Filter size={14} strokeWidth={1.5} style={{ color: "var(--color-accent)" }} />
          <span className="label-mono text-[10px]" style={{ color: "var(--text-primary)" }}>FILTERS</span>
        </div>
        <button
          onClick={clearAll}
          className="label-mono text-[9px] transition-colors hover:opacity-70"
          style={{ color: "var(--color-accent)" }}
        >
          CLEAR ALL
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* FOR ME TOGGLE */}
        <div className="py-5" style={{ borderBottom: "1px solid #babecc" }}>
          <div className="flex items-center justify-between">
            <div>
              <span className="label-mono text-[10px] block mb-0.5" style={{ color: "var(--color-accent)" }}>PERSONALISED</span>
              <span className="text-xs font-mono font-bold" style={{ color: "var(--text-secondary)" }}>Auto-filter using my profile</span>
            </div>
            {/* Mechanical toggle */}
            <button
              onClick={() => onChange({ ...filters, forMe: !filters.forMe })}
              className="relative w-12 h-6 transition-all duration-200 flex-shrink-0"
              style={{
                borderRadius: "12px",
                boxShadow: filters.forMe ? "var(--shadow-pressed)" : "var(--shadow-recessed)",
                background: "var(--surface-page)",
              }}
            >
              <span
                className="absolute top-1 w-4 h-4 rounded-full transition-all duration-200"
                style={{
                  left: filters.forMe ? "calc(100% - 20px)" : "4px",
                  background: filters.forMe ? "var(--color-accent)" : "#babecc",
                  boxShadow: filters.forMe ? "var(--shadow-floating)" : "var(--shadow-card)",
                }}
              />
            </button>
          </div>
        </div>

        {/* CATEGORIES */}
        <Accordion title="Category" defaultOpen>
          <div className="space-y-1">
            {CATEGORIES.map(cat => (
              <MechCheckbox
                key={cat}
                checked={filters.category.includes(cat)}
                onChange={() => handleCategoryChange(cat)}
                label={cat}
              />
            ))}
          </div>
        </Accordion>

        {/* STATE */}
        <Accordion title="State" defaultOpen>
          <div
            className="relative"
            style={{ borderRadius: "var(--radius-sm)", boxShadow: "var(--shadow-recessed)" }}
          >
            <select
              value={filters.state}
              onChange={e => onChange({ ...filters, state: e.target.value })}
              className="w-full appearance-none pl-3 pr-8 py-2.5 text-xs font-mono font-bold bg-transparent outline-none cursor-pointer"
              style={{ color: "var(--text-primary)", borderRadius: "var(--radius-sm)" }}
            >
              <option value="all">All India (Central)</option>
              {STATES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <ChevronDown size={12} strokeWidth={2} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "var(--text-muted)" }} />
          </div>
        </Accordion>

        {/* INCOME */}
        <Accordion title="Annual Income">
          <div className="space-y-1">
            {INCOME_RANGES.map(r => (
              <label key={r.value} className="flex items-center gap-3 cursor-pointer py-1">
                {/* Recessed radio */}
                <div
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ boxShadow: "var(--shadow-recessed)", background: "var(--surface-page)" }}
                  onClick={() => onChange({ ...filters, income: r.value })}
                >
                  {filters.income === r.value && (
                    <div className="w-2 h-2 rounded-full" style={{ background: "var(--color-accent)" }} />
                  )}
                </div>
                <span className="text-xs font-mono font-bold" style={{ color: filters.income === r.value ? "var(--text-primary)" : "var(--text-secondary)" }}>
                  {r.label}
                </span>
              </label>
            ))}
          </div>
        </Accordion>

        {/* GENDER */}
        <Accordion title="Gender">
          <div
            className="flex rounded-sm overflow-hidden"
            style={{ boxShadow: "var(--shadow-recessed)" }}
          >
            {["all", "male", "female"].map(g => (
              <button
                key={g}
                onClick={() => onChange({ ...filters, gender: g })}
                className="flex-1 py-2 text-[10px] font-mono font-black uppercase tracking-widest transition-all duration-150"
                style={{
                  background: filters.gender === g ? "var(--color-accent)" : "transparent",
                  color: filters.gender === g ? "#fff" : "var(--text-muted)",
                }}
              >
                {g}
              </button>
            ))}
          </div>
        </Accordion>
      </div>

      {/* Mobile Apply button */}
      {onCloseMobile && (
        <div
          className="pt-4 md:hidden sticky bottom-0 pb-safe"
          style={{ borderTop: "2px solid #babecc", background: "var(--surface-page)" }}
        >
          <button
            onClick={onCloseMobile}
            className="w-full py-3.5 font-mono font-black text-xs uppercase tracking-widest text-white transition-all active:translate-y-[1px]"
            style={{ background: "var(--color-accent)", borderRadius: "var(--radius-md)", boxShadow: "6px 6px 12px rgba(166,50,60,0.4)" }}
          >
            APPLY FILTERS
          </button>
        </div>
      )}
    </div>
  );
}