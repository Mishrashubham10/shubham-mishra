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

import type {
  Career,
  CaseStudy,
  EngineeringPrinciple,
  LearningItem,
} from './domain';

export type PortfolioData = {
  metadata: PortfolioMetadata;
  navigation: NavigationItem[];

  profile: Profile;

  career: Career;
  projects: CaseStudy[];
  learning: LearningItem[];
  engineering: EngineeringPrinciple[];

  contact: Contact;
};
