import Image from 'next/image';

type HeroCoverProps = {
  src: string;
  alt: string;
};

export function HeroCover({ src, alt }: HeroCoverProps) {
  return (
    <div
      className="
        overflow-hidden
        rounded-3xl
        border
        border-border/60
        bg-card
        shadow-xl
        "
    >
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={900}
        className="h-auto w-full object-cover"
        priority
      />
    </div>
  );
}