"use client";

import React, { useState } from "react";
import { MapPin, Navigation, ExternalLink, Loader2 } from "lucide-react";

export default function CSCLocator() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLocate = () => {
    setLoading(true);
    setError(null);

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLoading(false);
        const { latitude, longitude } = position.coords;
        const url = `https://www.google.com/maps/search/common+service+centre/@${latitude},${longitude},14z`;
        window.open(url, "_blank");
      },
      (err) => {
        setLoading(false);
        setError("Location access denied or failed.");
      }
    );
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
          <MapPin className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Need Offline Help?</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Common Service Centres (CSC) are government-authorised offices that help you apply for schemes, generate certificates, and link Aadhaar.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-3">
        <button
          onClick={handleLocate}
          disabled={loading}
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Navigation className="w-5 h-5" />}
          {loading ? "Locating..." : "Find Nearest CSC Center"}
        </button>
        
        <a 
          href="https://locator.csccloud.in/" 
          target="_blank" 
          rel="noreferrer"
          className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 mt-2 sm:mt-0"
        >
          Manual Search <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {error && (
        <p className="text-xs text-red-500 mt-3">{error}</p>
      )}

      <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
        <p className="text-xs text-slate-500 dark:text-slate-400">
          <strong>Tip:</strong> Always carry your physical Aadhaar Card, linked mobile phone, and active bank passbook when visiting a CSC.
        </p>
      </div>
    </div>
  );
}