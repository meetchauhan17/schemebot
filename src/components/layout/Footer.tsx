"use client";

import React from "react";
import Link from "next/link";
import { Twitter, Github, Mail, ExternalLink, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home",           href: "/" },
  { label: "Chat Assistant", href: "/chat" },
  { label: "Browse Schemes", href: "/schemes" },
  { label: "Saved Schemes",  href: "/saved" },
  { label: "Live Dashboard", href: "/dashboard" },
];

const topSchemes = [
  { label: "PM-KISAN",           href: "/schemes" },
  { label: "Ayushman Bharat",    href: "/schemes" },
  { label: "PM Awas Yojana",     href: "/schemes" },
  { label: "Sukanya Samriddhi",  href: "/schemes" },
  { label: "MUDRA Yojana",       href: "/schemes" },
];

const socialLinks = [
  { href: "https://twitter.com",                 icon: Twitter,  label: "Twitter" },
  { href: "https://github.com",                  icon: Github,   label: "GitHub" },
  { href: "mailto:hello@schemebotindia.com",     icon: Mail,     label: "Email" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="hardware-panel mt-16 border-t-4 border-[#1a2530]">
      {/* ── Main footer body ─────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Column 1: Identity */}
          <div className="space-y-6">
            {/* Logo panel */}
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                   style={{ boxShadow: "4px 4px 8px rgba(0,0,0,0.4), -2px -2px 6px rgba(255,255,255,0.05)" }}>
                <span className="font-mono font-black text-xs text-[var(--color-accent)] tracking-tighter">SB</span>
                <span className="absolute -top-0.5 -right-0.5 led led-green w-2.5 h-2.5" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-sans font-black text-base tracking-[-0.02em] text-white uppercase">
                  SCHEME<span className="text-[var(--color-accent)]">//</span>BOT
                </span>
                <span className="label-mono text-[#a8b2d1] text-[10px]">INDIA · AI ASSISTANT</span>
              </div>
            </div>

            <p className="text-sm text-[#a8b2d1] leading-relaxed font-medium max-w-[220px]">
              AI-powered platform. Find government schemes in your language. Free forever.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[#a8b2d1] hover:text-white transition-all duration-150 active:translate-y-[1px]"
                  style={{ boxShadow: "4px 4px 8px rgba(0,0,0,0.4), -2px -2px 6px rgba(255,255,255,0.04)" }}
                >
                  <Icon size={16} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="label-mono text-[#a8b2d1] mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#a8b2d1] hover:text-white font-medium transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Top Schemes */}
          <div>
            <h3 className="label-mono text-[#a8b2d1] mb-5">Top Schemes</h3>
            <ul className="space-y-3">
              {topSchemes.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#a8b2d1] hover:text-white font-medium transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h3 className="label-mono text-[#a8b2d1] mb-5">Support</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://india.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[#a8b2d1] hover:text-white transition-colors flex items-center gap-1.5 group font-medium"
                >
                  <ExternalLink size={12} strokeWidth={1.5} className="opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  Official Government Portal
                </a>
              </li>
              <li>
                <a
                  href="https://myscheme.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[#a8b2d1] hover:text-white transition-colors flex items-center gap-1.5 group font-medium"
                >
                  <ExternalLink size={12} strokeWidth={1.5} className="opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  myScheme.gov.in
                </a>
              </li>
              <li>
                <a
                  href="https://csc.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[#a8b2d1] hover:text-white transition-colors flex items-center gap-1.5 group font-medium"
                >
                  <ExternalLink size={12} strokeWidth={1.5} className="opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  Common Service Centres
                </a>
              </li>
              <li className="flex items-center gap-1.5 text-sm text-[#a8b2d1] font-medium">
                <Phone size={12} strokeWidth={1.5} className="opacity-70 flex-shrink-0" />
                Helpline: <span className="text-white font-mono font-bold ml-1">1800-11-1555</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-[#3d4a52] mb-8" />

        {/* ── Bottom bar ── */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="led led-green w-2 h-2" />
            <p className="label-mono text-[#a8b2d1] text-[10px]">
              &copy; {currentYear} SCHEMEBOT INDIA — BUILD v2.0
            </p>
          </div>
          <p className="text-[11px] font-medium text-[#5a6a72] text-center md:text-right max-w-md">
            Independent tool — not affiliated with the Government of India.
            All scheme information sourced from official portals.
          </p>
        </div>
      </div>
    </footer>
  );
}