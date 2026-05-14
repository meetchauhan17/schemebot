"use client";
import React from "react";
import { Heart, UserCheck, Baby, Accessibility } from "lucide-react";

function MechToggle({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className="relative w-12 h-6 transition-all duration-200 flex-shrink-0"
      style={{ borderRadius: "12px", boxShadow: checked ? "var(--shadow-pressed)" : "var(--shadow-recessed)", background: "var(--surface-page)" }}
    >
      <span
        className="absolute top-1 w-4 h-4 rounded-full transition-all duration-200"
        style={{
          left: checked ? "calc(100% - 20px)" : "4px",
          background: checked ? "var(--color-accent)" : "#babecc",
          boxShadow: checked ? "var(--shadow-floating)" : "var(--shadow-card)",
        }}
      />
    </button>
  );
}

export default function FamilyStep({ maritalStatus, setMaritalStatus, childrenCount, setChildrenCount, hasSenior, setHasSenior, hasPwD, setHasPwD }: {
  maritalStatus: string;  setMaritalStatus: (v: string) => void;
  childrenCount: string;  setChildrenCount: (v: string) => void;
  hasSenior: boolean;     setHasSenior: (v: boolean) => void;
  hasPwD: boolean;        setHasPwD: (v: boolean) => void;
}) {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
      <span className="label-mono text-[var(--color-accent)] text-[10px] block mb-3">// STEP 07</span>
      <h2 className="font-sans font-black text-2xl md:text-3xl tracking-tight mb-2" style={{ color: "var(--text-primary)" }}>FAMILY DETAILS</h2>
      <p className="text-sm font-medium mb-8" style={{ color: "var(--text-secondary)" }}>
        Schemes like Sukanya Samriddhi and pensions depend on your family structure.
      </p>

      <div className="space-y-8">
        {/* Marital Status */}
        <div>
          <label className="label-mono text-[10px] block mb-3" style={{ color: "var(--text-muted)" }}>MARITAL STATUS</label>
          <div className="flex flex-wrap gap-2">
            {["Single", "Married", "Widowed", "Divorced"].map(status => {
              const isSelected = maritalStatus === status.toLowerCase();
              return (
                <button
                  key={status}
                  onClick={() => setMaritalStatus(status.toLowerCase())}
                  className="px-5 py-2.5 font-mono font-bold text-xs uppercase tracking-wider transition-all active:translate-y-[1px]"
                  style={{
                    borderRadius: "var(--radius-md)",
                    boxShadow: isSelected ? "var(--shadow-pressed)" : "var(--shadow-card)",
                    border: isSelected ? "1px solid rgba(255,71,87,0.3)" : "1px solid transparent",
                    color: isSelected ? "var(--color-accent)" : "var(--text-secondary)",
                  }}
                >
                  {status}
                </button>
              );
            })}
          </div>
        </div>

        {/* Children */}
        <div>
          <label className="label-mono text-[10px] block mb-3" style={{ color: "var(--text-muted)" }}>NUMBER OF CHILDREN</label>
          <div className="flex gap-2">
            {["0", "1", "2", "3", "4+"].map(num => {
              const isSelected = childrenCount === num;
              return (
                <button
                  key={num}
                  onClick={() => setChildrenCount(num)}
                  className="w-12 h-12 rounded-full font-mono font-black text-sm transition-all active:translate-y-[1px]"
                  style={{
                    boxShadow: isSelected ? "var(--shadow-pressed)" : "var(--shadow-card)",
                    background: isSelected ? "var(--color-accent)" : "var(--surface-page)",
                    color: isSelected ? "#fff" : "var(--text-secondary)",
                  }}
                >
                  {num}
                </button>
              );
            })}
          </div>
        </div>

        <div className="h-px" style={{ background: "#babecc" }} />

        {/* Toggle rows */}
        <div className="space-y-3">
          <label className="label-mono text-[10px] block" style={{ color: "var(--text-muted)" }}>ADDITIONAL FAMILY MEMBERS</label>
          {[
            { key: "senior", label: "Senior Citizens", desc: "Age 60 or above", icon: UserCheck, checked: hasSenior, onChange: () => setHasSenior(!hasSenior) },
            { key: "pwd",    label: "Persons with Disability (PwD)", desc: "Requires 40%+ disability certificate", icon: Accessibility, checked: hasPwD, onChange: () => setHasPwD(!hasPwD) },
          ].map(row => {
            const Icon = row.icon;
            return (
              <div
                key={row.key}
                className="flex items-center justify-between p-4 cursor-pointer transition-all"
                style={{ borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-card)" }}
                onClick={row.onChange}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ boxShadow: "var(--shadow-recessed)" }}>
                    <Icon size={15} strokeWidth={1.5} style={{ color: row.checked ? "var(--color-accent)" : "var(--text-muted)" }} />
                  </div>
                  <div>
                    <div className="font-mono font-bold text-xs" style={{ color: "var(--text-primary)" }}>{row.label}</div>
                    <div className="label-mono text-[9px]" style={{ color: "var(--text-muted)" }}>{row.desc}</div>
                  </div>
                </div>
                <MechToggle checked={row.checked} onChange={row.onChange} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}