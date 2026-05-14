import { Scheme } from "@/types";

export const schemesPart7: Scheme[] = [
  // HOUSING (16-18)
  {
    id: "swamih-fund-2",
    name: "SWAMIH Fund",
    nameHindi: "स्वामिह फंड",
    nameGujarati: "સ્વામિહ ફંડ",
    department: "Finance",
    ministry: "Ministry of Finance",
    category: "housing",
    state: "all",
    description: "Complete stalled/stuck housing projects — get your flat delivered.",
    descriptionHindi: "रुकी हुई आवासीय परियोजनाओं को पूरा करने के लिए फंड।",
    benefitAmount: "Completion of stuck flats",
    benefits: [
      "₹15,000 crore fund to complete 1 lakh stuck housing units",
      "Delivery of flats to home buyers whose projects are stalled"
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
        "Middle-class buyers whose apartments are stuck in stressed projects"
      ]
    },
    documents: [
      { name: "Allotment letter", mandatory: true, purpose: "Proof of purchase", howToGet: "Builder" },
      { name: "Payment receipts", mandatory: true, purpose: "Proof of payment", howToGet: "Self/Builder" },
      { name: "Project RERA number", mandatory: true, purpose: "Project identification", howToGet: "RERA Website" }
    ],
    howToApplySteps: [
      "Step 1: Developers apply for SWAMIH funding to complete the project",
      "Step 2: Home buyers should collectively approach the developer/RERA to apply for SWAMIH fund",
      "Step 3: Track project completion status at swamih.in"
    ],
    alternativeApply: "Through RERA authority.",
    officialLinks: {
      apply: "https://swamih.in",
      checkStatus: "https://swamih.in",
      officialWebsite: "https://swamih.in"
    },
    helpline: "1800-11-6163",
    processingTime: "Project specific",
    commonMistakes: [
      "Applying as an individual (The builder/developer receives the fund, not the buyer)"
    ],
    deadline: null,
    isActive: true,
    tags: ["housing", "flat", "builder", "real estate", "swamih"],
    viewCount: 300000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "nanaji-awas-gujarat",
    name: "Nanaji Deshmukh Awas Yojana",
    nameHindi: "नानाजी देशमुख आवास योजना",
    nameGujarati: "નાનાજી દેશમુખ આવાસ યોજના",
    department: "Labour",
    ministry: "Government of Gujarat",
    category: "housing",
    state: "Gujarat",
    description: "Housing assistance for construction workers in Gujarat.",
    descriptionHindi: "गुजरात में निर्माण श्रमिकों के लिए आवास सहायता।",
    benefitAmount: "₹1,50,000 housing grant",
    benefits: [
      "₹1,50,000 housing grant for registered construction workers to build a house"
    ],
    eligibility: {
      minAge: 18,
      maxAge: 60,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["daily-wage"],
      states: ["Gujarat"],
      familySize: null,
      additionalCriteria: [
        "Registered construction workers under BOCWWB Gujarat"
      ]
    },
    documents: [
      { name: "BOCWWB registration card", mandatory: true, purpose: "Worker ID", howToGet: "Labour Dept" },
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "UIDAI" },
      { name: "Land ownership proof", mandatory: true, purpose: "Must own plot", howToGet: "Revenue Dept" },
      { name: "Bank passbook", mandatory: true, purpose: "DBT", howToGet: "Bank" },
      { name: "Income certificate", mandatory: true, purpose: "Eligibility", howToGet: "Mamlatdar" }
    ],
    howToApplySteps: [
      "Step 1: Register on the e-Nirman portal (bocwwb.gujarat.gov.in)",
      "Step 2: Apply under the Nanaji Deshmukh Awas Yojana section",
      "Step 3: Upload plot ownership documents and BOCW card",
      "Step 4: Verification by labour inspector",
      "Step 5: Funds released in installments directly to bank account"
    ],
    alternativeApply: "Visit District Labour Office.",
    officialLinks: {
      apply: "https://bocwwb.gujarat.gov.in",
      checkStatus: "https://bocwwb.gujarat.gov.in",
      officialWebsite: "https://bocwwb.gujarat.gov.in"
    },
    helpline: "079-23253891",
    processingTime: "60 Days",
    commonMistakes: [
      "Applying without owning a land plot"
    ],
    deadline: null,
    isActive: true,
    tags: ["housing", "gujarat", "construction worker", "labour"],
    viewCount: 150000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "pm-surya-ghar",
    name: "PM Surya Ghar Muft Bijli Yojana",
    nameHindi: "पीएम सूर्य घर मुफ्त बिजली योजना",
    nameGujarati: "પીએમ સૂર્ય ઘર મફત વીજળી",
    department: "MNRE",
    ministry: "Ministry of New & Renewable Energy",
    category: "housing", // Or Environment, keeping in housing as per prompt
    state: "all",
    description: "FREE solar rooftop installation — 300 units free electricity per month.",
    descriptionHindi: "मुफ्त सोलर रूफटॉप इंस्टालेशन - प्रति माह 300 यूनिट मुफ्त बिजली।",
    benefitAmount: "Up to ₹78,000 Subsidy",
    benefits: [
      "Up to 300 units FREE electricity/month",
      "Subsidy up to ₹78,000 (1-2kW: ₹30,000/kW | 2-3kW: ₹18,000/kW for additional kW)"
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
        "Households with own house/rooftop (not rented)",
        "Valid electricity connection"
      ]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "UIDAI" },
      { name: "Electricity bill", mandatory: true, purpose: "Consumer Proof", howToGet: "Discom" },
      { name: "Property ownership document", mandatory: true, purpose: "Proof of roof", howToGet: "Municipality" },
      { name: "Bank passbook", mandatory: true, purpose: "Subsidy transfer", howToGet: "Bank" },
      { name: "Passport photo", mandatory: true, purpose: "Form", howToGet: "Studio" }
    ],
    howToApplySteps: [
      "Step 1: Visit pmsuryaghar.gov.in",
      "Step 2: Register with Aadhaar and electricity consumer number",
      "Step 3: Select eligible vendor from portal list",
      "Step 4: Vendor installs solar panel on your rooftop",
      "Step 5: Submit installation completion certificate on portal",
      "Step 6: Subsidy credited directly to bank account",
      "Step 7: Net metering set up by DISCOM"
    ],
    alternativeApply: "Apply via PM Surya Ghar Mobile App.",
    officialLinks: {
      apply: "https://pmsuryaghar.gov.in",
      checkStatus: "https://pmsuryaghar.gov.in",
      officialWebsite: "https://pmsuryaghar.gov.in"
    },
    helpline: "1800-180-3333",
    processingTime: "60 Days",
    commonMistakes: [
      "Electricity bill not in applicant's name",
      "Using vendor not empaneled on portal",
      "Applying from rented property"
    ],
    deadline: null,
    isActive: true,
    tags: ["solar", "electricity", "subsidy", "housing", "new"],
    viewCount: 5000000,
    lastUpdated: "2025-02-01T00:00:00Z"
  },

  // EMPLOYMENT & BUSINESS (19-23)
  {
    id: "stand-up-india",
    name: "Stand Up India",
    nameHindi: "स्टैंड अप इंडिया",
    nameGujarati: "સ્ટેન્ડ અપ ઇન્ડિયા",
    department: "Finance",
    ministry: "Ministry of Finance",
    category: "employment",
    state: "all",
    description: "Bank loan ₹10 lakh to ₹1 crore for SC/ST and women to start business.",
    descriptionHindi: "एससी / एसटी और महिलाओं के लिए 10 लाख से 1 करोड़ तक का बैंक ऋण।",
    benefitAmount: "₹10 lakh to ₹1 crore loan",
    benefits: [
      "₹10 lakh to ₹1 crore loan at concessional rate",
      "Helps set up greenfield enterprises"
    ],
    eligibility: {
      minAge: 18,
      maxAge: null,
      gender: "all", // Can be men if SC/ST, otherwise women
      incomeLimit: null,
      caste: ["sc", "st"], // Also for women of all castes
      occupation: ["business", "unemployed"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "SC/ST borrowers OR women borrowers",
        "18+ years of age",
        "For greenfield enterprise (first time venture)"
      ]
    },
    documents: [
      { name: "Aadhaar", mandatory: true, purpose: "Identity", howToGet: "UIDAI" },
      { name: "PAN", mandatory: true, purpose: "Tax ID", howToGet: "IT Dept" },
      { name: "Caste certificate (SC/ST)", mandatory: false, purpose: "Eligibility", howToGet: "Tehsildar" },
      { name: "Business plan", mandatory: true, purpose: "Loan approval", howToGet: "CA" },
      { name: "Bank statement", mandatory: true, purpose: "Financial check", howToGet: "Bank" }
    ],
    howToApplySteps: [
      "Step 1: Visit standupmitra.in",
      "Step 2: Register and fill the application form",
      "Step 3: Submit business plan and required documents",
      "Step 4: Select preferred bank branch",
      "Step 5: Bank evaluates and processes the loan"
    ],
    alternativeApply: "Visit bank branch directly.",
    officialLinks: {
      apply: "https://standupmitra.in",
      checkStatus: "https://standupmitra.in",
      officialWebsite: "https://standupmitra.in"
    },
    helpline: "1800-180-1111",
    processingTime: "30-60 Days",
    commonMistakes: [
      "Applying for an existing business (must be greenfield/new)"
    ],
    deadline: null,
    isActive: true,
    tags: ["loan", "business", "women", "sc", "st", "startup"],
    viewCount: 1000000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "pm-vishwakarma",
    name: "PM Vishwakarma Yojana",
    nameHindi: "पीएम विश्वकर्मा योजना",
    nameGujarati: "પીએમ વિશ્વકર્મા યોજના",
    department: "MSME",
    ministry: "Ministry of MSME",
    category: "employment",
    state: "all",
    description: "Support for 18 traditional trades — carpenter, welder, goldsmith, potter etc.",
    descriptionHindi: "18 पारंपरिक व्यापारों के लिए सहायता।",
    benefitAmount: "₹15,000 toolkit + ₹3 lakh loan",
    benefits: [
      "₹15,000 toolkit grant",
      "₹1 lakh loan (Phase 1) at 5% interest",
      "₹2 lakh loan (Phase 2) at 5% interest",
      "₹500/day training stipend"
    ],
    eligibility: {
      minAge: 18,
      maxAge: null,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["self-employed", "daily-wage"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "Artisans in 18 traditional trades: Carpenter, Boat Maker, Armourer, Blacksmith, Hammer Kit Maker, Locksmith, Goldsmith, Potter, Sculptor, Cobbler, Mason, Basket Weaver, Doll Maker, Barber, Garland Maker, Washer Man, Tailor, Fishing Net Maker"
      ]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "UIDAI" },
      { name: "Proof of trade", mandatory: true, purpose: "Eligibility", howToGet: "Photo/Self declaration" },
      { name: "Bank passbook", mandatory: true, purpose: "DBT", howToGet: "Bank" },
      { name: "Mobile number linked with Aadhaar", mandatory: true, purpose: "OTP", howToGet: "Telecom" }
    ],
    howToApplySteps: [
      "Step 1: Register on pmvishwakarma.gov.in using Aadhaar",
      "Step 2: Select your trade from 18 categories",
      "Step 3: Verify trade through local gram panchayat/ULB",
      "Step 4: Get PM Vishwakarma Certificate and ID card",
      "Step 5: Attend 5-day basic training (₹500/day stipend paid)",
      "Step 6: Apply for ₹15,000 toolkit grant (for purchasing tools)",
      "Step 7: Apply for Phase 1 loan: ₹1 lakh at 5% interest"
    ],
    alternativeApply: "Visit nearest CSC.",
    officialLinks: {
      apply: "https://pmvishwakarma.gov.in",
      checkStatus: "https://pmvishwakarma.gov.in",
      officialWebsite: "https://pmvishwakarma.gov.in"
    },
    helpline: "1800-267-7777",
    processingTime: "45 Days",
    commonMistakes: [
      "Aadhaar not linked to mobile number",
      "Family member is a government employee"
    ],
    deadline: null,
    isActive: true,
    tags: ["artisan", "business", "loan", "toolkit", "vishwakarma"],
    viewCount: 4000000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "udyam-registration",
    name: "Udyam Registration",
    nameHindi: "उद्यम पंजीकरण",
    nameGujarati: "ઉદ્યમ નોંધણી",
    department: "MSME",
    ministry: "Ministry of MSME",
    category: "employment",
    state: "all",
    description: "FREE official MSME registration — unlocks 50+ government benefits.",
    descriptionHindi: "मुफ्त आधिकारिक MSME पंजीकरण।",
    benefitAmount: "Free Registration + Govt Benefits",
    benefits: [
      "Free registration",
      "Access to priority bank loans",
      "Govt tenders (25% reserved for MSMEs)",
      "Electricity subsidies and stamp duty exemptions"
    ],
    eligibility: {
      minAge: 18,
      maxAge: null,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["business", "self-employed"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "Any business with investment under ₹250 crore and turnover under ₹1,250 crore"
      ]
    },
    documents: [
      { name: "Aadhaar", mandatory: true, purpose: "Proprietor Identity", howToGet: "UIDAI" },
      { name: "PAN", mandatory: true, purpose: "Business Tax ID", howToGet: "IT Dept" },
      { name: "Business bank account details", mandatory: true, purpose: "Financial tracking", howToGet: "Bank" }
    ],
    howToApplySteps: [
      "Step 1: Visit udyamregistration.gov.in",
      "Step 2: Click 'For New Entrepreneurs'",
      "Step 3: Enter Aadhaar number + OTP verification",
      "Step 4: Fill business details (no documents need uploading)",
      "Step 5: Get Udyam Registration Certificate instantly"
    ],
    alternativeApply: "N/A",
    officialLinks: {
      apply: "https://udyamregistration.gov.in",
      checkStatus: "https://udyamregistration.gov.in",
      officialWebsite: "https://udyamregistration.gov.in"
    },
    helpline: "1800-111-955",
    processingTime: "Instant to 3 Days",
    commonMistakes: [
      "Paying fees to fake/private websites (Official site is FREE)"
    ],
    deadline: null,
    isActive: true,
    tags: ["business", "msme", "certificate", "free"],
    viewCount: 2000000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "eshram-registration",
    name: "e-Shram Portal Registration",
    nameHindi: "ई-श्रम पोर्टल पंजीकरण",
    nameGujarati: "ઈ-શ્રમ પોર્ટલ નોંધણી",
    department: "Labour",
    ministry: "Ministry of Labour & Employment",
    category: "employment",
    state: "all",
    description: "National database for unorganized workers — gate to all social security schemes.",
    descriptionHindi: "असंगठित श्रमिकों के लिए राष्ट्रीय डेटाबेस।",
    benefitAmount: "₹2 lakh accident insurance FREE",
    benefits: [
      "₹2 lakh accident insurance (PMSBY) FREE",
      "Access to future social security schemes",
      "Universal Account Number (UAN) card"
    ],
    eligibility: {
      minAge: 16,
      maxAge: 59,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["unemployed", "daily-wage", "farmer", "self-employed"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "Any unorganized worker aged 16-59 (not income tax payer, not EPFO/ESIC member)",
        "Includes: construction workers, domestic workers, street vendors, farmers, rickshaw pullers"
      ]
    },
    documents: [
      { name: "Aadhaar (must be linked with mobile)", mandatory: true, purpose: "Identity", howToGet: "UIDAI" },
      { name: "Bank passbook", mandatory: true, purpose: "Future DBT", howToGet: "Bank" }
    ],
    howToApplySteps: [
      "Step 1: Visit eshram.gov.in",
      "Step 2: Enter Aadhaar number + mobile OTP",
      "Step 3: Fill occupation, address, and bank details",
      "Step 4: Download e-Shram card (UAN — Universal Account Number)",
      "Step 5: ₹2 lakh accident insurance activated automatically"
    ],
    alternativeApply: "Visit nearest CSC.",
    officialLinks: {
      apply: "https://eshram.gov.in",
      checkStatus: "https://eshram.gov.in",
      officialWebsite: "https://eshram.gov.in"
    },
    helpline: "14434",
    processingTime: "Instant",
    commonMistakes: [
      "EPF/ESIC members applying illegally",
      "Aadhaar mobile number not active"
    ],
    deadline: null,
    isActive: true,
    tags: ["labour", "worker", "insurance", "eshram"],
    viewCount: 6000000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "startup-india-seed-fund",
    name: "Startup India Seed Fund Scheme",
    nameHindi: "स्टार्टअप इंडिया सीड फंड योजना",
    nameGujarati: "સ્ટાર્ટઅપ ઇન્ડિયા સીડ ફંડ",
    department: "DPIIT",
    ministry: "Ministry of Commerce and Industry",
    category: "employment",
    state: "all",
    description: "Grant/loan for early-stage startups — proof of concept and prototype.",
    descriptionHindi: "प्रारंभिक चरण के स्टार्टअप के लिए अनुदान/ऋण।",
    benefitAmount: "Up to ₹50 lakh total funding",
    benefits: [
      "Up to ₹20 lakh grant for proof of concept",
      "Up to ₹50 lakh loan for commercialization"
    ],
    eligibility: {
      minAge: 18,
      maxAge: null,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["business"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "DPIIT-recognized startup, less than 2 years old, Indian incorporated"
      ]
    },
    documents: [
      { name: "DPIIT recognition certificate", mandatory: true, purpose: "Startup ID", howToGet: "Startup India Portal" },
      { name: "Pitch deck", mandatory: true, purpose: "Business plan", howToGet: "Self" },
      { name: "Aadhaar of founders", mandatory: true, purpose: "Identity", howToGet: "UIDAI" }
    ],
    howToApplySteps: [
      "Step 1: Get DPIIT Recognition for your startup",
      "Step 2: Visit startupindia.gov.in/seed-fund",
      "Step 3: Select an incubator from the list",
      "Step 4: Submit application and pitch deck online",
      "Step 5: Incubator evaluates and provides funding"
    ],
    alternativeApply: "N/A",
    officialLinks: {
      apply: "https://startupindia.gov.in/seed-fund",
      checkStatus: "https://startupindia.gov.in",
      officialWebsite: "https://startupindia.gov.in"
    },
    helpline: "startup-india@dpiit.gov.in",
    processingTime: "60-90 Days",
    commonMistakes: [
      "Applying if startup is older than 2 years"
    ],
    deadline: null,
    isActive: true,
    tags: ["startup", "business", "funding", "seed fund"],
    viewCount: 300000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },

  // ENVIRONMENT & ENERGY (24-25)
  {
    id: "pmuy-2",
    name: "Pradhan Mantri Ujjwala Yojana 2.0",
    nameHindi: "प्रधानमंत्री उज्ज्वला योजना 2.0",
    nameGujarati: "પ્રધાનમંત્રી ઉજ્જવલા યોજના ૨.૦",
    department: "Petroleum",
    ministry: "Ministry of Petroleum and Natural Gas",
    category: "social", // Or environment, matching prompt structure
    state: "all",
    description: "FREE LPG connection for women in poor households.",
    descriptionHindi: "गरीब परिवारों की महिलाओं के लिए मुफ्त एलपीजी कनेक्शन।",
    benefitAmount: "Free Connection + ₹1,600 subsidy",
    benefits: [
      "Free LPG connection + first refill + stove (in some cases)",
      "₹1,600 subsidy"
    ],
    eligibility: {
      minAge: 18,
      maxAge: null,
      gender: "female",
      incomeLimit: null, // BPL indicator
      caste: ["sc", "st", "all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "Women from SC/ST/OBC/EWS/Antyodaya/Forest dweller families",
        "No existing LPG connection in the household"
      ]
    },
    documents: [
      { name: "Aadhaar Card of woman applicant", mandatory: true, purpose: "Identity", howToGet: "UIDAI" },
      { name: "BPL ration card OR any income proof", mandatory: true, purpose: "Eligibility", howToGet: "Food Dept" },
      { name: "Bank passbook", mandatory: true, purpose: "Subsidy transfer", howToGet: "Bank" },
      { name: "Address proof", mandatory: true, purpose: "Connection installation", howToGet: "Utility Bill" },
      { name: "Self-declaration", mandatory: true, purpose: "No existing connection", howToGet: "Distributor" }
    ],
    howToApplySteps: [
      "Step 1: Visit nearest LPG distributor (HP/Bharat/Indane Gas)",
      "Step 2: Ask for PMUY 2.0 form",
      "Step 3: Fill form with woman's name as primary beneficiary",
      "Step 4: Submit Aadhaar + ration card + bank details",
      "Step 5: KYC verification by distributor",
      "Step 6: Connection installed at home within 7 days",
      "Step 7: ₹1,600 subsidy credited to bank account"
    ],
    alternativeApply: "Online at pmuy.gov.in",
    officialLinks: {
      apply: "https://mylpg.in",
      checkStatus: "https://pmuy.gov.in",
      officialWebsite: "https://pmuy.gov.in"
    },
    helpline: "1906",
    processingTime: "7-15 Days",
    commonMistakes: [
      "Another family member at the same address already has an LPG connection"
    ],
    deadline: null,
    isActive: true,
    tags: ["lpg", "gas", "women", "free", "ujjwala"],
    viewCount: 3000000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "jal-jeevan-mission",
    name: "Har Ghar Jal (Jal Jeevan Mission)",
    nameHindi: "हर घर जल (जल जीवन मिशन)",
    nameGujarati: "જલ જીવન મિશન",
    department: "Drinking Water",
    ministry: "Ministry of Jal Shakti",
    category: "social", // Environment
    state: "all",
    description: "Tap water connection to every rural household.",
    descriptionHindi: "हर ग्रामीण घर में नल का पानी कनेक्शन।",
    benefitAmount: "FREE piped water tap connection",
    benefits: [
      "FREE piped water tap connection at home for rural households"
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
        "Rural households without existing functional tap connection"
      ]
    },
    documents: [
      { name: "Aadhaar", mandatory: true, purpose: "Identity", howToGet: "UIDAI" },
      { name: "Proof of rural residence", mandatory: true, purpose: "Location", howToGet: "Panchayat" },
      { name: "Consent to connect", mandatory: true, purpose: "Agreement", howToGet: "VWSC" }
    ],
    howToApplySteps: [
      "Step 1: Contact Gram Panchayat or Village Water & Sanitation Committee (VWSC)",
      "Step 2: Submit Aadhaar and consent form",
      "Step 3: Contractors map and install connection during village phase",
      "Step 4: Check progress at ejalshakti.gov.in"
    ],
    alternativeApply: "N/A",
    officialLinks: {
      apply: "https://ejalshakti.gov.in",
      checkStatus: "https://jaljeevanmission.gov.in",
      officialWebsite: "https://jaljeevanmission.gov.in"
    },
    helpline: "1800-180-4159",
    processingTime: "Dependent on village project phase",
    commonMistakes: [
      "Not actively participating in Gram Sabha resolutions for water"
    ],
    deadline: null,
    isActive: true,
    tags: ["water", "rural", "infrastructure", "tap"],
    viewCount: 1500000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },

  // SOCIAL WELFARE (26-30)
  {
    id: "pmgkay-2028",
    name: "PM Garib Kalyan Anna Yojana",
    nameHindi: "पीएम गरीब कल्याण अन्न योजना",
    nameGujarati: "પીએમ ગરીબ કલ્યાણ અન્ન યોજના",
    department: "Food & Public Distribution",
    ministry: "Ministry of Consumer Affairs",
    category: "social",
    state: "all",
    description: "FREE 5 kg grain per person per month — extended to December 2028.",
    descriptionHindi: "दिसंबर 2028 तक प्रति व्यक्ति प्रति माह 5 किलो मुफ्त अनाज।",
    benefitAmount: "5 kg free ration + 1 kg pulses",
    benefits: [
      "5 kg free ration (wheat/rice) per person per month",
      "1 kg free pulses per family",
      "Extended to December 2028"
    ],
    eligibility: {
      minAge: null,
      maxAge: null,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "All National Food Security Act (NFSA) ration card holders (80 crore beneficiaries)"
      ]
    },
    documents: [
      { name: "Ration card", mandatory: true, purpose: "Eligibility", howToGet: "Food Dept" },
      { name: "Aadhaar", mandatory: true, purpose: "e-KYC at ration shop", howToGet: "UIDAI" }
    ],
    howToApplySteps: [
      "Step 1: Ensure your ration card is active and Aadhaar-linked",
      "Step 2: Visit nearest Fair Price Shop (ration shop) each month",
      "Step 3: Complete biometric/OTP verification",
      "Step 4: Collect free 5 kg grain per family member"
    ],
    alternativeApply: "N/A",
    officialLinks: {
      apply: "Walk-in to Ration Shop",
      checkStatus: "https://nfsa.gov.in",
      officialWebsite: "https://nfsa.gov.in"
    },
    helpline: "1967",
    processingTime: "Immediate",
    commonMistakes: [
      "Family members' Aadhaar not seeded leading to missing quota"
    ],
    deadline: "December 2028",
    isActive: true,
    tags: ["food", "ration", "free", "poor"],
    viewCount: 5000000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "ganga-swarupa-gujarat",
    name: "Ganga Swarupa Yojana",
    nameHindi: "गंगा स्वरूपा योजना",
    nameGujarati: "ગંગા સ્વરૂપા યોજના",
    department: "Social Justice & Empowerment",
    ministry: "Government of Gujarat",
    category: "pension",
    state: "Gujarat",
    description: "Monthly pension for widows in Gujarat.",
    descriptionHindi: "गुजरात में विधवाओं के लिए मासिक पेंशन।",
    benefitAmount: "₹1,250/month",
    benefits: [
      "₹1,250/month widow pension directly to bank account"
    ],
    eligibility: {
      minAge: 18,
      maxAge: null,
      gender: "female",
      incomeLimit: 120000, // Urban approx ₹1.5L, Rural ₹1.2L
      caste: ["all"],
      occupation: ["any"],
      states: ["Gujarat"],
      familySize: null,
      additionalCriteria: [
        "Widows in Gujarat",
        "Income below poverty line / prescribed limit"
      ]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "UIDAI" },
      { name: "Husband's death certificate", mandatory: true, purpose: "Eligibility", howToGet: "Panchayat" },
      { name: "Income certificate", mandatory: true, purpose: "BPL proof", howToGet: "Mamlatdar" },
      { name: "Bank passbook", mandatory: true, purpose: "Pension transfer", howToGet: "Bank" },
      { name: "Passport photo", mandatory: true, purpose: "Form", howToGet: "Studio" },
      { name: "Marriage certificate", mandatory: false, purpose: "Relation proof", howToGet: "Registrar" }
    ],
    howToApplySteps: [
      "Step 1: Visit Mamlatdar office or e-Samaj Kalyan portal",
      "Step 2: Submit application with death and income certificates",
      "Step 3: Application verified by Talati",
      "Step 4: Pension starts arriving in bank account"
    ],
    alternativeApply: "Through Talati at village level.",
    officialLinks: {
      apply: "https://sje.gujarat.gov.in",
      checkStatus: "https://sje.gujarat.gov.in",
      officialWebsite: "https://sje.gujarat.gov.in"
    },
    helpline: "079-23254608",
    processingTime: "30-45 Days",
    commonMistakes: [
      "Income certificate expired"
    ],
    deadline: null,
    isActive: true,
    tags: ["widow", "pension", "gujarat", "women"],
    viewCount: 800000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "igndps",
    name: "Indira Gandhi National Disability Pension",
    nameHindi: "इंदिरा गांधी राष्ट्रीय विकलांगता पेंशन",
    nameGujarati: "ઇન્દિરા ગાંધી રાષ્ટ્રીય વિકલાંગતા પેન્શન",
    department: "Social Justice",
    ministry: "Ministry of Rural Development",
    category: "pension",
    state: "all",
    description: "Monthly pension for persons with severe disability below poverty line.",
    descriptionHindi: "गरीबी रेखा से नीचे गंभीर विकलांगता वाले व्यक्तियों के लिए मासिक पेंशन।",
    benefitAmount: "₹300/month + State top-up",
    benefits: [
      "₹300/month (Center) + State top-up (e.g. Gujarat adds ₹700 = ₹1,000/month total)"
    ],
    eligibility: {
      minAge: 18,
      maxAge: 79,
      gender: "all",
      incomeLimit: null, // BPL
      caste: ["pwd"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "PwD with 80%+ disability",
        "BPL family"
      ]
    },
    documents: [
      { name: "Aadhaar", mandatory: true, purpose: "Identity", howToGet: "UIDAI" },
      { name: "Disability certificate (80%+)", mandatory: true, purpose: "Eligibility", howToGet: "CMO" },
      { name: "BPL card", mandatory: true, purpose: "Income proof", howToGet: "Food Dept" },
      { name: "Bank passbook", mandatory: true, purpose: "Transfer", howToGet: "Bank" }
    ],
    howToApplySteps: [
      "Step 1: Visit nsap.nic.in or District Social Welfare Office",
      "Step 2: Fill application and attach 80%+ disability proof",
      "Step 3: Verification by local authorities",
      "Step 4: Pension starts"
    ],
    alternativeApply: "Gram Panchayat.",
    officialLinks: {
      apply: "https://nsap.nic.in",
      checkStatus: "https://nsap.nic.in",
      officialWebsite: "https://nsap.nic.in"
    },
    helpline: "1800-11-2933",
    processingTime: "60 Days",
    commonMistakes: [
      "Disability is less than 80% (not eligible for this specific central scheme)"
    ],
    deadline: null,
    isActive: true,
    tags: ["disability", "pension", "bpl", "pwd"],
    viewCount: 600000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "pm-cares-children",
    name: "PM CARES for Children",
    nameHindi: "बच्चों के लिए पीएम केयर्स",
    nameGujarati: "બાળકો માટે પીએમ કેયર્સ",
    department: "WCD",
    ministry: "Ministry of WCD",
    category: "social",
    state: "all",
    description: "Support for children who lost parents to COVID-19.",
    descriptionHindi: "कोविड-19 से माता-पिता को खोने वाले बच्चों के लिए सहायता।",
    benefitAmount: "₹10 lakh FD + ₹4,000/month stipend",
    benefits: [
      "Free education",
      "₹10 lakh fixed deposit maturing at 23",
      "₹4,000/month stipend from 18-23 years of age",
      "Ayushman Bharat ₹5 lakh health cover till age 23"
    ],
    eligibility: {
      minAge: 0,
      maxAge: 18,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["student", "any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "Children who lost both parents OR surviving parent/legal guardian to COVID-19 between 11.03.2020 and 28.02.2022"
      ]
    },
    documents: [
      { name: "Aadhaar", mandatory: true, purpose: "Identity", howToGet: "UIDAI" },
      { name: "COVID death certificate of parent", mandatory: true, purpose: "Eligibility", howToGet: "Municipality" },
      { name: "Birth certificate", mandatory: true, purpose: "Age proof", howToGet: "Panchayat" },
      { name: "Guardianship proof", mandatory: true, purpose: "Legal care", howToGet: "CWC/Court" }
    ],
    howToApplySteps: [
      "Step 1: Visit pmcaresforchildren.in",
      "Step 2: Log in or register via Citizen login",
      "Step 3: Fill child and parent details",
      "Step 4: Upload COVID death certificates",
      "Step 5: District Magistrate verifies application",
      "Step 6: Benefits transferred to child's accounts and institutions"
    ],
    alternativeApply: "Visit District Magistrate office.",
    officialLinks: {
      apply: "https://pmcaresforchildren.in",
      checkStatus: "https://pmcaresforchildren.in",
      officialWebsite: "https://pmcaresforchildren.in"
    },
    helpline: "011-23388088",
    processingTime: "Dependent on DM verification",
    commonMistakes: [
      "Death certificate does not mention COVID-19 as cause"
    ],
    deadline: null,
    isActive: true,
    tags: ["covid", "orphan", "education", "health", "children"],
    viewCount: 1000000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "nsap-bundle",
    name: "National Social Assistance Programme (NSAP)",
    nameHindi: "राष्ट्रीय सामाजिक सहायता कार्यक्रम",
    nameGujarati: "રાષ્ટ્રીય સામાજિક સહાય કાર્યક્રમ",
    department: "Rural Development",
    ministry: "Ministry of Rural Development",
    category: "pension",
    state: "all",
    description: "5 pension schemes: old age, widow, disability, family benefit, Annapurna food.",
    descriptionHindi: "5 पेंशन योजनाएं: वृद्धावस्था, विधवा, विकलांगता, पारिवारिक लाभ, अन्नपूर्णा भोजन।",
    benefitAmount: "₹200-₹500/month pension + ₹20,000 family benefit lump sum",
    benefits: [
      "Monthly pension of ₹200-₹500 for old age, widows, disabled",
      "₹20,000 lump sum family benefit on death of primary breadwinner",
      "Annapurna: 10kg free grain for uncovered seniors"
    ],
    eligibility: {
      minAge: 18,
      maxAge: null,
      gender: "all",
      incomeLimit: null, // BPL
      caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "BPL households — old age (60+), widows, disabled"
      ]
    },
    documents: [
      { name: "Aadhaar", mandatory: true, purpose: "Identity", howToGet: "UIDAI" },
      { name: "BPL card", mandatory: true, purpose: "Income proof", howToGet: "Food Dept" },
      { name: "Age/Disability/Death certificate", mandatory: true, purpose: "Category eligibility", howToGet: "Relevant Authority" }
    ],
    howToApplySteps: [
      "Step 1: Visit nsap.nic.in or local Gram Panchayat",
      "Step 2: Choose relevant sub-scheme (Old Age / Widow / Disability)",
      "Step 3: Submit application with BPL proof",
      "Step 4: Receive pension directly in bank account"
    ],
    alternativeApply: "State specific social welfare portals.",
    officialLinks: {
      apply: "https://nsap.nic.in",
      checkStatus: "https://nsap.nic.in",
      officialWebsite: "https://nsap.nic.in"
    },
    helpline: "1800-11-2933",
    processingTime: "60 Days",
    commonMistakes: [
      "Applying without being on the BPL list"
    ],
    deadline: null,
    isActive: true,
    tags: ["pension", "bpl", "social welfare", "nsap"],
    viewCount: 2000000,
    lastUpdated: "2025-01-01T00:00:00Z"
  }
];
