'use client';

import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

      progressRef.current?.style.setProperty('--progress', progress.toString());

      raf = 0;
    };

    const handleScroll = () => {
      if (!raf) {
        raf = requestAnimationFrame(update);
      }
    };

    update();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);

      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={progressRef}
      className="fixed left-0 top-0 z-[100] h-[3px] w-full origin-left bg-primary"
      style={{
        transform: 'scaleX(var(--progress, 0))',
      }}
    />
  );
}