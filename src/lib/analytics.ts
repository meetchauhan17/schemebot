import { supabase, hasSupabaseConfigured } from "./supabase";

export interface DashboardStats {
  totalSearchesToday: number;
  totalSchemes: number;
  languagesUsedToday: number;
  estimatedBenefits: number;
}

// ==========================================
// TRACKING FUNCTIONS (Fire and Forget)
// ==========================================

export async function trackSchemeView(schemeId: string, language: string = "en", state?: string) {
  if (!hasSupabaseConfigured) return;
  try {
    await supabase.from("scheme_views").insert([{ scheme_id: schemeId, language, state }]);
  } catch (err) {
    console.error("Analytics Error:", err);
  }
}

export async function trackChatMessage(language: string = "en", state?: string) {
  if (!hasSupabaseConfigured) return;
  try {
    await supabase.from("analytics_events").insert([{ event: "chat_message", language, state }]);
  } catch (err) {
    console.error("Analytics Error:", err);
  }
}

export async function trackSchemeMatch(schemeId: string) {
  if (!hasSupabaseConfigured) return;
  try {
    await supabase.from("analytics_events").insert([{ event: "scheme_match", scheme_id: schemeId }]);
  } catch (err) {
    console.error("Analytics Error:", err);
  }
}

// ==========================================
// FETCHING FUNCTIONS (With Fallbacks)
// ==========================================

export async function getDashboardStats(): Promise<DashboardStats> {
  if (hasSupabaseConfigured) {
    try {
      // Very rough implementation. In production, you'd use raw SQL or Edge Functions for fast aggregates.
      const today = new Date();
      today.setHours(0,0,0,0);
      
      const { count: searchesCount } = await supabase
        .from("scheme_views")
        .select("*", { count: 'exact', head: true })
        .gte("timestamp", today.toISOString());

      const { data: langsData } = await supabase
        .from("scheme_views")
        .select("language")
        .gte("timestamp", today.toISOString());

      const uniqueLangs = new Set(langsData?.map(r => r.language)).size || 0;

      return {
        totalSearchesToday: searchesCount || 0,
        totalSchemes: 200, // Hardcoded for now based on your static data
        languagesUsedToday: uniqueLangs,
        estimatedBenefits: (searchesCount || 0) * 15000 // Mock avg benefit
      };
    } catch (e) {
      console.error(e);
    }
  }

  // Fallback simulated data
  return {
    totalSearchesToday: 14592,
    totalSchemes: 204,
    languagesUsedToday: 18,
    estimatedBenefits: 218880000 // ~21 Cr
  };
}

export async function getTopSchemes(limit: number = 10): Promise<{schemeId: string, count: number, name: string}[]> {
  // Simulated data since Supabase aggregate group-by requires RPC or raw queries not easily done via basic client
  return [
    { schemeId: "pm-kisan", name: "PM Kisan Samman Nidhi", count: 4521 },
    { schemeId: "pm-awas", name: "PM Awas Yojana", count: 3890 },
    { schemeId: "ayushman", name: "Ayushman Bharat", count: 3412 },
    { schemeId: "sukanya", name: "Sukanya Samriddhi Yojana", count: 2890 },
    { schemeId: "pm- मुद्रा", name: "PM Mudra Yojana", count: 2100 },
    { schemeId: "ujjwala", name: "PM Ujjwala Yojana", count: 1850 },
    { schemeId: "nrega", name: "MGNREGA", count: 1540 },
    { schemeId: "kisan-credit", name: "Kisan Credit Card", count: 1230 },
  ].slice(0, limit);
}

export async function getLanguageStats(): Promise<{language: string, count: number}[]> {
  // Simulated
  return [
    { language: "Hindi", count: 5430 },
    { language: "English", count: 3210 },
    { language: "Gujarati", count: 2100 },
    { language: "Tamil", count: 1890 },
    { language: "Marathi", count: 1200 },
    { language: "Other", count: 762 },
  ];
}

export async function getStateStats(): Promise<Record<string, number>> {
  // Simulated mapping State Name -> Activity Density (0-100)
  return {
    "Gujarat": 95,
    "Maharashtra": 88,
    "Uttar Pradesh": 100,
    "Bihar": 82,
    "Tamil Nadu": 75,
    "Karnataka": 60,
    "Rajasthan": 85,
    "Madhya Pradesh": 70,
  };
}

export async function getRecentActivity(): Promise<{id: string, text: string, time: string}[]> {
  return [
    { id: "1", text: "A user in Gujarat just found a scheme for farmers 🌾", time: "Just now" },
    { id: "2", text: "A student in Tamil Nadu discovered 3 scholarships 🎓", time: "2 mins ago" },
    { id: "3", text: "A senior citizen in UP unlocked pension benefits 👴", time: "5 mins ago" },
    { id: "4", text: "A female entrepreneur in Maharashtra found a business loan 💼", time: "12 mins ago" },
    { id: "5", text: "A farmer in Punjab verified PM Kisan eligibility 🚜", time: "18 mins ago" },
  ];
}