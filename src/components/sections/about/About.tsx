import { Container, Section, SectionHeading } from '@/components/common';
import { Profile } from '@/types/portfolio';
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
          description="A little about who I am, how I work, and the technologies I use."
          className="max-w-2xl"
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_auto_1fr] lg:items-start">
          <AboutContent profile={profile} />

          {/* Divider */}
          <div className="hidden lg:block w-px self-stretch bg-border/60" />

          <TechStack techStack={profile.techStack} />
        </div>
      </Container>
    </Section>
  );
}