import type {
  Career,
  CaseStudy,
  EngineeringPrinciple,
  LearningItem,
  Technology,
} from './domain';

// ========================================
// Portfolio Types
// ========================================

// ========================================
// Common
// ========================================

export type ExternalLink = {
  label: string;
  href: string;
};

export type Image = {
  id: string;
  src: string;
  alt: string;
  featured?: boolean;
};

// ========================================
// Navigation
// ========================================

export type NavigationItem = {
  id?: string;
  label: string;
  href: string;
};

// ========================================
// Profile
// ========================================

export type ProfileHero = {
  badge: string;
  headline: string;
  description: string;
};

export type ProfileAbout = {
  title: string;
  introduction: string;
  philosophy: string;
  currentFocus: string;
};

export type ProfileTech = {
  name: string;
};

export type ProfileTechCategory = {
  category: string;
  items: ProfileTech[];
};

export type Profile = {
  name: string;
  headline: string;
  tagline: string;
  bio: string;

  avatar: string;
  location: string;
  email: string;
  availability: string;

  yearsOfExperience: number;
  currentRole: string;
  resumeUrl: string;

  hero: ProfileHero;
  about: ProfileAbout;

  techStack: ProfileTechCategory[];
};

// ========================================
// Metadata
// ========================================

export type PortfolioMetadata = {
  title: string;
  description: string;
  siteUrl: string;
  author: string;
};

// ========================================
// Contact
// ========================================

export type SocialLink = {
  id: string;
  platform: string;
  href: string;
  icon?: string;
};

export type Contact = {
  email: string;
  phone?: string;
  location: string;
  timezone: string;
  preferredContact: string;
  socials: SocialLink[];
};

// export type Education = {
//   id: string;
//   degree: string;
//   institution: string;
//   location?: string;
//   startDate: string;
//   endDate: string;
// };

// ========================================
// Portfolio
// ========================================
export type PortfolioData = {
  metadata: Metadata;
  navigation: NavigationItem[];
  profile: Profile;
  career: Career;
  projects: CaseStudy[];
  learning: Learning;
  engineering: Engineering;
  contact: Contact;
};

export type EngineeringDomain = {
  id: string;
  title: string;
  description: string;
  technologies: Technology[];
  relatedProjects: string[];
};

export type LearningStatus = 'Learning' | 'Planned' | 'Completed';

export type LearningResource = {
  id: string;
  title: string;
  type: string;
  href?: string;
};

export type LearningMilestone = {
  id: string;
  title: string;
  description?: string;
  completed?: boolean;
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
  roadmap: LearningMilestone[];
  resources: LearningResource[];
  lastUpdated: string;
};

export type LearningProject = {
  id: string;
  title: string;
  description: string;
  status: string;
};

export type LearningGoal = {
  id: string;
  title: string;
  completed: boolean;
};

export type Metadata = {
  title: string;
  description: string;

  version: string;
  repository: string;

  lastUpdated: string;
  buildYear: number;
  keywords: string[];
};

export type Learning = {
  title: string;
  description: string;
  domains: LearningDomain[];
  currentProjects: LearningProject[];
  goals: LearningGoal[];
  certifications: string[];
};

export type Engineering = {
  domains: EngineeringDomain[];
};
