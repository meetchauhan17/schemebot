"use client";

import React, { useState } from "react";
import { CheckSquare, Square, Download, AlertCircle, ExternalLink } from "lucide-react";
import type { SchemeDocument } from "@/types";

export default function DocumentChecklist({ documents, schemeName }: { documents: SchemeDocument[], schemeName: string }) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (name: string) => {
    setChecked(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const handlePrint = () => {
    window.print();
  };

  const progress = Math.round((Object.values(checked).filter(Boolean).length / documents.length) * 100) || 0;

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden" id="document-checklist">
      
      <div className="p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="font-bold text-lg text-slate-900 dark:text-white">Required Documents</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Checklist for {schemeName}</p>
        </div>
        
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="flex-1 sm:w-32">
            <div className="flex justify-between text-xs font-semibold mb-1.5">
              <span className="text-slate-600 dark:text-slate-400">Progress</span>
              <span className="text-blue-600 dark:text-blue-400">{progress}%</span>
            </div>
            <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-blue-600 transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>
          <button 
            onClick={handlePrint}
            className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 transition-colors"
            title="Save as PDF / Print"
          >
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="divide-y divide-slate-100 dark:divide-slate-800">
        {documents.map((doc, i) => {
          const isChecked = checked[doc.name];
          return (
            <div key={i} className={`p-4 sm:p-6 transition-colors ${isChecked ? "bg-slate-50/50 dark:bg-slate-800/30" : "bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50"}`}>
              <div className="flex gap-4">
                <button onClick={() => toggle(doc.name)} className="mt-1 flex-shrink-0 focus:outline-none">
                  {isChecked ? 
                    <CheckSquare className="w-6 h-6 text-green-500 animate-in zoom-in duration-200" /> : 
                    <Square className="w-6 h-6 text-slate-300 dark:text-slate-600 hover:text-blue-400 transition-colors" />
                  }
                </button>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className={`text-base font-semibold ${isChecked ? "text-slate-500 line-through" : "text-slate-900 dark:text-white"}`}>
                      {doc.name}
                    </h4>
                    {doc.mandatory ? (
                      <span className="flex-shrink-0 px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 uppercase tracking-wide">Required</span>
                    ) : (
                      <span className="flex-shrink-0 px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 uppercase tracking-wide">Optional</span>
                    )}
                  </div>
                  
                  <p className={`text-sm mb-3 ${isChecked ? "text-slate-400" : "text-slate-600 dark:text-slate-400"}`}>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Purpose:</span> {doc.purpose}
                  </p>
                  
                  <div className={`p-3 rounded-xl bg-blue-50/50 dark:bg-slate-800/50 border border-blue-100/50 dark:border-slate-700/50 ${isChecked ? "opacity-50 grayscale" : ""}`}>
                    <p className="text-xs text-blue-800 dark:text-blue-300 font-medium mb-1">How to get it:</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{doc.howToGet}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-6 bg-amber-50 dark:bg-amber-900/10 border-t border-amber-100 dark:border-amber-900/30 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="text-sm font-bold text-amber-800 dark:text-amber-500 mb-1">Missing a document?</h4>
          <p className="text-xs text-amber-700/80 dark:text-amber-400/80 mb-2 leading-relaxed">
            Many documents like Income Certificates or Caste Certificates can be generated via your local CSC center or e-District portal online.
          </p>
          <a href="https://locator.csccloud.in/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 dark:text-amber-500 hover:underline">
            Find nearest CSC <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      <style>{`
        @media print {
          body * { visibility: hidden; }
          #document-checklist, #document-checklist * { visibility: visible; }
          #document-checklist { position: absolute; left: 0; top: 0; width: 100%; border: none; box-shadow: none; }
          button { display: none !important; }
        }
      `}</style>
    </div>
  );
}