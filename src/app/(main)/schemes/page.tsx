"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Search, SlidersHorizontal, X, ChevronDown,
  Wheat, HeartPulse, GraduationCap, Baby, Home, Briefcase,
  Building2, Users, ShieldCheck, Landmark, HandCoins, ArrowRight,
  Bookmark, LayoutGrid
} from "lucide-react";
import SchemeFilters from "@/components/schemes/SchemeFilters";
import SchemeGrid from "@/components/schemes/SchemeGrid";
import { SchemeGridSkeleton } from "@/components/schemes/SchemeCardSkeleton";
import ErrorBoundary from "@/components/shared/ErrorBoundary";
import { Scheme } from "@/types";
import { useProfileContext } from "@/context/ProfileContext";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { id: "agriculture", label: "Agriculture", icon: Wheat,        color: "#22c55e" },
  { id: "health",      label: "Health",      icon: HeartPulse,   color: "#ff4757" },
  { id: "education",   label: "Education",   icon: GraduationCap,color: "#3b82f6" },
  { id: "women",       label: "Women",       icon: Baby,         color: "#ec4899" },
  { id: "housing",     label: "Housing",     icon: Home,         color: "#f59e0b" },
  { id: "business",    label: "Business",    icon: Briefcase,    color: "#8b5cf6" },
  { id: "employment",  label: "Employment",  icon: Users,        color: "#14b8a6" },
  { id: "insurance",   label: "Insurance",   icon: ShieldCheck,  color: "#06b6d4" },
  { id: "pension",     label: "Pension",     icon: Landmark,     color: "#6366f1" },
  { id: "state",       label: "State",       icon: Building2,    color: "#f97316" },
];

/* Recessed select — Industrial style */
function RecessedSelect({ value, onChange, children }: { value: string; onChange: (v: string) => void; children: React.ReactNode }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="appearance-none pl-3 pr-8 py-2 text-xs font-mono font-bold outline-none cursor-pointer"
        style={{
          background: "var(--surface-page)",
          borderRadius: "var(--radius-sm)",
          boxShadow: "var(--shadow-recessed)",
          color: "var(--text-secondary)",
          border: "none",
        }}
      >
        {children}
      </select>
      <ChevronDown size={12} strokeWidth={2} className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "var(--text-muted)" }} />
    </div>
  );
}

