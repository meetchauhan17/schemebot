"use client";

import React, { useState, useEffect } from "react";
import { Mic, MicOff } from "lucide-react";
import { useVoice } from "@/hooks/useVoice";

interface VoiceButtonProps {
  language: string;
  onTranscript: (text: string) => void;
  size?: "sm" | "md" | "lg";
}

export default function VoiceButton({ language, onTranscript, size = "md" }: VoiceButtonProps) {
  const { isListening, isSupported, startListening, stopListening } = useVoice();
  const [permissionDenied, setPermissionDenied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };
  const iconSizes = { sm: "w-3.5 h-3.5", md: "w-4 h-4", lg: "w-5 h-5" };

  // Don't render anything until client-side to prevent hydration mismatch
  if (!mounted) return null;

  // If not supported, render a disabled button with tooltip
  if (!isSupported) {
    return (
      <div className="relative">
        <button
          disabled
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onTouchStart={() => setShowTooltip(true)}
          onTouchEnd={() => setShowTooltip(false)}
          className={`${sizeClasses[size]} rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-300 dark:text-slate-600 cursor-not-allowed`}
          aria-label="Voice input not supported"
        >
          <MicOff className={iconSizes[size]} />
        </button>
        {showTooltip && (
          <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-50 w-52 px-3 py-2 rounded-xl bg-slate-800 dark:bg-slate-700 text-white text-[10px] text-center shadow-xl pointer-events-none">
            Voice not supported in this browser. Try Chrome on Android.
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800 dark:border-t-slate-700" />
          </div>
        )}
      </div>
    );
  }

  function handleClick() {
    if (isListening) {
      stopListening();
      return;
    }

    // Check mic permission first
    if (navigator.permissions) {
      navigator.permissions.query({ name: "microphone" as PermissionName }).then((result) => {
        if (result.state === "denied") {
          setPermissionDenied(true);
          setTimeout(() => setPermissionDenied(false), 4000);
          return;
        }
        startListening(language, onTranscript);
      }).catch(() => {
        startListening(language, onTranscript);
      });
    } else {
      startListening(language, onTranscript);
    }
  }

  return (
    <div className="relative">
      {/* Permission denied toast */}
      {permissionDenied && (
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-50 w-56 px-3 py-2 rounded-xl bg-red-600 text-white text-[10px] text-center shadow-xl animate-in fade-in duration-200 pointer-events-none">
          🎤 Please allow microphone access in your browser settings.
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-red-600" />
        </div>
      )}

      <button
        onClick={handleClick}
        className={`relative ${sizeClasses[size]} rounded-full flex items-center justify-center transition-all duration-200 ${
          isListening
            ? "bg-red-500 text-white shadow-lg shadow-red-500/40"
            : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-700 dark:hover:text-slate-200"
        }`}
        aria-label={isListening ? "Stop listening" : "Start voice input"}
        aria-pressed={isListening}
      >
        {/* Pulse rings when listening */}
        {isListening && (
          <>
            <span className="absolute inset-0 rounded-full bg-red-400 opacity-30 animate-ping" />
            <span className="absolute inset-0 rounded-full border-2 border-red-300 opacity-50 animate-pulse" />
          </>
        )}
        {isListening ? (
          <MicOff className={`${iconSizes[size]} relative z-10`} />
        ) : (
          <Mic className={`${iconSizes[size]} relative z-10`} />
        )}
      </button>
    </div>
  );
}