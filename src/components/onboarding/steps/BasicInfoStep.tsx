"use client";
import React from "react";
import { User, Users, Lock, UserCircle } from "lucide-react";

const GENDERS = [
  { id: "male",       label: "Male",            icon: User },
  { id: "female",     label: "Female",          icon: UserCircle },
  { id: "other",      label: "Other",           icon: Users },
  { id: "prefer-not", label: "Prefer Not Say",  icon: Lock },
];

function RecessedInput({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="label-mono text-[10px] block mb-2" style={{ color: "var(--text-muted)" }}>{label}</label>
      <input
        {...props}
        className="w-full px-4 py-3 font-mono text-sm outline-none"
        style={{ background: "transparent", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-recessed)", color: "var(--text-primary)" }}
      />
    </div>
  );
}

export default function BasicInfoStep({ name, setName, age, setAge, gender, setGender }: {
  name: string; setName: (v: string) => void;
  age: string;  setAge: (v: string) => void;
  gender: string; setGender: (v: string) => void;
}) {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
      <span className="label-mono text-[var(--color-accent)] text-[10px] block mb-3">// STEP 02</span>
      <h2 className="font-sans font-black text-2xl md:text-3xl tracking-tight mb-2" style={{ color: "var(--text-primary)" }}>BASIC INFO</h2>
      <p className="text-sm font-medium mb-8" style={{ color: "var(--text-secondary)" }}>Basic details help us find age and gender specific schemes.</p>

      <div className="space-y-6">
        <RecessedInput label="NAME (OPTIONAL)" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="We'll use this to personalise the chat" />
        <RecessedInput label="AGE" type="number" value={age} onChange={e => setAge(e.target.value)} min={18} max={100} placeholder="e.g. 35" />

        <div>
          <label className="label-mono text-[10px] block mb-3" style={{ color: "var(--text-muted)" }}>GENDER</label>
          <div className="grid grid-cols-2 gap-3">
            {GENDERS.map(g => {
              const Icon = g.icon;
              const isSelected = gender === g.id;
              return (
                <button
                  key={g.id}
                  onClick={() => setGender(g.id)}
                  className="flex items-center gap-3 p-4 transition-all duration-150 active:translate-y-[1px]"
                  style={{
                    borderRadius: "var(--radius-md)",
                    boxShadow: isSelected ? "var(--shadow-pressed)" : "var(--shadow-card)",
                    border: isSelected ? "1px solid rgba(255,71,87,0.3)" : "1px solid transparent",
                  }}
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ boxShadow: "var(--shadow-recessed)" }}>
                    <Icon size={14} strokeWidth={1.5} style={{ color: isSelected ? "var(--color-accent)" : "var(--text-muted)" }} />
                  </div>
                  <span className="label-mono text-[10px]" style={{ color: isSelected ? "var(--color-accent)" : "var(--text-secondary)" }}>
                    {g.label.toUpperCase()}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}