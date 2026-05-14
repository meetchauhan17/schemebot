"use client";

import React from "react";
import Link from "next/link";
import { Clock, AlertTriangle, ArrowRight } from "lucide-react";
import { getDeadlineSoonSaved } from "@/lib/savedSchemes";

export default function DeadlineTracker() {
  const urgentSchemes = getDeadlineSoonSaved(60);

  if (urgentSchemes.length === 0) return null;

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden mb-8 shadow-sm">
      <div className="bg-amber-50 dark:bg-amber-900/20 border-b border-amber-100 dark:border-amber-900/50 px-6 py-4 flex items-center gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-500" />
        <h3 className="font-bold text-slate-900 dark:text-white">Upcoming Deadlines</h3>
      </div>
      
      <div className="divide-y divide-slate-100 dark:divide-slate-800">
        {urgentSchemes.map(scheme => {
          const d = new Date(scheme.deadline!);
          const daysLeft = Math.ceil((d.getTime() - Date.now()) / 86400000);
          
          let colorClass = "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
          let dotColor = "bg-green-500";
          if (daysLeft < 7) {
            colorClass = "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
            dotColor = "bg-red-500";
          } else if (daysLeft < 30) {
            colorClass = "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400";
            dotColor = "bg-amber-500";
          }

          return (
            <div key={scheme.id} className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-slate-900 dark:text-white truncate mb-1">{scheme.name}</h4>
                <div className="flex items-center gap-3 text-sm">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-bold text-xs ${colorClass}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${dotColor} animate-pulse`} />
                    {daysLeft} Days Left
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </span>
                </div>
              </div>
              <Link 
                href={`/schemes/${scheme.id}`} 
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shrink-0"
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}