import { Metadata } from "next";
import { ShieldCheck, Server, Search, Globe2, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "About | SchemeBot India",
  description: "Learn about SchemeBot India, built by the SchemeBot Team.",
};

export default function AboutPage() {
  return (
    <div className="flex-1 w-full bg-slate-50 dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 bg-blue-50 dark:bg-slate-900" />
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.03] dark:opacity-10 mix-blend-multiply dark:mix-blend-overlay" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            About <span className="text-blue-600 dark:text-blue-500">SchemeBot India</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            SchemeBot India is an AI-powered platform designed to help Indian citizens discover and apply for government schemes effortlessly, in their native language.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-20">
        
        {/* The Problem & Solution */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400 mb-6">
              <Search className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Problem</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              India has hundreds of incredible welfare schemes designed to uplift its citizens. However, a significant portion of the population misses out due to language barriers, complex eligibility criteria, and lack of digital literacy.
            </p>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400" /> 80%+ schemes go underutilized</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400" /> Information is fragmented</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400" /> English-first portals isolate rural users</li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none">
            <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
              <Globe2 className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Solution</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              We built an AI guide that speaks 22 Indian languages. By turning complex portal searches into a simple, WhatsApp-like conversation, SchemeBot analyzes user profiles in real-time and instantly matches them with the schemes they deserve.
            </p>
          </div>
        </section>

        {/* Technology & Privacy */}
        <section className="grid md:grid-cols-2 gap-8">
          {/* Tech Stack */}
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3 mb-6">
              <Server className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Powered By</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Groq + Llama 3.3</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">Blazing fast AI inference driving the conversational engine and translation logic.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Next.js 15</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">React framework for highly responsive, SSR web interfaces.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Web Speech API</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">Enabling seamless voice-to-text input across regional languages.</p>
              </div>
            </div>
          </div>

          {/* Privacy */}
          <div className="p-8 rounded-3xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-6 h-6 text-amber-600 dark:text-amber-500" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Privacy First</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              We believe government assistance should not cost you your privacy. We store absolutely nothing on our servers.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-0.5">✓</span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">No account required</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-0.5">✓</span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Profile data stays in your browser memory</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-0.5">✓</span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">No personal identifiers collected</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Team Section */}
        <section className="text-center bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-6">
            <BookOpen className="w-8 h-8" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">The SchemeBot Team</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
            SchemeBot India was conceptualized and built by a dedicated team of engineers focused on leveraging AI for social good.
          </p>
          <a 
            href="mailto:hello@schemebotindia.com"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
          >
            Contact the Team
          </a>
        </section>

      </div>
    </div>
  );
}