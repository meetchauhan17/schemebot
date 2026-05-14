"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage, INDIAN_LANGUAGES } from "@/context/LanguageContext";
import { Globe, Menu, X, ChevronDown, Search, Check, LayoutDashboard, MessageSquare, BookOpen, Bookmark, Home, UserPlus, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useProfileContext } from "@/context/ProfileContext";
import ProfilePanel from "@/components/profile/ProfilePanel";

const navLinks = [
  { name: "Home",      href: "/",          icon: Home },
  { name: "Chat",      href: "/chat",       icon: MessageSquare },
  { name: "Schemes",   href: "/schemes",    icon: BookOpen },
  { name: "Saved",     href: "/saved",      icon: Bookmark },
  { name: "Dashboard", href: "/dashboard",  icon: LayoutDashboard },
];

export default function Navbar() {
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [langSearch, setLangSearch] = useState("");
  const [isProfilePanelOpen, setIsProfilePanelOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsLangOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isLangOpen) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-lang-popover]")) {
        setIsLangOpen(false);
        setLangSearch("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isLangOpen]);

  const filteredLanguages = INDIAN_LANGUAGES.filter(
    (l) =>
      langSearch === "" ||
      l.nativeName.toLowerCase().includes(langSearch.toLowerCase()) ||
      l.name.toLowerCase().includes(langSearch.toLowerCase())
  );

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <>
      {/* ── Status Bar — top of page ───────────────────────────── */}
      <div className="w-full bg-[var(--surface-dark)] px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="led led-green" />
          <span className="label-mono text-[#c8d4e0]">SYSTEM OPERATIONAL</span>
        </div>
        <span className="label-mono text-[#c8d4e0]">150+ SCHEMES INDEXED // v2.0</span>
      </div>

      {/* ── Main Navbar ─────────────────────────────────────────── */}
      <nav className="sticky top-0 z-[300] w-full bg-[var(--surface-page)] border-b-4 border-[#babecc]"
           style={{ boxShadow: "0 4px 12px rgba(163,177,198,0.4), 0 1px 0 rgba(255,255,255,0.8)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
              {/* Circular housing with accent LED */}
              <div className="relative w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                   style={{ boxShadow: "var(--shadow-floating)" }}>
                <span className="font-mono font-black text-xs text-[var(--color-accent)] tracking-tighter">SB</span>
                <span className="absolute -top-0.5 -right-0.5 led led-green w-2.5 h-2.5" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-sans font-black text-lg tracking-[-0.03em] text-[var(--text-primary)] uppercase">
                  SCHEME<span className="text-[var(--color-accent)]">//</span>BOT
                </span>
                <span className="label-mono text-[10px]">INDIA · AI ASSISTANT</span>
              </div>
            </Link>

            {/* ── Desktop Nav Links ── */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "relative flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-150 font-mono",
                      active
                        ? "text-[var(--color-accent)]"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    )}
                    style={
                      active
                        ? { boxShadow: "var(--shadow-pressed)", borderRadius: "var(--radius-md)", background: "var(--surface-page)" }
                        : {}
                    }
                  >
                    <Icon size={14} strokeWidth={2} />
                    {link.name}
                    {active && (
                      <span className="absolute -bottom-[1px] left-0 right-0 h-[3px] bg-[var(--color-accent)] rounded-t-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* ── Right Actions ── */}
            <div className="flex items-center gap-2">

              {/* Language Selector */}
              <div className="relative hidden sm:block" data-lang-popover>
                <button
                  onClick={() => { setIsLangOpen(!isLangOpen); setLangSearch(""); }}
                  className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold font-mono uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"
                  style={{ boxShadow: "var(--shadow-sharp)", borderRadius: "var(--radius-md)", background: "var(--surface-page)" }}
                  aria-label="Select language"
                >
                  <Globe size={14} strokeWidth={1.5} />
                  <span className="max-w-[60px] truncate">{language.nativeName}</span>
                  <ChevronDown size={12} className={cn("transition-transform duration-200", isLangOpen && "rotate-180")} />
                </button>

                {isLangOpen && (
                  <div
                    className="absolute right-0 top-full mt-2 w-64 animate-in fade-in slide-in-from-top-2 duration-200"
                    style={{ zIndex: 500, background: "var(--surface-page)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-floating)", border: "1px solid var(--shadow-dark)" }}
                    data-lang-popover
                  >
                    {/* Search */}
                    <div className="p-3 pb-2">
                      <div className="flex items-center gap-2 px-3 py-2.5"
                           style={{ boxShadow: "var(--shadow-recessed)", borderRadius: "var(--radius-md)", background: "var(--surface-page)" }}>
                        <Search size={14} strokeWidth={1.5} className="text-[var(--text-muted)]" />
                        <input
                          type="text"
                          placeholder="Search language..."
                          value={langSearch}
                          onChange={(e) => setLangSearch(e.target.value)}
                          className="flex-1 bg-transparent text-sm font-mono outline-none text-[var(--text-primary)] placeholder:text-[var(--text-muted)]"
                          autoFocus
                        />
                      </div>
                    </div>
                    {/* List */}
                    <div className="p-2 grid grid-cols-2 gap-1 max-h-56 overflow-y-auto hide-scrollbar">
                      {filteredLanguages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => { setLanguage(lang.code); setIsLangOpen(false); setLangSearch(""); }}
                          className={cn(
                            "flex items-center justify-between px-3 py-2.5 rounded-md text-xs font-mono text-left transition-all duration-150",
                            language.code === lang.code
                              ? "text-[var(--color-accent)]"
                              : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                          )}
                          style={
                            language.code === lang.code
                              ? { boxShadow: "var(--shadow-pressed)", background: "var(--surface-page)" }
                              : {}
                          }
                        >
                          <span>{lang.nativeName}</span>
                          {language.code === lang.code && <Check size={12} strokeWidth={3} />}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Profile Icon */}
              <ProfileNavIcon onOpenPanel={() => setIsProfilePanelOpen(true)} />

              {/* Mobile hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all active:translate-y-[1px]"
                style={{ boxShadow: "var(--shadow-floating)", borderRadius: "var(--radius-md)", background: "var(--surface-page)" }}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen
                  ? <X size={20} strokeWidth={2} />
                  : <Menu size={20} strokeWidth={1.5} />
                }
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Mobile Menu Sheet ───────────────────────────────────── */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-[400] flex"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-[var(--surface-dark)]/60" />

          {/* Panel from right */}
          <div
            className="ml-auto relative w-80 max-w-[85vw] h-full flex flex-col animate-in slide-in-from-right-8 duration-200"
            style={{ background: "var(--surface-page)", boxShadow: "var(--shadow-floating)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Panel header */}
            <div className="flex items-center justify-between px-5 py-5 border-b-2 border-[#babecc]">
              <div className="flex items-center gap-2">
                <span className="led led-green w-2.5 h-2.5" />
                <span className="font-mono font-black text-sm uppercase tracking-widest text-[var(--text-primary)]">
                  SCHEME<span className="text-[var(--color-accent)]">//</span>BOT
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-[var(--text-secondary)] transition-all active:translate-y-[1px]"
                style={{ boxShadow: "var(--shadow-floating)", borderRadius: "var(--radius-md)", background: "var(--surface-page)" }}
              >
                <X size={18} strokeWidth={2} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto px-4 py-5 space-y-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "flex items-center gap-3 px-5 py-4 text-sm font-mono font-bold uppercase tracking-widest transition-all duration-150",
                      active ? "text-[var(--color-accent)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    )}
                    style={{
                      borderRadius: "var(--radius-md)",
                      boxShadow: active ? "var(--shadow-pressed)" : "var(--shadow-card)",
                      background: "var(--surface-page)",
                    }}
                  >
                    <Icon size={18} strokeWidth={active ? 2 : 1.5} />
                    {link.name}
                    {active && <span className="ml-auto led led-red w-2 h-2" />}
                  </Link>
                );
              })}
            </nav>

            {/* Language selector */}
            <div className="px-4 pb-8 pt-5 border-t-2 border-[#babecc]">
              <p className="label-mono mb-3 px-1">Language / भाषा</p>
              <div className="grid grid-cols-2 gap-2">
                {INDIAN_LANGUAGES.slice(0, 12).map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => { setLanguage(lang.code); setIsMobileMenuOpen(false); }}
                    className={cn(
                      "px-3 py-2.5 text-xs text-center font-mono font-bold uppercase tracking-wide transition-all duration-150",
                      language.code === lang.code ? "text-[var(--color-accent)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    )}
                    style={{
                      borderRadius: "var(--radius-md)",
                      boxShadow: language.code === lang.code ? "var(--shadow-pressed)" : "var(--shadow-card)",
                      background: "var(--surface-page)",
                    }}
                  >
                    {lang.nativeName}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Profile Panel Drawer */}
      <ProfilePanel open={isProfilePanelOpen} onOpenChange={setIsProfilePanelOpen} />
    </>
  );
}

function ProfileNavIcon({ onOpenPanel }: { onOpenPanel: () => void }) {
  const { profile, completeness, hasProfile } = useProfileContext();
  
  if (!hasProfile) {
    return (
      <button 
        onClick={onOpenPanel}
        title="Set up your profile to find schemes faster"
        className="relative w-8 h-8 rounded-full border-2 border-dashed flex items-center justify-center transition-all animate-[pulse_2s_ease-in-out_infinite] hover:animate-none ml-1 md:ml-2"
        style={{ borderColor: "var(--color-accent)", color: "var(--color-accent)" }}
      >
        <UserPlus size={16} strokeWidth={2} />
      </button>
    );
  }

  const name = profile?.name || "User";
  const colors = ["#2563eb", "#9333ea", "#16a34a", "#ea580c", "#dc2626", "#0d9488"];
  const colorIndex = name.charCodeAt(0) % colors.length;
  const bgColor = colors[colorIndex];
  const initials = profile?.name ? profile.name.slice(0, 2).toUpperCase() : "";

  const isComplete = completeness >= 80;

  return (
    <button
      onClick={onOpenPanel}
      title={isComplete ? `Profile complete — ${completeness}%` : `Your profile is ${completeness}% complete — add more to find more schemes`}
      className={cn(
        "relative w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs text-white transition-all active:translate-y-[1px] ml-1 md:ml-2",
        !isComplete && "outline outline-2 outline-orange-400 outline-offset-2",
        isComplete && "outline outline-2 outline-green-400 outline-offset-2"
      )}
      style={{
        backgroundColor: bgColor,
        boxShadow: "var(--shadow-floating)",
      }}
    >
      {initials || <User size={14} />}
      
      {/* Badge */}
      {isComplete ? (
        <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full flex items-center justify-center bg-green-500 border-2 border-[var(--surface-page)] text-white">
          <Check size={8} strokeWidth={4} />
        </div>
      ) : (
        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-orange-500 border-2 border-[var(--surface-page)]" />
      )}
    </button>
  );
}