import { Scheme } from "@/types";

export const schemesPart6: Scheme[] = [
  // AGRICULTURE (1-5)
  {
    id: "pm-dhan-dhaanya",
    name: "PM Dhan-Dhaanya Krishi Yojana",
    nameHindi: "पीएम धन-धान्य कृषि योजना",
    nameGujarati: "પીએમ ધન-ધાન્ય કૃષિ યોજના",
    department: "Agriculture",
    ministry: "Ministry of Agriculture",
    category: "agriculture",
    state: "all",
    description: "Comprehensive farming support for 1.7 crore farmers in low productivity districts.",
    descriptionHindi: "कम उत्पादकता वाले जिलों में किसानों के लिए व्यापक कृषि सहायता।",
    benefitAmount: "Crop support + credit + irrigation",
    benefits: [
      "Crop support in 100 low-productivity districts",
      "Enhanced credit access",
      "Irrigation and infrastructure support"
    ],
    eligibility: {
      minAge: 18,
      maxAge: null,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["farmer"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "Must be a farmer in 100 identified low-productivity districts"
      ]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "UIDAI" },
      { name: "Land record (Khasra)", mandatory: true, purpose: "Proof of farming", howToGet: "Tehsildar" },
      { name: "Bank passbook", mandatory: true, purpose: "DBT", howToGet: "Bank" }
    ],
    howToApplySteps: [
      "Step 1: Check if your district is in the 100 identified districts at india.gov.in",
      "Step 2: Visit local Krishi Vigyan Kendra (KVK) for enrollment",
      "Step 3: Existing PM-KISAN beneficiaries are auto-enrolled"
    ],
    alternativeApply: "Visit nearest CSC.",
    officialLinks: {
      apply: "https://india.gov.in",
      checkStatus: "https://india.gov.in",
      officialWebsite: "https://india.gov.in"
    },
    helpline: "1800-180-1551",
    processingTime: "30 Days",
    commonMistakes: [
      "Applying outside the 100 specified districts"
    ],
    deadline: null,
    isActive: true,
    tags: ["farmer", "2025", "new scheme", "low productivity districts", "agriculture"],
    viewCount: 150000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "mksy-gujarat",
    name: "Mukhyamantri Kisan Sahay Yojana",
    nameHindi: "मुख्यमंत्री किसान सहाय योजना",
    nameGujarati: "મુખ્યમંત્રી કિસાન સહાય યોજના",
    department: "Agriculture",
    ministry: "Government of Gujarat",
    category: "agriculture",
    state: "Gujarat",
    description: "Crop loss compensation for Gujarat farmers — NO premium required.",
    descriptionHindi: "गुजरात के किसानों के लिए फसल नुकसान मुआवजा।",
    benefitAmount: "₹20,000 to ₹25,000/hectare (Max 4 hectares)",
    benefits: [
      "₹20,000/hectare for 33-60% crop loss",
      "₹25,000/hectare for >60% crop loss",
      "Max coverage up to 4 hectares",
      "No premium required from farmers"
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
        "All Gujarat farmers with crop loss due to heavy rain/drought/unseasonal rain"
      ]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "UIDAI" },
      { name: "7/12 Land Record (Satbara Utara)", mandatory: true, purpose: "Land proof", howToGet: "Local Talati" },
      { name: "Bank passbook", mandatory: true, purpose: "Compensation transfer", howToGet: "Bank" },
      { name: "Crop loss declaration form", mandatory: true, purpose: "Details of loss", howToGet: "Portal/Talati" }
    ],
    howToApplySteps: [
      "Step 1: Visit ikhedut.gujarat.gov.in within 3 months of crop loss",
      "Step 2: Click 'Kisan Sahay Application'",
      "Step 3: Enter your land details and 7/12 number",
      "Step 4: Submit crop loss details",
      "Step 5: Village survey team verifies loss",
      "Step 6: Compensation credited to bank account"
    ],
    alternativeApply: "Visit Talati or Gram Sevak.",
    officialLinks: {
      apply: "https://ikhedut.gujarat.gov.in",
      checkStatus: "https://ikhedut.gujarat.gov.in",
      officialWebsite: "https://ikhedut.gujarat.gov.in"
    },
    helpline: "1800-233-5500",
    processingTime: "60 Days",
    commonMistakes: [
      "Applying after 3-month window closes",
      "7/12 not updated with current crop name"
    ],
    deadline: "Within 3 months of loss",
    isActive: true,
    tags: ["gujarat", "farmer", "crop loss", "compensation"],
    viewCount: 300000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "suryashakti-kisan",
    name: "Suryashakti Kisan Yojana",
    nameHindi: "सूर्यशक्ति किसान योजना",
    nameGujarati: "સૂર્યશક્તિ કિસાન યોજના",
    department: "Energy",
    ministry: "Government of Gujarat",
    category: "agriculture",
    state: "Gujarat",
    description: "Solar panels on farmland — free electricity + sell surplus to DISCOM.",
    descriptionHindi: "खेतों पर सोलर पैनल - मुफ्त बिजली + अधिशेष बेचना।",
    benefitAmount: "60% subsidy on solar plant",
    benefits: [
      "60% subsidy on solar plant installation",
      "Free electricity for farming",
      "Income from surplus power sale to DISCOM"
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
        "Gujarat farmers with agricultural electricity connection"
      ]
    },
    documents: [
      { name: "Aadhaar", mandatory: true, purpose: "Identity", howToGet: "UIDAI" },
      { name: "Electricity bill (agricultural)", mandatory: true, purpose: "Consumer No.", howToGet: "Discom" },
      { name: "7/12 land record", mandatory: true, purpose: "Land proof", howToGet: "Talati" },
      { name: "Bank passbook", mandatory: true, purpose: "Subsidy/Income", howToGet: "Bank" }
    ],
    howToApplySteps: [
      "Step 1: Visit guvnl.in and apply under Suryashakti Kisan Yojana",
      "Step 2: Submit land and electricity connection details",
      "Step 3: DISCOM approves and installs solar plant",
      "Step 4: Pay 40% (rest 60% is subsidy)",
      "Step 5: Use free electricity for farming, sell surplus to DISCOM"
    ],
    alternativeApply: "Contact local DISCOM office.",
    officialLinks: {
      apply: "https://guvnl.in",
      checkStatus: "https://guvnl.in",
      officialWebsite: "https://guvnl.in"
    },
    helpline: "1912",
    processingTime: "60 Days",
    commonMistakes: [
      "Not having a valid agricultural electricity connection"
    ],
    deadline: null,
    isActive: true,
    tags: ["solar", "gujarat", "farmer", "electricity"],
    viewCount: 200000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "kisan-vikas-patra",
    name: "Kisan Vikas Patra",
    nameHindi: "किसान विकास पत्र",
    nameGujarati: "કિસાન વિકાસ પત્ર",
    department: "Post Office",
    ministry: "Ministry of Finance",
    category: "insurance", // Treating as investment/insurance
    state: "all",
    description: "Safe investment scheme — doubles your money in fixed time.",
    descriptionHindi: "सुरक्षित निवेश योजना - निश्चित समय में पैसा दोगुना।",
    benefitAmount: "Doubles investment in ~115 months",
    benefits: [
      "Money doubles in ~115 months (9 years 7 months) at current rates",
      "Guaranteed returns backed by Government of India"
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
        "Any Indian citizen 18+ (not exclusively farmers despite name)"
      ]
    },
    documents: [
      { name: "Aadhaar", mandatory: true, purpose: "Identity", howToGet: "UIDAI" },
      { name: "PAN card", mandatory: true, purpose: "Financial KYC", howToGet: "IT Dept" },
      { name: "Bank passbook", mandatory: false, purpose: "Transfer details", howToGet: "Bank" },
      { name: "Passport photo", mandatory: true, purpose: "Application form", howToGet: "Studio" }
    ],
    howToApplySteps: [
      "Step 1: Visit any post office",
      "Step 2: Fill KVP application form",
      "Step 3: Deposit minimum ₹1,000 (no maximum)",
      "Step 4: Receive KVP certificate",
      "Step 5: Encash after maturity period"
    ],
    alternativeApply: "Through netbanking if available for PO.",
    officialLinks: {
      apply: "https://indiapost.gov.in",
      checkStatus: "https://indiapost.gov.in",
      officialWebsite: "https://indiapost.gov.in"
    },
    helpline: "1800-266-6868",
    processingTime: "Instant",
    commonMistakes: [
      "Losing the KVP certificate",
      "Not declaring interest income for taxation"
    ],
    deadline: null,
    isActive: true,
    tags: ["investment", "savings", "post office", "doubles money"],
    viewCount: 1500000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "agriculture-infrastructure-fund",
    name: "Agriculture Infrastructure Fund (AIF)",
    nameHindi: "कृषि अवसंरचना कोष",
    nameGujarati: "કૃષિ ઇન્ફ્રાસ્ટ્રક્ચર ફંડ",
    department: "Agriculture",
    ministry: "Ministry of Agriculture",
    category: "agriculture",
    state: "all",
    description: "Subsidized loan for farm infrastructure like cold storage, warehouses.",
    descriptionHindi: "कोल्ड स्टोरेज, गोदाम जैसे कृषि बुनियादी ढांचे के लिए सब्सिडी वाला ऋण।",
    benefitAmount: "Up to ₹2 crore loan with 3% interest subvention",
    benefits: [
      "Up to ₹2 crore loan with 3% interest subvention for 7 years",
      "Credit guarantee coverage under CGTMSE for loans up to ₹2 crore"
    ],
    eligibility: {
      minAge: 18,
      maxAge: null,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["farmer", "business", "self-employed"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "Farmers, FPOs, Agri-entrepreneurs, cooperatives"
      ]
    },
    documents: [
      { name: "Aadhaar", mandatory: true, purpose: "Identity", howToGet: "UIDAI" },
      { name: "Land record", mandatory: true, purpose: "Proof of land for infrastructure", howToGet: "Revenue Dept" },
      { name: "Project report", mandatory: true, purpose: "Business plan", howToGet: "CA / Consultant" },
      { name: "Bank statement (6 months)", mandatory: true, purpose: "Financial health", howToGet: "Bank" }
    ],
    howToApplySteps: [
      "Step 1: Prepare DPR (Detailed Project Report)",
      "Step 2: Visit agriinfra.dac.gov.in",
      "Step 3: Register and apply online",
      "Step 4: Application is routed to chosen bank",
      "Step 5: Bank sanctions loan and claims subvention"
    ],
    alternativeApply: "Visit bank branch with DPR.",
    officialLinks: {
      apply: "https://agriinfra.dac.gov.in",
      checkStatus: "https://agriinfra.dac.gov.in",
      officialWebsite: "https://agriinfra.dac.gov.in"
    },
    helpline: "1800-270-0224",
    processingTime: "60 Days",
    commonMistakes: [
      "Submitting unrealistic project reports",
      "Not obtaining necessary local body permissions"
    ],
    deadline: null,
    isActive: true,
    tags: ["loan", "agriculture", "infrastructure", "cold storage"],
    viewCount: 400000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },

  // HEALTH (6-10)
  {
    id: "ma-yojana-gujarat",
    name: "Mukhyamantri Amrutum (MA) Yojana",
    nameHindi: "मुख्यमंत्री अमृतम योजना",
    nameGujarati: "મુખ્યમંત્રી અમૃતમ (MA) યોજના",
    department: "Health",
    ministry: "Government of Gujarat",
    category: "health",
    state: "Gujarat",
    description: "FREE treatment up to ₹5 lakh/year for BPL families in Gujarat.",
    descriptionHindi: "गुजरात में बीपीएल परिवारों के लिए 5 लाख तक का मुफ्त इलाज।",
    benefitAmount: "₹5,00,000/year cashless treatment",
    benefits: [
      "₹5,00,000/year cashless treatment",
      "Covers: Heart surgery, cancer, kidney transplant, neurosurgery, burns, neonatal care",
      "Valid in empaneled Govt and Private hospitals"
    ],
    eligibility: {
      minAge: null,
      maxAge: null,
      gender: "all",
      incomeLimit: 250000,
      caste: ["all"],
      occupation: ["any"],
      states: ["Gujarat"],
      familySize: null,
      additionalCriteria: [
        "BPL families in Gujarat (ration card holders)"
      ]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "UIDAI" },
      { name: "BPL Ration Card (Gujarat)", mandatory: true, purpose: "Eligibility", howToGet: "Food Dept" },
      { name: "Income Certificate", mandatory: true, purpose: "Below ₹2.5 lakh proof", howToGet: "Mamlatdar" },
      { name: "Passport photo", mandatory: true, purpose: "MA Card", howToGet: "Studio" },
      { name: "Family composition proof", mandatory: true, purpose: "Add members", howToGet: "Talati" }
    ],
    howToApplySteps: [
      "Step 1: Visit your nearest Government hospital or empaneled private hospital",
      "Step 2: Show BPL ration card at the hospital's Amrutum desk",
      "Step 3: Hospital verifies eligibility online",
      "Step 4: Get MA card issued (first visit only)",
      "Step 5: All covered treatments are cashless thereafter"
    ],
    alternativeApply: "Taluka health office.",
    officialLinks: {
      apply: "https://health.gujarat.gov.in",
      checkStatus: "https://health.gujarat.gov.in",
      officialWebsite: "https://health.gujarat.gov.in"
    },
    helpline: "104",
    processingTime: "Instant at hospital desk",
    commonMistakes: [
      "Ration card must be BPL Gujarat card, not APL"
    ],
    deadline: null,
    isActive: true,
    tags: ["gujarat", "health", "hospital", "bpl", "cashless"],
    viewCount: 1200000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "ayushman-70plus",
    name: "Ayushman Bharat for Senior Citizens 70+",
    nameHindi: "वरिष्ठ नागरिकों के लिए आयुष्मान भारत (70+)",
    nameGujarati: "વરિષ્ઠ નાગરિકો માટે આયુષ્માન ભારત",
    department: "Health",
    ministry: "Ministry of Health",
    category: "health",
    state: "all",
    description: "FREE health cover ₹5 lakh/year for ALL citizens aged 70+.",
    descriptionHindi: "70+ आयु वर्ग के सभी नागरिकों के लिए मुफ्त स्वास्थ्य कवर।",
    benefitAmount: "₹5,00,000/year (Universal)",
    benefits: [
      "₹5,00,000/year — NO income limit, ALL categories",
      "Even if already covered under PMJAY, gets additional ₹5 lakh top-up"
    ],
    eligibility: {
      minAge: 70,
      maxAge: null,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "Any Indian citizen aged 70 years or above"
      ]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Age proof — must show 70+", howToGet: "UIDAI" },
      { name: "Any one address proof", mandatory: true, purpose: "Residency", howToGet: "Utility bill/Voter ID" }
    ],
    howToApplySteps: [
      "Step 1: Visit pmjay.gov.in/senior-citizens",
      "Step 2: Enter Aadhaar number — system auto-verifies age",
      "Step 3: Download Ayushman card from portal or DigiLocker",
      "Step 4: Show Ayushman card at any empaneled hospital"
    ],
    alternativeApply: "Visit CSC or Empaneled Hospital desk.",
    officialLinks: {
      apply: "https://pmjay.gov.in",
      checkStatus: "https://pmjay.gov.in",
      officialWebsite: "https://pmjay.gov.in"
    },
    helpline: "14555",
    processingTime: "Instant",
    commonMistakes: [
      "Aadhaar has only birth year without full DOB (requires update first)"
    ],
    deadline: null,
    isActive: true,
    tags: ["health", "senior citizen", "70+", "insurance", "universal"],
    viewCount: 3500000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "pmjay-gig-workers",
    name: "PM Jan Arogya Yojana for Gig Workers",
    nameHindi: "गिग वर्कर्स के लिए पीएम जन आरोग्य योजना",
    nameGujarati: "ગિગ વર્કર્સ માટે પીએમ જન આરોગ્ય",
    department: "Health / Labour",
    ministry: "Ministry of Health",
    category: "health",
    state: "all",
    description: "₹5 lakh health cover for gig/platform workers registered on e-Shram.",
    descriptionHindi: "ई-श्रम पर पंजीकृत गिग वर्कर्स के लिए स्वास्थ्य कवर।",
    benefitAmount: "₹5,00,000/year",
    benefits: [
      "₹5 lakh health cover",
      "For gig workers (Swiggy/Zomato/Ola/Uber drivers)",
      "Cashless treatment at empaneled hospitals"
    ],
    eligibility: {
      minAge: 18,
      maxAge: 59,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["self-employed", "daily-wage", "unemployed"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "Gig workers registered on e-Shram portal"
      ]
    },
    documents: [
      { name: "Aadhaar", mandatory: true, purpose: "Identity", howToGet: "UIDAI" },
      { name: "e-Shram registration number", mandatory: true, purpose: "Gig worker proof", howToGet: "e-Shram Portal" },
      { name: "Bank passbook", mandatory: true, purpose: "Records", howToGet: "Bank" }
    ],
    howToApplySteps: [
      "Step 1: Register on eshram.gov.in as a gig/platform worker",
      "Step 2: Visit pmjay.gov.in or Ayushman App",
      "Step 3: Authenticate using Aadhaar and e-Shram details",
      "Step 4: Download Ayushman Card"
    ],
    alternativeApply: "CSC Center.",
    officialLinks: {
      apply: "https://pmjay.gov.in",
      checkStatus: "https://pmjay.gov.in",
      officialWebsite: "https://pmjay.gov.in"
    },
    helpline: "14434",
    processingTime: "Instant",
    commonMistakes: [
      "Not registered on e-Shram as gig worker"
    ],
    deadline: null,
    isActive: true,
    tags: ["health", "gig worker", "delivery", "driver", "insurance"],
    viewCount: 800000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "national-mental-health",
    name: "National Mental Health Programme",
    nameHindi: "राष्ट्रीय मानसिक स्वास्थ्य कार्यक्रम",
    nameGujarati: "રાષ્ટ્રીય માનસિક સ્વાસ્થ્ય કાર્યક્રમ",
    department: "Health",
    ministry: "Ministry of Health",
    category: "health",
    state: "all",
    description: "FREE mental health services at district hospitals.",
    descriptionHindi: "जिला अस्पतालों में मुफ्त मानसिक स्वास्थ्य सेवाएं।",
    benefitAmount: "Free counseling and medication",
    benefits: [
      "Free counseling, medication, and outpatient services",
      "Support for depression, anxiety, and severe mental disorders"
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
        "All Indian citizens"
      ]
    },
    documents: [
      { name: "Aadhaar", mandatory: false, purpose: "Patient registration", howToGet: "UIDAI" }
    ],
    howToApplySteps: [
      "Step 1: Find nearest DMHP center at nimhans.ac.in/find-center",
      "Step 2: Walk in — no appointment needed for first visit",
      "Step 3: Consultation with psychiatrist is FREE",
      "Step 4: Medicines prescribed are FREE at government hospital pharmacy"
    ],
    alternativeApply: "Tele-MANAS helpline 14416.",
    officialLinks: {
      apply: "Walk-in",
      checkStatus: "N/A",
      officialWebsite: "https://mohfw.gov.in/"
    },
    helpline: "NIMHANS: 080-46110007 | iCall: 9152987821",
    processingTime: "Immediate",
    commonMistakes: [
      "Avoiding treatment due to stigma"
    ],
    deadline: null,
    isActive: true,
    tags: ["mental health", "counseling", "psychiatry", "health"],
    viewCount: 500000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "pmsma",
    name: "Pradhan Mantri Surakshit Matritva Abhiyan",
    nameHindi: "प्रधानमंत्री सुरक्षित मातृत्व अभियान",
    nameGujarati: "પ્રધાનમંત્રી સુરક્ષિત માતૃત્વ અભિયાન",
    department: "Health",
    ministry: "Ministry of Health",
    category: "health",
    state: "all",
    description: "FREE antenatal checkup on 9th of every month for pregnant women.",
    descriptionHindi: "गर्भवती महिलाओं के लिए हर महीने की 9 तारीख को मुफ्त जांच।",
    benefitAmount: "Free medical checkup + tests",
    benefits: [
      "Free medical checkup + ultrasound + blood tests",
      "Checkup by specialist doctors on 9th of every month"
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
      additionalCriteria: [
        "All pregnant women in 2nd or 3rd trimester"
      ]
    },
    documents: [
      { name: "Aadhaar or ID proof", mandatory: true, purpose: "Registration", howToGet: "UIDAI" },
      { name: "MCP Card", mandatory: false, purpose: "Health tracking", howToGet: "ASHA" }
    ],
    howToApplySteps: [
      "Step 1: Note the date: 9th of any month",
      "Step 2: Visit any government health center (PHC/CHC/District Hospital)",
      "Step 3: Register at the PMSMA desk",
      "Step 4: Get complete free checkup"
    ],
    alternativeApply: "N/A",
    officialLinks: {
      apply: "Walk-in",
      checkStatus: "N/A",
      officialWebsite: "https://pmsma.mohfw.gov.in/"
    },
    helpline: "1800-180-1104",
    processingTime: "Immediate",
    commonMistakes: [
      "Visiting on a date other than the 9th"
    ],
    deadline: null,
    isActive: true,
    tags: ["pregnancy", "women", "health", "checkup"],
    viewCount: 600000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },

  // WOMEN & CHILD (11-15)
  {
    id: "vahali-dikri-gujarat",
    name: "Vahali Dikri Yojana",
    nameHindi: "वहाली डिक्री योजना",
    nameGujarati: "વહાલી દીકરી યોજના",
    department: "Women & Child Development",
    ministry: "Government of Gujarat",
    category: "women",
    state: "Gujarat",
    description: "Financial support for girl child in Gujarat — ₹1 lakh at age 18.",
    descriptionHindi: "गुजरात में बालिकाओं के लिए 1 लाख रुपये की वित्तीय सहायता।",
    benefitAmount: "₹1,10,000 total benefits",
    benefits: [
      "₹4,000 at Class 1 admission",
      "₹6,000 at Class 9",
      "₹1,00,000 at age 18 (if unmarried and completed Class 12)"
    ],
    eligibility: {
      minAge: 0,
      maxAge: 1, // Usually applied around birth or early childhood
      gender: "female",
      incomeLimit: 200000,
      caste: ["all"],
      occupation: ["any"],
      states: ["Gujarat"],
      familySize: null,
      additionalCriteria: [
        "First or second girl child only (not third)",
        "Gujarat domicile",
        "Girl enrolled in school (later stages)"
      ]
    },
    documents: [
      { name: "Aadhaar of girl child", mandatory: false, purpose: "Identity", howToGet: "UIDAI" },
      { name: "Birth certificate of girl child", mandatory: true, purpose: "Age and relations", howToGet: "Panchayat" },
      { name: "Aadhaar of parents", mandatory: true, purpose: "Identity", howToGet: "UIDAI" },
      { name: "Income certificate", mandatory: true, purpose: "Below ₹2 lakh", howToGet: "Mamlatdar" },
      { name: "Domicile certificate", mandatory: true, purpose: "Gujarat residency", howToGet: "Mamlatdar" },
      { name: "Bank account in girl's name", mandatory: false, purpose: "Payout at 18", howToGet: "Bank" }
    ],
    howToApplySteps: [
      "Step 1: Visit wcd.gujarat.gov.in or nearest ICDS (Anganwadi) supervisor office",
      "Step 2: Fill Vahali Dikri Yojana application form",
      "Step 3: Submit documents listed above",
      "Step 4: District WCD office verifies application",
      "Step 5: Fixed deposit created in girl's name",
      "Step 6: Payouts released progressively at milestones"
    ],
    alternativeApply: "Apply through Gram Panchayat or e-Samaj Kalyan portal.",
    officialLinks: {
      apply: "https://wcd.gujarat.gov.in",
      checkStatus: "https://wcd.gujarat.gov.in",
      officialWebsite: "https://wcd.gujarat.gov.in"
    },
    helpline: "181",
    processingTime: "60 Days",
    commonMistakes: [
      "Third girl child not eligible — only 1st and 2nd",
      "Income must be strictly below ₹2 lakh",
      "Girl getting married before 18 voids final installment"
    ],
    deadline: "Within 1 year of birth",
    isActive: true,
    tags: ["girl child", "gujarat", "education", "marriage"],
    viewCount: 1500000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "kanya-vivah-yojana",
    name: "Mukhyamantri Kanya Vivah Yojana",
    nameHindi: "मुख्यमंत्री कन्या विवाह योजना",
    nameGujarati: "મુખ્યમંત્રી કન્યા વિવાહ યોજના",
    department: "Social Justice / WCD",
    ministry: "State Governments",
    category: "women",
    state: "all", // State specific implementations
    description: "Financial assistance for poor families for daughter's marriage.",
    descriptionHindi: "बेटी की शादी के लिए गरीब परिवारों को वित्तीय सहायता।",
    benefitAmount: "₹51,000 (Varies by state)",
    benefits: [
      "₹51,000 (Gujarat) | Varies by state",
      "Direct benefit transfer to girl's account to assist with marriage expenses"
    ],
    eligibility: {
      minAge: 18, // Girl
      maxAge: null,
      gender: "female",
      incomeLimit: 120000,
      caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "BPL families",
        "Girl must be 18+, boy must be 21+"
      ]
    },
    documents: [
      { name: "Aadhaar (both bride and groom)", mandatory: true, purpose: "Identity", howToGet: "UIDAI" },
      { name: "Birth certificates", mandatory: true, purpose: "Age proof", howToGet: "Panchayat" },
      { name: "Income certificate", mandatory: true, purpose: "BPL proof", howToGet: "Tehsildar" },
      { name: "BPL card", mandatory: true, purpose: "Eligibility", howToGet: "Food Dept" }
    ],
    howToApplySteps: [
      "Step 1: Apply via state portal (e.g., gcswb.gujarat.gov.in for Gujarat)",
      "Step 2: Submit application before or within specific period after marriage",
      "Step 3: Verification by local authorities",
      "Step 4: Grant credited to bride's bank account"
    ],
    alternativeApply: "Through Gram Panchayat or local social welfare office.",
    officialLinks: {
      apply: "State specific portal",
      checkStatus: "State specific portal",
      officialWebsite: "State specific portal"
    },
    helpline: "State WCD helplines",
    processingTime: "60 Days",
    commonMistakes: [
      "Boy is under 21 years of age",
      "Applying too late after the marriage"
    ],
    deadline: "Usually within 6-12 months of marriage",
    isActive: true,
    tags: ["marriage", "women", "financial aid", "bpl"],
    viewCount: 1000000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "pmmvy-2",
    name: "Pradhan Mantri Matru Vandana Yojana 2.0",
    nameHindi: "प्रधानमंत्री मातृ वंदना योजना 2.0",
    nameGujarati: "પ્રધાનમંત્રી માતૃ વંદના યોજના ૨.૦",
    department: "WCD",
    ministry: "Ministry of WCD",
    category: "women",
    state: "all",
    description: "Maternity benefit for first AND second child (if girl).",
    descriptionHindi: "पहले और दूसरे बच्चे (अगर लड़की है) के लिए मातृत्व लाभ।",
    benefitAmount: "Up to ₹6,000",
    benefits: [
      "First child: ₹5,000 (in two installments)",
      "Second child (if girl): ₹6,000 (single installment after birth and vaccination)"
    ],
    eligibility: {
      minAge: 19,
      maxAge: 45,
      gender: "female",
      incomeLimit: 800000, // EWS/BPL primarily
      caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "Pregnant/lactating women",
        "First or second pregnancy",
        "Not for central/state govt regular employees"
      ]
    },
    documents: [
      { name: "Aadhaar", mandatory: true, purpose: "Identity", howToGet: "UIDAI" },
      { name: "MCP card", mandatory: true, purpose: "Mother Child Protection tracking", howToGet: "ASHA" },
      { name: "Bank passbook", mandatory: true, purpose: "DBT", howToGet: "Bank" }
    ],
    howToApplySteps: [
      "Step 1: Register pregnancy with local Anganwadi/ASHA within 150 days of LMP",
      "Step 2: Or apply online at pmmvy.wcd.gov.in using Citizen Login",
      "Step 3: Fill form and upload MCP card and Aadhaar",
      "Step 4: Receive installments progressively based on checkups and vaccination"
    ],
    alternativeApply: "ASHA worker will assist offline.",
    officialLinks: {
      apply: "https://pmmvy.wcd.gov.in",
      checkStatus: "https://pmmvy.wcd.gov.in",
      officialWebsite: "https://pmmvy.wcd.gov.in"
    },
    helpline: "7998799804",
    processingTime: "30-45 Days per installment",
    commonMistakes: [
      "Not registering pregnancy early enough",
      "Aadhaar name mismatch with bank account"
    ],
    deadline: "Within 270 days of birth",
    isActive: true,
    tags: ["maternity", "pregnant", "women", "cash", "girl child"],
    viewCount: 2000000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "mission-vatsalya",
    name: "Mission Vatsalya",
    nameHindi: "मिशन वात्सल्य",
    nameGujarati: "મિશન વાત્સલ્ય",
    department: "WCD",
    ministry: "Ministry of WCD",
    category: "social",
    state: "all",
    description: "Support for children in difficult circumstances — orphans, trafficking victims.",
    descriptionHindi: "कठिन परिस्थितियों में बच्चों के लिए सहायता।",
    benefitAmount: "₹4,000/month",
    benefits: [
      "₹4,000/month for children in kinship/foster care",
      "Free education and institutional care if needed",
      "Rehabilitation for children in conflict with law"
    ],
    eligibility: {
      minAge: 0,
      maxAge: 18,
      gender: "all",
      incomeLimit: 96000, // Family income limit for sponsorship
      caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "Children in difficult circumstances (orphans, abandoned, trafficking victims, severe disease)"
      ]
    },
    documents: [
      { name: "Birth certificate", mandatory: true, purpose: "Age proof", howToGet: "Panchayat" },
      { name: "Aadhaar", mandatory: false, purpose: "Identity", howToGet: "UIDAI" },
      { name: "Court/authority order", mandatory: true, purpose: "Child Welfare Committee order", howToGet: "CWC" }
    ],
    howToApplySteps: [
      "Step 1: Contact District Child Protection Unit (DCPU) or call 1098",
      "Step 2: Child is presented before Child Welfare Committee (CWC)",
      "Step 3: CWC issues order for sponsorship/foster care",
      "Step 4: Financial assistance sent directly to guardian/foster parent's account"
    ],
    alternativeApply: "Via local NGO or Anganwadi worker.",
    officialLinks: {
      apply: "https://wcd.nic.in",
      checkStatus: "N/A",
      officialWebsite: "https://wcd.nic.in"
    },
    helpline: "CHILDLINE: 1098 (24x7 free)",
    processingTime: "Dependent on CWC hearing",
    commonMistakes: [
      "Not routing the case through the Child Welfare Committee"
    ],
    deadline: null,
    isActive: true,
    tags: ["child protection", "orphan", "foster care", "vatsalya"],
    viewCount: 400000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "poshan-abhiyan",
    name: "Poshan Abhiyan 2.0",
    nameHindi: "पोषण अभियान 2.0",
    nameGujarati: "પોષણ અભિયાન 2.0",
    department: "WCD",
    ministry: "Ministry of WCD",
    category: "health",
    state: "all",
    description: "Nutrition support for pregnant women, children under 6, and adolescent girls.",
    descriptionHindi: "गर्भवती महिलाओं, 6 से कम बच्चों और किशोरियों के लिए पोषण सहायता।",
    benefitAmount: "Nutritional support",
    benefits: [
      "Free nutritious supplementary food (Take Home Ration / Hot Cooked Meal)",
      "Health monitoring and growth tracking",
      "Iron/Folic acid supplements and deworming"
    ],
    eligibility: {
      minAge: 0,
      maxAge: 18,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "Children 0-6 years",
        "Pregnant & lactating women",
        "Adolescent girls (for specific interventions)"
      ]
    },
    documents: [
      { name: "Aadhaar", mandatory: true, purpose: "Identity tracking (Poshan Tracker)", howToGet: "UIDAI" },
      { name: "Birth certificate of child", mandatory: false, purpose: "Age tracking", howToGet: "Panchayat" },
      { name: "MCP card", mandatory: true, purpose: "Health tracking", howToGet: "ASHA" }
    ],
    howToApplySteps: [
      "Step 1: Visit nearest Anganwadi center",
      "Step 2: Register mother/child with Anganwadi Worker (AWW)",
      "Step 3: AWW enters details into the 'Poshan Tracker' app",
      "Step 4: Collect Take Home Ration monthly or send child for Hot Cooked Meal"
    ],
    alternativeApply: "N/A",
    officialLinks: {
      apply: "Walk-in",
      checkStatus: "N/A",
      officialWebsite: "https://poshanabhiyaan.gov.in"
    },
    helpline: "1800-11-8004",
    processingTime: "Immediate",
    commonMistakes: [
      "Not providing Aadhaar for child/mother leading to removal from tracker"
    ],
    deadline: null,
    isActive: true,
    tags: ["nutrition", "anganwadi", "children", "health"],
    viewCount: 1000000,
    lastUpdated: "2025-01-01T00:00:00Z"
  }
];
