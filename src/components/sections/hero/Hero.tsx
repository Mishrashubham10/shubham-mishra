import { ArrowRight, Download } from 'lucide-react';

import type { Profile } from '@/types/portfolio';
import type { CaseStudy } from '@/types/domain';

import { AppButton, Badge, Container, Section } from '@/components/common';

import { HeroStats } from './HeroStats';

import { DESIGN } from '@/constants/design';
import { cn } from '@/lib/utils';

type HeroProps = {
  profile: Profile;
  projects: CaseStudy[];
};

export function Hero({ profile, projects }: HeroProps) {
  const stats = [
    {
      value: `${profile.yearsOfExperience}+`,
      label: 'Years Experience',
    },
    {
      value: projects.length,
      label: 'Case Studies',
    },
  ];

  return (
    <Section
      id="hero"
      className={cn(DESIGN.layout.hero, 'relative overflow-hidden')}
    >
      {/* Background Glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 size-150 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <Container>
        <div className="max-w-4xl space-y-10">
          {/* Badge */}
          <Badge>{profile.hero.badge}</Badge>

          {/* Heading */}
          <h1 className="text-5xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl">
            {profile.hero.headline}
          </h1>

          {/* Description */}
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
            {profile.hero.description}
          </p>

          {/* Actions */}
          <div className="flex flex-wrap gap-4">
            <AppButton
              href="#projects"
              endIcon={<ArrowRight className="size-4" />}
            >
              View Case Studies
            </AppButton>

            <AppButton
              href={profile.resumeUrl}
              rel="noopener noreferrer"
              variant="outline"
              startIcon={<Download className="size-4" />}
            >
              Resume
            </AppButton>
          </div>

          {/* Stats */}
          <HeroStats stats={stats} />
        </div>
      </Container>
    </Section>
  );
}