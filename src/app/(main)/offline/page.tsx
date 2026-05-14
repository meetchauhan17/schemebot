"use client";

import React, { useEffect, useState } from "react";
import { WifiOff, ExternalLink } from "lucide-react";
import Link from "next/link";
import SchemeCard from "@/components/schemes/SchemeCard";
import type { Scheme } from "@/types";

export default function OfflinePage() {
  const [saved, setSaved] = useState<Scheme[]>([]);

  useEffect(() => {
    // Attempt to load from localStorage cache
    try {
      const raw = localStorage.getItem("schemebot_saved_schemes");
      if (raw) {
        setSaved(JSON.parse(raw));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div className="flex flex-col items-center min-h-[80vh] bg-slate-50 dark:bg-slate-950 px-4 py-12">
      
      <div className="w-24 h-24 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-500 mb-6">
        <WifiOff className="w-12 h-12" />
      </div>
      
      <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2 text-center">
        You're Offline 📵
      </h1>
      
      <p className="text-slate-600 dark:text-slate-400 text-center max-w-md mb-10">
        It looks like you've lost internet connection. Don't worry! You can still view the schemes you've saved below.
      </p>

      {saved.length > 0 ? (
        <div className="w-full max-w-5xl">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            Your Cached Schemes <span className="text-sm font-normal text-slate-500">({saved.length})</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {saved.map(scheme => (
              <SchemeCard key={scheme.id} scheme={scheme} />
            ))}
          </div>
        </div>
      ) : (
        <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 max-w-md w-full text-center shadow-sm">
          <p className="text-slate-500 dark:text-slate-400 mb-6">
            You don't have any saved schemes cached on this device.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors"
          >
            Try Reconnecting
          </button>
        </div>
      )}

      <div className="mt-12 text-center">
        <Link href="/" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center gap-1 justify-center">
          Back to Home <ExternalLink className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
