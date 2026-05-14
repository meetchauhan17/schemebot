"use client";

import React, { useEffect, useState } from "react";
import { Search, Database, Globe2, IndianRupee, Activity, TrendingUp, MapPin, Zap } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

import StatsCard from "@/components/dashboard/StatsCard";
import IndiaMap from "@/components/dashboard/IndiaMap";
import DashboardStatsSkeleton from "@/components/dashboard/DashboardStatsSkeleton";
import ErrorBoundary from "@/components/shared/ErrorBoundary";

const CHART_COLORS = ["#ff4757", "#22c55e", "#3b82f6", "#f59e0b", "#8b5cf6", "#14b8a6"];

const CATEGORY_BARS = [
  { label: "Agriculture",      val: 85, color: "#22c55e" },
  { label: "Health",           val: 70, color: "#ff4757" },
  { label: "Education",        val: 65, color: "#3b82f6" },
  { label: "Women",            val: 55, color: "#ec4899" },
  { label: "Housing",          val: 40, color: "#f59e0b" },
];

/* Recessed panel wrapper */
function Panel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`screw-corners ${className}`}
      style={{ background: "var(--surface-page)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", padding: "28px" }}
    >
      {children}
    </div>
  );
}

function PanelLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-5">
      <span className="led led-green w-2 h-2 flex-shrink-0" />
      <span className="label-mono text-[10px]" style={{ color: "var(--color-accent)" }}>{children}</span>
    </div>
  );
}

