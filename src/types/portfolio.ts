// ======================================================
// Portfolio v2 Domain Models
// ======================================================

// ======================================================
// Shared Enums
// ======================================================

export type AvailabilityStatus =
  | 'Open to Work'
  | 'Open to Freelance'
  | 'Open for Collaboration'
  | 'Unavailable';

export type EmploymentType =
  | 'Full-time'
  | 'Part-time'
  | 'Internship'
  | 'Freelance'
  | 'Contract';

export type CaseStudyStatus =
  | 'Planning'
  | 'In Progress'
  | 'Completed'
  | 'Maintained';

export type LearningStatus = 'Planned' | 'Learning' | 'Completed';

export type Tools =
  | 'Language'
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'DevOps'
  | 'Cloud'
  | 'Testing'
  | 'Tools';

// ======================================================
// Shared Models
// ======================================================

export type NavigationItem = {
  id: string;
  label: string;
  href: string;
};

export type SocialLink = {
  id: string;
  name: string;
  url: string;
  icon: string;
};

export type Technology = {
  id: string;
  name: string;
  category: Tools;
  icon?: string;
  officialUrl?: string;
  featured?: boolean;
  experience?: number;
};

export type Feature = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
};

export type Challenge = {
  id: string;
  problem: string;
  solution: string;
  outcome?: string;
};

export type LearningPoint = {
  id: string;
  title: string;
  description: string;
};

export type Milestone = {
  id: string;
  version: string;
  title: string;
  description: string;
  completed: boolean;
};

export type Screenshot = {
  id: string;
  title: string;
  image: string;
  description?: string;
};

export type ProjectLink = {
  github?: string;
  live?: string;
  documentation?: string;
  api?: string;
};

export type ArchitectureSection = {
  id: string;
  title: string;
  description: string;
};

// ======================================================
// Metadata
// ======================================================

export type Metadata = {
  title: string;
  description: string;
  version: string;
  repository: string;
  lastUpdated: string;
  buildYear: number;
  keywords: string[];
};

// ======================================================
// Profile
// ======================================================
export interface HeroContent {
  badge: string;
  headline: string;
  description: string;
}

export interface AboutContent {
  title: string;
  introduction: string;
  philosophy: string;
  currentFocus: string;
}

export interface TechItem {
  name: string;
}

export interface TechCategory {
  category: string;
  items: TechItem[];
}

export type Profile = {
  name: string;
  headline: string;
  tagline: string;
  bio: string;
  avatar: string;
  location: string;
  email: string;
  phone?: string;
  availability: AvailabilityStatus;
  yearsOfExperience: number;
  currentRole?: string;
  resumeUrl: string;

  hero: HeroContent;
  about: AboutContent;
  techStack: TechCategory[];
};

// ======================================================
// Career
// ======================================================

export type CareerExperience = {
  id: string;
  company: string;
  role: string;
  employmentType: EmploymentType;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  overview: string;
  contributions: string[];
  technologies: Technology[];
};

// export type CareerAchievement = {
//   id: string;
//   title: string;
//   description: string;
// };

export type Education = {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  startDate: string;
  endDate: string;
};

export type Career = {
  experiences: CareerExperience[];
  // achievements: CareerAchievement[];
  education: Education[];
};

// ======================================================
// Products
// ======================================================
export type Outcome = {
  id: string;
  title: string;
  description: string;
};

export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  status: CaseStudyStatus;
  tagline: string;
  overview: string;
  problem: string;
  solution: string;
  technologies: Technology[];
  architecture: ArchitectureSection[];
  features: Feature[];
  challenges: Challenge[];
  learnings: LearningPoint[];
  roadmap: Milestone[];
  screenshots: Screenshot[];
  links: ProjectLink;

  outcomes: Outcome[];
};

export type Products = {
  caseStudies: CaseStudy[];
};

// ======================================================
// Engineering
// ======================================================

export type EngineeringDomain = {
  id: string;
  title: string;
  description: string;
  technologies: Technology[];
  relatedProjects: string[];
};

export type Engineering = {
  domains: EngineeringDomain[];
};

// ======================================================
// Learning
// ======================================================
export type ISODate = string;

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
};

export type LearningResource = {
  id: string;
  title: string;
  type: 'Book' | 'Course' | 'Documentation' | 'Website' | 'Video';
  url?: string;
};

export type Goal = {
  id: string;
  title: string;
  completed: boolean;
};

export type CurrentProject = {
  id: string;
  title: string;
  description: string;
  status: 'Planning' | 'Building' | 'Completed';
};

export type LearningDomain = {
  id: string;
  title: string;
  description: string;
  status: LearningStatus;
  currentTopic: string;
  progress: number;
  completedMilestones: number;
  totalMilestones: number;
  roadmap: Milestone[];
  resources: LearningResource[];
  lastUpdated: ISODate;
};

export type Learning = {
  title: string;
  description: string;
  domains: LearningDomain[];
  currentProjects: CurrentProject[];
  goals: Goal[];
  certifications: Certification[];
};

// ======================================================
// Contact
// ======================================================

export type Contact = {
  email: string;
  phone?: string;
  location: string;
  timezone: string;
  preferredContact: 'Email' | 'LinkedIn';
  socials: SocialLink[];
};

// ======================================================
// Root Model
// ======================================================

export type PortfolioData = {
  metadata: Metadata;
  navigation: NavigationItem[];
  profile: Profile;
  career: Career;
  products: Products;
  engineering: Engineering;
  learning: Learning;
  contact: Contact;
};
