import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import PWAInstallPrompt from "@/components/shared/PWAInstallPrompt";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh overflow-x-hidden flex flex-col" style={{ background: "var(--surface-page)" }}>
      {/* Navbar — sticky NOT fixed (sticky avoids layout shift) */}
      <Navbar />

      {/* Main content — flex-1 fills remaining space after Navbar */}
      <main className="flex-1 min-h-0 flex flex-col pb-[var(--bottom-nav-height)] md:pb-0">
        {children}
      </main>

      {/* Footer — only on desktop */}
      <div className="hidden md:block">
        <Footer />
      </div>

      {/* Mobile bottom nav — only on small screens */}
      <MobileBottomNav />

      <PWAInstallPrompt />
    </div>
  );
}
