import React from "react";

export default function SchemeCardSkeleton() {
  const shimmer = {
    background: "var(--surface-recessed)",
    borderRadius: "var(--radius-sm)",
  };

  return (
    <div
      className="animate-pulse overflow-hidden"
      style={{ background: "var(--surface-page)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)" }}
    >
      {/* Top color bar */}
      <div className="h-1 w-full" style={{ background: "var(--surface-recessed)" }} />

      <div className="p-5 space-y-4">
        {/* Badge row */}
        <div className="flex items-center justify-between">
          <div className="h-6 w-16 rounded-sm" style={shimmer} />
          <div className="w-9 h-9 rounded-full" style={shimmer} />
        </div>

        {/* Title */}
        <div className="h-5 w-3/4 rounded-sm" style={shimmer} />
        <div className="h-3 w-1/2 rounded-sm" style={{ ...shimmer, opacity: 0.6 }} />

        {/* Amount */}
        <div className="h-8 w-32 rounded-sm" style={shimmer} />

        {/* Lines */}
        <div className="space-y-2">
          <div className="h-3 w-full rounded-sm" style={{ ...shimmer, opacity: 0.5 }} />
          <div className="h-3 w-5/6 rounded-sm" style={{ ...shimmer, opacity: 0.5 }} />
        </div>

        {/* Tags */}
        <div className="flex gap-2">
          {[0, 1, 2].map(i => <div key={i} className="h-5 w-14 rounded-sm" style={{ ...shimmer, opacity: 0.4 }} />)}
        </div>
      </div>

      {/* Footer strip */}
      <div
        className="px-5 py-3 flex items-center justify-between"
        style={{ background: "var(--surface-recessed)", boxShadow: "inset 0 2px 4px rgba(163,177,198,0.3)" }}
      >
        <div className="h-3 w-20 rounded-sm" style={shimmer} />
        <div className="h-3 w-16 rounded-sm" style={shimmer} />
      </div>
    </div>
  );
}

export function SchemeGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <SchemeCardSkeleton key={i} />
      ))}
    </div>
  );
}
