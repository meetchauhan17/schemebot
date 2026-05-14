"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSavedSchemes } from "@/hooks/useSavedSchemes";
import { Download, Share2, SearchX, MessageSquare, BookOpen, BookmarkX } from "lucide-react";
import SchemeCard from "@/components/schemes/SchemeCard";
import DeadlineTracker from "@/components/shared/DeadlineTracker";
import { exportSavedAsPDF } from "@/lib/savedSchemes";
import { cn } from "@/lib/utils";

const cardStyle = {
  background: "var(--surface-page)",
  borderRadius: "var(--radius-lg)",
  boxShadow: "var(--shadow-card)",
};

export default function SavedSchemesPage() {
  const { savedSchemes, savedCount, totalBenefit, toggleSave } = useSavedSchemes();
  const [activeTab, setActiveTab] = useState<string>("all");
  const categories = Array.from(new Set(savedSchemes.map(s => s.category)));
  const filtered = activeTab === "all" ? savedSchemes : savedSchemes.filter(s => s.category === activeTab);

  if (savedCount === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 min-h-[70dvh]" style={{ background: "var(--surface-page)" }}>
        <div className="w-24 h-24 rounded-full flex items-center justify-center mb-8" style={{ boxShadow: "var(--shadow-recessed)" }}>
          <BookmarkX size={36} strokeWidth={1.5} style={{ color: "var(--text-muted)" }} />
        </div>
        <span className="label-mono text-[var(--color-accent)] block mb-3 text-[10px]">// NO RECORDS FOUND</span>
        <h2 className="font-sans font-black text-3xl text-[var(--text-primary)] mb-4 text-center tracking-tight">
          NO SAVED SCHEMES
        </h2>
        <p className="text-[var(--text-secondary)] mb-10 max-w-sm text-center text-sm leading-relaxed font-medium">
          Schemes you save by clicking the heart icon will appear here so you can easily track your applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <Link href="/schemes" className="flex-1 px-6 py-4 font-bold font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:translate-y-[1px]"
            style={{ ...cardStyle, color: "var(--text-secondary)" }}>
            <BookOpen size={16} strokeWidth={1.5} /> BROWSE SCHEMES
          </Link>
          <Link href="/chat" className="flex-1 px-6 py-4 font-bold font-mono text-xs uppercase tracking-widest text-white flex items-center justify-center gap-2 transition-all active:translate-y-[1px]"
            style={{ background: "var(--color-accent)", borderRadius: "var(--radius-md)", boxShadow: "6px 6px 12px rgba(166,50,60,0.4), -4px -4px 8px rgba(255,100,110,0.3)" }}>
            <MessageSquare size={16} strokeWidth={2} /> START CHAT
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 has-bottom-nav" style={{ background: "var(--surface-page)" }}>
      {/* ── Page header ── */}
      <div style={{ background: "var(--surface-dark)", borderBottom: "2px solid #1a2530" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="led led-green" />
                <span className="label-mono text-[#c8d4e0] text-[10px]">SAVED RECORDS</span>
              </div>
              <h1 className="font-sans font-black text-3xl text-white tracking-tight">MY SCHEMES</h1>
            </div>

            {/* Impact stats */}
            <div className="flex gap-6">
              <div className="text-center">
                <div className="font-mono font-black text-2xl text-white">{savedCount}</div>
                <div className="label-mono text-[#c8d4e0] text-[9px]">SAVED</div>
              </div>
              <div className="w-px bg-[#3d4a52]" />
              <div className="text-center">
                <div className="font-mono font-black text-2xl" style={{ color: "var(--color-success)" }}>{totalBenefit}</div>
                <div className="label-mono text-[#c8d4e0] text-[9px]">TOTAL BENEFIT</div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => exportSavedAsPDF(savedSchemes)}
                className="flex items-center gap-2 px-4 py-2.5 font-mono font-bold text-xs uppercase tracking-wider transition-all active:translate-y-[1px]"
                style={{ background: "var(--surface-dark)", borderRadius: "var(--radius-md)", boxShadow: "3px 3px 6px rgba(0,0,0,0.4), -2px -2px 4px rgba(255,255,255,0.04)", color: "#cbd5e1" }}
              >
                <Download size={14} strokeWidth={1.5} /> EXPORT
              </button>
              <button
                onClick={() => navigator.share?.({ title: "My Saved Schemes", url: window.location.href })}
                className="flex items-center gap-2 px-4 py-2.5 font-mono font-bold text-xs uppercase tracking-wider transition-all active:translate-y-[1px]"
                style={{ background: "var(--surface-dark)", borderRadius: "var(--radius-md)", boxShadow: "3px 3px 6px rgba(0,0,0,0.4), -2px -2px 4px rgba(255,255,255,0.04)", color: "#cbd5e1" }}
              >
                <Share2 size={14} strokeWidth={1.5} /> SHARE
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Deadline tracker */}
        <div className="mb-8 screw-corners" style={cardStyle}>
          <DeadlineTracker schemes={savedSchemes} />
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["all", ...categories].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="px-4 py-2 font-mono font-bold text-xs uppercase tracking-widest transition-all duration-150 active:translate-y-[1px]"
              style={{
                borderRadius: "var(--radius-sm)",
                boxShadow: activeTab === tab ? "var(--shadow-pressed)" : "var(--shadow-card)",
                color: activeTab === tab ? "var(--color-accent)" : "var(--text-secondary)",
                background: "var(--surface-page)",
              }}
            >
              {tab === "all" ? "ALL" : tab.toUpperCase()}
              {tab === "all" && <span className="ml-2 font-mono" style={{ color: "var(--color-accent)" }}>{savedCount}</span>}
            </button>
          ))}
        </div>

        {/* Scheme grid */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <SearchX size={48} strokeWidth={1} style={{ color: "var(--text-muted)" }} className="mb-4" />
            <p className="label-mono text-[var(--text-muted)] text-[11px]">NO RECORDS IN THIS CATEGORY</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(scheme => (
              <SchemeCard key={scheme.id} scheme={scheme} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}