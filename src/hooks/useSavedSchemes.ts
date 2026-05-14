"use client";

import { useState, useEffect, useCallback } from "react";
import type { Scheme } from "@/types";
import { getSavedSchemes, saveScheme as libSave, unsaveScheme as libUnsave, isSchemesSaved, clearAllSaved } from "@/lib/savedSchemes";
import { calculateTotalBenefit } from "@/lib/schemes";

export function useSavedSchemes() {
  const [savedSchemes, setSavedSchemes] = useState<Scheme[]>([]);

  const fetchSaved = useCallback(() => {
    setSavedSchemes(getSavedSchemes());
  }, []);

  useEffect(() => {
    fetchSaved();
    window.addEventListener("savedSchemesUpdated", fetchSaved);
    return () => window.removeEventListener("savedSchemesUpdated", fetchSaved);
  }, [fetchSaved]);

  const toggleSave = (scheme: Scheme) => {
    if (isSchemesSaved(scheme.id)) {
      libUnsave(scheme.id);
      // You could add a toast here: toast.success("Removed from saved")
    } else {
      libSave(scheme);
      // toast.success("Saved to your list")
    }
  };

  const isSaved = (id: string) => savedSchemes.some(s => s.id === id);
  
  const savedCount = savedSchemes.length;
  
  const totalBenefit = calculateTotalBenefit(savedSchemes);

  return {
    savedSchemes,
    savedCount,
    totalBenefit,
    isSaved,
    toggleSave,
    clearAll: clearAllSaved,
  };
}