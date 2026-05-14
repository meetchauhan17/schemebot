"use client";

import { useState, useRef, useCallback, useEffect } from "react";

// ─── Type augmentation for Web Speech API ────────────────────────────────────

interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
  resultIndex: number;
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
}

interface SpeechRecognition extends EventTarget {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
  onstart: (() => void) | null;
}

declare global {
  interface Window {
    SpeechRecognition: new () => SpeechRecognition;
    webkitSpeechRecognition: new () => SpeechRecognition;
  }
}

// ─── Language code → BCP-47 locale mapping ───────────────────────────────────

const LANG_TO_LOCALE: Record<string, string> = {
  en: "en-IN",
  hi: "hi-IN",
  gu: "gu-IN",
  bn: "bn-IN",
  ta: "ta-IN",
  te: "te-IN",
  mr: "mr-IN",
  kn: "kn-IN",
  ml: "ml-IN",
  pa: "pa-IN",
  or: "or-IN",
  ur: "ur-PK",
};

// ─── Hook return type ─────────────────────────────────────────────────────────

interface UseVoiceReturn {
  isListening: boolean;
  isSpeaking: boolean;
  isSupported: boolean;
  transcript: string;
  startListening: (language: string, onTranscript?: (text: string) => void) => void;
  stopListening: () => void;
  speak: (text: string, language: string) => void;
  stopSpeaking: () => void;
}

// ─── useVoice ─────────────────────────────────────────────────────────────────

export function useVoice(): UseVoiceReturn {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState("");

  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const onTranscriptRef = useRef<((text: string) => void) | undefined>(undefined);

  // Determine browser support once on mount
  const isSupported =
    typeof window !== "undefined" &&
    ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) &&
    "speechSynthesis" in window;

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      recognitionRef.current?.abort();
      window.speechSynthesis?.cancel();
    };
  }, []);

  // ── startListening ──────────────────────────────────────────────────────────
  const startListening = useCallback(
    (language: string, onTranscript?: (text: string) => void) => {
      if (!isSupported || isListening) return;

      onTranscriptRef.current = onTranscript;
      setTranscript("");

      const SpeechRecognitionCtor =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognitionCtor();

      recognition.lang = LANG_TO_LOCALE[language] ?? "en-IN";
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        let interim = "";
        let final = "";

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const result = event.results[i];
          if (result.isFinal) {
            final += result[0].transcript;
          } else {
            interim += result[0].transcript;
          }
        }

        // Show interim transcript in real-time
        setTranscript(final || interim);

        // Call callback with final text
        if (final && onTranscriptRef.current) {
          onTranscriptRef.current(final.trim());
        }
      };

      recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
        console.warn("[useVoice] Recognition error:", event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
        recognitionRef.current = null;
      };

      recognitionRef.current = recognition;
      recognition.start();
    },
    [isListening, isSupported]
  );

  // ── stopListening ───────────────────────────────────────────────────────────
  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    recognitionRef.current = null;
    setIsListening(false);
  }, []);

  // ── speak ───────────────────────────────────────────────────────────────────
  const speak = useCallback(
    (text: string, language: string) => {
      if (!isSupported || !text.trim()) return;

      // Cancel any current speech
      window.speechSynthesis.cancel();

      // Strip markdown formatting for cleaner speech
      const cleanText = text
        .replace(/🏛️|💰|✅|📄|🔗|📞|🇮🇳|😊|⏳|❌|🌐/gu, "")
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .replace(/__(.*?)__/g, "$1")
        .replace(/\*(.*?)\*/g, "$1")
        .replace(/```[\s\S]*?```/g, "")
        .replace(/`([^`]+)`/g, "$1")
        .replace(/#{1,6}\s/g, "")
        .replace(/\n{2,}/g, ". ")
        .replace(/\n/g, " ")
        .trim();

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = LANG_TO_LOCALE[language] ?? "en-IN";
      utterance.rate = 0.9;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;

      // Try to find a voice matching the language
      const voices = window.speechSynthesis.getVoices();
      const targetLocale = LANG_TO_LOCALE[language] ?? "en-IN";

      const matchedVoice =
        voices.find((v) => v.lang === targetLocale) ||
        voices.find((v) => v.lang.startsWith(language)) ||
        voices.find((v) => v.lang.startsWith("en")); // fallback to any English voice

      if (matchedVoice) {
        utterance.voice = matchedVoice;
      }

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      // Chrome bug: voices may not load immediately
      if (voices.length === 0) {
        window.speechSynthesis.addEventListener(
          "voiceschanged",
          () => {
            const updatedVoices = window.speechSynthesis.getVoices();
            const v =
              updatedVoices.find((v) => v.lang === targetLocale) ||
              updatedVoices.find((v) => v.lang.startsWith(language)) ||
              updatedVoices.find((v) => v.lang.startsWith("en"));
            if (v) utterance.voice = v;
            window.speechSynthesis.speak(utterance);
          },
          { once: true }
        );
        return;
      }

      window.speechSynthesis.speak(utterance);
    },
    [isSupported]
  );

  // ── stopSpeaking ────────────────────────────────────────────────────────────
  const stopSpeaking = useCallback(() => {
    window.speechSynthesis?.cancel();
    setIsSpeaking(false);
  }, []);

  return {
    isListening,
    isSpeaking,
    isSupported,
    transcript,
    startListening,
    stopListening,
    speak,
    stopSpeaking,
  };
}