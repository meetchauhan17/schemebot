"use client";

import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from "react";
import type { UserProfile, Scheme } from "@/types";
import { getProfile, updateProfile as updateProfileStorage, clearProfile as clearProfileStorage } from "@/lib/userProfile";
import { filterSchemes, calculateTotalBenefit } from "@/lib/schemes";

interface ProfileContextType {
  profile: UserProfile | null;
  mounted: boolean;
  updateProfile: (updates: Partial<UserProfile>) => UserProfile;
  clearProfile: () => void;
  matchedSchemes: Scheme[];
  matchedCount: number;
  completeness: number;
  estimatedBenefit: string;
  isComplete: boolean;
  hasProfile: boolean;
}

export const ProfileContext = createContext<ProfileContextType>(null!);

function calculateCompleteness(profile: UserProfile | null): number {
  if (!profile) return 0;
  const fields = ["age", "gender", "state", "occupation", "annualIncome", "caste", "maritalStatus"];
  let filled = 0;
  for (const f of fields) {
    if ((profile as any)[f]) filled++;
  }
  return Math.round((filled / fields.length) * 100);
}

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setProfile(getProfile());
    
    // Listen for profile changes across tabs via localStorage
    const handleStorage = (e: StorageEvent) => {
      if (e.key === "schemebot_user_profile") {
        setProfile(getProfile());
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  // Listen for same-tab profile updates triggered by saveProfile in userProfile.ts
  useEffect(() => {
    const handler = () => setProfile(getProfile());
    window.addEventListener("profileUpdated", handler);
    return () => window.removeEventListener("profileUpdated", handler);
  }, []);

  const updateProfile = (updates: Partial<UserProfile>) => {
    const updated = updateProfileStorage(updates);
    setProfile(updated);
    return updated;
  };

  const clearProfile = () => {
    clearProfileStorage();
    setProfile(null);
  };

  const matchedSchemes = useMemo(() => 
    profile ? filterSchemes(profile) : [],
    [profile]
  );

  const completeness = useMemo(() => 
    calculateCompleteness(profile),
    [profile]
  );

  const estimatedBenefit = useMemo(() => 
    calculateTotalBenefit(matchedSchemes),
    [matchedSchemes]
  );

  return (
    <ProfileContext.Provider value={{
      profile,
      mounted,
      updateProfile,
      clearProfile,
      matchedSchemes,
      matchedCount: matchedSchemes.length,
      completeness,
      estimatedBenefit,
      isComplete: completeness >= 80,
      hasProfile: !!profile && (profile.age !== undefined || profile.state !== undefined), // simple check
    }}>
      {children}
    </ProfileContext.Provider>
  );
}

export const useProfileContext = () => useContext(ProfileContext);
