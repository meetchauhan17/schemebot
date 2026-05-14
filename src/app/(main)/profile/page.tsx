"use client";

import React, { useState, useEffect } from "react";
import { useProfileContext } from "@/context/ProfileContext";
import ProfileStrengthMeter from "@/components/profile/ProfileStrengthMeter";
import { User, MapPin, Briefcase, Wallet, Users, Heart, Save, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { UserProfile } from "@/types";

function RecessedInput({ label, icon: Icon, ...props }: any) {
  return (
    <div className="flex flex-col gap-2">
      <label className="label-mono text-[10px] flex items-center gap-1" style={{ color: "var(--text-muted)" }}>
        {Icon && <Icon size={12} />} {label}
      </label>
      <input
        {...props}
        className="w-full px-4 py-3 font-mono text-sm outline-none transition-all"
        style={{
          background: "var(--surface-page)",
          borderRadius: "var(--radius-md)",
          boxShadow: "var(--shadow-recessed)",
          color: "var(--text-primary)",
        }}
      />
    </div>
  );
}

function RecessedSelect({ label, icon: Icon, options, ...props }: any) {
  return (
    <div className="flex flex-col gap-2">
      <label className="label-mono text-[10px] flex items-center gap-1" style={{ color: "var(--text-muted)" }}>
        {Icon && <Icon size={12} />} {label}
      </label>
      <div className="relative">
        <select
          {...props}
          className="w-full px-4 py-3 font-mono text-sm outline-none appearance-none cursor-pointer"
          style={{
            background: "var(--surface-page)",
            borderRadius: "var(--radius-md)",
            boxShadow: "var(--shadow-recessed)",
            color: props.value ? "var(--text-primary)" : "var(--text-muted)",
          }}
        >
          <option value="">Select...</option>
          {options.map((opt: any) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--text-muted)]">
          ▼
        </div>
      </div>
    </div>
  );
}

export default function ProfilePage() {
  const { profile, updateProfile, clearProfile, mounted } = useProfileContext();
  const [formData, setFormData] = useState<Partial<UserProfile>>({});
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (profile) setFormData(profile);
  }, [profile]);

  if (!mounted) return null;

  const handleChange = (field: keyof UserProfile, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setSaved(false);
  };

  const handleSave = () => {
    updateProfile(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleClear = () => {
    if (confirm("Are you sure you want to clear your entire profile? This cannot be undone.")) {
      clearProfile();
      setFormData({});
    }
  };

  return (
    <div className="min-h-dvh flex flex-col" style={{ background: "var(--surface-page)" }}>
      {/* Header */}
      <div style={{ background: "var(--surface-dark)", borderBottom: "3px solid #1a2530", boxShadow: "0 4px 16px rgba(0,0,0,0.25)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="led led-blue" />
            <span className="label-mono text-[#c8d4e0] text-[10px]">USER PROFILE // SETTINGS</span>
          </div>
          <h1 className="font-sans font-black text-3xl sm:text-4xl text-white tracking-tight">
            MY PROFILE
          </h1>
        </div>
      </div>

      <div className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <ProfileStrengthMeter />

        {/* Form Container */}
        <div 
          className="p-6 space-y-8"
          style={{ background: "var(--surface-page)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)" }}
        >
          {/* Section 1: Basic Details */}
          <section>
            <h2 className="text-sm font-bold text-[var(--color-accent)] mb-4 flex items-center gap-2 border-b border-[#babecc] pb-2">
              <User size={16} /> BASIC DETAILS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RecessedInput label="FULL NAME" type="text" value={formData.name || ""} onChange={(e: any) => handleChange("name", e.target.value)} />
              <div className="grid grid-cols-2 gap-4">
                <RecessedInput label="AGE" type="number" min={18} max={100} value={formData.age || ""} onChange={(e: any) => handleChange("age", parseInt(e.target.value) || undefined)} />
                <RecessedSelect label="GENDER" value={formData.gender || ""} onChange={(e: any) => handleChange("gender", e.target.value)} options={[
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                  { value: "other", label: "Other" }
                ]} />
              </div>
            </div>
          </section>

          {/* Section 2: Location */}
          <section>
            <h2 className="text-sm font-bold text-[var(--color-accent)] mb-4 flex items-center gap-2 border-b border-[#babecc] pb-2">
              <MapPin size={16} /> LOCATION
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <RecessedSelect label="STATE" value={formData.state || ""} onChange={(e: any) => handleChange("state", e.target.value)} options={[
                { value: "gj", label: "Gujarat" },
                { value: "mh", label: "Maharashtra" },
                { value: "up", label: "Uttar Pradesh" },
                { value: "rj", label: "Rajasthan" },
                { value: "ka", label: "Karnataka" },
              ]} />
              <RecessedInput label="DISTRICT" type="text" value={formData.district || ""} onChange={(e: any) => handleChange("district", e.target.value)} />
              <RecessedSelect label="AREA TYPE" value={formData.area || ""} onChange={(e: any) => handleChange("area", e.target.value)} options={[
                { value: "rural", label: "Rural" },
                { value: "urban", label: "Urban" },
                { value: "semi-urban", label: "Semi-Urban" }
              ]} />
            </div>
          </section>

          {/* Section 3: Socio-Economic */}
          <section>
            <h2 className="text-sm font-bold text-[var(--color-accent)] mb-4 flex items-center gap-2 border-b border-[#babecc] pb-2">
              <Briefcase size={16} /> SOCIO-ECONOMIC
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <RecessedSelect icon={Briefcase} label="OCCUPATION" value={formData.occupation || ""} onChange={(e: any) => handleChange("occupation", e.target.value)} options={[
                { value: "farmer", label: "Farmer" },
                { value: "student", label: "Student" },
                { value: "salaried", label: "Salaried" },
                { value: "daily-wage", label: "Daily Wage" },
                { value: "business", label: "Business" },
                { value: "unemployed", label: "Unemployed" },
              ]} />
              <RecessedSelect icon={Wallet} label="ANNUAL INCOME" value={formData.annualIncome || ""} onChange={(e: any) => handleChange("annualIncome", e.target.value)} options={[
                { value: "below-1l", label: "Below ₹1 Lakh" },
                { value: "1-3l", label: "₹1 Lakh - ₹3 Lakhs" },
                { value: "3-6l", label: "₹3 Lakhs - ₹6 Lakhs" },
                { value: "6-12l", label: "₹6 Lakhs - ₹12 Lakhs" },
                { value: "above-12l", label: "Above ₹12 Lakhs" },
              ]} />
              <RecessedSelect icon={Users} label="SOCIAL CATEGORY" value={formData.caste || ""} onChange={(e: any) => handleChange("caste", e.target.value)} options={[
                { value: "general", label: "General" },
                { value: "obc", label: "OBC" },
                { value: "sc", label: "SC" },
                { value: "st", label: "ST" },
                { value: "minority", label: "Minority" },
              ]} />
            </div>
          </section>

          {/* Section 4: Family Details */}
          <section>
            <h2 className="text-sm font-bold text-[var(--color-accent)] mb-4 flex items-center gap-2 border-b border-[#babecc] pb-2">
              <Heart size={16} /> FAMILY DETAILS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center justify-between p-4 rounded-xl" style={{ boxShadow: "var(--shadow-recessed)" }}>
                <span className="text-sm font-mono font-bold text-[var(--text-secondary)]">Marital Status</span>
                <div className="flex gap-2">
                  <button onClick={() => handleChange("isMarried", true)} className={cn("px-4 py-2 rounded-lg text-xs font-bold transition-all", formData.isMarried === true ? "bg-[var(--color-accent)] text-white shadow-md" : "bg-slate-200 text-slate-500")}>Married</button>
                  <button onClick={() => handleChange("isMarried", false)} className={cn("px-4 py-2 rounded-lg text-xs font-bold transition-all", formData.isMarried === false ? "bg-[var(--color-accent)] text-white shadow-md" : "bg-slate-200 text-slate-500")}>Single</button>
                </div>
              </div>

              {formData.isMarried && (
                <RecessedInput label="NUMBER OF CHILDREN" type="number" min={0} value={formData.childrenCount ?? ""} onChange={(e: any) => handleChange("childrenCount", parseInt(e.target.value) || 0)} />
              )}
            </div>
          </section>

          {/* Action Footer */}
          <div className="pt-6 mt-8 border-t-2 border-[#babecc] flex flex-col sm:flex-row items-center justify-between gap-4">
            <button 
              onClick={handleClear}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-red-500 hover:bg-red-50 transition-all flex items-center justify-center gap-2"
            >
              <LogOut size={18} /> CLEAR PROFILE
            </button>
            <button 
              onClick={handleSave}
              className={cn("w-full sm:w-auto px-10 py-3 rounded-xl font-black text-white transition-all flex items-center justify-center gap-2", saved ? "bg-green-500" : "bg-[var(--color-accent)]")}
              style={{ boxShadow: "var(--shadow-floating)" }}
            >
              {saved ? (
                <>SAVED SUCCESSFULLY ✓</>
              ) : (
                <><Save size={18} /> SAVE CHANGES</>
              )}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
