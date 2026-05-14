import { Scheme } from "@/types";

export const schemesPart14: Scheme[] = [
  // EDUCATION (unique schemes not in parts 1-7)
  {
    id: "pm-usp-scholarship",
    name: "PM-USP (PM Uchchatar Shiksha Protsahan)",
    nameHindi: "पीएम-यूएसपी छात्रवृत्ति",
    nameGujarati: "PM-USP શિષ્યવૃત્તિ",
    department: "Department of Higher Education",
    ministry: "Ministry of Education",
    category: "education",
    state: "all",
    description: "Scholarship for college and university students to support their higher education based on merit and family income.",
    descriptionHindi: "मेधा और पारिवारिक आय के आधार पर कॉलेज और विश्वविद्यालय के छात्रों को उनकी उच्च शिक्षा में सहायता के लिए छात्रवृत्ति।",
    benefitAmount: "₹12,000 to ₹20,000 per year",
    benefits: [
      "₹12,000 per annum at Graduation level for first three years",
      "₹20,000 per annum at Post-Graduation level",
      "Directly credited to student's bank account (DBT)",
      "Helps cover tuition fees and hostel charges"
    ],
    eligibility: {
      minAge: 18, maxAge: 25, gender: "all",
      incomeLimit: 450000, caste: ["all"],
      occupation: ["student"],
      states: ["all"],
      familySize: null,
      additionalCriteria: [
        "Must be above 80th percentile of successful candidates in 10+2",
        "Must be pursuing regular course (not correspondence)",
        "Must not be receiving any other scholarship"
      ]
    },
    documents: [
      { name: "10+2 Marksheet", mandatory: true, purpose: "Verify percentile", howToGet: "From school/board" },
      { name: "Income Certificate", mandatory: true, purpose: "Verify family income", howToGet: "Mamlatdar/Tehsildar office" },
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "Aadhaar center" },
      { name: "College Admission Fee Receipt", mandatory: true, purpose: "Prove current enrollment", howToGet: "From college office" }
    ],
    howToApplySteps: [
      "Step 1: Visit scholarships.gov.in (National Scholarship Portal)",
      "Step 2: Register as a new user with Aadhaar",
      "Step 3: Select 'Department of Higher Education' -> 'Central Sector Scheme of Scholarships'",
      "Step 4: Fill academic details and upload documents",
      "Step 5: Submit the form and take a printout",
      "Step 6: Submit the printout to your College/University for online verification"
    ],
    alternativeApply: "N/A — Apply via NSP portal only",
    officialLinks: {
      apply: "https://scholarships.gov.in",
      checkStatus: "https://scholarships.gov.in",
      officialWebsite: "https://education.gov.in"
    },
    helpline: "0120-6619540 (NSP)",
    processingTime: "90-120 days after verification",
    commonMistakes: [
      "Incorrect IFSC code or bank account number",
      "Not getting the application verified by the college on time"
    ],
    deadline: "Usually October 31st each year", isActive: true,
    tags: ["scholarship", "college", "degree", "higher education", "student"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },

  // WOMEN & CHILD (unique schemes not in parts 1-7)
  {
    id: "mahila-samman-savings-new",
    name: "Mahila Samman Savings Certificate",
    nameHindi: "महिला सम्मान बचत प्रमाण पत्र",
    nameGujarati: "મહિલા સન્માન બચત પ્રમાણપત્ર",
    department: "Department of Posts",
    ministry: "Ministry of Finance",
    category: "women",
    state: "all",
    description: "One-time small savings scheme for women and girls for a period of 2 years.",
    descriptionHindi: "2 साल की अवधि के लिए महिलाओं और लड़कियों के लिए एक बार की छोटी बचत योजना।",
    benefitAmount: "7.5% fixed interest rate for 2 years",
    benefits: [
      "Fixed interest rate of 7.5% per annum",
      "Maximum deposit up to ₹2 lakh",
      "Minimum deposit only ₹1,000",
      "Partial withdrawal allowed after 1 year (up to 40%)",
      "Compounded quarterly and paid on maturity"
    ],
    eligibility: {
      minAge: null, maxAge: null, gender: "female",
      incomeLimit: null, caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Available for any woman or a girl child (via guardian)"]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: true, purpose: "Identity", howToGet: "Aadhaar center" },
      { name: "PAN Card", mandatory: true, purpose: "Financial KYC", howToGet: "Income tax portal" },
      { name: "Bank Account / Post Office Savings Account", mandatory: true, purpose: "Transfer funds", howToGet: "Bank/Post office" }
    ],
    howToApplySteps: [
      "Step 1: Visit your nearest Post Office",
      "Step 2: Fill the 'Form-1' for Mahila Samman Savings Certificate",
      "Step 3: Submit Aadhaar and PAN copies",
      "Step 4: Deposit the amount (min ₹1,000, max ₹2 lakh)",
      "Step 5: Receive the certificate/passbook"
    ],
    alternativeApply: "Available at all nationalized banks",
    officialLinks: {
      apply: "Post Office / Bank",
      checkStatus: "Check Passbook",
      officialWebsite: "https://www.indiapost.gov.in"
    },
    helpline: "1800-266-6868",
    processingTime: "Immediate",
    commonMistakes: ["Trying to deposit more than ₹2 lakh (limit for the scheme)"],
    deadline: "March 31, 2025 (currently)", isActive: true,
    tags: ["women savings", "fixed deposit", "high interest", "financial empowerment"],
    viewCount: 0, lastUpdated: "2026-01-01"
  },
  {
    id: "mission-shakti",
    name: "Mission Shakti (Sambal & Samarthya)",
    nameHindi: "मिशन शक्ति",
    nameGujarati: "મિશન શક્તિ",
    department: "Ministry of Women and Child Development",
    ministry: "WCD",
    category: "women",
    state: "all",
    description: "Integrated women empowerment program for safety, security, and empowerment of women.",
    descriptionHindi: "महिलाओं की सुरक्षा, संरक्षा और सशक्तिकरण के लिए एकीकृत महिला सशक्तिकरण कार्यक्रम।",
    benefitAmount: "Support services including legal aid and training",
    benefits: [
      "Sambal: Safety and security (One Stop Centres, 181 Women Helpline)",
      "Samarthya: Empowerment (Palna creches, working women hostels)",
      "Free legal counseling and psycho-social support",
      "Financial aid for setting up self-help groups (SHG)",
      "Skill training for livelihood"
    ],
    eligibility: {
      minAge: null, maxAge: null, gender: "female",
      incomeLimit: null, caste: ["all"],
      occupation: ["any"],
      states: ["all"],
      familySize: null,
      additionalCriteria: ["Available to all women, especially those in distress"]
    },
    documents: [
      { name: "Aadhaar Card", mandatory: false, purpose: "Registration", howToGet: "Aadhaar center" }
    ],
    howToApplySteps: [
      "Step 1: For emergency safety, call 181 (Women Helpline)",
      "Step 2: For legal/medical help, visit the nearest 'One Stop Centre' (Sakhi)",
      "Step 3: For empowerment benefits, contact the District Hub for Empowerment of Women (DHEW)",
      "Step 4: Register your SHG with the district WCD office for grants"
    ],
    alternativeApply: "Visit your local Anganwadi center for guidance",
    officialLinks: {
      apply: "Contact District WCD Office",
      checkStatus: "N/A",
      officialWebsite: "https://wcd.nic.in"
    },
    helpline: "181 (Women Helpline)",
    processingTime: "Immediate for safety services",
    commonMistakes: ["N/A"],
    deadline: null, isActive: true,
    tags: ["women safety", "empowerment", "helpline", "legal aid", "hostel"],
    viewCount: 0, lastUpdated: "2026-01-01"
  }
];
