import type { IconType } from 'react-icons';

import {
  SiExpress,
  SiGit,
  SiGithub,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedux,
  SiRender,
  SiShadcnui,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';

import { RiReactjsLine } from 'react-icons/ri';
import { TechnologyId } from '@/types/technology';

export const technologyIcons = {
  javascript: SiJavascript,
  typescript: SiTypescript,

  react: SiReact,
  nextjs: SiNextdotjs,
  'redux-toolkit': SiRedux,
  zustand: RiReactjsLine,
  'tailwind-css': SiTailwindcss,
  'shadcn-ui': SiShadcnui,
  'context-api': RiReactjsLine,

  nodejs: SiNodedotjs,
  express: SiExpress,
  'socket-io': SiSocketdotio,

  mongodb: SiMongodb,
  mongoose: SiMongoose,
  postgresql: SiPostgresql,
  prisma: SiPrisma,

  jwt: SiJsonwebtokens,

  vercel: SiVercel,
  render: SiRender,

  git: SiGit,
  github: SiGithub,
} satisfies Record<TechnologyId, IconType>;