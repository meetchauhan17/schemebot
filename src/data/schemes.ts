import { Scheme } from "@/types";
import { schemesPart1 } from "./schemes_part1";
import { schemesPart2 } from "./schemes_part2";
import { schemesPart3 } from "./schemes_part3";
import { schemesPart4 } from "./schemes_part4";
import { schemesPart5 } from "./schemes_part5";
import { schemesPart6 } from "./schemes_part6";
import { schemesPart7 } from "./schemes_part7";
import { schemesPart8 } from "./schemes_part8";
import { schemesPart9 } from "./schemes_part9";
import { schemesPart10 } from "./schemes_part10";
import { schemesPart11 } from "./schemes_part11";
import { schemesPart12 } from "./schemes_part12";
import { schemesPart13 } from "./schemes_part13";
import { schemesPart14 } from "./schemes_part14";
import { schemesPart15 } from "./schemes_part15";
import { schemesPart16 } from "./schemes_part16";

const allSchemes = [
  ...schemesPart1,
  ...schemesPart2,
  ...schemesPart3,
  ...schemesPart4,
  ...schemesPart5,
  ...schemesPart6,
  ...schemesPart7,
  ...schemesPart8,
  ...schemesPart9,
  ...schemesPart10,
  ...schemesPart11,
  ...schemesPart12,
  ...schemesPart13,
  ...schemesPart14,
  ...schemesPart15,
  ...schemesPart16
];

/**
 * Normalizes scheme names for deduplication.
 * Removes common prefixes/suffixes and special characters.
 */
function normalizeName(name: string): string {
  return name
    .toLowerCase()
    .replace(/pradhan\s+mantri|pm|yojana|scheme|mission|program|pariyojana/gi, "")
    .replace(/[^a-z0-9]/gi, "")
    .trim();
}

// First pass: Deduplicate by ID (latest ID wins)
const idMap = new Map<string, Scheme>();
allSchemes.forEach(scheme => {
  idMap.set(scheme.id, scheme);
});

// Second pass: Deduplicate by Normalized Name
// We prefer schemes that have more complete data (documents and steps)
const nameMap = new Map<string, Scheme>();
Array.from(idMap.values()).forEach(scheme => {
  const norm = normalizeName(scheme.name);
  const existing = nameMap.get(norm);
  
  if (!existing) {
    nameMap.set(norm, scheme);
  } else {
    // Quality check: prefer the one with more steps or documents
    const existingScore = (existing.documents?.length || 0) + (existing.howToApplySteps?.length || 0);
    const currentScore = (scheme.documents?.length || 0) + (scheme.howToApplySteps?.length || 0);
    
    if (currentScore >= existingScore) {
      nameMap.set(norm, scheme);
    }
  }
});

// Specific manual deletions for tricky cases that normalization might miss
const finalMap = nameMap;

// Export final list
export const schemes: Scheme[] = Array.from(finalMap.values());