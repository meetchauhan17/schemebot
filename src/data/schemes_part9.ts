import { Scheme } from "@/types";

export const schemesPart9: Scheme[] = [
  {
    id: "lakhpati-didi-2025",
    name: "Lakhpati Didi Scheme",
    nameHindi: "लखपति दीदी योजना",
    nameGujarati: "લખપતિ દીદી યોજના",
    department: "Ministry of Rural Development",
    ministry: "Ministry of Rural Development",
    category: "women",
    state: "all",
    description: "Empowering rural women in Self Help Groups (SHGs) to earn an annual income of at least ₹1 Lakh through skill training.",
    descriptionHindi: "स्वयं सहायता समूहों (SHG) की महिलाओं को कौशल प्रशिक्षण के माध्यम से कम से कम ₹1 लाख की वार्षिक आय अर्जित करने के लिए सशक्त बनाना।",
    benefitAmount: "Skill Training & Financial Support to earn ₹1 Lakh+/year",
    benefits: [
      "Specialized skill training (tailoring, agriculture, LED bulb making, plumbing, drone operation, etc.)",
      "Financial assistance and easy loans through SHGs",
      "Market linkages to sell products",
      "Goal is to bring household income above ₹1,00,000 per year"
    ],
    eligibility: {
      minAge: 18,
      maxAge: 59,
      gender: "female",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["self-employed", "unemployed", "farmer"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "Must be a female member of an active Self Help Group (SHG) registered under DAY-NRLM",
        "Targeted at rural women"
      ]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "UIDAI" },
      { name: "SHG Member ID", mandatory: true, purpose: "Eligibility verification", howToGet: "From your SHG Coordinator" },
      { name: "Bank Passbook", mandatory: true, purpose: "Loan/Financial credit", howToGet: "Any Bank" }
    ],
    howToApplySteps: [
      "Step 1: Join a local Self Help Group (SHG) under the National Rural Livelihood Mission (NRLM) if not already a member.",
      "Step 2: Participate actively in SHG meetings and savings.",
      "Step 3: Apply for skill training programs through the SHG coordinator/Gram Panchayat.",
      "Step 4: Receive training and get assistance in setting up a micro-enterprise.",
      "Step 5: Avail SHG loans to expand your business and increase income."
    ],
    alternativeApply: "Visit the Block Development Office (BDO) and ask for the NRLM/SRLM block coordinator.",
    officialLinks: {
      apply: "https://nrlm.gov.in/",
      checkStatus: "https://nrlm.gov.in/",
      officialWebsite: "https://lakhpatididi.gov.in/"
    },
    helpline: "Contact Local BDO",
    processingTime: "Continuous Training Program",
    commonMistakes: [
      "Applying individually without being part of an SHG."
    ],
    deadline: null,
    isActive: true,
    tags: ["women", "rural", "business", "SHG", "lakhpati", "didi"],
    viewCount: 1500000,
    lastUpdated: "2025-02-10T00:00:00Z"
  },
  {
    id: "namo-drone-didi",
    name: "Namo Drone Didi Scheme",
    nameHindi: "नमो ड्रोन दीदी योजना",
    nameGujarati: "નમો ડ્રોન દીદી યોજના",
    department: "Ministry of Agriculture",
    ministry: "Ministry of Agriculture",
    category: "women",
    state: "all",
    description: "Providing drones to Women Self Help Groups (SHGs) for agricultural purposes like spraying fertilizers and pesticides.",
    descriptionHindi: "महिला स्वयं सहायता समूहों (SHG) को कृषि कार्यों (जैसे उर्वरक छिड़काव) के लिए ड्रोन प्रदान करना।",
    benefitAmount: "Drone + Training + Subsidy up to ₹8 Lakh",
    benefits: [
      "80% subsidy on the cost of drones and accessories (up to ₹8 Lakh)",
      "Remaining 20% can be financed through Agriculture Infrastructure Fund (AIF) loan",
      "Free 15-day comprehensive drone pilot training for one SHG member",
      "Earn additional income of ₹1 Lakh+ by renting the drone to farmers"
    ],
    eligibility: {
      minAge: 18,
      maxAge: 59,
      gender: "female",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["farmer", "self-employed"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "Must be a well-performing Women Self Help Group (SHG)",
        "One member will be selected for drone pilot training",
        "Member selected for pilot must be 18+ and have minimum Class 10 education"
      ]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "UIDAI" },
      { name: "SHG Resolution Document", mandatory: true, purpose: "Group agreement", howToGet: "SHG Meeting" },
      { name: "Class 10 Marksheet", mandatory: true, purpose: "For Pilot Selection", howToGet: "School Board" },
      { name: "Bank Passbook of SHG", mandatory: true, purpose: "Subsidy Transfer", howToGet: "Bank" }
    ],
    howToApplySteps: [
      "Step 1: The Women SHG must pass a resolution to procure a drone.",
      "Step 2: Nominate one member (Class 10 pass) to become the Drone Pilot.",
      "Step 3: Submit application to the State Rural Livelihood Mission (SRLM) or local agriculture office.",
      "Step 4: Once selected, the nominated member undergoes 15-day free drone training.",
      "Step 5: Subsidy is released to the SHG bank account to purchase the drone from approved vendors."
    ],
    alternativeApply: "Contact Krishi Vigyan Kendra (KVK) or Block Agriculture Officer.",
    officialLinks: {
      apply: "Through Local SRLM Office",
      checkStatus: "N/A",
      officialWebsite: "https://agrimachinery.nic.in/"
    },
    helpline: "1800-180-1551",
    processingTime: "2-3 Months",
    commonMistakes: [
      "Nominating a member who has not passed Class 10 (DGCA requirement for pilots)"
    ],
    deadline: null,
    isActive: true,
    tags: ["drone", "agriculture", "women", "SHG", "didi", "subsidy"],
    viewCount: 1200000,
    lastUpdated: "2025-02-15T00:00:00Z"
  },
  {
    id: "pmay-urban",
    name: "Pradhan Mantri Awas Yojana - Urban (PMAY-U)",
    nameHindi: "प्रधानमंत्री आवास योजना - शहरी",
    nameGujarati: "પ્રધાનમંત્રી આવાસ યોજના - શહેરી",
    department: "MoHUA",
    ministry: "Ministry of Housing and Urban Affairs",
    category: "housing",
    state: "all",
    description: "Credit linked subsidy and financial assistance for urban poor to buy/build homes.",
    descriptionHindi: "शहरी गरीबों को घर खरीदने/बनाने के लिए क्रेडिट लिंक्ड सब्सिडी।",
    benefitAmount: "Interest Subsidy up to ₹2.67 Lakh",
    benefits: [
      "Credit Linked Subsidy Scheme (CLSS): Interest subsidy up to ₹2.67 Lakh on home loans",
      "Beneficiary Led Construction (BLC): ₹1.5 Lakh central assistance for building on own land",
      "Affordable Housing in Partnership (AHP): ₹1.5 Lakh subsidy for buying flats in govt projects",
      "In-situ Slum Redevelopment (ISSR): Slum rehabilitation"
    ],
    eligibility: {
      minAge: 18,
      maxAge: 70,
      gender: "all", // Preference to female ownership
      incomeLimit: 1800000, // EWS: 3L, LIG: 6L, MIG1: 12L, MIG2: 18L
      caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "Beneficiary family must NOT own a pucca house anywhere in India",
        "Must belong to EWS, LIG, or MIG category based on annual household income",
        "House to be purchased/built must be in the name of female head of household or joint name"
      ]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "UIDAI" },
      { name: "Income Proof / ITR", mandatory: true, purpose: "Determine category (EWS/LIG/MIG)", howToGet: "Employer / IT Dept" },
      { name: "Property Documents", mandatory: true, purpose: "For Loan/Subsidy", howToGet: "Builder/Registry" },
      { name: "Affidavit", mandatory: true, purpose: "Declaring no pucca house ownership", howToGet: "Notary" }
    ],
    howToApplySteps: [
      "Step 1: Identify which component you need (Home Loan Subsidy or Building on own land).",
      "Step 2: For CLSS (Home Loan Subsidy), apply directly at the Bank/HFC where you take the home loan.",
      "Step 3: For BLC (Building on own land), visit pmaymis.gov.in and click 'Citizen Assessment'.",
      "Step 4: Enter Aadhaar and fill the online application form.",
      "Step 5: Municipal corporation verifies the land and application.",
      "Step 6: Subsidy is credited to bank account (for BLC) or loan account (for CLSS)."
    ],
    alternativeApply: "Visit nearest Common Service Centre (CSC) or Municipal Corporation office.",
    officialLinks: {
      apply: "https://pmaymis.gov.in/",
      checkStatus: "https://pmaymis.gov.in/Open/Check_Status_of_assessment.aspx",
      officialWebsite: "https://pmay-urban.gov.in/"
    },
    helpline: "1800-11-3377 / 1800-11-3388",
    processingTime: "3-6 Months",
    commonMistakes: [
      "Taking a home loan first and then applying separately (CLSS must be claimed through the lending bank)"
    ],
    deadline: null,
    isActive: true,
    tags: ["housing", "urban", "home loan", "subsidy", "flat", "awas"],
    viewCount: 4000000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "khelo-india",
    name: "Khelo India Scheme",
    nameHindi: "खेलो इंडिया योजना",
    nameGujarati: "ખેલો ઇન્ડિયા યોજના",
    department: "Sports Authority of India",
    ministry: "Ministry of Youth Affairs and Sports",
    category: "social",
    state: "all",
    description: "Financial assistance and training to talented young athletes to build a strong sports ecosystem.",
    descriptionHindi: "प्रतिभाशाली युवा एथलीटों को प्रशिक्षण और वित्तीय सहायता।",
    benefitAmount: "₹5,000,000 over 8 years",
    benefits: [
      "Talented athletes selected receive ₹5,00,000 per year for 8 consecutive years",
      "Admission to specialized Khelo India State Centres of Excellence (KISCE)",
      "World-class coaching, sports science support, and diet/nutrition allowance",
      "Opportunities to participate in Khelo India Youth Games"
    ],
    eligibility: {
      minAge: 10,
      maxAge: 21,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["student"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "Must demonstrate exceptional talent in recognized sports disciplines",
        "Selection done through Khelo India talent identification portals and national competitions"
      ]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity and Age Proof", howToGet: "UIDAI" },
      { name: "Sports Achievement Certificates", mandatory: true, purpose: "Proof of talent", howToGet: "Sports Federations" },
      { name: "Birth Certificate", mandatory: true, purpose: "Age verification", howToGet: "Municipal Corporation" },
      { name: "Medical Fitness Certificate", mandatory: true, purpose: "Physical fitness", howToGet: "Govt Hospital" }
    ],
    howToApplySteps: [
      "Step 1: Participate in state or national level recognized sports tournaments.",
      "Step 2: Register on the Khelo India App or Talent Identification Portal.",
      "Step 3: Scouts and selection committees will identify talent during the Khelo India Youth Games and other events.",
      "Step 4: Shortlisted candidates are invited for skill assessment and medical tests.",
      "Step 5: Final selected athletes are awarded the scholarship and placed in training centers."
    ],
    alternativeApply: "Contact state Sports Authority of India (SAI) centers.",
    officialLinks: {
      apply: "https://kheloindia.gov.in/",
      checkStatus: "N/A",
      officialWebsite: "https://kheloindia.gov.in/"
    },
    helpline: "1800-208-5155",
    processingTime: "Annual Selection Cycle",
    commonMistakes: [
      "Applying without a strong record in recognized state/national tournaments"
    ],
    deadline: null,
    isActive: true,
    tags: ["sports", "youth", "athlete", "training", "scholarship"],
    viewCount: 850000,
    lastUpdated: "2025-01-01T00:00:00Z"
  }
];
