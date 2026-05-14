import { Scheme } from "@/types";

export const schemesPart11: Scheme[] = [
  // AGRICULTURE (Continued)
  {
    id: "kusum-solar-pump",
    name: "PM-KUSUM Solar Pump Scheme",
    nameHindi: "पीएम कुसुम सोलर पंप योजना",
    nameGujarati: "PM-KUSUM સોલર પંપ યોજના",
    department: "Ministry of New and Renewable Energy",
    ministry: "MNRE",
    category: "agriculture",
    state: "all",
    description: "Provides 60% subsidy to farmers for installing solar irrigation pumps (2HP to 10HP) to reduce dependence on diesel/electric pumps.",
    descriptionHindi: "किसानों को सौर सिंचाई पंप (2HP से 10HP) स्थापित करने के लिए 60% सब्सिडी प्रदान करता है ताकि डीजल/बिजली पंपों पर निर्भरता कम हो सके।",
    benefitAmount: "60% subsidy on solar pump (up to ₹2.5 lakh)",
    benefits: [
      "60% subsidy on solar irrigation pumps (2HP to 10HP)",
      "30% loan from bank, farmer pays only 10%",
      "No electricity bills for irrigation forever",
      "Excess power sold to DISCOM — extra income",
      "Available in 2HP, 3HP, 5HP, 7.5HP, 10HP variants"
    ],
    eligibility: {
      minAge: 18, maxAge: null, gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["farmer"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "Must be a farmer with irrigable land",
        "No existing electric pump connection for same land",
        "Land must have water source (well, pond, river, borewell)"
      ]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "Aadhaar center or post office" },
      { name: "7/12 Land Record (Satbara)", mandatory: true, purpose: "Prove land ownership and water source", howToGet: "Download from mahabhumi.gov.in or get from Talati office" },
      { name: "Bank Passbook", mandatory: true, purpose: "Loan and subsidy processing", howToGet: "Any nationalized bank" },
      { name: "Photograph of Water Source", mandatory: true, purpose: "Prove irrigation water availability", howToGet: "Take photo of your well/pond/borewell" },
      { name: "Caste Certificate", mandatory: false, purpose: "Additional state subsidy if SC/ST", howToGet: "Mamlatdar office" }
    ],
    howToApplySteps: [
      "Step 1: Visit mnre.gov.in or your state DISCOM website for PM-KUSUM",
      "Step 2: Click 'Apply for Component B — Individual Pump' (off-grid solar pumps)",
      "Step 3: Register with Aadhaar and mobile number",
      "Step 4: Fill land details, water source details, and pump capacity required",
      "Step 5: Upload 7/12 land record and water source photo",
      "Step 6: Select empaneled vendor from portal list",
      "Step 7: Deposit 10% farmer share to vendor",
      "Step 8: Vendor installs pump, uploads completion certificate",
      "Step 9: DISCOM inspects, 60% subsidy released directly to vendor",
      "Step 10: Bank loan of 30% automatically processed through NABARD"
    ],
    alternativeApply: "Visit your nearest Agriculture Department office or DISCOM office for offline application",
    officialLinks: {
      apply: "https://mnre.gov.in/solar-energy/pm-kusum",
      checkStatus: "https://mnre.gov.in/solar-energy/pm-kusum",
      officialWebsite: "https://mnre.gov.in"
    },
    helpline: "1800-180-3333",
    processingTime: "60-90 days from application",
    commonMistakes: [
      "Applying without having a water source on land — application rejected",
      "Not selecting MNRE-empaneled vendor — subsidy not released",
      "Choosing wrong pump capacity — get agriculture officer advice first"
    ],
    deadline: null, isActive: true,
    tags: ["solar", "farmer", "irrigation", "pump", "subsidy", "electricity free"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },
  {
    id: "fpo-formation-promotion",
    name: "Formation and Promotion of 10,000 FPOs",
    nameHindi: "10,000 किसान उत्पादक संगठन योजना",
    nameGujarati: "10,000 FPO રચના અને પ્રોત્સાહન",
    department: "Ministry of Agriculture & Farmers Welfare",
    ministry: "MoAFW",
    category: "agriculture",
    state: "all",
    description: "Central sector scheme to form and promote 10,000 new Farmer Producer Organizations (FPOs) to provide economies of scale.",
    descriptionHindi: "किसानों को पैमाने की अर्थव्यवस्था प्रदान करने के लिए 10,000 नए किसान उत्पादक संगठन (एफपीओ) बनाने और बढ़ावा देने के लिए केंद्रीय क्षेत्र की योजना।",
    benefitAmount: "₹18 lakh equity grant per FPO + ₹25 lakh credit guarantee",
    benefits: [
      "₹18 lakh equity grant over 3 years for each FPO",
      "₹25 lakh credit guarantee facility from NABARD",
      "Professional handholding by Cluster Based Business Organizations (CBBO)",
      "Market linkage support and processing infrastructure",
      "Tax benefits for FPO members"
    ],
    eligibility: {
      minAge: 18, maxAge: null, gender: "all",
      incomeLimit: null, caste: ["all"],
      occupation: ["farmer", "agricultural_worker"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "Minimum 300 farmers required to form an FPO",
        "Must register as Producer Company under Companies Act",
        "Apply through NABARD, SFAC, or state agriculture department"
      ]
    },
    documents: [
      { name: "FPO Registration Certificate", mandatory: true, purpose: "Prove legal entity", howToGet: "Register at mca.gov.in as Producer Company" },
      { name: "List of 300+ Member Farmers", mandatory: true, purpose: "Prove minimum membership", howToGet: "Maintain member register with Aadhaar of all members" },
      { name: "Bank Account of FPO", mandatory: true, purpose: "Grant transfer", howToGet: "Open current account in FPO name at any bank" },
      { name: "Land records of members", mandatory: false, purpose: "Show agricultural base", howToGet: "Collect 7/12 copies from all members" }
    ],
    howToApplySteps: [
      "Step 1: Organize minimum 300 farmers willing to form FPO",
      "Step 2: Register as Producer Company at mca.gov.in (₹5,000 registration fee)",
      "Step 3: Contact nearest NABARD/SFAC/NCDC office for CBBO support",
      "Step 4: CBBO guides registration and grant application process",
      "Step 5: Apply for equity grant through designated portal",
      "Step 6: Grant released in 3 instalments over 3 years based on performance"
    ],
    alternativeApply: "Contact NABARD district office or State Agriculture Department for guidance",
    officialLinks: {
      apply: "https://sfacindia.com/FPO.aspx",
      checkStatus: "https://sfacindia.com",
      officialWebsite: "https://sfacindia.com"
    },
    helpline: "011-26534074 (SFAC)",
    processingTime: "3-6 months for initial approval",
    commonMistakes: [
      "Not having minimum 300 members — application rejected",
      "Not registering as Producer Company — other company types not eligible"
    ],
    deadline: null, isActive: true,
    tags: ["FPO", "farmer", "cooperative", "NABARD", "group", "collective"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },
  {
    id: "rashtriya-gokul-mission",
    name: "Rashtriya Gokul Mission",
    nameHindi: "राष्ट्रीय गोकुल मिशन",
    nameGujarati: "રાષ્ટ્રીય ગોકુળ મિશન",
    department: "Department of Animal Husbandry & Dairying",
    ministry: "Ministry of Fisheries, Animal Husbandry & Dairying",
    category: "agriculture",
    state: "all",
    description: "Focuses on genetic upgradation of bovine population and development of indigenous breeds for increased milk production.",
    descriptionHindi: "दूध उत्पादन बढ़ाने के लिए गोजातीय आबादी के आनुवंशिक उन्नयन और स्वदेशी नस्लों के विकास पर ध्यान केंद्रित करता है।",
    benefitAmount: "Free bull semen doses + subsidized artificial insemination",
    benefits: [
      "Free high-quality bull semen doses for artificial insemination",
      "Subsidized artificial insemination at ₹10-50 per service",
      "Improved breed cattle — higher milk yield",
      "Support for Gokul Grams (indigenous breed conservation centers)",
      "Free veterinary health camps for cattle"
    ],
    eligibility: {
      minAge: 18, maxAge: null, gender: "all",
      incomeLimit: null, caste: ["all"],
      occupation: ["farmer"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Must own at least one cow or buffalo", "Register with nearest animal husbandry department"]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "Aadhaar center" },
      { name: "Livestock ownership proof", mandatory: true, purpose: "Prove cattle ownership", howToGet: "Certificate from local panchayat or animal husbandry dept" }
    ],
    howToApplySteps: [
      "Step 1: Visit nearest veterinary hospital or animal husbandry department",
      "Step 2: Register your cattle (cow/buffalo) with department",
      "Step 3: Request artificial insemination service",
      "Step 4: Pay nominal fee (₹10-50)",
      "Step 5: Trained veterinary worker visits your farm for AI service"
    ],
    alternativeApply: "Call 1962 (Kisan Call Center) for nearest service center",
    officialLinks: {
      apply: "https://dahd.gov.in/schemes/programmes/rashtriya-gokul-mission",
      checkStatus: "https://dahd.gov.in",
      officialWebsite: "https://dahd.gov.in"
    },
    helpline: "1962 (Kisan Call Center)",
    processingTime: "Same day — walk-in service",
    commonMistakes: ["Not registering cattle before requesting AI service"],
    deadline: null, isActive: true,
    tags: ["dairy", "cattle", "cow", "buffalo", "livestock", "milk", "animal husbandry"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },
  {
    id: "blue-revolution-fisheries",
    name: "PM Matsya Sampada Yojana (Blue Revolution)",
    nameHindi: "प्रधानमंत्री मत्स्य सम्पदा योजना",
    nameGujarati: "PM મત્સ્ય સંપદા યોજના",
    department: "Department of Fisheries",
    ministry: "Ministry of Fisheries, Animal Husbandry & Dairying",
    category: "agriculture",
    state: "all",
    description: "Flagship scheme for focused and sustainable development of the fisheries sector in the country.",
    descriptionHindi: "देश में मत्स्य पालन क्षेत्र के केंद्रित और सतत विकास के लिए प्रमुख योजना।",
    benefitAmount: "40-60% subsidy on fishery infrastructure up to ₹3 lakh",
    benefits: [
      "40% subsidy for general category fishers",
      "60% subsidy for SC/ST/women fishers",
      "Support for fish ponds, hatcheries, fish feed units",
      "Cold storage and ice plant subsidies",
      "Fishing boat and net subsidies",
      "Insurance: ₹5 lakh life cover + ₹50,000 disability for fishermen"
    ],
    eligibility: {
      minAge: 18, maxAge: null, gender: "all",
      incomeLimit: null, caste: ["all"],
      occupation: ["fisherman"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "Must be registered fisherman or fish farmer",
        "Marine fishers need coastal state registration"
      ]
    },
    documents: [
      { name: "Fisherman Registration Card", mandatory: true, purpose: "Prove fisher status", howToGet: "Register at District Fisheries Office" },
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "Aadhaar center" },
      { name: "Bank Passbook", mandatory: true, purpose: "Subsidy transfer", howToGet: "Any bank" },
      { name: "Land/Water Body Documents", mandatory: false, purpose: "For fish pond/farm activities", howToGet: "Revenue department or panchayat" }
    ],
    howToApplySteps: [
      "Step 1: Visit pmmsy.dof.gov.in — official PMMSY portal",
      "Step 2: Register as fisherman or fish farmer",
      "Step 3: Select activity you want subsidy for (pond/boat/net/cold storage)",
      "Step 4: Fill detailed application with project cost estimate",
      "Step 5: State Fisheries Department verifies and sanctions",
      "Step 6: Complete activity, submit utilization certificate",
      "Step 7: Subsidy released to bank account"
    ],
    alternativeApply: "Visit District Fisheries Office for offline application",
    officialLinks: {
      apply: "https://pmmsy.dof.gov.in",
      checkStatus: "https://pmmsy.dof.gov.in",
      officialWebsite: "https://dof.gov.in"
    },
    helpline: "1800-425-1660 (Fisheries Dept)",
    processingTime: "2-4 months",
    commonMistakes: ["Not being registered as fisherman before applying — mandatory"],
    deadline: null, isActive: true,
    tags: ["fisherman", "fish", "aquaculture", "boat", "subsidy", "marine", "inland fisheries"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },
  {
    id: "animal-husbandry-infra-fund",
    name: "Animal Husbandry Infrastructure Development Fund (AHIDF)",
    nameHindi: "पशुपालन बुनियादी ढांचा विकास निधि",
    nameGujarati: "પશુપાલન ઈન્ફ્રાસ્ટ્રક્ચર ડેવલપમેન્ટ ફંડ",
    department: "Department of Animal Husbandry & Dairying",
    ministry: "Ministry of Fisheries, Animal Husbandry & Dairying",
    category: "agriculture",
    state: "all",
    description: "Incentivizes investments by individual entrepreneurs, MSMEs, and FPOs to establish dairy and meat processing units.",
    descriptionHindi: "डेयरी और मांस प्रसंस्करण इकाइयों को स्थापित करने के लिए व्यक्तिगत उद्यमियों, एमएसएमई और एफपीओ द्वारा निवेश को प्रोत्साहित करता है।",
    benefitAmount: "3% interest subvention on loans up to ₹2 crore for dairy/meat processing",
    benefits: [
      "3% interest subvention for 5 years on AHIDF loans",
      "For dairy processing plants, meat processing units",
      "Animal feed plants, breed improvement facilities",
      "Credit guarantee cover through NABARD"
    ],
    eligibility: {
      minAge: 18, maxAge: null, gender: "all",
      incomeLimit: null, caste: ["all"],
      occupation: ["farmer", "self-employed"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Individual farmer, MSME, or cooperative eligible", "Must be for food processing/dairy/meat sector"]
    },
    documents: [
      { name: "Aadhaar / PAN Card", mandatory: true, purpose: "Identity and tax", howToGet: "Aadhaar center / income tax portal" },
      { name: "Project Report / Business Plan", mandatory: true, purpose: "Detailed plan for facility", howToGet: "Prepare with CA or NABARD consultant" },
      { name: "Bank Loan Sanction Letter", mandatory: true, purpose: "Prove loan approval", howToGet: "Apply at any scheduled bank" },
      { name: "Land documents for plant", mandatory: true, purpose: "Prove facility location", howToGet: "Revenue department" }
    ],
    howToApplySteps: [
      "Step 1: Prepare detailed project report for dairy/meat processing unit",
      "Step 2: Apply for loan at any scheduled commercial bank or cooperative bank",
      "Step 3: Bank sanctions loan under AHIDF scheme",
      "Step 4: Apply for 3% interest subvention through NABARD",
      "Step 5: NABARD releases subvention quarterly to bank",
      "Step 6: Effective interest rate reduced by 3% automatically"
    ],
    alternativeApply: "Contact NABARD district office for guidance on eligible banks",
    officialLinks: {
      apply: "https://ahidf.udyamimitra.in",
      checkStatus: "https://ahidf.udyamimitra.in",
      officialWebsite: "https://dahd.gov.in"
    },
    helpline: "022-26539895 (NABARD)",
    processingTime: "Bank loan: 30-60 days, subvention: 90 days",
    commonMistakes: ["Not applying through AHIDF-registered bank — interest subvention not available"],
    deadline: null, isActive: true,
    tags: ["dairy", "processing", "livestock", "loan", "interest subvention", "MSME"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },
  {
    id: "pkvy-organic",
    name: "Paramparagat Krishi Vikas Yojana (PKVY) — Organic Farming",
    nameHindi: "परम्परागत कृषि विकास योजना",
    nameGujarati: "પરંપરાગત કૃષિ વિકાસ યોજના",
    department: "Ministry of Agriculture & Farmers Welfare",
    ministry: "MoAFW",
    category: "agriculture",
    state: "all",
    description: "Promotes organic farming through a cluster approach and PGS (Participatory Guarantee System) certification.",
    descriptionHindi: "कलस्टर दृष्टिकोण और पीजीएस (भागीदारी गारंटी प्रणाली) प्रमाणन के माध्यम से जैविक खेती को बढ़ावा देता है।",
    benefitAmount: "₹50,000/hectare over 3 years for organic farming",
    benefits: [
      "₹50,000 per hectare assistance over 3 years",
      "₹31,000 for organic inputs (seeds, bio-fertilizers, compost)",
      "₹8,800 for value addition and packaging",
      "₹3,000 for transportation to market",
      "Organic certification cost covered by government",
      "Premium price for certified organic produce"
    ],
    eligibility: {
      minAge: 18, maxAge: null, gender: "all",
      incomeLimit: null, caste: ["all"],
      occupation: ["farmer"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "Must form cluster of minimum 20 hectares with 20 farmers",
        "Commit to 3-year organic farming transition",
        "No chemical pesticides/fertilizers during scheme period"
      ]
    },
    documents: [
      { name: "7/12 Land Record", mandatory: true, purpose: "Prove land ownership", howToGet: "Talati/Mamlatdar office" },
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "Aadhaar center" },
      { name: "Cluster Formation Certificate", mandatory: true, purpose: "Prove 20+ farmer cluster", howToGet: "Certified by Agriculture Extension Officer" },
      { name: "Soil Test Report", mandatory: false, purpose: "Baseline soil health before organic conversion", howToGet: "Soil Health Card center or KVK lab" }
    ],
    howToApplySteps: [
      "Step 1: Form a cluster of 20+ farmers with combined 20+ hectares",
      "Step 2: Contact nearest Krishi Vigyan Kendra (KVK) or Agriculture Dept",
      "Step 3: Agriculture Extension Officer registers the cluster",
      "Step 4: Baseline soil testing done for all cluster land",
      "Step 5: 3-year organic farming plan prepared with KVK support",
      "Step 6: Inputs provided in 3 annual instalments",
      "Step 7: Third-party certification for organic status after 3 years"
    ],
    alternativeApply: "Visit nearest KVK (Krishi Vigyan Kendra) for cluster formation support",
    officialLinks: {
      apply: "https://pgsindia.net",
      checkStatus: "https://pgsindia.net",
      officialWebsite: "https://agricoop.nic.in"
    },
    helpline: "1800-180-1551 (Agriculture)",
    processingTime: "3-year program — inputs disbursed annually",
    commonMistakes: ["Applying individually — must form cluster of 20+ farmers"],
    deadline: null, isActive: true,
    tags: ["organic", "farmer", "cluster", "certification", "sustainable", "chemical free"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },
  {
    id: "nfsm-national-food-security",
    name: "National Food Security Mission (NFSM)",
    nameHindi: "राष्ट्रीय खाद्य सुरक्षा मिशन",
    nameGujarati: "રાષ્ટ્રીય ખાદ્ય સુરક્ષા મિશન",
    department: "Ministry of Agriculture & Farmers Welfare",
    ministry: "MoAFW",
    category: "agriculture",
    state: "all",
    description: "Aims to increase the production of rice, wheat, pulses, coarse cereals, and commercial crops through area expansion and productivity enhancement.",
    descriptionHindi: "क्षेत्र विस्तार और उत्पादकता वृद्धि के माध्यम से चावल, गेहूं, दालों, मोटे अनाज और व्यावसायिक फसलों के उत्पादन को बढ़ाने का लक्ष्य है।",
    benefitAmount: "Free HYV seeds + subsidized farm inputs",
    benefits: [
      "Free High Yielding Variety (HYV) seeds for rice, wheat, pulses, oilseeds",
      "Subsidized farm machinery (seed drills, sprinklers)",
      "Free soil ameliorants (lime, gypsum) for acidic/alkaline soil",
      "Crop demonstration support",
      "Training and capacity building for farmers"
    ],
    eligibility: {
      minAge: 18, maxAge: null, gender: "all",
      incomeLimit: null, caste: ["all"],
      occupation: ["farmer"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Farmer growing rice, wheat, pulses, or oilseeds", "Apply through District Agriculture Officer"]
    },
    documents: [
      { name: "7/12 Land Record", mandatory: true, purpose: "Prove land and crop", howToGet: "Talati office" },
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "Aadhaar center" }
    ],
    howToApplySteps: [
      "Step 1: Visit District Agriculture Officer office",
      "Step 2: Apply during Kharif or Rabi season window",
      "Step 3: Show your land records and crop plan",
      "Step 4: Seeds and inputs distributed through Agriculture Dept",
      "Step 5: Attend field demonstration if organized in your village"
    ],
    alternativeApply: "Contact nearest Agriculture Extension Officer in your taluka",
    officialLinks: {
      apply: "https://nfsm.gov.in",
      checkStatus: "https://nfsm.gov.in",
      officialWebsite: "https://nfsm.gov.in"
    },
    helpline: "011-23382651",
    processingTime: "Season-based — apply before each season",
    commonMistakes: ["Missing seasonal application window — seeds distributed only before planting season"],
    deadline: null, isActive: true,
    tags: ["seeds", "farmer", "wheat", "rice", "pulses", "oilseeds", "food security"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },
  {
    id: "micro-irrigation-fund",
    name: "Micro Irrigation Fund (MIF) — Drip & Sprinkler",
    nameHindi: "सूक्ष्म सिंचाई कोष — ड्रिप और स्प्रिंकलर",
    nameGujarati: "માઈક્રો ઇરિગેશન ફંડ — ટપક અને ફુવારા",
    department: "Ministry of Agriculture & Farmers Welfare via NABARD",
    ministry: "MoAFW",
    category: "agriculture",
    state: "all",
    description: "Facilitates states in mobilizing resources for expanding coverage of micro irrigation.",
    descriptionHindi: "सूक्ष्म सिंचाई के दायरे के विस्तार के लिए संसाधन जुटाने में राज्यों की सुविधा प्रदान करता है।",
    benefitAmount: "55% subsidy (SC/ST: 65%) on drip/sprinkler irrigation",
    benefits: [
      "55% subsidy for general farmers on drip irrigation installation",
      "65% subsidy for SC/ST farmers",
      "Covers drip irrigation, sprinkler irrigation, micro-sprinklers",
      "Saves 40-50% water vs flood irrigation",
      "Increases yield by 40-50% with same water",
      "Low-interest loan for remaining cost through NABARD"
    ],
    eligibility: {
      minAge: 18, maxAge: null, gender: "all",
      incomeLimit: null, caste: ["all"],
      occupation: ["farmer"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "Must own or lease agricultural land",
        "Water source must be available (well, borewell, canal)",
        "Apply through State Agriculture Department"
      ]
    },
    documents: [
      { name: "7/12 Land Record", mandatory: true, purpose: "Prove land ownership", howToGet: "Talati/revenue office" },
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "Aadhaar center" },
      { name: "Bank Passbook", mandatory: true, purpose: "Subsidy transfer", howToGet: "Any nationalized bank" },
      { name: "Caste Certificate", mandatory: false, purpose: "Higher subsidy for SC/ST", howToGet: "Mamlatdar office" },
      { name: "Water Source Proof", mandatory: true, purpose: "Availability of irrigation water", howToGet: "Photo + certificate from panchayat" }
    ],
    howToApplySteps: [
      "Step 1: Visit ikhedut.gujarat.gov.in (Gujarat) or your state agriculture portal",
      "Step 2: Select 'Drip Irrigation Subsidy' scheme",
      "Step 3: Fill land details and select drip system type",
      "Step 4: Agriculture officer visits farm to verify water source",
      "Step 5: Choose from list of approved drip system vendors",
      "Step 6: Vendor installs system, issues invoice",
      "Step 7: Agriculture dept verifies installation",
      "Step 8: Subsidy released directly to vendor (farmer pays only remaining %)"
    ],
    alternativeApply: "Visit district agriculture office or nearest fertilizer/seed shop",
    officialLinks: {
      apply: "https://pmksy.gov.in/MicroIrrigation",
      checkStatus: "https://pmksy.gov.in",
      officialWebsite: "https://pmksy.gov.in"
    },
    helpline: "1800-180-1551",
    processingTime: "30-60 days after application",
    commonMistakes: [
      "Not choosing approved vendor from government list — subsidy rejected",
      "Not having water source — system installed but can't function"
    ],
    deadline: null, isActive: true,
    tags: ["drip irrigation", "sprinkler", "water saving", "farmer", "subsidy"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },
  {
    id: "gramin-bhandaran-yojana",
    name: "Gramin Bhandaran Yojana (Rural Warehouse Subsidy)",
    nameHindi: "ग्रामीण भंडारण योजना",
    nameGujarati: "ગ્રામીણ ભંડારણ યોજના",
    department: "Ministry of Agriculture & Farmers Welfare",
    ministry: "MoAFW",
    category: "agriculture",
    state: "all",
    description: "Capital investment subsidy scheme for construction/renovation of rural godowns to help farmers store their produce and avoid distress sales.",
    descriptionHindi: "किसानों को अपनी उपज स्टोर करने और संकटपूर्ण बिक्री से बचने में मदद करने के लिए ग्रामीण गोदामों के निर्माण/नवीनीकरण के लिए पूंजी निवेश सब्सिडी योजना।",
    benefitAmount: "25-33% capital subsidy for building rural warehouse (max ₹26.25 lakh)",
    benefits: [
      "25% capital subsidy for general farmers/companies",
      "33.33% subsidy for SC/ST/cooperatives/women/NE states",
      "Maximum subsidy: ₹26.25 lakh (general) / ₹26.25 lakh (SC/ST)",
      "Store produce and sell when prices are high",
      "Eligible for bank loans against stored produce",
      "Reduces post-harvest losses significantly"
    ],
    eligibility: {
      minAge: 18, maxAge: null, gender: "all",
      incomeLimit: null, caste: ["all"],
      occupation: ["farmer", "self-employed"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Must own land for warehouse construction", "Warehouse must be in rural area", "Minimum capacity 50 tonnes, maximum 10,000 tonnes"]
    },
    documents: [
      { name: "Land documents for warehouse site", mandatory: true, purpose: "Prove ownership of construction site", howToGet: "Revenue/registration department" },
      { name: "Approved warehouse construction plan", mandatory: true, purpose: "Technical design of warehouse", howToGet: "Hire civil engineer for approved plan" },
      { name: "Bank loan sanction letter", mandatory: true, purpose: "Construction financing", howToGet: "Apply at any bank/cooperative" },
      { name: "Aadhaar and PAN", mandatory: true, purpose: "Identity and tax", howToGet: "Aadhaar center / income tax portal" }
    ],
    howToApplySteps: [
      "Step 1: Identify land and get warehouse plan approved",
      "Step 2: Apply for bank loan for construction",
      "Step 3: Apply to NABARD for subsidy simultaneously",
      "Step 4: NABARD inspects site and sanctions subsidy",
      "Step 5: Construct warehouse as per approved plan",
      "Step 6: NABARD inspects completed warehouse",
      "Step 7: Subsidy released after satisfactory inspection"
    ],
    alternativeApply: "Contact NABARD district office for guidance",
    officialLinks: {
      apply: "https://nabard.org/content.aspx?id=502&catid=23&mid=530",
      checkStatus: "https://nabard.org",
      officialWebsite: "https://nabard.org"
    },
    helpline: "022-26539895 (NABARD)",
    processingTime: "6-12 months (construction + inspection)",
    commonMistakes: ["Building before NABARD approval — subsidy denied", "Warehouse capacity below 50 tonnes — not eligible"],
    deadline: null, isActive: true,
    tags: ["warehouse", "storage", "farmer", "subsidy", "rural", "post harvest"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },
  {
    id: "rkvy-agriculture",
    name: "Rashtriya Krishi Vikas Yojana (RKVY)",
    nameHindi: "राष्ट्रीय कृषि विकास योजना",
    nameGujarati: "રાષ્ટ્રીય કૃષિ વિકાસ યોજના",
    department: "Ministry of Agriculture & Farmers Welfare",
    ministry: "MoAFW",
    category: "agriculture",
    state: "all",
    description: "Incentivizes states to increase public investment in Agriculture and allied sectors through flexible funding for state-specific needs.",
    descriptionHindi: "राज्य-विशिष्ट आवश्यकताओं के लिए लचीले वित्त पोषण के माध्यम से कृषि और संबद्ध क्षेत्रों में सार्वजनिक निवेश बढ़ाने के लिए राज्यों को प्रोत्साहित करता है।",
    benefitAmount: "Variable — state-specific agriculture development grants",
    benefits: [
      "Flexible funding for state-specific agriculture needs",
      "Agri infrastructure development",
      "Agriculture mechanization support",
      "Horticulture, floriculture, sericulture development",
      "State agriculture universities and research support"
    ],
    eligibility: {
      minAge: 18, maxAge: null, gender: "all",
      incomeLimit: null, caste: ["all"],
      occupation: ["farmer", "agricultural_worker"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Apply through state agriculture department", "Benefits passed through state government schemes"]
    },
    documents: [
      { name: "7/12 Land Record", mandatory: true, purpose: "Land proof", howToGet: "Talati office" },
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "Aadhaar center" }
    ],
    howToApplySteps: [
      "Step 1: Contact district agriculture officer",
      "Step 2: Benefits delivered through state agriculture schemes",
      "Step 3: Different states have different RKVY sub-programs",
      "For Gujarat: visit ikhedut.gujarat.gov.in"
    ],
    alternativeApply: "State Agriculture Department or KVK office",
    officialLinks: {
      apply: "https://rkvy.nic.in",
      checkStatus: "https://rkvy.nic.in",
      officialWebsite: "https://rkvy.nic.in"
    },
    helpline: "1800-180-1551",
    processingTime: "State-specific",
    commonMistakes: ["Looking for central application — this is state-implemented"],
    deadline: null, isActive: true,
    tags: ["agriculture", "development", "state schemes", "horticulture", "mechanization"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },
  {
    id: "pm-aasha",
    name: "PM-AASHA (Annadata Aay SanraksHan Abhiyan)",
    nameHindi: "पीएम-आशा योजना",
    nameGujarati: "પીએમ-આશા યોજના",
    department: "Ministry of Agriculture & Farmers Welfare",
    ministry: "MoAFW",
    category: "agriculture",
    state: "all",
    description: "Umbrella scheme aimed at ensuring remunerative prices to farmers for their produce, focusing on oilseeds and pulses.",
    descriptionHindi: "किसानों को उनकी उपज के लिए लाभकारी मूल्य सुनिश्चित करने के उद्देश्य से छत्र योजना, विशेष रूप से तिलहन और दालों पर केंद्रित है।",
    benefitAmount: "MSP guaranteed for kharif crops — procurement when market price falls below MSP",
    benefits: [
      "Guaranteed Minimum Support Price (MSP) for oilseeds and pulses",
      "Procurement through Price Support Scheme (PSS)",
      "Price Deficiency Payment Scheme (PDPS) for oilseeds",
      "Private Procurement & Stockist Scheme (PPSS) involvement",
      "Protects farmers from sudden price drops in the market"
    ],
    eligibility: {
      minAge: 18, maxAge: null, gender: "all",
      incomeLimit: null, caste: ["all"],
      occupation: ["farmer"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Farmer producing notified oilseeds or pulses", "Must register on state procurement portal"]
    },
    documents: [
      { name: "7/12 Land Record", mandatory: true, purpose: "Verify crop and land", howToGet: "Revenue department" },
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "Aadhaar center" },
      { name: "Bank Passbook", mandatory: true, purpose: "Direct payment transfer", howToGet: "Bank" }
    ],
    howToApplySteps: [
      "Step 1: Register on the State's Farmer Procurement Portal before harvest",
      "Step 2: Declare the area and expected production of pulses/oilseeds",
      "Step 3: Receive SMS notification for procurement date and center",
      "Step 4: Bring produce to designated procurement center/mandi",
      "Step 5: Produce is weighed and quality checked",
      "Step 6: Payment is credited to bank account at MSP rate within 3-7 days"
    ],
    alternativeApply: "Visit nearest APMC Mandi or PACS (Primary Agricultural Credit Society)",
    officialLinks: {
      apply: "https://agmarknet.gov.in",
      checkStatus: "https://agmarknet.gov.in",
      officialWebsite: "https://agmarknet.gov.in"
    },
    helpline: "1800-270-0224",
    processingTime: "7-15 days for payment after procurement",
    commonMistakes: [
      "Not registering on the portal before the deadline",
      "Bringing produce with high moisture content above FAQ standards",
      "Bank account not linked with Aadhaar"
    ],
    deadline: null, isActive: true,
    tags: ["MSP", "pulses", "oilseeds", "procurement", "farmer", "price support"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },
  {
    id: "national-horticulture-mission",
    name: "National Horticulture Mission (NHM)",
    nameHindi: "राष्ट्रीय बागवानी मिशन",
    nameGujarati: "રાષ્ટ્રીય બાગાયત મિશન",
    department: "National Horticulture Board",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    category: "agriculture",
    state: "all",
    description: "Aims for holistic development of the horticulture sector, including fruits, vegetables, root and tuber crops, spices, and flowers.",
    descriptionHindi: "फलों, सब्जियों, जड़ और कंद फसलों, मसालों और फूलों सहित बागवानी क्षेत्र के समग्र विकास का लक्ष्य है।",
    benefitAmount: "50% subsidy on planting material, drip, packhouses",
    benefits: [
      "50% subsidy on setting up new orchards (mango, guava, citrus, etc.)",
      "Financial assistance for vegetable and flower cultivation under polyhouse",
      "Subsidy for post-harvest infrastructure (packhouses, cold storage)",
      "Support for organic farming in horticulture",
      "Free training on modern horticulture techniques"
    ],
    eligibility: {
      minAge: 18, maxAge: null, gender: "all",
      incomeLimit: null, caste: ["all"],
      occupation: ["farmer"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Must have suitable land for horticulture", "Irrigation facility should be available"]
    },
    documents: [
      { name: "7/12 Land Record", mandatory: true, purpose: "Prove land ownership", howToGet: "Talati office" },
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "Aadhaar center" },
      { name: "Water Source Proof", mandatory: true, purpose: "Ensure irrigation", howToGet: "Photo/Certificate from Panchayat" },
      { name: "Quotation for polyhouse/equipment", mandatory: true, purpose: "Estimate cost", howToGet: "From approved vendor" }
    ],
    howToApplySteps: [
      "Step 1: Contact District Horticulture Officer (DHO) or visit state portal",
      "Step 2: Submit 'Letter of Intent' (LOI) for the specific horticulture activity",
      "Step 3: DHO verifies the land and technical feasibility",
      "Step 4: Receive approval/sanction letter from National Horticulture Board",
      "Step 5: Complete the project/planting using approved materials",
      "Step 6: Joint inspection by DHO and bank officer",
      "Step 7: Subsidy released to bank account or vendor"
    ],
    alternativeApply: "Apply online at nhb.gov.in for large projects",
    officialLinks: {
      apply: "https://nhb.gov.in",
      checkStatus: "https://nhb.gov.in",
      officialWebsite: "https://nhb.gov.in"
    },
    helpline: "0124-2342992",
    processingTime: "60-120 days",
    commonMistakes: [
      "Starting construction/planting before receiving LOI (Letter of Intent)",
      "Not following spacing or quality standards prescribed by NHB"
    ],
    deadline: null, isActive: true,
    tags: ["horticulture", "fruits", "vegetables", "polyhouse", "subsidy", "farmer"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },
  {
    id: "smam-mechanisation",
    name: "Sub-Mission on Agricultural Mechanisation (SMAM)",
    nameHindi: "कृषि यंत्रीकरण उप-मिशन",
    nameGujarati: "કૃષિ યાંત્રીકરણ ઉપ-મિશન",
    department: "Ministry of Agriculture & Farmers Welfare",
    ministry: "MoAFW",
    category: "agriculture",
    state: "all",
    description: "Aims to increase the reach of farm mechanization to small and marginal farmers and to regions where availability of farm power is low.",
    descriptionHindi: "कृषि मशीनीकरण की पहुंच छोटे और सीमांत किसानों और उन क्षेत्रों तक बढ़ाना है जहां कृषि शक्ति की उपलब्धता कम है।",
    benefitAmount: "50% for general, 80% for SC/ST/women on farm equipment",
    benefits: [
      "50% subsidy on tractors for individual farmers (General category)",
      "80% subsidy for SC/ST and women farmers for machinery",
      "Covers harvesters, rotavators, tillers, and sprayers",
      "Assistance for setting up Custom Hiring Centers (CHC)",
      "Training and testing of agricultural machinery"
    ],
    eligibility: {
      minAge: 18, maxAge: null, gender: "all",
      incomeLimit: null, caste: ["all"],
      occupation: ["farmer"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Valid driving license required for tractor subsidy", "Must not have availed subsidy for same machine in last 5 years"]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "Aadhaar center" },
      { name: "7/12 Land Record", mandatory: true, purpose: "Prove land ownership", howToGet: "Revenue office" },
      { name: "Bank Passbook", mandatory: true, purpose: "Subsidy transfer", howToGet: "Bank" },
      { name: "Quotation from Authorized Dealer", mandatory: true, purpose: "Price proof", howToGet: "From any empaneled dealer" }
    ],
    howToApplySteps: [
      "Step 1: Visit agrimachinery.nic.in — the unified SMAM portal",
      "Step 2: Register as a farmer with Aadhaar and mobile number",
      "Step 3: Select the state and district where you own land",
      "Step 4: Select the machine you want to buy from the drop-down",
      "Step 5: Upload land records and dealer quotation",
      "Step 6: Wait for approval (Sanction Order) from the department",
      "Step 7: Purchase the machine from the authorized dealer",
      "Step 8: Department conducts physical verification of the machine",
      "Step 9: Subsidy is credited directly to the farmer's bank account"
    ],
    alternativeApply: "Visit nearest CSC or District Agriculture Office for portal entry",
    officialLinks: {
      apply: "https://agrimachinery.nic.in",
      checkStatus: "https://agrimachinery.nic.in",
      officialWebsite: "https://agrimachinery.nic.in"
    },
    helpline: "1800-180-1551",
    processingTime: "45-60 days",
    commonMistakes: [
      "Purchasing the machine before getting the official Sanction Order",
      "Buying from a non-authorized or non-empaneled dealer",
      "Missing the verification visit by the agriculture officer"
    ],
    deadline: null, isActive: true,
    tags: ["tractor", "harvester", "machinery", "subsidy", "farmer", "mechanisation"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },
  {
    id: "pm-kmy-pension",
    name: "Pradhan Mantri Kisan Maandhan Yojana (PM-KMY)",
    nameHindi: "प्रधानमंत्री किसान मानधन योजना",
    nameGujarati: "પીએમ કિસાન માનધન યોજના",
    department: "Ministry of Agriculture & Farmers Welfare",
    ministry: "MoAFW",
    category: "agriculture",
    state: "all",
    description: "Old age pension scheme for all small and marginal farmers in the country to ensure a life of dignity.",
    descriptionHindi: "गरिमापूर्ण जीवन सुनिश्चित करने के लिए देश के सभी छोटे और सीमांत किसानों के लिए वृद्धावस्था पेंशन योजना।",
    benefitAmount: "₹3,000/month pension after 60 years",
    benefits: [
      "Assured monthly pension of ₹3,000 after attaining age 60",
      "Voluntary and contributory pension scheme",
      "Government contributes an equal amount to the pension fund",
      "In case of death, spouse gets 50% as family pension",
      "Farmers can opt-out after 5 years with interest on contributions"
    ],
    eligibility: {
      minAge: 18, maxAge: 40, gender: "all",
      incomeLimit: null, caste: ["all"],
      occupation: ["farmer"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Must be a small or marginal farmer with land up to 2 hectares", "Must not be covered under any other social security scheme (EPFO/ESIC)"]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity and KYC", howToGet: "Aadhaar center" },
      { name: "Savings Bank Account", mandatory: true, purpose: "Auto-debit of premium", howToGet: "Any bank" },
      { name: "Land record (7/12)", mandatory: true, purpose: "Verify landholding size", howToGet: "Revenue department" }
    ],
    howToApplySteps: [
      "Step 1: Visit maandhan.in or go to your nearest CSC (Common Service Centre)",
      "Step 2: Provide Aadhaar and Bank account details to the CSC operator",
      "Step 3: Operator calculates monthly contribution based on your current age (₹55 to ₹200)",
      "Step 4: Pay first installment in cash to CSC (subsequent will be auto-debit)",
      "Step 5: Sign the auto-debit mandate for the bank account",
      "Step 6: Receive the Kisan Pension Card with a unique pension number"
    ],
    alternativeApply: "Self-enrollment via the PM-KMY mobile app",
    officialLinks: {
      apply: "https://maandhan.in",
      checkStatus: "https://maandhan.in/dashboard",
      officialWebsite: "https://maandhan.in"
    },
    helpline: "1800-267-6888",
    processingTime: "Instant enrollment",
    commonMistakes: [
      "Age above 40 years during application (not eligible)",
      "Not maintaining sufficient balance in bank for auto-debit installments",
      "Being an income tax payer (not eligible)"
    ],
    deadline: null, isActive: true,
    tags: ["pension", "farmer", "pension scheme", "senior citizen", "financial security"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },
  {
    id: "nbhm-beekeeping",
    name: "National Bee Keeping & Honey Mission (NBHM)",
    nameHindi: "राष्ट्रीय मधुमक्खी पालन और शहद मिशन",
    nameGujarati: "રાષ્ટ્રીય મધમાખી ઉછેર અને મધ મિશન",
    department: "National Bee Board",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    category: "agriculture",
    state: "all",
    description: "Aims to promote beekeeping for 'Sweet Revolution' to increase farmer income and improve crop yields through pollination.",
    descriptionHindi: "किसानों की आय बढ़ाने और परागण के माध्यम से फसल की पैदावार में सुधार करने के लिए 'मीठी क्रांति' के लिए मधुमक्खी पालन को बढ़ावा देना है।",
    benefitAmount: "₹2,000 per beehive box subsidy",
    benefits: [
      "80% subsidy on beehive boxes and colonies for SC/ST/Women",
      "50% subsidy for general category farmers",
      "Financial aid for honey processing and packaging units",
      "Support for bee-breeders and honey testing labs",
      "Free scientific training on beekeeping"
    ],
    eligibility: {
      minAge: 18, maxAge: null, gender: "all",
      incomeLimit: null, caste: ["all"],
      occupation: ["farmer", "unemployed"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Commitment to attend beekeeping training", "Access to flora/crops suitable for bees"]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "Aadhaar center" },
      { name: "Training Certificate", mandatory: true, purpose: "Prove beekeeping knowledge", howToGet: "From KVK or recognized training center" },
      { name: "Caste Certificate", mandatory: false, purpose: "Higher subsidy for SC/ST", howToGet: "Mamlatdar office" }
    ],
    howToApplySteps: [
      "Step 1: Register as a beekeeper on the National Bee Board (NBB) portal",
      "Step 2: Attend a 7-day beekeeping training course at nearest KVK or NHB center",
      "Step 3: Submit a proposal for setting up apiaries (minimum 10-50 boxes)",
      "Step 4: Horticulture department inspects the proposed site",
      "Step 5: Purchase boxes from empaneled bee-breeders",
      "Step 6: Subsidy is released after verification of bee boxes on-site"
    ],
    alternativeApply: "Contact District Horticulture Officer (DHO) for cluster-based beekeeping",
    officialLinks: {
      apply: "https://nbb.gov.in",
      checkStatus: "https://nbb.gov.in",
      officialWebsite: "https://nbb.gov.in"
    },
    helpline: "0124-2342992",
    processingTime: "45-90 days",
    commonMistakes: [
      "Buying low-quality bee colonies from unauthorized sources",
      "Lack of knowledge about bee diseases leading to colony loss",
      "Applying without first completing the mandatory training"
    ],
    deadline: null, isActive: true,
    tags: ["beekeeping", "honey", "bees", "subsidy", "farmer", "sweet revolution"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },
  {
    id: "odop-agriculture",
    name: "One District One Product (ODOP) — Agriculture",
    nameHindi: "एक जिला एक उत्पाद — कृषि",
    nameGujarati: "એક જિલ્લો એક ઉત્પાદન — કૃષિ",
    department: "Department of Agriculture",
    ministry: "Ministry of Commerce and Industry",
    category: "agriculture",
    state: "all",
    description: "Identifies and promotes a unique agricultural product from each district to turn it into an export hub.",
    descriptionHindi: "प्रत्येक जिले से एक अद्वितीय कृषि उत्पाद की पहचान करता है और उसे निर्यात केंद्र में बदलने के लिए बढ़ावा देता है।",
    benefitAmount: "₹10 lakh grant for product development and marketing",
    benefits: [
      "Financial assistance for common processing facilities",
      "Support for packaging, branding, and export logistics",
      "Assistance in getting GI (Geographical Indication) tags",
      "Training on international quality standards",
      "Market linkage through national and international trade fairs"
    ],
    eligibility: {
      minAge: 18, maxAge: null, gender: "all",
      incomeLimit: null, caste: ["all"],
      occupation: ["farmer", "self-employed", "business_owner"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Must be involved in the production/processing of the district's identified product", "FPOs and SHGs are prioritized"]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "Aadhaar center" },
      { name: "Business Registration/MSME Udyam", mandatory: true, purpose: "Prove business entity", howToGet: "udyamregistration.gov.in" },
      { name: "Project Report", mandatory: true, purpose: "Show business expansion plan", howToGet: "Prepare with district industry center" }
    ],
    howToApplySteps: [
      "Step 1: Identify the ODOP product for your district (e.g., Mango in Valsad, Cumin in Banaskantha)",
      "Step 2: Visit the District Industries Centre (DIC) or District Agriculture Office",
      "Step 3: Register your business as a producer/processor of the ODOP product",
      "Step 4: Submit a proposal for modernization or common infrastructure",
      "Step 5: Attend training and capacity building workshops organized by ODOP cell",
      "Step 6: Grants are disbursed based on project milestones for machinery/marketing"
    ],
    alternativeApply: "Apply online at odop.gov.in or investindia.gov.in/odop",
    officialLinks: {
      apply: "https://odop.gov.in",
      checkStatus: "https://odop.gov.in",
      officialWebsite: "https://odop.gov.in"
    },
    helpline: "1800-267-6888",
    processingTime: "90-120 days",
    commonMistakes: [
      "Applying for a product that is not the designated ODOP for that district",
      "Lack of focus on quality and packaging standards required for export"
    ],
    deadline: null, isActive: true,
    tags: ["ODOP", "marketing", "export", "processing", "branding", "farmer"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },
  {
    id: "soil-health-card",
    name: "Soil Health Card Scheme",
    nameHindi: "मृदा स्वास्थ्य कार्ड योजना",
    nameGujarati: "જમીન સ્વાસ્થ્ય કાર્ડ યોજના",
    department: "Ministry of Agriculture & Farmers Welfare",
    ministry: "MoAFW",
    category: "agriculture",
    state: "all",
    description: "Provides information to farmers on nutrient status of their soil along with recommendations on appropriate dosage of nutrients.",
    descriptionHindi: "किसानों को उनकी मिट्टी की पोषक स्थिति के बारे में जानकारी और पोषक तत्वों की उचित खुराक पर सिफारिशें प्रदान करता है।",
    benefitAmount: "Free soil health card with fertilizer recommendations",
    benefits: [
      "FREE soil testing for all farm holdings (every 2 years)",
      "Scientific recommendations on fertilizers for different crops",
      "Information on 12 parameters including Nitrogen, Phosphorus, Potassium",
      "Improves soil productivity and reduces unnecessary fertilizer costs",
      "Access to the online Soil Health Card portal"
    ],
    eligibility: {
      minAge: 18, maxAge: null, gender: "all",
      incomeLimit: null, caste: ["all"],
      occupation: ["farmer"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Must own agricultural land"]
    },
    documents: [
      { name: "7/12 Land Record", mandatory: true, purpose: "Identify farm location", howToGet: "Revenue department" },
      { name: "Aadhaar Card", mandatory: true, purpose: "Farmer identification", howToGet: "Aadhaar center" }
    ],
    howToApplySteps: [
      "Step 1: Contact your village Gram Sevak or Agriculture Extension Officer",
      "Step 2: Officers collect soil samples from your farm (usually in summer)",
      "Step 3: Samples are sent to designated Soil Testing Labs (STL)",
      "Step 4: Once results are ready, the Soil Health Card is generated on the portal",
      "Step 5: Collect the physical card from the Gram Panchayat or Agriculture office",
      "Step 6: Follow the fertilizer dosages mentioned on the card for next crop"
    ],
    alternativeApply: "Visit soilhealth.dac.gov.in to check if your farm's card is already generated",
    officialLinks: {
      apply: "https://soilhealth.dac.gov.in",
      checkStatus: "https://soilhealth.dac.gov.in/health-card",
      officialWebsite: "https://soilhealth.dac.gov.in"
    },
    helpline: "1800-180-1551",
    processingTime: "15-30 days after sample collection",
    commonMistakes: [
      "Applying fertilizers without referring to the SHC recommendations",
      "Taking soil samples from the wrong depth or recently fertilized spots"
    ],
    deadline: null, isActive: true,
    tags: ["soil", "fertilizer", "testing", "agriculture", "farmer", "productivity"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },
  {
    id: "acabc-agri-business",
    name: "Agri Clinics & Agri Business Centres (ACABC)",
    nameHindi: "कृषि क्लीनिक और कृषि व्यवसाय केंद्र",
    nameGujarati: "એગ્રી ક્લિનિક્સ અને એગ્રી બિઝનેસ સેન્ટર્સ",
    department: "MANAGE (National Institute of Agricultural Extension Management)",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    category: "agriculture",
    state: "all",
    description: "Supports agriculture graduates in setting up agri-ventures to provide professional extension services to farmers.",
    descriptionHindi: "किसानों को पेशेवर विस्तार सेवाएं प्रदान करने के लिए कृषि-उद्यम स्थापित करने में कृषि स्नातकों का समर्थन करता है।",
    benefitAmount: "44% subsidy for women/SC/ST, 36% for general on loans up to ₹20 lakh",
    benefits: [
      "45 days of free residential training at nodal centers",
      "36% composite subsidy on loan for general category",
      "44% subsidy for SC/ST and women entrepreneurs",
      "Subsidy on loans up to ₹20 lakh (individual) and ₹100 lakh (group)",
      "Bank loan linkage with interest subvention",
      "Post-training mentorship for business sustainability"
    ],
    eligibility: {
      minAge: 18, maxAge: 60, gender: "all",
      incomeLimit: null, caste: ["all"],
      occupation: ["unemployed", "student", "self-employed"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Must have a degree/diploma in Agriculture or allied subjects", "Post-graduates in non-agriculture with agri-background also eligible"]
    },
    documents: [
      { name: "Educational Degree/Diploma Certificate", mandatory: true, purpose: "Verify eligibility", howToGet: "From University/College" },
      { name: "Aadhaar and PAN Card", mandatory: true, purpose: "Identity and loan KYC", howToGet: "Aadhaar center / IT portal" },
      { name: "Project Report", mandatory: true, purpose: "For bank loan application", howToGet: "Developed during 45-day training" }
    ],
    howToApplySteps: [
      "Step 1: Apply online for the training at acabc.gov.in or manage.gov.in",
      "Step 2: Appear for an interview at the designated Nodal Training Institute (NTI)",
      "Step 3: Complete the 45-day residential training at the NTI",
      "Step 4: Prepare a detailed business plan (DPR) with NTI guidance",
      "Step 5: Apply for a bank loan from a nationalized or cooperative bank",
      "Step 6: NABARD releases the back-ended subsidy after project launch"
    ],
    alternativeApply: "Visit the MANAGE office in Hyderabad or contact state NTI",
    officialLinks: {
      apply: "https://www.manage.gov.in/acabc/acabc.asp",
      checkStatus: "https://www.manage.gov.in",
      officialWebsite: "https://www.manage.gov.in"
    },
    helpline: "040-24015346",
    processingTime: "6 months (training + loan processing)",
    commonMistakes: [
      "Starting business without completing the 45-day mandatory training",
      "Applying without an agriculture degree/diploma",
      "Failure to provide regular progress reports to MANAGE after loan disbursement"
    ],
    deadline: null, isActive: true,
    tags: ["startup", "business", "agri-business", "loan", "subsidy", "agriculture graduate"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },
  {
    id: "market-intervention-scheme",
    name: "Market Intervention Scheme (MIS)",
    nameHindi: "बाजार हस्तक्षेप योजना",
    nameGujarati: "બજાર હસ્તક્ષેપ યોજના",
    department: "Ministry of Agriculture & Farmers Welfare",
    ministry: "MoAFW",
    category: "agriculture",
    state: "all",
    description: "Ad-hoc scheme for procurement of horticultural commodities which are perishable in nature and not covered under MSP.",
    descriptionHindi: "बागवानी वस्तुओं की खरीद के लिए तदर्थ योजना जो प्रकृति में खराब होने वाली हैं और एमएसपी के तहत कवर नहीं की गई हैं।",
    benefitAmount: "Government procures at fixed price when market price crashes",
    benefits: [
      "Provides a floor price during peak harvest if market prices crash",
      "Government buys produce directly from farmers at MIS price",
      "Protects farmers from distress sales for perishable items (onion, potato, fruits)",
      "Prevents heavy financial losses due to glut in the market"
    ],
    eligibility: {
      minAge: 18, maxAge: null, gender: "all",
      incomeLimit: null, caste: ["all"],
      occupation: ["farmer"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Specific to commodities and states where MIS is activated by central govt", "Must be a genuine producer of the crop"]
    },
    documents: [
      { name: "7/12 Land Record", mandatory: true, purpose: "Prove crop production", howToGet: "Talati office" },
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "Aadhaar center" },
      { name: "Mandi Gate Pass / Sales Bill", mandatory: false, purpose: "Verify market price at mandi", howToGet: "APMC Mandi" }
    ],
    howToApplySteps: [
      "Step 1: Scheme is activated only when state government requests central government",
      "Step 2: Watch for government notifications when prices of a crop crash",
      "Step 3: Register at designated procurement centers opened under MIS",
      "Step 4: Bring produce to the center for grading and weighing",
      "Step 5: Payment is made directly to bank account at the MIS procurement price"
    ],
    alternativeApply: "Contact nearest APMC Mandi secretary for MIS updates",
    officialLinks: {
      apply: "https://agricoop.nic.in",
      checkStatus: "https://agricoop.nic.in",
      officialWebsite: "https://agricoop.nic.in"
    },
    helpline: "1800-180-1551",
    processingTime: "7-30 days for payment",
    commonMistakes: [
      "Trying to sell produce under MIS before the scheme is officially notified",
      "Producing crops that do not meet the minimum quality standards (Grade A/B)"
    ],
    deadline: null, isActive: true,
    tags: ["price support", "perishable", "horticulture", "market crash", "farmer"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },
  {
    id: "kvk-training",
    name: "Krishi Vigyan Kendra (KVK) Training Scheme",
    nameHindi: "कृषि विज्ञान केंद्र प्रशिक्षण योजना",
    nameGujarati: "કૃષિ વિજ્ઞાન કેન્દ્ર તાલીમ યોજના",
    department: "Indian Council of Agricultural Research (ICAR)",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    category: "agriculture",
    state: "all",
    description: "Provides vocational training to farmers and rural youth for self-employment and technology assessment in agriculture.",
    descriptionHindi: "खेती में स्वरोजगार और प्रौद्योगिकी मूल्यांकन के लिए किसानों और ग्रामीण युवाओं को व्यावसायिक प्रशिक्षण प्रदान करता है।",
    benefitAmount: "Free training + stipend of ₹100-200/day during training",
    benefits: [
      "Completely FREE training on farming, animal husbandry, and agro-processing",
      "Hands-on practical experience on demonstration farms",
      "Free learning materials and kits during training",
      "Stipend provided for travel and food for long-term courses",
      "Skill certification useful for bank loan applications"
    ],
    eligibility: {
      minAge: 16, maxAge: 60, gender: "all",
      incomeLimit: null, caste: ["all"],
      occupation: ["farmer", "student", "unemployed"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Interest in learning modern agriculture practices", "Priority for small/marginal farmers and rural women"]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "Aadhaar center" },
      { name: "Educational Marksheet", mandatory: false, purpose: "For specific technical courses", howToGet: "School/Board" },
      { name: "Bank Passbook", mandatory: false, purpose: "For stipend payment", howToGet: "Bank" }
    ],
    howToApplySteps: [
      "Step 1: Visit the nearest Krishi Vigyan Kendra (KVK) in your district",
      "Step 2: Check the annual training calendar for available courses",
      "Step 3: Fill the training registration form at the KVK office",
      "Step 4: Receive confirmation about the training dates via SMS or phone",
      "Step 5: Attend the training sessions daily and complete the project work",
      "Step 6: Receive the certificate and stipend upon successful completion"
    ],
    alternativeApply: "Register online via the ICAR-KVK portal or mobile app",
    officialLinks: {
      apply: "https://kvk.icar.gov.in",
      checkStatus: "https://kvk.icar.gov.in",
      officialWebsite: "https://kvk.icar.gov.in"
    },
    helpline: "011-25842879",
    processingTime: "Immediate registration",
    commonMistakes: [
      "Enrolling in training but not attending 100% of the practical sessions",
      "Not following up with KVK experts after training for implementation on your own farm"
    ],
    deadline: null, isActive: true,
    tags: ["training", "skill", "agriculture", "farmer", "ICAR", "education"],
    viewCount: 0, lastUpdated: "2026-01-01"
  }
];
