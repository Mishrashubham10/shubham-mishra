import { Container, Section, SectionHeading } from '@/components/common';

import type { PortfolioProfile } from '@/types/domain';

import { AboutContent } from './AboutContent';
import { TechStack } from './TechStack';

type AboutProps = {
  profile: PortfolioProfile;
};

export function About({ profile }: AboutProps) {
  return (
    <Section>
      <Container>
        <SectionHeading
          badge="About"
          title="About Me"
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