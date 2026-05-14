"use client";

import React from "react";
import { User, Users, RefreshCw } from "lucide-react";

export default function ProfileDataPrompt({ onChoose }: { onChoose: (choice: "profile" | "new" | "update") => void }) {
  return (
    <div className="bg-white dark:bg-slate-800 border-2 border-blue-200 dark:border-blue-900 rounded-2xl p-4 my-2" style={{ boxShadow: "var(--shadow-card)" }}>
      <div className="flex items-start gap-3 mb-4">
        <span className="text-2xl">🤔</span>
        <div>
          <h4 className="font-bold text-sm text-[var(--text-primary)]">Quick question:</h4>
          <p className="text-xs text-[var(--text-secondary)] mt-1">
            The details you mentioned are different from your saved profile. Are you asking for:
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <button 
          onClick={() => onChoose("profile")}
          className="flex flex-col items-center p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all text-center"
        >
          <User size={20} className="text-blue-600 mb-2" />
          <span className="font-bold text-[11px] uppercase">Yourself</span>
          <span className="text-[9px] text-[var(--text-muted)] mt-1">Use saved profile</span>
        </button>

        <button 
          onClick={() => onChoose("new")}
          className="flex flex-col items-center p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-amber-500 hover:bg-amber-50 dark:hover:bg-amber-900/30 transition-all text-center"
        >
          <Users size={20} className="text-amber-600 mb-2" />
          <span className="font-bold text-[11px] uppercase">Someone Else</span>
          <span className="text-[9px] text-[var(--text-muted)] mt-1">Keep profile unchanged</span>
        </button>
      </div>

      <button 
        onClick={() => onChoose("update")}
        className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 transition-all text-xs font-bold text-[var(--text-primary)]"
      >
        <RefreshCw size={14} /> Update My Profile Instead
      </button>
    </div>
  );
}
