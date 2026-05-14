import { Scheme } from "@/types";

export const schemesPart10: Scheme[] = [
  {
    id: "nsap-old-age",
    name: "Indira Gandhi National Old Age Pension Scheme (IGNOAPS)",
    nameHindi: "इंदिरा गांधी राष्ट्रीय वृद्धावस्था पेंशन योजना",
    nameGujarati: "ઇન્દિરા ગાંધી રાષ્ટ્રીય વૃદ્ધાવસ્થા પેન્શન યોજના",
    department: "Ministry of Rural Development",
    ministry: "Ministry of Rural Development",
    category: "pension",
    state: "all",
    description: "Monthly pension for senior citizens below the poverty line.",
    descriptionHindi: "गरीबी रेखा से नीचे के वरिष्ठ नागरिकों के लिए मासिक पेंशन।",
    benefitAmount: "₹200 - ₹500/month (State adds more)",
    benefits: [
      "Age 60-79: ₹200/month central contribution",
      "Age 80+: ₹500/month central contribution",
      "State governments add their own contribution (often making it ₹1000 - ₹2000 total)"
    ],
    eligibility: {
      minAge: 60,
      maxAge: null,
      gender: "all",
      incomeLimit: null, // BPL
      caste: ["all"],
      occupation: ["retired", "unemployed"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Must belong to a household Below Poverty Line (BPL)"]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "UIDAI" },
      { name: "Age Proof", mandatory: true, purpose: "Prove age 60+", howToGet: "Municipal Corp/Panchayat" },
      { name: "BPL Ration Card", mandatory: true, purpose: "BPL verification", howToGet: "Food Dept" },
      { name: "Bank Passbook", mandatory: true, purpose: "Pension transfer", howToGet: "Bank" }
    ],
    howToApplySteps: [
      "Step 1: Obtain application form from the Gram Panchayat or Block office.",
      "Step 2: Fill the form and attach Aadhaar, Age Proof, and BPL card.",
      "Step 3: Submit it to the Social Welfare Department/Block Development Officer.",
      "Step 4: After verification, pension is deposited directly to the bank account."
    ],
    alternativeApply: "Apply online at nsap.nic.in if your state supports it.",
    officialLinks: {
      apply: "https://nsap.nic.in/",
      checkStatus: "https://nsap.nic.in/StateDashboard.do",
      officialWebsite: "https://nsap.nic.in/"
    },
    helpline: "1800-11-1960",
    processingTime: "2 Months",
    commonMistakes: ["Submitting application without correct BPL documentation."],
    deadline: null,
    isActive: true,
    tags: ["pension", "old age", "senior citizen", "bpl"],
    viewCount: 1800000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "pm-devine",
    name: "PM-DevINE (North East Region)",
    nameHindi: "पीएम-डिवाइन (पूर्वोत्तर क्षेत्र)",
    nameGujarati: "પીએમ-ડિવાઇન (ઉત્તર-પૂર્વ)",
    department: "DoNER",
    ministry: "Ministry of Development of North Eastern Region",
    category: "social",
    state: "all",
    description: "Prime Minister's Development Initiative for North East Region to fund infrastructure and social projects.",
    descriptionHindi: "पूर्वोत्तर क्षेत्र के लिए प्रधानमंत्री विकास पहल।",
    benefitAmount: "Infrastructure & Livelihood Funds",
    benefits: [
      "Funds rapid infrastructure creation in NE states",
      "Supports livelihood activities for youth and women in the North East",
      "Addresses basic minimum service gaps"
    ],
    eligibility: {
      minAge: null,
      maxAge: null,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["any"],
      states: ["Assam", "Arunachal Pradesh", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Tripura", "Sikkim"],
      familySize: null,
      additionalCriteria: []
    },
    documents: [],
    howToApplySteps: [
      "This is an infrastructure and livelihood funding scheme managed by state governments and the North Eastern Council.",
      "Citizens benefit directly through new jobs, roads, and women empowerment projects launched in their districts."
    ],
    alternativeApply: "N/A",
    officialLinks: {
      apply: "N/A",
      checkStatus: "N/A",
      officialWebsite: "https://mdoner.gov.in/"
    },
    helpline: "N/A",
    processingTime: "N/A",
    commonMistakes: [],
    deadline: null,
    isActive: true,
    tags: ["north east", "infrastructure", "assam", "development"],
    viewCount: 200000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "bbbp-scheme",
    name: "Beti Bachao Beti Padhao",
    nameHindi: "बेटी बचाओ बेटी पढ़ाओ",
    nameGujarati: "બેટી બચાઓ બેટી પઢાઓ",
    department: "WCD",
    ministry: "Ministry of Women and Child Development",
    category: "women",
    state: "all",
    description: "Campaign and scheme to prevent gender biased sex selective elimination and ensure survival, protection, and education of the girl child.",
    descriptionHindi: "बालिकाओं के अस्तित्व, संरक्षण और शिक्षा को सुनिश्चित करने के लिए अभियान।",
    benefitAmount: "Social Protection & Education Access",
    benefits: [
      "Ensures survival and protection of the girl child",
      "Promotes girl child education (100% transition rate from primary to secondary)",
      "Strict enforcement of PC&PNDT Act",
      "Provides multi-sectoral support in all districts"
    ],
    eligibility: {
      minAge: null,
      maxAge: null,
      gender: "female",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: []
    },
    documents: [],
    howToApplySteps: [
      "BBBP is a nationwide campaign and policy enforcement framework.",
      "There is no direct cash transfer under BBBP itself (beware of fake forms).",
      "You benefit by accessing linked schemes like Sukanya Samriddhi Yojana (SSY) and RTE for girl child education."
    ],
    alternativeApply: "N/A",
    officialLinks: {
      apply: "N/A",
      checkStatus: "N/A",
      officialWebsite: "https://wcd.nic.in/bbbp-schemes"
    },
    helpline: "1098",
    processingTime: "N/A",
    commonMistakes: ["Buying fake 'Beti Bachao' cash claim forms from fraudsters (the scheme has no direct cash transfer component)."],
    deadline: null,
    isActive: true,
    tags: ["girl", "women", "education", "protection", "child"],
    viewCount: 3000000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "ddu-gky",
    name: "Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDU-GKY)",
    nameHindi: "दीन दयाल उपाध्याय ग्रामीण कौशल्य योजना",
    nameGujarati: "દીન દયાળ ઉપાધ્યાય ગ્રામીણ કૌશલ્ય યોજના",
    department: "Ministry of Rural Development",
    ministry: "Ministry of Rural Development",
    category: "employment",
    state: "all",
    description: "Free skill training and placement for rural poor youth.",
    descriptionHindi: "ग्रामीण गरीब युवाओं के लिए मुफ्त कौशल प्रशिक्षण और प्लेसमेंट।",
    benefitAmount: "Free Training + Job Placement",
    benefits: [
      "100% free skill training in modern trades (IT, Retail, Hospitality, Healthcare)",
      "Free uniform, books, and study material",
      "Free lodging and boarding for residential courses",
      "Guaranteed placement support (jobs paying minimum wage or above)"
    ],
    eligibility: {
      minAge: 15,
      maxAge: 35,
      gender: "all",
      incomeLimit: null, // BPL focused
      caste: ["all"],
      occupation: ["unemployed", "student"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "Rural youth from poor families (BPL, MGNREGA workers, RSBY card holders, etc.)",
        "Age limit relaxed up to 45 years for women and vulnerable groups"
      ]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "UIDAI" },
      { name: "BPL Card / MGNREGA Job Card", mandatory: true, purpose: "Poverty proof", howToGet: "Panchayat" },
      { name: "Class 8/10 Marksheet", mandatory: true, purpose: "Education proof", howToGet: "School" }
    ],
    howToApplySteps: [
      "Step 1: Visit kaushalpanjee.nic.in or download the Kaushal Panjee app.",
      "Step 2: Register yourself as a candidate.",
      "Step 3: Attend the Rozgar Mela or mobilization camp in your district.",
      "Step 4: Get selected by a Project Implementing Agency (PIA) for free training.",
      "Step 5: Complete training and receive job placement assistance."
    ],
    alternativeApply: "Visit the Gram Panchayat and speak to the Gram Rojgar Sahayak.",
    officialLinks: {
      apply: "https://kaushalpanjee.nic.in/",
      checkStatus: "https://kaushalpanjee.nic.in/",
      officialWebsite: "http://ddugky.gov.in/"
    },
    helpline: "Contact State Rural Livelihood Mission (SRLM)",
    processingTime: "Instant Registration",
    commonMistakes: ["Registering but not attending the mobilization camps to get selected."],
    deadline: null,
    isActive: true,
    tags: ["skill", "training", "youth", "rural", "job", "employment"],
    viewCount: 1600000,
    lastUpdated: "2025-01-01T00:00:00Z"
  }
];
