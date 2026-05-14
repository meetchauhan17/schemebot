import type { UserProfile, IncomeRange } from "@/types";
import { filterSchemes } from "@/lib/schemes";

const PROFILE_KEY = "schemebot_user_profile";

// ─── saveProfile ──────────────────────────────────────────────────────────────

export function saveProfile(profile: UserProfile): void {
  try {
    if (typeof window === "undefined") return;
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
    window.dispatchEvent(new Event("profileUpdated"));
  } catch (err) {
    console.warn("[userProfile] Could not save profile:", err);
  }
}


// ─── getProfile ───────────────────────────────────────────────────────────────

export function getProfile(): UserProfile | null {
  try {
    if (typeof window === "undefined") return null;
    const raw = localStorage.getItem(PROFILE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as UserProfile;
  } catch {
    return null;
  }
}

// ─── updateProfile ────────────────────────────────────────────────────────────

export function updateProfile(updates: Partial<UserProfile>): UserProfile {
  const existing = getProfile() ?? createDefaultProfile();
  const updated: UserProfile = { ...existing, ...updates };
  saveProfile(updated);
  return updated;
}

// ─── clearProfile ─────────────────────────────────────────────────────────────

export function clearProfile(): void {
  try {
    if (typeof window === "undefined") return;
    localStorage.removeItem(PROFILE_KEY);
  } catch (err) {
    console.warn("[userProfile] Could not clear profile:", err);
  }
}

// ─── isProfileComplete ────────────────────────────────────────────────────────
// Returns true when the 4 core fields are filled (age, state, occupation, income)

export function isProfileComplete(profile: Partial<UserProfile>): boolean {
  return (
    profile.age !== undefined &&
    profile.age > 0 &&
    !!profile.state &&
    !!profile.occupation &&
    !!profile.annualIncome
  );
}

// ─── getMatchingSchemeCount ───────────────────────────────────────────────────
// Quick count of matching schemes without returning the full list

export function getMatchingSchemeCount(profile: Partial<UserProfile>): number {
  if (!isProfileComplete(profile)) return 0;
  try {
    return filterSchemes(profile).length;
  } catch {
    return 0;
  }
}

// ─── createDefaultProfile ────────────────────────────────────────────────────

export function createDefaultProfile(): UserProfile {
  return {
    preferredLanguage: "en",
    onboardingComplete: false,
    createdAt: new Date().toISOString(),
  };
}

// Alias for backwards compatibility — onboarding page uses setProfile
export function setProfile(profile: Partial<UserProfile>): void {
  const existing = getProfile() ?? createDefaultProfile();
  saveProfile({ ...existing, ...profile });
}

// Legacy extractProfileFromText removed in favor of LLM-based API extraction.