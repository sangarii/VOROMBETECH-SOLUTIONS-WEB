import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AppLink } from '../context/RouterContext';

gsap.registerPlugin(ScrollTrigger);

interface PlatformStatementCurvedSectionProps {
  topLinkText?: string;
  topLinkHref?: string;
  headline?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  bottomFollowUpHeadline?: string;
  bottomFollowUpSubtext?: string;
}

export const PlatformStatementCurvedSection: React.FC<PlatformStatementCurvedSectionProps> = ({
  topLinkText = 'Explore ISO 27001 & Cloud Excellence',
  topLinkHref = '/services',
  headline = 'Technology is the greatest platform for business transformation',
  description = 'Grounded in trust, customer success, innovation, quality governance, and security compliance, we’re committed to converting ordinary operations into great digital experiences—investing our cloud, SaaS, and engineering expertise to create lasting measurable value for enterprises of all sizes.',
  ctaText = 'Take the transformation step',
  ctaHref = '/contact',
  bottomFollowUpHeadline,
  bottomFollowUpSubtext,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const curvePathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const items = el.querySelectorAll('.gsap-statement-item');
      gsap.fromTo(
        items,
        { autoAlpha: 0, y: 32 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.78,
          stagger: 0.13,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        }
      );

      if (curvePathRef.current) {
        gsap.fromTo(
          curvePathRef.current,
          { scaleY: 0.3, transformOrigin: 'center top' },
          {
            scaleY: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 76%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label={headline}
      className="relative w-full overflow-hidden select-none"
    >
      {/* Upper Light Blue Statement Stage (Replaces Dark Navy #001e5b with Airy Light Blue) */}
      <div className="relative bg-gradient-to-b from-[#e0f2fe] via-[#bae6fd] to-[#90d0fe] text-slate-900 pt-12 pb-20 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Top-Right Underlined Action Link */}
          <div className="gsap-statement-item flex justify-end mb-8 sm:mb-10">
            <AppLink
              href={topLinkHref}
              className="text-xs sm:text-sm font-bold text-[#032d60] underline underline-offset-4 decoration-[#032d60]/70 hover:text-slate-950 transition-colors"
            >
              {topLinkText}
            </AppLink>
          </div>

          {/* Centered Bold Statement Content (Clean Previous Layout) */}
          <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
            <h2
              className="gsap-statement-item font-extrabold tracking-tight text-[#032d60] leading-[1.14]"
              style={{ fontSize: 'clamp(2rem, 4.2vw, 3.35rem)' }}
            >
              {headline}
            </h2>

            <p className="gsap-statement-item text-sm sm:text-base lg:text-[17px] text-slate-800 leading-[1.7] max-w-2xl mx-auto font-normal">
              {description}
            </p>

            <div className="gsap-statement-item pt-2">
              <AppLink
                href={ctaHref}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-[#032d60] hover:bg-[#f5c400] hover:text-slate-950 font-extrabold text-sm sm:text-base shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                {ctaText}
              </AppLink>
            </div>
          </div>
        </div>
      </div>

      {/* Sweeping Downward Parabolic Convex Curve into Clean White Lower Stage */}
      <div className="relative bg-white">
        <svg
          viewBox="0 0 1440 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 sm:h-24 lg:h-32 block -mt-px"
          preserveAspectRatio="none"
        >
          {/* Light Sky-Blue (#90d0fe) curving downward in the center over the white backdrop */}
          <path
            ref={curvePathRef}
            d="M0,0 L1440,0 L1440,12 Q720,150 0,12 Z"
            fill="#90d0fe"
          />
        </svg>

        {/* Optional Follow-Up Lead-In Headline in the Curved Basin */}
        {bottomFollowUpHeadline ? (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10 sm:pt-8 sm:pb-12 text-center space-y-3">
            <h3
              className="gsap-statement-item font-extrabold tracking-tight text-slate-900 leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 3.4vw, 2.75rem)' }}
            >
              {bottomFollowUpHeadline}
            </h3>
            {bottomFollowUpSubtext && (
              <p className="gsap-statement-item text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
                {bottomFollowUpSubtext}
              </p>
            )}
          </div>
        ) : (
          <div className="h-6 sm:h-10" />
        )}
      </div>
    </section>
  );
};
