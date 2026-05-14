import type { Metadata } from "next";
import { cookies } from "next/headers";
import ChatInterface from "@/components/chat/ChatInterface";
import Link from "next/link";
import { Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "SchemeBot India — AI Scheme Assistant",
  description:
    "Find government schemes you qualify for. Talk to SchemeBot India in your language — Hindi, Gujarati, Tamil, Telugu and more.",
  keywords: ["government schemes India", "yojana", "sarkari yojana", "AI scheme assistant", "free schemes"],
};

export default async function ChatPage() {
  const cookieStore = await cookies();
  const onboardingDone = cookieStore.get("schemebot_onboarding")?.value === "complete";

  return (
    /*
     * Height = 100dvh minus the sticky Navbar (--navbar-height)
     * On mobile, also subtract the bottom nav (--bottom-nav-height) so
     * the ChatInput never hides behind it.
     */
    <div
      className="flex flex-col overflow-hidden"
      style={{
        height: "calc(100dvh - var(--navbar-height))",
        maxHeight: "calc(100dvh - var(--navbar-height))",
      }}
    >
      {/* Profile nudge — only shown when onboarding not done */}
      {!onboardingDone && (
        <div
          className="flex-shrink-0 flex items-center justify-between gap-3 px-4 py-2"
          style={{ background: "var(--color-warning)", boxShadow: "0 2px 6px rgba(0,0,0,0.2)" }}
        >
          <div className="flex items-center gap-1.5">
            <Zap size={12} strokeWidth={2} className="text-white flex-shrink-0" />
            <span className="label-mono text-[10px] text-white" style={{ color: "inherit" }}>
              COMPLETE YOUR PROFILE FOR ACCURATE MATCHES
            </span>
          </div>
          <Link
            href="/onboarding"
            className="flex-shrink-0 px-3 py-1 font-mono font-bold text-[10px] uppercase tracking-wider text-amber-900 transition-all active:translate-y-[1px]"
            style={{ background: "rgba(255,255,255,0.9)", borderRadius: "var(--radius-sm)" }}
          >
            SET UP →
          </Link>
        </div>
      )}

      {/* ChatInterface fills remaining height */}
      <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
        <ChatInterface />
      </div>
    </div>
  );
}