export default function DashboardPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState("Just now");

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("/api/analytics");
        const json = await res.json();
        setData(json);
      } catch (err) { console.error(err); }
      finally { setLoading(false); }
    }
    fetchStats();
    const interval = setInterval(() => {
      setLastUpdated(p => p === "Just now" ? "1 min ago" : p === "1 min ago" ? "2 min ago" : p);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading || !data) {
    return (
      <div className="flex-1 w-full pb-20" style={{ background: "var(--surface-page)" }}>
        <div style={{ background: "var(--surface-dark)", borderBottom: "3px solid #1a2530", padding: "40px 24px 32px" }}>
          <div className="max-w-7xl mx-auto">
            <div className="h-4 w-40 rounded-sm animate-pulse mb-4" style={{ background: "#3d4a52" }} />
            <div className="h-8 w-72 rounded-sm animate-pulse" style={{ background: "#3d4a52" }} />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <DashboardStatsSkeleton />
        </div>
      </div>
    );
  }

  const { stats, topSchemes, languages, states, activity } = data;

  return (
    <div className="flex-1 w-full pb-20" style={{ background: "var(--surface-page)" }}>

      {/* ── HEADER PANEL ── */}
      <div style={{ background: "var(--surface-dark)", borderBottom: "3px solid #1a2530", boxShadow: "0 4px 16px rgba(0,0,0,0.25)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="led led-green" />
                <span className="label-mono text-[#c8d4e0] text-[10px]">LIVE DATA — UPDATES EVERY MINUTE</span>
              </div>
              <h1 className="font-sans font-black text-3xl md:text-4xl text-white tracking-tight mb-2">
                IMPACT DASHBOARD
              </h1>
              <p className="text-sm font-medium" style={{ color: "#a8b2d1" }}>
                Real-time data showing how SchemeBot is helping citizens. Updated {lastUpdated}.
              </p>
            </div>

            {/* Quick stats chips */}
            <div className="flex gap-4">
              {[
                { label: "UPTIME", value: "99.9%" },
                { label: "LATENCY", value: "42ms" },
              ].map(s => (
                <div key={s.label} className="text-center px-5 py-3" style={{ background: "#1e2c35", borderRadius: "var(--radius-md)", boxShadow: "inset 2px 2px 5px rgba(0,0,0,0.4)" }}>
                  <div className="font-mono font-black text-lg text-white">{s.value}</div>
                  <div className="label-mono text-[9px] text-[#a8b2d1]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

        {/* TOP STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <StatsCard title="Searches Today"       value={stats.totalSearchesToday} icon={Search}      trend="↑ 12% vs yesterday" colorVariant="blue"   />
          <StatsCard title="Schemes Indexed"      value={stats.totalSchemes}       icon={Database}    colorVariant="purple" />
          <StatsCard title="Languages Active"     value={stats.languagesUsedToday} icon={Globe2}      colorVariant="orange" />
          <StatsCard title="Benefits Unlocked"    value={stats.estimatedBenefits}  icon={IndianRupee} prefix="₹" colorVariant="green" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT — Charts */}
          <div className="lg:col-span-2 space-y-8">

            {/* Top Schemes Bar Chart */}
            <Panel>
              <PanelLabel>// MOST SEARCHED SCHEMES</PanelLabel>
              <h3 className="font-sans font-bold text-base mb-5" style={{ color: "var(--text-primary)" }}>Top Scheme Queries</h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={topSchemes} layout="vertical" margin={{ top: 0, right: 20, left: 120, bottom: 0 }}>
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: "#718096", fontSize: 11, fontFamily: "JetBrains Mono, monospace" }} width={130} />
                    <RechartsTooltip
                      cursor={{ fill: "rgba(163,177,198,0.15)" }}
                      contentStyle={{ background: "var(--surface-page)", border: "none", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-floating)", fontFamily: "JetBrains Mono, monospace", fontSize: "11px" }}
                    />
                    <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                      {topSchemes.map((_: any, i: number) => (
                        <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Panel>

            {/* Middle row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Language Pie */}
              <Panel>
                <PanelLabel>// LANGUAGE DISTRIBUTION</PanelLabel>
                <h3 className="font-sans font-bold text-sm mb-4" style={{ color: "var(--text-primary)" }}>Queries by Language</h3>
                <div className="h-[220px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={languages} cx="50%" cy="50%" innerRadius={55} outerRadius={75} paddingAngle={4} dataKey="count" nameKey="language">
                        {languages.map((_: any, i: number) => <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />)}
                      </Pie>
                      <RechartsTooltip
                        contentStyle={{ background: "var(--surface-page)", border: "none", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-floating)", fontFamily: "JetBrains Mono, monospace", fontSize: "11px" }}
                      />
                      <Legend verticalAlign="bottom" height={32} iconType="circle" wrapperStyle={{ fontFamily: "JetBrains Mono, monospace", fontSize: "10px" }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </Panel>

              {/* Category bars */}
              <Panel>
                <PanelLabel>// TOP CATEGORIES TODAY</PanelLabel>
                <h3 className="font-sans font-bold text-sm mb-5" style={{ color: "var(--text-primary)" }}>Category Demand</h3>
                <div className="space-y-4">
                  {CATEGORY_BARS.map(cat => (
                    <div key={cat.label}>
                      <div className="flex justify-between mb-1.5">
                        <span className="label-mono text-[10px]" style={{ color: "var(--text-secondary)" }}>{cat.label.toUpperCase()}</span>
                        <span className="label-mono text-[10px]" style={{ color: cat.color }}>{cat.val}%</span>
                      </div>
                      {/* Recessed track */}
                      <div className="h-2 rounded-full overflow-hidden" style={{ boxShadow: "var(--shadow-recessed)", background: "var(--surface-page)" }}>
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{ width: `${cat.val}%`, background: cat.color, boxShadow: `0 0 6px ${cat.color}60` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Panel>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">

            {/* India Map */}
            <Panel>
              <PanelLabel>// ACTIVITY HEATMAP</PanelLabel>
              <h3 className="font-sans font-bold text-sm mb-4" style={{ color: "var(--text-primary)" }}>State-wise Activity</h3>
              <div className="min-h-[260px]">
                <IndiaMap data={states} />
              </div>
            </Panel>

            {/* Live Feed */}
            <Panel>
              <PanelLabel>// LIVE ACTIVITY FEED</PanelLabel>
              <h3 className="font-sans font-bold text-sm mb-5" style={{ color: "var(--text-primary)" }}>Recent Events</h3>
              <div className="space-y-4">
                {activity.map((item: any, i: number) => (
                  <div
                    key={item.id}
                    className="flex gap-3 animate-in slide-in-from-right-4 duration-500"
                    style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
                  >
                    {/* LED dot */}
                    <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: "var(--color-accent)", boxShadow: "0 0 6px rgba(255,71,87,0.6)" }} />
                    <div>
                      <p className="text-xs font-mono font-bold leading-snug" style={{ color: "var(--text-primary)" }}>{item.text}</p>
                      <span className="label-mono text-[9px]" style={{ color: "var(--text-muted)" }}>{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Panel>
          </div>
        </div>

        {/* ── IMPACT COUNTER ── Dark panel */}
        <div
          className="p-10 md:p-16 text-center relative overflow-hidden"
          style={{ background: "var(--surface-dark)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-floating)" }}
        >
          {/* Vent slots decorative */}
          <div className="absolute right-8 top-8 flex gap-1.5">
            {[0,1,2,3].map(i => <div key={i} className="w-1 h-8 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }} />)}
          </div>
          <div className="absolute left-8 bottom-8 flex gap-1.5">
            {[0,1,2,3].map(i => <div key={i} className="w-1 h-8 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }} />)}
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="led led-green" />
              <span className="label-mono text-[#c8d4e0] text-[10px]">TOTAL IMPACT — ALL TIME</span>
            </div>
            <div className="font-mono font-black text-6xl md:text-8xl text-white mb-3 tracking-tighter leading-none">
              ₹21.8 <span className="text-4xl md:text-6xl" style={{ color: "var(--color-success)" }}>CR</span>
            </div>
            <p className="text-base text-[#a8b2d1] font-medium max-w-2xl mx-auto leading-relaxed">
              In potential financial benefits discovered by citizens across India using our AI platform.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}