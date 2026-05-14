"use client";

import React, { useState } from "react";
import { CheckCircle2, XCircle, AlertTriangle, ArrowRight, RefreshCw } from "lucide-react";
import Link from "next/link";
import { Scheme } from "@/types";

export default function EligibilityChecker({ scheme }: { scheme: Scheme }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<"pass" | "fail" | "partial" | null>(null);

  const questions: { id: string; q: string; opts: string[] }[] = [];
  if (scheme.eligibility.minAge !== null || scheme.eligibility.maxAge !== null)
    questions.push({ id: "age",    q: `Are you between ${scheme.eligibility.minAge ?? 0}–${scheme.eligibility.maxAge ?? 100} years old?`, opts: ["Yes", "No"] });
  if (scheme.eligibility.gender !== "all")
    questions.push({ id: "gender", q: `Are you ${scheme.eligibility.gender === "female" ? "a woman" : "a man"}?`, opts: ["Yes", "No"] });
  if (scheme.eligibility.incomeLimit)
    questions.push({ id: "income", q: `Is your family income below ₹${(scheme.eligibility.incomeLimit / 100000).toFixed(1)} Lakhs/year?`, opts: ["Yes", "No", "Not Sure"] });
  if (scheme.eligibility.states.length > 0 && !scheme.eligibility.states.includes("all"))
    questions.push({ id: "state",  q: `Do you reside in ${scheme.eligibility.states.join(" or ")}?`, opts: ["Yes", "No"] });
  questions.push({ id: "docs", q: "Do you have a valid Aadhaar Card and active bank account?", opts: ["Yes", "No"] });

  const handleAnswer = (val: string) => {
    const newAnswers = { ...answers, [questions[step].id]: val };
    setAnswers(newAnswers);
    if (step < questions.length - 1) setStep(step + 1);
    else {
      let fail = false, unsure = false;
      if (newAnswers.age === "No" || newAnswers.gender === "No" || newAnswers.state === "No" || newAnswers.docs === "No" || newAnswers.income === "No") fail = true;
      if (newAnswers.income === "Not Sure") unsure = true;
      setResult(fail ? "fail" : unsure ? "partial" : "pass");
    }
  };

  const reset = () => { setStep(0); setAnswers({}); setResult(null); };

  const progress = (step / questions.length) * 100;

  /* ── Result screen ── */
  if (result) {
    const configs = {
      pass:    { icon: CheckCircle2, color: "var(--color-success)",  title: "YOU LIKELY QUALIFY",  desc: `Based on your answers, you meet the primary criteria for ${scheme.name}.` },
      fail:    { icon: XCircle,      color: "var(--color-accent)",   title: "MAY NOT QUALIFY",     desc: "Some of your answers don't match the strict eligibility criteria for this scheme." },
      partial: { icon: AlertTriangle,color: "var(--color-warning)",  title: "PARTIAL MATCH",       desc: "We need more information (like income documents) to confirm your eligibility." },
    };
    const { icon: Icon, color, title, desc } = configs[result];

    return (
      <div className="animate-in zoom-in-95 duration-300" style={{ background: "var(--surface-page)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", padding: "28px" }}>
        <div className="flex flex-col items-center text-center">
          {/* Result icon — recessed well */}
          <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ boxShadow: "var(--shadow-recessed)" }}>
            <Icon size={28} strokeWidth={1.5} style={{ color }} />
          </div>
          <span className="label-mono text-[10px] block mb-2" style={{ color }}>// ELIGIBILITY RESULT</span>
          <h3 className="font-sans font-black text-xl mb-2 tracking-tight" style={{ color: "var(--text-primary)" }}>{title}</h3>
          <p className="text-sm mb-8 max-w-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{desc}</p>

          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <button
              onClick={reset}
              className="flex-1 flex items-center justify-center gap-2 py-3 font-mono font-bold text-xs uppercase tracking-wider transition-all active:translate-y-[1px]"
              style={{ borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-card)", color: "var(--text-secondary)" }}
            >
              <RefreshCw size={14} strokeWidth={1.5} /> RETAKE
            </button>
            <Link
              href="/onboarding"
              className="flex-1 flex items-center justify-center gap-2 py-3 font-mono font-bold text-xs uppercase tracking-wider text-white transition-all active:translate-y-[1px]"
              style={{ background: "var(--color-accent)", borderRadius: "var(--radius-md)", boxShadow: "6px 6px 12px rgba(166,50,60,0.4), -4px -4px 8px rgba(255,100,110,0.2)" }}
            >
              DETAILED MATCH <ArrowRight size={14} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  /* ── Question screen ── */
  const current = questions[step];
  const isThreeOpt = current.opts.length === 3;

  return (
    <div style={{ background: "var(--surface-page)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", padding: "28px" }}>
      {/* Header row */}
      <div className="flex items-center justify-between mb-6">
        <span className="label-mono text-[10px]" style={{ color: "var(--color-accent)" }}>// QUICK ELIGIBILITY CHECK</span>
        <span
          className="label-mono text-[10px] px-2.5 py-1"
          style={{ boxShadow: "var(--shadow-recessed)", borderRadius: "var(--radius-sm)", color: "var(--text-muted)" }}
        >
          Q {step + 1} / {questions.length}
        </span>
      </div>

      {/* Question text */}
      <p className="font-sans font-bold text-base leading-snug mb-7" style={{ color: "var(--text-primary)", minHeight: "48px" }}>
        {current.q}
      </p>

      {/* Answer buttons */}
      <div className={`grid gap-3 ${isThreeOpt ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-2"}`}>
        {current.opts.map(opt => {
          const optColor = opt === "Yes" ? "var(--color-success)" : opt === "No" ? "var(--color-accent)" : "var(--color-warning)";
          return (
            <button
              key={opt}
              onClick={() => handleAnswer(opt)}
              className="py-3.5 font-mono font-bold text-xs uppercase tracking-widest transition-all duration-150 active:translate-y-[1px]"
              style={{ borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-card)", color: "var(--text-secondary)" }}
              onMouseEnter={e => { e.currentTarget.style.color = optColor; e.currentTarget.style.boxShadow = "var(--shadow-floating)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "var(--text-secondary)"; e.currentTarget.style.boxShadow = "var(--shadow-card)"; }}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {/* Progress track — recessed */}
      <div className="mt-7 h-2 rounded-full overflow-hidden" style={{ boxShadow: "var(--shadow-recessed)" }}>
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${progress}%`, background: "var(--color-accent)", boxShadow: "0 0 6px rgba(255,71,87,0.5)" }}
        />
      </div>
    </div>
  );
}