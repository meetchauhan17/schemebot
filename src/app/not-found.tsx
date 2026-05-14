import Link from "next/link";
import { Home, MessageCircle, FileText } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="w-24 h-24 mb-6 rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-xl shadow-blue-500/20">
        <span className="text-5xl">🔍</span>
      </div>
      
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
        404 — Scheme Not Found
      </h1>
      <p className="text-lg font-medium text-slate-600 dark:text-slate-300 mb-1">
        योजना नहीं मिली | આ યોજના મળી નથી
      </p>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
        <Link 
          href="/"
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        >
          <Home className="w-4 h-4" />
          Go Home
        </Link>
        <Link 
          href="/schemes"
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        >
          <FileText className="w-4 h-4" />
          Browse Schemes
        </Link>
        <Link 
          href="/chat"
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all"
        >
          <MessageCircle className="w-4 h-4" />
          Start Chat
        </Link>
      </div>
    </div>
  );
}