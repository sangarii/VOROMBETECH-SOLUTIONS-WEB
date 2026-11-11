import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

interface RotatingTextProps {
  phrases: string[];
  className?: string;
  holdDuration?: number;
}

export const RotatingText: React.FC<RotatingTextProps> = ({
  phrases,
  className = 'inline-block text-amber-700',
  holdDuration = 2.1,
}) => {
  const [index, setIndex] = useState(0);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = spanRef.current;
    if (!el || phrases.length <= 1) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setIndex((prev) => (prev + 1) % phrases.length);
      },
    });

    tl.fromTo(
      el,
      { autoAlpha: 0, y: 10 },
      { autoAlpha: 1, y: 0, duration: 0.36, ease: 'power2.out' }
    ).to(el, {
      autoAlpha: 0,
      y: -10,
      duration: 0.3,
      delay: holdDuration,
      ease: 'power2.in',
    });

    return () => {
      tl.kill();
    };
  }, [index, phrases, holdDuration]);

  return (
    <span ref={spanRef} className={className}>
      {phrases[index] || phrases[0]}
    </span>
  );
};
