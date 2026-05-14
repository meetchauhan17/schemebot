"use client";

import React, { useEffect, useState } from "react";
import { useInstallPrompt } from "@/hooks/useInstallPrompt";
import { X, Download, Sparkles } from "lucide-react";

export default function PWAInstallPrompt() {
  const { isInstallable, isInstalled, showInstallPrompt } = useInstallPrompt();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show prompt after 30 seconds if installable and not already installed
    if (isInstallable && !isInstalled) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 30000);
      return () => clearTimeout(timer);
    }
  }, [isInstallable, isInstalled]);

  if (!isVisible || isInstalled) return null;

  return (
    <div className="fixed bottom-24 left-4 right-4 z-[100] animate-in slide-in-from-bottom-10 duration-500">
      <div className="bg-white dark:bg-slate-900 border-2 border-blue-600 rounded-2xl p-5 shadow-2xl shadow-blue-500/20">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/30">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-slate-900 dark:text-white leading-tight">Install SchemeBot</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Add to home screen for faster access & offline support.
            </p>
          </div>
        </div>

        <div className="mt-4 flex gap-3">
          <button 
            onClick={showInstallPrompt}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" /> Install Now
          </button>
          <button 
            onClick={() => setIsVisible(false)}
            className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold py-2.5 rounded-xl text-sm hover:bg-slate-200 transition-colors"
          >
            Later
          </button>
        </div>
      </div>
    </div>
  );
}
