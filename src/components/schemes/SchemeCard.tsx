"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Clock, MapPin, Heart, ArrowRight,
  Wheat, HeartPulse, Home, Baby, Briefcase, Building2,
  GraduationCap, Users, ShieldCheck, Landmark, HandCoins, Tractor
} from "lucide-react";
import type { Scheme } from "@/types";
import { isSchemesSaved, saveScheme, unsaveScheme } from "@/lib/savedSchemes";
import { useProfileContext } from "@/context/ProfileContext";
import { getMatchReason } from "@/lib/profileContext";

/* Category icon + accent color mapping — Lucide icons only, no emojis */
const CATEGORY_CONFIG: Record<string, { icon: React.ElementType; color: string; label: string }> = {
  agriculture: { icon: Wheat,        color: "#22c55e", label: "AGRI" },
  health:      { icon: HeartPulse,   color: "#ff4757", label: "HEALTH" },
  education:   { icon: GraduationCap,color: "#3b82f6", label: "EDU" },
  women:       { icon: Baby,         color: "#ec4899", label: "WOMEN" },
  housing:     { icon: Home,         color: "#f59e0b", label: "HOUSING" },
  employment:  { icon: Briefcase,    color: "#8b5cf6", label: "EMPLOY" },
  social:      { icon: Users,        color: "#14b8a6", label: "SOCIAL" },
  insurance:   { icon: ShieldCheck,  color: "#06b6d4", label: "INSUR" },
  pension:     { icon: Landmark,     color: "#6366f1", label: "PENSION" },
  state:       { icon: Building2,    color: "#f97316", label: "STATE" },
  business:    { icon: HandCoins,    color: "#10b981", label: "BIZ" },
  default:     { icon: Tractor,      color: "#4a5568", label: "SCHEME" },
};

function DeadlineBadge({ deadline }: { deadline: string }) {
  const d = new Date(deadline);
  if (isNaN(d.getTime())) return null;

  const daysLeft = Math.ceil((d.getTime() - Date.now()) / 86400000);
  if (daysLeft < 0)
    return (
      <span className="label-mono text-[var(--text-muted)] flex items-center gap-1">
        <Clock size={10} strokeWidth={2} /> CLOSED
      </span>
    );

  const color =
    daysLeft < 30 ? "var(--color-accent)" :
    daysLeft < 60 ? "var(--color-warning)" :
    "var(--text-muted)";

  return (
    <span className="label-mono flex items-center gap-1" style={{ color }}>
      <Clock size={10} strokeWidth={2} />
      {daysLeft}D LEFT
    </span>
  );
}

