import { Technology, TechnologyCategory } from '@/types/domain';

export const technologies = {
  // =========================
  // Languages
  // =========================

  javascript: {
    id: 'javascript',
    name: 'JavaScript',
    category: TechnologyCategory.Language,
    officialUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    featured: true,
    experience: 3,
  },

  typescript: {
    id: 'typescript',
    name: 'TypeScript',
    category: TechnologyCategory.Language,
    officialUrl: 'https://www.typescriptlang.org/',
    featured: true,
    experience: 2,
  },

  // =========================
  // Frontend
  // =========================

  react: {
    id: 'react',
    name: 'React',
    category: TechnologyCategory.Frontend,
    officialUrl: 'https://react.dev',
    featured: true,
    experience: 3,
  },

  nextjs: {
    id: 'nextjs',
    name: 'Next.js',
    category: TechnologyCategory.Frontend,
    officialUrl: 'https://nextjs.org',
    featured: true,
    experience: 2,
  },

  reduxToolkit: {
    id: 'redux-toolkit',
    name: 'Redux Toolkit',
    category: TechnologyCategory.Frontend,
    officialUrl: 'https://redux-toolkit.js.org/',
    experience: 2,
  },

  rtkQuery: {
    id: 'rtk-query',
    name: 'RTK Query',
    category: TechnologyCategory.Frontend,
    officialUrl: 'https://redux-toolkit.js.org/rtk-query/overview',
    experience: 2,
  },

  tailwind: {
    id: 'tailwind-css',
    name: 'Tailwind CSS',
    category: TechnologyCategory.Frontend,
    officialUrl: 'https://tailwindcss.com',
    featured: true,
    experience: 3,
  },

  shadcn: {
    id: 'shadcn-ui',
    name: 'shadcn/ui',
    category: TechnologyCategory.Frontend,
    officialUrl: 'https://ui.shadcn.com',
    experience: 1,
  },

  contextApi: {
    id: 'context-api',
    name: 'Context Api',
    category: TechnologyCategory.Frontend,
    experience: 2,
  },

  // =========================
  // Backend
  // =========================

  nodejs: {
    id: 'nodejs',
    name: 'Node.js',
    category: TechnologyCategory.Backend,
    officialUrl: 'https://nodejs.org',
    featured: true,
    experience: 3,
  },

  express: {
    id: 'express',
    name: 'Express.js',
    category: TechnologyCategory.Backend,
    officialUrl: 'https://expressjs.com',
    featured: true,
    experience: 3,
  },

  socketio: {
    id: 'socket-io',
    name: 'Socket.IO',
    category: TechnologyCategory.Backend,
    officialUrl: 'https://socket.io',
    experience: 1,
  },

  // =========================
  // Database
  // =========================

  mongodb: {
    id: 'mongodb',
    name: 'MongoDB',
    category: TechnologyCategory.Database,
    officialUrl: 'https://www.mongodb.com',
    featured: true,
    experience: 3,
  },

  mongoose: {
    id: 'mongoose',
    name: 'Mongoose',
    category: TechnologyCategory.Database,
    officialUrl: 'https://mongoosejs.com',
    experience: 3,
  },

  postgresql: {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: TechnologyCategory.Database,
    officialUrl: 'https://www.postgresql.org',
    experience: 1,
  },

  prisma: {
    id: 'prisma',
    name: 'Prisma',
    category: TechnologyCategory.Database,
    officialUrl: 'https://www.prisma.io',
    experience: 1,
  },

  jwt: {
    id: 'jwt',
    name: 'JSONWEBTOKEN',
    category: TechnologyCategory.Tools,
    officialUrl: 'https://jsonwebtoken.com',
    experience: 2,
  },

  // =========================
  // Cloud
  // =========================

  vercel: {
    id: 'vercel',
    name: 'Vercel',
    category: TechnologyCategory.Cloud,
    officialUrl: 'https://vercel.com',
    experience: 2,
  },

  render: {
    id: 'render',
    name: 'Render',
    category: TechnologyCategory.Cloud,
    officialUrl: 'https://render.com',
    experience: 2,
  },

  // =========================
  // DevOps
  // =========================

  git: {
    id: 'git',
    name: 'Git',
    category: TechnologyCategory.DevOps,
    officialUrl: 'https://git-scm.com',
    featured: true,
    experience: 3,
  },

  github: {
    id: 'github',
    name: 'GitHub',
    category: TechnologyCategory.DevOps,
    officialUrl: 'https://github.com',
    featured: true,
    experience: 3,
  },
} satisfies Record<string, Technology>;

// =========================
// Collections
// =========================

export const technologyList = Object.values(technologies);

export const getTechnologiesByCategory = (category: TechnologyCategory) =>
  technologyList.filter((technology) => technology.category === category);
