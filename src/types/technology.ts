export const TECHNOLOGY_IDS = [
  'javascript',
  'typescript',

  'react',
  'nextjs',
  'redux-toolkit',
  'zustand',
  'tailwind-css',
  'shadcn-ui',
  'context-api',

  'nodejs',
  'express',
  'socket-io',

  'mongodb',
  'mongoose',
  'postgresql',
  'prisma',

  'jwt',

  'vercel',
  'render',

  'git',
  'github',
] as const;

export type TechnologyId = (typeof TECHNOLOGY_IDS)[number];