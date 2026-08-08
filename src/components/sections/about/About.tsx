import { Container, Section, SectionHeading } from '@/components/common';

import type { Profile } from '@/types/portfolio';

import { AboutContent } from './AboutContent';
import { TechStack } from './TechStack';

type AboutProps = {
  profile: Profile;
};

export function About({ profile }: AboutProps) {
  return (
    <Section id="about">
      <Container>
        <SectionHeading
          badge="About"
          title={profile.about.title}
          description="A little about my background, experience, and approach to building software."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_auto_1fr] lg:items-start">
          <AboutContent profile={profile} />

          <div
            aria-hidden
            className="hidden w-px self-stretch bg-border/60 lg:block"
          />

          <TechStack techStack={profile.techStack} />
        </div>
      </Container>
    </Section>
  );
}