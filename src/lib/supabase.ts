import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const isUrlValid = supabaseUrl.startsWith("http");

export const supabase = createClient(
  isUrlValid ? supabaseUrl : "https://placeholder.supabase.co", 
  supabaseAnonKey || "placeholder-key",
  {
    auth: {
      persistSession: false
    }
  }
);

export const hasSupabaseConfigured = Boolean(isUrlValid && supabaseAnonKey && !supabaseUrl.includes("placeholder"));
