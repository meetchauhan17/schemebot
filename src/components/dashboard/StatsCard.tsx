"use client";

import React, { useEffect, useState } from "react";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: number | string;
  icon: LucideIcon;
  trend?: string;
  colorVariant: "blue" | "green" | "orange" | "purple";
  prefix?: string;
  suffix?: string;
}

const variantColors: Record<string, string> = {
  blue:   "#3b82f6",
  green:  "#22c55e",
  orange: "#f59e0b",
  purple: "#8b5cf6",
};

export default function StatsCard({ title, value, icon: Icon, trend, colorVariant, prefix = "", suffix = "" }: StatsCardProps) {
  const [displayValue, setDisplayValue] = useState<number | string>(typeof value === "number" ? 0 : value);
  const color = variantColors[colorVariant] ?? "#ff4757";

  useEffect(() => {
    if (typeof value === "number") {
      let start = 0;
      const increment = value / (1500 / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) { setDisplayValue(value); clearInterval(timer); }
        else setDisplayValue(Math.floor(start));
      }, 16);
      return () => clearInterval(timer);
    }
  }, [value]);

  return (
    <div
      className="relative flex flex-col p-6 screw-corners overflow-hidden transition-all duration-300 hover:-translate-y-[2px]"
      style={{
        background: "var(--surface-page)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-card)",
      }}
      onMouseEnter={e => (e.currentTarget.style.boxShadow = "var(--shadow-floating)")}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = "var(--shadow-card)")}
    >
      {/* Vent slots top-right */}
      <div className="absolute top-5 right-5 flex gap-1">
        {[0,1,2].map(i => (
          <div key={i} className="w-[3px] h-4 rounded-full" style={{ background: "var(--surface-recessed)", boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.15)" }} />
        ))}
      </div>

      <div className="flex justify-between items-start mb-5">
        <h3 className="label-mono text-[10px]" style={{ color: "var(--text-muted)" }}>{title.toUpperCase()}</h3>
        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ boxShadow: "var(--shadow-recessed)" }}>
          <Icon size={18} strokeWidth={1.5} style={{ color }} />
        </div>
      </div>

      <div className="font-mono font-black text-4xl mb-3 tracking-tight" style={{ color: "var(--text-primary)" }}>
        <span style={{ color }}>{prefix}</span>
        {typeof displayValue === "number" ? displayValue.toLocaleString("en-IN") : displayValue}
        {suffix}
      </div>

      {trend && (
        <div className="inline-flex items-center px-2.5 py-1" style={{ borderRadius: "var(--radius-sm)", boxShadow: "var(--shadow-recessed)" }}>
          <span className="label-mono text-[10px]" style={{ color: trend.startsWith("↑") ? "var(--color-success)" : trend.startsWith("↓") ? "var(--color-danger)" : "var(--text-muted)" }}>
            {trend}
          </span>
        </div>
      )}
    </div>
  );
}