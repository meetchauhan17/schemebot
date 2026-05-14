"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="w-20 h-20 mb-6 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-500">
        <AlertTriangle className="w-10 h-10" />
      </div>
      
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
        Something went wrong 😔
      </h2>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-sm">
        We encountered an unexpected error. Please try again or report the issue if it persists.
      </p>

      {/* Developer Error info - in production you might hide this */}
      <div className="mb-8 w-full max-w-md p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-left overflow-x-auto">
        <p className="text-xs font-mono text-red-600 dark:text-red-400 break-words">
          {error.message || "Unknown Error"}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
        <button
          onClick={() => reset()}
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20"
        >
          <RefreshCw className="w-4 h-4" />
          Try Again
        </button>
        <a 
          href="mailto:hello@schemebotindia.com"
          className="flex items-center justify-center px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        >
          Report Issue
        </a>
      </div>
    </div>
  );
}