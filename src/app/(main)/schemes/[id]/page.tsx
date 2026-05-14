import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSchemes, getSchemeById, getRelatedSchemes } from "@/lib/schemes";
import {
  ChevronRight, ExternalLink, Calendar, MapPin, Share2, Heart,
  PhoneCall, MessageSquare, Map, Info, AlertTriangle, Building2,
  CheckCircle2, ArrowLeft, Clock, FileText, Wheat, HeartPulse,
  GraduationCap, Baby, Home, Briefcase, Building, Users, ShieldCheck,
  Landmark, HandCoins
} from "lucide-react";
import type { Metadata } from "next";
import EligibilityChecker from "@/components/schemes/EligibilityChecker";
import DocumentChecklist from "@/components/schemes/DocumentChecklist";

export async function generateStaticParams() {
  return getAllSchemes().map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const scheme = getSchemeById((await params).id);
  if (!scheme) return { title: "Scheme Not Found" };
  return {
    title: scheme.name,
    description: scheme.description.substring(0, 160),
    openGraph: { title: scheme.name, description: `Benefit: ${scheme.benefitAmount}. ${scheme.description.substring(0, 100)}...`, type: "article" },
  };
}

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  agriculture: Wheat, health: HeartPulse, education: GraduationCap, women: Baby,
  housing: Home, business: Briefcase, employment: Users, state: Building,
  insurance: ShieldCheck, pension: Landmark, social: HandCoins,
};
const CATEGORY_COLORS: Record<string, string> = {
  agriculture: "#22c55e", health: "#ff4757", education: "#3b82f6", women: "#ec4899",
  housing: "#f59e0b", business: "#8b5cf6", employment: "#14b8a6", state: "#f97316",
  insurance: "#06b6d4", pension: "#6366f1", social: "#10b981",
};

