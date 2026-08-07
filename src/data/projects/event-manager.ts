import { CaseStudy, CaseStudyStatus } from '@/types/domain';
import { technologies } from '../technologies';

export const eventManager: CaseStudy = {
  id: 'event-manager',
  slug: 'event-manager',
  title: 'Event Manager',
  tagline:
    'A modern event management platform with role-based access, scheduling, media uploads, and an intuitive administrative dashboard.',

  featured: true,
  status: CaseStudyStatus.Completed,
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

  overview:
    'Event Manager is a full-stack event management platform designed for administrators and organizers to efficiently manage events, categories, schedules, and media assets. The application focuses on clean workflows, secure authentication, scalable APIs, and an intuitive dashboard experience.',
  problem:
    'Managing events manually becomes increasingly difficult as the number of organizers, categories, schedules, and uploaded assets grows. The challenge was to design a centralized system capable of securely managing event lifecycles while maintaining a smooth user experience.',
  solution:
    'The platform implements a secure role-based architecture using JWT authentication, RESTful APIs, media upload support, and centralized event management. Administrators can manage categories, publish events, organize schedules, and control platform content through a responsive dashboard.',

  outcomes: [
    {
      id: '1',
      title: 'Centralized event management',
      description:
        'Administrators can manage the complete lifecycle of events from a single dashboard.',
    },
    {
      id: '2',
      title: 'Role-based administration',
      description:
        'Protected administrative routes ensure only authorized users can manage platform resources.',
    },
    {
      id: '3',
      title: 'Efficient content organization',
      description:
        'Categories, schedules, and media assets are organized through reusable backend services.',
    },
  ],

  technologies: [
    technologies.react,
    technologies.nextjs,
    technologies.typescript,
    technologies.nodejs,
    technologies.express,
    technologies.mongodb,
    technologies.mongoose,
    technologies.jwt,
    technologies.tailwind,
    technologies.git,
  ],

  architecture: [
    {
      id: '1',
      title: 'Client Application',
      description:
        'A responsive React and Next.js interface provides dashboards, forms, and event management workflows.',
    },
    {
      id: '2',
      title: 'REST API',
      description:
        'Express.js exposes secure endpoints for authentication, categories, events, uploads, and administration.',
    },
    {
      id: '3',
      title: 'Business Layer',
      description:
        'Controllers and services handle validation, authorization, scheduling, and event publishing logic.',
    },
    {
      id: '4',
      title: 'Persistence',
      description:
        'MongoDB stores users, categories, events, schedules, and media metadata through Mongoose models.',
    },
  ],

  features: [
    {
      id: '1',
      title: 'Role-based authentication',
      description:
        'Secure JWT authentication with protected administrative routes.',
      completed: true,
    },
    {
      id: '2',
      title: 'Event management',
      description:
        'Create, update, publish, and organize events from a centralized dashboard.',
      completed: true,
    },
    {
      id: '3',
      title: 'Category management',
      description:
        'Organize events into reusable categories for improved discoverability.',
      completed: true,
    },
    {
      id: '4',
      title: 'Media uploads',
      description:
        'Upload and manage event images for a richer event experience.',
      completed: true,
    },
    {
      id: '5',
      title: 'Responsive dashboard',
      description:
        'Optimized management experience across desktop and mobile devices.',
      completed: true,
    },
  ],

  challenges: [
    {
      id: '1',
      problem:
        'Designing a flexible event model capable of supporting scheduling, categories, and media.',
      solution:
        'Normalized the database structure and separated concerns into reusable Mongoose models.',
    },
    {
      id: '2',
      problem:
        'Protecting administrative functionality from unauthorized access.',
      solution:
        'Implemented JWT authentication and middleware-based route authorization.',
    },
    {
      id: '3',
      problem:
        'Keeping dashboard workflows intuitive while handling complex CRUD operations.',
      solution:
        'Designed reusable forms, validation, and consistent API responses across the application.',
    },
  ],

  learnings: [
    {
      id: '1',
      title: 'Scalable REST API design',
      description:
        'Learned how to structure modular Express applications with reusable controllers and services.',
    },
    {
      id: '2',
      title: 'Authentication & Authorization',
      description:
        'Built secure authentication flows using JWT and middleware-driven route protection.',
    },
    {
      id: '3',
      title: 'Data modeling',
      description:
        'Improved database design through relationships between events, categories, and users.',
    },
  ],

  roadmap: [
    {
      id: '1',
      version: 'v2',
      title: 'Online registrations',
      description:
        'Allow attendees to register and manage bookings directly through the platform.',
      completed: false,
    },
    {
      id: '2',
      version: 'v2',
      title: 'Email notifications',
      description:
        'Notify attendees about registrations, reminders, and event updates.',
      completed: false,
    },
    {
      id: '3',
      version: 'v3',
      title: 'Analytics dashboard',
      description:
        'Provide organizers with attendee insights and event performance metrics.',
      completed: false,
    },
  ],

  screenshots: [],

  links: {
    github: '',
    live: '',
  },
};