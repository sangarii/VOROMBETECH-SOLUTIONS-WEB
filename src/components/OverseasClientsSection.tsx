import React, { useState, useEffect } from 'react';

export interface OverseasClientItem {
  id: string;
  name: string;
  logo: string;
}

// Official Vorombetech Clients ordered starting with the exact 6 logos in the reference screenshot
export const OFFICIAL_OVERSEAS_CLIENTS: OverseasClientItem[] = [
  { id: 'sagacious-ip', name: 'Sagacious IP', logo: '/assets/clients/client-05.png' },
  { id: 'vatika', name: 'Vatika Business Centre', logo: '/assets/clients/client-06.png' },
  { id: 'muvi', name: 'MUVI', logo: '/assets/clients/client-07.png' },
  { id: 'tlc', name: 'TLC', logo: '/assets/clients/client-08.png' },
  { id: 'kshan', name: 'KSHAN', logo: '/assets/clients/client-09.png' },
  { id: 'yatrakart', name: 'YatraKart', logo: '/assets/clients/client-10.png' },
  { id: 'caballus', name: 'Caballus Technologies', logo: '/assets/clients/client-11.png' },
  { id: 'zeetaminds', name: 'Zeetaminds', logo: '/assets/clients/client-12.png' },
  { id: 'diligent', name: 'Diligent', logo: '/assets/clients/client-13.png' },
  { id: 'nektar', name: 'Nektar', logo: '/assets/clients/client-14.png' },
  { id: 'marlo', name: 'MARLO', logo: '/assets/clients/client-15.png' },
  { id: 'fabulate', name: 'Fabulate', logo: '/assets/clients/client-16.png' },
  { id: 'indigo-design', name: 'Indigo Design Co', logo: '/assets/clients/client-17.png' },
  { id: 'dolphin', name: 'Dolphin Innovative Solution', logo: '/assets/clients/client-18.png' },
  { id: 'spendflo', name: 'Spendflo', logo: '/assets/clients/client-04.png' },
  { id: 'stemz', name: 'STEMZ Healthcare', logo: '/assets/clients/client-01.png' },
  { id: 'federal-mogul', name: 'Federal-Mogul Motorparts', logo: '/assets/clients/client-02.png' },
  { id: 'greenique', name: 'Greenique by Mojopanda', logo: '/assets/clients/client-03.png' },
  { id: 'client-19', name: 'Enterprise Client 19', logo: '/assets/clients/client-19.png' },
  { id: 'client-20', name: 'Enterprise Client 20', logo: '/assets/clients/client-20.png' },
  { id: 'client-21', name: 'Enterprise Client 21', logo: '/assets/clients/client-21.png' },
  { id: 'client-22', name: 'Enterprise Client 22', logo: '/assets/clients/client-22.png' },
  { id: 'client-23', name: 'Enterprise Client 23', logo: '/assets/clients/client-23.png' },
  { id: 'client-24', name: 'Enterprise Client 24', logo: '/assets/clients/client-24.png' },
  { id: 'client-25', name: 'Enterprise Client 25', logo: '/assets/clients/client-25.png' },
  { id: 'client-26', name: 'Enterprise Client 26', logo: '/assets/clients/client-26.png' },
  { id: 'client-27', name: 'Enterprise Client 27', logo: '/assets/clients/client-27.png' },
  { id: 'client-28', name: 'Enterprise Client 28', logo: '/assets/clients/client-28.png' },
  { id: 'client-29', name: 'Enterprise Client 29', logo: '/assets/clients/client-29.png' },
  { id: 'client-30', name: 'Enterprise Client 30', logo: '/assets/clients/client-30.png' },
  { id: 'client-31', name: 'Enterprise Client 31', logo: '/assets/clients/client-31.png' },
  { id: 'client-32', name: 'Enterprise Client 32', logo: '/assets/clients/client-32.png' },
  { id: 'client-33', name: 'Enterprise Client 33', logo: '/assets/clients/client-33.png' },
  { id: 'client-34', name: 'Enterprise Client 34', logo: '/assets/clients/client-34.png' },
  { id: 'client-35', name: 'Enterprise Client 35', logo: '/assets/clients/client-35.png' },
  { id: 'client-36', name: 'Enterprise Client 36', logo: '/assets/clients/client-36.png' },
  { id: 'client-37', name: 'Enterprise Client 37', logo: '/assets/clients/client-37.png' },
  { id: 'client-38', name: 'Enterprise Client 38', logo: '/assets/clients/client-38.png' },
  { id: 'client-39', name: 'Enterprise Client 39', logo: '/assets/clients/client-39.png' },
  { id: 'client-40', name: 'Enterprise Client 40', logo: '/assets/clients/client-40.png' },
  { id: 'client-41', name: 'Enterprise Client 41', logo: '/assets/clients/client-41.png' },
  { id: 'client-42', name: 'Enterprise Client 42', logo: '/assets/clients/client-42.png' },
];

