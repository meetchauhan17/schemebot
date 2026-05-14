"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  MessageSquare, ArrowRight, ShieldCheck, Zap, Mic,
  ChevronDown, Search, Globe, Smartphone, HeartHandshake,
  Wheat, HeartPulse, Home, Baby, Briefcase, Building2,
  Calculator, CheckCircle2, ChevronRight
} from "lucide-react";
import { INDIAN_LANGUAGES } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

const FEATURED_SCHEMES = [
  { name: "PM-KISAN", amount: "₹6,000/year",    cat: "Agriculture", icon: Wheat,       desc: "Income support for landholding farmers" },
  { name: "Ayushman Bharat", amount: "₹5L Cover", cat: "Health",    icon: HeartPulse,  desc: "Free healthcare coverage per family" },
  { name: "PMAY-Gramin", amount: "₹1.2L Asst.", cat: "Housing",     icon: Home,        desc: "Financial assistance for pucca houses" },
  { name: "Sukanya Samriddhi", amount: "8.2%",  cat: "Women",       icon: Baby,        desc: "High-interest savings for girl child" },
  { name: "MUDRA Yojana", amount: "Up to ₹10L", cat: "Business",    icon: Briefcase,   desc: "Collateral-free loans for micro-enterprises" },
  { name: "PM Awas (Urban)", amount: "Subsidy", cat: "Housing",      icon: Building2,   desc: "Credit linked subsidy for urban poor" },
];

const FAQS = [
  { q: "Is SchemeBot India free?", a: "Yes, SchemeBot is 100% free forever. There are no hidden charges or subscriptions." },
  { q: "Do I need to create an account?", a: "No! You can start finding schemes immediately without logging in. Your data stays on your device." },
  { q: "How accurate is the scheme information?", a: "We aggregate data strictly from official government portals (india.gov.in, state portals). Always verify before applying." },
  { q: "Can I use it in my language?", a: "Yes! SchemeBot supports 22 official Indian languages including Hindi, Gujarati, Tamil, Telugu, Bengali, and more." },
  { q: "What if I need help applying?", a: "SchemeBot provides step-by-step instructions and official portal links. For offline help, visit your nearest CSC." },
];

const STEPS = [
  { icon: MessageSquare, label: "STEP 01", title: "Tell Us About You",      desc: "Answer simple questions in any language." },
  { icon: Zap,           label: "STEP 02", title: "AI Finds Your Schemes",  desc: "Matches you with 150+ government programs." },
  { icon: CheckCircle2,  label: "STEP 03", title: "Apply with Confidence",  desc: "Get documents, steps, and official links." },
];

