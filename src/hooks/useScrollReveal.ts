'use client';

import { useEffect, useRef } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  staggerDelay?: number;
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const { threshold = 0.1, staggerDelay = 100 } = options;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reveals = entry.target.querySelectorAll('.reveal');
            reveals.forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).classList.add('is-visible');
              }, i * staggerDelay);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [threshold, staggerDelay]);

  return sectionRef;
}
