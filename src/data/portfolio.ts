import { projects } from '@/data/projects';
import type { PortfolioData } from '@/types/portfolio';

import { metadata } from './metadata';
import { navigation } from './navigation';
import { profile } from './profile';
import { career } from './career';
// import { caseStudies } from './case-studies';
import { engineering } from './engineering';
import { learning } from './learning';
import { contact } from './contact';

export const portfolio: PortfolioData = {
  metadata,
  navigation,
  profile,
  career,
  projects: projects,
  engineering,
  learning,
  contact,
};