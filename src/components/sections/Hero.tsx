"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(263_70%_63%/0.15),transparent_50%),radial-gradient(circle_at_70%_60%,hsl(220_70%_58%/0.1),transparent_50%)]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto max-w-5xl relative z-10"
      >
        <div className="text-center space-y-8">
          <motion.div variants={itemVariants} className="inline-block">
            <span className="px-4 py-2 rounded-full bg-secondary/50 text-sm font-medium border border-border">
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold tracking-tight"
          >
            Hi, I&apos;m{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Shubham Mishra
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-3xl text-muted-foreground font-light"
          >
            Software Developer
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Full Stack Developer passionate about building exceptional digital
            experiences. Currently serving as Software Developer Project Manager
            at Neom Ecommerce, specializing in React, Node.js, and modern web
            technologies.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center pt-4"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity group"
              >
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/projects">
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary/50"
              >
                View my work
              </Button>
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 justify-center pt-8"
          >
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Mishrashubham10"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors border border-border hover:border-primary group"
            >
              <Github className="h-5 w-5 group-hover:text-primary transition-colors" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/mishrashubham10/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors border border-border hover:border-primary group"
            >
              <Linkedin className="h-5 w-5 group-hover:text-primary transition-colors" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:shubhdev101@gmail.com"
              className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors border border-border hover:border-primary group"
            >
              <Mail className="h-5 w-5 group-hover:text-primary transition-colors" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;