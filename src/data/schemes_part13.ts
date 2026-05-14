import { Scheme } from "@/types";

export const schemesPart13: Scheme[] = [
  // SOCIAL WELFARE (15 Schemes)
  {
    id: "pm-awas-gramin-new",
    name: "PMAY-G (Pradhan Mantri Awas Yojana - Gramin)",
    nameHindi: "पीएम आवास योजना - ग्रामीण",
    nameGujarati: "PM આવાસ યોજના - ગ્રામીણ",
    department: "Ministry of Rural Development",
    ministry: "MoRD",
    category: "housing",
    state: "all",
    description: "Provides financial assistance to rural BPL families for construction of pucca houses with basic amenities.",
    descriptionHindi: "बुनियादी सुविधाओं के साथ पक्के घरों के निर्माण के लिए ग्रामीण बीपीएल परिवारों को वित्तीय सहायता प्रदान करता है।",
    benefitAmount: "₹1.2 lakh (Plains) / ₹1.3 lakh (Hills) assistance",
    benefits: [
      "₹1,20,000 for construction in plain areas",
      "₹1,30,000 for construction in hilly/difficult areas",
      "₹12,000 additional for toilet construction via SBM",
      "90-95 days of unskilled labor wage under MGNREGA (approx ₹18,000)",
      "Technical support for earthquake-resistant design"
    ],
    eligibility: {
      minAge: 18, maxAge: null, gender: "all",
      incomeLimit: null, caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "Must be listed in SECC 2011 data as houseless or having 0/1/2 room kucha house",
        "Must not own a motorized vehicle or 3/4 wheeler",
        "Must not have a family member as a government employee"
      ]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "Aadhaar center" },
      { name: "Job Card Number", mandatory: true, purpose: "For MGNREGA labor benefit", howToGet: "From Gram Panchayat" },
      { name: "Bank Passbook", mandatory: true, purpose: "DBT transfer", howToGet: "Bank" },
      { name: "Swachh Bharat ID", mandatory: false, purpose: "For toilet subsidy", howToGet: "From SBM portal" }
    ],
    howToApplySteps: [
      "Step 1: Check your name in the PMAY-G beneficiary list at the Gram Panchayat office",
      "Step 2: If not listed, register your request with the Gram Sevak",
      "Step 3: Verification by the block development officer (BDO)",
      "Step 4: Geotagging of your current kucha house",
      "Step 5: Sanction order issued, 1st installment released for foundation",
      "Step 6: Construction stages geotagged at each level for next installments"
    ],
    alternativeApply: "Use the 'AwaasApp' mobile app to check status",
    officialLinks: {
      apply: "Through Gram Panchayat",
      checkStatus: "https://pmayg.nic.in/netiay/Benificiary.aspx",
      officialWebsite: "https://pmayg.nic.in"
    },
    helpline: "1800-11-6446",
    processingTime: "6-12 months for construction cycles",
    commonMistakes: ["Using funds for other purposes — house must be completed to get all installments"],
    deadline: null, isActive: true,
    tags: ["housing", "rural", "PMAY", "pucca house", "financial aid"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },
  {
    id: "ujjwala-yojana-2-new",
    name: "PM Ujjwala Yojana 2.0 (Free Gas Connection)",
    nameHindi: "पीएम उज्ज्वला योजना 2.0",
    nameGujarati: "PM ઉજ્જવલા યોજના 2.0",
    department: "Ministry of Petroleum and Natural Gas",
    ministry: "MoPNG",
    category: "women",
    state: "all",
    description: "Provides free LPG connections to women from poor households to ensure clean cooking fuel.",
    descriptionHindi: "स्वच्छ खाना पकाने के ईंधन को सुनिश्चित करने के लिए गरीब परिवारों की महिलाओं को मुफ्त एलपीजी कनेक्शन प्रदान करता है।",
    benefitAmount: "Free LPG connection + 1st Refill + Stove",
    benefits: [
      "No security deposit for cylinder and regulator",
      "First LPG refill is absolutely FREE",
      "Free gas stove (Hot plate) provided",
      "₹200-300 subsidy per cylinder on subsequent refills",
      "Health benefits by reducing indoor air pollution"
    ],
    eligibility: {
      minAge: 18, maxAge: null, gender: "female",
      incomeLimit: null, caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "Applicant must be an adult woman",
        "Must belong to BPL, SC/ST, PMAY, or Most Backward Classes",
        "No other LPG connection in the same household"
      ]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "Aadhaar center" },
      { name: "Ration Card", mandatory: true, purpose: "BPL proof", howToGet: "Food department" },
      { name: "Bank Passbook", mandatory: true, purpose: "Subsidy transfer", howToGet: "Bank" },
      { name: "Self-Declaration", mandatory: true, purpose: "Verify no other connection", howToGet: "Download from portal" }
    ],
    howToApplySteps: [
      "Step 1: Visit pmuy.gov.in or any LPG distributor (Indane/HP/BharatGas)",
      "Step 2: Fill the Ujjwala 2.0 application form",
      "Step 3: Submit documents at the gas agency",
      "Step 4: Distributor verifies eligibility via centralized portal",
      "Step 5: Receive the gas cylinder, regulator, and stove at home"
    ],
    alternativeApply: "Apply online at any oil marketing company website (e.g., indane.co.in)",
    officialLinks: {
      apply: "https://www.pmuy.gov.in/ujjwala2.html",
      checkStatus: "https://www.pmuy.gov.in",
      officialWebsite: "https://www.pmuy.gov.in"
    },
    helpline: "1906 (LPG Helpline)",
    processingTime: "7-15 days",
    commonMistakes: [
      "Applying if a family member already has a connection",
      "Aadhaar name not matching Ration card name"
    ],
    deadline: null, isActive: true,
    tags: ["LPG", "gas connection", "clean fuel", "women", "BPL", "Ujjwala"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },
  {
    id: "pm- गरीब-कल्याण-अन्न-योजना-new",
    name: "PM Garib Kalyan Anna Yojana (Free Ration)",
    nameHindi: "पीएम गरीब कल्याण अन्न योजना",
    nameGujarati: "PM ગરીબ કલ્યાણ અન્ન યોજના",
    department: "Department of Food and Public Distribution",
    ministry: "Ministry of Consumer Affairs, Food and Public Distribution",
    category: "social",
    state: "all",
    description: "Provides 5kg of free foodgrains per person per month to eligible beneficiaries under NFSA until 2028.",
    descriptionHindi: "2028 तक एनएफएसए के तहत पात्र लाभार्थियों को प्रति व्यक्ति प्रति माह 5 किलो मुफ्त खाद्यान्न प्रदान करता है।",
    benefitAmount: "5kg free wheat/rice per person per month",
    benefits: [
      "5kg foodgrains (Rice or Wheat) per person monthly",
      "Completely FREE of cost",
      "Available via One Nation One Ration Card (ONORC) across India",
      "Extended until December 2028"
    ],
    eligibility: {
      minAge: null, maxAge: null, gender: "all",
      incomeLimit: null, caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Must hold an NFSA Ration Card (Priority Household or AAY)"]
    },
    documents: [
      { name: "Ration Card", mandatory: true, purpose: "Eligibility", howToGet: "Food department" },
      { name: "Aadhaar Card", mandatory: true, purpose: "Biometric authentication", howToGet: "Aadhaar center" }
    ],
    howToApplySteps: [
      "Step 1: Link your Aadhaar with your Ration Card",
      "Step 2: Visit your nearest Fair Price Shop (Ration Shop)",
      "Step 3: Provide biometric (thumb/iris) authentication",
      "Step 4: Receive your entitled 5kg free grains along with regular quota"
    ],
    alternativeApply: "Check your eligibility on the 'Mera Ration' app",
    officialLinks: {
      apply: "Automatic if you have NFSA Ration Card",
      checkStatus: "https://nfsa.gov.in",
      officialWebsite: "https://nfsa.gov.in"
    },
    helpline: "1967",
    processingTime: "Monthly cycles",
    commonMistakes: ["Not linking Aadhaar — ration cannot be withdrawn in ONORC"],
    deadline: "December 2028", isActive: true,
    tags: ["ration", "free food", "NFSA", "poverty", "food security"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },
  {
    id: "pm-divyang-id",
    name: "UDID (Unique Disability ID) for Divyangjan",
    nameHindi: "दिव्यांग विशिष्ट पहचान पत्र",
    nameGujarati: "દિવ્યાંગ વિશિષ્ટ ઓળખ કાર્ડ",
    department: "Department of Empowerment of Persons with Disabilities",
    ministry: "MSJE",
    category: "social",
    state: "all",
    description: "National database for PwDs to provide a unique ID and disability certificate for easy access to benefits.",
    descriptionHindi: "लाभों तक आसान पहुंच के लिए विशिष्ट आईडी और विकलांगता प्रमाण पत्र प्रदान करने के लिए दिव्यांगों के लिए राष्ट्रीय डेटाबेस।",
    benefitAmount: "Access to 30+ government schemes for PwDs",
    benefits: [
      "Single document for identity and disability proof across India",
      "Easier access to scholarships, assistive devices, and pensions",
      "Railway and bus fare concessions automatically linked",
      "Reservation in jobs and education verified via UDID"
    ],
    eligibility: {
      minAge: null, maxAge: null, gender: "all",
      incomeLimit: null, caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Must have 40% or more disability as certified by medical board"]
    },
    documents: [
      { name: "Disability Certificate (Old)", mandatory: false, purpose: "Conversion to UDID", howToGet: "Civil Hospital" },
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "Aadhaar center" },
      { name: "Passport Photo", mandatory: true, purpose: "For ID card", howToGet: "Photo studio" }
    ],
    howToApplySteps: [
      "Step 1: Visit swavlambancard.gov.in",
      "Step 2: Click 'Apply for Disability Certificate & UDID Card'",
      "Step 3: Fill personal and disability details",
      "Step 4: Select the government hospital for assessment",
      "Step 5: Visit the hospital on the scheduled date for medical checkup",
      "Step 6: ID card is mailed to your address after approval"
    ],
    alternativeApply: "Visit your district's Social Defense Office",
    officialLinks: {
      apply: "https://www.swavlambancard.gov.in",
      checkStatus: "https://www.swavlambancard.gov.in",
      officialWebsite: "https://www.swavlambancard.gov.in"
    },
    helpline: "011-24369027",
    processingTime: "30-60 days",
    commonMistakes: ["Uploading blurry photos or documents", "Not visiting the hospital for physical assessment"],
    deadline: null, isActive: true,
    tags: ["disability", "PwD", "UDID", "social welfare", "reservation"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },

  // ENVIRONMENT & ENERGY (10 Schemes)
  {
    id: "pm-surya-ghar-muft-bijli-new",
    name: "PM Surya Ghar: Muft Bijli Yojana",
    nameHindi: "पीएम सूर्य घर: मुफ्त बिजली योजना",
    nameGujarati: "PM સૂર્ય ઘર: મફત વીજળી યોજના",
    department: "Ministry of New and Renewable Energy",
    ministry: "MNRE",
    category: "social",
    state: "all",
    description: "Provides subsidy to households for installing rooftop solar panels to get up to 300 units of free electricity monthly.",
    descriptionHindi: "हर महीने 300 यूनिट तक मुफ्त बिजली पाने के लिए घरों में रूफटॉप सोलर पैनल लगाने के लिए सब्सिडी प्रदान करता है।",
    benefitAmount: "₹30,000 to ₹78,000 subsidy on solar panels",
    benefits: [
      "Up to 300 units of FREE electricity every month",
      "₹30,000 subsidy for 1kW system",
      "₹60,000 subsidy for 2kW system",
      "Max ₹78,000 subsidy for 3kW or higher system",
      "Low-interest loans available for remaining cost",
      "Earn money by selling excess solar power to DISCOM"
    ],
    eligibility: {
      minAge: 18, maxAge: null, gender: "all",
      incomeLimit: null, caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "Must own a house with a concrete roof",
        "Must have a valid electricity connection in own name",
        "Roof space must be shadow-free"
      ]
    },
    documents: [
      { name: "Recent Electricity Bill", mandatory: true, purpose: "Verify connection and consumer ID", howToGet: "From DISCOM" },
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "Aadhaar center" },
      { name: "Roof Ownership Proof", mandatory: true, purpose: "Prove construction site", howToGet: "Property tax bill or Sale deed" }
    ],
    howToApplySteps: [
      "Step 1: Visit pmsuryaghar.gov.in",
      "Step 2: Register with Consumer Number and Mobile",
      "Step 3: Apply for Rooftop Solar installation",
      "Step 4: Wait for feasibility approval from DISCOM",
      "Step 5: Get installation done by any of the registered vendors",
      "Step 6: Apply for net metering after installation",
      "Step 7: Subsidy is credited to bank account within 30 days of inspection"
    ],
    alternativeApply: "N/A — Apply via portal only",
    officialLinks: {
      apply: "https://pmsuryaghar.gov.in",
      checkStatus: "https://pmsuryaghar.gov.in",
      officialWebsite: "https://pmsuryaghar.gov.in"
    },
    helpline: "155333",
    processingTime: "30-45 days",
    commonMistakes: [
      "Installing solar panels from non-registered vendors — no subsidy",
      "Not having a shadow-free roof space"
    ],
    deadline: null, isActive: true,
    tags: ["solar", "rooftop", "free electricity", "subsidy", "green energy"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },
  {
    id: "fame-ii-electric-vehicles",
    name: "FAME-II (Electric Vehicle Subsidy)",
    nameHindi: "फेम-2 इलेक्ट्रिक वाहन योजना",
    nameGujarati: "FAME-II ઇલેક્ટ્રિક વ્હીકલ સબસિડી",
    department: "Department of Heavy Industry",
    ministry: "Ministry of Heavy Industries",
    category: "social",
    state: "all",
    description: "Provides financial incentives for the purchase of electric vehicles (2-wheelers and 3-wheelers) to promote green mobility.",
    descriptionHindi: "हरित गतिशीलता को बढ़ावा देने के लिए इलेक्ट्रिक वाहनों (2-पहिया और 3-पहिया) की खरीद के लिए वित्तीय प्रोत्साहन प्रदान करता है।",
    benefitAmount: "₹10,000/kWh subsidy on EV batteries (approx ₹15k-30k off)",
    benefits: [
      "Direct upfront reduction in price of EV (2W/3W)",
      "Exemption/Reduction in Road Tax and Registration fees in many states",
      "Income tax benefit on EV loan interest (u/s 80EEB)",
      "Much lower running cost compared to petrol/diesel"
    ],
    eligibility: {
      minAge: 18, maxAge: null, gender: "all",
      incomeLimit: null, caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Vehicle must be manufactured by a FAME-II certified OEM", "Applicable only on vehicles with Li-ion batteries and specific range"]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "Aadhaar center" },
      { name: "PAN Card", mandatory: true, purpose: "Vehicle registration", howToGet: "IT department" }
    ],
    howToApplySteps: [
      "Step 1: Visit an authorized Electric Vehicle dealer (Ola, Ather, TVS, etc.)",
      "Step 2: Choose a FAME-II compliant model",
      "Step 3: The subsidy amount is automatically deducted from the Ex-Showroom price",
      "Step 4: Sign the FAME-II undertaking provided by the dealer",
      "Step 5: Dealer handles the subsidy claim from the government"
    ],
    alternativeApply: "Check eligible models at heavyindustries.gov.in",
    officialLinks: {
      apply: "Available at authorized EV dealers",
      checkStatus: "Check invoice",
      officialWebsite: "https://heavyindustries.gov.in"
    },
    helpline: "011-23063633",
    processingTime: "Instant (at purchase)",
    commonMistakes: ["Buying a lead-acid battery EV — these are not eligible for FAME-II subsidy"],
    deadline: "Check portal for current phase end date", isActive: true,
    tags: ["EV", "electric bike", "subsidy", "green energy", "FAME"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },
  {
    id: "national-solar-mission-new",
    name: "National Solar Mission (JNSM)",
    nameHindi: "राष्ट्रीय सौर मिशन",
    nameGujarati: "રાષ્ટ્રીય સૌર મિશન",
    department: "Ministry of New and Renewable Energy",
    ministry: "MNRE",
    category: "social",
    state: "all",
    description: "Primary policy to promote solar energy growth in India through grid-connected and off-grid solar power systems.",
    descriptionHindi: "ग्रिड-कनेक्टेड और ऑफ-ग्रिड सौर ऊर्जा प्रणालियों के माध्यम से भारत में सौर ऊर्जा विकास को बढ़ावा देने के लिए प्राथमिक नीति।",
    benefitAmount: "Subsidies for solar lamps, solar water heaters",
    benefits: [
      "Subsidy for solar water heaters (30-60%)",
      "Grants for solar lighting in remote villages",
      "Support for solar pumps for agriculture (linked to KUSUM)",
      "Zero-interest loans for specific solar products"
    ],
    eligibility: {
      minAge: null, maxAge: null, gender: "all",
      incomeLimit: null, caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Available for households, NGOs, and hospitals"]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "Aadhaar center" },
      { name: "Property Documents", mandatory: true, purpose: "Verify installation site", howToGet: "Revenue department" }
    ],
    howToApplySteps: [
      "Step 1: Contact MNRE regional office or state renewable energy agency (e.g., GEDA in Gujarat)",
      "Step 2: Choose the solar product (heater/lamp/system)",
      "Step 3: Apply through the state nodal agency portal",
      "Step 4: Installation by approved vendor",
      "Step 5: Subsidy released after verification"
    ],
    alternativeApply: "Visit GEDA (Gujarat Energy Development Agency) for Gujarat specific solar aid",
    officialLinks: {
      apply: "https://mnre.gov.in",
      checkStatus: "https://mnre.gov.in",
      officialWebsite: "https://mnre.gov.in"
    },
    helpline: "1800-180-3333",
    processingTime: "60-90 days",
    commonMistakes: ["N/A"],
    deadline: null, isActive: true,
    tags: ["solar", "heater", "clean energy", "subsidy", "MNRE"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },
  {
    id: "swachh-bharat-mission-new",
    name: "Swachh Bharat Mission - Gramin (Toilet Subsidy)",
    nameHindi: "स्वच्छ भारत मिशन - ग्रामीण",
    nameGujarati: "સ્વચ્છ ભારત મિશન - ગ્રામીણ",
    department: "Department of Drinking Water and Sanitation",
    ministry: "Ministry of Jal Shakti",
    category: "social",
    state: "all",
    description: "Provides financial incentive to rural households for the construction of Individual Household Latrines (IHHL).",
    descriptionHindi: "व्यक्तिगत घरेलू शौचालयों (IHHL) के निर्माण के लिए ग्रामीण परिवारों को वित्तीय प्रोत्साहन प्रदान करता है।",
    benefitAmount: "₹12,000 subsidy for toilet construction",
    benefits: [
      "₹12,000 cash incentive for toilet construction",
      "Direct benefit transfer to bank account",
      "Includes technical support for twin-pit technology",
      "Helps make village Open Defecation Free (ODF)"
    ],
    eligibility: {
      minAge: 18, maxAge: null, gender: "all",
      incomeLimit: null, caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "Must be a rural household without a toilet",
        "Applicable for BPL, SC/ST, Small/Marginal farmers, PwD, and Women-headed households"
      ]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "Aadhaar center" },
      { name: "Bank Passbook", mandatory: true, purpose: "Subsidy transfer", howToGet: "Bank" },
      { name: "Photo of Construction Site", mandatory: true, purpose: "Before and after proof", howToGet: "Self-photo" }
    ],
    howToApplySteps: [
      "Step 1: Visit sbm.gov.in/sbm_report/home.aspx or contact Gram Panchayat",
      "Step 2: Submit application with Aadhaar and bank details",
      "Step 3: Gram Panchayat verifies the need",
      "Step 4: Start construction of the toilet",
      "Step 5: Geotagged photo of completed toilet is uploaded",
      "Step 6: ₹12,000 released in installments or single payment"
    ],
    alternativeApply: "Contact Swachh Bharat Prerak in your village",
    officialLinks: {
      apply: "https://swachhbharatmission.ddws.gov.in",
      checkStatus: "https://sbm.gov.in",
      officialWebsite: "https://swachhbharatmission.ddws.gov.in"
    },
    helpline: "1800-11-0707",
    processingTime: "30 days",
    commonMistakes: ["Applying if you already have a toilet constructed previously under govt scheme"],
    deadline: null, isActive: true,
    tags: ["toilet", "sanitation", "rural", "cleanliness", "SBM", "subsidy"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },
  {
    id: "pm-pranam-fertilizer",
    name: "PM-PRANAM (Alternative Fertilizers)",
    nameHindi: "पीएम-प्रणाम योजना",
    nameGujarati: "PM-PRANAM યોજના",
    department: "Department of Fertilizers",
    ministry: "Ministry of Chemicals and Fertilizers",
    category: "agriculture",
    state: "all",
    description: "Aims to promote the use of alternative fertilizers and balanced use of chemical fertilizers to reduce subsidy burden.",
    descriptionHindi: "सब्सिडी के बोझ को कम करने के लिए वैकल्पिक उर्वरकों के उपयोग और रासायनिक उर्वरकों के संतुलित उपयोग को बढ़ावा देना है।",
    benefitAmount: "Grants for using bio-fertilizers and organic manure",
    benefits: [
      "Financial assistance for adopting bio-fertilizers",
      "Promotion of organic manure usage",
      "Soil health improvement by reducing chemical load",
      "State-level grants for sustainable agriculture infrastructure"
    ],
    eligibility: {
      minAge: null, maxAge: null, gender: "all",
      incomeLimit: null, caste: ["all"],
      occupation: ["farmer"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Available to farmers transitioning to organic or balanced fertilizer use"]
    },
    documents: [
      { name: "Soil Health Card", mandatory: true, purpose: "Verify baseline soil status", howToGet: "From local agriculture office" },
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "Aadhaar center" }
    ],
    howToApplySteps: [
      "Step 1: Contact District Agriculture Office or nearest fertilizer co-operative",
      "Step 2: Attend awareness camps on alternative fertilizers",
      "Step 3: Purchase bio-fertilizers/organic manure from approved outlets",
      "Step 4: Claim reimbursement or incentive as per state guidelines"
    ],
    alternativeApply: "Through State Agriculture Portal",
    officialLinks: {
      apply: "https://fert.nic.in",
      checkStatus: "https://fert.nic.in",
      officialWebsite: "https://fert.nic.in"
    },
    helpline: "011-23381275",
    processingTime: "Season-based",
    commonMistakes: ["N/A"],
    deadline: null, isActive: true,
    tags: ["fertilizer", "organic", "bio-fertilizer", "sustainable", "PRANAM"],
    viewCount: 0, lastUpdated: "2026-01-01"
  }
];
