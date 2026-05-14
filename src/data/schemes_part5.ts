import { Scheme } from "@/types";

export const schemesPart5: Scheme[] = [
  {
    id: "pm-yasasvi",
    name: "PM YASASVI Scholarship",
    nameHindi: "पीएम यशस्वी छात्रवृत्ति योजना",
    nameGujarati: "પીએમ યશસ્વી શિષ્યવૃત્તિ યોજના",
    department: "Social Justice & Empowerment",
    ministry: "Ministry of Social Justice & Empowerment",
    category: "education",
    state: "all",
    description: "PM Young Achievers Scholarship Award Scheme for Vibrant India for OBC, EBC and DNT students.",
    descriptionHindi: "ओबीसी, ईबीसी और डीएनटी छात्रों के लिए पीएम यशस्वी छात्रवृत्ति योजना।",
    benefitAmount: "Up to ₹1,25,000/year",
    benefits: [
      "Class 9 students: ₹75,000/year",
      "Class 11 students: ₹1,25,000/year",
      "Covers tuition fees + hostel + books",
      "Covers professional courses: Engineering, Medical, Hotel Management, Tourism"
    ],
    eligibility: {
      minAge: null,
      maxAge: null,
      gender: "all",
      incomeLimit: 250000,
      caste: ["obc"], // "ebc" and "dnt" are merged into OBC or handled in additional criteria
      occupation: ["student"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "Must be studying in Class 9 or Class 11",
        "Must be in a government-recognized school",
        "School must have valid UDISE/AISHE code",
        "School must have 100% pass rate in board exams",
        "Selection based on merit (Class 8 or Class 10 marks)",
        "No entrance exam — scrapped from 2023 onwards",
        "Cannot combine with certain other government scholarships",
        "Aadhaar-based attendance system mandatory at school",
        "Category must be OBC, EBC, or DNT"
      ]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity verification", howToGet: "Visit nearest Aadhaar enrollment center or post office" },
      { name: "Caste Certificate (OBC/EBC/DNT)", mandatory: true, purpose: "Prove category eligibility", howToGet: "Apply at Mamlatdar/Tehsildar office with proof of caste" },
      { name: "Income Certificate", mandatory: true, purpose: "Prove family income below ₹2.5 lakh", howToGet: "Issued by Mamlatdar/Tehsildar, takes 7-15 days" },
      { name: "Previous Class Marksheet", mandatory: true, purpose: "Merit-based selection proof", howToGet: "From your school office" },
      { name: "Bank Account Passbook", mandatory: true, purpose: "Direct benefit transfer", howToGet: "Open in any nationalized bank, link with Aadhaar" },
      { name: "School Enrollment Certificate", mandatory: true, purpose: "Prove current enrollment in Class 9/11", howToGet: "From your school principal" },
      { name: "Passport Size Photo", mandatory: true, purpose: "Application form", howToGet: "Any photo studio, 2x2 inch" },
      { name: "Domicile Certificate", mandatory: false, purpose: "State residence proof", howToGet: "From Mamlatdar office if required" }
    ],
    howToApplySteps: [
      "Step 1: Visit the official portal — yet.nta.ac.in OR scholarships.gov.in",
      "Step 2: Click 'New Registration' and register with your mobile number and email",
      "Step 3: Fill the application form with your personal, academic, and family details",
      "Step 4: Upload all required documents in JPG/PDF format (each under 200KB)",
      "Step 5: Select your school from the list (school must have UDISE code)",
      "Step 6: Review all entered details carefully before final submission",
      "Step 7: Submit and note down your Application ID for tracking",
      "Step 8: Your school will verify and forward your application",
      "Step 9: Merit list is published — check at yet.nta.ac.in",
      "Step 10: After selection, scholarship credited directly to bank account"
    ],
    alternativeApply: "Visit your school's scholarship coordinator — they assist with online application for free. Also visit nearest CSC center.",
    officialLinks: {
      apply: "https://scholarships.gov.in",
      checkStatus: "https://scholarships.gov.in/applicantDashboard",
      officialWebsite: "https://yet.nta.ac.in",
      mobileApp: "https://play.google.com/store/apps/details?id=in.gov.nsp"
    },
    helpline: "0120-6895200 (NTA Helpline)",
    processingTime: "2-4 months after application deadline",
    commonMistakes: [
      "Applying with school that does NOT have UDISE code — application rejected",
      "Wrong caste certificate (must be OBC/EBC/DNT specifically)",
      "Family income certificate older than 1 year — not accepted",
      "Combining with other scholarships for same purpose — leads to cancellation",
      "Missing Aadhaar-linked bank account — money cannot be transferred"
    ],
    deadline: "August 31",
    isActive: true,
    tags: ["scholarship", "OBC", "EBC", "DNT", "class 9", "class 11", "student", "merit"],
    viewCount: 150000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "mysy-gujarat",
    name: "MYSY Scholarship",
    nameHindi: "मुख्यमंत्री युवा स्वावलंबन योजना",
    nameGujarati: "મુખ્યમંત્રી યુવા સ્વાવલંબન યોજના (MYSY)",
    department: "Education Department",
    ministry: "Government of Gujarat",
    category: "education",
    state: "Gujarat",
    description: "Mukhyamantri Yuva Swavalamban Yojana for college students of Gujarat.",
    descriptionHindi: "गुजरात के कॉलेज के छात्रों के लिए मुख्यमंत्री युवा स्वावलंबन योजना।",
    benefitAmount: "Up to ₹2,00,000/year tuition + ₹10,000 equipment + ₹1,200/month hostel",
    benefits: [
      "Diploma students: ₹25,000/year OR 50% tuition — whichever is less",
      "UG/PG students: Up to ₹2,00,000/year OR 50% tuition — whichever is less",
      "Medical/Dental (GMERS): ₹10,00,000 total over 5 years",
      "Hostel allowance: ₹1,200/month (max 10 months/year) if studying outside hometown",
      "Books/Equipment grant: One-time in first year",
      "Covers: Engineering, Medical, Pharmacy, B.Sc., B.Com, BBA, BCA, MBA, MCA, Diploma, Ph.D.",
      "Budget: ₹1,000 crore/year from Gujarat government",
      "Open to ALL categories — General, OBC, SC, ST, EWS, Minority"
    ],
    eligibility: {
      minAge: null,
      maxAge: null,
      gender: "all",
      incomeLimit: 600000,
      caste: ["all"],
      occupation: ["student"],
      states: ["Gujarat"],
      familySize: null,
      additionalCriteria: [
        "Must be domicile of Gujarat",
        "Must be studying in a Gujarat-based institution",
        "Diploma: minimum 80% in Class 10 from Gujarat Board",
        "UG degree: minimum 80% in Class 12 (Science or General stream) from Gujarat Board",
        "PG courses: minimum 65% in qualifying exam",
        "Ph.D.: minimum 55% in post-graduation",
        "Income proof: Mamlatdar-issued certificate required",
        "Can apply alongside SC/ST/OBC scholarships but combined cannot exceed actual fees"
      ]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity verification", howToGet: "Aadhaar enrollment center or post office" },
      { name: "Class 10 OR Class 12 Marksheet", mandatory: true, purpose: "Prove 80% marks eligibility", howToGet: "From your school/board — official marksheet only" },
      { name: "Income Certificate (Mamlatdar-issued)", mandatory: true, purpose: "Prove family income below ₹6 lakh", howToGet: "Apply at local Mamlatdar office — takes 7-15 days, free of cost" },
      { name: "Domicile Certificate", mandatory: true, purpose: "Prove Gujarat residency", howToGet: "From Mamlatdar office with proof of 5+ years residence" },
      { name: "College Admission Letter / Fee Receipt", mandatory: true, purpose: "Prove enrollment and fees charged", howToGet: "From your college accounts department" },
      { name: "Bank Account Passbook (Gujarat bank preferred)", mandatory: true, purpose: "Scholarship credited to this account", howToGet: "Open in any nationalized bank, link with Aadhaar" },
      { name: "Passport Size Photo", mandatory: true, purpose: "Portal registration", howToGet: "Any photo studio" },
      { name: "College ID Card", mandatory: false, purpose: "Additional enrollment proof", howToGet: "From your college" },
      { name: "Hostel Certificate", mandatory: false, purpose: "Only if claiming hostel allowance", howToGet: "From hostel warden on college letterhead" }
    ],
    howToApplySteps: [
      "Step 1: Visit mysy.guj.nic.in (official MYSY portal)",
      "Step 2: Click 'Login/Register' → 'Fresh Application' (first time) or 'Renewal Application'",
      "Step 3: Click 'Register' and fill your board name, stream, university, passing year, enrollment number, mobile number",
      "Step 4: Click 'Get Password' — you receive login details on your mobile",
      "Step 5: Log in and complete your full profile: Aadhaar, address, bank account details",
      "Step 6: Upload your passport photo (JPG under 200KB)",
      "Step 7: Fill scholarship application: select course, college, upload fee receipt",
      "Step 8: Upload all required documents (each under 2MB, PDF/JPG)",
      "Step 9: Review all details — especially bank account number (must match Aadhaar)",
      "Step 10: Submit application and save your Application Number",
      "Step 11: Your college will verify and forward — check status regularly",
      "Note: For renewal each year — submit updated marksheet, fee receipt, and attendance certificate"
    ],
    alternativeApply: "Visit your college's MYSY Help Center — every Gujarat college has a designated MYSY coordinator who assists for free.",
    officialLinks: {
      apply: "https://mysy.guj.nic.in",
      checkStatus: "https://mysy.guj.nic.in/frm_stu_status.aspx",
      officialWebsite: "https://mysy.guj.nic.in"
    },
    helpline: "079-26566000 | 7043333181 (10:30 AM to 6:00 PM)",
    processingTime: "2-3 months after submission — credited before mid-semester",
    commonMistakes: [
      "Applying with wrong marksheet calculation — use official board percentage only",
      "Income certificate not from Mamlatdar — other certificates not accepted",
      "Bank account not linked with Aadhaar — scholarship bounces back",
      "Not submitting renewal application on time — scholarship gets cancelled",
      "Attending college outside Gujarat — not eligible under MYSY",
      "Combining MYSY with same-purpose scholarship that already covers 100% fees"
    ],
    deadline: "January",
    isActive: true,
    tags: ["Gujarat", "scholarship", "merit", "MYSY", "engineering", "medical", "diploma", "all categories"],
    viewCount: 350000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "aicte-swanath",
    name: "AICTE Swanath Scholarship Scheme",
    nameHindi: "एआईसीटीई स्वनाथ छात्रवृत्ति योजना",
    nameGujarati: "AICTE સ્વનાથ શિષ્યવૃત્તિ યોજના",
    department: "AICTE",
    ministry: "Ministry of Education",
    category: "education",
    state: "all",
    description: "Scholarship for orphans, wards of COVID-19 victims, and children of armed forces martyrs.",
    descriptionHindi: "अनाथों, कोविड-19 पीड़ितों के बच्चों और सशस्त्र बलों के शहीदों के बच्चों के लिए छात्रवृत्ति।",
    benefitAmount: "₹50,000/year",
    benefits: [
      "₹50,000 per year for technical diploma and degree students",
      "For orphans, wards of COVID-19 victims, and children of armed forces martyrs",
      "Covers tuition and living expenses"
    ],
    eligibility: {
      minAge: null,
      maxAge: null,
      gender: "all",
      incomeLimit: 800000,
      caste: ["all"],
      occupation: ["student"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "Must be orphan OR ward of COVID-19 deceased parent OR ward of armed forces/paramilitary martyr",
        "Must be studying in AICTE-approved technical institution",
        "Diploma or degree in Engineering/Technology/Pharmacy/Architecture",
        "Family income below ₹8 lakh per annum"
      ]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "Aadhaar center" },
      { name: "Death Certificate of Parent", mandatory: true, purpose: "Prove orphan/COVID/martyr status", howToGet: "Municipal corporation / hospital" },
      { name: "Income Certificate", mandatory: true, purpose: "Below ₹8 lakh limit", howToGet: "Tehsildar/Mamlatdar office" },
      { name: "Admission Letter from AICTE Institution", mandatory: true, purpose: "Prove enrollment", howToGet: "College admissions office" },
      { name: "Bank Passbook", mandatory: true, purpose: "Scholarship transfer", howToGet: "Any nationalized bank" }
    ],
    howToApplySteps: [
      "Step 1: Visit scholarships.gov.in — National Scholarship Portal",
      "Step 2: Register as new student with Aadhaar number",
      "Step 3: Select 'AICTE Swanath Scholarship' from scheme list",
      "Step 4: Fill complete application with proof of orphan/martyr/COVID status",
      "Step 5: Upload death certificate and income certificate",
      "Step 6: Submit before October 31 deadline"
    ],
    alternativeApply: "Contact your AICTE-approved college's scholarship office for assistance",
    officialLinks: {
      apply: "https://scholarships.gov.in",
      checkStatus: "https://scholarships.gov.in/applicantDashboard",
      officialWebsite: "https://www.aicte-india.org/bureaus/swanath"
    },
    helpline: "011-29581000 (AICTE)",
    processingTime: "3-4 months",
    commonMistakes: [],
    deadline: "October 31",
    isActive: true,
    tags: ["orphan", "COVID", "martyr", "technical", "engineering", "AICTE", "scholarship"],
    viewCount: 120000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "aicte-pragati",
    name: "AICTE Pragati Scholarship for Girl Students",
    nameHindi: "एआईसीटीई प्रगति छात्रवृत्ति (बालिका)",
    nameGujarati: "AICTE પ્રગતિ શિષ્યવૃત્તિ (બાલિકા)",
    department: "AICTE",
    ministry: "Ministry of Education",
    category: "education",
    state: "all",
    description: "Scholarship for Girls pursuing Technical Education (Degree/Diploma).",
    descriptionHindi: "तकनीकी शिक्षा प्राप्त करने वाली लड़कियों के लिए छात्रवृत्ति।",
    benefitAmount: "₹50,000/year",
    benefits: [
      "₹50,000 per year for girl students in technical education",
      "For degree AND diploma level",
      "Covers tuition and incidental charges"
    ],
    eligibility: {
      minAge: 16,
      maxAge: 25,
      gender: "female",
      incomeLimit: 800000,
      caste: ["all"],
      occupation: ["student"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "Must be female student",
        "Enrolled in AICTE-approved institution",
        "Diploma or Degree in Engineering/Technology/Pharmacy/Architecture",
        "Family income below ₹8 lakh per annum",
        "Only 2 girls per family can avail"
      ]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "Aadhaar center" },
      { name: "Income Certificate", mandatory: true, purpose: "Below ₹8 lakh proof", howToGet: "Tehsildar office" },
      { name: "Admission Letter from AICTE College", mandatory: true, purpose: "Enrollment proof", howToGet: "College admission office" },
      { name: "Bank Passbook", mandatory: true, purpose: "Transfer", howToGet: "Nationalized bank" },
      { name: "Previous Year Marksheet", mandatory: true, purpose: "Academic record", howToGet: "School/college" }
    ],
    howToApplySteps: [
      "Step 1: Go to scholarships.gov.in",
      "Step 2: Register with Aadhaar number",
      "Step 3: Select 'AICTE Pragati Scholarship' from dropdown",
      "Step 4: Fill form with family income and college details",
      "Step 5: Upload income certificate and admission letter",
      "Step 6: Submit before October 31 deadline"
    ],
    alternativeApply: "Your college scholarship coordinator can apply on your behalf",
    officialLinks: {
      apply: "https://scholarships.gov.in",
      checkStatus: "https://scholarships.gov.in/applicantDashboard",
      officialWebsite: "https://www.aicte-india.org/bureaus/pragati"
    },
    helpline: "011-29581000",
    processingTime: "3-4 months",
    commonMistakes: ["Applying for non-AICTE college"],
    deadline: "October 31",
    isActive: true,
    tags: ["girls", "female", "technical", "engineering", "AICTE", "scholarship", "women"],
    viewCount: 300000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "aicte-saksham",
    name: "AICTE Saksham Scholarship for Specially-Abled Students",
    nameHindi: "एआईसीटीई सक्षम छात्रवृत्ति (दिव्यांग)",
    nameGujarati: "AICTE સક્ષમ શિષ્યવૃત્તિ (દિવ્યાંગ)",
    department: "AICTE",
    ministry: "Ministry of Education",
    category: "education",
    state: "all",
    description: "Scholarship for Specially-abled students to pursue technical education.",
    descriptionHindi: "दिव्यांग छात्रों को तकनीकी शिक्षा के लिए छात्रवृत्ति।",
    benefitAmount: "₹50,000/year",
    benefits: [
      "₹50,000 per year for divyang/specially-abled students",
      "For technical diploma and degree programs",
      "Supports differently-abled students in engineering/technology"
    ],
    eligibility: {
      minAge: 16,
      maxAge: 30,
      gender: "all",
      incomeLimit: 800000,
      caste: ["pwd"],
      occupation: ["student"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "Must have minimum 40% disability",
        "Valid PwD certificate from competent authority",
        "Enrolled in AICTE-approved institution",
        "Family income below ₹8 lakh"
      ]
    },
    documents: [
      { name: "Disability Certificate (40%+ disability)", mandatory: true, purpose: "Prove specially-abled status", howToGet: "Government hospital CMO — apply for disability certificate" },
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "Aadhaar center" },
      { name: "Income Certificate", mandatory: true, purpose: "Below ₹8 lakh proof", howToGet: "Tehsildar office" },
      { name: "Admission Letter from AICTE College", mandatory: true, purpose: "Enrollment proof", howToGet: "College" },
      { name: "Bank Passbook", mandatory: true, purpose: "Transfer", howToGet: "Any bank" }
    ],
    howToApplySteps: [
      "Step 1: Visit scholarships.gov.in",
      "Step 2: Register with Aadhaar",
      "Step 3: Select AICTE Saksham Scholarship",
      "Step 4: Upload disability certificate and other documents",
      "Step 5: Submit before October 31"
    ],
    alternativeApply: "College scholarship office or CSC center can assist",
    officialLinks: {
      apply: "https://scholarships.gov.in",
      checkStatus: "https://scholarships.gov.in/applicantDashboard",
      officialWebsite: "https://www.aicte-india.org"
    },
    helpline: "011-29581000",
    processingTime: "3-4 months",
    commonMistakes: ["UDID certificate not uploaded"],
    deadline: "October 31",
    isActive: true,
    tags: ["disability", "PwD", "divyang", "specially-abled", "technical", "engineering", "scholarship"],
    viewCount: 150000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "vigyan-jyoti",
    name: "Vigyan Jyoti Scheme — Girls in STEM",
    nameHindi: "विज्ञान ज्योति योजना",
    nameGujarati: "વિજ્ઞાન જ્યોતિ યોજના",
    department: "Department of Science and Technology (DST)",
    ministry: "Ministry of Science & Technology",
    category: "education",
    state: "all",
    description: "Mentorship and training for girls in science and technology fields.",
    descriptionHindi: "विज्ञान और प्रौद्योगिकी में लड़कियों के लिए मेंटरशिप और प्रशिक्षण।",
    benefitAmount: "Free training + mentorship",
    benefits: [
      "Free additional coaching in science subjects",
      "Visits to top institutions, IITs, IISc, ISRO, DRDO labs",
      "Mentorship from women scientists and professionals",
      "Science camps, innovation activities, practical sessions",
      "Career counseling for STEM paths",
      "Reduces gender gap in science and technology fields"
    ],
    eligibility: {
      minAge: 13,
      maxAge: 18,
      gender: "female",
      incomeLimit: null,
      caste: ["all"],
      occupation: ["student"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "Girl students from Class 9 to Class 12",
        "Interest in science and technology",
        "Selected through schools in participating districts",
        "Focus on rural and underrepresented backgrounds"
      ]
    },
    documents: [
      { name: "School Enrollment Certificate", mandatory: true, purpose: "Prove Class 9-12 enrollment", howToGet: "From school principal" },
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "Aadhaar center" },
      { name: "Parent/Guardian Consent Letter", mandatory: true, purpose: "Approval for institutional visits", howToGet: "Write and sign a letter" }
    ],
    howToApplySteps: [
      "Step 1: Contact your school principal — selection is done through schools",
      "Step 2: School nominates eligible girl students in Class 9-12",
      "Step 3: DST coordinates with schools in participating districts",
      "Step 4: Selected students receive training schedule from DST",
      "Step 5: Attend science camps and institutional visits as scheduled",
      "Note: This is NOT a direct cash scholarship — it provides training and exposure"
    ],
    alternativeApply: "Contact DST regional office or check dst.gov.in for participating districts near you",
    officialLinks: {
      apply: "https://dst.gov.in/vigyan-jyoti",
      checkStatus: "https://dst.gov.in",
      officialWebsite: "https://dst.gov.in/vigyan-jyoti"
    },
    helpline: "011-26590311 (DST)",
    processingTime: "School-based selection",
    commonMistakes: [],
    deadline: null,
    isActive: true,
    tags: ["girls", "STEM", "science", "technology", "Class 9", "Class 12", "DST", "mentorship"],
    viewCount: 90000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "ishan-uday",
    name: "Ishan Uday Scholarship — North Eastern Region",
    nameHindi: "ईशान उदय छात्रवृत्ति — पूर्वोत्तर क्षेत्र",
    nameGujarati: "ઈશાન ઉદય શિષ્યવૃત્તિ — ઉત્તર-પૂર્વ વિદ્યાર્થી",
    department: "University Grants Commission (UGC)",
    ministry: "Ministry of Education",
    category: "education",
    state: "all",
    description: "Scholarship for students from North Eastern Region pursuing UG education.",
    descriptionHindi: "पूर्वोत्तर क्षेत्र के छात्रों के लिए छात्रवृत्ति।",
    benefitAmount: "₹5,400/month (general) or ₹7,800/month (technical/medical)",
    benefits: [
      "General degree courses: ₹5,400 per month",
      "Technical/Professional/Medical courses: ₹7,800 per month",
      "10,000 fresh scholarships awarded every year",
      "For students from North Eastern Region pursuing UG education"
    ],
    eligibility: {
      minAge: 17,
      maxAge: 25,
      gender: "all",
      incomeLimit: 450000,
      caste: ["all"],
      occupation: ["student"],
      states: ["Assam", "Arunachal Pradesh", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Tripura", "Sikkim"],
      familySize: null,
      additionalCriteria: [
        "Must be domicile of North Eastern states only",
        "Passed Class 12 from recognized board in NER",
        "First-year UG degree student at NAAC-accredited university",
        "NOT for open university or diploma/certificate courses",
        "Cannot combine with another scholarship for same purpose"
      ]
    },
    documents: [
      { name: "Domicile Certificate (NE State)", mandatory: true, purpose: "Prove North East residency", howToGet: "From District Collector or Tehsildar office of your NE state" },
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "Aadhaar center" },
      { name: "Class 12 Marksheet", mandatory: true, purpose: "Qualification proof", howToGet: "Your school or board" },
      { name: "University Enrollment Letter", mandatory: true, purpose: "Prove UG enrollment in NAAC college", howToGet: "Your college admissions office" },
      { name: "Income Certificate", mandatory: true, purpose: "Below ₹4.5 lakh limit", howToGet: "Tehsildar/Mamlatdar office" },
      { name: "Bank Account Passbook", mandatory: true, purpose: "Monthly scholarship credit", howToGet: "Any nationalized bank" }
    ],
    howToApplySteps: [
      "Step 1: Visit scholarships.gov.in — National Scholarship Portal",
      "Step 2: Register as new student with Aadhaar and NE state domicile",
      "Step 3: Select 'Ishan Uday Scholarship' from the scheme list",
      "Step 4: Fill complete application with university and course details",
      "Step 5: Upload domicile certificate and income certificate",
      "Step 6: Submit before October 31 deadline",
      "Step 7: University verifies and forwards application to UGC"
    ],
    alternativeApply: "Contact your university's scholarship section for help",
    officialLinks: {
      apply: "https://scholarships.gov.in",
      checkStatus: "https://scholarships.gov.in/applicantDashboard",
      officialWebsite: "https://www.ugc.gov.in/ishan-uday"
    },
    helpline: "011-23604446 (UGC)",
    processingTime: "3-5 months",
    commonMistakes: ["Pursuing distance education (not eligible)"],
    deadline: "October 31",
    isActive: true,
    tags: ["North East", "NER", "Assam", "Manipur", "UGC", "scholarship", "undergraduate"],
    viewCount: 220000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "pm-internship-scheme",
    name: "PM Internship Scheme 2025",
    nameHindi: "प्रधानमंत्री इंटर्नशिप योजना",
    nameGujarati: "PM ઇન્ટર્નશિપ યોજના 2025",
    department: "Ministry of Corporate Affairs",
    ministry: "Ministry of Corporate Affairs",
    category: "education",
    state: "all",
    description: "Paid internships in top 500 Indian companies.",
    descriptionHindi: "शीर्ष 500 कंपनियों में इंटर्नशिप और भत्ता।",
    benefitAmount: "₹5,000/month stipend + ₹6,000 one-time grant",
    benefits: [
      "₹4,500/month from Government of India + ₹500 from company = ₹5,000/month total",
      "₹6,000 one-time grant at joining",
      "12-month paid internship at top Indian companies (Top 500 companies)",
      "Real work experience with major corporations like Reliance, TCS, Infosys",
      "PM Jeevan Jyoti Bima + PM Suraksha Bima insurance during internship",
      "Certificate from participating company"
    ],
    eligibility: {
      minAge: 21,
      maxAge: 24,
      gender: "all",
      incomeLimit: 800000,
      caste: ["all"],
      occupation: ["student", "unemployed"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "Age 21-24 years",
        "Passed Class 10/12/ITI/Diploma/UG degree",
        "Family income below ₹8 lakh per annum",
        "NOT currently employed full-time",
        "NOT pursuing full-time education",
        "Family member should not be government employee",
        "First batch: 1.25 lakh interns targeted for 2024-25"
      ]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity + KYC", howToGet: "Aadhaar center" },
      { name: "Educational Qualification Certificate", mandatory: true, purpose: "Class 10/12/Diploma/Degree proof", howToGet: "School/college/board" },
      { name: "Income Certificate", mandatory: true, purpose: "Family income below ₹8 lakh", howToGet: "Tehsildar/Mamlatdar office" },
      { name: "Bank Account Passbook (Aadhaar-linked)", mandatory: true, purpose: "Stipend transfer", howToGet: "Any nationalized bank" },
      { name: "Passport Size Photo", mandatory: true, purpose: "Profile photo", howToGet: "Photo studio" }
    ],
    howToApplySteps: [
      "Step 1: Visit pminternship.mca.gov.in — official PM Internship portal",
      "Step 2: Register with Aadhaar number and mobile OTP",
      "Step 3: Create your profile with education, skills, and location preferences",
      "Step 4: Browse available internship opportunities from top 500 companies",
      "Step 5: Apply to up to 5 internship positions of your choice",
      "Step 6: Companies shortlist candidates — you receive email/SMS notification",
      "Step 7: If selected, complete joining formalities online",
      "Step 8: ₹6,000 grant credited at joining, ₹5,000/month during internship"
    ],
    alternativeApply: "Visit nearest CSC center for portal registration assistance",
    officialLinks: {
      apply: "https://pminternship.mca.gov.in",
      checkStatus: "https://pminternship.mca.gov.in/status",
      officialWebsite: "https://pminternship.mca.gov.in"
    },
    helpline: "1800-11-0090 (Ministry of Corporate Affairs)",
    processingTime: "1-2 months for selection after applying",
    commonMistakes: ["Family member is Govt employee making candidate ineligible"],
    deadline: "Rolling applications",
    isActive: true,
    tags: ["internship", "youth", "stipend", "employment", "21-24 age", "top companies", "2025"],
    viewCount: 4500000,
    lastUpdated: "2025-01-01T00:00:00Z"
  },
  {
    id: "central-sector-scholarship",
    name: "Central Sector Scheme of Scholarships for College and University Students",
    nameHindi: "केंद्रीय क्षेत्र छात्रवृत्ति योजना",
    nameGujarati: "કેન્દ્રીય ક્ષેત્ર શિષ્યવૃત્તિ (Class 12 Meritorious)",
    department: "Ministry of Education",
    ministry: "Ministry of Education",
    category: "education",
    state: "all",
    description: "Scholarship for meritorious college and university students.",
    descriptionHindi: "मेधावी छात्रों के लिए छात्रवृत्ति।",
    benefitAmount: "₹12,000/year (UG) | ₹20,000/year (PG)",
    benefits: [
      "UG students: ₹10,000/year (1st-3rd year) — upgraded to ₹12,000/year recently",
      "PG students: ₹20,000/year",
      "For students who scored in top 20 percentile in Class 12 board exam",
      "82,000 scholarships awarded every year across India"
    ],
    eligibility: {
      minAge: 17,
      maxAge: 25,
      gender: "all",
      incomeLimit: 800000,
      caste: ["all"],
      occupation: ["student"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "Scored in top 20 percentile in Class 12 board examination",
        "Currently enrolled in regular UG/PG degree (not correspondence/open)",
        "Family income below ₹8 lakh per annum",
        "Not availing any other scholarship for same purpose",
        "Must not be pursuing professional courses like Engineering/Medical (separate schemes exist)"
      ]
    },
    documents: [
      { name: "Class 12 Marksheet", mandatory: true, purpose: "Prove top 20 percentile rank", howToGet: "School or state board" },
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "Aadhaar center" },
      { name: "Income Certificate", mandatory: true, purpose: "Below ₹8 lakh limit", howToGet: "Tehsildar/Mamlatdar" },
      { name: "University/College Enrollment Certificate", mandatory: true, purpose: "Prove UG/PG enrollment", howToGet: "College office" },
      { name: "Bank Passbook (Aadhaar-linked)", mandatory: true, purpose: "Direct transfer", howToGet: "Any nationalized bank" }
    ],
    howToApplySteps: [
      "Step 1: Visit scholarships.gov.in (National Scholarship Portal)",
      "Step 2: Register with Aadhaar and Class 12 board roll number",
      "Step 3: System auto-verifies your top 20 percentile status from board data",
      "Step 4: Fill family income and current course details",
      "Step 5: Upload income certificate and enrollment certificate",
      "Step 6: Submit before October 31 deadline",
      "Step 7: Institute verifies application — scholarship credited to bank account"
    ],
    alternativeApply: "Your college scholarship officer or NSP helpline 0120-6619540",
    officialLinks: {
      apply: "https://scholarships.gov.in",
      checkStatus: "https://scholarships.gov.in/applicantDashboard",
      officialWebsite: "https://scholarships.gov.in"
    },
    helpline: "0120-6619540 (NSP Helpdesk)",
    processingTime: "3-4 months",
    commonMistakes: ["Pursuing professional courses like Engineering (not eligible)"],
    deadline: "October 31",
    isActive: true,
    tags: ["merit", "top 20 percentile", "Class 12", "UG", "PG", "scholarship", "all categories"],
    viewCount: 1500000,
    lastUpdated: "2025-01-01T00:00:00Z"
  }
];
