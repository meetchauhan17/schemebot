"use client";
import React from "react";
import { Wheat, GraduationCap, HardHat, Briefcase, Store, HelpCircle, UserCog, Home } from "lucide-react";

const OCCUPATIONS = [
  { id: "farmer",     label: "Farmer / Agricultural",   icon: Wheat },
  { id: "student",    label: "Student",                  icon: GraduationCap },
  { id: "daily-wage", label: "Daily Wage Worker",        icon: HardHat },
  { id: "salaried",   label: "Salaried Employee",        icon: Briefcase },
  { id: "business",   label: "Self-Employed / Business", icon: Store },
  { id: "unemployed", label: "Currently Unemployed",     icon: HelpCircle },
  { id: "retired",    label: "Retired / Pensioner",      icon: UserCog },
  { id: "homemaker",  label: "Homemaker",                icon: Home },
];

export default function OccupationStep({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
      <span className="label-mono text-[var(--color-accent)] text-[10px] block mb-3">// STEP 04</span>
      <h2 className="font-sans font-black text-2xl md:text-3xl tracking-tight mb-2" style={{ color: "var(--text-primary)" }}>OCCUPATION</h2>
      <p className="text-sm font-medium mb-8" style={{ color: "var(--text-secondary)" }}>
        Schemes often target specific professions like farmers or students.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {OCCUPATIONS.map(occ => {
          const Icon = occ.icon;
          const isSelected = value === occ.id;
          return (
            <button
              key={occ.id}
              onClick={() => onChange(occ.id)}
              className="flex items-center gap-4 p-4 text-left transition-all duration-150 active:translate-y-[1px]"
              style={{
                borderRadius: "var(--radius-md)",
                boxShadow: isSelected ? "var(--shadow-pressed)" : "var(--shadow-card)",
                border: isSelected ? "1px solid rgba(255,71,87,0.3)" : "1px solid transparent",
              }}
            >
              <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{ boxShadow: "var(--shadow-recessed)" }}>
                <Icon size={16} strokeWidth={1.5} style={{ color: isSelected ? "var(--color-accent)" : "var(--text-muted)" }} />
              </div>
              <span className="font-mono font-bold text-xs leading-tight" style={{ color: isSelected ? "var(--color-accent)" : "var(--text-primary)" }}>
                {occ.label.toUpperCase()}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}