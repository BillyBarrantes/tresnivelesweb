'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface WordRotatorProps {
  words: string[];
  interval?: number;
}

export default function WordRotator({ words, interval = 3200 }: WordRotatorProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<'enter' | 'stable' | 'exit'>('stable');
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const textRef = useRef<HTMLSpanElement>(null);
  const cycleRef = useRef(false);
  const mountedRef = useRef(true);
  const prefersReduced = useRef(false);
  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReduced.current = mq.matches;
    const handler = (e: MediaQueryListEvent) => {
      prefersReduced.current = e.matches;
    };
    mq.addEventListener('change', handler);
    const timers = timersRef.current;
    return () => {
      mq.removeEventListener('change', handler);
      mountedRef.current = false;
      timers.forEach(clearTimeout);
    };
  }, []);

  const advance = useCallback(() => {
    if (prefersReduced.current || cycleRef.current) return;
    cycleRef.current = true;

    setPhase('exit');

    const t1 = window.setTimeout(() => {
      if (!mountedRef.current) return;
      setCurrentIndex((prev) => (prev + 1) % words.length);
      setPhase('enter');

      const t2 = window.setTimeout(() => {
        if (!mountedRef.current) return;
        setPhase('stable');
        cycleRef.current = false;
      }, 350);
      timersRef.current.push(t2);
    }, 250);
    timersRef.current.push(t1);
  }, [words.length]);

  useEffect(() => {
    if (prefersReduced.current) return;
    const timer = setInterval(advance, interval);
    return () => clearInterval(timer);
  }, [advance, interval]);

  useEffect(() => {
    if (textRef.current) {
      const width = textRef.current.offsetWidth;
      if (width > 0) {
        setUnderlineWidth(width);
      }
    }
  }, [currentIndex]);

  const currentWord = words[currentIndex];
  const wordChars = currentWord.split('');

  return (
    <span className="word-rotator-wrapper">
      <span className="word-rotator-text" ref={textRef}>
        <span
          className="word-rotator-underline"
          style={{ width: underlineWidth > 0 ? underlineWidth + 'px' : undefined }}
        />
        {wordChars.map((char, i) => (
          <span
            key={`${currentIndex}-${i}`}
            className={`word-rotator-char${phase === 'exit' ? ' exit' : phase === 'enter' ? ' enter' : ''}`}
            style={{
              animationDelay:
                phase === 'enter'
                  ? `${i * 20}ms`
                  : phase === 'exit'
                  ? `${(wordChars.length - 1 - i) * 18}ms`
                  : '0ms',
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    </span>
  );
}
