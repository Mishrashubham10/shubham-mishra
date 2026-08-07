// ========================================
// Common
// ========================================

import { TechnologyId } from './technology';

export type ExternalLink = {
  label: string;
  href: string;
};

export type ProjectMetadata = {
  id: string;
  label: string;
  value: string;
};

export type Image = {
  id: string;
  src: string;
  alt: string;
};

// ========================================
// Technology
// ========================================

export enum TechnologyCategory {
  Language = 'Language',
  Frontend = 'Frontend',
  Backend = 'Backend',
  Database = 'Database',
  Cloud = 'Cloud',
  DevOps = 'DevOps',
  Testing = 'Testing',
  Tools = 'Tools',
}

export type Technology = {
  id: TechnologyId;
  name: string;
  category: TechnologyCategory;
  icon?: string;
  officialUrl?: string;
  featured?: boolean;
  experience?: number;
};

// ========================================
// Career
// ========================================

export enum EmploymentType {
  FullTime = 'Full Time',
  PartTime = 'Part Time',
  Internship = 'Internship',
  Freelance = 'Freelance',
  Contract = 'Contract',
}

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
  education: Education[];
};

// ========================================
// Projects
// ========================================

export enum CaseStudyStatus {
  Completed = 'Completed',
  InProgress = 'In Progress',
  Planned = 'Planned',
}

export type Outcome = {
  id: string;
  title: string;
  description: string;
};

export type ArchitectureSection = {
  id: string;
  title: string;
  description: string;
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

export type Screenshot = Image & {
  featured?: boolean;
};

export type ProjectLink = {
  github?: string;
  live?: string;
  documentation?: string;
};

export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  featured: boolean;
  status: CaseStudyStatus;
  overview: string;
  problem: string;
  solution: string;
  outcomes: Outcome[];
  technologies: Technology[];
  architecture: ArchitectureSection[];
  features: Feature[];
  challenges: Challenge[];
  learnings: LearningPoint[];
  roadmap: Milestone[];
  screenshots: Screenshot[];
  links: ProjectLink;
  metadata: ProjectMetadata[];
};

// ========================================
// Navigation
// ========================================

export type NavigationItem = {
  label: string;
  href: string;
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
  socials: SocialLink[];
};

// ========================================
// Learning
// ========================================

export type LearningItem = {
  id: string;
  title: string;
  description: string;
  technologies?: Technology[];
  completed: boolean;
};

// ========================================
// Engineering
// ========================================

export type EngineeringPrinciple = {
  id: string;
  title: string;
  description: string;
};

// ========================================
// Portfolio
// ========================================

export type PortfolioMetadata = {
  title: string;
  description: string;
  siteUrl: string;
  author: string;
};

export type PortfolioProfile = {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  avatar: string;
};

export type PortfolioData = {
  metadata: PortfolioMetadata;
  navigation: NavigationItem[];
  profile: PortfolioProfile;
  career: Career;
  projects: CaseStudy[];
  learning: LearningItem[];
  engineering: EngineeringPrinciple[];
  contact: Contact;
};