export default function SchemeCard({ scheme }: { scheme: Scheme }) {
  const config = CATEGORY_CONFIG[scheme.category] ?? CATEGORY_CONFIG.default;
  const CategoryIcon = config.icon;
  const [isSaved, setIsSaved] = useState(() => isSchemesSaved(scheme.id));
  const { profile, hasProfile, matchedSchemes } = useProfileContext();
  const isMatched = hasProfile && matchedSchemes.some(s => s.id === scheme.id);
  const matchReason = isMatched && profile ? getMatchReason(scheme, profile) : null;

  const handleSaveToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isSaved) unsaveScheme(scheme.id);
    else saveScheme(scheme);
    setIsSaved(!isSaved);
  };

  return (
    <Link href={`/schemes/${scheme.id}`} className="block group h-full">
      <div
        className="relative h-full flex flex-col screw-corners-full overflow-hidden transition-all duration-300 group-hover:-translate-y-1"
        style={{
          background: "var(--surface-page)",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-card)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-floating)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-card)";
        }}
      >
        {/* ── Top accent bar by category color ─────────── */}
        <div className="h-1 w-full flex-shrink-0" style={{ background: config.color }} />

        {/* ── Vent slots — top right detail ─────────────── */}
        <div className="absolute top-6 right-5 flex gap-1 z-[1]">
          {[0,1,2].map((i) => (
            <div
              key={i}
              className="w-[3px] h-5 rounded-full"
              style={{
                background: "var(--surface-recessed)",
                boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.15), inset -1px -1px 1px rgba(255,255,255,0.6)",
              }}
            />
          ))}
        </div>

        {/* ── Card body ─────────────────────────────────── */}
        <div className="p-5 flex-1 flex flex-col">

          {/* Category badge + save button */}
          <div className="flex items-start justify-between mb-4 gap-2">
            {/* Category pill */}
            <div
              className="flex items-center gap-1.5 px-2.5 py-1.5"
              style={{
                borderRadius: "var(--radius-sm)",
                boxShadow: "var(--shadow-sharp)",
                background: "var(--surface-page)",
              }}
            >
              <CategoryIcon size={12} strokeWidth={2} style={{ color: config.color }} />
              <span className="label-mono text-[10px]" style={{ color: config.color }}>
                {config.label}
              </span>
            </div>

            {/* State badge */}
            {scheme.state !== "all" && (
              <div
                className="flex items-center gap-1 px-2 py-1.5 flex-shrink-0"
                style={{
                  borderRadius: "var(--radius-sm)",
                  boxShadow: "var(--shadow-sharp)",
                  background: "var(--surface-page)",
                }}
              >
                <MapPin size={10} strokeWidth={2} style={{ color: "var(--text-muted)" }} />
                <span className="label-mono text-[9px] text-[var(--text-muted)]">{scheme.state.toUpperCase()}</span>
              </div>
            )}

            {/* Save button — floats to the right */}
            <button
              onClick={handleSaveToggle}
              className="ml-auto flex-shrink-0 w-9 h-9 flex items-center justify-center transition-all duration-150 active:translate-y-[1px]"
              style={{
                borderRadius: "50%",
                boxShadow: isSaved ? "var(--shadow-pressed)" : "var(--shadow-floating)",
                background: "var(--surface-page)",
              }}
            >
              <Heart
                size={16}
                strokeWidth={2}
                style={{
                  color: isSaved ? "var(--color-accent)" : "var(--text-muted)",
                  fill: isSaved ? "var(--color-accent)" : "none",
                  transition: "all 200ms",
                }}
              />
            </button>
          </div>

          {/* Scheme name */}
          <h3
            className="font-sans font-bold text-base leading-tight mb-1.5 line-clamp-2 transition-colors duration-150"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.01em" }}
          >
            {scheme.name}
          </h3>

          {/* Department — monospace label */}
          <p className="label-mono text-[var(--text-muted)] mb-4 line-clamp-1 text-[10px]">
            {scheme.department.toUpperCase()}
          </p>

          {/* Benefit amount — large monospace */}
          <div className="mb-4">
            <span
              className="font-mono font-bold text-2xl tracking-tight"
              style={{ color: config.color }}
            >
              {scheme.benefitAmount}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-[var(--text-secondary)] line-clamp-2 mb-3 flex-1 leading-relaxed">
            {scheme.description}
          </p>

          {/* Match Badge — only shown when scheme matches user profile */}
          {isMatched && matchReason && (
            <div
              className="mb-4 px-3 py-2 flex items-center gap-2"
              style={{
                borderRadius: "var(--radius-sm)",
                boxShadow: "var(--shadow-recessed)",
                background: "var(--surface-recessed)",
                border: "1px solid rgba(74, 222, 128, 0.3)"
              }}
            >
              <div className="flex flex-col items-center justify-center pr-2 border-r border-[#babecc] flex-shrink-0">
                <span className="label-mono text-[10px] leading-none mb-0.5" style={{ color: "var(--color-success)" }}>MATCH</span>
                <span className="font-mono font-black text-sm leading-none" style={{ color: "var(--color-success)" }}>✓</span>
              </div>
              <p className="text-[10px] font-bold text-[var(--text-secondary)] leading-tight line-clamp-2">
                {matchReason.toUpperCase()}
              </p>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-auto mb-1">
            {scheme.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="label-mono text-[9px] text-[var(--text-muted)] px-2 py-1"
                style={{
                  borderRadius: "var(--radius-sm)",
                  boxShadow: "var(--shadow-recessed)",
                  background: "var(--surface-page)",
                }}
              >
                #{tag.toUpperCase()}
              </span>
            ))}
          </div>
        </div>

        {/* ── Footer strip — recessed ─────────────────── */}
        <div
          className="px-5 py-3 flex items-center justify-between"
          style={{
            boxShadow: "inset 0 2px 4px rgba(163,177,198,0.3), inset 0 1px 0 rgba(255,255,255,0.5)",
            background: "var(--surface-recessed)",
          }}
        >
          <div>
            {scheme.deadline
              ? <DeadlineBadge deadline={scheme.deadline} />
              : <span className="label-mono text-[var(--text-muted)] text-[10px]">OPEN YEAR ROUND</span>
            }
          </div>
          <span
            className="label-mono text-[10px] flex items-center gap-1 transition-all duration-200 group-hover:gap-2"
            style={{ color: "var(--color-accent)" }}
          >
            DETAILS <ArrowRight size={10} strokeWidth={2.5} />
          </span>
        </div>
      </div>
    </Link>
  );
}