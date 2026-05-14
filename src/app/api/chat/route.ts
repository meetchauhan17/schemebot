import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";
import { buildProfileContext } from "@/lib/profileContext";
import { filterSchemes, getAllSchemes } from "@/lib/schemes";
import { buildSystemPrompt } from "@/lib/systemPrompt";
import type { UserProfile, ChatMessage } from "@/types";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { messages, profile, language } = await req.json() as {
      messages: ChatMessage[];
      profile: UserProfile | null;
      language: string;
    };

    // Get schemes context
    const matchedSchemes = profile ? filterSchemes(profile) : [];
    const allSchemes = getAllSchemes();

    // Extract keywords from the last few messages
    const recentText = messages.slice(-4).map(m => m.content.toLowerCase()).join(" ");
    
    // Simple relevance scoring
    const scoredSchemes = (matchedSchemes.length > 0 ? matchedSchemes : allSchemes).map(scheme => {
      let score = 0;
      if (scheme.isActive) score += 5;
      
      // Keyword matches
      if (recentText.includes(scheme.category.toLowerCase())) score += 15;
      scheme.tags.forEach(tag => {
        if (recentText.includes(tag.toLowerCase())) score += 5;
      });
      if (recentText.includes(scheme.department.toLowerCase())) score += 5;
      
      // Popularity
      score += Math.min(scheme.viewCount / 1000, 5);
      
      return { scheme, score };
    });

    // Top 12 schemes to stay within 8k token limit
    const topSchemes = scoredSchemes
      .sort((a, b) => b.score - a.score)
      .slice(0, 12)
      .map(s => s.scheme);

    // Build profile context string
    const profileContext = buildProfileContext(profile);
    
    // Build full system prompt
    const systemPrompt = buildSystemPrompt({
      profileContext,
      schemes: topSchemes,
      allSchemesCount: allSchemes.length,
      language,
      hasProfile: !!profile && (profile.age !== undefined || profile.state !== undefined),
    });

    // Stream from Groq
    const stream = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: systemPrompt },
        ...messages.map((m: any) => ({
          role: m.role as "user" | "assistant",
          content: m.content,
        })),
      ],
      stream: true,
      temperature: 0.7,
      max_tokens: 2048,
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const delta = chunk.choices[0]?.delta?.content ?? "";
            if (delta) {
              const payload = JSON.stringify({ token: delta });
              controller.enqueue(encoder.encode(`data: ${payload}\n\n`));
            }
          }
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();
        } catch (e) {
          console.error("[SchemeBot] Stream error:", (e as Error).message);
          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({ error: "stream_error" })}\n\n`
            )
          );
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });

  } catch (error: unknown) {
    const isRateLimit = (error as { status?: number })?.status === 429;
    return NextResponse.json(
      { 
        error: isRateLimit ? "rate_limit" : "server_error",
        message: isRateLimit 
          ? "Too many requests. Please wait a moment." 
          : "Something went wrong. Please try again.",
      },
      { status: isRateLimit ? 429 : 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: "ok",
    model: "llama-3.3-70b-versatile",
    schemesLoaded: getAllSchemes().length,
  });
}