"use client";

import React, { useState } from "react";
import type { Scheme, SchemeCategory } from "@/types";
import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Bookmark,
  BookmarkCheck,
  Share2,
  MapPin,
  AlertTriangle,
  FileText,
  CheckSquare,
  Square,
  Clock,
  Phone,
} from "lucide-react";
import { saveScheme, unsaveScheme, isSchemesSaved } from "@/lib/savedSchemes";
import { shareOnWhatsApp } from "@/lib/sharing";
import { useLanguage } from "@/context/LanguageContext";

// ─── Category color map ───────────────────────────────────────────────────────

const CATEGORY_COLORS: Record<SchemeCategory, { border: string; badge: string; icon: string }> = {
  agriculture: { border: "border-l-green-500", badge: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300", icon: "🌾" },
  health:      { border: "border-l-red-500",   badge: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",   icon: "🏥" },
  education:   { border: "border-l-blue-500",  badge: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",  icon: "🎓" },
  women:       { border: "border-l-pink-500",  badge: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",  icon: "👩" },
  housing:     { border: "border-l-amber-500", badge: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300", icon: "🏠" },
  employment:  { border: "border-l-violet-500",badge: "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300",icon: "💼" },
  social:      { border: "border-l-teal-500",  badge: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300",  icon: "🤝" },
  insurance:   { border: "border-l-cyan-500",  badge: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300",  icon: "🛡️" },
  pension:     { border: "border-l-indigo-500",badge: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300",icon: "👴" },
  state:       { border: "border-l-orange-500",badge: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",icon: "🏛️" },
};

// ─── Deadline badge ───────────────────────────────────────────────────────────

function DeadlineBadge({ deadline }: { deadline: string | null }) {
  if (!deadline) return null;
  const d = new Date(deadline);
  if (isNaN(d.getTime())) {
    return (
      <span className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400">
        <Clock className="w-2.5 h-2.5" />
        {deadline}
      </span>
    );
  }
  const daysLeft = Math.ceil((d.getTime() - Date.now()) / 86400000);
  const color =
    daysLeft < 30 ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" :
    daysLeft < 60 ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" :
                    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
  return (
    <span className={`inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full ${color}`}>
      <Clock className="w-2.5 h-2.5" />
      {daysLeft > 0 ? `${daysLeft}d left` : "Deadline passed"}
    </span>
  );
}

// ─── Expandable section ───────────────────────────────────────────────────────

function ExpandSection({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-3 py-2.5 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-700/60 transition-colors text-left"
      >
        <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
          {icon}
          {title}
        </div>
        {open ? (
          <ChevronUp className="w-4 h-4 text-slate-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-3 py-3 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 animate-in fade-in slide-in-from-top-1 duration-200">
          {children}
        </div>
      )}
    </div>
  );
}

// ─── SchemeResultCard ─────────────────────────────────────────────────────────

interface SchemeResultCardProps {
  scheme: Scheme;
  qualifyReason?: string;
}

export default function SchemeResultCard({ scheme, qualifyReason }: SchemeResultCardProps) {
  const colors = CATEGORY_COLORS[scheme.category] ?? CATEGORY_COLORS.social;
  const [saved, setSaved] = useState(() => isSchemesSaved(scheme.id));
  const [docChecked, setDocChecked] = useState<Record<string, boolean>>({});

  function toggleSave() {
    if (saved) {
      unsaveScheme(scheme.id);
    } else {
      saveScheme(scheme);
    }
    setSaved((v) => !v);
  }

  const { language } = useLanguage();

  function handleShare() {
    shareOnWhatsApp(scheme, language);
  }

  const mandatoryDocs = scheme.documents.filter((d) => d.mandatory);

  return (
    <div
      className={`my-3 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-md overflow-hidden border-l-4 ${colors.border} animate-in fade-in slide-in-from-bottom-2 duration-300`}
    >
      {/* Header */}
      <div className="px-4 pt-4 pb-3">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide ${colors.badge}`}>
                {colors.icon} {scheme.category}
              </span>
              {scheme.state !== "all" && (
                <span className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                  <MapPin className="w-2.5 h-2.5" />
                  {scheme.state}
                </span>
              )}
              {scheme.deadline && <DeadlineBadge deadline={scheme.deadline} />}
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
              {scheme.name}
            </h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              {scheme.department}
            </p>
          </div>
        </div>

        {/* Qualify pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/50 mb-3">
          <span className="text-green-600 dark:text-green-400 text-xs">✅</span>
          <span className="text-xs font-semibold text-green-700 dark:text-green-400">
            You likely qualify
          </span>
        </div>

        {/* Benefit amount */}
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-2xl font-extrabold text-green-600 dark:text-green-400 leading-tight">
            {scheme.benefitAmount}
          </span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">{scheme.description}</p>

        {/* Why qualify */}
        {qualifyReason && (
          <div className="px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/40">
            <p className="text-xs text-blue-700 dark:text-blue-300 leading-relaxed">
              <span className="font-semibold">Why you qualify: </span>
              {qualifyReason}
            </p>
          </div>
        )}
      </div>

      {/* Expandable sections */}
      <div className="px-4 pb-3 space-y-2">
        {/* Documents */}
        <ExpandSection
          icon={<FileText className="w-3.5 h-3.5 text-slate-500" />}
          title={`📄 Documents (${mandatoryDocs.length} required)`}
        >
          <div className="space-y-2">
            {mandatoryDocs.map((doc, i) => (
              <button
                key={i}
                onClick={() => setDocChecked((prev) => ({ ...prev, [doc.name]: !prev[doc.name] }))}
                className="w-full flex items-start gap-2.5 text-left group"
              >
                {docChecked[doc.name] ? (
                  <CheckSquare className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                ) : (
                  <Square className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5 group-hover:text-blue-400 transition-colors" />
                )}
                <div className="min-w-0">
                  <p className={`text-xs font-medium ${docChecked[doc.name] ? "line-through text-slate-400" : "text-slate-700 dark:text-slate-300"}`}>
                    {doc.name}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{doc.howToGet}</p>
                </div>
              </button>
            ))}
          </div>
        </ExpandSection>

        {/* How to Apply */}
        <ExpandSection
          icon={<CheckSquare className="w-3.5 h-3.5 text-slate-500" />}
          title="📝 How to Apply"
        >
          <ol className="space-y-2">
            {scheme.howToApplySteps.map((step, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-[10px] font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed pt-0.5">
                  {step}
                </p>
              </li>
            ))}
            {scheme.alternativeApply && (
              <li className="flex items-start gap-2.5 mt-1 pt-2 border-t border-slate-100 dark:border-slate-700">
                <span className="flex-shrink-0 text-amber-500 text-sm">🏪</span>
                <p className="text-xs text-slate-600 dark:text-slate-400 italic leading-relaxed">
                  Offline: {scheme.alternativeApply}
                </p>
              </li>
            )}
          </ol>
        </ExpandSection>

        {/* Common Mistakes */}
        {scheme.commonMistakes.length > 0 && scheme.commonMistakes[0] !== "N/A" && (
          <ExpandSection
            icon={<AlertTriangle className="w-3.5 h-3.5 text-amber-500" />}
            title="⚠️ Common Mistakes to Avoid"
          >
            <ul className="space-y-1.5">
              {scheme.commonMistakes.map((mistake, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5" />
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">{mistake}</p>
                </li>
              ))}
            </ul>
          </ExpandSection>
        )}
      </div>

      {/* Helpline */}
      {scheme.helpline && (
        <div className="mx-4 mb-3 flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <Phone className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
          <span className="text-xs text-slate-600 dark:text-slate-400">
            Helpline:{" "}
            <a href={`tel:${scheme.helpline.split("/")[0].trim()}`} className="font-semibold text-blue-600 dark:text-blue-400 hover:underline">
              {scheme.helpline}
            </a>
          </span>
        </div>
      )}

      {/* Action buttons */}
      <div className="px-4 pb-4 flex flex-wrap gap-2">
        {/* Apply Now */}
        <a
          href={scheme.officialLinks.apply}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-[120px] flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs font-semibold transition-colors shadow-sm"
        >
          Apply Now
          <ExternalLink className="w-3 h-3" />
        </a>

        {/* Save */}
        <button
          onClick={toggleSave}
          className={`flex items-center justify-center gap-1 px-3 py-2.5 rounded-xl border text-xs font-semibold transition-all ${
            saved
              ? "bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-400"
              : "bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-amber-300 hover:text-amber-600"
          }`}
          aria-label={saved ? "Remove saved" : "Save scheme"}
        >
          {saved ? <BookmarkCheck className="w-3.5 h-3.5" /> : <Bookmark className="w-3.5 h-3.5" />}
          {saved ? "Saved" : "Save"}
        </button>

        {/* WhatsApp share */}
        <button
          onClick={handleShare}
          className="flex items-center justify-center gap-1 px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:border-green-400 hover:text-green-600 text-xs font-semibold transition-all"
          aria-label="Share on WhatsApp"
        >
          <Share2 className="w-3.5 h-3.5" />
          Share
        </button>
      </div>
    </div>
  );
}