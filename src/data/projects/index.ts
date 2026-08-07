import { CaseStudy } from '@/types/domain';

import { quizBlitz } from './quizblitz';
import { eventManager } from "./event-manager";
// import { portfolioV2 } from "./portfolio-v2";
// import { ecommerce } from "./ecommerce";

export const projects: CaseStudy[] = [quizBlitz, eventManager];

export const featuredProjects = projects.filter((project) => project.featured);