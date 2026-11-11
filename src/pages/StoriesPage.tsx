import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import { AppLink } from '../context/RouterContext';
import { SUCCESS_STORIES_DATA } from '../data/storiesData';
import { StoryIndustry } from '../types';
import { VisualAsset } from '../components/VisualAsset';
import { ContactSection } from '../components/ContactSection';
import { RotatingText } from '../components/RotatingText';
import { useGsapPageAnimations } from '../hooks/useGsapAnimations';

const INDUSTRIES: ('All' | StoryIndustry)[] = [
  'All',
  'BFSI',
  'Healthcare',
  'SaaS',
  'E-commerce',
];

export const StoriesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<'All' | StoryIndustry>('All');
  const gridRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  useGsapPageAnimations(pageRef);

  const filteredStories =
    selectedIndustry === 'All'
      ? SUCCESS_STORIES_DATA
      : SUCCESS_STORIES_DATA.filter((story) => story.industry === selectedIndustry);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll('.gsap-story-card');
    gsap.fromTo(
      cards,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.38, stagger: 0.06, ease: 'power2.out', clearProps: 'transform' }
    );
  }, [selectedIndustry]);

  return (
    <div ref={pageRef} className="pt-18 space-y-10 bg-white">
      {/* Luminous Hero Banner with Sweeping Curved Arch */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f0fdf4] via-[#fffbeb]/35 to-white pt-16 pb-24 lg:pt-20 lg:pb-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-12 w-96 h-96 rounded-full bg-[#166534]/12 blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <nav aria-label="Breadcrumb" className="gsap-hero-item flex items-center gap-2 text-xs text-slate-500">
              <AppLink href="/" className="hover:text-[#166534] transition-colors">
                Home
              </AppLink>
              <span aria-hidden="true">/</span>
              <span className="text-[#166534] font-bold">Success Stories</span>
            </nav>

            <h1
              className="gsap-hero-item font-extrabold tracking-tight text-slate-900"
              style={{ fontSize: 'clamp(2.25rem, 3.6vw, 3.25rem)' }}
            >
              Audited Enterprise Case Studies &{' '}
              <RotatingText
                phrases={[
                  'Quantified Client Outcomes',
                  'BFSI & Healthcare Impact',
                  'Multi-Million FinOps Savings',
                  'Sub-Second Platform Latency',
                ]}
                className="inline-block text-amber-700"
              />
            </h1>

            <p className="gsap-hero-item text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Explore how Vorombetech Solutions engineers measurable cost reductions, sub-second platform latency, and regulatory compliance across BFSI, Healthcare, SaaS, and E-commerce.
            </p>
          </div>

          <div className="lg:col-span-5 gsap-hero-showcase">
            <VisualAsset
              theme="bfsi"
              title="Audited Client Impact & Production Outcomes"
              subtitle="145+ Global Enterprise Clients"
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
              stroke="#166534"
              strokeOpacity="0.22"
              strokeWidth="2"
            />
          </svg>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div
            role="tablist"
            aria-label="Filter stories by industry"
            className="inline-flex flex-wrap items-center gap-1.5 p-1.5 bg-white border border-slate-200/90 rounded-xl shadow-2xs"
          >
            {INDUSTRIES.map((industry) => {
              const active = selectedIndustry === industry;
              return (
                <button
                  key={industry}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                    active
                      ? 'bg-[#166534] text-white'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {industry}
                </button>
              );
            })}
          </div>

          <p className="text-xs text-slate-500 font-mono-tabular">
            Showing {filteredStories.length} of {SUCCESS_STORIES_DATA.length} verified case studies
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredStories.map((story) => (
            <AppLink
              key={story.slug}
              href={`/stories/${story.slug}`}
              className="gsap-story-card group rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-2xs hover:border-[#166534]/50 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <VisualAsset
                  theme={story.visualTheme}
                  title={story.clientName}
                  subtitle={`${story.industry} · ${story.date}`}
                  aspectRatio="16:9"
                  className="border-b border-slate-100"
                />

                <div className="p-6 sm:p-8 space-y-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                    <span className="font-bold text-[#166534]">{story.industry}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-medium text-slate-800">{story.clientName}</span>
                    <span aria-hidden="true">·</span>
                    <span>{story.date}</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#166534] transition-colors">
                    {story.title}
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {story.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 sm:px-8 pb-6 pt-5 border-t border-slate-100 space-y-4 bg-[#f8f9fa]">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {story.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-3 border border-slate-200/80">
                      <p className="text-base sm:text-lg font-extrabold text-[#166534] font-mono-tabular">
                        {metric.value}
                      </p>
                      <p className="text-[11px] text-slate-600 mt-0.5 line-clamp-1">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-slate-500">
                    Stack: {story.technologiesUsed.slice(0, 3).join(' · ')}
                  </span>
                  <span className="font-bold text-[#166534] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform whitespace-nowrap">
                    Read Full Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </AppLink>
          ))}
        </div>
      </section>

      <ContactSection />
    </div>
  );
};