export default function SchemesPage() {
  const [schemes, setSchemes] = useState<Scheme[]>([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("relevant");
  const [filters, setFilters] = useState({ category: [] as string[], state: "all", gender: "all", income: "", forMe: false });
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { profile, matchedSchemes, hasProfile } = useProfileContext();
  const [filterMode, setFilterMode] = useState<"all" | "mine">("all");

  useEffect(() => {
    if (hasProfile && mounted && !window.location.search.includes("all")) {
      setFilterMode("mine");
    }
  }, [hasProfile, mounted]);

  useEffect(() => { 
    setMounted(true); 
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("forMe") === "true") {
        setFilters(prev => ({ ...prev, forMe: true }));
      }
    }
  }, []);

  const activeFilters = { ...filters };
  if (filterMode === "mine" && profile) {
    if (profile.state) activeFilters.state = profile.state;
    if (profile.gender) activeFilters.gender = profile.gender;
    if (profile.annualIncome) activeFilters.income = profile.annualIncome;
  }

  const fetchSchemes = useCallback(async (pageNum: number, reset = false) => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ page: pageNum.toString(), limit: "12", sort });
      if (search) params.append("search", search);
      if (activeFilters.category.length) params.append("category", activeFilters.category.join(","));
      if (activeFilters.state !== "all") params.append("state", activeFilters.state);
      if (activeFilters.gender !== "all") params.append("gender", activeFilters.gender);
      if (activeFilters.income) params.append("income", activeFilters.income);
      const res = await fetch(`/api/schemes?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      if (reset) setSchemes(data.schemes); else setSchemes(prev => [...prev, ...data.schemes]);
      setTotal(data.total);
      setHasMore(pageNum < data.totalPages);
    } catch (err) { console.error(err); } finally { setLoading(false); }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, sort, activeFilters.category.join(","), activeFilters.state, activeFilters.gender, activeFilters.income, activeFilters.forMe]);

  useEffect(() => {
    setPage(1);
    fetchSchemes(1, true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, sort, activeFilters.category.join(","), activeFilters.state, activeFilters.gender, activeFilters.income, filterMode]);

  const activeChips = [] as { label: string; onRemove: () => void }[];
  if (search) activeChips.push({ label: `"${search}"`, onRemove: () => setSearch("") });
  activeFilters.category.forEach(cat => activeChips.push({ label: cat, onRemove: () => setFilters(p => ({ ...p, category: p.category.filter(c => c !== cat) })) }));
  if (activeFilters.state !== "all") activeChips.push({ label: activeFilters.state, onRemove: () => setFilters(p => ({ ...p, state: "all" })) });
  if (activeFilters.income) activeChips.push({ label: "Income Limit", onRemove: () => setFilters(p => ({ ...p, income: "" })) });
  if (filterMode === "mine") activeChips.push({ label: "My Matches", onRemove: () => setFilterMode("all") });

  return (
    <div className="flex flex-col min-h-dvh" style={{ background: "var(--surface-page)" }}>

      {/* ── HEADER PANEL ── */}
      <div style={{ background: "var(--surface-dark)", borderBottom: "3px solid #1a2530", boxShadow: "0 4px 16px rgba(0,0,0,0.25)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">

          {/* Title row */}
          <div className="flex items-center gap-2 mb-4">
            <span className="led led-green" />
            <span className="label-mono text-[#c8d4e0] text-[10px]">SCHEME DATABASE // {total || "150+"} RECORDS</span>
          </div>
          <h1 className="font-sans font-black text-3xl sm:text-4xl text-white tracking-tight mb-8">
            FIND YOUR BENEFITS
          </h1>

          {/* Search bar — recessed well */}
          <div className="max-w-2xl flex gap-3 mb-7">
            <div
              className="relative flex-1 flex items-center"
              style={{ background: "var(--surface-page)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-recessed)" }}
            >
              <Search size={16} strokeWidth={1.5} className="absolute left-4 shrink-0" style={{ color: "var(--text-muted)" }} />
              <input
                type="text"
                placeholder="Search by name, keyword, or department..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-11 pr-10 py-3.5 bg-transparent outline-none text-sm font-mono"
                style={{ color: "var(--text-primary)" }}
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3" style={{ color: "var(--text-muted)" }}>
                  <X size={14} strokeWidth={2} />
                </button>
              )}
            </div>
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden flex-shrink-0 w-[52px] flex items-center justify-center transition-all active:translate-y-[1px]"
              style={{ background: "var(--surface-page)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-floating)", color: "var(--text-secondary)" }}
            >
              <SlidersHorizontal size={18} strokeWidth={1.5} />
            </button>
          </div>

          {/* Filter Mode Toggle — Industrial Segmented Control */}
          <div
            className="inline-flex p-1 mb-6"
            style={{
              background: "var(--surface-page)",
              borderRadius: "var(--radius-md)",
              boxShadow: "var(--shadow-recessed)",
            }}
          >
            <button
              onClick={() => setFilterMode("mine")}
              className="relative flex items-center gap-2 px-5 py-2 transition-all duration-150 active:translate-y-[1px]"
              style={{
                borderRadius: "var(--radius-sm)",
                boxShadow: filterMode === "mine" ? "var(--shadow-pressed)" : "none",
                background: filterMode === "mine" ? "var(--color-accent)" : "transparent",
                color: filterMode === "mine" ? "#ffffff" : "var(--text-muted)",
              }}
            >
              <Bookmark size={13} strokeWidth={filterMode === "mine" ? 2.5 : 1.5} />
              <span className="label-mono text-[11px]">MY SCHEMES</span>
              {filterMode === "mine" && (
                <span
                  className="ml-1 px-1.5 py-0.5 rounded-sm font-mono font-black text-[9px]"
                  style={{ background: "rgba(255,255,255,0.2)", color: "#fff" }}
                >
                  {matchedSchemes.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setFilterMode("all")}
              className="relative flex items-center gap-2 px-5 py-2 transition-all duration-150 active:translate-y-[1px]"
              style={{
                borderRadius: "var(--radius-sm)",
                boxShadow: filterMode === "all" ? "var(--shadow-pressed)" : "none",
                background: filterMode === "all" ? "var(--color-accent)" : "transparent",
                color: filterMode === "all" ? "#ffffff" : "var(--text-muted)",
              }}
            >
              <LayoutGrid size={13} strokeWidth={filterMode === "all" ? 2.5 : 1.5} />
              <span className="label-mono text-[11px]">ALL SCHEMES</span>
            </button>
          </div>

          {/* Category chips — horizontal scroll */}
          <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
            {CATEGORIES.map(cat => {
              const Icon = cat.icon;
              const isSelected = filters.category.includes(cat.id);
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    const cur = new Set(filters.category);
                    if (cur.has(cat.id)) cur.delete(cat.id); else cur.add(cat.id);
                    setFilters({ ...filters, category: Array.from(cur) });
                  }}
                  className="flex-shrink-0 flex items-center gap-1.5 px-3 py-2 transition-all duration-150 active:translate-y-[1px]"
                  style={{
                    borderRadius: "var(--radius-sm)",
                    boxShadow: isSelected
                      ? `inset 2px 2px 5px rgba(0,0,0,0.4), inset -1px -1px 3px rgba(255,255,255,0.04)`
                      : `4px 4px 8px rgba(0,0,0,0.5), -2px -2px 5px rgba(255,255,255,0.06)`,
                    background: isSelected ? `${cat.color}22` : "#2a3540",
                    color: isSelected ? cat.color : "#d1dce8",
                    border: isSelected ? `1px solid ${cat.color}60` : "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <Icon size={12} strokeWidth={2} style={{ color: isSelected ? cat.color : "#d1dce8" }} />
                  <span className="label-mono text-[10px]" style={{ color: "inherit" }}>{cat.label.toUpperCase()}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── FILTER BAR ── Desktop */}
      <div className="sticky top-0 z-[150]" style={{ background: "var(--surface-page)", borderBottom: "2px solid #babecc", boxShadow: "0 4px 8px rgba(163,177,198,0.3)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex items-center gap-4 py-3">
            <div className="flex items-center gap-1.5" style={{ color: "var(--text-muted)" }}>
              <SlidersHorizontal size={14} strokeWidth={1.5} />
              <span className="label-mono text-[10px]">FILTER</span>
            </div>
            <div className="w-px h-5 bg-[#babecc]" />
            <div className="flex-1 flex gap-3">
              <RecessedSelect value={filters.state} onChange={v => setFilters({ ...filters, state: v })}>
                <option value="all">All States</option>
                <option value="gj">Gujarat</option>
                <option value="mh">Maharashtra</option>
                <option value="up">Uttar Pradesh</option>
                <option value="rj">Rajasthan</option>
                <option value="ka">Karnataka</option>
              </RecessedSelect>
              <RecessedSelect value={filters.gender} onChange={v => setFilters({ ...filters, gender: v })}>
                <option value="all">All Genders</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </RecessedSelect>
              <RecessedSelect value={filters.income} onChange={v => setFilters({ ...filters, income: v })}>
                <option value="">Any Income</option>
                <option value="below-1l">Below ₹1 Lakh</option>
                <option value="1-3l">₹1L – ₹3L</option>
                <option value="3-6l">₹3L – ₹6L</option>
                <option value="6-12l">₹6L – ₹12L</option>
                <option value="above-12l">Above ₹12L</option>
              </RecessedSelect>
            </div>
            <div className="w-px h-5 bg-[#babecc]" />
            <div className="flex items-center gap-2">
              <span className="label-mono text-[10px]" style={{ color: "var(--text-muted)" }}>SORT</span>
              <RecessedSelect value={sort} onChange={setSort}>
                <option value="relevant">Relevant</option>
                <option value="views">Popular</option>
                <option value="deadline">Deadline</option>
              </RecessedSelect>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">

        {/* Active chips + count */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
          <div className="flex items-center flex-wrap gap-2">
            <span className="font-mono font-black text-2xl" style={{ color: "var(--text-primary)" }}>{filterMode === "mine" ? matchedSchemes.length : total}</span>
            <span className="label-mono text-[10px]" style={{ color: "var(--text-muted)" }}>SCHEMES FOUND</span>
            {activeChips.map((chip, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 px-2.5 py-1 label-mono text-[9px]"
                style={{ borderRadius: "var(--radius-sm)", boxShadow: "var(--shadow-recessed)", color: "var(--color-accent)" }}
              >
                {chip.label.toUpperCase()}
                <button onClick={chip.onRemove} className="hover:opacity-70 transition-opacity">
                  <X size={10} strokeWidth={2.5} />
                </button>
              </span>
            ))}
          </div>

          {/* Mobile sort */}
          <div className="relative flex-shrink-0 w-full sm:w-auto md:hidden">
            <RecessedSelect value={sort} onChange={setSort}>
              <option value="relevant">Most Relevant</option>
              <option value="views">Most Popular</option>
              <option value="deadline">Deadline Soon</option>
            </RecessedSelect>
          </div>
        </div>

        <ErrorBoundary message="We're having trouble loading the schemes. Please try refreshing.">
          <React.Suspense fallback={<SchemeGridSkeleton count={8} />}>
            <SchemeGrid
              schemes={filterMode === "mine" ? matchedSchemes : schemes}
              loading={filterMode === "all" && loading && page === 1}
              hasMore={filterMode === "all" ? hasMore : false}
              total={filterMode === "mine" ? matchedSchemes.length : total}
              onLoadMore={() => { if(filterMode === "all") { const next = page + 1; setPage(next); fetchSchemes(next); } }}
            />
          </React.Suspense>
        </ErrorBoundary>
      </div>

      {/* Mobile Filter Drawer */}
      {mobileFiltersOpen && (
        <div className="md:hidden fixed inset-0 z-[500] flex flex-col justify-end" onClick={() => setMobileFiltersOpen(false)}>
          <div className="absolute inset-0 bg-[var(--surface-dark)]/60" />
          <div
            className="relative w-full h-[85vh] rounded-t-2xl overflow-hidden animate-in slide-in-from-bottom-full duration-300 flex flex-col"
            style={{ background: "var(--surface-page)", boxShadow: "var(--shadow-floating)" }}
            onClick={e => e.stopPropagation()}
          >
            {/* Drag handle */}
            <div className="w-10 h-1 rounded-full mx-auto mt-3 mb-2 flex-shrink-0" style={{ background: "#babecc" }} />
            <div className="px-4 pb-2 flex items-center justify-between">
              <span className="label-mono text-[11px]" style={{ color: "var(--text-muted)" }}>FILTERS</span>
              <button onClick={() => setMobileFiltersOpen(false)} style={{ color: "var(--text-muted)" }}>
                <X size={18} strokeWidth={2} />
              </button>
            </div>
            <div className="px-4 flex-1 overflow-y-auto pb-safe">
              <SchemeFilters filters={filters} onChange={setFilters} onCloseMobile={() => setMobileFiltersOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}