import { Career } from '@/types/portfolio';
import { technologies } from './technologies';

export const career: Career = {
  experiences: [
    {
      id: 'noem-ecommerce',
      company: 'Noem Ecommerce',
      role: 'Software Developer',
      employmentType: 'Full-time',
      location: 'Mumbai, India',
      startDate: 'Apr 2025',
      endDate: 'Present',

      overview:
        'Contributed to the development of a scalable e-commerce platform by building full-stack features, improving backend performance, and creating reusable frontend architecture.',

      contributions: [
        'Delivered production-ready features in collaboration with product, design, and engineering teams.',
        'Designed and optimized REST APIs using Node.js and Express.js to support scalable backend services.',
        'Improved MongoDB query performance to provide a faster and more responsive shopping experience.',
        'Built reusable React and TypeScript components that accelerated feature development across the application.',
        'Architected scalable state management using Redux Toolkit and Context API for consistent application behavior.',
      ],

      technologies: [
        technologies.react,
        technologies.nextjs,
        technologies.typescript,
        technologies.nodejs,
        technologies.express,
        technologies.mongodb,
        technologies.reduxToolkit,
        technologies.rtkQuery,
        technologies.contextApi,
        technologies.jwt,
        technologies.git,
      ],
    },

    {
      id: 'igniculuss',
      company: 'Igniculuss',
      role: 'Frontend Web Developer',
      employmentType: 'Full-time',
      location: 'Remote',
      startDate: 'Sep 2024',
      endDate: 'Apr 2025',

      overview:
        'Developed enterprise CRM and HRM applications with a focus on performance, scalability, and maintainable frontend architecture.',

      contributions: [
        'Built responsive user interfaces using React, TypeScript, and Tailwind CSS.',
        'Implemented secure authentication workflows across multiple enterprise applications.',
        'Designed scalable frontend state management for complex business workflows.',
        'Integrated third-party APIs to improve workflow automation and application reliability.',
      ],

      technologies: [
        technologies.react,
        technologies.typescript,
        technologies.tailwind,
        technologies.reduxToolkit,
        technologies.contextApi,
        technologies.jwt,
        technologies.git,
      ],
    },

    {
      id: 'trimvault',
      company: 'Trimvault',
      role: 'Full Stack Developer',
      employmentType: 'Full-time',
      location: 'Mumbai, India',
      startDate: 'Jan 2022',
      endDate: 'Mar 2024',

      overview:
        'Built and maintained full-stack web applications by developing scalable APIs, reusable frontend components, and secure authentication systems.',

      contributions: [
        'Designed and developed REST APIs using Node.js and Express.js.',
        'Created reusable React components and shared UI architecture for faster feature delivery.',
        'Optimized MongoDB schema design and indexing for improved query performance.',
        'Implemented JWT authentication and role-based access control across the application.',
      ],

      technologies: [
        technologies.react,
        technologies.nodejs,
        technologies.express,
        technologies.mongodb,
        technologies.tailwind,
        technologies.jwt,
        technologies.git,
      ],
    },
  ],

  education: [
    {
      id: 'bsc-it',
      degree: 'Bachelor of Science (Information Technology)',
      institution: 'St. Rocks College of Commerce & Science',
      location: 'Mumbai, India',
      startDate: '2019',
      endDate: '2022',
    },
  ],
};