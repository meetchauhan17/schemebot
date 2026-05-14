import { Scheme } from "@/types";

export const schemesPart2: Scheme[] = [
  // EDUCATION (26-32)
  {
    id: "edu-026",
    name: "Samagra Shiksha Abhiyan",
    nameHindi: "समग्र शिक्षा अभियान",
    nameGujarati: "સમગ્ર શિક્ષા અભિયાન",
    department: "School Education",
    ministry: "Ministry of Education",
    category: "education",
    state: "all",
    description: "An overarching programme for the school education sector extending from pre-school to class 12.",
    descriptionHindi: "प्री-स्कूल से 12वीं कक्षा तक स्कूली शिक्षा क्षेत्र के लिए एक व्यापक कार्यक्रम।",
    benefits: ["Free textbooks and uniforms", "Transport allowance", "Girls' hostels (KGBV)"],
    benefitAmount: "Varies (In-kind benefits)",
    eligibility: {
      minAge: 4,
      maxAge: 18,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["student"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Studying in Govt/Govt-aided schools"]
    },
    documents: [],
    howToApplySteps: [
      "Automatically applied upon admission to Govt school",
      "For KGBV hostels, apply directly at the hostel/school office"
    ],
    alternativeApply: "N/A",
    officialLinks: {
      apply: "N/A",
      checkStatus: "N/A",
      officialWebsite: "https://samagra.education.gov.in/"
    },
    helpline: "Contact School Principal",
    processingTime: "Immediate",
    commonMistakes: [],
    deadline: null,
    isActive: true,
    tags: ["school", "education", "books", "uniform"],
    viewCount: 150000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "edu-027",
    name: "NMMS Scholarship",
    nameHindi: "राष्ट्रीय साधन-सह-योग्यता छात्रवृत्ति",
    nameGujarati: "NMMS શિષ્યવૃત્તિ",
    department: "School Education",
    ministry: "Ministry of Education",
    category: "education",
    state: "all",
    description: "National Means-cum-Merit Scholarship for meritorious students of economically weaker sections to arrest drop-out at class 8.",
    descriptionHindi: "कक्षा 8 के बाद पढ़ाई न छोड़ने के लिए आर्थिक रूप से कमजोर मेधावी छात्रों को छात्रवृत्ति।",
    benefits: ["₹12,000 per annum (₹1,000 per month) for classes 9 to 12"],
    benefitAmount: "₹12,000/year",
    eligibility: {
      minAge: 13,
      maxAge: 18,
      gender: "all",
      incomeLimit: 350000,
      caste: ["all"],
      occupation: ["student"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Must pass NMMS exam in Class 8", "Studying in Govt/Aided school", "Minimum 55% in Class 7"]
    },
    documents: [
      { name: "Income Certificate", mandatory: true, purpose: "Eligibility", howToGet: "Tehsildar" },
      { name: "Aadhaar", mandatory: true, purpose: "ID", howToGet: "UIDAI" }
    ],
    howToApplySteps: [
      "Register for NMMS Exam through school in Class 8",
      "Pass the exam to get selected in State quota",
      "Apply on NSP Portal (scholarships.gov.in)",
      "Renew every year in classes 10, 11, 12"
    ],
    alternativeApply: "N/A",
    officialLinks: {
      apply: "https://scholarships.gov.in/",
      checkStatus: "https://scholarships.gov.in/",
      officialWebsite: "https://dsel.education.gov.in/scheme/nmmss"
    },
    helpline: "0120-6619540",
    processingTime: "6 Months",
    commonMistakes: ["Failing to renew on NSP portal every year"],
    deadline: "October",
    isActive: true,
    tags: ["scholarship", "school", "merit"],
    viewCount: 600000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "edu-028",
    name: "Inspire Scholarship",
    nameHindi: "इंस्पायर स्कॉलरशिप",
    nameGujarati: "ઇન્સ્પાયર શિષ્યવૃત્તિ",
    department: "Science & Technology",
    ministry: "Ministry of Science & Technology",
    category: "education",
    state: "all",
    description: "Scholarship for Higher Education (SHE) to attract talent to science.",
    descriptionHindi: "विज्ञान में प्रतिभा को आकर्षित करने के लिए छात्रवृत्ति।",
    benefits: ["₹80,000 per year for BSc/MSc (₹60k cash + ₹20k summer project)"],
    benefitAmount: "₹80,000/year",
    eligibility: {
      minAge: 17,
      maxAge: 22,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["student"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Top 1% in Class 12 board", "Pursuing Basic/Natural Sciences"]
    },
    documents: [
      { name: "Eligibility Note", mandatory: true, purpose: "Top 1% proof", howToGet: "Board" },
      { name: "Endorsement Form", mandatory: true, purpose: "College admission", howToGet: "College Principal" }
    ],
    howToApplySteps: [
      "Get Eligibility Note from 12th Board",
      "Take admission in BSc/Int. MSc",
      "Register at online-inspire.gov.in",
      "Submit application and Endorsement form"
    ],
    alternativeApply: "N/A",
    officialLinks: {
      apply: "https://online-inspire.gov.in/",
      checkStatus: "https://online-inspire.gov.in/",
      officialWebsite: "https://online-inspire.gov.in/"
    },
    helpline: "0120-4619999",
    processingTime: "6-8 Months",
    commonMistakes: ["Pursuing Engineering/Medical (not eligible)"],
    deadline: "December",
    isActive: true,
    tags: ["science", "scholarship", "college"],
    viewCount: 200000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "edu-029",
    name: "Pragati Scholarship",
    nameHindi: "प्रगति छात्रवृत्ति",
    nameGujarati: "પ્રગતિ શિષ્યવૃત્તિ",
    department: "AICTE",
    ministry: "Ministry of Education",
    category: "women",
    state: "all",
    description: "Scholarship for Girls pursuing Technical Education (Degree/Diploma).",
    descriptionHindi: "तकनीकी शिक्षा प्राप्त करने वाली लड़कियों के लिए छात्रवृत्ति।",
    benefits: ["₹50,000 per annum for every year of study"],
    benefitAmount: "₹50,000/year",
    eligibility: {
      minAge: 16,
      maxAge: 25,
      gender: "female",
      incomeLimit: 800000,
      caste: ["all"],
      occupation: ["student"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Admitted to AICTE approved institution", "Max 2 girls per family"]
    },
    documents: [
      { name: "Income Certificate", mandatory: true, purpose: "Eligibility", howToGet: "Tehsildar" },
      { name: "10th/12th Marksheet", mandatory: true, purpose: "Merit", howToGet: "Board" }
    ],
    howToApplySteps: [
      "Visit NSP Portal (scholarships.gov.in)",
      "Register and login",
      "Select AICTE Pragati Scheme",
      "Upload documents and submit"
    ],
    alternativeApply: "N/A",
    officialLinks: {
      apply: "https://scholarships.gov.in/",
      checkStatus: "https://scholarships.gov.in/",
      officialWebsite: "https://www.aicte-india.org/schemes/students-development-schemes"
    },
    helpline: "011-29581000",
    processingTime: "3-4 Months",
    commonMistakes: ["Applying for non-AICTE college"],
    deadline: "November",
    isActive: true,
    tags: ["girls", "technical", "scholarship"],
    viewCount: 300000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "edu-030",
    name: "Saksham Scholarship",
    nameHindi: "सक्षम छात्रवृत्ति",
    nameGujarati: "સક્ષમ શિષ્યવૃત્તિ",
    department: "AICTE",
    ministry: "Ministry of Education",
    category: "education",
    state: "all",
    description: "Scholarship for Specially-abled students to pursue technical education.",
    descriptionHindi: "दिव्यांग छात्रों को तकनीकी शिक्षा के लिए छात्रवृत्ति।",
    benefits: ["₹50,000 per annum for every year of study"],
    benefitAmount: "₹50,000/year",
    eligibility: {
      minAge: 16,
      maxAge: 30,
      gender: "all",
      incomeLimit: 800000,
      caste: ["pwd"],
      occupation: ["student"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Disability not less than 40%", "Admitted to AICTE college"]
    },
    documents: [
      { name: "Disability Certificate", mandatory: true, purpose: "Eligibility", howToGet: "CMO/UDID" },
      { name: "Income Certificate", mandatory: true, purpose: "Eligibility", howToGet: "Tehsildar" }
    ],
    howToApplySteps: [
      "Visit NSP Portal",
      "Register under AICTE Saksham Scheme",
      "Upload UDID and admission proof",
      "Submit for verification"
    ],
    alternativeApply: "N/A",
    officialLinks: {
      apply: "https://scholarships.gov.in/",
      checkStatus: "https://scholarships.gov.in/",
      officialWebsite: "https://www.aicte-india.org/"
    },
    helpline: "011-29581000",
    processingTime: "4 Months",
    commonMistakes: ["UDID certificate not uploaded"],
    deadline: "November",
    isActive: true,
    tags: ["pwd", "scholarship", "technical"],
    viewCount: 150000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "edu-031",
    name: "PM USHA",
    nameHindi: "पीएम-उषा (उच्चतर शिक्षा अभियान)",
    nameGujarati: "પીએમ-ઉષા",
    department: "Higher Education",
    ministry: "Ministry of Education",
    category: "education",
    state: "all",
    description: "Strategic funding to eligible state higher educational institutions.",
    descriptionHindi: "राज्य उच्च शिक्षण संस्थानों को वित्तीय सहायता।",
    benefits: ["Upgraded college infrastructure", "Better labs and smart classrooms"],
    benefitAmount: "Infrastructure",
    eligibility: {
      minAge: null,
      maxAge: null,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["student"],
      states: ["all"],
      familySize: null,
      additionalCriteria: []
    },
    documents: [],
    howToApplySteps: [
      "Students don't apply directly. They benefit from upgraded infrastructure at Govt universities."
    ],
    alternativeApply: "N/A",
    officialLinks: {
      apply: "N/A",
      checkStatus: "N/A",
      officialWebsite: "https://pmusha.education.gov.in/"
    },
    helpline: "N/A",
    processingTime: "N/A",
    commonMistakes: [],
    deadline: null,
    isActive: true,
    tags: ["college", "infrastructure", "university"],
    viewCount: 50000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "edu-032",
    name: "National Means Cum Merit Scholarship",
    nameHindi: "राष्ट्रीय साधन-सह-योग्यता",
    nameGujarati: "રાષ્ટ્રીય સાધન-સહ-યોગ્યતા",
    department: "School Education",
    ministry: "Ministry of Education",
    category: "education",
    state: "all",
    description: "Financial assistance to meritorious students from low income families.",
    descriptionHindi: "कम आय वाले मेधावी छात्रों को वित्तीय सहायता।",
    benefits: ["₹12,000 per year"],
    benefitAmount: "₹12,000/year",
    eligibility: {
      minAge: 13,
      maxAge: 18,
      gender: "all",
      incomeLimit: 350000,
      caste: ["all"],
      occupation: ["student"],
      states: ["all"],
      familySize: null,
      additionalCriteria: []
    },
    documents: [
      { name: "Income Certificate", mandatory: true, purpose: "Eligibility", howToGet: "Tehsildar" }
    ],
    howToApplySteps: [
      "Apply via school headmaster for NMMS exam",
      "After passing, register on NSP portal"
    ],
    alternativeApply: "N/A",
    officialLinks: {
      apply: "https://scholarships.gov.in/",
      checkStatus: "https://scholarships.gov.in/",
      officialWebsite: "https://scholarships.gov.in/"
    },
    helpline: "0120-6619540",
    processingTime: "6 Months",
    commonMistakes: ["Not renewing on NSP every year"],
    deadline: "Oct",
    isActive: true,
    tags: ["scholarship", "merit", "school"],
    viewCount: 500000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },

  // WOMEN & CHILD (33-42)
  {
    id: "wcd-033",
    name: "Beti Bachao Beti Padhao",
    nameHindi: "बेटी बचाओ बेटी पढ़ाओ",
    nameGujarati: "બેટી બચાવો બેટી પઢાવો",
    department: "WCD",
    ministry: "Ministry of WCD",
    category: "women",
    state: "all",
    description: "Campaign to address the declining Child Sex Ratio and empower girls.",
    descriptionHindi: "बालिकाओं को बचाने और पढ़ाने का अभियान।",
    benefits: ["Awareness and enforcement of PC&PNDT Act", "Focus on girls' education and health"],
    benefitAmount: "Awareness & Policy",
    eligibility: {
      minAge: 0,
      maxAge: 18,
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
      "This is a national campaign. Linked benefits are provided via Sukanya Samriddhi and school scholarships."
    ],
    alternativeApply: "N/A",
    officialLinks: {
      apply: "N/A",
      checkStatus: "N/A",
      officialWebsite: "https://wcd.nic.in/bbbp"
    },
    helpline: "1098 (Childline)",
    processingTime: "N/A",
    commonMistakes: [],
    deadline: null,
    isActive: true,
    tags: ["girl child", "education", "empowerment"],
    viewCount: 1000000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "wcd-034",
    name: "Sukanya Samriddhi Yojana",
    nameHindi: "सुकन्या समृद्धि योजना",
    nameGujarati: "સુકન્યા સમૃદ્ધિ યોજના",
    department: "Department of Posts / DFS",
    ministry: "Ministry of Finance",
    category: "women",
    state: "all",
    description: "Small deposit scheme for the girl child to build a fund for her education and marriage.",
    descriptionHindi: "बालिका की शिक्षा और विवाह के लिए बचत योजना।",
    benefits: ["High interest rate (approx 8.2%)", "Tax benefit under 80C", "Matures after 21 years"],
    benefitAmount: "High Interest Savings",
    eligibility: {
      minAge: 0,
      maxAge: 10,
      gender: "female",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Account must be opened by parent/guardian", "Max 2 girls per family"]
    },
    documents: [
      { name: "Girl's Birth Certificate", mandatory: true, purpose: "Age Proof", howToGet: "Panchayat/Municipality" },
      { name: "Parent's Aadhaar", mandatory: true, purpose: "ID", howToGet: "UIDAI" },
      { name: "Parent's PAN", mandatory: true, purpose: "Banking", howToGet: "Income Tax Dept" }
    ],
    howToApplySteps: [
      "Visit any Post Office or authorized Bank branch",
      "Fill the SSY Account Opening Form (Form-1)",
      "Submit documents and minimum deposit of ₹250",
      "Collect passbook"
    ],
    alternativeApply: "Online via some authorized bank net-banking portals if parent holds account.",
    officialLinks: {
      apply: "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx",
      checkStatus: "Bank/Post Office portal",
      officialWebsite: "https://www.indiapost.gov.in"
    },
    helpline: "1800-266-6868",
    processingTime: "Instant",
    commonMistakes: ["Depositing less than ₹250 a year (account goes into default)"],
    deadline: "Before girl turns 10",
    isActive: true,
    tags: ["savings", "girl child", "investment", "tax free"],
    viewCount: 2000000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "wcd-035",
    name: "One Stop Centre (Sakhi)",
    nameHindi: "वन स्टॉप सेंटर (सखी)",
    nameGujarati: "વન સ્ટોપ સેન્ટર (સખી)",
    department: "WCD",
    ministry: "Ministry of WCD",
    category: "women",
    state: "all",
    description: "Support and assistance to women affected by violence, both in private and public spaces.",
    descriptionHindi: "हिंसा से प्रभावित महिलाओं को सहायता।",
    benefits: ["Medical, legal, psychological, and police assistance under one roof", "Temporary shelter up to 5 days"],
    benefitAmount: "Free Emergency Services",
    eligibility: {
      minAge: null,
      maxAge: null,
      gender: "female",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Women affected by violence"]
    },
    documents: [],
    howToApplySteps: [
      "Walk into the nearest One Stop Centre (usually at District Hospital)",
      "Or Call Women Helpline 181",
      "Immediate assistance provided without strict document demands"
    ],
    alternativeApply: "Police or ASHA worker can refer.",
    officialLinks: {
      apply: "Walk-in",
      checkStatus: "N/A",
      officialWebsite: "https://wcd.nic.in/schemes/one-stop-centre-scheme-1"
    },
    helpline: "181",
    processingTime: "Immediate",
    commonMistakes: [],
    deadline: null,
    isActive: true,
    tags: ["safety", "violence", "women", "emergency"],
    viewCount: 300000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "wcd-036",
    name: "PM Ujjwala Yojana",
    nameHindi: "पीएम उज्ज्वला योजना",
    nameGujarati: "પીએમ ઉજ્જવલા યોજના",
    department: "MoPNG",
    ministry: "Petroleum & Natural Gas",
    category: "women",
    state: "all",
    description: "Providing clean cooking fuel (LPG) to poor households.",
    descriptionHindi: "गरीब परिवारों को मुफ्त एलपीजी कनेक्शन।",
    benefits: ["Free LPG connection in the name of women", "First refill and hotplate free", "₹300 subsidy per cylinder"],
    benefitAmount: "Free LPG Connection + Subsidy",
    eligibility: {
      minAge: 18,
      maxAge: null,
      gender: "female",
      incomeLimit: null,
      caste: ["sc", "st", "all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["No existing LPG connection in the household", "Belong to BPL, SECC list, or poor household"]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "ID & Address", howToGet: "UIDAI" },
      { name: "Ration Card", mandatory: true, purpose: "Family Composition", howToGet: "Food Dept" },
      { name: "Bank Passbook", mandatory: true, purpose: "Subsidy transfer", howToGet: "Bank" }
    ],
    howToApplySteps: [
      "Visit nearest LPG distributor (Indane, Bharat Gas, HP)",
      "Submit Ujjwala KYC form with Aadhaar and Ration Card",
      "Or apply online at pmuy.gov.in"
    ],
    alternativeApply: "Apply online at pmuy.gov.in",
    officialLinks: {
      apply: "https://www.pmuy.gov.in/ujjwala2.html",
      checkStatus: "https://www.pmuy.gov.in/",
      officialWebsite: "https://www.pmuy.gov.in/"
    },
    helpline: "1906 (LPG Emergency) / 1800-266-6696",
    processingTime: "15-30 Days",
    commonMistakes: ["Other family member already has a connection"],
    deadline: null,
    isActive: true,
    tags: ["gas", "lpg", "women", "subsidy"],
    viewCount: 2500000,
    lastUpdated: "2025-02-01T00:00:00Z"
  },
  {
    id: "wcd-037",
    name: "Mahila Shakti Kendra",
    nameHindi: "महिला शक्ति केंद्र",
    nameGujarati: "મહિલા શક્તિ કેન્દ્ર",
    department: "WCD",
    ministry: "Ministry of WCD",
    category: "women",
    state: "all",
    description: "Empower rural women through community participation and awareness.",
    descriptionHindi: "ग्रामीण महिलाओं का सशक्तिकरण।",
    benefits: ["Awareness of govt schemes", "Skill development linkages", "Digital literacy"],
    benefitAmount: "Training & Awareness",
    eligibility: {
      minAge: 18,
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
      "Contact block level MSK coordinator",
      "Join the village women's group"
    ],
    alternativeApply: "Via Anganwadi worker",
    officialLinks: {
      apply: "N/A",
      checkStatus: "N/A",
      officialWebsite: "https://wcd.nic.in/"
    },
    helpline: "181",
    processingTime: "Immediate",
    commonMistakes: [],
    deadline: null,
    isActive: true,
    tags: ["empowerment", "rural", "women"],
    viewCount: 80000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "wcd-038",
    name: "Working Women Hostel",
    nameHindi: "कामकाजी महिला छात्रावास",
    nameGujarati: "કામકાજી મહિલા છાત્રાલય",
    department: "WCD",
    ministry: "Ministry of WCD",
    category: "women",
    state: "all",
    description: "Safe and conveniently located accommodation for working women, with day care facility for their children.",
    descriptionHindi: "कामकाजी महिलाओं के लिए सुरक्षित आवास।",
    benefits: ["Subsidized safe hostel accommodation", "Daycare for children up to 8 years"],
    benefitAmount: "Subsidized Accommodation",
    eligibility: {
      minAge: 18,
      maxAge: null,
      gender: "female",
      incomeLimit: 50000, // Rs. 50k per month in metro, 35k in others
      caste: ["all"],
      occupation: ["salaried", "self-employed"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Must not have residence in the same city/town"]
    },
    documents: [
      { name: "Salary Slip/Proof of Income", mandatory: true, purpose: "Eligibility", howToGet: "Employer" },
      { name: "Employer Letter", mandatory: true, purpose: "Verification", howToGet: "Employer" }
    ],
    howToApplySteps: [
      "Find nearest WWH from WCD portal",
      "Submit application directly to the NGO/agency running the hostel",
      "Pay nominal rent (usually 15% of salary)"
    ],
    alternativeApply: "N/A",
    officialLinks: {
      apply: "Offline at Hostel",
      checkStatus: "N/A",
      officialWebsite: "https://wcd.nic.in/schemes/working-women-hostel"
    },
    helpline: "181",
    processingTime: "Depends on vacancy",
    commonMistakes: ["Not carrying employer verification"],
    deadline: null,
    isActive: true,
    tags: ["hostel", "accommodation", "working women"],
    viewCount: 150000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "wcd-039",
    name: "STEP (Support to Training and Employment Programme)",
    nameHindi: "स्टेप",
    nameGujarati: "સ્ટેપ યોજના",
    department: "WCD",
    ministry: "Ministry of WCD",
    category: "women",
    state: "all",
    description: "Provide skills that give employability to women.",
    descriptionHindi: "महिलाओं को रोजगार कौशल प्रशिक्षण।",
    benefits: ["Free skill training in various sectors (agriculture, handlooms, IT, hospitality)", "Placement assistance"],
    benefitAmount: "Free Training",
    eligibility: {
      minAge: 16,
      maxAge: null,
      gender: "female",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["unemployed", "student"],
      states: ["all"],
      familySize: null,
      additionalCriteria: []
    },
    documents: [
      { name: "Aadhaar", mandatory: true, purpose: "ID", howToGet: "UIDAI" }
    ],
    howToApplySteps: [
      "Find STEP affiliated NGO/training center in your district",
      "Enroll for the course"
    ],
    alternativeApply: "N/A",
    officialLinks: {
      apply: "N/A",
      checkStatus: "N/A",
      officialWebsite: "https://wcd.nic.in/schemes/support-training-and-employment-programme-women-step"
    },
    helpline: "Local NGO contacts",
    processingTime: "Varies",
    commonMistakes: [],
    deadline: null,
    isActive: true,
    tags: ["training", "skills", "employment", "women"],
    viewCount: 90000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "wcd-040",
    name: "Integrated Child Development Services (ICDS)",
    nameHindi: "एकीकृत बाल विकास सेवाएं",
    nameGujarati: "સંકલિત બાળ વિકાસ સેવાઓ",
    department: "WCD",
    ministry: "Ministry of WCD",
    category: "health",
    state: "all",
    description: "Provides food, preschool education, and primary healthcare to children under 6 and their mothers.",
    descriptionHindi: "6 वर्ष से कम उम्र के बच्चों और माताओं के लिए पोषण और शिक्षा।",
    benefits: ["Supplementary nutrition", "Pre-school non-formal education", "Immunization", "Health check-ups"],
    benefitAmount: "Free Nutrition & Education",
    eligibility: {
      minAge: 0,
      maxAge: 6, // also for pregnant/lactating women
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: []
    },
    documents: [
      { name: "Aadhaar", mandatory: false, purpose: "Tracking", howToGet: "UIDAI" },
      { name: "Birth Certificate", mandatory: false, purpose: "Age Proof", howToGet: "Panchayat" }
    ],
    howToApplySteps: [
      "Visit the nearest Anganwadi Centre",
      "Register child/mother with the Anganwadi Worker"
    ],
    alternativeApply: "N/A",
    officialLinks: {
      apply: "Walk-in",
      checkStatus: "N/A",
      officialWebsite: "https://wcd.nic.in/icds"
    },
    helpline: "104",
    processingTime: "Immediate",
    commonMistakes: [],
    deadline: null,
    isActive: true,
    tags: ["anganwadi", "nutrition", "children", "health"],
    viewCount: 600000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "wcd-041",
    name: "National Creche Scheme",
    nameHindi: "राष्ट्रीय क्रेच योजना",
    nameGujarati: "રાષ્ટ્રીય ક્રેચ યોજના",
    department: "WCD",
    ministry: "Ministry of WCD",
    category: "women",
    state: "all",
    description: "Daycare facilities for children of working mothers.",
    descriptionHindi: "कामकाजी माताओं के बच्चों के लिए डेकेयर।",
    benefits: ["Safe daycare (7.5 hours/day)", "Supplementary nutrition", "Health monitoring"],
    benefitAmount: "Subsidized Daycare",
    eligibility: {
      minAge: 0, // 6 months
      maxAge: 6,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["salaried", "daily-wage", "self-employed"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Mother must be working"]
    },
    documents: [
      { name: "Mother's Work Proof", mandatory: true, purpose: "Eligibility", howToGet: "Employer/Self-declaration" }
    ],
    howToApplySteps: [
      "Find nearest govt-supported creche",
      "Submit application and nominal monthly fee (Rs 20 to 200 based on BPL/APL)"
    ],
    alternativeApply: "N/A",
    officialLinks: {
      apply: "Offline",
      checkStatus: "N/A",
      officialWebsite: "https://wcd.nic.in/schemes/national-creche-scheme"
    },
    helpline: "N/A",
    processingTime: "Depends on vacancy",
    commonMistakes: [],
    deadline: null,
    isActive: true,
    tags: ["daycare", "creche", "working women", "children"],
    viewCount: 120000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "wcd-042",
    name: "PM Matru Vandana Yojana (Duplicate/Alias check)",
    nameHindi: "प्रधानमंत्री मातृ वंदना योजना",
    nameGujarati: "પ્રધાનમંત્રી માતૃ વંદના યોજના",
    department: "WCD",
    ministry: "Ministry of WCD",
    category: "women",
    state: "all",
    description: "Financial assistance to pregnant women for first child.",
    descriptionHindi: "गर्भवती महिलाओं को वित्तीय सहायता।",
    benefits: ["₹5000 direct cash transfer"],
    benefitAmount: "₹5000",
    eligibility: {
      minAge: 19,
      maxAge: 45,
      gender: "female",
      incomeLimit: 800000,
      caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: []
    },
    documents: [
      { name: "Aadhaar", mandatory: true, purpose: "ID", howToGet: "UIDAI" },
      { name: "MCP Card", mandatory: true, purpose: "Medical", howToGet: "ASHA" }
    ],
    howToApplySteps: [
      "Apply online at pmmvy.wcd.gov.in"
    ],
    alternativeApply: "Anganwadi centre",
    officialLinks: {
      apply: "https://pmmvy.wcd.gov.in/",
      checkStatus: "https://pmmvy.wcd.gov.in/",
      officialWebsite: "https://pmmvy.wcd.gov.in/"
    },
    helpline: "104",
    processingTime: "30 Days",
    commonMistakes: [],
    deadline: null,
    isActive: true,
    tags: ["maternity", "cash"],
    viewCount: 400000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },

  // HOUSING (43-48)
  {
    id: "housing-043",
    name: "PM Awas Yojana Urban",
    nameHindi: "पीएम आवास योजना शहरी",
    nameGujarati: "પીએમ આવાસ યોજના શહેરી",
    department: "MoHUA",
    ministry: "Ministry of Housing and Urban Affairs",
    category: "housing",
    state: "all",
    description: "Housing for All in urban areas through interest subsidy and beneficiary-led construction.",
    descriptionHindi: "शहरी क्षेत्रों में सभी के लिए आवास।",
    benefits: ["Up to ₹2.67 lakh interest subsidy on home loan", "₹1.5 lakh grant for self-construction"],
    benefitAmount: "Up to ₹2.67 lakh Subsidy",
    eligibility: {
      minAge: 18,
      maxAge: null,
      gender: "all",
      incomeLimit: 1800000, // Up to 18L for MIG
      caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Must not own a pucca house anywhere in India", "Female ownership is mandatory/preferred"]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "ID", howToGet: "UIDAI" },
      { name: "Income Proof", mandatory: true, purpose: "Determine category (EWS/LIG/MIG)", howToGet: "Employer/ITR/Affidavit" },
      { name: "Property Documents", mandatory: true, purpose: "Loan approval", howToGet: "Builder/Seller" }
    ],
    howToApplySteps: [
      "For Home Loan Subsidy (CLSS): Apply for home loan at any Bank/HFC. Ask for PMAY subsidy.",
      "For construction grant (BLC): Apply online at pmaymis.gov.in or visit Municipal Corporation",
      "Enter Aadhaar and personal details",
      "Submit and track assessment ID"
    ],
    alternativeApply: "Visit nearest CSC (Common Service Centre) to apply for ₹25 fee.",
    officialLinks: {
      apply: "https://pmaymis.gov.in/",
      checkStatus: "https://pmaymis.gov.in/Open/Check_Aadhar_Existence.aspx",
      officialWebsite: "https://pmaymis.gov.in/"
    },
    helpline: "1800-11-6163 / 1800-11-3377",
    processingTime: "3-6 Months",
    commonMistakes: ["Family member already owns a house", "Carpet area exceeds limits"],
    deadline: null, // PMAY-U 2.0 extended
    isActive: true,
    tags: ["housing", "urban", "loan", "subsidy", "home"],
    viewCount: 3500000,
    lastUpdated: "2025-02-15T00:00:00Z"
  },
  {
    id: "housing-044",
    name: "PM Awas Yojana Gramin",
    nameHindi: "पीएम आवास योजना ग्रामीण",
    nameGujarati: "પીએમ આવાસ યોજના ગ્રામીણ",
    department: "Rural Development",
    ministry: "Ministry of Rural Development",
    category: "housing",
    state: "all",
    description: "Financial assistance to construct pucca houses in rural areas.",
    descriptionHindi: "ग्रामीण क्षेत्रों में पक्के घर बनाने के लिए वित्तीय सहायता।",
    benefits: ["₹1.20 lakh in plains", "₹1.30 lakh in hilly/difficult areas", "90-95 days of MGNREGA wages extra", "₹12,000 for toilet"],
    benefitAmount: "Up to ₹1.42 lakh total benefit",
    eligibility: {
      minAge: 18,
      maxAge: null,
      gender: "all",
      incomeLimit: null, // Based on SECC 2011 & Awaas+ survey
      caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Houseless or living in 0-2 room kutcha house", "Listed in SECC/Awaas+"]
    },
    documents: [
      { name: "Aadhaar", mandatory: true, purpose: "ID", howToGet: "UIDAI" },
      { name: "Bank Account", mandatory: true, purpose: "DBT", howToGet: "Bank" },
      { name: "Job Card", mandatory: false, purpose: "MGNREGA wages", howToGet: "Panchayat" }
    ],
    howToApplySteps: [
      "Check name in SECC/Awaas+ beneficiary list via Gram Panchayat or pmayg.nic.in",
      "If name is present, submit Aadhaar and bank details to Gram Sevak/Mukhiya",
      "Geotagging of land will be done",
      "Funds transferred directly to bank in installments as construction progresses"
    ],
    alternativeApply: "If name not in list, appeal to Gram Sabha during Appellate process.",
    officialLinks: {
      apply: "Through Gram Panchayat",
      checkStatus: "https://rhreporting.nic.in/netiay/benificiary.aspx",
      officialWebsite: "https://pmayg.nic.in/netiay/home.aspx",
      mobileApp: "https://play.google.com/store/apps/details?id=rural.housing"
    },
    helpline: "1800-11-6446",
    processingTime: "Instalments per construction stage",
    commonMistakes: ["Applying online directly (PMAY-G does not accept direct public online forms)", "Not linking Aadhaar to bank"],
    deadline: null,
    isActive: true,
    tags: ["housing", "rural", "village", "home"],
    viewCount: 4200000,
    lastUpdated: "2025-02-10T00:00:00Z"
  },
  {
    id: "housing-045",
    name: "Credit Linked Subsidy Scheme",
    nameHindi: "क्रेडिट लिंक्ड सब्सिडी योजना",
    nameGujarati: "ક્રેડિટ લિંક્ડ સબસિડી યોજના",
    department: "MoHUA",
    ministry: "MoHUA",
    category: "housing",
    state: "all",
    description: "Component of PMAY-U for interest subsidy on home loans.",
    descriptionHindi: "होम लोन पर ब्याज सब्सिडी।",
    benefits: ["Subsidy up to ₹2.67 Lakh credited upfront to loan account"],
    benefitAmount: "₹2.67 Lakh upfront subsidy",
    eligibility: {
      minAge: 18,
      maxAge: 70,
      gender: "all",
      incomeLimit: 1800000,
      caste: ["all"],
      occupation: ["salaried", "business"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["First time home buyer"]
    },
    documents: [
      { name: "Income Proof", mandatory: true, purpose: "Income verification", howToGet: "ITR/Salary slip" }
    ],
    howToApplySteps: [
      "Apply for Home Loan at Bank/NBFC",
      "Request CLSS benefit",
      "Bank claims subsidy from NHB/HUDCO"
    ],
    alternativeApply: "N/A",
    officialLinks: {
      apply: "At Bank",
      checkStatus: "https://pmayuclap.gov.in/",
      officialWebsite: "https://pmaymis.gov.in/"
    },
    helpline: "1800-11-3377",
    processingTime: "2-4 Months",
    commonMistakes: ["Home carpet area exceeds limit"],
    deadline: null,
    isActive: true,
    tags: ["home loan", "subsidy", "housing"],
    viewCount: 1500000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "housing-046",
    name: "NULM Housing for Urban Homeless",
    nameHindi: "शहरी बेघरों के लिए आश्रय",
    nameGujarati: "શહેરી બેઘર માટે આશ્રય",
    department: "MoHUA",
    ministry: "MoHUA",
    category: "housing",
    state: "all",
    description: "Provide permanent shelters with basic amenities to urban homeless.",
    descriptionHindi: "शहरी बेघरों के लिए आश्रय।",
    benefits: ["Free/Nominal cost stay", "Water, sanitation, and safety"],
    benefitAmount: "Free Shelter",
    eligibility: {
      minAge: null,
      maxAge: null,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Urban homeless individuals"]
    },
    documents: [],
    howToApplySteps: [
      "Walk-in to any SUH (Shelter for Urban Homeless)",
      "Identified by NGO/Municipal surveys"
    ],
    alternativeApply: "N/A",
    officialLinks: {
      apply: "N/A",
      checkStatus: "N/A",
      officialWebsite: "https://nulm.gov.in/"
    },
    helpline: "Local Municipality",
    processingTime: "Immediate",
    commonMistakes: [],
    deadline: null,
    isActive: true,
    tags: ["homeless", "shelter", "urban"],
    viewCount: 50000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "housing-047",
    name: "Pradhan Mantri Gramin Awaas Plus",
    nameHindi: "पीएम ग्रामीण आवास प्लस",
    nameGujarati: "પીએમ આવાસ પ્લસ",
    department: "Rural Development",
    ministry: "MoRD",
    category: "housing",
    state: "all",
    description: "Extension of PMAY-G covering eligible families left out of SECC 2011.",
    descriptionHindi: "छूटे हुए परिवारों के लिए PMAY-G का विस्तार।",
    benefits: ["₹1.20 lakh financial assistance"],
    benefitAmount: "₹1.20 Lakh",
    eligibility: {
      minAge: 18,
      maxAge: null,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Must be in Awaas+ list"]
    },
    documents: [
      { name: "Aadhaar", mandatory: true, purpose: "ID", howToGet: "UIDAI" }
    ],
    howToApplySteps: [
      "Check name with Gram Panchayat",
      "Application is initiated by GP"
    ],
    alternativeApply: "N/A",
    officialLinks: {
      apply: "N/A",
      checkStatus: "https://rhreporting.nic.in/",
      officialWebsite: "https://pmayg.nic.in/"
    },
    helpline: "1800-11-6446",
    processingTime: "Depends on target allocation",
    commonMistakes: [],
    deadline: null,
    isActive: true,
    tags: ["housing", "rural"],
    viewCount: 300000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "housing-048",
    name: "Interest Subsidy Scheme for Housing the Urban Poor",
    nameHindi: "शहरी गरीबों के लिए ब्याज सब्सिडी योजना",
    nameGujarati: "શહેરી ગરીબો માટે વ્યાજ સબસિડી",
    department: "MoHUA",
    ministry: "MoHUA",
    category: "housing",
    state: "all",
    description: "Precursor/Alternate to PMAY CLSS for EWS/LIG.",
    descriptionHindi: "ईडब्ल्यूएस / एलआईजी के लिए सब्सिडी।",
    benefits: ["Interest subsidy of 5% to 6.5%"],
    benefitAmount: "Interest Reduction",
    eligibility: {
      minAge: 18,
      maxAge: 70,
      gender: "all",
      incomeLimit: 600000,
      caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: []
    },
    documents: [
      { name: "Income Certificate", mandatory: true, purpose: "Eligibility", howToGet: "Tehsildar" }
    ],
    howToApplySteps: [
      "Apply via Bank for Home loan"
    ],
    alternativeApply: "N/A",
    officialLinks: {
      apply: "At Bank",
      checkStatus: "N/A",
      officialWebsite: "https://mohua.gov.in/"
    },
    helpline: "N/A",
    processingTime: "2 Months",
    commonMistakes: [],
    deadline: null,
    isActive: true,
    tags: ["loan", "housing", "poor"],
    viewCount: 40000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },

  // EMPLOYMENT (49-50)
  {
    id: "emp-049",
    name: "MGNREGA",
    nameHindi: "मनरेगा",
    nameGujarati: "મનરેગા",
    department: "Rural Development",
    ministry: "Ministry of Rural Development",
    category: "employment",
    state: "all",
    description: "Mahatma Gandhi National Rural Employment Guarantee Act guarantees 100 days of wage employment in a financial year to rural households.",
    descriptionHindi: "ग्रामीण परिवारों को 100 दिन के रोजगार की गारंटी।",
    benefits: ["Guaranteed 100 days work", "Unemployment allowance if work not provided within 15 days", "Equal pay for men and women"],
    benefitAmount: "₹230 - ₹380 per day (state dependent)",
    eligibility: {
      minAge: 18,
      maxAge: null,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["unemployed", "daily-wage", "farmer"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Must reside in rural areas", "Willing to do unskilled manual work"]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "ID & DBt", howToGet: "UIDAI" },
      { name: "Bank Passbook", mandatory: true, purpose: "Wage transfer", howToGet: "Bank" },
      { name: "Passport Photo", mandatory: true, purpose: "Job Card", howToGet: "Photo Studio" }
    ],
    howToApplySteps: [
      "Visit the Gram Panchayat Office",
      "Submit oral or written request for Job Card with Aadhaar and Photos",
      "Gram Panchayat registers and issues Job Card within 15 days",
      "Demand work by submitting an application to Gram Panchayat",
      "Gram Panchayat will allocate work within 15 days"
    ],
    alternativeApply: "Register via local CSC.",
    officialLinks: {
      apply: "Offline at Gram Panchayat",
      checkStatus: "https://nrega.nic.in/MGNREGA_new/Nrega_home.aspx",
      officialWebsite: "https://nrega.nic.in/"
    },
    helpline: "1800-11-1555",
    processingTime: "15 Days for Job Card",
    commonMistakes: ["Not linking bank account with Aadhaar (ABPS mandatory)", "Not officially demanding work in writing"],
    deadline: null,
    isActive: true,
    tags: ["employment", "rural", "wages", "job card", "nrega"],
    viewCount: 5000000,
    lastUpdated: "2025-02-01T00:00:00Z"
  },
  {
    id: "emp-050",
    name: "PM Employment Generation Programme",
    nameHindi: "पीएम रोजगार सृजन कार्यक्रम",
    nameGujarati: "પીએમ રોજગાર સર્જન કાર્યક્રમ",
    department: "MSME",
    ministry: "Ministry of MSME",
    category: "employment",
    state: "all",
    description: "Credit-linked subsidy program to generate employment through establishment of micro-enterprises.",
    descriptionHindi: "सूक्ष्म उद्यमों की स्थापना के लिए क्रेडिट-लिंक्ड सब्सिडी।",
    benefits: ["Loan up to ₹50 Lakh for manufacturing", "Up to ₹20 Lakh for service sector", "Govt subsidy of 15% to 35%"],
    benefitAmount: "Up to 35% Subsidy (Max ₹17.5L)",
    eligibility: {
      minAge: 18,
      maxAge: null,
      gender: "all",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["unemployed", "business"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["8th Pass required for projects above ₹10L (Mfg)/₹5L (Service)"]
    },
    documents: [
      { name: "Project Report", mandatory: true, purpose: "Business plan evaluation", howToGet: "CA / KVIC template" },
      { name: "Aadhaar & PAN", mandatory: true, purpose: "ID", howToGet: "UIDAI/IT" },
      { name: "Education/Caste Certificate", mandatory: false, purpose: "Higher subsidy", howToGet: "Tehsildar" }
    ],
    howToApplySteps: [
      "Prepare a Detailed Project Report (DPR)",
      "Visit kviconline.gov.in/pmegpeportal",
      "Fill online application under individual category",
      "Select sponsoring agency (KVIC/KVIB/DIC)",
      "Submit application and download printout",
      "Bank evaluates and sanctions the loan"
    ],
    alternativeApply: "Visit local DIC (District Industries Centre) office.",
    officialLinks: {
      apply: "https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp",
      checkStatus: "https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp",
      officialWebsite: "https://www.kviconline.gov.in/"
    },
    helpline: "1800-3000-0034",
    processingTime: "1-3 Months",
    commonMistakes: ["Unrealistic project reports", "Bad CIBIL score causing bank rejection"],
    deadline: null,
    isActive: true,
    tags: ["business", "loan", "startup", "subsidy", "msme"],
    viewCount: 1800000,
    lastUpdated: "2025-02-15T00:00:00Z"
  }
];
