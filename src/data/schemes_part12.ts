import { Scheme } from "@/types";

export const schemesPart12: Scheme[] = [
  // HEALTH (Unique schemes not covered in parts 1-7)
  {
    id: "pm-suraksha-bima",
    name: "Pradhan Mantri Suraksha Bima Yojana (PMSBY)",
    nameHindi: "प्रधानमंत्री सुरक्षा बीमा योजना",
    nameGujarati: "પ્રધાનમંત્રી સુરક્ષા વીમા યોજના",
    department: "Department of Financial Services",
    ministry: "Ministry of Finance",
    category: "insurance",
    state: "all",
    description: "Accident insurance scheme offering a cover of ₹2 lakh for accidental death or total permanent disability at a very low premium.",
    descriptionHindi: "बहुत कम प्रीमियम पर आकस्मिक मृत्यु या स्थायी पूर्ण विकलांगता के लिए ₹2 लाख का कवर देने वाली दुर्घटना बीमा योजना।",
    benefitAmount: "₹2 lakh for accidental death",
    benefits: [
      "₹2,00,000 for accidental death or total permanent disability",
      "₹1,00,000 for partial permanent disability",
      "Extremely low premium: only ₹20 per year",
      "Auto-debit facility from bank account"
    ],
    eligibility: {
      minAge: 18, maxAge: 70, gender: "all",
      incomeLimit: null, caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Must have a savings bank account", "Give consent for auto-debit of ₹20 every year"]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity and KYC", howToGet: "Aadhaar center" },
      { name: "Bank Passbook", mandatory: true, purpose: "Link account for premium", howToGet: "From your bank" }
    ],
    howToApplySteps: [
      "Step 1: Visit your bank branch or use Net Banking/Mobile Banking",
      "Step 2: Fill the PMSBY enrollment form",
      "Step 3: Provide Aadhaar and link it to the bank account",
      "Step 4: Enable 'Auto-Debit' for the ₹20 annual premium (deducted in June every year)",
      "Step 5: Keep the acknowledgment receipt safely"
    ],
    alternativeApply: "Most banks allow activation via a simple SMS from registered mobile",
    officialLinks: {
      apply: "Through your bank portal",
      checkStatus: "Check bank statement for ₹20 deduction",
      officialWebsite: "https://jansuraksha.gov.in"
    },
    helpline: "1800-110-001 (National)",
    processingTime: "Instant activation",
    commonMistakes: [
      "Not maintaining ₹20 balance in June leading to policy lapse",
      "Opening multiple policies in different banks (only one is valid)"
    ],
    deadline: "May 31st every year for renewal", isActive: true,
    tags: ["insurance", "accident", "death cover", "low premium", "PMSBY"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },
  {
    id: "pm-jeevan-jyoti",
    name: "Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)",
    nameHindi: "प्रधानमंत्री जीवन ज्योति बीमा योजना",
    nameGujarati: "પ્રધાનમંત્રી જીવન જ્યોતિ વીમા યોજના",
    department: "Department of Financial Services",
    ministry: "Ministry of Finance",
    category: "insurance",
    state: "all",
    description: "Life insurance scheme providing a cover of ₹2 lakh for death due to any reason to people in the age group of 18 to 50 years.",
    descriptionHindi: "18 से 50 वर्ष की आयु के लोगों को किसी भी कारण से मृत्यु के लिए ₹2 लाख का कवर प्रदान करने वाली जीवन बीमा योजना।",
    benefitAmount: "₹2 lakh life insurance cover",
    benefits: [
      "₹2,00,000 life insurance cover for death due to ANY reason",
      "Low premium: ₹436 per year",
      "No medical examination required for enrollment",
      "Automatic renewal via auto-debit from bank account"
    ],
    eligibility: {
      minAge: 18, maxAge: 50, gender: "all",
      incomeLimit: null, caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Must have a savings bank account", "Risk cover starts after 30 days of enrollment (lien period)"]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "Aadhaar center" },
      { name: "Bank Passbook", mandatory: true, purpose: "For premium payment", howToGet: "Bank" }
    ],
    howToApplySteps: [
      "Step 1: Contact your bank where you have a savings account",
      "Step 2: Submit the PMJJBY enrollment form",
      "Step 3: Premium of ₹436 will be auto-debited annually from the account",
      "Step 4: Confirm the nomination details for the policy"
    ],
    alternativeApply: "Activate via Bank's Net Banking app",
    officialLinks: {
      apply: "Through Bank",
      checkStatus: "Bank statement",
      officialWebsite: "https://jansuraksha.gov.in"
    },
    helpline: "1800-180-1111",
    processingTime: "Lien period of 30 days",
    commonMistakes: ["Applying after 50 years of age — not eligible", "Multiple policies — only one payout allowed"],
    deadline: "May 31st for renewal", isActive: true,
    tags: ["life insurance", "death cover", "PMJJBY", "financial security"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },
  {
    id: "janani-suraksha-new",
    name: "Janani Suraksha Yojana (JSY)",
    nameHindi: "जननी सुरक्षा योजना",
    nameGujarati: "જનની સુરક્ષા યોજના",
    department: "National Health Mission",
    ministry: "MoHFW",
    category: "health",
    state: "all",
    description: "Maternity benefit scheme aimed at reducing maternal and neonatal mortality by promoting institutional delivery among poor pregnant women.",
    descriptionHindi: "गरीब गर्भवती महिलाओं के बीच संस्थागत प्रसव को बढ़ावा देकर मातृ और नवजात मृत्यु दर को कम करने के उद्देश्य से मातृत्व लाभ योजना।",
    benefitAmount: "₹1,400 (Rural) / ₹1,000 (Urban) for delivery",
    benefits: [
      "Cash assistance for delivery: ₹1,400 (Rural) or ₹1,000 (Urban)",
      "Free transport to hospital via 108/102 ambulance",
      "Asha worker incentive for assisting the delivery",
      "Covers medicines and food during hospital stay"
    ],
    eligibility: {
      minAge: 19, maxAge: null, gender: "female",
      incomeLimit: null, caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["BPL card holder or SC/ST category", "Must deliver in a government or accredited private hospital"]
    },
    documents: [
      { name: "BPL Card / Ration Card", mandatory: true, purpose: "Verify economic status", howToGet: "Food department" },
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "Aadhaar center" },
      { name: "MCP Card (Mother-Child Protection)", mandatory: true, purpose: "Verify pregnancy and ANC visits", howToGet: "From local ASHA worker or PHC" },
      { name: "Delivery Certificate", mandatory: true, purpose: "Proof of hospital delivery", howToGet: "From the hospital" }
    ],
    howToApplySteps: [
      "Step 1: Register pregnancy with local ASHA worker or ANM",
      "Step 2: Get the MCP card and complete all ANC checkups",
      "Step 3: Opt for institutional delivery in a government hospital",
      "Step 4: Post-delivery, the hospital staff processes the JSY payment",
      "Step 5: Amount is transferred via DBT to the mother's bank account"
    ],
    alternativeApply: "Visit nearest PHC (Primary Health Center)",
    officialLinks: {
      apply: "Register via ASHA worker",
      checkStatus: "Check bank account after delivery",
      officialWebsite: "https://nhm.gov.in"
    },
    helpline: "1050",
    processingTime: "Within 7 days of delivery",
    commonMistakes: ["Home delivery — no cash benefit provided", "Bank account not active"],
    deadline: null, isActive: true,
    tags: ["pregnancy", "maternity", "women", "hospital delivery", "JSY"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },
  {
    id: "mission-indradhanush-new",
    name: "Mission Indradhanush (Universal Immunization)",
    nameHindi: "मिशन इंद्रधनुष",
    nameGujarati: "મિશન ઇન્દ્રધનુષ",
    department: "National Health Mission",
    ministry: "MoHFW",
    category: "health",
    state: "all",
    description: "Immunization program to ensure full coverage for children up to 2 years and pregnant women with all available vaccines.",
    descriptionHindi: "2 साल तक के बच्चों और गर्भवती महिलाओं के लिए सभी उपलब्ध टीकों के साथ पूर्ण कवरेज सुनिश्चित करने के लिए टीकाकरण कार्यक्रम।",
    benefitAmount: "Free vaccination for 12 life-threatening diseases",
    benefits: [
      "Free vaccines against 12 diseases (TB, Polio, Measles, Hepatitis B, etc.)",
      "Includes Japanese Encephalitis and Rotavirus vaccines",
      "Regular immunization cards provided to track growth",
      "Home-visit tracking by ASHA workers for missed doses"
    ],
    eligibility: {
      minAge: 0, maxAge: 2, gender: "all",
      incomeLimit: null, caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Children aged 0-2 years", "All pregnant women"]
    },
    documents: [
      { name: "Immunization Card / MCP Card", mandatory: true, purpose: "Record vaccinations", howToGet: "From PHC or ASHA worker" },
      { name: "Aadhaar Card of Parent", mandatory: true, purpose: "Identity", howToGet: "Aadhaar center" }
    ],
    howToApplySteps: [
      "Step 1: Visit the nearest government dispensary or PHC",
      "Step 2: Carry the child's birth certificate or MCP card",
      "Step 3: Register for the vaccination drive in your area",
      "Step 4: Vaccines are administered as per the national schedule",
      "Step 5: Ensure the card is updated with the date of next dose"
    ],
    alternativeApply: "Wait for the Mission Indradhanush special drive camps in your village",
    officialLinks: {
      apply: "Walk-in to any PHC",
      checkStatus: "Check Immunization card",
      officialWebsite: "https://nhm.gov.in"
    },
    helpline: "1075 (COVID/Immunization)",
    processingTime: "Immediate service",
    commonMistakes: ["Missing the schedule — child remains vulnerable to diseases", "Losing the immunization card"],
    deadline: null, isActive: true,
    tags: ["vaccination", "child health", "pregnant women", "free health", "immunization"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },
  {
    id: "pm-ayushman-health-infra",
    name: "PM Ayushman Bharat Health Infrastructure Mission (PM-ABHIM)",
    nameHindi: "पीएम आयुष्मान भारत स्वास्थ्य अवसंरचना मिशन",
    nameGujarati: "PM આયુષ્માન ભારત હેલ્થ ઇન્ફ્રાસ્ટ્રક્ચર મિશન",
    department: "National Health Mission",
    ministry: "MoHFW",
    category: "health",
    state: "all",
    description: "Strengthens the health infrastructure at the grassroots level, including labs and critical care blocks in districts.",
    descriptionHindi: "जमीनी स्तर पर स्वास्थ्य बुनियादी ढांचे को मजबूत करता है, जिसमें जिलों में लैब और क्रिटिकल केयर ब्लॉक शामिल हैं।",
    benefitAmount: "Free advanced diagnostic services in district labs",
    benefits: [
      "Access to advanced diagnostic labs in every district",
      "Critical care blocks in government hospitals",
      "Free testing for many infectious and non-communicable diseases",
      "Strengthened surveillance of disease outbreaks"
    ],
    eligibility: {
      minAge: null, maxAge: null, gender: "all",
      incomeLimit: null, caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Available to all citizens using government health facilities"]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Patient registration", howToGet: "Aadhaar center" }
    ],
    howToApplySteps: [
      "Step 1: Visit your District Hospital or Government Medical College",
      "Step 2: Register at the OPD counter",
      "Step 3: Doctor will prescribe tests/admit to critical care if needed",
      "Step 4: Avail services free of cost under the mission infrastructure"
    ],
    alternativeApply: "N/A — Public Infrastructure Scheme",
    officialLinks: {
      apply: "N/A",
      checkStatus: "N/A",
      officialWebsite: "https://nhm.gov.in"
    },
    helpline: "14555",
    processingTime: "Immediate medical care",
    commonMistakes: ["N/A"],
    deadline: null, isActive: true,
    tags: ["health", "infrastructure", "hospital", "labs", "medical care"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },
  {
    id: "national-health-mission-new",
    name: "National Health Mission (NHM)",
    nameHindi: "राष्ट्रीय स्वास्थ्य मिशन",
    nameGujarati: "રાષ્ટ્રીય સ્વાસ્થ્ય મિશન",
    department: "National Health Mission",
    ministry: "MoHFW",
    category: "health",
    state: "all",
    description: "Umbrella scheme for universal access to equitable, affordable, and quality healthcare services.",
    descriptionHindi: "न्यायसंगत, सस्ती और गुणवत्तापूर्ण स्वास्थ्य देखभाल सेवाओं तक सार्वभौमिक पहुंच के लिए छत्र योजना।",
    benefitAmount: "Free medicines and diagnostics in all government hospitals",
    benefits: [
      "Free essential medicines (EDL list)",
      "Free diagnostic services (radiology, pathology)",
      "Free blood transfusion for eligible patients",
      "Subsidized surgery for specific conditions",
      "Mobile Medical Units for remote villages"
    ],
    eligibility: {
      minAge: null, maxAge: null, gender: "all",
      incomeLimit: null, caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Priority for BPL, SC/ST, and rural populations"]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: false, purpose: "Registration", howToGet: "Aadhaar center" },
      { name: "Ration Card", mandatory: false, purpose: "BPL verification", howToGet: "Food department" }
    ],
    howToApplySteps: [
      "Step 1: Visit any government PHC, CHC, or District Hospital",
      "Step 2: Register at the counter",
      "Step 3: Consult the doctor",
      "Step 4: Get prescribed medicines and tests for free at the hospital counters"
    ],
    alternativeApply: "N/A",
    officialLinks: {
      apply: "Walk-in",
      checkStatus: "N/A",
      officialWebsite: "https://nhm.gov.in"
    },
    helpline: "104 (Health Helpline)",
    processingTime: "Immediate",
    commonMistakes: ["N/A"],
    deadline: null, isActive: true,
    tags: ["health", "free medicine", "hospital", "quality care"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },
  {
    id: "jan-aushadhi-new",
    name: "PM Bhartiya Janaushadhi Pariyojana",
    nameHindi: "पीएम भारतीय जन औषधि परियोजना",
    nameGujarati: "PM ભારતીય જન ઔષધિ પરિયોજના",
    department: "Department of Pharmaceuticals",
    ministry: "Ministry of Chemicals and Fertilizers",
    category: "health",
    state: "all",
    description: "Provides quality generic medicines at affordable prices to all through special outlets known as Jan Aushadhi Kendras.",
    descriptionHindi: "जन औषधि केंद्रों के रूप में ज्ञात विशेष दुकानों के माध्यम से सभी को सस्ती कीमतों पर गुणवत्तापूर्ण जेनेरिक दवाएं प्रदान करता है।",
    benefitAmount: "Medicines at 50-90% lower cost than branded ones",
    benefits: [
      "Generic medicines at 50% to 90% discount compared to branded ones",
      "Quality tested by NABL accredited labs",
      "Wide range of medicines, surgical items, and sanitary pads",
      "Available for ALL citizens, no income limit"
    ],
    eligibility: {
      minAge: null, maxAge: null, gender: "all",
      incomeLimit: null, caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Open to everyone"]
    },
    documents: [
      { name: "Doctor Prescription", mandatory: true, purpose: "To buy scheduled medicines", howToGet: "From any registered medical practitioner" }
    ],
    howToApplySteps: [
      "Step 1: Locate the nearest Jan Aushadhi Kendra using the 'Janaushadhi Sugam' app",
      "Step 2: Take your doctor's prescription to the store",
      "Step 3: Ask for the generic equivalent of the prescribed medicine",
      "Step 4: Purchase the medicine at a highly discounted price"
    ],
    alternativeApply: "N/A",
    officialLinks: {
      apply: "Locate store via app",
      checkStatus: "Check medicine availability on app",
      officialWebsite: "http://janaushadhi.gov.in"
    },
    helpline: "1800-180-8080",
    processingTime: "Immediate purchase",
    commonMistakes: ["Buying branded medicines when cheap generic alternatives are available at Jan Aushadhi"],
    deadline: null, isActive: true,
    tags: ["medicines", "generic", "affordable", "health store", "Jan Aushadhi"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },
  {
    id: "rare-disease-policy",
    name: "National Policy for Rare Diseases",
    nameHindi: "दुर्लभ रोगों के लिए राष्ट्रीय नीति",
    nameGujarati: "દુર્લભ રોગો માટે રાષ્ટ્રીય નીતિ",
    department: "National Health Mission",
    ministry: "MoHFW",
    category: "health",
    state: "all",
    description: "Financial support for treatment of patients suffering from rare diseases.",
    descriptionHindi: "दुर्लभ रोगों से पीड़ित रोगियों के उपचार के लिए वित्तीय सहायता।",
    benefitAmount: "Up to ₹50 lakh for treatment of rare diseases",
    benefits: [
      "One-time financial support up to ₹50 lakh for treatment",
      "Available at any of the Center of Excellence (CoE) hospitals",
      "Covers diseases like Gaucher's disease, Hurler Syndrome, etc.",
      "Crowdfunding platform support for ongoing treatment"
    ],
    eligibility: {
      minAge: null, maxAge: null, gender: "all",
      incomeLimit: null, caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Must be suffering from a disease listed in the policy", "Treatment must be at a designated CoE hospital"]
    },
    documents: [
      { name: "Medical Diagnosis Report", mandatory: true, purpose: "Prove rare disease", howToGet: "From CoE hospital specialists" },
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "Aadhaar center" },
      { name: "BPL/Ration Card", mandatory: true, purpose: "Verify economic status", howToGet: "Food department" }
    ],
    howToApplySteps: [
      "Step 1: Get diagnosed at a designated Center of Excellence (CoE) like AIIMS",
      "Step 2: The CoE hospital committee reviews the case",
      "Step 3: Hospital submits the application to the Ministry for funds",
      "Step 4: Funds are released directly to the hospital for the patient's treatment"
    ],
    alternativeApply: "N/A",
    officialLinks: {
      apply: "Through CoE Hospital",
      checkStatus: "Contact CoE Hospital",
      officialWebsite: "https://rarediseases.mohfw.gov.in"
    },
    helpline: "011-23061203",
    processingTime: "60-90 days for fund release",
    commonMistakes: ["Applying from non-CoE hospitals — funds not available"],
    deadline: null, isActive: true,
    tags: ["rare disease", "treatment aid", "financial support", "AIIMS", "specialized care"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },
  {
    id: "national-organ-transplant",
    name: "National Organ Transplant Program",
    nameHindi: "राष्ट्रीय अंग प्रत्यारोपण कार्यक्रम",
    nameGujarati: "રાષ્ટ્રીય અંગ પ્રત્યારોપણ કાર્યક્રમ",
    department: "NOTTO (National Organ & Tissue Transplant Organization)",
    ministry: "MoHFW",
    category: "health",
    state: "all",
    description: "Supports poor patients for organ transplantation and provides free immunosuppressant drugs.",
    descriptionHindi: "अंग प्रत्यारोपण के लिए गरीब मरीजों का समर्थन करता है और मुफ्त इम्यूनोसप्रेसेन्ट दवाएं प्रदान करता है।",
    benefitAmount: "Free post-transplant medicines + transplant aid",
    benefits: [
      "Free immunosuppressant drugs for 1 year post-transplant for poor patients",
      "Transparent waiting list for organs (Kidney, Liver, etc.)",
      "Financial aid for transplant surgery in government hospitals",
      "Registry for organ donors"
    ],
    eligibility: {
      minAge: null, maxAge: null, gender: "all",
      incomeLimit: null, caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["BPL patients are prioritized for free medicines", "Registration with NOTTO is mandatory"]
    },
    documents: [
      { name: "Medical Fitness for Transplant", mandatory: true, purpose: "Verify medical need", howToGet: "From transplant surgeon" },
      { name: "NOTTO Registration Number", mandatory: true, purpose: "Waiting list ID", howToGet: "Register at notto.gov.in or via hospital" },
      { name: "BPL Card", mandatory: true, purpose: "For free medicines", howToGet: "Food department" }
    ],
    howToApplySteps: [
      "Step 1: Register as a recipient on notto.gov.in through your hospital",
      "Step 2: Get a NOTTO ID",
      "Step 3: When an organ is available, the transplant is performed at a govt/accredited hospital",
      "Step 4: Apply for free post-transplant medicines at the hospital's pharmacy with BPL card"
    ],
    alternativeApply: "Contact the transplant coordinator at AIIMS or major civil hospitals",
    officialLinks: {
      apply: "https://notto.gov.in",
      checkStatus: "https://notto.gov.in",
      officialWebsite: "https://notto.gov.in"
    },
    helpline: "1800-11-4770 (Organ Donation)",
    processingTime: "Based on organ availability",
    commonMistakes: ["Not registering on NOTTO — no legal organ can be allocated"],
    deadline: null, isActive: true,
    tags: ["transplant", "organ donor", "kidney", "liver", "free medicines", "NOTTO"],
    viewCount: 0, lastUpdated: "2026-01-01"
  }
];
