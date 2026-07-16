import { AppButton } from '@/components/common';
import { profile } from '@/data/profile';

export function ResumeButton() {
  return (
    <AppButton href={profile.resumeUrl} download size="sm">
      Resume
    </AppButton>
  );
}