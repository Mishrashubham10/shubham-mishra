import { ArrowRight, Download } from 'lucide-react';

import type { Learning, Products, Profile } from '@/types/portfolio';
import { AppButton, Badge, Container, Section } from '../common';
import { DESIGN } from '@/constants/design';

type HeroProps = {
  profile: Profile;
  products: Products;
  learning: Learning;
};

export function Hero({ profile, products, learning }: HeroProps) {
  const stats = [
    {
      value: `${profile.yearsOfExperience}+`,
      label: 'Years Experience',
    },
    {
      value: products.caseStudies.length,
      label: 'Case Studies',
    },
    {
      value: learning.domains.length,
      label: 'Learning Tracks',
    },
  ];

  return (
    <Section
      id="hero"
      // className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden"
      className={`relative ${DESIGN.layout.hero} overflow-hidden`}
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <Container>
        <div className="max-w-4xl">
          {/* Badge */}

          <Badge>Available for Full-time Opportunities</Badge>

          {/* Heading */}

          <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Building modern
            <br />
            full-stack products.
          </h1>

          {/* Description */}

          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
            I&apos;m{' '}
            <span className="font-semibold text-foreground">
              {profile.name}
            </span>
            , a{' '}
            <span className="font-semibold text-foreground">
              {profile.headline}
            </span>{' '}
            with {profile.yearsOfExperience}+ years of experience building
            scalable web applications using React, Next.js, Node.js, TypeScript,
            and MongoDB.
          </p>

          {/* Actions */}

          <div className="mt-10 flex flex-wrap gap-4">
            <AppButton
              href="#products"
              endIcon={<ArrowRight className="size-4" />}
            >
              View Case Studies
            </AppButton>

            <AppButton
              href={profile.resumeUrl}
              download
              variant="outline"
              startIcon={<Download className="size-4" />}
            >
              Download Resume
            </AppButton>
          </div>

          {/* Stats */}

          <div className="mt-20 grid grid-cols-1 gap-8 border-t pt-10 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold tracking-tight">
                  {stat.value}
                </p>

                <p className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}