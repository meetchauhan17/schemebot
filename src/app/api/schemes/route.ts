import { NextRequest, NextResponse } from "next/server";
import { getAllSchemes, searchSchemes } from "@/lib/schemes";
import { SchemeCategory } from "@/types";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    
    const category = searchParams.get("category");
    const state = searchParams.get("state");
    const gender = searchParams.get("gender");
    const income = searchParams.get("income");
    const caste = searchParams.get("caste");
    const occupation = searchParams.get("occupation");
    const search = searchParams.get("search");
    const sort = searchParams.get("sort") || "relevant";
    
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "12", 10);

    let results = search ? searchSchemes(search) : getAllSchemes();

    // Filtering logic
    if (category && category !== "all") {
      const categories = category.split(",");
      results = results.filter((s) => categories.includes(s.category));
    }

    if (state && state !== "all") {
      const stateLower = state.toLowerCase();
      results = results.filter((s) => s.state.toLowerCase() === stateLower || s.state.toLowerCase() === "all");
    }

    if (gender && gender !== "all") {
      results = results.filter((s) => s.eligibility.gender === gender || s.eligibility.gender === "all");
    }

    if (caste && caste !== "all") {
      results = results.filter((s) => s.eligibility.caste.includes(caste as any) || s.eligibility.caste.includes("all"));
    }

    if (occupation && occupation !== "all") {
      results = results.filter((s) => s.eligibility.occupation.includes(occupation as any) || s.eligibility.occupation.includes("any"));
    }

    if (income) {
      // Map income strings to numbers for comparison
      const incomeMap: Record<string, number> = {
        "below-1l": 100000,
        "1-3l": 300000,
        "3-6l": 600000,
        "6-12l": 1200000,
        "above-12l": 2000000
      };
      const maxIncome = incomeMap[income] || Number.MAX_SAFE_INTEGER;
      
      results = results.filter((s) => {
        if (s.eligibility.incomeLimit === null) return true;
        // Strict cutoff for this filter logic
        if (income === "above-12l" && s.eligibility.incomeLimit < 1200000) return false;
        if (income === "6-12l" && s.eligibility.incomeLimit < 600000) return false;
        return maxIncome <= s.eligibility.incomeLimit || s.eligibility.incomeLimit >= maxIncome;
      });
    }

    // Sorting logic
    if (sort === "views") {
      results.sort((a, b) => b.viewCount - a.viewCount);
    } else if (sort === "az") {
      results.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "deadline") {
      results.sort((a, b) => {
        if (!a.deadline) return 1;
        if (!b.deadline) return -1;
        const d1 = new Date(a.deadline).getTime();
        const d2 = new Date(b.deadline).getTime();
        if (isNaN(d1)) return 1;
        if (isNaN(d2)) return -1;
        return d1 - d2;
      });
    } else if (sort === "new") {
      // Simple mock sort for new (since we don't have created_at, reverse the array)
      results.reverse();
    }
    // "relevant" keeps default or search scoring order

    // Pagination
    const total = results.length;
    const startIndex = (page - 1) * limit;
    const paginatedSchemes = results.slice(startIndex, startIndex + limit);

    return NextResponse.json({
      schemes: paginatedSchemes,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit)
    });

  } catch (error) {
    console.error("Schemes API Error:", error);
    return NextResponse.json({ error: "Failed to fetch schemes" }, { status: 500 });
  }
}