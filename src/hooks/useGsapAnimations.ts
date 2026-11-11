import { useEffect, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Applies rich, responsive Salesforce-inspired GSAP animations across pages:
 * - `.gsap-hero-item`: Staggered hero text entrance
 * - `.gsap-hero-showcase`: Right-side showcase image entrance + continuous gentle float
 * - `.gsap-stat-item` / `.gsap-stat-card`: Staggered metric reveal + subtle hover lift
 * - `.gsap-section-reveal`: Scroll-triggered section text + floating showcase media
 * - `.gsap-open-row`: Smooth scroll-triggered reveal for open unboxed storytelling rows
 * - `.gsap-flow-line`: Scroll-triggered horizontal progress line draw for connected timelines
 * - `.gsap-flow-node`: Staggered circular milestone node pop-in along process timelines
 * - `.gsap-wave-arc`: Gentle scroll reveal for curved Salesforce-style SVG section arcs
 * - `.gsap-card-grid` -> `.gsap-card`: Scroll-triggered staggered reveal + hover lift
 */
export function useGsapPageAnimations(
  containerRef: RefObject<HTMLElement | null>,
  deps: unknown[] = []
) {
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const cleanups: Array<() => void> = [];

    const ctx = gsap.context(() => {
      // 1. Hero items staggered entrance
      const heroItems = el.querySelectorAll('.gsap-hero-item');
      if (heroItems.length > 0) {
        gsap.fromTo(
          heroItems,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.68,
            stagger: 0.09,
            ease: 'power3.out',
            clearProps: 'transform',
          }
        );
      }

      // 2. Hero / Header right-side showcase media entrance + continuous float
      const heroShowcase = el.querySelectorAll('.gsap-hero-showcase');
      heroShowcase.forEach((showcaseEl) => {
        gsap.fromTo(
          showcaseEl,
          { autoAlpha: 0, y: 28, scale: 0.94 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: 0.14,
            ease: 'back.out(1.25)',
            onComplete: () => {
              gsap.to(showcaseEl, {
                y: -7,
                duration: 2.6,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
              });
            },
          }
        );
      });

      // 3. Staggered stat strip items + interactive GSAP hover lift
      const statItems = el.querySelectorAll('.gsap-stat-item, .gsap-stat-card');
      if (statItems.length > 0) {
        gsap.fromTo(
          statItems,
          { autoAlpha: 0, y: 22, scale: 0.96 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            stagger: 0.08,
            delay: 0.18,
            ease: 'back.out(1.2)',
            clearProps: 'transform',
          }
        );

        statItems.forEach((item) => {
          const htmlItem = item as HTMLElement;
          const onEnter = () => {
            gsap.to(htmlItem, {
              y: -4,
              duration: 0.24,
              ease: 'power2.out',
            });
          };
          const onLeave = () => {
            gsap.to(htmlItem, {
              y: 0,
              duration: 0.26,
              ease: 'power2.out',
            });
          };
          htmlItem.addEventListener('mouseenter', onEnter);
          htmlItem.addEventListener('mouseleave', onLeave);
          cleanups.push(() => {
            htmlItem.removeEventListener('mouseenter', onEnter);
            htmlItem.removeEventListener('mouseleave', onLeave);
          });
        });
      }

      // 4. Scroll-triggered section headers + right-side showcase frames with continuous float
      const sectionHeaders = el.querySelectorAll('.gsap-section-reveal');
      sectionHeaders.forEach((sectionEl) => {
        const textCol = sectionEl.querySelector('.gsap-section-text');
        const mediaCol = sectionEl.querySelector('.gsap-section-media');

        if (textCol) {
          gsap.fromTo(
            textCol,
            { autoAlpha: 0, y: 28 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.65,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: sectionEl,
                start: 'top 86%',
                toggleActions: 'play none none none',
              },
              clearProps: 'transform',
            }
          );
        }

        if (mediaCol) {
          gsap.fromTo(
            mediaCol,
            { autoAlpha: 0, x: 28, scale: 0.94 },
            {
              autoAlpha: 1,
              x: 0,
              scale: 1,
              duration: 0.75,
              delay: 0.1,
              ease: 'back.out(1.2)',
              scrollTrigger: {
                trigger: sectionEl,
                start: 'top 86%',
                toggleActions: 'play none none none',
              },
              onComplete: () => {
                gsap.to(mediaCol, {
                  y: -7,
                  duration: 2.7,
                  repeat: -1,
                  yoyo: true,
                  ease: 'sine.inOut',
                });
              },
            }
          );
        }
      });

      // 5. Salesforce-style open editorial storytelling rows (`.gsap-open-row`)
      const openRows = el.querySelectorAll('.gsap-open-row');
      openRows.forEach((rowEl) => {
        const rowMedia = rowEl.querySelector('.gsap-row-media');
        const rowCopy = rowEl.querySelector('.gsap-row-copy');

        if (rowMedia || rowCopy) {
          if (rowMedia) {
            gsap.fromTo(
              rowMedia,
              { autoAlpha: 0, y: 30, scale: 0.96 },
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 0.72,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: rowEl,
                  start: 'top 86%',
                  toggleActions: 'play none none none',
                },
                clearProps: 'transform',
              }
            );
          }
          if (rowCopy) {
            gsap.fromTo(
              rowCopy,
              { autoAlpha: 0, y: 26 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.68,
                delay: 0.08,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: rowEl,
                  start: 'top 86%',
                  toggleActions: 'play none none none',
                },
                clearProps: 'transform',
              }
            );
          }
        } else {
          gsap.fromTo(
            rowEl,
            { autoAlpha: 0, y: 26 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.65,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: rowEl,
                start: 'top 88%',
                toggleActions: 'play none none none',
              },
              clearProps: 'transform',
            }
          );
        }
      });

      // 6. Connected Timeline / Process Flow Line Draw (`.gsap-flow-line` & `.gsap-flow-node`)
      const flowLines = el.querySelectorAll('.gsap-flow-line');
      flowLines.forEach((lineEl) => {
        gsap.fromTo(
          lineEl,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1,
            duration: 1.15,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: lineEl,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      const flowContainers = el.querySelectorAll('.gsap-flow-container');
      flowContainers.forEach((containerEl) => {
        const nodes = containerEl.querySelectorAll('.gsap-flow-node');
        if (nodes.length > 0) {
          gsap.fromTo(
            nodes,
            { autoAlpha: 0, y: 24, scale: 0.92 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.58,
              stagger: 0.12,
              ease: 'back.out(1.3)',
              scrollTrigger: {
                trigger: containerEl,
                start: 'top 86%',
                toggleActions: 'play none none none',
              },
              clearProps: 'transform',
            }
          );
        }
      });

      // 7. Curved SVG Arc / Wave Dividers (`.gsap-wave-arc`)
      const waveArcs = el.querySelectorAll('.gsap-wave-arc');
      waveArcs.forEach((arcEl) => {
        gsap.fromTo(
          arcEl,
          { autoAlpha: 0, scaleY: 0.65, transformOrigin: 'center bottom' },
          {
            autoAlpha: 1,
            scaleY: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: arcEl,
              start: 'top 94%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 8. Scroll-triggered staggered grids + interactive GSAP hover lift
      const cardGrids = el.querySelectorAll('.gsap-card-grid');
      cardGrids.forEach((gridEl) => {
        const cards = gridEl.querySelectorAll('.gsap-card, .gsap-service-card');
        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            { autoAlpha: 0, y: 32, scale: 0.98 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              stagger: 0.09,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: gridEl,
                start: 'top 88%',
                toggleActions: 'play none none none',
              },
              clearProps: 'transform',
            }
          );
        }
      });

      // Attach subtle GSAP hover lift to interactive showcase items
      const allCards = el.querySelectorAll('.gsap-card, .gsap-service-card');
      allCards.forEach((card) => {
        const htmlCard = card as HTMLElement;
        const onEnter = () => {
          gsap.to(htmlCard, {
            y: -6,
            duration: 0.28,
            ease: 'power2.out',
          });
        };
        const onLeave = () => {
          gsap.to(htmlCard, {
            y: 0,
            duration: 0.3,
            ease: 'power2.out',
          });
        };
        htmlCard.addEventListener('mouseenter', onEnter);
        htmlCard.addEventListener('mouseleave', onLeave);
        cleanups.push(() => {
          htmlCard.removeEventListener('mouseenter', onEnter);
          htmlCard.removeEventListener('mouseleave', onLeave);
        });
      });
    }, el);

    return () => {
      cleanups.forEach((fn) => fn());
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
