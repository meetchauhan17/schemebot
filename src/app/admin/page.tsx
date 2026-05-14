import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Database, Eye, Globe2, AlertTriangle, ExternalLink } from "lucide-react";
import Link from "next/link";
import { getDashboardStats, getTopSchemes } from "@/lib/analytics";
import { getAllSchemes } from "@/lib/schemes";

export default async function AdminDashboardPage() {
  const c = await cookies();
  if (!c.has("schemebot_admin_session")) {
    redirect("/admin/login");
  }

  const [stats, topSchemes] = await Promise.all([
    getDashboardStats(),
    getTopSchemes(5)
  ]);

  const allSchemes = getAllSchemes();
  const activeCount = allSchemes.filter(s => {
    if (!s.deadline) return true;
    return new Date(s.deadline) >= new Date();
  }).length;

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Admin Dashboard</h1>
          <p className="text-slate-500 dark:text-slate-400">Welcome back. Here's what's happening today.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/dashboard" target="_blank" className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 transition-colors flex items-center gap-2">
            Public Dashboard <ExternalLink className="w-4 h-4" />
          </Link>
          <Link href="/admin/schemes/new" className="px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-sm">
            + Add Scheme
          </Link>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide">Total Schemes</h3>
            <div className="p-2 rounded-lg bg-blue-50 text-blue-600"><Database className="w-5 h-5"/></div>
          </div>
          <div className="text-3xl font-black text-slate-900 dark:text-white">{allSchemes.length}</div>
        </div>
        
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide">Active Schemes</h3>
            <div className="p-2 rounded-lg bg-green-50 text-green-600"><AlertTriangle className="w-5 h-5"/></div>
          </div>
          <div className="text-3xl font-black text-slate-900 dark:text-white">{activeCount}</div>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide">Views Today</h3>
            <div className="p-2 rounded-lg bg-purple-50 text-purple-600"><Eye className="w-5 h-5"/></div>
          </div>
          <div className="text-3xl font-black text-slate-900 dark:text-white">{stats.totalSearchesToday.toLocaleString('en-IN')}</div>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide">Top Language</h3>
            <div className="p-2 rounded-lg bg-orange-50 text-orange-600"><Globe2 className="w-5 h-5"/></div>
          </div>
          <div className="text-3xl font-black text-slate-900 dark:text-white">Hindi</div>
        </div>
      </div>

      {/* Main Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
            <h3 className="font-bold text-slate-900 dark:text-white">Trending Schemes</h3>
            <Link href="/admin/analytics" className="text-sm font-semibold text-blue-600 hover:underline">View full report</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800/50">
                <tr>
                  <th className="px-6 py-4 font-semibold text-slate-500 dark:text-slate-400">Scheme Name</th>
                  <th className="px-6 py-4 font-semibold text-slate-500 dark:text-slate-400">Views</th>
                  <th className="px-6 py-4 font-semibold text-slate-500 dark:text-slate-400">Trend</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {topSchemes.map((s, i) => (
                  <tr key={s.schemeId} className="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{s.name}</td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{s.count.toLocaleString('en-IN')}</td>
                    <td className="px-6 py-4 text-green-500 font-semibold">+{(Math.random() * 15 + 1).toFixed(1)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-6">
          <h3 className="font-bold text-slate-900 dark:text-white mb-6">Quick Actions</h3>
          <div className="space-y-3">
            <Link href="/admin/schemes/new" className="flex items-center gap-3 p-4 rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400 hover:bg-blue-100 font-semibold transition-colors">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0">📝</div>
              Draft New Scheme
            </Link>
            <Link href="/admin/schemes" className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 text-slate-700 dark:border-slate-800 dark:text-slate-300 hover:bg-slate-50 font-semibold transition-colors">
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">📋</div>
              Review Existing (Requires Update: 12)
            </Link>
            <button className="w-full flex items-center gap-3 p-4 rounded-xl border border-slate-200 text-slate-700 dark:border-slate-800 dark:text-slate-300 hover:bg-slate-50 font-semibold transition-colors">
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">⚙️</div>
              System Settings
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}