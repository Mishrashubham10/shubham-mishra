import { CaseStudyStatus, type CaseStudy } from '@/types/domain';

import { technologies } from './technologies';

export const projects: CaseStudy[] = [
  {
    id: 'quizblizz',
    slug: 'quizblizz',
    title: 'QuizBlizz',
    tagline:
      'A real-time multiplayer quiz platform powered by event-driven architecture.',
    status: CaseStudyStatus.Completed,
    overview:
      'QuizBlitz is a production-ready multiplayer quiz platform that enables participants to create rooms, join live quiz sessions, answer questions in real time, and compete on synchronized leaderboards. The project was built to explore event-driven backend architecture, WebSocket communication, real-time state synchronization, and scalable full-stack application design.',
    problem:
      'Traditional quiz applications rely on request-response communication, making it difficult to deliver a consistent multiplayer experience. Players can experience delayed timers, inconsistent scores, and unsynchronized game state when multiple users participate simultaneously. The challenge was to build a system where every participant experiences the same quiz state regardless of network latency.',
    solution:
      'The platform was designed using a server-authoritative architecture powered by Socket.IO. The backend manages quiz progression, timers, answer validation, scoring, and leaderboard generation while the frontend reacts to server events in real time. This ensures a single source of truth and consistent gameplay for every connected participant.',
    featured: true,
    technologies: [
      technologies.react,
      technologies.typescript,
      technologies.nodejs,
      technologies.express,
      technologies.socketio,
      technologies.postgresql,
      technologies.prisma,
      technologies.zustand,
      technologies.vercel,
      technologies.render,
    ],

    architecture: [],

    features: [
      {
        id: 'room-system',
        title: 'Room-Based Multiplayer',
        description:
          'Players can create private rooms, share join codes, and participate in synchronized quiz sessions.',
        completed: true,
      },
      {
        id: 'leaderboard',
        title: 'Live Leaderboard',
        description:
          'Scores are calculated by the server and broadcast instantly to every participant.',
        completed: true,
      },
      {
        id: 'timers',
        title: 'Synchronized Timers',
        description:
          'Countdown timers remain synchronized across all connected clients.',
        completed: true,
      },
      {
        id: 'results',
        title: 'Persistent Results',
        description:
          'Quiz history and final results are stored using PostgreSQL and Prisma ORM.',
        completed: true,
      },
    ],

    challenges: [
      {
        id: 'timer-sync',
        problem:
          'Keeping countdown timers synchronized across every connected player.',
        solution:
          'Moved timer management entirely to the server and broadcast updates through Socket.IO.',
      },
      {
        id: 'duplicate-answers',
        problem:
          'Preventing players from submitting multiple answers for the same question.',
        solution:
          'Implemented server-side validation before accepting answer submissions.',
      },
      {
        id: 'room-cleanup',
        problem: 'Cleaning up inactive rooms and disconnected users.',
        solution:
          'Created automatic room lifecycle management triggered by socket events.',
      },
    ],

    learnings: [
      {
        id: 'architecture',
        title: 'Event-Driven Architecture',
        description:
          'Learned how to design applications around events instead of request-response communication.',
      },
      {
        id: 'state',
        title: 'Server-Authoritative Systems',
        description:
          'Gained experience building multiplayer systems with the server acting as the single source of truth.',
      },
      {
        id: 'deployment',
        title: 'Production Deployment',
        description:
          'Learned to deploy WebSocket applications across independent frontend and backend services.',
      },
    ],

    roadmap: [
      {
        id: 'auth',
        version: 'v2',
        title: 'User Authentication',
        description:
          'Allow players to create persistent accounts and track quiz history.',
        completed: false,
      },
      {
        id: 'friends',
        version: 'v2',
        title: 'Friends System',
        description: 'Invite friends and create private multiplayer sessions.',
        completed: false,
      },
      {
        id: 'categories',
        version: 'v2',
        title: 'Question Categories',
        description: 'Support quizzes grouped by topic and difficulty.',
        completed: false,
      },
      {
        id: 'analytics',
        version: 'v3',
        title: 'Analytics Dashboard',
        description: 'Visualize player statistics and historical performance.',
        completed: false,
      },
    ],
    screenshots: [],
    links: {},
    outcomes: [
      {
        id: '1',
        title: 'Real-time Synchronization',
        description:
          'Built synchronized multiplayer gameplay using WebSockets and server-driven state updates.',
      },
      {
        id: '2',
        title: 'Scalable Room Architecture',
        description:
          'Implemented isolated room management supporting multiple concurrent quiz sessions.',
      },
      {
        id: '3',
        title: 'Production Deployment',
        description:
          'Successfully deployed frontend, backend, and PostgreSQL database as independent services.',
      },
      {
        id: '4',
        title: 'Reliable Scoring',
        description:
          'Designed a server-authoritative scoring system with duplicate-answer prevention.',
      },
    ],

    metadata: [
      {
        id: 'status',
        label: 'Status',
        value: 'Completed',
      },
      {
        id: 'platform',
        label: 'Platform',
        value: 'Web',
      },
      {
        id: 'architecture',
        label: 'Architecture',
        value: 'Event Driven',
      },
      {
        id: 'category',
        label: 'Category',
        value: 'Personal Project',
      },
    ],
  },

  {
    id: 'event-manager',
    slug: 'event-manager',
    title: 'Event Manager',
    tagline:
      'A production-ready event management platform built with the MERN stack.',
    status: CaseStudyStatus.Completed,

    overview:
      'An event management platform allowing organizers to create, publish and manage events with secure authentication and role-based access.',
    problem:
      'Managing events manually becomes difficult as organizers need authentication, scheduling, categories, publishing workflows and administration.',
    solution:
      'Designed a scalable full-stack application with authentication, event management, media uploads and an administrative dashboard.',

    featured: true,

    technologies: [
      technologies.react,
      technologies.typescript,
      technologies.nodejs,
      technologies.express,
      technologies.mongodb,
      technologies.mongoose,
      technologies.jwt,
      technologies.vercel,
      technologies.render,
    ],

    architecture: [],
    features: [],
    challenges: [],
    learnings: [],
    roadmap: [],
    screenshots: [],
    links: {},
    metadata: [
      {
        id: 'status',
        label: 'Status',
        value: 'Completed',
      },
      {
        id: 'platform',
        label: 'Platform',
        value: 'Web Application',
      },
      {
        id: 'architecture',
        label: 'Architecture',
        value: 'REST API',
      },
      {
        id: 'category',
        label: 'Category',
        value: 'Personal Project',
      },
    ],
    outcomes: [],
  },
];
