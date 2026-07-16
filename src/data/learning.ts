import { Learning } from '@/types/portfolio';

export const learning: Learning = {
  title: 'Engineering Journey',

  description:
    'Continuous learning through building products, solving problems, and exploring modern software engineering.',

  domains: [
    {
      id: 'dsa',

      title: 'Data Structures & Algorithms',

      description: 'Practicing problem-solving patterns for coding interviews.',

      status: 'Learning',

      currentTopic: 'Sliding Window',

      progress: 35,

      completedMilestones: 18,

      totalMilestones: 50,

      roadmap: [],

      resources: [
        {
          id: 'leetcode',
          title: 'LeetCode',
          type: 'Website',
        },
        {
          id: 'neetcode',
          title: 'NeetCode',
          type: 'Website',
        },
      ],

      lastUpdated: '2026-07-16',
    },

    {
      id: 'system-design',

      title: 'System Design',

      description: 'Learning scalable architectures and distributed systems.',

      status: 'Learning',

      currentTopic: 'Scalable Backend Systems',

      progress: 20,

      completedMilestones: 8,

      totalMilestones: 40,

      roadmap: [],

      resources: [],

      lastUpdated: '2026-07-16',
    },

    {
      id: 'docker',

      title: 'Docker & DevOps',

      description: 'Containerization, deployment and production environments.',

      status: 'Learning',

      currentTopic: 'Docker Fundamentals',

      progress: 15,

      completedMilestones: 3,

      totalMilestones: 20,

      roadmap: [],
      resources: [],
      lastUpdated: '2026-07-16',
    },

    {
      id: 'cloud',
      title: 'Cloud Engineering',
      description: 'Learning AWS fundamentals and cloud-native deployment.',
      status: 'Planned',
      currentTopic: 'AWS Basics',
      progress: 0,
      completedMilestones: 0,
      totalMilestones: 25,
      roadmap: [],
      resources: [],
      lastUpdated: '2026-07-16',
    },

    {
      id: 'ai',
      title: 'AI Engineering',
      description:
        'Using AI tools to build better software and improve development workflows.',
      status: 'Learning',
      currentTopic: 'AI-assisted Development',
      progress: 10,
      completedMilestones: 2,
      totalMilestones: 20,
      roadmap: [],
      resources: [],
      lastUpdated: '2026-07-16',
    },
  ],

  currentProjects: [
    {
      id: 'portfolio-v2',
      title: 'Portfolio v2',
      description:
        'Building a production-grade portfolio focused on software engineering.',
      status: 'Building',
    },

    {
      id: 'event-manager',
      title: 'Event Manager',
      description: 'Production-ready event management platform.',
      status: 'Building',
    },

    {
      id: 'quizblizz',
      title: 'QuizBlizz',
      description: 'Real-time multiplayer quiz platform.',
      status: 'Building',
    },
  ],

  goals: [
    {
      id: 'docker',
      title: 'Master Docker',
      completed: false,
    },

    {
      id: 'redis',
      title: 'Learn Redis',
      completed: false,
    },

    {
      id: 'cicd',
      title: 'Build CI/CD Pipeline',
      completed: false,
    },

    {
      id: 'aws',
      title: 'Deploy on AWS',
      completed: false,
    },

    {
      id: 'microservices',
      title: 'Learn Microservices',
      completed: false,
    },
  ],

  certifications: [],
};