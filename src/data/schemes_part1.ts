import { Scheme } from "@/types";

export const schemesPart1: Scheme[] = [
  // AGRICULTURE (1-12)
  {
    id: "agri-001",
    name: "PM-KISAN",
    nameHindi: "पीएम-किसान सम्मान निधि",
    nameGujarati: "પીએમ-કિસાન સન્માન નિધિ",
    department: "Department of Agriculture & Farmers Welfare",
    ministry: "Ministry of Agriculture",
    category: "agriculture",
    state: "all",
    description: "Financial benefit of Rs. 6000/- per year is provided to eligible farmer families across the country.",
    descriptionHindi: "देश भर में पात्र किसान परिवारों को प्रति वर्ष 6000/- रुपये का वित्तीय लाभ प्रदान किया जाता है।",
    benefits: ["₹6,000 per year directly to bank account", "Credited in 3 equal installments of ₹2,000"],
    benefitAmount: "₹6,000/year",
    eligibility: {
      minAge: 18,
      maxAge: null,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["farmer"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Must own cultivable land", "Must have Aadhaar seeded bank account"]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity Proof", howToGet: "UIDAI Portal or nearest Aadhaar Seva Kendra" },
      { name: "Land Ownership Proof", mandatory: true, purpose: "To verify farming status", howToGet: "Revenue department website (Bhulekh/AnyRoR)" },
      { name: "Bank Passbook", mandatory: true, purpose: "For DBT Transfer", howToGet: "From your bank branch" }
    ],
    howToApplySteps: [
      "Go to official website pmkisan.gov.in",
      "Click on 'New Farmer Registration' under 'Farmers Corner'",
      "Enter Aadhaar Number and select State",
      "Fill the registration form with personal and land details",
      "Upload documents and click Submit"
    ],
    alternativeApply: "Visit nearest CSC (Common Service Centre) with documents",
    officialLinks: {
      apply: "https://pmkisan.gov.in/RegistrationFormNew.aspx",
      checkStatus: "https://pmkisan.gov.in/BeneficiaryStatus_New.aspx",
      officialWebsite: "https://pmkisan.gov.in",
      mobileApp: "https://play.google.com/store/apps/details?id=com.nic.project.pmkisan"
    },
    helpline: "155261 / 011-24300606",
    processingTime: "30-45 Days",
    commonMistakes: ["Aadhaar name not matching bank account name", "eKYC not completed"],
    deadline: null,
    isActive: true,
    tags: ["agriculture", "farmer", "financial aid", "pm kisan"],
    viewCount: 154200,
    lastUpdated: "2025-01-10T00:00:00Z"
  },
  {
    id: "agri-002",
    name: "Pradhan Mantri Fasal Bima Yojana",
    nameHindi: "प्रधानमंत्री फसल बीमा योजना",
    nameGujarati: "પ્રધાનમંત્રી પાક વીમા યોજના",
    department: "Department of Agriculture",
    ministry: "Ministry of Agriculture",
    category: "agriculture",
    state: "all",
    description: "Crop insurance scheme providing financial support to farmers suffering crop loss/damage arising out of unforeseen events.",
    descriptionHindi: "अप्रत्याशित घटनाओं के कारण फसल हानि का सामना कर रहे किसानों को वित्तीय सहायता।",
    benefits: ["Full insurance cover for crop failure", "Low premium (1.5% to 2% for Kharif/Rabi, 5% for commercial)"],
    benefitAmount: "Varies based on crop & area",
    eligibility: {
      minAge: 18,
      maxAge: null,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["farmer"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Notified crops in notified areas", "Tenant farmers are eligible"]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "UIDAI or Aadhaar centre" },
      { name: "Land possession certificate", mandatory: true, purpose: "Verify farming", howToGet: "Revenue dept" },
      { name: "Sowing Certificate", mandatory: true, purpose: "Proof of sown crop", howToGet: "Village Sarpanch / Patwari" }
    ],
    howToApplySteps: [
      "Visit pmfby.gov.in",
      "Click 'Farmer Corner' -> 'Guest Farmer' to register",
      "Fill crop details and bank account information",
      "Pay premium amount online",
      "Download Policy Receipt"
    ],
    alternativeApply: "Apply through bank where you hold Kisan Credit Card or through CSC.",
    officialLinks: {
      apply: "https://pmfby.gov.in/",
      checkStatus: "https://pmfby.gov.in/",
      officialWebsite: "https://pmfby.gov.in/",
      mobileApp: "https://play.google.com/store/apps/details?id=in.farmack.cropinsurance"
    },
    helpline: "14447",
    processingTime: "Based on crop cycle",
    commonMistakes: ["Delaying application past sowing season", "Incorrect bank details causing payout failure"],
    deadline: "Varies per season (July for Kharif, Dec for Rabi)",
    isActive: true,
    tags: ["crop", "insurance", "farmer", "pmfby"],
    viewCount: 95000,
    lastUpdated: "2025-02-01T00:00:00Z"
  },
  {
    id: "agri-003",
    name: "Kisan Credit Card",
    nameHindi: "किसान क्रेडिट कार्ड",
    nameGujarati: "કિસાન ક્રેડિટ કાર્ડ",
    department: "Department of Financial Services",
    ministry: "Ministry of Finance",
    category: "agriculture",
    state: "all",
    description: "Credit facility for farmers to meet short term credit requirements for cultivation, post-harvest expenses, etc.",
    descriptionHindi: "किसानों को खेती के लिए अल्पकालिक ऋण सुविधा।",
    benefits: ["Loan up to ₹3 lakh at subsidized 4% interest rate (with prompt repayment)", "Flexible repayment schedule"],
    benefitAmount: "Up to ₹3 lakh loan @ 4%",
    eligibility: {
      minAge: 18,
      maxAge: 75,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["farmer"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["All farmers, tenant farmers, self-help groups eligible"]
    },
    documents: [
      { name: "ID & Address Proof", mandatory: true, purpose: "KYC", howToGet: "Aadhaar/Voter ID" },
      { name: "Land Documents", mandatory: true, purpose: "Determine loan limit", howToGet: "Revenue dept" },
      { name: "Passport Photo", mandatory: true, purpose: "Bank form", howToGet: "Photo studio" }
    ],
    howToApplySteps: [
      "Visit PM Kisan portal or your bank's website",
      "Download KCC Application Form",
      "Fill details of land holdings and crops grown",
      "Submit physical form to the bank branch where you have an account"
    ],
    alternativeApply: "Visit the bank directly and request KCC form from branch manager.",
    officialLinks: {
      apply: "https://pmkisan.gov.in/Documents/Kcc.pdf",
      checkStatus: "Through bank portal",
      officialWebsite: "https://pmkisan.gov.in"
    },
    helpline: "1800-115-526",
    processingTime: "14 Days",
    commonMistakes: ["Not linking Aadhaar with bank", "Applying at a non-home branch"],
    deadline: null,
    isActive: true,
    tags: ["loan", "credit", "farmer", "agriculture"],
    viewCount: 120000,
    lastUpdated: "2025-01-15T00:00:00Z"
  },
  {
    id: "agri-004",
    name: "PM Krishi Sinchayi Yojana",
    nameHindi: "पीएम कृषि सिंचाई योजना",
    nameGujarati: "પીએમ કૃષિ સિંચાઈ યોજના",
    department: "Department of Agriculture",
    ministry: "Ministry of Agriculture",
    category: "agriculture",
    state: "all",
    description: "Subsidy for micro-irrigation to achieve 'Per Drop More Crop'.",
    descriptionHindi: "सूक्ष्म सिंचाई के लिए सब्सिडी।",
    benefits: ["Up to 55% subsidy for small/marginal farmers", "45% for other farmers on micro-irrigation systems"],
    benefitAmount: "Up to 55% subsidy on equipment",
    eligibility: {
      minAge: 18,
      maxAge: null,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["farmer"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Must own agricultural land"]
    },
    documents: [
      { name: "Aadhaar", mandatory: true, purpose: "ID", howToGet: "UIDAI" },
      { name: "Land Details", mandatory: true, purpose: "Verify", howToGet: "Revenue Office" }
    ],
    howToApplySteps: [
      "Visit state agriculture department portal",
      "Select 'Apply for PMKSY'",
      "Upload quotations from registered drip irrigation vendors",
      "Submit application for physical verification"
    ],
    alternativeApply: "Apply via CSC or local Gram Panchayat office.",
    officialLinks: {
      apply: "https://pmksy.gov.in/",
      checkStatus: "https://pmksy.gov.in/",
      officialWebsite: "https://pmksy.gov.in/"
    },
    helpline: "1800-180-1551",
    processingTime: "30-60 Days",
    commonMistakes: ["Buying equipment before approval"],
    deadline: null,
    isActive: true,
    tags: ["irrigation", "agriculture", "water", "subsidy"],
    viewCount: 85000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "agri-005",
    name: "Soil Health Card",
    nameHindi: "मृदा स्वास्थ्य कार्ड",
    nameGujarati: "જમીન સ્વાસ્થ્ય કાર્ડ",
    department: "Agriculture",
    ministry: "Ministry of Agriculture",
    category: "agriculture",
    state: "all",
    description: "Assesses the nutrient status of every farm holding.",
    descriptionHindi: "खेत की पोषक स्थिति का आकलन।",
    benefits: ["Free soil testing", "Crop-wise fertilizer recommendations"],
    benefitAmount: "Free Testing Service",
    eligibility: {
      minAge: 18,
      maxAge: null,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["farmer"],
      states: ["all"],
      familySize: null,
      additionalCriteria: []
    },
    documents: [
      { name: "Aadhaar", mandatory: true, purpose: "ID", howToGet: "UIDAI" },
      { name: "Land Khata/Khasra", mandatory: true, purpose: "Land ID", howToGet: "Patwari" }
    ],
    howToApplySteps: [
      "Visit soilhealth.dac.gov.in",
      "Click Login/Register",
      "Submit soil sample to nearby lab or village camp"
    ],
    alternativeApply: "Submit sample to Mobile Soil Testing Vans.",
    officialLinks: {
      apply: "https://soilhealth.dac.gov.in/",
      checkStatus: "https://soilhealth.dac.gov.in/",
      officialWebsite: "https://soilhealth.dac.gov.in/"
    },
    helpline: "1800-180-1551",
    processingTime: "15 Days",
    commonMistakes: ["Taking soil sample incorrectly"],
    deadline: null,
    isActive: true,
    tags: ["soil", "testing", "agriculture"],
    viewCount: 60000,
    lastUpdated: "2025-02-10T00:00:00Z"
  },
  {
    id: "agri-006",
    name: "eNAM",
    nameHindi: "ई-नाम",
    nameGujarati: "ઈ-નામ",
    department: "Agriculture",
    ministry: "Ministry of Agriculture",
    category: "agriculture",
    state: "all",
    description: "Pan-India electronic trading portal networking APMC mandis.",
    descriptionHindi: "ऑनलाइन कृषि बाजार।",
    benefits: ["Transparent online trading", "Better price discovery", "Direct bank payment"],
    benefitAmount: "Market Driven Profit",
    eligibility: {
      minAge: 18,
      maxAge: null,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["farmer", "business"],
      states: ["all"],
      familySize: null,
      additionalCriteria: []
    },
    documents: [
      { name: "Bank Passbook", mandatory: true, purpose: "Payments", howToGet: "Bank" },
      { name: "Aadhaar", mandatory: true, purpose: "ID", howToGet: "UIDAI" }
    ],
    howToApplySteps: [
      "Visit enam.gov.in",
      "Register as Farmer",
      "Wait for APMC approval",
      "Login via app to start trading"
    ],
    alternativeApply: "Register at APMC gate.",
    officialLinks: {
      apply: "https://enam.gov.in/web/",
      checkStatus: "https://enam.gov.in/web/",
      officialWebsite: "https://enam.gov.in/web/"
    },
    helpline: "1800-270-0224",
    processingTime: "2 Days",
    commonMistakes: ["Bank account name mismatch"],
    deadline: null,
    isActive: true,
    tags: ["trading", "market", "apmc"],
    viewCount: 75000,
    lastUpdated: "2025-01-20T00:00:00Z"
  },
  {
    id: "agri-007",
    name: "PM Kisan Maandhan Yojana",
    nameHindi: "पीएम किसान मानधन योजना",
    nameGujarati: "પીએમ કિસાન માનધન યોજના",
    department: "Agriculture",
    ministry: "Ministry of Agriculture",
    category: "pension",
    state: "all",
    description: "Pension scheme for small and marginal farmers.",
    descriptionHindi: "किसानों के लिए पेंशन योजना।",
    benefits: ["₹3,000 monthly pension after age 60", "Government matches premium contribution"],
    benefitAmount: "₹3,000/month after 60",
    eligibility: {
      minAge: 18,
      maxAge: 40,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["farmer"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Less than 2 hectares land"]
    },
    documents: [
      { name: "Aadhaar", mandatory: true, purpose: "ID", howToGet: "UIDAI" },
      { name: "Bank Account", mandatory: true, purpose: "Premium debit", howToGet: "Bank" }
    ],
    howToApplySteps: [
      "Visit maandhan.in",
      "Self-enroll or visit CSC",
      "Select PMKMY",
      "Pay first premium via wallet/bank",
      "Generate Pension Card"
    ],
    alternativeApply: "Nearest CSC",
    officialLinks: {
      apply: "https://maandhan.in/",
      checkStatus: "https://maandhan.in/",
      officialWebsite: "https://maandhan.in/"
    },
    helpline: "1800-3000-3468",
    processingTime: "Instant",
    commonMistakes: ["Auto-debit failure due to low balance"],
    deadline: null,
    isActive: true,
    tags: ["pension", "farmer", "monthly"],
    viewCount: 110000,
    lastUpdated: "2025-01-05T00:00:00Z"
  },
  {
    id: "agri-008",
    name: "Paramparagat Krishi Vikas Yojana",
    nameHindi: "परम्परागत कृषि विकास योजना",
    nameGujarati: "પરંપરાગત કૃષિ વિકાસ યોજના",
    department: "Agriculture",
    ministry: "Ministry of Agriculture",
    category: "agriculture",
    state: "all",
    description: "Promotes organic farming through cluster approach.",
    descriptionHindi: "जैविक खेती को बढ़ावा।",
    benefits: ["₹50,000/hectare for 3 years", "Certification and marketing support"],
    benefitAmount: "₹50,000/ha for 3 years",
    eligibility: {
      minAge: 18,
      maxAge: null,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["farmer"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Must form cluster of 20 hectares"]
    },
    documents: [
      { name: "Aadhaar", mandatory: true, purpose: "ID", howToGet: "UIDAI" },
      { name: "Land details", mandatory: true, purpose: "Verification", howToGet: "Patwari" }
    ],
    howToApplySteps: [
      "Contact Block Agriculture Officer",
      "Form farmer group",
      "Register on PGS India portal"
    ],
    alternativeApply: "Through State Agriculture Dept.",
    officialLinks: {
      apply: "https://pgsindia-ncof.gov.in/",
      checkStatus: "https://pgsindia-ncof.gov.in/",
      officialWebsite: "https://pgsindia-ncof.gov.in/"
    },
    helpline: "1800-180-1551",
    processingTime: "Varies",
    commonMistakes: ["Using chemical fertilizers during period"],
    deadline: null,
    isActive: true,
    tags: ["organic", "farming", "subsidy"],
    viewCount: 45000,
    lastUpdated: "2025-01-10T00:00:00Z"
  },
  {
    id: "agri-009",
    name: "National Food Security Mission",
    nameHindi: "राष्ट्रीय खाद्य सुरक्षा मिशन",
    nameGujarati: "રાષ્ટ્રીય ખાદ્ય સુરક્ષા મિશન",
    department: "Agriculture",
    ministry: "Ministry of Agriculture",
    category: "agriculture",
    state: "all",
    description: "Increase production of rice, wheat, pulses, coarse cereals.",
    descriptionHindi: "खाद्यान्न उत्पादन बढ़ाना।",
    benefits: ["Subsidy on seeds, machinery, and micronutrients"],
    benefitAmount: "Varies (Seed & Machinery subsidy)",
    eligibility: {
      minAge: 18,
      maxAge: null,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["farmer"],
      states: ["all"],
      familySize: null,
      additionalCriteria: []
    },
    documents: [
      { name: "Aadhaar", mandatory: true, purpose: "ID", howToGet: "UIDAI" },
      { name: "Land Record", mandatory: true, purpose: "Eligibility", howToGet: "Revenue office" }
    ],
    howToApplySteps: [
      "Apply via state agriculture portals",
      "Select seeds/machinery",
      "Get approval and purchase",
      "Submit bill for DBT"
    ],
    alternativeApply: "Contact Gram Sevak",
    officialLinks: {
      apply: "https://nfsm.gov.in/",
      checkStatus: "https://nfsm.gov.in/",
      officialWebsite: "https://nfsm.gov.in/"
    },
    helpline: "1800-180-1551",
    processingTime: "30 Days",
    commonMistakes: ["Buying from unapproved vendors"],
    deadline: null,
    isActive: true,
    tags: ["seeds", "subsidy", "machinery"],
    viewCount: 30000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "agri-010",
    name: "Rashtriya Krishi Vikas Yojana",
    nameHindi: "राष्ट्रीय कृषि विकास योजना",
    nameGujarati: "રાષ્ટ્રીય કૃષિ વિકાસ યોજના",
    department: "Agriculture",
    ministry: "Ministry of Agriculture",
    category: "agriculture",
    state: "all",
    description: "Infrastructure and assets development for agriculture.",
    descriptionHindi: "कृषि अवसंरचना विकास।",
    benefits: ["Grants for agriprenuership, custom hiring centers, infrastructure"],
    benefitAmount: "Up to ₹5 lakh for Startups",
    eligibility: {
      minAge: 18,
      maxAge: null,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["farmer", "business"],
      states: ["all"],
      familySize: null,
      additionalCriteria: []
    },
    documents: [
      { name: "Project Report", mandatory: true, purpose: "Evaluation", howToGet: "CA/Self" },
      { name: "Aadhaar", mandatory: true, purpose: "ID", howToGet: "UIDAI" }
    ],
    howToApplySteps: [
      "Submit project proposal to State Agriculture Nodal Agency",
      "Approval by SLSC",
      "Fund release in installments"
    ],
    alternativeApply: "Direct via state portal",
    officialLinks: {
      apply: "https://rkvy.nic.in/",
      checkStatus: "https://rkvy.nic.in/",
      officialWebsite: "https://rkvy.nic.in/"
    },
    helpline: "1800-180-1551",
    processingTime: "60-90 Days",
    commonMistakes: ["Incomplete project reports"],
    deadline: null,
    isActive: true,
    tags: ["infrastructure", "startup", "agri-business"],
    viewCount: 20000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "agri-011",
    name: "Sub-Mission on Agricultural Mechanisation",
    nameHindi: "कृषि यंत्रीकरण उप-मिशन",
    nameGujarati: "કૃષિ યાંત્રીકરણ ઉપ-મિશન",
    department: "Agriculture",
    ministry: "Ministry of Agriculture",
    category: "agriculture",
    state: "all",
    description: "Promoting farm mechanization for small/marginal farmers.",
    descriptionHindi: "छोटे किसानों के लिए कृषि मशीनीकरण।",
    benefits: ["Up to 80% subsidy for cooperative societies", "Up to 50% for individual farmers on tractors/tools"],
    benefitAmount: "Up to 80% Subsidy",
    eligibility: {
      minAge: 18,
      maxAge: null,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["farmer"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Valid driving license for tractor subsidy"]
    },
    documents: [
      { name: "Aadhaar", mandatory: true, purpose: "ID", howToGet: "UIDAI" },
      { name: "Quotation", mandatory: true, purpose: "Cost estimate", howToGet: "Dealer" }
    ],
    howToApplySteps: [
      "Register on agrimachinery.nic.in",
      "Select implement and dealer",
      "Upload documents",
      "Pay farmer share to dealer after approval"
    ],
    alternativeApply: "Through State portals",
    officialLinks: {
      apply: "https://agrimachinery.nic.in/",
      checkStatus: "https://agrimachinery.nic.in/",
      officialWebsite: "https://agrimachinery.nic.in/"
    },
    helpline: "1800-180-1551",
    processingTime: "45 Days",
    commonMistakes: ["Purchasing before subsidy approval letter"],
    deadline: null,
    isActive: true,
    tags: ["tractor", "machinery", "subsidy"],
    viewCount: 180000,
    lastUpdated: "2025-02-15T00:00:00Z"
  },
  {
    id: "agri-012",
    name: "Micro Irrigation Fund",
    nameHindi: "सूक्ष्म सिंचाई कोष",
    nameGujarati: "માઇક્રો ઇરિગેશન ફંડ",
    department: "Agriculture",
    ministry: "Ministry of Agriculture",
    category: "agriculture",
    state: "all",
    description: "Additional interest subvention to states to provide extra subsidy for micro irrigation.",
    descriptionHindi: "सूक्ष्म सिंचाई के लिए अतिरिक्त सब्सिडी।",
    benefits: ["Low cost loans via NABARD", "Reduces farmer contribution for drip/sprinkler"],
    benefitAmount: "State specific extra subsidy",
    eligibility: {
      minAge: 18,
      maxAge: null,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["farmer"],
      states: ["all"],
      familySize: null,
      additionalCriteria: []
    },
    documents: [
      { name: "Aadhaar", mandatory: true, purpose: "ID", howToGet: "UIDAI" },
      { name: "Land record", mandatory: true, purpose: "Verify", howToGet: "Revenue office" }
    ],
    howToApplySteps: [
      "Apply along with PMKSY application via state horticulture dept",
      "Extra subsidy is automatically applied"
    ],
    alternativeApply: "Contact NABARD district office",
    officialLinks: {
      apply: "https://pmksy.gov.in/",
      checkStatus: "https://pmksy.gov.in/",
      officialWebsite: "https://pmksy.gov.in/"
    },
    helpline: "1800-180-1551",
    processingTime: "45 Days",
    commonMistakes: ["Not linking with PMKSY application"],
    deadline: null,
    isActive: true,
    tags: ["drip", "sprinkler", "water", "irrigation"],
    viewCount: 40000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },

  // HEALTH (13-22)
  {
    id: "health-013",
    name: "Ayushman Bharat PMJAY",
    nameHindi: "आयुष्मान भारत पीएम-जय",
    nameGujarati: "આયુષ્માન ભારત પીએમ-જય",
    department: "National Health Authority",
    ministry: "Ministry of Health",
    category: "health",
    state: "all",
    description: "Health insurance scheme offering free treatment up to ₹5 lakh per family per year in empaneled hospitals.",
    descriptionHindi: "पंजीकृत अस्पतालों में प्रति परिवार प्रति वर्ष 5 लाख रुपये तक मुफ्त इलाज।",
    benefits: ["Cashless treatment", "Covers pre and post-hospitalization expenses", "No restriction on family size/age"],
    benefitAmount: "₹5 lakh/year",
    eligibility: {
      minAge: null,
      maxAge: null,
      gender: "all",
      incomeLimit: null, // Based on SECC 2011/Ration card
      caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Must be in SECC 2011 list or hold an eligible Ration Card"]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "UIDAI" },
      { name: "Ration Card", mandatory: true, purpose: "Family Link", howToGet: "Food Dept" }
    ],
    howToApplySteps: [
      "Download Ayushman App or visit beneficiary.nha.gov.in",
      "Login via Mobile OTP",
      "Search family by Ration Card/Aadhaar",
      "Complete eKYC via OTP/Face Auth",
      "Download Ayushman Card immediately"
    ],
    alternativeApply: "Visit any empaneled hospital or nearest CSC.",
    officialLinks: {
      apply: "https://beneficiary.nha.gov.in/",
      checkStatus: "https://beneficiary.nha.gov.in/",
      officialWebsite: "https://pmjay.gov.in/",
      mobileApp: "https://play.google.com/store/apps/details?id=com.exd.pmjay"
    },
    helpline: "14555",
    processingTime: "Instant to 2 Days",
    commonMistakes: ["Ration card not linked to Aadhaar", "Name spelling mismatch"],
    deadline: null,
    isActive: true,
    tags: ["health", "insurance", "hospital", "pmjay", "ayushman"],
    viewCount: 1500000,
    lastUpdated: "2025-02-20T00:00:00Z"
  },
  {
    id: "health-014",
    name: "Janani Suraksha Yojana",
    nameHindi: "जननी सुरक्षा योजना",
    nameGujarati: "જનની સુરક્ષા યોજના",
    department: "National Health Mission",
    ministry: "Ministry of Health",
    category: "health",
    state: "all",
    description: "Safe motherhood intervention promoting institutional delivery.",
    descriptionHindi: "संस्थागत प्रसव को बढ़ावा देने वाली सुरक्षित मातृत्व योजना।",
    benefits: ["₹1,400 for rural institutional delivery", "₹1,000 for urban institutional delivery", "Free transport to hospital"],
    benefitAmount: "Up to ₹1,400",
    eligibility: {
      minAge: 19,
      maxAge: 45,
      gender: "female",
      incomeLimit: null, // BPL focus
      caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: 2, // Upto 2 live births
      additionalCriteria: ["Must deliver in govt or accredited private hospital", "BPL card holder"]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "ID", howToGet: "UIDAI" },
      { name: "BPL Card", mandatory: true, purpose: "Eligibility", howToGet: "Food Dept" },
      { name: "MCP Card", mandatory: true, purpose: "Pregnancy registration", howToGet: "ASHA Worker/PHC" }
    ],
    howToApplySteps: [
      "Register pregnancy with ASHA worker",
      "Get MCP (Mother & Child Protection) card",
      "Deliver baby at registered hospital",
      "Money transferred to bank via DBT post-delivery"
    ],
    alternativeApply: "Visit nearest Primary Health Centre (PHC).",
    officialLinks: {
      apply: "https://nhm.gov.in/index1.php?lang=1&level=3&sublinkid=841&lid=309",
      checkStatus: "Via ASHA Worker",
      officialWebsite: "https://nhm.gov.in/"
    },
    helpline: "104",
    processingTime: "Post Delivery (1-2 weeks)",
    commonMistakes: ["Home delivery (not eligible)", "Bank account not active"],
    deadline: null,
    isActive: true,
    tags: ["maternity", "delivery", "pregnant", "women"],
    viewCount: 320000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "health-015",
    name: "Pradhan Mantri Matru Vandana Yojana",
    nameHindi: "प्रधानमंत्री मातृ वंदना योजना",
    nameGujarati: "પ્રધાનમંત્રી માતૃ વંદના યોજના",
    department: "Women and Child Development",
    ministry: "WCD",
    category: "health",
    state: "all",
    description: "Maternity benefit program for first live birth.",
    descriptionHindi: "प्रथम जीवित जन्म के लिए मातृत्व लाभ।",
    benefits: ["₹5,000 in 3 installments for first child", "₹6,000 for second child if girl"],
    benefitAmount: "₹5,000 - ₹6,000",
    eligibility: {
      minAge: 19,
      maxAge: 45,
      gender: "female",
      incomeLimit: 800000,
      caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Not employed in Central/State Govt/PSUs"]
    },
    documents: [
      { name: "Aadhaar", mandatory: true, purpose: "ID", howToGet: "UIDAI" },
      { name: "MCP Card", mandatory: true, purpose: "Medical proof", howToGet: "ASHA" },
      { name: "Bank Passbook", mandatory: true, purpose: "DBT", howToGet: "Bank" }
    ],
    howToApplySteps: [
      "Visit pmmvy.wcd.gov.in",
      "Click Citizen Login",
      "Fill online form and upload MCP card",
      "Submit for Anganwadi/ASHA verification"
    ],
    alternativeApply: "Submit Form 1A/1B/1C offline at Anganwadi Centre.",
    officialLinks: {
      apply: "https://pmmvy.wcd.gov.in/",
      checkStatus: "https://pmmvy.wcd.gov.in/",
      officialWebsite: "https://pmmvy.wcd.gov.in/"
    },
    helpline: "104",
    processingTime: "30 Days per installment",
    commonMistakes: ["Applying after 270 days of delivery"],
    deadline: null,
    isActive: true,
    tags: ["maternity", "pregnant", "women"],
    viewCount: 450000,
    lastUpdated: "2025-02-15T00:00:00Z"
  },
  {
    id: "health-016",
    name: "Ayushman Arogya Mandir",
    nameHindi: "आयुष्मान आरोग्य मंदिर",
    nameGujarati: "આયુષ્માન આરોગ્ય મંદિર",
    department: "National Health Mission",
    ministry: "Ministry of Health",
    category: "health",
    state: "all",
    description: "Primary health care centers providing comprehensive care including maternal, child health, and NCDs.",
    descriptionHindi: "व्यापक प्राथमिक स्वास्थ्य देखभाल।",
    benefits: ["Free diagnosis and medicines", "Free NCD screening (Diabetes, BP, Cancers)", "Tele-consultation via eSanjeevani"],
    benefitAmount: "Free Healthcare Services",
    eligibility: {
      minAge: null,
      maxAge: null,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: []
    },
    documents: [
      { name: "Aadhaar", mandatory: false, purpose: "ID Record", howToGet: "UIDAI" }
    ],
    howToApplySteps: [
      "Walk into the nearest Ayushman Arogya Mandir (formerly HWCs)",
      "Register at the counter",
      "Consult the CHO (Community Health Officer) or doctor"
    ],
    alternativeApply: "Book appointment via eSanjeevani app.",
    officialLinks: {
      apply: "Walk-in",
      checkStatus: "N/A",
      officialWebsite: "https://ab-hwc.nhp.gov.in/"
    },
    helpline: "104",
    processingTime: "Immediate",
    commonMistakes: ["N/A"],
    deadline: null,
    isActive: true,
    tags: ["clinic", "hospital", "medicines", "free"],
    viewCount: 800000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "health-017",
    name: "Mission Indradhanush",
    nameHindi: "मिशन इन्द्रधनुष",
    nameGujarati: "મિશન ઇન્દ્રધનુષ",
    department: "Ministry of Health",
    ministry: "Ministry of Health",
    category: "health",
    state: "all",
    description: "Vaccination program aiming to immunize all children under 2 and pregnant women.",
    descriptionHindi: "सभी बच्चों और गर्भवती महिलाओं का टीकाकरण।",
    benefits: ["Free vaccination against 12 vaccine-preventable diseases"],
    benefitAmount: "Free Vaccines",
    eligibility: {
      minAge: 0,
      maxAge: 2, // and pregnant women
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Unvaccinated or partially vaccinated children and pregnant women"]
    },
    documents: [
      { name: "Birth Certificate", mandatory: false, purpose: "Age Proof", howToGet: "Panchayat/Hospital" },
      { name: "MCP Card", mandatory: true, purpose: "Tracking", howToGet: "ASHA" }
    ],
    howToApplySteps: [
      "Visit nearest Govt Hospital/PHC on Village Health Nutrition Day",
      "Carry MCP card for tracking",
      "Get vaccination shots as per schedule"
    ],
    alternativeApply: "Via ASHA workers home visits.",
    officialLinks: {
      apply: "N/A - Walk-in",
      checkStatus: "On U-WIN Portal",
      officialWebsite: "https://nhm.gov.in/"
    },
    helpline: "104",
    processingTime: "Immediate",
    commonMistakes: ["Missing schedule dates"],
    deadline: null,
    isActive: true,
    tags: ["vaccine", "children", "pregnant"],
    viewCount: 120000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "health-018",
    name: "Rashtriya Bal Swasthya Karyakram",
    nameHindi: "राष्ट्रीय बाल स्वास्थ्य कार्यक्रम",
    nameGujarati: "રાષ્ટ્રીય બાલ સ્વાસ્થ્ય કાર્યક્રમ",
    department: "National Health Mission",
    ministry: "Ministry of Health",
    category: "health",
    state: "all",
    description: "Early identification and early intervention for children from birth to 18 years.",
    descriptionHindi: "जन्म से 18 वर्ष तक के बच्चों के लिए शीघ्र पहचान और उपचार।",
    benefits: ["Free screening for 4Ds (Defects, Diseases, Deficiencies, Developmental delays)", "Free surgeries at District Hospitals/Empaneled hospitals"],
    benefitAmount: "Free Surgery/Treatment",
    eligibility: {
      minAge: 0,
      maxAge: 18,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Must be enrolled in Govt schools/Anganwadis"]
    },
    documents: [
      { name: "Aadhaar", mandatory: true, purpose: "ID", howToGet: "UIDAI" },
      { name: "School ID", mandatory: false, purpose: "Age Proof", howToGet: "School" }
    ],
    howToApplySteps: [
      "Mobile health teams visit Anganwadis/Schools for screening",
      "If defect found, child is referred to District Early Intervention Centre (DEIC)",
      "Treatment/surgery done cashless"
    ],
    alternativeApply: "Direct visit to DEIC at District Hospital.",
    officialLinks: {
      apply: "School/Anganwadi level",
      checkStatus: "N/A",
      officialWebsite: "https://rbsk.gov.in/"
    },
    helpline: "104",
    processingTime: "Varies",
    commonMistakes: ["Missing school on screening day"],
    deadline: null,
    isActive: true,
    tags: ["children", "surgery", "health", "school"],
    viewCount: 85000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "health-019",
    name: "PM-ABHIM",
    nameHindi: "पीएम-आयुष्मान भारत हेल्थ इन्फ्रास्ट्रक्चर मिशन",
    nameGujarati: "પીએમ-અભિમ",
    department: "Ministry of Health",
    ministry: "Ministry of Health",
    category: "health",
    state: "all",
    description: "Developing health infrastructure to handle pandemics and critical care.",
    descriptionHindi: "स्वास्थ्य बुनियादी ढांचे का विकास।",
    benefits: ["New critical care blocks in districts", "Integrated public health labs"],
    benefitAmount: "Infrastructure",
    eligibility: {
      minAge: null,
      maxAge: null,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: []
    },
    documents: [],
    howToApplySteps: [
      "This is an infrastructure scheme. Citizens benefit by accessing improved facilities at District Hospitals."
    ],
    alternativeApply: "N/A",
    officialLinks: {
      apply: "N/A",
      checkStatus: "N/A",
      officialWebsite: "https://pmabhim.mohfw.gov.in/"
    },
    helpline: "104",
    processingTime: "N/A",
    commonMistakes: [],
    deadline: null,
    isActive: true,
    tags: ["hospital", "infrastructure", "public health"],
    viewCount: 20000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "health-020",
    name: "National Ambulance Services",
    nameHindi: "राष्ट्रीय एम्बुलेंस सेवा",
    nameGujarati: "રાષ્ટ્રીય એમ્બ્યુલન્સ સેવા",
    department: "National Health Mission",
    ministry: "Ministry of Health",
    category: "health",
    state: "all",
    description: "Dial 108/102 for free emergency medical transport.",
    descriptionHindi: "मुफ्त आपातकालीन चिकित्सा परिवहन।",
    benefits: ["Free ambulance transport for emergencies, pregnant women, and infants"],
    benefitAmount: "Free Transport",
    eligibility: {
      minAge: null,
      maxAge: null,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: []
    },
    documents: [],
    howToApplySteps: [
      "Dial 108 for medical, police, or fire emergencies",
      "Dial 102 for pregnant women and child transport to hospital"
    ],
    alternativeApply: "N/A",
    officialLinks: {
      apply: "Call 108",
      checkStatus: "N/A",
      officialWebsite: "https://nhm.gov.in/"
    },
    helpline: "108 / 102",
    processingTime: "Immediate",
    commonMistakes: ["Calling 102 for non-maternity emergencies (use 108 instead)"],
    deadline: null,
    isActive: true,
    tags: ["emergency", "ambulance", "health"],
    viewCount: 500000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "health-021",
    name: "PM Jan Aushadhi Pariyojana",
    nameHindi: "पीएम जन औषधि परियोजना",
    nameGujarati: "પીએમ જન ઔષધિ યોજના",
    department: "Pharmaceuticals",
    ministry: "Chemicals & Fertilizers",
    category: "health",
    state: "all",
    description: "Quality generic medicines at affordable prices.",
    descriptionHindi: "सस्ती कीमतों पर गुणवत्तापूर्ण जेनेरिक दवाएं।",
    benefits: ["Medicines 50% to 90% cheaper than branded drugs", "Available via Jan Aushadhi Kendras"],
    benefitAmount: "50-90% Discount on Meds",
    eligibility: {
      minAge: null,
      maxAge: null,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: []
    },
    documents: [
      { name: "Doctor's Prescription", mandatory: true, purpose: "For Rx drugs", howToGet: "Clinic" }
    ],
    howToApplySteps: [
      "Download Jan Aushadhi Sugam App to find nearest store",
      "Visit the store with your prescription",
      "Purchase generic medicines directly"
    ],
    alternativeApply: "Walk into any Kendra without app.",
    officialLinks: {
      apply: "N/A - Retail",
      checkStatus: "N/A",
      officialWebsite: "http://janaushadhi.gov.in/",
      mobileApp: "https://play.google.com/store/apps/details?id=com.janaushadhi.sugam"
    },
    helpline: "1800-180-8080",
    processingTime: "Immediate",
    commonMistakes: ["Insisting on specific brand names instead of salt names"],
    deadline: null,
    isActive: true,
    tags: ["medicines", "pharmacy", "generic", "discount"],
    viewCount: 900000,
    lastUpdated: "2025-02-01T00:00:00Z"
  },
  {
    id: "health-022",
    name: "Central Government Health Scheme",
    nameHindi: "केन्द्र सरकार स्वास्थ्य योजना",
    nameGujarati: "કેન્દ્ર સરકાર સ્વાસ્થ્ય યોજના (CGHS)",
    department: "CGHS",
    ministry: "Ministry of Health",
    category: "health",
    state: "all",
    description: "Comprehensive medical care to Central Govt employees and pensioners.",
    descriptionHindi: "केन्द्रीय कर्मचारियों और पेंशनभोगियों के लिए स्वास्थ्य सेवा।",
    benefits: ["OPD consultation", "Supply of medicines", "Cashless indoor treatment at empaneled hospitals"],
    benefitAmount: "Comprehensive Medical Cover",
    eligibility: {
      minAge: null,
      maxAge: null,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["salaried", "retired"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Must be Central Govt employee/pensioner"]
    },
    documents: [
      { name: "Employee ID / Pension PPO", mandatory: true, purpose: "Eligibility", howToGet: "Employer" },
      { name: "Photos & Aadhaar", mandatory: true, purpose: "Card making", howToGet: "Self/UIDAI" }
    ],
    howToApplySteps: [
      "Visit cghs.nic.in",
      "Apply online for Plastic Card",
      "Submit printout via head of office/department to Additional Director CGHS",
      "Collect card and book appointments via CGHS portal/app"
    ],
    alternativeApply: "Submit offline form through current employer.",
    officialLinks: {
      apply: "https://cghs.nic.in/",
      checkStatus: "https://cghs.nic.in/",
      officialWebsite: "https://cghs.nic.in/",
      mobileApp: "https://play.google.com/store/apps/details?id=nic.cghs.mycghs"
    },
    helpline: "1800-208-8900",
    processingTime: "30 Days",
    commonMistakes: ["Not adding eligible dependents properly"],
    deadline: null,
    isActive: true,
    tags: ["government employee", "cghs", "health"],
    viewCount: 200000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  
  // EDUCATION (23-25)
  {
    id: "edu-023",
    name: "National Scholarship Portal",
    nameHindi: "राष्ट्रीय छात्रवृत्ति पोर्टल",
    nameGujarati: "રાષ્ટ્રીય શિષ્યવૃત્તિ પોર્ટલ",
    department: "Multiple",
    ministry: "Multiple Ministries",
    category: "education",
    state: "all",
    description: "One-stop portal for all government scholarships.",
    descriptionHindi: "सभी सरकारी छात्रवृत्तियों के लिए एक पोर्टल।",
    benefits: ["Pre-matric, Post-matric, and Higher education scholarships", "Direct Bank Transfer"],
    benefitAmount: "Varies by scheme (₹1K - ₹50K)",
    eligibility: {
      minAge: 5,
      maxAge: 30,
      gender: "all",
      incomeLimit: 250000,
      caste: ["sc", "st", "obc", "minority"],
      occupation: ["student"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Minimum 50% marks in previous exam"]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "ID", howToGet: "UIDAI" },
      { name: "Income Certificate", mandatory: true, purpose: "Income limit proof", howToGet: "Tehsildar" },
      { name: "Fee Receipt & Marksheet", mandatory: true, purpose: "Academic proof", howToGet: "School/College" }
    ],
    howToApplySteps: [
      "Visit scholarships.gov.in",
      "Complete OTR (One Time Registration) using Aadhaar and Face Auth",
      "Login and fill application form",
      "Upload documents and submit to institute for verification"
    ],
    alternativeApply: "N/A - Online only",
    officialLinks: {
      apply: "https://scholarships.gov.in/",
      checkStatus: "https://scholarships.gov.in/",
      officialWebsite: "https://scholarships.gov.in/"
    },
    helpline: "0120-6619540",
    processingTime: "3-6 Months",
    commonMistakes: ["Institute verification pending", "Bank account limit exceeded for DBT"],
    deadline: "Oct-Nov (varies yearly)",
    isActive: true,
    tags: ["scholarship", "student", "education", "nsp"],
    viewCount: 2500000,
    lastUpdated: "2025-02-01T00:00:00Z"
  },
  {
    id: "edu-024",
    name: "PM Scholarship Scheme",
    nameHindi: "पीएम छात्रवृत्ति योजना",
    nameGujarati: "પીએમ શિષ્યવૃત્તિ યોજના",
    department: "Kendriya Sainik Board",
    ministry: "Ministry of Defence / Home Affairs",
    category: "education",
    state: "all",
    description: "Scholarship for dependent wards of Ex-Servicemen and Ex-Coast Guard personnel.",
    descriptionHindi: "पूर्व सैनिकों के आश्रितों के लिए छात्रवृत्ति।",
    benefits: ["₹36,000/year for Girls", "₹30,000/year for Boys"],
    benefitAmount: "₹30,000 - ₹36,000/year",
    eligibility: {
      minAge: 16,
      maxAge: 25,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["student"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Ward of Ex-Serviceman", "Pursuing professional degree", "60% in 12th/Diploma"]
    },
    documents: [
      { name: "Ex-Serviceman/Discharge Book", mandatory: true, purpose: "Eligibility", howToGet: "Zila Sainik Board" },
      { name: "Bonafide Certificate", mandatory: true, purpose: "College Proof", howToGet: "College" }
    ],
    howToApplySteps: [
      "Visit ksb.gov.in",
      "Register and Login",
      "Select PMSS, fill part 1 and part 2",
      "Upload documents and submit to Zila Sainik Board online"
    ],
    alternativeApply: "Apply via NSP Portal for CAPF wards.",
    officialLinks: {
      apply: "http://ksb.gov.in/",
      checkStatus: "http://ksb.gov.in/",
      officialWebsite: "http://ksb.gov.in/"
    },
    helpline: "011-26715250",
    processingTime: "6 Months",
    commonMistakes: ["Applying for non-professional courses (BA/BSc not eligible)"],
    deadline: "November",
    isActive: true,
    tags: ["scholarship", "defence", "student"],
    viewCount: 400000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "edu-025",
    name: "PM Poshan (Mid Day Meal)",
    nameHindi: "पीएम पोषण (मिड डे मील)",
    nameGujarati: "પીએમ પોષણ",
    department: "School Education",
    ministry: "Ministry of Education",
    category: "education",
    state: "all",
    description: "One hot cooked meal in Govt and Govt-aided schools.",
    descriptionHindi: "सरकारी स्कूलों में एक गर्म पका हुआ भोजन।",
    benefits: ["Free nutritious lunch every school day", "Improves enrollment and health"],
    benefitAmount: "Free Hot Meal",
    eligibility: {
      minAge: 5,
      maxAge: 14,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["student"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Studying in Class 1 to 8 in Govt schools"]
    },
    documents: [],
    howToApplySteps: [
      "No formal application required",
      "Simply enroll child in a Govt/Govt-aided school",
      "Meal is provided automatically"
    ],
    alternativeApply: "N/A",
    officialLinks: {
      apply: "N/A",
      checkStatus: "N/A",
      officialWebsite: "https://pmposhan.education.gov.in/"
    },
    helpline: "State specific toll-free",
    processingTime: "Immediate",
    commonMistakes: [],
    deadline: null,
    isActive: true,
    tags: ["food", "school", "children", "nutrition"],
    viewCount: 800000,
    lastUpdated: "2025-01-01T00:00:00Z"
  }
];