function useCounter(end: number, duration = 1500) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (!visible) return;
    let start: number | null = null;
    const tick = (t: number) => {
      if (!start) start = t;
      const p = Math.min((t - start) / duration, 1);
      setCount(Math.floor(end * (1 - Math.pow(1 - p, 4))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [visible, end, duration]);
  return { count, ref };
}

function StatBlock({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const { count, ref } = useCounter(value);
  return (
    <div ref={ref} className="text-center py-6">
      <div className="font-mono font-black text-5xl text-white mb-1">{count}{suffix}</div>
      <div className="label-mono text-[#a8b2d1] text-[10px]">{label}</div>
    </div>
  );
}

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {FAQS.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="overflow-hidden transition-all screw-corners"
            style={{ background: "var(--surface-page)", borderRadius: "var(--radius-lg)", boxShadow: isOpen ? "var(--shadow-pressed)" : "var(--shadow-card)" }}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
            >
              <span className="font-sans font-bold text-sm text-[var(--text-primary)] pr-4">{faq.q}</span>
              <ChevronDown
                size={16} strokeWidth={2}
                style={{ color: "var(--text-muted)", flexShrink: 0, transition: "transform 300ms", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>
            <div className={cn("px-6 overflow-hidden transition-all duration-300", isOpen ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0")}>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{faq.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full" style={{ background: "var(--surface-page)" }}>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: "var(--surface-page)", minHeight: "calc(100dvh - 88px)" }}>
        {/* Background grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(#2d3436 1px, transparent 1px), linear-gradient(90deg, #2d3436 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 relative z-10 flex flex-col lg:flex-row items-center gap-16">

          {/* Left text */}
          <div className="w-full lg:w-[55%] text-center lg:text-left">
            {/* System badge */}
            <div
              className="inline-flex items-center gap-2 mb-8 px-4 py-2"
              style={{ background: "var(--surface-page)", boxShadow: "var(--shadow-card)", borderRadius: "var(--radius-sm)" }}
            >
              <span className="led led-green" />
              <span className="label-mono text-[11px]">SCHEMEBOT AI — ONLINE &amp; READY</span>
            </div>

            <h1 className="font-sans font-black text-5xl sm:text-6xl lg:text-7xl leading-none mb-6 tracking-[-0.03em]" style={{ color: "var(--text-primary)" }}>
              FIND YOUR<br />
              <span style={{ color: "var(--color-accent)" }}>SCHEME.</span>
            </h1>

            <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-xl leading-relaxed mx-auto lg:mx-0 font-medium">
              AI-powered guide in your language. 150+ government schemes. Free forever. No login needed.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <Link
                href="/chat"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-white font-bold text-base uppercase tracking-wider transition-all duration-150 active:translate-y-[2px] group"
                style={{ background: "var(--color-accent)", borderRadius: "var(--radius-md)", boxShadow: "6px 6px 12px rgba(166,50,60,0.4), -4px -4px 8px rgba(255,100,110,0.3)" }}
              >
                <MessageSquare size={18} strokeWidth={2} />
                Start Chatting Now
                <ArrowRight size={16} strokeWidth={2} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/schemes"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 font-bold text-base uppercase tracking-wider transition-all duration-150 active:translate-y-[2px]"
                style={{ color: "var(--text-secondary)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-floating)" }}
              >
                <Search size={16} strokeWidth={1.5} />
                Browse 150 Schemes
              </Link>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              {[
                { icon: ShieldCheck, label: "NO LOGIN" },
                { icon: HeartHandshake, label: "100% FREE" },
                { icon: Smartphone, label: "WORKS OFFLINE" },
                { icon: Globe, label: "22 LANGUAGES" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 px-3 py-1.5" style={{ borderRadius: "var(--radius-sm)", boxShadow: "var(--shadow-recessed)" }}>
                  <Icon size={12} strokeWidth={2} style={{ color: "var(--color-accent)" }} />
                  <span className="label-mono text-[10px]">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — CSS Device Panel */}
          <div className="w-full lg:w-[45%] hidden md:flex items-center justify-center">
            <div
              className="relative w-[300px]"
              style={{ background: "var(--surface-dark)", borderRadius: "var(--radius-xl)", padding: "16px", boxShadow: "16px 16px 32px rgba(0,0,0,0.3), -4px -4px 12px rgba(255,255,255,0.05), inset 0 0 0 2px rgba(255,255,255,0.05)" }}
            >
              {/* Device header */}
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff4757]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
                </div>
                <span className="label-mono text-[#a8b2d1] text-[9px]">SCHEMEBOT // TERMINAL</span>
                <span className="led led-green w-2 h-2" />
              </div>

              {/* Screen — recessed */}
              <div
                className="rounded-md p-4 space-y-3 min-h-[260px] flex flex-col justify-end"
                style={{ background: "#1a1e24", boxShadow: "inset 4px 4px 8px rgba(0,0,0,0.5), inset -2px -2px 4px rgba(255,255,255,0.02)" }}
              >
                {/* Scanlines overlay */}
                <div className="absolute inset-0 pointer-events-none rounded-md opacity-5"
                  style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,1) 2px, rgba(0,0,0,1) 4px)" }} />

                <div className="bg-[#2a2e35] rounded-md px-3 py-2 self-end text-xs font-mono text-[#a8b2d1] max-w-[80%]">
                  I am a farmer from Gujarat.
                </div>
                <div className="bg-[#1e3a2a] rounded-md px-3 py-2 self-start text-xs font-mono text-[#22c55e] max-w-[80%]">
                  FOUND 8 MATCHING SCHEMES
                </div>
                <div className="rounded-md p-2.5" style={{ background: "#2a2e35", border: "1px solid #3a3e45" }}>
                  <div className="font-mono font-bold text-xs text-[#ff4757] mb-1">PM-KISAN // ₹6,000/yr</div>
                  <div className="text-[10px] font-mono text-[#a8b2d1]">ELIGIBILITY: CONFIRMED</div>
                </div>
                {/* Input mock */}
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex-1 h-8 rounded-sm" style={{ background: "#2a2e35", boxShadow: "inset 2px 2px 4px rgba(0,0,0,0.4)" }} />
                  <div className="w-8 h-8 rounded-sm flex items-center justify-center" style={{ background: "var(--color-accent)" }}>
                    <ArrowRight size={14} strokeWidth={2.5} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Device bottom bar */}
              <div className="flex items-center justify-between mt-3 px-1">
                <span className="label-mono text-[#a8b2d1] text-[9px]">150+ SCHEMES</span>
                <div className="flex gap-1">
                  {[0,1,2].map(i => <span key={i} className="w-[3px] h-4 rounded-full" style={{ background: "#3a4550", boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.3)" }} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP — Dark hardware panel ── */}
      <section style={{ background: "var(--surface-dark)", borderTop: "2px solid #1a2530", borderBottom: "2px solid #1a2530" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#3d4a52]">
            <StatBlock value={150} suffix="+" label="SCHEMES INDEXED" />
            <StatBlock value={22}  suffix=""  label="LANGUAGES SUPPORTED" />
            <StatBlock value={0}   suffix="₹" label="COST — FREE FOREVER" />
            <StatBlock value={45}  suffix="s" label="AVG. RESPONSE TIME" />
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24" style={{ background: "var(--surface-page)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="label-mono text-[var(--color-accent)] block mb-3">OPERATIONAL SEQUENCE</span>
            <h2 className="font-sans font-black text-4xl tracking-tight" style={{ color: "var(--text-primary)" }}>HOW IT WORKS</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting pipe — desktop */}
            <div className="hidden md:block absolute top-16 left-[22%] right-[22%] h-3 rounded-full"
              style={{ background: "var(--surface-recessed)", boxShadow: "inset 0 2px 4px rgba(0,0,0,0.15), inset 0 -1px 2px rgba(255,255,255,0.6)" }} />

            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="relative text-center screw-corners" style={{ background: "var(--surface-page)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", padding: "32px 24px" }}>
                  {/* Step number LED */}
                  <div className="w-14 h-14 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ boxShadow: "var(--shadow-floating)" }}>
                    <Icon size={24} strokeWidth={1.5} style={{ color: "var(--color-accent)" }} />
                  </div>
                  <p className="label-mono text-[var(--color-accent)] mb-2 text-[10px]">{step.label}</p>
                  <h3 className="font-sans font-bold text-base mb-2" style={{ color: "var(--text-primary)" }}>{step.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FEATURED SCHEMES ── */}
      <section className="py-20" style={{ borderTop: "2px solid #babecc", background: "var(--surface-recessed)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex items-end justify-between">
          <div>
            <span className="label-mono text-[var(--color-accent)] block mb-2 text-[10px]">// MOST ACCESSED</span>
            <h2 className="font-sans font-black text-3xl tracking-tight" style={{ color: "var(--text-primary)" }}>POPULAR RIGHT NOW</h2>
          </div>
          <Link href="/schemes" className="hidden sm:flex items-center gap-1 label-mono text-[var(--color-accent)] hover:underline text-[11px]">
            VIEW ALL <ArrowRight size={12} strokeWidth={2.5} />
          </Link>
        </div>

        <div className="flex overflow-x-auto pb-6 pt-2 px-4 sm:px-6 lg:px-8 gap-5 hide-scrollbar snap-x snap-mandatory">
          {FEATURED_SCHEMES.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="flex-shrink-0 w-[260px] snap-center screw-corners group transition-all duration-300 hover:-translate-y-1"
                style={{ background: "var(--surface-page)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", padding: "20px" }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = "var(--shadow-floating)")}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "var(--shadow-card)")}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="label-mono text-[10px] px-2 py-1" style={{ color: "var(--text-muted)", boxShadow: "var(--shadow-recessed)", borderRadius: "var(--radius-sm)" }}>{s.cat.toUpperCase()}</span>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ boxShadow: "var(--shadow-floating)" }}>
                    <Icon size={16} strokeWidth={1.5} style={{ color: "var(--color-accent)" }} />
                  </div>
                </div>
                <h3 className="font-sans font-bold text-sm mb-1 line-clamp-1" style={{ color: "var(--text-primary)" }}>{s.name}</h3>
                <p className="text-xs text-[var(--text-muted)] mb-4 line-clamp-2 leading-relaxed">{s.desc}</p>
                <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid #babecc" }}>
                  <span className="font-mono font-bold text-sm" style={{ color: "var(--color-accent)" }}>{s.amount}</span>
                  <Link href="/schemes" className="label-mono text-[10px] flex items-center gap-1" style={{ color: "var(--color-accent)" }}>
                    DETAILS <ChevronRight size={11} strokeWidth={2.5} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── VOICE FEATURE ── */}
      <section className="py-24" style={{ background: "var(--surface-page)", borderTop: "2px solid #babecc" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="label-mono text-[var(--color-accent)] block mb-4 text-[10px]">// VOICE MODULE</span>
            <h2 className="font-sans font-black text-3xl md:text-4xl tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
              CAN&apos;T TYPE?<br />JUST SPEAK.
            </h2>
            <p className="text-base text-[var(--text-secondary)] mb-8 leading-relaxed max-w-lg">
              Talk in Hindi, Gujarati, Tamil, or any of 22 Indian languages. SchemeBot understands and responds in your language.
            </p>
            <div className="flex flex-wrap gap-2">
              {["हिंदी", "ગુજરાતી", "தமிழ்", "বাংলা", "తెలుగు", "+17"].map((lang) => (
                <span key={lang} className="px-3 py-1.5 text-sm font-sans font-medium" style={{ color: "var(--text-secondary)", boxShadow: "var(--shadow-recessed)", borderRadius: "var(--radius-sm)" }}>
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Mic visual */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Outer ring */}
              <div className="w-40 h-40 rounded-full flex items-center justify-center" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="w-28 h-28 rounded-full flex items-center justify-center" style={{ boxShadow: "var(--shadow-recessed)" }}>
                  <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ boxShadow: "var(--shadow-floating)" }}>
                    <Mic size={32} strokeWidth={1.5} style={{ color: "var(--color-accent)" }} />
                  </div>
                </div>
              </div>
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 led led-green" />
            </div>
          </div>
        </div>
      </section>

      {/* ── LANGUAGE GRID ── */}
      <section className="py-20" style={{ background: "var(--surface-recessed)", borderTop: "2px solid #babecc" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="label-mono text-[var(--color-accent)] block mb-3 text-[10px]">// LANGUAGE MATRIX</span>
            <h2 className="font-sans font-black text-3xl tracking-tight" style={{ color: "var(--text-primary)" }}>AVAILABLE IN YOUR LANGUAGE</h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {INDIAN_LANGUAGES.map((lang) => (
              <div
                key={lang.code}
                className="p-3 text-center transition-all duration-200 hover:-translate-y-[2px] cursor-default"
                style={{ background: "var(--surface-page)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-card)" }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = "var(--shadow-floating)")}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "var(--shadow-card)")}
              >
                <div className="font-sans font-bold text-sm mb-1" style={{ color: "var(--text-primary)" }}>{lang.nativeName}</div>
                <div className="label-mono text-[9px] text-[var(--text-muted)]">{lang.name.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24" style={{ background: "var(--surface-page)", borderTop: "2px solid #babecc" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="label-mono text-[var(--color-accent)] block mb-3 text-[10px]">// SUPPORT LOG</span>
            <h2 className="font-sans font-black text-3xl tracking-tight" style={{ color: "var(--text-primary)" }}>FREQUENTLY ASKED</h2>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24" style={{ background: "var(--surface-dark)", borderTop: "3px solid #1a2530" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="led led-green" />
            <span className="label-mono text-[#a8b2d1] text-[10px]">SYSTEM READY</span>
          </div>
          <h2 className="font-sans font-black text-4xl sm:text-5xl text-white tracking-tight mb-6 leading-tight">
            YOUR BENEFITS<br />
            <span style={{ color: "var(--color-accent)" }}>ARE WAITING.</span>
          </h2>
          <p className="text-[#a8b2d1] text-lg mb-10 font-medium">
            Join millions of Indians finding their rightful government schemes. Free forever.
          </p>
          <Link
            href="/chat"
            className="inline-flex items-center gap-2 px-10 py-5 font-bold text-white uppercase tracking-widest text-base transition-all duration-150 active:translate-y-[2px] group"
            style={{ background: "var(--color-accent)", borderRadius: "var(--radius-md)", boxShadow: "6px 6px 12px rgba(166,50,60,0.5), -4px -4px 8px rgba(255,100,110,0.2)" }}
          >
            <MessageSquare size={20} strokeWidth={2} />
            Start For Free Now
            <ArrowRight size={18} strokeWidth={2} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}