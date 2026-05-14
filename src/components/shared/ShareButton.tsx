"use client";

import React, { useState } from "react";
import { Share2, Link as LinkIcon, MessageCircle } from "lucide-react";
import { Scheme } from "@/types";
import { shareOnWhatsApp, copySchemeLink, nativeShare } from "@/lib/sharing";
import { useLanguage } from "@/context/LanguageContext";

export default function ShareButton({ scheme }: { scheme: Scheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const { language } = useLanguage();

  const handleCopy = async () => {
    await copySchemeLink(scheme.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    setIsOpen(false);
  };

  const handleWhatsApp = () => {
    shareOnWhatsApp(scheme, language.code);
    setIsOpen(false);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      await nativeShare(scheme);
    } else {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="relative inline-block text-left">
      <button 
        onClick={handleNativeShare}
        className="p-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
        title="Share Scheme"
      >
        <Share2 className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white dark:bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 z-50 animate-in zoom-in-95 duration-200">
          <div className="py-1" role="menu">
            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-3 w-full px-4 py-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-green-600 transition-colors text-left font-medium"
            >
              <MessageCircle className="w-4 h-4 text-green-500" /> WhatsApp
            </button>
            <button
              onClick={handleCopy}
              className="flex items-center gap-3 w-full px-4 py-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 transition-colors text-left font-medium"
            >
              <LinkIcon className="w-4 h-4 text-blue-500" /> {copied ? "Copied!" : "Copy Link"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}