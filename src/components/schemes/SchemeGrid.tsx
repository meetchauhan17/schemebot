"use client";

import React from "react";
import SchemeCard from "./SchemeCard";
import type { Scheme } from "@/types";
import { SearchX, Loader2, RefreshCw } from "lucide-react";
import SchemeCardSkeleton from "./SchemeCardSkeleton";

interface SchemeGridProps {
  schemes: Scheme[];
  loading: boolean;
  hasMore: boolean;
  onLoadMore: () => void;
  total: number;
}

export default function SchemeGrid({ schemes, loading, hasMore, onLoadMore, total }: SchemeGridProps) {

  if (!loading && schemes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center px-4">
        {/* Recessed icon well */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
          style={{ boxShadow: "var(--shadow-recessed)" }}
        >
          <SearchX size={36} strokeWidth={1} style={{ color: "var(--text-muted)" }} />
        </div>
        <span className="label-mono text-[var(--color-accent)] block mb-3 text-[10px]">// NO RECORDS FOUND</span>
        <h3 className="font-sans font-black text-xl text-[var(--text-primary)] mb-2">
          NO SCHEMES MATCH YOUR FILTERS
        </h3>
        <p className="text-sm text-[var(--text-secondary)] max-w-sm mx-auto">
          Try adjusting your search criteria or clearing some filters to see more results.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {schemes.map(scheme => (
          <div key={scheme.id}>
            <SchemeCard scheme={scheme} />
          </div>
        ))}
        {loading && schemes.length === 0 &&
          Array.from({ length: 6 }).map((_, i) => <SchemeCardSkeleton key={i} />)
        }
      </div>

      {/* ── Load More ── */}
      {hasMore && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={onLoadMore}
            disabled={loading}
            className="flex items-center gap-3 px-8 py-4 font-mono font-bold text-sm uppercase tracking-widest transition-all duration-150 active:translate-y-[2px] disabled:opacity-60"
            style={{
              background: "var(--surface-page)",
              borderRadius: "var(--radius-md)",
              boxShadow: loading ? "var(--shadow-pressed)" : "var(--shadow-floating)",
              color: loading ? "var(--text-muted)" : "var(--text-primary)",
            }}
          >
            {loading
              ? <Loader2 size={16} strokeWidth={2} className="animate-spin" style={{ color: "var(--color-accent)" }} />
              : <RefreshCw size={16} strokeWidth={1.5} style={{ color: "var(--color-accent)" }} />
            }
            {loading ? "LOADING..." : "LOAD MORE SCHEMES"}
          </button>
        </div>
      )}

      {/* All loaded */}
      {!hasMore && schemes.length > 0 && (
        <div className="mt-10 flex items-center justify-center gap-3">
          <div className="h-px flex-1 max-w-[120px]" style={{ background: "var(--shadow-dark)" }} />
          <span className="label-mono text-[10px]" style={{ color: "var(--text-muted)" }}>
            ALL {total} SCHEMES LOADED
          </span>
          <div className="h-px flex-1 max-w-[120px]" style={{ background: "var(--shadow-dark)" }} />
        </div>
      )}
    </div>
  );
}