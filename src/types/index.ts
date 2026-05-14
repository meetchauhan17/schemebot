export type SchemeCategory = "agriculture" | "health" | "education" | "women" | "housing" | "employment" | "social" | "insurance" | "pension" | "state"
export type CasteCategory = "general" | "obc" | "sc" | "st" | "minority" | "pwd" | "all"
export type OccupationType = "farmer" | "student" | "daily-wage" | "salaried" | "self-employed" | "unemployed" | "retired" | "any"
export type IncomeRange = "below-1l" | "1-3l" | "3-6l" | "6-12l" | "above-12l"

export interface Document {
  name: string
  mandatory: boolean
  purpose: string
  howToGet: string
}

export interface OfficialLinks {
  apply: string
  checkStatus: string
  officialWebsite: string
  mobileApp?: string
}

export interface EligibilityCriteria {
  minAge: number | null
  maxAge: number | null
  gender: "all" | "female" | "male"
  incomeLimit: number | null
  caste: CasteCategory[]
  occupation: OccupationType[]
  states: string[]
  familySize: number | null
  additionalCriteria: string[]
}

export interface Scheme {
  id: string
  name: string
  nameHindi: string
  nameGujarati: string
  department: string
  ministry: string
  category: SchemeCategory
  state: string
  description: string
  descriptionHindi: string
  benefits: string[]
  benefitAmount: string
  eligibility: EligibilityCriteria
  documents: Document[]
  howToApplySteps: string[]
  alternativeApply: string
  officialLinks: OfficialLinks
  helpline: string
  processingTime: string
  commonMistakes: string[]
  deadline: string | null
  isActive: boolean
  tags: string[]
  viewCount: number
  lastUpdated: string
}

export interface UserProfile {
  name?: string
  age?: number
  gender?: "male" | "female" | "other"
  state?: string
  district?: string
  area?: "rural" | "urban" | "semi-urban"
  occupation?: OccupationType
  annualIncome?: IncomeRange
  caste?: CasteCategory
  isMarried?: boolean
  childrenCount?: number
  hasSeniorCitizen?: boolean
  hasPwD?: boolean
  preferredLanguage: string
  onboardingComplete: boolean
  createdAt: string
}

export interface ChatMessage {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
  isStreaming?: boolean
  schemes?: Scheme[]
}

export interface Language {
  code: string
  name: string
  nativeName: string
  isRTL: boolean
  flag: string
}

export interface AnalyticsEvent {
  event: string
  schemeId?: string
  language?: string
  state?: string
  timestamp: string
}

export interface AdminSchemeForm {
  name: string
  department: string
  category: SchemeCategory
  description: string
  benefitAmount: string
  eligibility: EligibilityCriteria
  documents: Document[]
  howToApplySteps: string[]
  officialLinks: OfficialLinks
  helpline: string
  deadline: string | null
  tags: string[]
}
