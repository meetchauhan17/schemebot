import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";
import type { UserProfile } from "@/types";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const EXTRACTION_SYSTEM_PROMPT = `
You are an expert data extraction assistant for an Indian government schemes application.
Your task is to analyze the user's message and extract any mentioned profile details into a strict JSON object.

The possible keys for the JSON object are:
- age (number)
- gender ("male" | "female" | "other")
- state (string, name of the Indian state)
- area ("rural" | "urban" | "semi-urban")
- occupation ("farmer" | "student" | "daily-wage" | "salaried" | "self-employed" | "unemployed" | "retired" | "any")
- annualIncome ("below-1l" | "1-3l" | "3-6l" | "6-12l" | "above-12l")
- caste ("general" | "obc" | "sc" | "st" | "minority" | "pwd" | "all")
- isMarried (boolean)
- childrenCount (number)
- hasSeniorCitizen (boolean)
- hasPwD (boolean)

Instructions:
1. ONLY return a valid JSON object. Do not wrap it in markdown blockquotes or add any conversational text.
2. Only include keys from the list above IF the user's message clearly indicates that information.
3. If the user implies an income (e.g., "earning 50k a month" = 6 lakh a year -> "6-12l" or "3-6l" depending on math), try to map it to the closest annualIncome range.
4. "Divyang" or "disabled" maps to hasPwD=true and optionally caste="pwd".
5. Translate from any language (Hindi, Gujarati, Tamil, etc.) and map it to these English constants.
6. If no new profile information is found, return an empty object {}.
`;

export async function POST(req: NextRequest) {
  try {
    const { message, existingProfile } = await req.json();

    if (!message) {
      return NextResponse.json({}, { status: 400 });
    }

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: EXTRACTION_SYSTEM_PROMPT },
        { role: "user", content: `Existing profile: ${JSON.stringify(existingProfile)}\n\nNew message: "${message}"` }
      ],
      temperature: 0,
      response_format: { type: "json_object" },
    });

    const jsonString = completion.choices[0]?.message?.content || "{}";
    let extracted: Partial<UserProfile> = {};

    try {
      extracted = JSON.parse(jsonString);
    } catch (parseError) {
      console.error("[extract-profile] Failed to parse JSON:", jsonString);
    }

    // Filter out invalid keys or null values just to be safe
    const validKeys = [
      "age", "gender", "state", "area", "occupation", 
      "annualIncome", "caste", "isMarried", "childrenCount", 
      "hasSeniorCitizen", "hasPwD"
    ];
    
    const sanitized: Partial<UserProfile> = {};
    for (const key of Object.keys(extracted)) {
      if (validKeys.includes(key) && (extracted as any)[key] !== null) {
        (sanitized as any)[key] = (extracted as any)[key];
      }
    }

    return NextResponse.json(sanitized);
  } catch (err) {
    console.error("[extract-profile] API error:", err);
    return NextResponse.json({}, { status: 500 });
  }
}
