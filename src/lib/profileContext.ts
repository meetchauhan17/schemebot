import { UserProfile, Scheme } from "@/types";

export function buildProfileContext(profile: UserProfile | null): string {
  if (!profile || (!profile.age && !profile.state)) {
    return `
NO_PROFILE: User has not set up their profile yet.
Collect profile naturally through conversation.
Ask ONE question at a time in this order:
1. Which state do you live in?
2. What is your occupation/work?
3. What is your annual family income (roughly)?
4. What is your social category? (General/OBC/SC/ST)
5. Are you married? Any children?
Only ask what's needed to match schemes.
After 3-4 answers, show matched schemes immediately.
`;
  }

  const missing: string[] = [];
  if (!profile.age) missing.push("age");
  if (!profile.caste) missing.push("social category");
  if (profile.isMarried === undefined) missing.push("marital status");
  if (!profile.state) missing.push("state");
  if (!profile.occupation) missing.push("occupation");

  return `
EXISTING USER PROFILE — USE THIS DATA:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${profile.name || "not provided"}
Age: ${profile.age ? `${profile.age} years` : "not provided"}
Gender: ${profile.gender || "not provided"}
State: ${profile.state || "not provided"}
District: ${profile.district || "not provided"}
Area: ${profile.area || "not provided"} (rural/urban)
Occupation: ${profile.occupation || "not provided"}
Annual Income: ${formatIncome(profile.annualIncome)}
Social Category: ${profile.caste || "not provided"}
Marital Status: ${profile.isMarried ? "Married" : (profile.isMarried === false ? "Unmarried" : "not provided")}
Children: ${profile.childrenCount ?? "not provided"}
Senior Citizen in Family: ${profile.hasSeniorCitizen ?? "not provided"}
PwD in Family: ${profile.hasPwD ?? "not provided"}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CRITICAL INSTRUCTIONS FOR USING PROFILE:

1. NEVER ask for information already in profile above
   - Do NOT ask "which state are you from?" if state is provided
   - Do NOT ask "what is your occupation?" if occupation is provided
   - This is non-negotiable — repeated questions destroy trust

2. START every new conversation with a personalized greeting:
   "Hello ${profile.name || ""}! Based on your profile as a 
   [occupation] in [state], I've already found [X] schemes for you.
   Want me to show them, or do you have a specific question?"

3. WHEN USER ASKS ABOUT SCHEMES:
   Immediately show matches based on profile.
   Do NOT ask profile questions again.

4. IF USER ASKS ABOUT A DIFFERENT PERSON'S SCHEMES:
   Say: "I'll use your profile by default. Would you like me to 
   search for someone with different details instead? 
   Just tell me what's different."

5. PROFILE DATA vs NEW DATA — use this exact pattern:
   If user provides data that differs from profile:
   Example: Profile says Gujarat, user says "for my brother in Bihar"
   → Say: "I see your profile shows Gujarat. For Bihar schemes, 
     let me search separately — your profile stays unchanged."
   
   If user says "check for farmer" but profile says "student":
   → Say: "Your profile shows you're a student. Are you asking 
     for yourself or someone else? I can check both if you want."

6. MISSING PROFILE DATA:
   Only ask for: ${missing.length > 0 ? missing.join(", ") : "nothing — profile is complete"}
   Ask for missing data naturally woven into conversation.
   After getting it, say: "Got it! Want me to save this to your 
   profile so you don't have to tell me again?"

7. SCHEME MATCHES:
   Pre-matched schemes for this profile will be provided in context.
   Lead with these. Only search beyond if user asks for something specific.
`;
}

function formatIncome(range: string | undefined): string {
  const map: Record<string, string> = {
    "below-1l": "Below ₹1 Lakh/year",
    "1-3l": "₹1 – ₹3 Lakh/year",
    "3-6l": "₹3 – ₹6 Lakh/year",
    "6-12l": "₹6 – ₹12 Lakh/year",
    "above-12l": "Above ₹12 Lakh/year",
  };
  return range ? (map[range] ?? range) : "not provided";
}

export function getMatchReason(scheme: Scheme, profile: UserProfile): string {
  const reasons: string[] = [];
  if (profile.occupation && scheme.tags.includes(profile.occupation)) reasons.push("occupation matches");
  if (profile.state && scheme.state === profile.state) reasons.push("state-specific");
  if (profile.caste && scheme.eligibility.caste.includes(profile.caste)) reasons.push("category eligible");
  if (profile.annualIncome) reasons.push("income eligible"); // Simplified for now
  return reasons.join(" · ") || "general eligibility";
}
