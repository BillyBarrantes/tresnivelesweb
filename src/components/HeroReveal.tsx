'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function HeroReveal({ children }: { children: React.ReactNode }) {
  const sectionRef = useScrollReveal({ threshold: 0.1, staggerDelay: 100 });
  return <section className="hero" id="inicio" ref={sectionRef}>{children}</section>;
}
