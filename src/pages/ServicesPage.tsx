import React, { useRef, useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { AppLink } from '../context/RouterContext';
import { SERVICES_DATA } from '../data/servicesData';
import { MEGA_MENU_CATEGORIES } from '../data/megaMenuServicesData';
import { ServiceIcon } from '../components/ServiceIcon';
import { VisualAsset } from '../components/VisualAsset';
import { ContactSection } from '../components/ContactSection';
import { RotatingText } from '../components/RotatingText';
import { useGsapPageAnimations } from '../hooks/useGsapAnimations';

export const ServicesPage: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeDomain, setActiveDomain] = useState<string>('ALL');
  useGsapPageAnimations(pageRef, [activeDomain]);

  const displayedCategories =
    activeDomain === 'ALL'
      ? MEGA_MENU_CATEGORIES
      : MEGA_MENU_CATEGORIES.filter((cat) => cat.title === activeDomain);

  return (
    <div ref={pageRef} className="pt-18 space-y-12 bg-white">
      {/* Luminous Header with Soft Green Blurred Circles & Sweeping Curved Arch */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f0fdf4] via-[#fffbeb]/35 to-white pt-16 pb-24 lg:pt-20 lg:pb-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-12 w-96 h-96 rounded-full bg-[#166534]/12 blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <nav aria-label="Breadcrumb" className="gsap-hero-item flex items-center gap-2 text-xs text-slate-500">
              <AppLink href="/" className="hover:text-[#166534] transition-colors">
                Home
              </AppLink>
              <span aria-hidden="true">/</span>
              <span className="text-[#166534] font-bold">Services</span>
            </nav>

            <h1
              className="gsap-hero-item font-extrabold tracking-tight text-slate-900"
              style={{ fontSize: 'clamp(2.25rem, 3.6vw, 3.25rem)' }}
            >
              Enterprise Technology Practices Built for{' '}
              <RotatingText
                phrases={[
                  'High-Compliance Execution',
                  'Cloud & DevOps Excellence',
                  'Information Security & ISO',
                  'Digitalization & SaaS Scale',
                ]}
                className="inline-block text-amber-700"
              />
            </h1>

            <p className="gsap-hero-item text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              From Cloud Services and ISO Information Security to Digitalization Portals, Managed IT Infrastructure, and Enterprise SaaS, our engineering pods deliver measurable operational outcomes.
            </p>
          </div>

          <div className="lg:col-span-5 gsap-hero-showcase">
            <VisualAsset
              theme="salesforce"
              title="Enterprise Engineering & Architecture Delivery"
              subtitle="5 Practice Pillars · 29 Specialized Services"
              aspectRatio="16:9"
              className="rounded-2xl ui-double-line-card"
            />
          </div>
        </div>

        {/* Sweeping Parabolic Curved Arch Transition */}
        <div
          aria-hidden="true"
          className="gsap-wave-arc pointer-events-none absolute inset-x-0 bottom-0 w-full overflow-hidden leading-none"
        >
          <svg
            viewBox="0 0 1440 84"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-10 sm:h-14 lg:h-16 preserve-3d"
            preserveAspectRatio="none"
          >
            <path
              d="M0 16C360 88 1080 88 1440 16V84H0V16Z"
              fill="#ffffff"
            />
            <path
              d="M0 16C360 88 1080 88 1440 16"
              stroke="#f5c400"
              strokeOpacity="0.4"
              strokeWidth="2"
            />
          </svg>
        </div>
      </section>

      {/* Complete 5-Column Official Vorombetech Services Directory with Interactive Pill Tabs */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 border-b border-slate-200/80 pb-6">
            <div className="space-y-1.5">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
                Complete Service Portfolio · Interactive Explorer
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                All Vorombetech Enterprise Services & Solutions
              </h2>
            </div>

            {/* Interactive Domain Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveDomain('ALL')}
                className={`px-3.5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                  activeDomain === 'ALL'
                    ? 'bg-[#f5c400] text-slate-950 shadow-xs'
                    : 'bg-[#fffbeb] text-slate-700 border border-amber-200 hover:border-amber-400'
                }`}
              >
                All 5 Domains (29)
              </button>
              {MEGA_MENU_CATEGORIES.map((cat) => (
                <button
                  key={cat.title}
                  type="button"
                  onClick={() => setActiveDomain(cat.title)}
                  className={`px-3.5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                    activeDomain === cat.title
                      ? 'bg-[#166534] text-white shadow-xs'
                      : 'bg-slate-50 text-slate-700 border border-slate-200 hover:border-[#166534]/40'
                  }`}
                >
                  {cat.title} ({cat.items.length})
                </button>
              ))}
            </div>
          </div>

          {activeDomain === 'ALL' ? (
            <div className="gsap-card-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-7">
              {displayedCategories.map((category) => (
                <div key={category.title} className="gsap-card space-y-3">
                  <h3 className="text-sm sm:text-base font-extrabold tracking-wide text-slate-900 uppercase pb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#f5c400]" />
                    <span>{category.title}</span>
                  </h3>
                  <ul className="divide-y divide-slate-200/80 border-b border-slate-200/80">
                    {category.items.map((sub) => (
                      <li key={sub.slug}>
                        <AppLink
                          href={`/services/${sub.slug}`}
                          className="group/link flex items-center justify-between gap-2 py-2.5 text-xs font-semibold uppercase tracking-wide text-slate-700 hover:text-amber-700 transition-colors"
                        >
                          <span>{sub.label}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-amber-700 shrink-0" />
                        </AppLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className="gsap-card-grid flex flex-wrap gap-3 pt-2">
              {displayedCategories[0]?.items.map((sub) => (
                <AppLink
                  key={sub.slug}
                  href={`/services/${sub.slug}`}
                  className="gsap-card group inline-flex items-center gap-3 px-5 py-3.5 rounded-full bg-[#f0fdf4]/70 hover:bg-[#fffbeb] border border-emerald-200 hover:border-amber-400 transition-all shadow-2xs"
                >
                  <span className="w-2 h-2 rounded-full bg-[#166534] group-hover:bg-[#f5c400] transition-colors" />
                  <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wide text-slate-900">
                    {sub.label}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#166534] group-hover:text-amber-800 group-hover:translate-x-0.5 transition-all" />
                </AppLink>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Grid of 6 Core Practice Deep-Dive Cards */}
      <section className="relative overflow-hidden py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="gsap-card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <AppLink
              key={service.slug}
              href={`/services/${service.slug}`}
              className="gsap-card group rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-2xs hover:border-[#166534]/50 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <VisualAsset
                  theme={service.visualTheme}
                  title={service.title}
                  subtitle={service.indexNumber}
                  aspectRatio="16:9"
                  className="border-b border-slate-100"
                />

                <div className="px-6 pb-5 pt-3.5 sm:px-7 sm:pb-6 sm:pt-4 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-11 h-11 rounded-xl bg-[#166534]/10 text-[#166534] group-hover:bg-[#166534] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                      <ServiceIcon name={service.iconName} className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#166534] bg-[#f0fdf4] px-2.5 py-1 rounded-md border border-emerald-200/80">
                      {service.indexNumber}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-slate-900 group-hover:text-[#166534] transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  <ul className="space-y-2 pt-1">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#166534] shrink-0 mt-0.5" />
                        <span>{benefit.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-7 pb-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs bg-[#f8f9fa]">
                <span className="font-mono-tabular font-bold text-[#166534]">
                  {service.metrics[0].value} {service.metrics[0].label}
                </span>
                <span className="font-bold text-[#166534] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Explore <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </AppLink>
          ))}
        </div>
      </section>

      {/* Contact Us Section */}
      <ContactSection titleOverride="Discuss Your Architecture With" />
    </div>
  );
};
