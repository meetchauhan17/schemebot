import { cache } from "react";
import { Scheme, UserProfile, SchemeCategory } from "@/types";
import { schemes } from "@/data/schemes";

export const getAllSchemes = cache((): Scheme[] => {
  return schemes;
});

export const getSchemeById = cache((id: string): Scheme | undefined => {
  return schemes.find(s => s.id === id);
});

export function filterSchemes(profile: Partial<UserProfile>): Scheme[] {
  // Smart matching: checks age, income, gender, caste, occupation, state
  // Returns schemes sorted by relevance score
  
  const matches = schemes.map(scheme => {
    let score = 0;
    let isEligible = true;

    // 1. Age Check
    if (profile.age !== undefined) {
      if (scheme.eligibility.minAge !== null && profile.age < scheme.eligibility.minAge) isEligible = false;
      if (scheme.eligibility.maxAge !== null && profile.age > scheme.eligibility.maxAge) isEligible = false;
      if (isEligible) score += 10;
    }

    // 2. Gender Check
    if (profile.gender && scheme.eligibility.gender !== "all") {
      if (profile.gender !== scheme.eligibility.gender) isEligible = false;
      else score += 15; // Specific gender schemes score higher if matched
    }

    // 3. Income Limit Check
    if (profile.annualIncome) {
      // Map IncomeRange to numbers for comparison
      const incomeMap: Record<string, number> = {
        "below-1l": 100000,
        "1-3l": 300000,
        "3-6l": 600000,
        "6-12l": 1200000,
        "above-12l": 2000000
      };
      
      const userMaxIncome = incomeMap[profile.annualIncome] || Number.MAX_SAFE_INTEGER;
      
      if (scheme.eligibility.incomeLimit !== null) {
        if (userMaxIncome > scheme.eligibility.incomeLimit) {
          if (profile.annualIncome === "above-12l" && scheme.eligibility.incomeLimit < 1200000) isEligible = false;
          if (profile.annualIncome === "6-12l" && scheme.eligibility.incomeLimit < 600000) isEligible = false;
        } else {
          score += 10; // Fits within income criteria
        }
      }
    }

    // 4. Caste Check
    if (profile.caste && scheme.eligibility.caste.length > 0 && !scheme.eligibility.caste.includes("all")) {
      if (!scheme.eligibility.caste.includes(profile.caste)) isEligible = false;
      else score += 15; // Specific caste targeted scheme
    }

    // 5. Occupation Check
    if (profile.occupation && scheme.eligibility.occupation.length > 0 && !scheme.eligibility.occupation.includes("any")) {
      if (!scheme.eligibility.occupation.includes(profile.occupation)) isEligible = false;
      else score += 20; // High relevance for specific occupations (e.g., farmer)
    }

    // 6. State Check
    if (profile.state && scheme.eligibility.states.length > 0 && !scheme.eligibility.states.includes("all")) {
      if (!scheme.eligibility.states.includes(profile.state)) isEligible = false;
      else score += 15; // High relevance for state-specific schemes
    }

    // Additional Criteria matching (PwD, Senior Citizen, etc)
    if (profile.hasPwD && scheme.eligibility.caste.includes("pwd")) score += 30;
    if (profile.hasSeniorCitizen && scheme.category === "pension") score += 20;

    return { scheme, score, isEligible };
  });

  // Filter out ineligible and sort by score descending
  return matches
    .filter(m => m.isEligible)
    .sort((a, b) => b.score - a.score)
    .map(m => m.scheme);
}

export function searchSchemes(query: string): Scheme[] {
  if (!query) return [];
  const q = query.toLowerCase().trim();
  
  return schemes.filter(s => {
    return (
      s.name.toLowerCase().includes(q) ||
      s.nameHindi.includes(q) ||
      s.nameGujarati.includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.descriptionHindi.includes(q) ||
      s.department.toLowerCase().includes(q) ||
      s.tags.some(tag => tag.toLowerCase().includes(q))
    );
  });
}

export const getSchemesByCategory = cache((category: SchemeCategory): Scheme[] => {
  return schemes.filter(s => s.category === category);
});

export const getSchemesByState = cache((state: string): Scheme[] => {
  return schemes.filter(s => 
    s.state.toLowerCase() === state.toLowerCase() || 
    s.state.toLowerCase() === "all"
  );
});

export function getDeadlineSoonSchemes(daysThreshold: number): Scheme[] {
  const now = new Date();
  const targetDate = new Date();
  targetDate.setDate(now.getDate() + daysThreshold);

  return schemes.filter(s => {
    if (!s.deadline) return false;
    const deadlineDate = new Date(s.deadline);
    if (isNaN(deadlineDate.getTime())) return false; 

    return deadlineDate > now && deadlineDate <= targetDate;
  });
}

export function calculateTotalBenefit(schemes: Scheme[]): string {
  let annualRupees = 0;
  const otherBenefits: string[] = [];

  schemes.forEach(scheme => {
    const amountStr = scheme.benefitAmount.toLowerCase();
    
    if (amountStr.includes("₹") || amountStr.includes("rs")) {
      const match = amountStr.match(/(\d+(?:,\d+)*(?:\.\d+)?)\s*(lakh|crore|k)?/);
      if (match) {
        let value = parseFloat(match[1].replace(/,/g, ""));
        if (match[2] === "lakh") value *= 100000;
        if (match[2] === "crore") value *= 10000000;
        if (match[2] === "k") value *= 1000;

        if (amountStr.includes("loan") || amountStr.includes("cover") || amountStr.includes("insurance")) {
          otherBenefits.push(scheme.benefitAmount);
        } else {
          annualRupees += value;
        }
      } else {
        otherBenefits.push(scheme.benefitAmount);
      }
    } else {
      otherBenefits.push(scheme.benefitAmount);
    }
  });

  const parts = [];
  if (annualRupees > 0) {
    const formatted = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(annualRupees);
    parts.push(`${formatted} cash/subsidy value`);
  }

  const uniqueOthers = Array.from(new Set(otherBenefits)).slice(0, 2);
  if (uniqueOthers.length > 0) {
    parts.push(...uniqueOthers);
  }

  return parts.length > 0 ? parts.join(" + ") : "Various non-monetary benefits";
}

export const getRelatedSchemes = cache((scheme: Scheme, limit: number): Scheme[] => {
  const related = schemes.filter(s => {
    if (s.id === scheme.id) return false;
    if (s.category === scheme.category) return true;
    const hasCommonTag = s.tags.some(tag => scheme.tags.includes(tag));
    return hasCommonTag;
  });

  return related.sort((a, b) => b.viewCount - a.viewCount).slice(0, limit);
});

export const getPopularSchemes = cache((limit: number): Scheme[] => {
  return [...schemes]
    .sort((a, b) => b.viewCount - a.viewCount)
    .slice(0, limit);
});