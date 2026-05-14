"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, MessageSquare, BookOpen, Bookmark, User, UserPlus, Check } from "lucide-react";
import { getSavedSchemes } from "@/lib/savedSchemes";
import { cn } from "@/lib/utils";
import { useProfileContext } from "@/context/ProfileContext";

const navItems = [
  { name: "Home",      href: "/",          icon: Home },
  { name: "Chat",      href: "/chat",       icon: MessageSquare },
  { name: "Schemes",   href: "/schemes",    icon: BookOpen },
  { name: "Saved",     href: "/saved",      icon: Bookmark },
  { name: "Profile",   href: "/profile",    icon: User },
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [savedCount, setSavedCount] = useState(0);
  const [mounted, setMounted] = useState(false);
  const { profile, completeness, hasProfile } = useProfileContext();

  useEffect(() => {
    setMounted(true);
    const updateCount = () => setSavedCount(getSavedSchemes().length);
    updateCount();
    const interval = setInterval(updateCount, 2000);
    window.addEventListener("focus", updateCount);
    return () => {
      clearInterval(interval);
      window.removeEventListener("focus", updateCount);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-[300]"
      style={{
        background: "var(--surface-page)",
        boxShadow: "0 -4px 12px rgba(163,177,198,0.5), 0 -1px 0 rgba(255,255,255,0.8)",
        borderTop: "2px solid #babecc",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      <div className="flex items-stretch justify-around px-2" style={{ height: "var(--bottom-nav-height)" }}>
        {navItems.map((item) => {
          const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          const Icon = item.icon;
          const showBadge = item.name === "Saved" && savedCount > 0;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="relative flex flex-col items-center justify-center flex-1 gap-1 py-2 mx-1 transition-all duration-150 active:translate-y-[1px]"
              style={{
                borderRadius: "var(--radius-md)",
                boxShadow: isActive ? "var(--shadow-pressed)" : undefined,
              }}
            >
              {/* Active accent bar at bottom */}
              {isActive && (
                <span
                  className="absolute -bottom-[2px] left-3 right-3 h-[2px] rounded-t-full"
                  style={{ background: "var(--color-accent)" }}
                />
              )}

              {/* Icon */}
              <div className="relative">
                {item.name === "Profile" ? (
                  <MobileProfileIcon
                    profile={profile}
                    completeness={completeness}
                    hasProfile={hasProfile}
                    isActive={isActive}
                  />
                ) : (
                  <>
                    <Icon
                      size={isActive ? 22 : 20}
                      strokeWidth={isActive ? 2.5 : 1.5}
                      style={{ color: isActive ? "var(--color-accent)" : "var(--text-secondary)" }}
                    />
                    {showBadge && (
                      <span
                        suppressHydrationWarning
                        className="absolute -top-1.5 -right-2 min-w-[16px] h-4 px-1 rounded-full text-[9px] font-bold text-white flex items-center justify-center"
                        style={{ background: "var(--color-accent)", boxShadow: "var(--shadow-glow-accent)" }}
                      >
                        {savedCount > 9 ? "9+" : savedCount}
                      </span>
                    )}
                  </>
                )}
              </div>

              {/* Label */}
              <span
                className="label-mono text-[9px]"
                style={{ color: isActive ? "var(--color-accent)" : "var(--text-muted)" }}
              >
                {item.name.toUpperCase()}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function MobileProfileIcon({ profile, completeness, hasProfile, isActive }: any) {
  if (!hasProfile) {
    return (
      <div 
        className={cn("relative w-6 h-6 rounded-full border border-dashed flex items-center justify-center transition-all animate-[pulse_2s_ease-in-out_infinite] hover:animate-none",
          isActive ? "border-[var(--color-accent)] text-[var(--color-accent)]" : "border-slate-400 text-slate-400"
        )}
      >
        <UserPlus size={14} strokeWidth={isActive ? 2.5 : 1.5} />
      </div>
    );
  }

  const name = profile?.name || "User";
  const colors = ["#2563eb", "#9333ea", "#16a34a", "#ea580c", "#dc2626", "#0d9488"];
  const colorIndex = name.charCodeAt(0) % colors.length;
  const bgColor = colors[colorIndex];
  const initials = profile?.name ? profile.name.slice(0, 2).toUpperCase() : "";

  const isComplete = completeness >= 80;

  return (
    <div
      className={cn(
        "relative w-6 h-6 rounded-full flex items-center justify-center font-bold text-[10px] text-white transition-all",
        !isComplete && "outline outline-[1.5px] outline-orange-400 outline-offset-1",
        isComplete && "outline outline-[1.5px] outline-green-400 outline-offset-1",
        isActive && "scale-110"
      )}
      style={{
        backgroundColor: bgColor,
      }}
    >
      {initials || <User size={12} />}
      
      {/* Badge */}
      {isComplete ? (
        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full flex items-center justify-center bg-green-500 border border-[var(--surface-page)] text-white">
          <Check size={6} strokeWidth={4} />
        </div>
      ) : (
        <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-orange-500 border border-[var(--surface-page)]" />
      )}
    </div>
  );
}