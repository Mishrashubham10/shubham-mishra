import { Technology } from "@/types/portfolio";

export const technologies = {
  react: {
    id: 'react',
    name: 'React',
    category: 'Frontend',
  },

  nextjs: {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Frontend',
  },

  typescript: {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Language',
  },

  nodejs: {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend',
  },

  express: {
    id: 'express',
    name: 'Express.js',
    category: 'Backend',
  },

  mongodb: {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'Database',
  },

  reduxToolkit: {
    id: 'redux-toolkit',
    name: 'Redux Toolkit',
    category: 'Frontend',
  },

  rtkQuery: {
    id: 'rtk-query',
    name: 'RTK Query',
    category: 'Frontend',
  },

  contextApi: {
    id: 'context-api',
    name: 'Context API',
    category: 'Frontend',
  },

  tailwind: {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'Frontend',
  },

  jwt: {
    id: 'jwt',
    name: 'JWT',
    category: 'Backend',
  },

  socketio: {
    id: 'socketio',
    name: 'Socket.IO',
    category: 'Backend',
  },

  postgresql: {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'Database',
  },

  prisma: {
    id: 'prisma',
    name: 'Prisma ORM',
    category: 'Database',
  },

  git: {
    id: 'git',
    name: 'Git',
    category: 'Tool',
  },
} satisfies Record<string, Technology>;