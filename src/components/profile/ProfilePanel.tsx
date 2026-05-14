"use client";

import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useProfileContext } from "@/context/ProfileContext";
import { useRouter } from "next/navigation";
import { User, ChevronRight, MessageSquare, ClipboardList, LogOut, Globe, Check, Edit3, MapPin, Briefcase, Wallet, Users, Heart, UserPlus, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage, INDIAN_LANGUAGES } from "@/context/LanguageContext";

export default function ProfilePanel({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const { profile, completeness, matchedCount, estimatedBenefit, clearProfile, hasProfile } = useProfileContext();
  const router = useRouter();
  const { language, setLanguage } = useLanguage();
  const [showLangMenu, setShowLangMenu] = React.useState(false);

  const name = profile?.name || "User";
  const colors = ["#2563eb", "#9333ea", "#16a34a", "#ea580c", "#dc2626", "#0d9488"];
  const bgColor = colors[name.charCodeAt(0) % colors.length];
  const initials = profile?.name ? profile.name.slice(0, 2).toUpperCase() : "";

  const isComplete = completeness >= 80;

  const handleClear = () => {
    if (confirm("Are you sure? This will clear all your profile data and scheme matches.")) {
      clearProfile();
      onOpenChange(false);
    }
  };

  const navTo = (path: string) => {
    onOpenChange(false);
    router.push(path);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:w-[380px] p-0 border-l-2 border-[#babecc] bg-[var(--surface-page)] overflow-y-auto flex flex-col hide-scrollbar [&>button.absolute]:hidden" style={{ boxShadow: "var(--shadow-floating)" }}>
        
        {/* Header */}
        <div className="p-6 pb-4 border-b-2 border-[#babecc] relative">
          {/* Custom Close Button */}
          <button onClick={() => onOpenChange(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all active:scale-95" style={{ boxShadow: "var(--shadow-recessed)", background: "var(--surface-page)" }}>
            <X size={14} strokeWidth={2.5} />
          </button>

          <div className="flex items-center gap-4 mt-2">
            <div 
              className={cn("w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0 relative",
                !hasProfile && "bg-slate-200 text-slate-400 border-2 border-dashed border-slate-400"
              )}
              style={hasProfile ? { backgroundColor: bgColor, boxShadow: "var(--shadow-floating)" } : {}}
            >
              {hasProfile ? (initials || <User size={24} />) : <User size={24} />}
              
              {/* LED Badges instead of outlines */}
              {hasProfile && isComplete && (
                <div className="absolute -bottom-1 -right-1 w-5 h-5 flex items-center justify-center rounded-full bg-green-500 border-2 border-[var(--surface-page)]" style={{ boxShadow: "0 0 8px rgba(34,197,94,0.6)" }}>
                   <Check size={10} strokeWidth={3} className="text-white" />
                </div>
              )}
              {hasProfile && !isComplete && (
                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-orange-500 border-2 border-[var(--surface-page)]" style={{ boxShadow: "0 0 8px rgba(249,115,22,0.6)" }} />
              )}
            </div>
            <div className="flex-1 min-w-0 pr-8">
              <h2 className="text-lg font-black text-[#2d3436] truncate">{hasProfile ? name : "Your Profile"}</h2>
              {hasProfile ? (
                <>
                  <p className={cn("text-sm font-bold", isComplete ? "text-green-700" : "text-orange-600")}>
                    {completeness}% complete
                  </p>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5 font-mono">{matchedCount} SCHEMES MATCHED</p>
                </>
              ) : (
                <p className="text-xs text-[var(--text-muted)] mt-0.5">Setup to unlock schemes</p>
              )}
            </div>
          </div>

          {/* Completeness Bar */}
          {hasProfile && (
            <div className="mt-5">
              <div className="h-2.5 w-full rounded-full overflow-hidden p-0.5" style={{ background: "var(--surface-page)", boxShadow: "var(--shadow-recessed)" }}>
                <div 
                  className={cn("h-full rounded-full transition-all duration-1000", isComplete ? "bg-green-500" : "bg-orange-500")}
                  style={{ 
                    width: `${completeness}%`, 
                    boxShadow: isComplete ? "inset 0 1px 2px rgba(255,255,255,0.4), 0 0 6px rgba(34,197,94,0.6)" : "inset 0 1px 2px rgba(255,255,255,0.4), 0 0 6px rgba(249,115,22,0.6)" 
                  }}
                />
              </div>
              {!isComplete && (
                <button onClick={() => navTo("/profile")} className="mt-2 text-xs font-bold text-[var(--color-accent)] hover:underline flex items-center gap-1">
                  Complete profile to unlock more schemes <ChevronRight size={12} />
                </button>
              )}
            </div>
          )}
        </div>

        {/* Quick Stats Row - LCD Displays */}
        {hasProfile && (
          <div className="px-5 py-5 grid grid-cols-3 gap-3 border-b-2 border-[#babecc] bg-[var(--surface-page)]">
            <div className="flex flex-col items-center justify-center p-3 rounded-xl text-center bg-[#1e293b]" style={{ boxShadow: "inset 2px 2px 6px rgba(0,0,0,0.5), inset -1px -1px 2px rgba(255,255,255,0.1)" }}>
              <span className="text-xl font-mono font-black text-[var(--color-accent)] leading-none mb-1" style={{ textShadow: "0 0 8px rgba(255,71,87,0.4)" }}>{matchedCount}</span>
              <span className="text-[8px] uppercase font-mono font-bold text-[#94a3b8] tracking-widest">Schemes</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 rounded-xl text-center bg-[#1e293b]" style={{ boxShadow: "inset 2px 2px 6px rgba(0,0,0,0.5), inset -1px -1px 2px rgba(255,255,255,0.1)" }}>
              <span className="text-xl font-mono font-black text-[#22c55e] leading-none mb-1 truncate w-full" title={estimatedBenefit} style={{ textShadow: "0 0 8px rgba(34,197,94,0.4)" }}>{estimatedBenefit === "₹0" ? "-" : estimatedBenefit}</span>
              <span className="text-[8px] uppercase font-mono font-bold text-[#94a3b8] tracking-widest">Benefit</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 rounded-xl text-center bg-[#1e293b]" style={{ boxShadow: "inset 2px 2px 6px rgba(0,0,0,0.5), inset -1px -1px 2px rgba(255,255,255,0.1)" }}>
              <span className="text-xl font-mono font-black text-[#60a5fa] leading-none mb-1" style={{ textShadow: "0 0 8px rgba(96,165,250,0.4)" }}>10+</span>
              <span className="text-[8px] uppercase font-mono font-bold text-[#94a3b8] tracking-widest">Categories</span>
            </div>
          </div>
        )}

        {/* Profile Summary */}
        <div className="p-6 flex-1 flex flex-col gap-4">
          {hasProfile ? (
            <div className="space-y-3">
              <SummaryRow icon={MapPin} label="Location" value={profile.state ? `${profile.state}${profile.area ? `, ${profile.area}` : ""}` : null} onEdit={() => navTo("/profile")} />
              <SummaryRow icon={User} label="Age & Gender" value={profile.age ? `${profile.age}, ${profile.gender || "Not specified"}` : null} onEdit={() => navTo("/profile")} />
              <SummaryRow icon={Briefcase} label="Occupation" value={profile.occupation} onEdit={() => navTo("/profile")} />
              <SummaryRow icon={Wallet} label="Income" value={profile.annualIncome ? profile.annualIncome.replace(/_/g, "-") : null} onEdit={() => navTo("/profile")} />
              <SummaryRow icon={Users} label="Category" value={profile.caste ? profile.caste.toUpperCase() : null} onEdit={() => navTo("/profile")} />
              <SummaryRow icon={Heart} label="Family" value={profile.maritalStatus ? `${profile.maritalStatus}${profile.childrenCount ? `, ${profile.childrenCount} children` : ""}` : null} onEdit={() => navTo("/profile")} />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-center px-4">
              <UserPlus size={48} className="text-slate-300 mb-4" strokeWidth={1} />
              <h3 className="font-bold text-lg mb-2">Build Your Profile</h3>
              <p className="text-sm text-[var(--text-muted)] mb-6">Answer a few quick questions to instantly find schemes you qualify for.</p>
              <button 
                onClick={() => navTo("/onboarding")}
                className="w-full py-3 rounded-xl font-bold uppercase tracking-wider text-sm transition-all text-white bg-[var(--color-accent)]"
                style={{ boxShadow: "var(--shadow-floating)" }}
              >
                Set Up Profile Now
              </button>
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-auto space-y-3 pt-6">
            <button onClick={() => navTo("/schemes?view=mine")} className="w-full flex items-center gap-3 p-4 rounded-xl font-bold transition-all active:translate-y-[2px]" style={{ boxShadow: "var(--shadow-card)", background: "var(--surface-page)" }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ boxShadow: "var(--shadow-recessed)" }}>
                <ClipboardList size={14} strokeWidth={2} style={{ color: "var(--color-accent)" }} />
              </div>
              <span className="label-mono text-xs text-[var(--text-primary)] tracking-wider">VIEW ALL MY SCHEMES</span>
            </button>
            <button onClick={() => navTo("/chat")} className="w-full flex items-center gap-3 p-4 rounded-xl font-bold transition-all active:translate-y-[2px]" style={{ boxShadow: "var(--shadow-card)", background: "var(--surface-page)" }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ boxShadow: "var(--shadow-recessed)" }}>
                <MessageSquare size={14} strokeWidth={2} className="text-blue-500" />
              </div>
              <span className="label-mono text-xs text-[var(--text-primary)] tracking-wider">CHAT WITH AI</span>
            </button>
            <button onClick={() => navTo("/profile")} className="w-full flex items-center gap-3 p-4 rounded-xl font-bold transition-all active:translate-y-[2px]" style={{ boxShadow: "var(--shadow-card)", background: "var(--surface-page)" }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ boxShadow: "var(--shadow-recessed)" }}>
                <Edit3 size={14} strokeWidth={2} className="text-orange-500" />
              </div>
              <span className="label-mono text-xs text-[var(--text-primary)] tracking-wider">EDIT FULL PROFILE</span>
            </button>
            
            {hasProfile && (
              <button onClick={handleClear} className="w-full flex items-center gap-3 p-4 rounded-xl font-bold transition-all active:translate-y-[2px]" style={{ boxShadow: "var(--shadow-card)", background: "var(--surface-page)" }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ boxShadow: "var(--shadow-recessed)" }}>
                  <LogOut size={14} strokeWidth={2} className="text-red-500" />
                </div>
                <span className="label-mono text-xs text-red-500 tracking-wider">CLEAR PROFILE</span>
              </button>
            )}

            {/* Language Quick Switch */}
            <div className="pt-4 border-t-2 border-[#babecc] mt-4 relative">
              <button onClick={() => setShowLangMenu(!showLangMenu)} className="w-full flex items-center justify-between p-2 rounded-lg text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all">
                <div className="flex items-center gap-2 font-mono">
                  <Globe size={14} /> Language: <span className="font-bold text-[var(--text-primary)]">{language.nativeName}</span>
                </div>
                <span className="text-[10px] uppercase font-bold text-[var(--color-accent)]">Change</span>
              </button>
              
              {showLangMenu && (
                <div className="absolute bottom-full left-0 w-full mb-2 bg-[var(--surface-page)] border border-[#babecc] rounded-xl p-2 grid grid-cols-2 gap-1 max-h-48 overflow-y-auto" style={{ boxShadow: "var(--shadow-floating)", zIndex: 600 }}>
                  {INDIAN_LANGUAGES.slice(0, 10).map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setLanguage(lang.code); setShowLangMenu(false); }}
                      className="flex items-center justify-between p-2 rounded text-xs font-mono transition-all"
                      style={language.code === lang.code ? { background: "var(--surface-dark)", color: "var(--color-accent)" } : {}}
                    >
                      {lang.nativeName}
                      {language.code === lang.code && <Check size={12} />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function SummaryRow({ icon: Icon, label, value, onEdit }: { icon: any, label: string, value: string | null | undefined, onEdit: () => void }) {
  return (
    <div className="flex items-center gap-3">
      {/* Hardware recessed well for icon */}
      <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ boxShadow: "var(--shadow-recessed)", background: "var(--surface-page)" }}>
        <Icon size={16} strokeWidth={2} style={{ color: "var(--color-accent)" }} />
      </div>
      
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-mono font-bold uppercase text-[var(--text-muted)] tracking-wider mb-0.5">{label}</p>
        <p className={cn("text-sm font-medium truncate text-[var(--text-primary)]", !value && "text-[var(--text-muted)] italic")}>
          {value || "Not set"}
        </p>
      </div>
      
      <button onClick={onEdit} className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-[var(--text-muted)] hover:text-[var(--color-accent)] transition-all active:scale-95" style={{ boxShadow: "var(--shadow-floating)", background: "var(--surface-page)" }}>
        <Edit3 size={14} strokeWidth={2} />
      </button>
    </div>
  );
}
