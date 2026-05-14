import { NextResponse } from "next/server";
import { getDashboardStats, getTopSchemes, getLanguageStats, getStateStats, getRecentActivity } from "@/lib/analytics";

// Enforce edge caching for dashboard stats
export const revalidate = 60; // Cache for 60 seconds

export async function GET() {
  try {
    const [stats, topSchemes, languages, states, activity] = await Promise.all([
      getDashboardStats(),
      getTopSchemes(),
      getLanguageStats(),
      getStateStats(),
      getRecentActivity()
    ]);

    return NextResponse.json({
      stats,
      topSchemes,
      languages,
      states,
      activity,
      lastUpdated: new Date().toISOString()
    });
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch analytics" }, { status: 500 });
  }
}