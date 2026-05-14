"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ArrowRight, Loader2, CheckCircle2, MessageSquare, BookOpen } from "lucide-react";
import { updateProfile } from "@/lib/userProfile";
import type { UserProfile } from "@/lib/userProfile";
import { useLanguage } from "@/context/LanguageContext";
import { filterSchemes, calculateTotalBenefit } from "@/lib/schemes";
import type { Scheme } from "@/types";

import LanguageStep from "@/components/onboarding/steps/LanguageStep";
import BasicInfoStep from "@/components/onboarding/steps/BasicInfoStep";
import LocationStep from "@/components/onboarding/steps/LocationStep";
import OccupationStep from "@/components/onboarding/steps/OccupationStep";
import IncomeStep from "@/components/onboarding/steps/IncomeStep";
import CategoryStep from "@/components/onboarding/steps/CategoryStep";
import FamilyStep from "@/components/onboarding/steps/FamilyStep";

const TOTAL_STEPS = 7;
const STEP_LABELS = ["Language", "Basic Info", "Location", "Occupation", "Income", "Category", "Family"];

export default function OnboardingPage() {
  const router = useRouter();
  const { setLanguage } = useLanguage();

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [matchedSchemes, setMatchedSchemes] = useState<Scheme[]>([]);

  const [lang, setLang] = useState("en");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [area, setArea] = useState("");
  const [occupation, setOccupation] = useState("");
  const [income, setIncome] = useState("");
  const [category, setCategory] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [childrenCount, setChildrenCount] = useState("");
  const [hasSenior, setHasSenior] = useState(false);
  const [hasPwD, setHasPwD] = useState(false);

  useEffect(() => { if (lang) setLanguage(lang); }, [lang, setLanguage]);

  const handleNext = async () => {
    if (step < TOTAL_STEPS) { setStep(step + 1); window.scrollTo({ top: 0, behavior: "smooth" }); }
    else await finalizeProfile();
  };

  const finalizeProfile = async () => {
    setIsSubmitting(true);
    const profile: Partial<UserProfile> = {
      name: name || undefined, age: age ? parseInt(age) : undefined,
      gender: gender as any, state, district, area: area as any,
      occupation: occupation as any, annualIncome: income as any,
      caste: category as any,
      isMarried: maritalStatus === "married" ? true : maritalStatus === "unmarried" ? false : undefined,
      childrenCount: childrenCount ? parseInt(childrenCount) : 0,
      hasSeniorCitizen: hasSenior, hasPwD,
    };
    updateProfile({ ...profile, onboardingComplete: true, preferredLanguage: lang });
    document.cookie = "onboardingComplete=true; path=/; max-age=31536000";
    document.cookie = "schemebot_onboarding=complete; path=/; max-age=31536000";
    await new Promise(r => setTimeout(r, 1800));
    setMatchedSchemes(filterSchemes(profile));
    setIsSubmitting(false);
    setShowSuccess(true);
  };

  const handleSkip = () => { 
    document.cookie = "onboardingComplete=true; path=/; max-age=31536000"; 
    document.cookie = "schemebot_onboarding=complete; path=/; max-age=31536000"; 
    router.push("/chat"); 
  };

  const isStepValid = () => {
    switch (step) {
      case 1: return !!lang; case 2: return !!age && !!gender; case 3: return !!state && !!area;
      case 4: return !!occupation; case 5: return !!income; case 6: return !!category;
      case 7: return !!maritalStatus && !!childrenCount; default: return true;
    }
  };

  /* ── SUBMITTING SCREEN ── */
  if (isSubmitting) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-8" style={{ background: "var(--surface-page)" }}>
        <div className="relative mb-8">
          {/* Outer rings — animated */}
          <div className="absolute inset-[-12px] rounded-full animate-ping opacity-20" style={{ background: "var(--color-accent)" }} />
          <div className="absolute inset-[-6px] rounded-full animate-pulse opacity-30" style={{ background: "var(--color-accent)" }} />
          <div className="w-20 h-20 rounded-full flex items-center justify-center relative z-10" style={{ boxShadow: "var(--shadow-floating)", background: "var(--surface-page)" }}>
            <Loader2 size={32} strokeWidth={2} className="animate-spin" style={{ color: "var(--color-accent)" }} />
          </div>
        </div>
        <span className="label-mono text-[var(--color-accent)] text-[10px] block mb-3">// PROCESSING PROFILE</span>
        <h2 className="font-sans font-black text-2xl mb-2 tracking-tight" style={{ color: "var(--text-primary)" }}>
          ANALYSING YOUR PROFILE
        </h2>
        <p className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>Scanning 150+ schemes for eligibility...</p>
      </div>
    );
  }

  /* ── SUCCESS SCREEN ── */
  if (showSuccess) {
    const totalVal = calculateTotalBenefit(matchedSchemes);
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-8" style={{ background: "var(--surface-page)" }}>
        {/* Success icon */}
        <div className="relative mb-6 animate-in zoom-in duration-500">
          <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ boxShadow: "var(--shadow-floating)" }}>
            <CheckCircle2 size={36} strokeWidth={1.5} style={{ color: "var(--color-success)" }} />
          </div>
          <span className="absolute -top-1 -right-1 led led-green" />
        </div>

        <span className="label-mono text-[var(--color-success)] text-[10px] block mb-3 animate-in slide-in-from-bottom-4 duration-500 delay-100">// PROFILE COMPLETE</span>
        <h1 className="font-sans font-black text-3xl tracking-tight mb-3 text-center animate-in slide-in-from-bottom-4 duration-500 delay-100" style={{ color: "var(--text-primary)" }}>
          SETUP COMPLETE!
        </h1>
        <p className="text-sm mb-8 text-center animate-in slide-in-from-bottom-4 duration-500 delay-200" style={{ color: "var(--text-secondary)" }}>
          Based on your profile, you may qualify for{" "}
          <strong style={{ color: "var(--text-primary)" }}>{matchedSchemes.length} schemes</strong>.
        </p>

        {/* Benefit panel */}
        <div
          className="w-full max-w-sm mb-8 p-6 text-center screw-corners animate-in slide-in-from-bottom-4 duration-500 delay-300"
          style={{ background: "var(--surface-page)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)" }}
        >
          <span className="label-mono text-[10px] block mb-2" style={{ color: "var(--text-muted)" }}>// ESTIMATED ANNUAL BENEFIT</span>
          <div className="font-mono font-black text-4xl" style={{ color: "var(--color-success)" }}>{totalVal}</div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm animate-in slide-in-from-bottom-4 duration-500 delay-500">
          <button
            onClick={() => router.push("/chat")}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 font-mono font-bold text-xs uppercase tracking-widest text-white transition-all active:translate-y-[1px]"
            style={{ background: "var(--color-accent)", borderRadius: "var(--radius-md)", boxShadow: "6px 6px 12px rgba(166,50,60,0.4), -4px -4px 8px rgba(255,100,110,0.2)" }}
          >
            <MessageSquare size={14} strokeWidth={2} /> START CHAT
          </button>
          <button
            onClick={() => router.push("/schemes?forMe=true")}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 font-mono font-bold text-xs uppercase tracking-widest transition-all active:translate-y-[1px]"
            style={{ borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-card)", color: "var(--text-secondary)" }}
          >
            <BookOpen size={14} strokeWidth={1.5} /> BROWSE
          </button>
        </div>
      </div>
    );
  }

  /* ── MAIN ONBOARDING FLOW ── */
  const progress = ((step - 1) / TOTAL_STEPS) * 100;

  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--surface-page)" }}>

      {/* ── STICKY HEADER ── */}
      <div
        className="flex-shrink-0 sticky top-0 z-[150]"
        style={{ background: "var(--surface-page)", borderBottom: "2px solid #babecc", boxShadow: "0 4px 8px rgba(163,177,198,0.25)" }}
      >
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="w-9 h-9 flex items-center justify-center transition-all active:translate-y-[1px]"
                style={{ borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-card)", color: "var(--text-secondary)" }}
              >
                <ChevronLeft size={18} strokeWidth={2} />
              </button>
            )}
            <div>
              <span className="label-mono text-[10px] block" style={{ color: "var(--color-accent)" }}>
                STEP {String(step).padStart(2, "0")} / {TOTAL_STEPS}
              </span>
              <span className="font-mono font-bold text-xs" style={{ color: "var(--text-primary)" }}>
                {STEP_LABELS[step - 1].toUpperCase()}
              </span>
            </div>
          </div>
          <button
            onClick={handleSkip}
            className="label-mono text-[10px] transition-colors hover:opacity-70"
            style={{ color: "var(--text-muted)" }}
          >
            SKIP ALL →
          </button>
        </div>

        {/* Progress track */}
        <div className="h-1.5 w-full" style={{ background: "var(--surface-recessed)" }}>
          <div
            className="h-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%`, background: "var(--color-accent)", boxShadow: "0 0 6px rgba(255,71,87,0.5)" }}
          />
        </div>

        {/* Step dots */}
        <div className="max-w-3xl mx-auto px-4 py-2 flex items-center gap-1.5">
          {STEP_LABELS.map((label, i) => (
            <div
              key={i}
              className="flex-1 h-1 rounded-full transition-all duration-300"
              style={{ background: i < step ? "var(--color-accent)" : "#babecc" }}
            />
          ))}
        </div>
      </div>

      {/* ── STEP CONTENT ── */}
      <div className="flex-1 max-w-3xl mx-auto w-full px-4 py-8 md:py-12">
        {step === 1 && <LanguageStep value={lang} onChange={setLang} />}
        {step === 2 && <BasicInfoStep name={name} setName={setName} age={age} setAge={setAge} gender={gender} setGender={setGender} />}
        {step === 3 && <LocationStep state={state} setState={setState} district={district} setDistrict={setDistrict} area={area} setArea={setArea} />}
        {step === 4 && <OccupationStep value={occupation} onChange={setOccupation} />}
        {step === 5 && <IncomeStep value={income} onChange={setIncome} />}
        {step === 6 && <CategoryStep value={category} onChange={setCategory} />}
        {step === 7 && <FamilyStep maritalStatus={maritalStatus} setMaritalStatus={setMaritalStatus} childrenCount={childrenCount} setChildrenCount={setChildrenCount} hasSenior={hasSenior} setHasSenior={setHasSenior} hasPwD={hasPwD} setHasPwD={setHasPwD} />}
      </div>

      {/* ── STICKY FOOTER CONTROLS ── */}
      <div
        className="flex-shrink-0 sticky bottom-0 z-20 px-4 py-4"
        style={{ background: "var(--surface-page)", borderTop: "2px solid #babecc", boxShadow: "0 -4px 12px rgba(163,177,198,0.3)" }}
      >
        <div className="max-w-3xl mx-auto flex justify-between items-center gap-3">
          <button
            onClick={handleSkip}
            className="px-5 py-3 font-mono font-bold text-xs uppercase tracking-widest transition-all active:translate-y-[1px]"
            style={{ borderRadius: "var(--radius-md)", color: "var(--text-muted)" }}
          >
            SKIP ALL
          </button>
          <button
            onClick={handleNext}
            disabled={!isStepValid()}
            className="flex items-center gap-2 px-8 py-3.5 font-mono font-bold text-xs uppercase tracking-widest text-white transition-all active:translate-y-[1px] disabled:opacity-40 disabled:cursor-not-allowed"
            style={{
              background: "var(--color-accent)",
              borderRadius: "var(--radius-md)",
              boxShadow: isStepValid()
                ? "6px 6px 12px rgba(166,50,60,0.4), -4px -4px 8px rgba(255,100,110,0.2)"
                : "var(--shadow-recessed)",
            }}
          >
            {step === TOTAL_STEPS ? "FINISH SETUP" : "CONTINUE"}
            <ArrowRight size={14} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}