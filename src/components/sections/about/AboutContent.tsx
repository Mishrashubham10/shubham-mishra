import type { PortfolioProfile } from '@/types/domain';

type AboutContentProps = {
  profile: PortfolioProfile;
};

export function AboutContent({ profile }: AboutContentProps) {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-semibold">About Me</h3>

        <p className="mt-3 leading-8 text-muted-foreground">
          {profile.about.introduction}
        </p>
      </div>

      <div>
        <h3 className="font-semibold">Engineering Philosophy</h3>

        <p className="mt-3 leading-8 text-muted-foreground">
          {profile.about.philosophy}
        </p>
      </div>

      <div>
        <h3 className="font-semibold">Current Focus</h3>

        <p className="mt-3 leading-8 text-muted-foreground">
          {profile.about.currentFocus}
        </p>
      </div>
    </div>
  );
}