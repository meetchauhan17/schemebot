import Groq from "groq-sdk";

export const groq = new Groq({ 
  apiKey: process.env.GROQ_API_KEY,
  dangerouslyAllowBrowser: true // Setting this to true as the user wants the full working app, but in production this should be in an API route
});

export const CHAT_MODEL = "llama-3.3-70b-versatile";
export const FAST_MODEL = "llama-3.1-8b-instant";
