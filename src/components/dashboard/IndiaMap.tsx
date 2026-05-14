"use client";

import React, { useState } from "react";

// Extremely simplified pseudo-map for demonstration to keep code small
// In a real app, this would use a high-fidelity SVG path per state
const STATES_SVG = [
  { id: "Gujarat", path: "M 20 50 Q 15 40 10 50 Q 20 60 25 50 Z", x: 15, y: 50 },
  { id: "Maharashtra", path: "M 25 50 Q 40 40 45 60 Q 30 70 20 60 Z", x: 30, y: 55 },
  { id: "Uttar Pradesh", path: "M 40 30 Q 55 20 60 40 Q 45 50 35 40 Z", x: 45, y: 35 },
  { id: "Rajasthan", path: "M 20 30 Q 35 20 40 40 Q 25 50 15 40 Z", x: 25, y: 35 },
  { id: "Karnataka", path: "M 30 65 Q 40 60 45 80 Q 35 90 25 75 Z", x: 35, y: 75 },
  { id: "Tamil Nadu", path: "M 45 80 Q 55 80 50 95 Q 40 90 35 85 Z", x: 45, y: 88 },
  { id: "Bihar", path: "M 60 35 Q 70 30 75 45 Q 65 50 55 40 Z", x: 65, y: 40 },
  { id: "Madhya Pradesh", path: "M 40 40 Q 55 45 50 60 Q 35 55 30 45 Z", x: 45, y: 50 },
];

export default function IndiaMap({ data }: { data: Record<string, number> }) {
  const [hovered, setHovered] = useState<string | null>(null);

  // Helper to determine fill color based on data (0-100)
  const getFill = (stateId: string) => {
    const val = data[stateId] || 0;
    if (val === 0) return "rgba(148, 163, 184, 0.1)"; // slate-400
    if (val < 30) return "rgba(59, 130, 246, 0.3)"; // blue-500 30%
    if (val < 70) return "rgba(59, 130, 246, 0.6)"; // blue-500 60%
    return "rgba(37, 99, 235, 1)"; // blue-600
  };

  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center bg-blue-50/50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
      
      {/* Fallback abstract representation for demonstration */}
      <svg viewBox="0 0 100 100" className="w-full h-full max-w-[400px] p-4 drop-shadow-sm">
        {STATES_SVG.map(state => (
          <path
            key={state.id}
            d={state.path}
            fill={getFill(state.id)}
            stroke={hovered === state.id ? "#fff" : "rgba(255,255,255,0.2)"}
            strokeWidth={hovered === state.id ? 1 : 0.5}
            className="transition-all duration-300 cursor-pointer"
            onMouseEnter={() => setHovered(state.id)}
            onMouseLeave={() => setHovered(null)}
          />
        ))}
        {/* Placeholder outline to signify full map */}
        <path d="M 10 20 L 50 0 L 90 30 L 70 90 L 30 100 Z" fill="none" stroke="rgba(148, 163, 184, 0.2)" strokeDasharray="2 2" />
      </svg>

      {hovered && data[hovered] && (
        <div className="absolute top-4 right-4 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 animate-in fade-in zoom-in-95 pointer-events-none">
          <div className="font-bold text-slate-900 dark:text-white text-sm">{hovered}</div>
          <div className="text-blue-600 dark:text-blue-400 text-xs font-semibold">{data[hovered]} relative activity</div>
        </div>
      )}

      {/* Mobile-only text list overlay since map is abstract */}
      <div className="absolute bottom-4 left-4 right-4 md:hidden bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-3 rounded-xl border border-slate-200 dark:border-slate-700">
        <div className="text-xs font-bold text-slate-500 mb-2 uppercase">Top States Today</div>
        <div className="flex flex-wrap gap-2">
          {Object.entries(data).sort((a,b) => b[1]-a[1]).slice(0,3).map(([k, v]) => (
            <span key={k} className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded text-xs font-bold">{k}</span>
          ))}
        </div>
      </div>

    </div>
  );
}