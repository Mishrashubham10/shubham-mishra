import { Profile } from '@/types/portfolio';

export const profile: Profile = {
  name: 'Shubham Mishra',

  headline: 'Software Engineer',

  tagline:
    'Building scalable full-stack applications with React, Node.js, TypeScript and modern web technologies.',
  bio: "I'm a Software Engineer focused on building scalable web applications with clean architecture, modern technologies, and great user experiences.",
  avatar: '/assets/profile.png',
  location: 'India',
  email: 'shubhdev101@gmail.com',
  availability: 'Open to Work',
  yearsOfExperience: 2,
  currentRole: 'Software Engineer',
  resumeUrl:
    'https://drive.google.com/file/d/1u6Hd_gAMAxOdlqo-vStV0i7OAKpw22ib/view?usp=drive_link',

  hero: {
    badge: 'Available for Full-time Opportunities',
    headline: 'Engineering software that solves real problems.',
    description:
      "I'm Shubham Mishra, a Software Engineer with 2+ years of experience building scalable web applications using React, Next.js, Node.js, TypeScript, and MongoDB.",
  },

  about: {
    title: 'Building software with a focus on quality and scalability.',
    introduction:
      "I'm a Software Engineer with 2+ years of experience building full-stack applications using React, Next.js, Node.js, TypeScript, and MongoDB.",
    philosophy:
      'I enjoy solving real-world problems through clean architecture, reusable components, and maintainable code. I believe good software is not only functional but also easy to understand and evolve.',
    currentFocus:
      'Currently expanding my knowledge in system design, Docker, Redis, cloud platforms, and scalable backend architecture.',
  },

  techStack: [
    {
      category: 'Frontend',
      items: [
        { name: 'React' },
        { name: 'Next.js' },
        { name: 'TypeScript' },
        { name: 'Tailwind CSS' },
      ],
    },
    {
      category: 'Backend',
      items: [{ name: 'Node.js' }, { name: 'Express.js' }],
    },
    {
      category: 'Database',
      items: [{ name: 'MongoDB' }, { name: 'PostgreSQL' }],
    },
    {
      category: 'Tools',
      items: [
        { name: 'Git' },
        { name: 'Docker' },
        { name: 'Redux Toolkit' },
        { name: 'Prisma' },
      ],
    },
  ],
};