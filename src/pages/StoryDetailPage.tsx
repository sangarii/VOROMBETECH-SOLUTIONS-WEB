import React, { useRef } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Cpu,
} from 'lucide-react';
import { AppLink } from '../context/RouterContext';
import { SUCCESS_STORIES_DATA } from '../data/storiesData';
import { VisualAsset } from '../components/VisualAsset';
import { ContactSection } from '../components/ContactSection';
import { RotatingText } from '../components/RotatingText';
import { useGsapPageAnimations } from '../hooks/useGsapAnimations';

export const StoryDetailPage: React.FC<{ slug: string }> = ({ slug }) => {
  const pageRef = useRef<HTMLDivElement>(null);
  useGsapPageAnimations(pageRef, [slug]);
  const story =
    SUCCESS_STORIES_DATA.find((item) => item.slug === slug) ||
    SUCCESS_STORIES_DATA[0];

  const relatedStories = SUCCESS_STORIES_DATA.filter(
    (item) => item.slug !== story.slug
  ).slice(0, 2);

  return (
    <div ref={pageRef} className="pt-18 space-y-12">
      {/* Header with 2-Column Layout & Medium Right-Side Image */}
      <section className="relative overflow-hidden bg-white pt-12 pb-14 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-6 gsap-hero-item">
            <AppLink
              href="/stories"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#166534] hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Success Stories</span>
            </AppLink>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="gsap-hero-item flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-600">
                <span className="font-bold text-[#166534]">{story.industry}</span>
                <span aria-hidden="true">·</span>
                <span className="font-bold text-slate-900">{story.clientName}</span>
                <span aria-hidden="true">·</span>
                <RotatingText
                  phrases={[
                    `Published ${story.date}`,
                    `${story.metrics[0].value} ${story.metrics[0].label}`,
                    'Audited Enterprise Deployment',
                  ]}
                  className="inline-block font-bold text-amber-700"
                />
              </div>

              <h1
                className="font-extrabold tracking-tight text-slate-900 leading-tight"
                style={{ fontSize: 'clamp(2rem, 3.4vw, 3.1rem)' }}
              >
                {story.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {story.summary}
              </p>
            </div>

            <div className="lg:col-span-5">
              <VisualAsset
                theme={story.visualTheme}
                title={story.title}
                subtitle={`${story.clientName} · ${story.industry} Case Study`}
                aspectRatio="16:9"
                className="rounded-2xl border border-slate-200/90 shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white border border-slate-200/90 shadow-xs p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {story.metrics.map((metric, idx) => (
            <div
              key={idx}
              className={`${
                idx !== 0 ? 'sm:border-l sm:border-slate-200/80 sm:pl-6' : ''
              }`}
            >
              <p className="text-2xl sm:text-3xl font-extrabold text-[#166534] font-mono-tabular">
                {metric.value}
              </p>
              <p className="text-sm font-bold text-slate-900 mt-1">
                {metric.label}
              </p>
              <p className="text-xs text-slate-500 mt-0.5">{metric.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 rounded-2xl bg-white border border-slate-200/90 p-7 sm:p-8 space-y-5 shadow-2xs">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <span>01. The Challenge</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Legacy Bottlenecks & Constraints
            </h2>
            <ul className="space-y-4">
              {story.challenge.map((paragraph, idx) => (
                <li
                  key={idx}
                  className="text-sm text-slate-600 leading-relaxed flex items-start gap-3"
                >
                  <span className="font-mono-tabular text-xs font-bold text-slate-400 mt-1">
                    0{idx + 1}
                  </span>
                  <span>{paragraph}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 rounded-2xl bg-[#f0fdf4] border border-emerald-200/90 p-7 sm:p-8 space-y-5 shadow-2xs">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#166534] uppercase tracking-wider">
              <Cpu className="w-4 h-4 text-[#166534]" />
              <span>02. The Engineering Solution</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              How Vorombetech Architected the Transformation
            </h2>
            <ul className="space-y-4">
              {story.solution.map((paragraph, idx) => (
                <li
                  key={idx}
                  className="text-sm text-slate-800 leading-relaxed flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#166534] shrink-0 mt-1" />
                  <span>{paragraph}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-2xs">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
            Production Architecture Stack
          </h3>
          <div className="flex flex-wrap items-center gap-3">
            {story.technologiesUsed.map((tech, idx) => (
              <span
                key={idx}
                className="px-3.5 py-2 rounded-xl bg-[#f8f9fa] border border-slate-200/80 text-xs font-semibold text-slate-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Stories */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-200/80">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Related Success Stories
          </h2>
          <AppLink
            href="/stories"
            className="text-xs font-bold text-[#166534] hover:underline"
          >
            View all stories
          </AppLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {relatedStories.map((related) => (
            <AppLink
              key={related.slug}
              href={`/stories/${related.slug}`}
              className="group rounded-2xl bg-white border border-slate-200/90 overflow-hidden hover:border-[#166534]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <VisualAsset
                  theme={related.visualTheme}
                  title={related.clientName}
                  subtitle={related.industry}
                  aspectRatio="16:9"
                  className="border-b border-slate-100"
                />
                <div className="p-6 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="font-bold text-[#166534]">
                      {related.industry}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{related.clientName}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#166534] transition-colors line-clamp-2">
                    {related.title}
                  </h3>
                </div>
              </div>
              <div className="px-6 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-mono-tabular font-bold text-[#166534]">
                  {related.metrics[0].value} {related.metrics[0].label}
                </span>
                <span className="font-bold text-[#166534] inline-flex items-center gap-1">
                  Read Story <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </AppLink>
          ))}
        </div>
      </section>

      <ContactSection />
    </div>
  );
};
