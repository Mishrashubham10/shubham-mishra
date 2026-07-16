import { Products } from '@/types/portfolio';

export const products: Products = {
  caseStudies: [
    {
      id: 'event-manager',
      slug: 'event-manager',
      title: 'Event Manager',
      status: 'Maintained',
      shortDescription:
        'A production-ready event management platform built with the MERN stack.',
      overview:
        'An event management platform allowing organizers to create, publish and manage events with secure authentication and role-based access.',
      problem:
        'Managing events manually becomes difficult as organizers need authentication, scheduling, categories, publishing workflows and administration.',
      solution:
        'Designed a scalable full-stack application with authentication, event management, media uploads and an administrative dashboard.',
      technologies: [],
      architecture: [],
      features: [],
      challenges: [],
      learnings: [],
      roadmap: [],
      screenshots: [],
      links: {},
    },

    {
      id: 'quizblizz',
      slug: 'quizblizz',
      title: 'QuizBlizz',
      status: 'Maintained',
      shortDescription:
        'Real-time multiplayer quiz platform powered by Socket.IO.',
      overview:
        'QuizBlizz enables multiple users to compete simultaneously with synchronized questions, timers and live leaderboards.',
      problem:
        'Traditional quiz platforms lack real-time synchronization and engaging multiplayer experiences.',
      solution:
        'Implemented a Socket.IO-based architecture with room management, synchronized timers and real-time score updates.',
      technologies: [],
      architecture: [],
      features: [],
      challenges: [],
      learnings: [],
      roadmap: [],
      screenshots: [],
      links: {},
    },
  ],
};