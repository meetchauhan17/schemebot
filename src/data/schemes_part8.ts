import { Scheme } from "@/types";

export const schemesPart8: Scheme[] = [
  // GUJARAT SPECIFIC (31-35)
  {
    id: "ikhedut-gujarat",
    name: "iKhedut Portal Schemes",
    nameHindi: "आई-खेडूत पोर्टल योजनाएं",
    nameGujarati: "આઈ-ખેડૂત પોર્ટલ યોજનાઓ",
    department: "Agriculture",
    ministry: "Government of Gujarat",
    category: "agriculture", // or "state"
    state: "Gujarat",
    description: "Single portal for 100+ Gujarat agriculture schemes — tractors, tools, irrigation.",
    descriptionHindi: "गुजरात की 100+ कृषि योजनाओं के लिए एक पोर्टल।",
    benefitAmount: "Varies (e.g. up to ₹1.5L tractor subsidy)",
    benefits: [
      "Tractor subsidy up to ₹1.5 lakh",
      "Drip irrigation subsidy 50-75%",
      "Access to 100+ state agriculture schemes in one place"
    ],
    eligibility: {
      minAge: 18,
      maxAge: null,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["farmer"],
      states: ["Gujarat"],
      familySize: null,
      additionalCriteria: [
        "Gujarat farmers (eligibility varies by sub-scheme)"
      ]
    },
    documents: [
      { name: "Aadhaar", mandatory: true, purpose: "Identity", howToGet: "UIDAI" },
      { name: "7/12 land record", mandatory: true, purpose: "Land proof", howToGet: "Talati" },
      { name: "Bank passbook", mandatory: true, purpose: "DBT", howToGet: "Bank" },
      { name: "Caste certificate if applicable", mandatory: false, purpose: "Higher subsidy", howToGet: "Mamlatdar" }
    ],
    howToApplySteps: [
      "Step 1: Visit ikhedut.gujarat.gov.in",
      "Step 2: Click 'Schemes for Farmers'",
      "Step 3: Browse available schemes by category",
      "Step 4: Click 'Apply' on desired scheme",
      "Step 5: Fill form with land and personal details",
      "Step 6: Submit and track application online"
    ],
    alternativeApply: "Visit Taluka Panchayat or Gram Sevak.",
    officialLinks: {
      apply: "https://ikhedut.gujarat.gov.in",
      checkStatus: "https://ikhedut.gujarat.gov.in",
      officialWebsite: "https://ikhedut.gujarat.gov.in"
    },
    helpline: "1800-233-5500",
    processingTime: "Varies",
    commonMistakes: [
      "Applying without updated 7/12 records"
    ],
    deadline: null,
    isActive: true,
    tags: ["gujarat", "agriculture", "farmer", "subsidy", "ikhedut"],
    viewCount: 2000000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "karmayogi-health-gujarat",
    name: "Karmayogi Health Security Scheme",
    nameHindi: "कर्मयोगी स्वास्थ्य सुरक्षा योजना",
    nameGujarati: "કર્મયોગી સ્વાસ્થ્ય સુરક્ષા યોજના",
    department: "Health",
    ministry: "Government of Gujarat",
    category: "health", // or "state"
    state: "Gujarat",
    description: "Cashless medical treatment up to ₹10 lakh/year for Gujarat govt employees.",
    descriptionHindi: "गुजरात सरकार के कर्मचारियों के लिए 10 लाख रुपये तक का कैशलेस इलाज।",
    benefitAmount: "₹10,00,000/year cashless treatment",
    benefits: [
      "Cashless medical treatment up to ₹10 lakh/year",
      "Covers Gujarat government employees and pensioners + family"
    ],
    eligibility: {
      minAge: 18,
      maxAge: null,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["salaried", "retired"],
      states: ["Gujarat"],
      familySize: null,
      additionalCriteria: [
        "Gujarat government employees and pensioners + family"
      ]
    },
    documents: [
      { name: "Government employee ID", mandatory: true, purpose: "Eligibility", howToGet: "Dept" },
      { name: "Aadhaar", mandatory: true, purpose: "Identity", howToGet: "UIDAI" }
    ],
    howToApplySteps: [
      "Step 1: Automatic enrollment for active employees",
      "Step 2: Show employee ID at empaneled hospital",
      "Step 3: Treatment is provided cashless up to the limit"
    ],
    alternativeApply: "N/A",
    officialLinks: {
      apply: "Automatic",
      checkStatus: "N/A",
      officialWebsite: "https://health.gujarat.gov.in"
    },
    helpline: "104",
    processingTime: "Instant",
    commonMistakes: [
      "Going to non-empaneled hospitals"
    ],
    deadline: null,
    isActive: true,
    tags: ["gujarat", "health", "employee", "pensioner"],
    viewCount: 400000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "coaching-sahay-gujarat",
    name: "Coaching Sahay Yojana",
    nameHindi: "कोचिंग सहाय योजना",
    nameGujarati: "કોચિંગ સહાય યોજના",
    department: "Social Justice & Empowerment",
    ministry: "Government of Gujarat",
    category: "education",
    state: "Gujarat",
    description: "₹20,000 financial aid for competitive exam coaching (UPSC, GPSC, JEE, NEET).",
    descriptionHindi: "प्रतियोगी परीक्षा कोचिंग के लिए 20,000 रुपये की वित्तीय सहायता।",
    benefitAmount: "₹20,000 one-time coaching assistance",
    benefits: [
      "₹20,000 financial aid for coaching fees",
      "Helps prepare for UPSC, GPSC, JEE, NEET, etc."
    ],
    eligibility: {
      minAge: 17,
      maxAge: 35,
      gender: "all",
      incomeLimit: 250000,
      caste: ["sc", "st", "obc"],
      occupation: ["student", "unemployed"],
      states: ["Gujarat"],
      familySize: null,
      additionalCriteria: [
        "Gujarat SC/ST/OBC students preparing for competitive exams"
      ]
    },
    documents: [
      { name: "Aadhaar", mandatory: true, purpose: "Identity", howToGet: "UIDAI" },
      { name: "Caste certificate", mandatory: true, purpose: "Eligibility", howToGet: "Mamlatdar" },
      { name: "Income certificate", mandatory: true, purpose: "Eligibility", howToGet: "Mamlatdar" },
      { name: "Coaching institute enrollment proof", mandatory: true, purpose: "Usage proof", howToGet: "Institute" }
    ],
    howToApplySteps: [
      "Step 1: Visit esamajkalyan.gujarat.gov.in",
      "Step 2: Register and select 'Coaching Sahay Yojana'",
      "Step 3: Upload caste certificate and coaching enrollment receipt",
      "Step 4: Submit application for district-level approval",
      "Step 5: Amount credited to bank account after verification"
    ],
    alternativeApply: "N/A",
    officialLinks: {
      apply: "https://esamajkalyan.gujarat.gov.in",
      checkStatus: "https://esamajkalyan.gujarat.gov.in",
      officialWebsite: "https://esamajkalyan.gujarat.gov.in"
    },
    helpline: "1800-233-5500",
    processingTime: "45 Days",
    commonMistakes: [
      "Enrolling in a non-recognized coaching institute"
    ],
    deadline: null,
    isActive: true,
    tags: ["gujarat", "education", "coaching", "upsc", "gpsc"],
    viewCount: 350000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "mmuy-gujarat",
    name: "Mukhyamantri Mahila Utkarsh Yojana",
    nameHindi: "मुख्यमंत्री महिला उत्कर्ष योजना",
    nameGujarati: "મુખ્યમંત્રી મહિલા ઉત્કર્ષ યોજના",
    department: "WCD",
    ministry: "Government of Gujarat",
    category: "women", // or "business"
    state: "Gujarat",
    description: "Interest-FREE loans for women Self-Help Groups in Gujarat.",
    descriptionHindi: "गुजरात में महिला स्वयं सहायता समूहों के लिए ब्याज मुक्त ऋण।",
    benefitAmount: "Up to ₹1,00,000 interest-free loan",
    benefits: [
      "Up to ₹1,00,000 interest-free loan per SHG member",
      "Encourages women entrepreneurship at grassroots"
    ],
    eligibility: {
      minAge: 18,
      maxAge: 59,
      gender: "female",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["any"],
      states: ["Gujarat"],
      familySize: null,
      additionalCriteria: [
        "Women Self-Help Groups (SHGs) in Gujarat"
      ]
    },
    documents: [
      { name: "SHG registration certificate", mandatory: true, purpose: "Group ID", howToGet: "Local Authority" },
      { name: "Aadhaar of all members", mandatory: true, purpose: "Identity", howToGet: "UIDAI" },
      { name: "Bank account of SHG", mandatory: true, purpose: "Loan credit", howToGet: "Bank" }
    ],
    howToApplySteps: [
      "Step 1: Form an SHG (10 members) if not already formed",
      "Step 2: Visit gcswb.gujarat.gov.in or nearest bank",
      "Step 3: Submit application with member Aadhaars",
      "Step 4: Bank sanctions loan directly to SHG account"
    ],
    alternativeApply: "Visit Taluka Panchayat office.",
    officialLinks: {
      apply: "https://gcswb.gujarat.gov.in",
      checkStatus: "https://gcswb.gujarat.gov.in",
      officialWebsite: "https://gcswb.gujarat.gov.in"
    },
    helpline: "079-23250987",
    processingTime: "30-45 Days",
    commonMistakes: [
      "Individual members trying to apply alone"
    ],
    deadline: null,
    isActive: true,
    tags: ["gujarat", "women", "loan", "shg", "business"],
    viewCount: 600000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "digital-gujarat-scholarship",
    name: "Digital Gujarat Scholarship",
    nameHindi: "डिजिटल गुजरात छात्रवृत्ति",
    nameGujarati: "ડિજિટલ ગુજરાત શિષ્યવૃત્તિ",
    department: "Social Justice",
    ministry: "Government of Gujarat",
    category: "education",
    state: "Gujarat",
    description: "State scholarships for SC/ST/OBC/EWS students via single portal.",
    descriptionHindi: "एक ही पोर्टल के माध्यम से एससी/एसटी/ओबीसी/ईडब्ल्यूएस छात्रों के लिए राज्य छात्रवृत्ति।",
    benefitAmount: "₹10,000 to ₹1,00,000",
    benefits: [
      "₹10,000 to ₹1,00,000 depending on course and category",
      "One portal for multiple state scholarships"
    ],
    eligibility: {
      minAge: 15,
      maxAge: 30,
      gender: "all",
      incomeLimit: 250000,
      caste: ["sc", "st", "obc", "minority"],
      occupation: ["student"],
      states: ["Gujarat"],
      familySize: null,
      additionalCriteria: [
        "SC/ST/OBC/EWS/Minority Gujarat students in recognized institutions"
      ]
    },
    documents: [
      { name: "Aadhaar", mandatory: true, purpose: "Identity", howToGet: "UIDAI" },
      { name: "Caste certificate", mandatory: true, purpose: "Eligibility", howToGet: "Mamlatdar" },
      { name: "Income certificate", mandatory: true, purpose: "Eligibility", howToGet: "Mamlatdar" },
      { name: "Marksheet", mandatory: true, purpose: "Academic proof", howToGet: "School/College" },
      { name: "Fee receipt", mandatory: true, purpose: "Cost proof", howToGet: "College" },
      { name: "Bank passbook", mandatory: true, purpose: "DBT", howToGet: "Bank" }
    ],
    howToApplySteps: [
      "Step 1: Visit digitalgujarat.gov.in",
      "Step 2: Click 'New Registration'",
      "Step 3: Enter mobile number and create account",
      "Step 4: Fill profile with Aadhaar, caste, and bank details",
      "Step 5: Select scholarship scheme from list",
      "Step 6: Upload documents and submit",
      "Step 7: College verifies and forwards to government",
      "Step 8: Amount credited directly to bank account"
    ],
    alternativeApply: "N/A",
    officialLinks: {
      apply: "https://www.digitalgujarat.gov.in",
      checkStatus: "https://www.digitalgujarat.gov.in",
      officialWebsite: "https://www.digitalgujarat.gov.in"
    },
    helpline: "079-26566000",
    processingTime: "60-90 Days",
    commonMistakes: [
      "Applying for multiple scholarships simultaneously on different portals"
    ],
    deadline: "November",
    isActive: true,
    tags: ["gujarat", "scholarship", "education", "sc", "st", "obc"],
    viewCount: 2500000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },

  // FINANCIAL SAVINGS (36-37) — unique schemes not in other parts
  {
    id: "scss-senior-citizens",
    name: "Senior Citizens Savings Scheme (SCSS)",
    nameHindi: "वरिष्ठ नागरिक बचत योजना",
    nameGujarati: "વરિષ્ઠ નાગરિક બચત યોજના",
    department: "Post Office",
    ministry: "Ministry of Finance",
    category: "pension", // Investment
    state: "all",
    description: "High-interest savings for senior citizens — 8.2% interest (highest safe investment).",
    descriptionHindi: "वरिष्ठ नागरिकों के लिए उच्च-ब्याज बचत - 8.2% ब्याज।",
    benefitAmount: "8.2% annual interest",
    benefits: [
      "8.2% annual interest (2025 rate) — paid quarterly",
      "Safe, government-backed investment",
      "Max investment allowed: ₹30 lakh per individual"
    ],
    eligibility: {
      minAge: 60, // 55 for VRS
      maxAge: null,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["retired"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "Indian citizens 60+ years (55+ for VRS retirees)"
      ]
    },
    documents: [
      { name: "Aadhaar", mandatory: true, purpose: "Identity", howToGet: "UIDAI" },
      { name: "Age proof", mandatory: true, purpose: "Eligibility", howToGet: "Birth certificate/Passport" },
      { name: "PAN card", mandatory: true, purpose: "Financial KYC", howToGet: "IT Dept" },
      { name: "Bank passbook", mandatory: true, purpose: "Transfer", howToGet: "Bank" }
    ],
    howToApplySteps: [
      "Step 1: Visit any post office or authorized bank",
      "Step 2: Fill SCSS account opening form",
      "Step 3: Deposit amount (max ₹30 lakh)",
      "Step 4: Receive quarterly interest in linked savings account"
    ],
    alternativeApply: "Online via netbanking for authorized banks.",
    officialLinks: {
      apply: "https://indiapost.gov.in",
      checkStatus: "N/A",
      officialWebsite: "https://indiapost.gov.in"
    },
    helpline: "1800-11-2011",
    processingTime: "Instant",
    commonMistakes: [
      "Forgetting to submit 15G/15H form to prevent TDS deduction"
    ],
    deadline: null,
    isActive: true,
    tags: ["investment", "savings", "senior citizen", "post office"],
    viewCount: 1200000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "pomis",
    name: "Post Office Monthly Income Scheme",
    nameHindi: "डाकघर मासिक आय योजना",
    nameGujarati: "પોસ્ટ ઓફિસ માસિક આવક યોજના",
    department: "Post Office",
    ministry: "Ministry of Finance",
    category: "pension", // Financial
    state: "all",
    description: "Safe monthly income — 7.4% interest paid monthly from post office.",
    descriptionHindi: "सुरक्षित मासिक आय - डाकघर से 7.4% ब्याज।",
    benefitAmount: "7.4% annual interest paid monthly",
    benefits: [
      "7.4% annual interest paid monthly",
      "₹5,550/month income on maximum ₹9 lakh single investment",
      "Max investment: ₹9 lakh (single) / ₹15 lakh (joint)"
    ],
    eligibility: {
      minAge: 18,
      maxAge: null,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "Any Indian citizen 18+ (joint account allowed with minor)"
      ]
    },
    documents: [
      { name: "Aadhaar", mandatory: true, purpose: "Identity", howToGet: "UIDAI" },
      { name: "PAN", mandatory: true, purpose: "Financial KYC", howToGet: "IT Dept" },
      { name: "Passport photo", mandatory: true, purpose: "Form", howToGet: "Studio" }
    ],
    howToApplySteps: [
      "Step 1: Visit nearest post office",
      "Step 2: Fill POMIS application form",
      "Step 3: Deposit investment amount",
      "Step 4: Monthly interest will be credited to your linked post office savings account"
    ],
    alternativeApply: "N/A",
    officialLinks: {
      apply: "https://indiapost.gov.in",
      checkStatus: "N/A",
      officialWebsite: "https://indiapost.gov.in"
    },
    helpline: "1800-11-2011",
    processingTime: "Instant",
    commonMistakes: [
      "Premature withdrawal incurs a penalty deduction"
    ],
    deadline: null,
    isActive: true,
    tags: ["investment", "post office", "monthly income"],
    viewCount: 900000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },

  // LEGAL & RIGHTS (38)
  {
    id: "nalsa-free-legal-aid",
    name: "National Legal Services Authority (Free Legal Aid)",
    nameHindi: "राष्ट्रीय विधिक सेवा प्राधिकरण (मुफ्त कानूनी सहायता)",
    nameGujarati: "મફત કાનૂની સહાય (NALSA)",
    department: "Law",
    ministry: "Ministry of Law and Justice",
    category: "social", // Legal
    state: "all",
    description: "FREE legal representation for poor, SC/ST, women, children, disabled.",
    descriptionHindi: "गरीब, एससी/एसटी, महिलाओं, बच्चों, विकलांगों के लिए मुफ़्त कानूनी प्रतिनिधित्व।",
    benefitAmount: "Free Lawyer + Court Fees",
    benefits: [
      "Completely free lawyer",
      "Court fees and drafting expenses paid by government"
    ],
    eligibility: {
      minAge: null,
      maxAge: null,
      gender: "all",
      incomeLimit: 100000,
      caste: ["sc", "st", "all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "Annual income below ₹1 lakh OR SC/ST/women/child/disability/disaster victim"
      ]
    },
    documents: [
      { name: "Aadhaar", mandatory: true, purpose: "Identity", howToGet: "UIDAI" },
      { name: "Income certificate", mandatory: false, purpose: "Eligibility (if non-category)", howToGet: "Tehsildar" },
      { name: "Case details", mandatory: true, purpose: "Legal context", howToGet: "Self/Court" }
    ],
    howToApplySteps: [
      "Step 1: Call 15100 or visit district court's legal aid cell",
      "Step 2: Fill free legal aid application",
      "Step 3: DLSA verifies eligibility",
      "Step 4: Lawyer assigned within 15 days",
      "Step 5: All court fees and lawyer fees paid by government"
    ],
    alternativeApply: "Apply online at nalsa.gov.in.",
    officialLinks: {
      apply: "https://nalsa.gov.in",
      checkStatus: "https://nalsa.gov.in",
      officialWebsite: "https://nalsa.gov.in"
    },
    helpline: "15100",
    processingTime: "15 Days",
    commonMistakes: [
      "Paying the assigned lawyer (it is strictly illegal for them to charge you)"
    ],
    deadline: null,
    isActive: true,
    tags: ["lawyer", "legal", "court", "free", "justice"],
    viewCount: 500000,
    lastUpdated: "2025-01-01T00:00:00Z"
  }
];
