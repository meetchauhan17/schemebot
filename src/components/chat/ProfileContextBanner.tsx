"use client";

import React, { useState, useEffect } from "react";
import { useProfileContext } from "@/context/ProfileContext";
import { useRouter } from "next/navigation";
import { X, UserPlus, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProfileContextBanner() {
  const { profile, hasProfile, isComplete, completeness } = useProfileContext();
  const router = useRouter();
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    // Only show if not dismissed in session
    if (typeof sessionStorage !== "undefined") {
      const isDismissed = sessionStorage.getItem("profile-banner-dismissed");
      if (!isDismissed) {
        setDismissed(false);
      }
    }
  }, []);

  if (dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem("profile-banner-dismissed", "true");
  };

  if (isComplete) {
    return (
      <div className="flex items-center justify-between px-4 py-2 bg-green-50 dark:bg-green-950/30 border-b border-green-100 dark:border-green-900/50">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <p className="text-xs text-green-700 dark:text-green-400 font-medium truncate">
            Using profile · {profile?.name || "User"} · {profile?.occupation || "No occupation"} · {profile?.state || "No state"}
          </p>
        </div>
        <button onClick={() => router.push("/profile")} className="text-xs font-bold text-green-700 dark:text-green-400 hover:underline">
          Change &rarr;
        </button>
      </div>
    );
  }

  if (hasProfile && !isComplete) {
    return (
      <div className="flex items-center justify-between px-4 py-2 bg-amber-50 dark:bg-amber-950/30 border-b border-amber-100 dark:border-amber-900/50">
        <div className="flex items-center gap-2">
          <Zap size={14} className="text-amber-500" />
          <p className="text-xs text-amber-700 dark:text-amber-400 font-medium">
            Complete profile for better matches — {completeness}% done
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => router.push("/profile")} className="text-xs font-bold text-amber-700 dark:text-amber-400 hover:underline">
            Complete &rarr;
          </button>
          <button onClick={handleDismiss} className="text-amber-700/50 hover:text-amber-700">
            <X size={14} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-blue-50 dark:bg-blue-950/30 border-b border-blue-100 dark:border-blue-900/50">
      <div className="flex items-center gap-2">
        <UserPlus size={14} className="text-blue-500" />
        <p className="text-xs text-blue-700 dark:text-blue-400 font-medium">
          Set up profile for personalized schemes
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button onClick={() => router.push("/onboarding")} className="text-xs font-bold text-blue-700 dark:text-blue-400 hover:underline">
          Set Up &rarr;
        </button>
        <button onClick={handleDismiss} className="text-blue-700/50 hover:text-blue-700">
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
