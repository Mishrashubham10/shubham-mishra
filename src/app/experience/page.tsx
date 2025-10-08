"use client";

import { Card } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// ============ EXPERIENCE ============
const experiences = [
  {
    title: 'Software Developer Project Manager',
    company: 'Neom Ecommerce Pvt Ltd',
    period: 'Current',
    description:
      'Leading software development projects and managing teams to deliver high-quality e-commerce solutions.',
    current: true,
  },
  {
    title: 'Junior React Developer',
    company: 'Igniculuss',
    period: '8 months',
    description:
      'Developed and maintained React applications, implementing modern frontend best practices and UI/UX improvements.',
    current: false,
  },
  {
    title: 'Full Stack Developer',
    company: 'BookMyInsurrance',
    period: '8 months',
    description:
      'Built full-stack insurance platform features using React, Node.js, and MongoDB. Implemented user authentication and data management systems.',
    current: false,
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-24 px-4 bg-secondary/20 min-h-screen flex items-center">
      <div className="container mx-auto max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            My professional journey
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-6"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className={`p-6 md:p-8 hover:border-primary transition-all duration-300 ${
                  exp.current
                    ? 'border-primary shadow-[0_0_20px_hsl(263_70%_63%/0.2)]'
                    : ''
                }`}
              >
                <div className="flex gap-4">
                  <div
                    className={`p-3 rounded-lg h-fit ${
                      exp.current ? 'bg-primary/20' : 'bg-secondary'
                    }`}
                  >
                    <Briefcase
                      className={`h-6 w-6 ${
                        exp.current ? 'text-primary' : 'text-muted-foreground'
                      }`}
                    />
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      {exp.current && (
                        <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium w-fit">
                          Current Position
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-2 text-muted-foreground">
                      <span className="font-medium">{exp.company}</span>
                      <span className="hidden md:inline">•</span>
                      <span className="text-sm">{exp.period}</span>
                    </div>

                    <p className="text-muted-foreground leading-relaxed pt-2">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;