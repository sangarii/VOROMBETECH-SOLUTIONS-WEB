import React, { useState, useEffect } from 'react';

export interface PartnerItem {
  id: string;
  name: string;
  logo: string;
}

// Official Vorombetech Partners & Certifications (ordered matching the official carousel screenshot)
export const VOROMBETECH_PARTNERS: PartnerItem[] = [
  {
    id: 'iaf',
    name: 'IAF - Member of Multilateral Recognition Arrangement',
    logo: '/assets/partners/iaf.png',
  },
  {
    id: 'ias',
    name: 'IAS Accredited',
    logo: '/assets/partners/ias.png',
  },
  {
    id: 'iso-27001',
    name: 'ISO 27001 Information Security Management System Certified',
    logo: '/assets/partners/iso.png',
  },
  {
    id: 'ms-partners',
    name: 'Microsoft Partner',
    logo: '/assets/partners/ms-partners.png',
  },
  {
    id: 'veritas',
    name: 'Veritas Partner Force Registered Partner',
    logo: '/assets/partners/veritas.png',
  },
  {
    id: 'salesforce',
    name: 'Salesforce Partner',
    logo: '/assets/partners/salesforce.png',
  },
  {
    id: 'aws',
    name: 'Amazon Web Services (AWS)',
    logo: '/assets/partners/aws.png',
  },
  {
    id: 'digicert',
    name: 'DigiCert Partner',
    logo: '/assets/partners/digicert.png',
  },
  {
    id: 'fortinet',
    name: 'Fortinet Partner',
    logo: '/assets/partners/fortinet.png',
  },
  {
    id: 'google-cloud',
    name: 'Google Cloud Partner',
    logo: '/assets/partners/google-cloud.png',
  },
];

interface PartnersSectionProps {
  variant?: 'light' | 'dark' | 'subtle';
  showStats?: boolean;
  showHeading?: boolean;
  compact?: boolean;
  className?: string;
}

/**
 * Official Vorombetech "Our Partners and Certifications" Section
 * Matches the exact clean white layout with left-aligned heading, blue underline bar,
 * 7 borderless logos per row on desktop, seamless auto-scroll, and 2 centered pagination dots below.
 */
export const PartnersSection: React.FC<PartnersSectionProps> = ({
  showHeading = true,
  compact = false,
  className = '',
}) => {
  const totalLogos = VOROMBETECH_PARTNERS.length; // 10
  const visibleCount = 7;
  // Duplicate items so the single-row carousel loops seamlessly without jumping backward
  const loopedPartners = [...VOROMBETECH_PARTNERS, ...VOROMBETECH_PARTNERS];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [dragStartX, setDragStartX] = useState<number | null>(null);

  // Smoothly auto-scroll 1 logo at a time every 2.2 seconds
  useEffect(() => {
    if (isHovered) return;
    const timer = window.setInterval(() => {
      setEnableTransition(true);
      setCurrentIndex((prev) => prev + 1);
    }, 2200);
    return () => window.clearInterval(timer);
  }, [isHovered]);

  // Seamless infinite loop reset when reaching the cloned set
  useEffect(() => {
    if (currentIndex === totalLogos) {
      const timeout = window.setTimeout(() => {
        setEnableTransition(false);
        setCurrentIndex(0);
      }, 700);
      return () => window.clearTimeout(timeout);
    }
    if (currentIndex > totalLogos) {
      setEnableTransition(false);
      setCurrentIndex(0);
    }
  }, [currentIndex, totalLogos]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setDragStartX(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartX === null) return;
    const delta = e.clientX - dragStartX;
    setEnableTransition(true);
    if (delta < -40) {
      setCurrentIndex((prev) => Math.min(totalLogos, prev + 1));
    } else if (delta > 40) {
      setCurrentIndex((prev) => Math.max(0, prev - 1));
    }
    setDragStartX(null);
  };

  const activeDot = currentIndex % totalLogos < 3 ? 0 : 1;

  const handleDotClick = (dotIndex: 0 | 1) => {
    setEnableTransition(true);
    setCurrentIndex(dotIndex === 0 ? 0 : 3);
  };

  return (
    <section
      className={`${compact ? 'py-6' : 'py-10 sm:py-12'} bg-white text-[#3b3b3b] overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <div className="mb-8 sm:mb-10 space-y-2 text-left">
            <p className="text-xs font-bold tracking-wider text-amber-700 uppercase">
              OUR PARTNERS · CERTIFICATIONS & ALLIANCES
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Partners and Certifications
            </h2>
          </div>
        )}

        {/* Single-Row Borderless Partner Auto-Scrolling Carousel (7 visible on desktop) */}
        <div
          className="relative w-full overflow-hidden select-none cursor-grab active:cursor-grabbing"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
        >
          <div
            className={`flex items-center ${
              enableTransition ? 'transition-transform duration-700 ease-in-out' : ''
            }`}
            style={{
              width: `${(loopedPartners.length * 100) / visibleCount}%`,
              transform: `translate3d(-${(currentIndex * 100) / loopedPartners.length}%, 0, 0)`,
            }}
          >
            {loopedPartners.map((partner, idx) => (
              <div
                key={`${partner.id}-${idx}`}
                style={{ width: `${100 / loopedPartners.length}%` }}
                className="shrink-0 px-2.5 sm:px-3.5 flex items-center justify-center h-16 sm:h-20"
                title={partner.name}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  draggable={false}
                  className="max-h-12 sm:max-h-14 max-w-[110px] sm:max-w-[135px] w-auto h-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 2 Centered Pagination Dots */}
        <div className="mt-5 flex items-center justify-center gap-2.5" role="tablist" aria-label="Partners pagination">
          <button
            type="button"
            role="tab"
            aria-selected={activeDot === 0}
            aria-label="Partners slide 1"
            onClick={() => handleDotClick(0)}
            className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${
              activeDot === 0 ? 'bg-[#6c7a79]' : 'bg-[#d6d6d6] hover:bg-[#9ca3af]'
            }`}
          />
          <button
            type="button"
            role="tab"
            aria-selected={activeDot === 1}
            aria-label="Partners slide 2"
            onClick={() => handleDotClick(1)}
            className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${
              activeDot === 1 ? 'bg-[#6c7a79]' : 'bg-[#d6d6d6] hover:bg-[#9ca3af]'
            }`}
          />
        </div>
      </div>
    </section>
  );
};

/**
 * Trust strip in the Hero section — renders the title "Our Partners and Certifications"
 * with the blue underline bar and smooth single-row auto-scroll.
 */
export const PartnersTrustStrip: React.FC<{ className?: string }> = ({ className = '' }) => {
  return <PartnersSection compact showHeading className={className} />;
};

