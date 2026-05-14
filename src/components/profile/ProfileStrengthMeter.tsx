"use client";

import React from "react";
import { useProfileContext } from "@/context/ProfileContext";
import { Zap, ShieldCheck, CheckCircle2, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProfileStrengthMeter() {
  const { completeness, isComplete } = useProfileContext();

  const color = 
    completeness < 30 ? "var(--color-error)" :
    completeness < 80 ? "var(--color-warning)" :
    "var(--color-success)";

  const level = 
    completeness < 30 ? "BEGINNER" :
    completeness < 80 ? "INTERMEDIATE" :
    "EXPERT";

  return (
    <div 
      className="p-5 flex flex-col gap-4 relative overflow-hidden group"
      style={{
        background: "var(--surface-page)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      {/* Background Accent */}
      <div 
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10 blur-xl"
        style={{ background: color }}
      />

      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          {isComplete ? (
            <ShieldCheck size={20} style={{ color }} />
          ) : (
            <Zap size={20} style={{ color }} />
          )}
          <h3 className="font-black tracking-tight text-[var(--text-primary)]">PROFILE STRENGTH</h3>
        </div>
        <div className="flex flex-col items-end">
          <span className="font-mono font-black text-2xl leading-none" style={{ color }}>{completeness}%</span>
          <span className="label-mono text-[9px] text-[var(--text-muted)] mt-1">{level} LEVEL</span>
        </div>
      </div>

      {/* Progress Track */}
      <div 
        className="w-full h-3 rounded-full relative overflow-hidden z-10"
        style={{ background: "var(--surface-dark)", boxShadow: "var(--shadow-recessed)" }}
      >
        <div 
          className="absolute top-0 left-0 h-full transition-all duration-1000 ease-out"
          style={{ width: `${completeness}%`, background: color }}
        />
        {/* Notches for industrial look */}
        {[25, 50, 75].map(tick => (
          <div key={tick} className="absolute top-0 bottom-0 w-px bg-white/30" style={{ left: `${tick}%` }} />
        ))}
      </div>

      {/* Suggestion Text */}
      <div className="flex items-center justify-between mt-1 z-10">
        <p className="text-xs font-medium text-[var(--text-secondary)]">
          {isComplete 
            ? "Your profile is optimized for maximum scheme matches."
            : "Complete your profile to unlock more accurate schemes."}
        </p>
      </div>
    </div>
  );
}
