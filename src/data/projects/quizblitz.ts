import { CaseStudy, CaseStudyStatus } from '@/types/domain';
import { technologies } from '../technologies';

export const quizBlitz: CaseStudy = {
  id: 'quizblitz',
  slug: 'quizblitz',
  title: 'QuizBlitz',
  tagline:
    'A real-time multiplayer quiz platform powered by Socket.IO and an event-driven architecture.',
  featured: true,
  status: CaseStudyStatus.Completed,
  overview:
    'QuizBlitz is a full-stack multiplayer quiz platform that enables players to create rooms, join live sessions, answer synchronized questions, and compete on a live leaderboard. The application was designed around a server-authoritative architecture to ensure fairness, consistency, and real-time synchronization between all connected players.',
  problem:
    'Traditional request-response applications struggle to support real-time multiplayer experiences. Players can easily become out of sync due to network latency, timers drift between clients, and duplicate submissions can produce inconsistent results. The challenge was to design an architecture where every player always shares the same game state.',
  solution:
    'The platform uses Socket.IO as the communication layer while the server acts as the single source of truth. Every significant event—including room creation, player joins, quiz start, question progression, answer submission, scoring, and leaderboard updates—is driven through server-side events and immediately broadcast to connected clients.',

  outcomes: [
    {
      id: '1',
      title: 'Real-time synchronization',
      description:
        'All connected players remain synchronized throughout the quiz session.',
    },
    {
      id: '2',
      title: 'Server-authoritative gameplay',
      description:
        'The backend validates answers, controls timers, and calculates scores to prevent inconsistent client state.',
    },
    {
      id: '3',
      title: 'Scalable room architecture',
      description:
        'Independent quiz rooms allow multiple games to run concurrently.',
    },
  ],

  technologies: [
    technologies.react,
    technologies.nextjs,
    technologies.typescript,
    technologies.nodejs,
    technologies.express,
    technologies.mongodb,
    technologies.reduxToolkit,
    // technologies.rtkQuery,
    technologies.contextApi,
    technologies.jwt,
    technologies.git,
  ],

  architecture: [
    {
      id: '1',
      title: 'Client',
      description:
        'React renders the interface and responds to server events without owning the game state.',
    },
    {
      id: '2',
      title: 'Socket Layer',
      description:
        'Socket.IO maintains persistent bidirectional communication between players and the backend.',
    },
    {
      id: '3',
      title: 'Game Engine',
      description:
        'The server manages quiz lifecycle, timers, scoring, room state, and event broadcasting.',
    },
    {
      id: '4',
      title: 'Persistence',
      description:
        'Prisma and PostgreSQL store quiz history, player data, and completed game results.',
    },
  ],

  features: [
    {
      id: '1',
      title: 'Room-based multiplayer',
      description: 'Create and join private quiz rooms.',
      completed: true,
    },
    {
      id: '2',
      title: 'Live synchronized timers',
      description: 'Every player shares identical countdown timers.',
      completed: true,
    },
    {
      id: '3',
      title: 'Real-time leaderboard',
      description: 'Leaderboard updates instantly after every question.',
      completed: true,
    },
    {
      id: '4',
      title: 'Persistent quiz results',
      description: 'Completed quizzes are stored for later analysis.',
      completed: true,
    },
  ],

  challenges: [
    {
      id: '1',
      problem: 'Keeping all players synchronized despite network latency.',
      solution:
        'Moved timer control entirely to the server and broadcast synchronized timestamps.',
    },
    {
      id: '2',
      problem: 'Preventing duplicate answer submissions.',
      solution:
        'The backend validates and accepts only the first valid submission per player.',
    },
    {
      id: '3',
      problem: 'Cleaning inactive rooms.',
      solution:
        'Implemented automatic room cleanup when all players disconnect.',
    },
  ],

  learnings: [
    {
      id: '1',
      title: 'Event-driven architecture',
      description:
        'Learned how event-based communication simplifies real-time systems.',
    },
    {
      id: '2',
      title: 'Server-authoritative design',
      description:
        'Discovered why multiplayer applications should never trust client state.',
    },
    {
      id: '3',
      title: 'Scalable WebSocket systems',
      description:
        'Built reusable room and game state management that can scale to multiple concurrent sessions.',
    },
  ],

  roadmap: [
    {
      id: '1',
      version: 'v2',
      title: 'Authentication',
      description: 'Support authenticated users with persistent profiles.',
      completed: false,
    },
    {
      id: '2',
      version: 'v2',
      title: 'Question Categories',
      description: 'Allow quizzes across multiple categories and difficulties.',
      completed: false,
    },
    {
      id: '3',
      version: 'v3',
      title: 'Friends & Invitations',
      description: 'Invite friends directly into quiz rooms.',
      completed: false,
    },
  ],

  screenshots: [],

  links: {
    github: '',
    live: '',
  },

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
};