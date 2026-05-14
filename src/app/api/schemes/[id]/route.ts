import { NextRequest, NextResponse } from "next/server";
import { getSchemeById } from "@/lib/schemes";
// import { createClient } from "@supabase/supabase-js";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const scheme = getSchemeById(id);

    if (!scheme) {
      return NextResponse.json({ error: "Scheme not found" }, { status: 404 });
    }

    // SUPABASE VIEW COUNT INCREMENT LOGIC (Mocked/Stubbed for now)
    /*
    try {
      const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
      await supabase.rpc('increment_view_count', { scheme_id: id });
    } catch (e) {
      console.warn("Supabase not configured. Skipping view count increment.");
    }
    */

    return NextResponse.json({ scheme });

  } catch (error) {
    console.error("Scheme Details API Error:", error);
    return NextResponse.json({ error: "Failed to fetch scheme details" }, { status: 500 });
  }
}