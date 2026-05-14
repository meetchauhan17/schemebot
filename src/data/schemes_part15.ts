import { Scheme } from "@/types";

export const schemesPart15: Scheme[] = [
  // GUJARAT SPECIFIC (unique schemes not in parts 1-7)
  {
    id: "kunwarba-nu-mameru",
    name: "Kunwarba Nu Mameru Yojana",
    nameHindi: "कुंवरबा नु ममेरु योजना",
    nameGujarati: "કુંવરબાઇનું મામેરું યોજના",
    department: "Social Justice and Empowerment",
    ministry: "Government of Gujarat",
    category: "women",
    state: "gujarat",
    description: "Financial assistance to the parents of brides belonging to SC/ST/OBC categories at the time of marriage.",
    descriptionHindi: "विवाह के समय एससी/एसटी/ओबीसी श्रेणियों से संबंधित दुल्हनों के माता-पिता को वित्तीय सहायता।",
    benefitAmount: "₹12,000 one-time marriage assistance",
    benefits: [
      "₹12,000 cash assistance for daughter's marriage",
      "Directly transferred to daughter's bank account",
      "Helps poor families with marriage expenses"
    ],
    eligibility: {
      minAge: 18, maxAge: null, gender: "female",
      incomeLimit: 120000, caste: ["sc", "st", "obc", "minority"],
      occupation: ["any"],
      states: ["gujarat"],
      familySize: null,
      additionalCriteria: [
        "Must be a resident of Gujarat",
        "Applicable for SC/ST and SEBC (OBC) categories",
        "Income limit: ₹1,20,000 (Rural) / ₹1,50,000 (Urban)"
      ]
    },
    documents: [
      { name: "Marriage Registration Certificate", mandatory: true, purpose: "Proof of marriage", howToGet: "From Registrar of Marriages" },
      { name: "Caste Certificate", mandatory: true, purpose: "Verify category", howToGet: "Mamlatdar office" },
      { name: "Income Certificate", mandatory: true, purpose: "Verify income limit", howToGet: "Mamlatdar office" },
      { name: "Wedding Invitation Card", mandatory: true, purpose: "Traditional proof", howToGet: "Personal" }
    ],
    howToApplySteps: [
      "Step 1: Visit digitalgujarat.gov.in",
      "Step 2: Register as a new user",
      "Step 3: Search for 'Kunwarba Nu Mameru'",
      "Step 4: Fill the application and upload marriage certificate",
      "Step 5: Submit within 2 years of marriage date",
      "Step 6: District Social Welfare Officer approves and releases payment"
    ],
    alternativeApply: "Visit District Social Welfare Office or Mamlatdar office",
    officialLinks: {
      apply: "https://www.digitalgujarat.gov.in",
      checkStatus: "https://www.digitalgujarat.gov.in",
      officialWebsite: "https://sje.gujarat.gov.in"
    },
    helpline: "1800-233-5500",
    processingTime: "30-45 days",
    commonMistakes: ["Applying more than 2 years after marriage", "Bank account name not matching wedding certificate"],
    deadline: "Within 2 years of marriage", isActive: true,
    tags: ["marriage aid", "Gujarat", "women", "SC/ST", "OBC"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },

  // LEGAL & RIGHTS
  {
    id: "namo-shree-scheme",
    name: "Namo Shree Scheme (Gujarat Maternity Support)",
    nameHindi: "नमो श्री योजना",
    nameGujarati: "નમો શ્રી યોજના",
    department: "Health and Family Welfare",
    ministry: "Government of Gujarat",
    category: "health",
    state: "gujarat",
    description: "Financial assistance to pregnant women from backward communities in Gujarat to ensure nutritional support.",
    descriptionHindi: "पोषण संबंधी सहायता सुनिश्चित करने के लिए गुजरात में पिछड़े समुदायों की गर्भवती महिलाओं को वित्तीय सहायता।",
    benefitAmount: "₹12,000 for pregnant women",
    benefits: [
      "₹12,000 total cash assistance during pregnancy",
      "Distributed in installments linked to ANC checkups",
      "Includes nutritional kits and iron tablets",
      "Covers women from SC, ST, OBC, and EWS categories"
    ],
    eligibility: {
      minAge: 18, maxAge: null, gender: "female",
      incomeLimit: 200000, caste: ["sc", "st", "obc"],
      occupation: ["any"],
      states: ["gujarat"],
      familySize: null,
      additionalCriteria: ["Must be a permanent resident of Gujarat", "Must register pregnancy at a government health center"]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "Aadhaar center" },
      { name: "MCP Card", mandatory: true, purpose: "Verify pregnancy", howToGet: "From local ASHA/PHC" },
      { name: "Caste Certificate", mandatory: true, purpose: "Verify category", howToGet: "Mamlatdar office" }
    ],
    howToApplySteps: [
      "Step 1: Register pregnancy with local ASHA worker",
      "Step 2: Get MCP card and attend first ANC visit",
      "Step 3: Submit bank details to the PHC office",
      "Step 4: Installments are credited after each mandatory checkup"
    ],
    alternativeApply: "Visit nearest PHC in Gujarat",
    officialLinks: {
      apply: "Through PHC",
      checkStatus: "N/A",
      officialWebsite: "https://health.gujarat.gov.in"
    },
    helpline: "104",
    processingTime: "Installment based",
    commonMistakes: ["N/A"],
    deadline: null, isActive: true,
    tags: ["maternity", "Gujarat", "nutrition", "pregnant", "women health"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },
  {
    id: "manav-garima-yojana",
    name: "Manav Garima Yojana",
    nameHindi: "मानव गरिमा योजना",
    nameGujarati: "માનવ ગરિમા યોજના",
    department: "Social Justice and Empowerment",
    ministry: "Government of Gujarat",
    category: "employment",
    state: "gujarat",
    description: "Provides toolkits to small business owners and artisans in Gujarat to help them earn a livelihood with dignity.",
    descriptionHindi: "गरिमा के साथ आजीविका कमाने में मदद करने के लिए गुजरात में छोटे व्यवसाय मालिकों और कारीगरों को टूलकिट प्रदान करता है।",
    benefitAmount: "Free toolkit worth ₹25,000 for 28 different trades",
    benefits: [
      "Free toolkit for trades like tailoring, carpentry, masonry, etc.",
      "Toolkit worth approximately ₹25,000",
      "Helps start self-employment immediately",
      "Available for 28 different vocational trades"
    ],
    eligibility: {
      minAge: 18, maxAge: 60, gender: "all",
      incomeLimit: 120000, caste: ["sc", "st", "obc"],
      occupation: ["self-employed", "unemployed"],
      states: ["gujarat"],
      familySize: null,
      additionalCriteria: ["Annual income limit: ₹1,20,000 (Rural) / ₹1,50,000 (Urban)"]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "Aadhaar center" },
      { name: "Caste Certificate", mandatory: true, purpose: "Verify category", howToGet: "Mamlatdar office" },
      { name: "Income Certificate", mandatory: true, purpose: "Verify income limit", howToGet: "Mamlatdar office" }
    ],
    howToApplySteps: [
      "Step 1: Visit sje.gujarat.gov.in or digitalgujarat.gov.in",
      "Step 2: Select 'Manav Garima Yojana' under Social Justice dept",
      "Step 3: Fill the application and choose your trade/kit",
      "Step 4: Upload required documents",
      "Step 5: Application is verified by District Social Welfare Officer",
      "Step 6: Toolkit is distributed at district level camps"
    ],
    alternativeApply: "Visit District Social Welfare Office",
    officialLinks: {
      apply: "https://e-samajkalyan.gujarat.gov.in",
      checkStatus: "https://e-samajkalyan.gujarat.gov.in",
      officialWebsite: "https://sje.gujarat.gov.in"
    },
    helpline: "079-23253271",
    processingTime: "60-90 days",
    commonMistakes: ["Applying for a trade you are not skilled in"],
    deadline: "Check portal for annual window", isActive: true,
    tags: ["employment", "toolkit", "Gujarat", "artisan", "self-employed"],
    viewCount: 0, lastUpdated: "2026-01-01"
  }
];