interface OverseasClientsSectionProps {
  className?: string;
}

/**
 * Official Vorombetech "Our Clients" Section
 * Matches the exact clean white layout with left-aligned "Our Clients" heading,
 * short blue underline bar, and a single horizontal row of 6 borderless client logos
 * that auto-scrolls smoothly and seamlessly across the official client list.
 */
export const OverseasClientsSection: React.FC<OverseasClientsSectionProps> = ({
  className = '',
}) => {
  const totalClients = OFFICIAL_OVERSEAS_CLIENTS.length;
  const visibleCount = 6;
  const loopedClients = [
    ...OFFICIAL_OVERSEAS_CLIENTS,
    ...OFFICIAL_OVERSEAS_CLIENTS.slice(0, visibleCount),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [dragStartX, setDragStartX] = useState<number | null>(null);

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
    if (currentIndex === totalClients) {
      const timeout = window.setTimeout(() => {
        setEnableTransition(false);
        setCurrentIndex(0);
      }, 700);
      return () => window.clearTimeout(timeout);
    }
    if (currentIndex > totalClients) {
      setEnableTransition(false);
      setCurrentIndex(0);
    }
  }, [currentIndex, totalClients]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setDragStartX(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartX === null) return;
    const delta = e.clientX - dragStartX;
    setEnableTransition(true);
    if (delta < -40) {
      setCurrentIndex((prev) => Math.min(totalClients, prev + 2));
    } else if (delta > 40) {
      setCurrentIndex((prev) => Math.max(0, prev - 2));
    }
    setDragStartX(null);
  };

  return (
    <section
      className={`pt-8 pb-16 lg:pt-10 lg:pb-20 bg-white text-[#3b3b3b] overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading styled consistently with Latest News & Articles */}
        <div className="mb-10 sm:mb-12 space-y-2 text-left">
          <p className="text-xs font-bold tracking-wider text-amber-700 uppercase">
            PROVEN RESULTS, TRUSTED RELATIONSHIP · GLOBAL ENTERPRISES
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Clients
          </h2>
        </div>

        {/* Single-Row Borderless Client Auto-Scrolling Carousel (6 logos visible at a time on desktop) */}
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
              width: `${(loopedClients.length * 100) / visibleCount}%`,
              transform: `translate3d(-${(currentIndex * 100) / loopedClients.length}%, 0, 0)`,
            }}
          >
            {loopedClients.map((client, idx) => (
              <div
                key={`${client.id}-${idx}`}
                style={{ width: `${100 / loopedClients.length}%` }}
                className="shrink-0 px-3 sm:px-5 flex items-center justify-center h-24 sm:h-28"
                title={client.name}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  draggable={false}
                  loading="lazy"
                  className="max-h-20 sm:max-h-24 max-w-[150px] sm:max-w-[180px] w-auto h-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

