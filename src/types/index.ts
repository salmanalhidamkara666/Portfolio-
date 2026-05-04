// User & Auth Types
export interface UserProfile {
  id: string
  email: string
  name?: string
  avatar?: string
  createdAt: Date
  updatedAt: Date
}

export interface UserProfileData {
  currentJobTitle?: string
  yearsOfExperience?: number
  desiredRole?: string
  desiredIndustry?: string
  timeCommitmentHours?: number
  resumeUrl?: string
  currentLocation?: string
  targetLocation?: string
  willingToRelocate?: boolean
  learningPathDuration?: number
}

// Skill Types
export interface UserSkill {
  id: string
  name: string
  category: string
  proficiencyLevel: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  yearsOfExperience?: number
}

export interface SkillGapAnalysis {
  id: string
  targetRole: string
  targetSkill: string
  userProficiencyLevel?: string
  requiredProficiency: string
  gapCategory: 'Strength' | 'Close Match' | 'Critical Gap'
  importance: number
}

// Learning Path Types
export interface LearningPathItem {
  id: string
  weekNumber: number
  title: string
  description?: string
  topicArea: string
  estimatedHours: number
  resources: LearningResource[]
  miniProject?: string
  projectUrl?: string
  order: number
}

export interface LearningResource {
  title: string
  url: string
  type: 'course' | 'video' | 'article' | 'book' | 'other'
  duration?: string
  difficulty?: string
}

export interface LearningPath {
  id: string
  userId: string
  targetRole: string
  durationWeeks: number
  startDate: Date
  endDate: Date
  description?: string
  items: LearningPathItem[]
  progress?: UserProgress
}

export interface UserProgress {
  currentWeek: number
  completedItems: number
  totalItems: number
  progressPercentage: number
  lastAccessedAt: Date
}

// Bridge Project Types
export interface BridgeProject {
  id: string
  title: string
  description?: string
  targetRole: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  scenario: string
  deliverables: string[]
  skillsTargeted: string[]
  estimatedTime: number
  rubric?: Record<string, any>
}

export interface UserBridgeProjectSubmission {
  id: string
  userId: string
  projectId: string
  status: 'not_started' | 'in_progress' | 'submitted' | 'completed'
  submissionUrl?: string
  submissionNotes?: string
  feedback?: string
  score?: number
  completedAt?: Date
}

// Interview Types
export interface InterviewQuestion {
  question: string
  userAnswer?: string
  category: 'technical' | 'behavioral' | 'communication'
  difficulty: 'beginner' | 'intermediate' | 'advanced'
}

export interface InterviewSession {
  id: string
  userId: string
  targetRole: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  questionsAsked: InterviewQuestion[]
  transcript?: string
  overallScore?: number
  technicalScore?: number
  communicationScore?: number
  behavioralScore?: number
  feedback?: string
  improvements?: string[]
  sampleAnswers?: Record<string, string>
  durationMinutes?: number
  completedAt?: Date
}

// Salary Types
export interface SalaryData {
  jobRole: string
  location: string
  country: string
  minSalary: number
  maxSalary: number
  avgSalary: number
  currency: string
  experienceLevel: 'entry' | 'mid' | 'senior'
  salaryTrend?: number
  demandLevel: 'low' | 'medium' | 'high' | 'very_high'
}

export interface CareerTransitionPlanning {
  currentSalary: number
  targetSalary: number
  learningDurationWeeks: number
  jobSearchDurationWeeks: number
  monthlySavings: number
  projectedIncome: ProjectedIncome[]
}

export interface ProjectedIncome {
  month: number
  income: number
  status: 'learning' | 'searching' | 'employed'
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface JobListing {
  id: string
  title: string
  company: string
  description: string
  location: string
  salary?: SalaryRange
  requiredSkills: string[]
  source: 'indeed' | 'adzuna' | 'other'
}

export interface SalaryRange {
  min: number
  max: number
  currency: string
}