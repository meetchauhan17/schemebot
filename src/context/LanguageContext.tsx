"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language } from "@/types";

export const INDIAN_LANGUAGES: Language[] = [
  { code: "en", name: "English", nativeName: "English", isRTL: false, flag: "🇬🇧" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", isRTL: false, flag: "🇮🇳" },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી", isRTL: false, flag: "🇮🇳" },
  { code: "mr", name: "Marathi", nativeName: "मराठी", isRTL: false, flag: "🇮🇳" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা", isRTL: false, flag: "🇮🇳" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు", isRTL: false, flag: "🇮🇳" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்", isRTL: false, flag: "🇮🇳" },
  { code: "ur", name: "Urdu", nativeName: "اردو", isRTL: true, flag: "🇮🇳" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ", isRTL: false, flag: "🇮🇳" },
  { code: "or", name: "Odia", nativeName: "ଓଡ଼ିଆ", isRTL: false, flag: "🇮🇳" },
  { code: "ml", name: "Malayalam", nativeName: "മലയാളം", isRTL: false, flag: "🇮🇳" },
  { code: "pa", name: "Punjabi", nativeName: "ਪੰਜਾਬੀ", isRTL: false, flag: "🇮🇳" },
  { code: "as", name: "Assamese", nativeName: "অসমীয়া", isRTL: false, flag: "🇮🇳" },
  { code: "mai", name: "Maithili", nativeName: "मैथिली", isRTL: false, flag: "🇮🇳" },
  { code: "sat", name: "Santali", nativeName: "ᱥᱟᱱᱛᱟᱲᱤ", isRTL: false, flag: "🇮🇳" },
  { code: "ks", name: "Kashmiri", nativeName: "कॉशुर / كأشُر", isRTL: true, flag: "🇮🇳" },
  { code: "ne", name: "Nepali", nativeName: "नेपाली", isRTL: false, flag: "🇮🇳" },
  { code: "sd", name: "Sindhi", nativeName: "سنڌي", isRTL: true, flag: "🇮🇳" },
  { code: "kok", name: "Konkani", nativeName: "कोंकणी", isRTL: false, flag: "🇮🇳" },
  { code: "doi", name: "Dogri", nativeName: "डोगरी", isRTL: false, flag: "🇮🇳" },
  { code: "mni", name: "Manipuri", nativeName: "ꯃꯤꯇꯩꯂꯣꯟ", isRTL: false, flag: "🇮🇳" },
  { code: "brx", name: "Bodo", nativeName: "बड़ो", isRTL: false, flag: "🇮🇳" },
];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(INDIAN_LANGUAGES[0]);

  useEffect(() => {
    const saved = localStorage.getItem("schemebot-language");
    if (saved) {
      const found = INDIAN_LANGUAGES.find((l) => l.code === saved);
      if (found) {
        setLanguageState(found);
        document.documentElement.dir = found.isRTL ? "rtl" : "ltr";
        document.documentElement.lang = found.code;
      }
    }
  }, []);

  const setLanguage = (code: string) => {
    const found = INDIAN_LANGUAGES.find((l) => l.code === code);
    if (found) {
      setLanguageState(found);
      localStorage.setItem("schemebot-language", code);
      document.documentElement.dir = found.isRTL ? "rtl" : "ltr";
      document.documentElement.lang = found.code;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
