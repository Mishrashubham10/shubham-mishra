import { Engineering } from '@/types/portfolio';

export const engineering: Engineering = {
  domains: [
    {
      id: 'frontend',

      title: 'Frontend Engineering',

      description:
        'Building responsive, accessible and maintainable user interfaces using modern React ecosystems.',

      technologies: [],

      relatedProjects: ['event-manager', 'quizblizz'],
    },

    {
      id: 'backend',

      title: 'Backend Engineering',

      description:
        'Designing REST APIs, authentication systems and scalable backend architectures.',

      technologies: [],

      relatedProjects: ['event-manager', 'quizblizz'],
    },

    {
      id: 'database',

      title: 'Database Design',

      description:
        'Designing MongoDB schemas, relationships and efficient query patterns.',

      technologies: [],

      relatedProjects: ['event-manager'],
    },

    {
      id: 'realtime',

      title: 'Real-Time Systems',

      description:
        'Building synchronized multiplayer experiences using Socket.IO.',

      technologies: [],

      relatedProjects: ['quizblizz'],
    },
  ],
};