/* ─── Small reusable components ─── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return <span className="label-mono text-[10px] block mb-3" style={{ color: "var(--color-accent)" }}>{children}</span>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="font-sans font-black text-2xl tracking-tight mb-6" style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>{children}</h2>;
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between py-3 gap-4" style={{ borderBottom: "1px solid #babecc" }}>
      <span className="label-mono text-[10px] flex-shrink-0 pt-0.5" style={{ color: "var(--text-muted)" }}>{label}</span>
      <span className="font-mono text-xs font-bold text-right" style={{ color: "var(--text-primary)" }}>{value}</span>
    </div>
  );
}

export default async function SchemeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const scheme = getSchemeById((await params).id);
  if (!scheme) notFound();

  const relatedSchemes = getRelatedSchemes(scheme, 3);
  const isExpired = scheme.deadline && new Date(scheme.deadline) < new Date();
  const CategoryIcon = CATEGORY_ICONS[scheme.category] ?? Building2;
  const accentColor = CATEGORY_COLORS[scheme.category] ?? "var(--color-accent)";

  return (
    <div className="flex flex-col min-h-screen pb-20" style={{ background: "var(--surface-page)" }}>

      {/* ── HEADER PANEL ── */}
      <div style={{ background: "var(--surface-dark)", borderBottom: "3px solid #1a2530", boxShadow: "0 4px 16px rgba(0,0,0,0.25)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 mb-8">
            <Link href="/" className="label-mono text-[10px] text-[#c8d4e0] hover:text-white transition-colors">HOME</Link>
            <ChevronRight size={10} strokeWidth={2} style={{ color: "#5a6a72" }} />
            <Link href="/schemes" className="label-mono text-[10px] text-[#c8d4e0] hover:text-white transition-colors">SCHEMES</Link>
            <ChevronRight size={10} strokeWidth={2} style={{ color: "#5a6a72" }} />
            <span className="label-mono text-[10px]" style={{ color: "#5a6a72" }}>{scheme.category.toUpperCase()}</span>
            <ChevronRight size={10} strokeWidth={2} style={{ color: "#5a6a72" }} />
            <span className="label-mono text-[10px] text-[#c8d4e0] truncate max-w-[160px]">{scheme.name.toUpperCase()}</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Left — Title block */}
            <div className="flex-1 min-w-0">
              {/* Category + status badges */}
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <div
                  className="flex items-center gap-1.5 px-3 py-1.5"
                  style={{ background: `${accentColor}20`, borderRadius: "var(--radius-sm)", border: `1px solid ${accentColor}40` }}
                >
                  <CategoryIcon size={12} strokeWidth={2} style={{ color: accentColor }} />
                  <span className="label-mono text-[10px]" style={{ color: accentColor }}>{scheme.category.toUpperCase()}</span>
                </div>
                {scheme.state !== "all" && (
                  <div className="flex items-center gap-1 px-3 py-1.5" style={{ background: "rgba(255,255,255,0.06)", borderRadius: "var(--radius-sm)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <MapPin size={10} strokeWidth={2} style={{ color: "#c8d4e0" }} />
                    <span className="label-mono text-[10px] text-[#c8d4e0]">{scheme.state.toUpperCase()} ONLY</span>
                  </div>
                )}
                {isExpired && (
                  <div className="flex items-center gap-1 px-3 py-1.5" style={{ background: "rgba(255,71,87,0.15)", borderRadius: "var(--radius-sm)", border: "1px solid rgba(255,71,87,0.3)" }}>
                    <AlertTriangle size={10} strokeWidth={2} style={{ color: "var(--color-accent)" }} />
                    <span className="label-mono text-[10px]" style={{ color: "var(--color-accent)" }}>APPLICATIONS CLOSED</span>
                  </div>
                )}
              </div>

              <h1 className="font-sans font-black text-3xl md:text-4xl text-white leading-tight mb-3 tracking-tight">
                {scheme.name}
              </h1>

              <div className="flex items-center gap-2 mb-8">
                <Building2 size={14} strokeWidth={1.5} style={{ color: "#a8b2d1" }} />
                <span className="text-sm font-medium" style={{ color: "#c8d4e0" }}>{scheme.department}</span>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={scheme.officialLinks?.apply || scheme.officialLinks?.officialWebsite || "#"}
                  target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-7 py-3.5 font-mono font-bold text-sm uppercase tracking-widest text-white transition-all active:translate-y-[2px]"
                  style={{ background: "var(--color-accent)", borderRadius: "var(--radius-md)", boxShadow: "6px 6px 12px rgba(166,50,60,0.5), -4px -4px 8px rgba(255,100,110,0.2)" }}
                >
                  APPLY ONLINE <ExternalLink size={14} strokeWidth={2} />
                </a>
                <button
                  className="flex items-center gap-2 px-5 py-3.5 font-mono font-bold text-xs uppercase tracking-wider transition-all active:translate-y-[1px]"
                  style={{ background: "var(--surface-dark)", borderRadius: "var(--radius-md)", boxShadow: "4px 4px 8px rgba(0,0,0,0.4), -2px -2px 5px rgba(255,255,255,0.05)", color: "#c8d4e0", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <Heart size={14} strokeWidth={1.5} /> SAVE
                </button>
                <button
                  className="w-12 h-12 flex items-center justify-center transition-all active:translate-y-[1px]"
                  style={{ background: "var(--surface-dark)", borderRadius: "var(--radius-md)", boxShadow: "4px 4px 8px rgba(0,0,0,0.4), -2px -2px 5px rgba(255,255,255,0.05)", color: "#c8d4e0", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <Share2 size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Right — Benefit panel (floating card on dark) */}
            <div
              className="w-full lg:w-[300px] shrink-0 screw-corners"
              style={{ background: "var(--surface-page)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-floating)", padding: "28px" }}
            >
              <SectionLabel>// CORE BENEFIT</SectionLabel>
              <div className="font-mono font-black text-4xl mb-5 leading-none" style={{ color: accentColor }}>
                {scheme.benefitAmount}
              </div>

              <div className="space-y-0">
                <InfoRow
                  label="DEADLINE"
                  value={scheme.deadline
                    ? new Date(scheme.deadline).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })
                    : "OPEN YEAR ROUND"}
                />
                <InfoRow label="STATE" value={scheme.state === "all" ? "ALL INDIA" : scheme.state.toUpperCase()} />
                <InfoRow label="CATEGORY" value={scheme.category.toUpperCase()} />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {scheme.tags.slice(0, 4).map(tag => (
                  <span
                    key={tag}
                    className="label-mono text-[9px] px-2 py-1"
                    style={{ color: "var(--text-muted)", boxShadow: "var(--shadow-recessed)", borderRadius: "var(--radius-sm)" }}
                  >
                    #{tag.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── STICKY SECTION TABS ── */}
      <div
        className="sticky top-0 z-20"
        style={{ background: "var(--surface-page)", borderBottom: "2px solid #babecc", boxShadow: "0 4px 8px rgba(163,177,198,0.3)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto hide-scrollbar gap-1 py-3">
            {["Overview", "Eligibility", "Documents", "How to Apply", "FAQs"].map((tab) => (
              <a
                key={tab}
                href={`#${tab.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex-shrink-0 px-4 py-2 font-mono font-bold text-xs uppercase tracking-wider transition-all duration-150 whitespace-nowrap"
                style={{ color: "var(--text-secondary)", borderRadius: "var(--radius-sm)" }}
              >
                {tab}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex gap-10 items-start">

        {/* Left column */}
        <div className="flex-1 min-w-0 space-y-16">

          {/* OVERVIEW */}
          <section id="overview" className="scroll-mt-32">
            <SectionLabel>// SECTION 01</SectionLabel>
            <SectionHeading>OVERVIEW</SectionHeading>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
              {scheme.description}
            </p>

            {/* Highlights panel */}
            <div
              className="p-6 screw-corners"
              style={{ background: "var(--surface-page)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Info size={16} strokeWidth={1.5} style={{ color: "var(--color-accent)" }} />
                <span className="label-mono text-[10px]" style={{ color: "var(--color-accent)" }}>KEY HIGHLIGHTS</span>
              </div>
              <ul className="space-y-3">
                {[
                  "Direct Benefit Transfer (DBT) enabled — money goes straight to bank account",
                  "No middleman required — apply directly on the official portal",
                  "Track application status online using Aadhaar number",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ boxShadow: "var(--shadow-recessed)" }}>
                      <CheckCircle2 size={12} strokeWidth={2} style={{ color: "var(--color-accent)" }} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ELIGIBILITY */}
          <section id="eligibility" className="scroll-mt-32">
            <SectionLabel>// SECTION 02</SectionLabel>
            <SectionHeading>ELIGIBILITY</SectionHeading>
            <div className="mb-10">
              <EligibilityChecker scheme={scheme} />
            </div>

            <span className="label-mono text-[10px] block mb-4" style={{ color: "var(--text-muted)" }}>DETAILED CRITERIA TABLE</span>
            <div
              className="overflow-hidden"
              style={{ borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-recessed)" }}
            >
              <table className="w-full text-left text-sm">
                <tbody>
                  {[
                    ["AGE LIMIT", `${scheme.eligibility.minAge ?? "No min"} – ${scheme.eligibility.maxAge ?? "No max"} years`],
                    ["GENDER", scheme.eligibility.gender],
                    ["INCOME LIMIT", scheme.eligibility.incomeLimit ? `Below ₹${(scheme.eligibility.incomeLimit / 100000).toFixed(1)}L/year` : "No limit"],
                    ["OCCUPATION", scheme.eligibility.occupation.join(", ")],
                    ["CASTE / CATEGORY", scheme.eligibility.caste.join(", ")],
                  ].map(([key, val], i) => (
                    <tr
                      key={i}
                      style={{ borderBottom: "1px solid #babecc", background: i % 2 === 0 ? "var(--surface-recessed)" : "var(--surface-page)" }}
                    >
                      <td className="px-5 py-4 label-mono text-[10px] w-1/3" style={{ color: "var(--text-muted)" }}>{key}</td>
                      <td className="px-5 py-4 font-mono text-xs font-bold capitalize" style={{ color: "var(--text-primary)" }}>{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents" className="scroll-mt-32">
            <SectionLabel>// SECTION 03</SectionLabel>
            <DocumentChecklist documents={scheme.documents || []} schemeName={scheme.name} />
          </section>

          {/* HOW TO APPLY */}
          <section id="how-to-apply" className="scroll-mt-32">
            <SectionLabel>// SECTION 04</SectionLabel>
            <SectionHeading>HOW TO APPLY</SectionHeading>

            <div
              className="relative p-6 md:p-8 screw-corners-full overflow-hidden"
              style={{ background: "var(--surface-page)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)" }}
            >
              {/* Online badge */}
              <div className="absolute top-5 right-5">
                <div className="flex items-center gap-1.5 px-2.5 py-1.5" style={{ background: "var(--surface-page)", borderRadius: "var(--radius-sm)", boxShadow: "var(--shadow-recessed)" }}>
                  <span className="led led-green w-2 h-2" />
                  <span className="label-mono text-[9px]" style={{ color: "var(--color-success)" }}>ONLINE PROCESS</span>
                </div>
              </div>

              {/* Steps */}
              <div className="space-y-6 relative mt-2">
                {/* Connector pipe */}
                <div
                  className="absolute left-5 top-12 bottom-12 w-3 rounded-full"
                  style={{ boxShadow: "inset 2px 2px 4px rgba(0,0,0,0.15), inset -1px -1px 2px rgba(255,255,255,0.6)", background: "var(--surface-recessed)" }}
                />
                {scheme.howToApplySteps?.map((step, i) => (
                  <div key={i} className="flex gap-5 relative z-10">
                    <div
                      className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center font-mono font-black text-sm"
                      style={{ background: "var(--surface-page)", boxShadow: "var(--shadow-floating)", color: "var(--color-accent)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="pt-2.5 flex-1">
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{step}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CSC offline option */}
              <div
                className="mt-8 pt-6 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center"
                style={{ borderTop: "2px solid #babecc" }}
              >
                <div>
                  <p className="label-mono text-[10px] mb-1" style={{ color: "var(--color-accent)" }}>// OFFLINE OPTION</p>
                  <p className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                    Visit your nearest Common Service Centre (CSC) with physical document copies.
                  </p>
                </div>
                <a
                  href="https://locator.csccloud.in/" target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-3 font-mono font-bold text-xs uppercase tracking-wider flex-shrink-0 transition-all active:translate-y-[1px]"
                  style={{ background: "var(--surface-page)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-floating)", color: "var(--text-primary)" }}
                >
                  <Map size={14} strokeWidth={1.5} /> LOCATE CSC
                </a>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section id="faqs" className="scroll-mt-32">
            <SectionLabel>// SECTION 05</SectionLabel>
            <SectionHeading>FAQS</SectionHeading>
            <div className="space-y-3">
              {[
                { q: "How long does approval take?", a: "Typically 15–45 working days depending on the department." },
                { q: "Can I apply without an Aadhaar Card?", a: "No, Aadhaar is mandatory for DBT schemes to prevent fraud." },
                { q: "Where does the money go?", a: "Directly to the bank account seeded with your Aadhaar number." },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="p-5 screw-corners"
                  style={{ background: "var(--surface-page)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-card)" }}
                >
                  <h4 className="font-sans font-bold text-sm mb-2" style={{ color: "var(--text-primary)" }}>{faq.q}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ── RIGHT SIDEBAR ── */}
        <aside className="hidden lg:flex flex-col w-72 shrink-0 sticky top-28 gap-5">

          {/* Ask AI box */}
          <div
            className="screw-corners p-6 text-center"
            style={{ background: "var(--surface-page)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)" }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ boxShadow: "var(--shadow-recessed)" }}
            >
              <MessageSquare size={22} strokeWidth={1.5} style={{ color: "var(--color-accent)" }} />
            </div>
            <span className="label-mono text-[10px] block mb-2" style={{ color: "var(--color-accent)" }}>// AI ASSISTANT</span>
            <h3 className="font-sans font-bold text-base mb-2" style={{ color: "var(--text-primary)" }}>Have Questions?</h3>
            <p className="text-xs mb-5 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Our AI speaks 22 languages and knows everything about {scheme.name}.
            </p>
            <Link
              href={`/chat?scheme=${scheme.id}`}
              className="w-full flex items-center justify-center gap-2 py-3 font-mono font-bold text-xs uppercase tracking-wider text-white transition-all active:translate-y-[1px]"
              style={{ background: "var(--color-accent)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-floating)" }}
            >
              ASK SCHEMEBOT
            </Link>
          </div>

          {/* Helpline box */}
          <div
            className="p-6 text-center"
            style={{ background: "var(--surface-dark)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-floating)" }}
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4" style={{ boxShadow: "4px 4px 8px rgba(0,0,0,0.4)" }}>
              <PhoneCall size={18} strokeWidth={1.5} style={{ color: "#c8d4e0" }} />
            </div>
            <span className="label-mono text-[10px] block mb-1 text-[#c8d4e0]">// HELPLINE</span>
            <p className="text-xs mb-3 text-[#a8b2d1]">Mon–Fri, 10 AM to 5 PM</p>
            <a
              href={`tel:${scheme.helpline || "1800114000"}`}
              className="font-mono font-black text-xl tracking-wider"
              style={{ color: "var(--color-success)" }}
            >
              {scheme.helpline || "1800-11-4000"}
            </a>
          </div>

          {/* Related schemes */}
          {relatedSchemes.length > 0 && (
            <div>
              <span className="label-mono text-[10px] block mb-4 px-1" style={{ color: "var(--text-muted)" }}>// YOU MAY ALSO QUALIFY</span>
              <div className="space-y-3">
                {relatedSchemes.map(rs => (
                  <Link
                    key={rs.id}
                    href={`/schemes/${rs.id}`}
                    className="block group transition-all duration-150 hover:-translate-y-[2px] p-4"
                    style={{ background: "var(--surface-page)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-card)" }}
                    onMouseEnter={undefined}
                  >
                    <span className="label-mono text-[9px] block mb-1" style={{ color: "var(--text-muted)" }}>{rs.category.toUpperCase()}</span>
                    <h4 className="font-sans font-bold text-xs mb-1.5 leading-tight" style={{ color: "var(--text-primary)" }}>
                      {rs.name}
                    </h4>
                    <span className="font-mono font-bold text-xs" style={{ color: accentColor }}>
                      {rs.benefitAmount}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}