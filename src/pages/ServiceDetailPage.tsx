import React, { useRef } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Cloud,
  ShieldCheck,
  Server,
  Lock,
  FileCheck2,
  Globe,
  Activity,
  Sparkles,
} from 'lucide-react';
import { AppLink } from '../context/RouterContext';
import {
  getServiceBySlug,
  getServiceCategoryContext,
  ServiceCategoryContext,
} from '../data/megaMenuServicesData';
import { ServiceItem } from '../types';
import { VisualAsset } from '../components/VisualAsset';
import { ContactSection } from '../components/ContactSection';
import { RotatingText } from '../components/RotatingText';
import { useGsapPageAnimations } from '../hooks/useGsapAnimations';

interface PillarLayoutProps {
  service: ServiceItem;
  context: ServiceCategoryContext;
}

/* ============================================================================
   DESIGN 1: CLOUD SERVICES PILLAR LAYOUT (Clean White Background)
   (AWS, Cloud Consultancy, Cloud Cost Optimization, Cloud Migration,
    Cloud Monitoring, Cloud Security, Microsoft Azure)
   ============================================================================ */
const CloudPillarLayout: React.FC<PillarLayoutProps> = ({ service }) => {
  return (
    <div className="space-y-16 bg-white">
      {/* 1. CLEAN WHITE CLOUD TOPOLOGY HERO */}
      <section className="relative overflow-hidden bg-white py-14 lg:py-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
                <Cloud className="w-4 h-4 text-amber-600" />
                <span>CLOUD ARCHITECTURE & FINOPS</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <RotatingText
                  phrases={[
                    `${service.metrics[0].value} ${service.metrics[0].label}`,
                    'Multi-AZ High Availability',
                    'AWS · Azure · Hybrid Cloud',
                  ]}
                  className="inline-block text-[#166534]"
                />
              </div>

              <h1
                className="font-extrabold tracking-tight text-slate-900"
                style={{ fontSize: 'clamp(2.25rem, 3.6vw, 3.25rem)' }}
              >
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {service.heroDescription}
              </p>

              {/* Inline FinOps & Cloud Telemetry Strip */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
                {service.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white border border-slate-200/90 p-4 shadow-2xs"
                  >
                    <p className="text-xl sm:text-2xl font-extrabold text-slate-900 font-mono-tabular">
                      {metric.value}
                    </p>
                    <p className="text-xs font-bold text-slate-600 mt-1 line-clamp-1">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#contact-section"
                  className="btn-primary-gold inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold rounded-xl"
                >
                  <span>Request Cloud Architecture Review</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <AppLink
                  href="/stories"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-colors"
                >
                  <span>Cloud Case Studies</span>
                </AppLink>
              </div>
            </div>

            {/* Right: Cloud Topology Console Frame */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white p-3.5 border border-slate-200/90 shadow-md space-y-3">
                <div className="flex items-center justify-between px-2 pt-1 text-[11px] font-mono-tabular text-slate-500">
                  <span className="flex items-center gap-1.5 text-[#166534] font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#166534]" />
                    CLOUD LANDING ZONE · LIVE
                  </span>
                  <span>MULTI-REGION SLA</span>
                </div>
                <VisualAsset
                  theme={service.visualTheme}
                  title={service.title}
                  subtitle={`${service.indexNumber} · Cloud Blueprint`}
                  aspectRatio="16:9"
                  className="rounded-2xl border border-slate-200/80"
                />
                <div className="flex flex-wrap items-center gap-1.5 px-1 pb-1">
                  {service.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/80 text-[11px] font-mono-tabular text-slate-800 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CLOUD READINESS & TARGET LANDING ZONE SPLIT BOARD */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Legacy Cloud Bottlenecks (5 Cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between space-y-6 shadow-2xs">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
                <AlertTriangle className="w-4 h-4" />
                <span>Legacy Cloud & Spend Friction</span>
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                {service.problemStatement.headline}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {service.problemStatement.description}
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-200/80">
              {service.problemStatement.painPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3 text-sm text-slate-700"
                >
                  <span className="font-mono-tabular text-xs font-extrabold text-amber-700 mt-0.5">
                    0{idx + 1}
                  </span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Target Cloud Landing Zone Blueprint (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-9 flex flex-col justify-between space-y-6 shadow-2xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2 text-xs font-mono-tabular text-[#166534] font-bold uppercase">
                <span>VOROMBETECH TARGET CLOUD ARCHITECTURE</span>
                <span className="text-amber-700">WELL-ARCHITECTED</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {service.solutionStatement.headline}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {service.solutionStatement.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-slate-200/80">
              {service.solutionStatement.outcomes.map((outcome, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 text-xs sm:text-sm text-slate-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#166534] shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>

            {/* Integrated Cloud Stack Footer */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-mono-tabular text-slate-500 uppercase font-bold">
                Cloud Native Stack:
              </span>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-[#fffbeb] border border-amber-200/80 text-xs font-semibold text-amber-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CLOUD CAPABILITIES & 6R MIGRATION PIPELINE */}
      <section className="bg-white border-t border-slate-200/80 pt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/90 p-6 space-y-3 shadow-2xs"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono-tabular text-xs font-extrabold text-amber-700 uppercase">
                    CLOUD PILLAR 0{idx + 1}
                  </span>
                  <Cloud className="w-4 h-4 text-[#166534]" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* 4-Stage Cloud Delivery Pipeline */}
          <div className="space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
                Cloud Execution Roadmap
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Zero-Downtime Cloud Delivery Lifecycle
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              {service.processSteps.map((step) => (
                <div
                  key={step.stepNumber}
                  className="rounded-2xl bg-white border border-slate-200/90 p-6 flex flex-col justify-between space-y-4 relative overflow-hidden shadow-2xs"
                >
                  <div className="h-1 w-full bg-[#f5c400] absolute top-0 left-0" />
                  <div className="space-y-2.5 pt-1">
                    <div className="flex items-center justify-between text-xs font-mono-tabular">
                      <span className="font-extrabold text-[#166534] uppercase">
                        {step.phase}
                      </span>
                      <span className="text-slate-400 font-bold">
                        STEP {step.stepNumber}
                      </span>
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 text-xs">
                    <span className="text-slate-400 font-semibold block text-[10px] uppercase">
                      Cloud Deliverable
                    </span>
                    <span className="font-bold text-slate-900">
                      {step.deliverable}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ============================================================================
   DESIGN 2: INFORMATION SECURITY PILLAR LAYOUT (Clean White Background)
   (ISO 20000_ITSM, ISO 22301_BCMS, ISO 27001_ISMS, ISO 27701_PIMS,
    IT General Control (ITGC), Security Assessment)
   ============================================================================ */
const SecurityPillarLayout: React.FC<PillarLayoutProps> = ({ service }) => {
  return (
    <div className="space-y-16 bg-white">
      {/* 1. CLEAN WHITE ISO & CYBER-DEFENSE COMMAND HERO */}
      <section className="relative overflow-hidden bg-white py-14 lg:py-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tabular uppercase tracking-wider text-amber-700 font-bold">
                <ShieldCheck className="w-4 h-4 text-[#166534]" />
                <span>INFORMATION SECURITY & ISO GOVERNANCE</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="text-[#166534]">AUDIT-READY</span>
              </div>

              <h1
                className="font-extrabold tracking-tight text-slate-900"
                style={{ fontSize: 'clamp(2.25rem, 3.5vw, 3.2rem)' }}
              >
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {service.heroDescription}
              </p>

              {/* Compliance Frameworks Strip */}
              <div className="pt-1 flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/90 text-xs font-mono-tabular text-slate-800 font-semibold flex items-center gap-1.5"
                  >
                    <Lock className="w-3 h-3 text-amber-600" />
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href="#contact-section"
                  className="btn-primary-gold inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold rounded-xl"
                >
                  <span>Schedule Compliance & Security Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <AppLink
                  href="/stories"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-colors"
                >
                  <span>Security Case Studies</span>
                </AppLink>
              </div>
            </div>

            {/* Right: Audit Scoreboard + Visual Asset */}
            <div className="lg:col-span-6 space-y-4">
              <VisualAsset
                theme={service.visualTheme}
                title={service.title}
                subtitle="ZERO-TRUST & ISO COMPLIANCE"
                aspectRatio="16:9"
                className="rounded-2xl border border-slate-200/90"
              />

              <div className="grid grid-cols-3 gap-3">
                {service.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl bg-white border border-slate-200/90 p-4 shadow-2xs"
                  >
                    <p className="text-xl sm:text-2xl font-extrabold text-slate-900 font-mono-tabular">
                      {metric.value}
                    </p>
                    <p className="text-xs font-medium text-slate-600 mt-1">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OFFICIAL ISO / REGULATORY RISK & CONTROL LEDGER */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-xs">
          {/* Ledger Header */}
          <div className="bg-slate-50 border-b border-slate-200/90 px-6 sm:px-8 py-5 flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-xs font-mono-tabular text-amber-700 uppercase tracking-wider font-bold">
                COMPLIANCE & SECURITY CONTROL LEDGER
              </p>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Regulatory Risk Gaps vs. Engineered Annex-A / Security Controls
              </h2>
            </div>
            <span className="text-xs font-mono-tabular text-[#166534] font-bold">
              100% FIRST-ATTEMPT AUDIT PASS RATE
            </span>
          </div>

          {/* Paired Diagnostic Rows */}
          <div className="divide-y divide-slate-200/80">
            {service.problemStatement.painPoints.map((pain, idx) => {
              const outcome =
                service.solutionStatement.outcomes[idx] ||
                service.solutionStatement.outcomes[0];
              return (
                <div
                  key={idx}
                  className="grid grid-cols-1 lg:grid-cols-12 items-stretch"
                >
                  {/* Risk Finding */}
                  <div className="lg:col-span-6 p-6 sm:p-7 bg-white flex items-start gap-3.5">
                    <span className="font-mono-tabular text-xs font-extrabold text-amber-800 bg-amber-100/80 px-2 py-1 rounded shrink-0">
                      GAP 0{idx + 1}
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1">
                        Audit / Security Exposure
                      </p>
                      <p className="text-sm text-slate-700 font-medium leading-relaxed">
                        {pain}
                      </p>
                    </div>
                  </div>

                  {/* Engineered Control */}
                  <div className="lg:col-span-6 p-6 sm:p-7 bg-slate-50/60 flex items-start gap-3.5 border-t lg:border-t-0 lg:border-l border-slate-200/80">
                    <span className="font-mono-tabular text-xs font-extrabold text-emerald-900 bg-emerald-100/80 px-2 py-1 rounded shrink-0">
                      CTRL 0{idx + 1}
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#166534] mb-1">
                        Verified Vorombetech Control
                      </p>
                      <p className="text-sm text-slate-900 font-semibold leading-relaxed">
                        {outcome}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. FOUR GOVERNANCE PILLARS & 4-GATE CERTIFICATION TIMELINE */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {service.benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-slate-200/90 p-6 space-y-3 shadow-2xs"
            >
              <div className="w-10 h-10 rounded-xl bg-[#fffbeb] border border-amber-200 text-amber-800 flex items-center justify-center">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <p className="text-xs font-mono-tabular font-bold text-slate-400">
                GOVERNANCE PILLAR 0{idx + 1}
              </p>
              <h3 className="text-lg font-extrabold text-slate-900">
                {benefit.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* 4-Gate Certification Audit Roadmap */}
        <div className="rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-9 space-y-8 shadow-2xs">
          <div className="max-w-2xl space-y-1">
            <p className="text-xs font-mono-tabular text-amber-700 uppercase tracking-wider font-bold">
              ISO & SECURITY CERTIFICATION METHODOLOGY
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Four-Gate Audit & Remediation Protocol
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {service.processSteps.map((step) => (
              <div
                key={step.stepNumber}
                className="rounded-2xl bg-slate-50 border border-slate-200/80 p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono-tabular">
                    <span className="text-[#166534] font-bold uppercase">
                      GATE {step.stepNumber} · {step.phase}
                    </span>
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200/80">
                  <p className="text-[10px] font-mono-tabular uppercase text-slate-400">
                    Audit Evidence Output
                  </p>
                  <p className="text-xs font-bold text-slate-900 mt-0.5">
                    {step.deliverable}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

/* ============================================================================
   DESIGN 3: DIGITALIZATION SERVICES PILLAR LAYOUT (Clean White Background)
   (Contest Management Portal, E-commerce Portal, eLearning Portal,
    Enterprise Web App Development, Job Portal, Mobile App Development,
    Survey Portal, UI/UX Design, Web Portal Development)
   ============================================================================ */
const DigitalizationPillarLayout: React.FC<PillarLayoutProps> = ({
  service,
  context,
}) => {
  return (
    <div className="space-y-16 bg-white">
      {/* 1. CLEAN WHITE PRODUCT STUDIO SHOWCASE HERO WITH BROWSER MOCKUP */}
      <section className="relative overflow-hidden bg-white py-14 lg:py-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>DIGITALIZATION & PORTAL STUDIO</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="text-[#166534] font-mono-tabular">
                  CUSTOM WEB & MOBILE ENGINEERING
                </span>
              </div>

              <h1
                className="font-extrabold tracking-tight text-slate-900"
                style={{ fontSize: 'clamp(2.2rem, 3.4vw, 3.1rem)' }}
              >
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {service.heroDescription}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#contact-section"
                  className="btn-primary-gold inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold rounded-xl"
                >
                  <span>Request Interactive Portal Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <AppLink
                  href="/stories"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-colors"
                >
                  <span>Explore Portal Case Studies</span>
                </AppLink>
              </div>
            </div>

            {/* Right: Browser Window Mockup Frame */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-white border border-slate-200/90 shadow-md overflow-hidden">
                {/* Browser Top Bar */}
                <div className="bg-slate-50 border-b border-slate-200/80 px-4 py-2.5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="px-3 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-mono-tabular text-slate-500 truncate max-w-xs">
                    portal.vorombetech.com/{service.slug}
                  </div>
                  <span className="text-[11px] font-mono-tabular font-bold text-[#166534]">
                    {service.metrics[0].value}
                  </span>
                </div>

                <VisualAsset
                  theme={service.visualTheme}
                  title={service.title}
                  subtitle={`${service.indexNumber} · Digital Platform`}
                  aspectRatio="16:9"
                />

                <div className="p-4 bg-white border-t border-slate-200/80 grid grid-cols-3 gap-4">
                  {service.metrics.map((metric, idx) => (
                    <div key={idx}>
                      <p className="text-lg sm:text-xl font-extrabold text-slate-900 font-mono-tabular">
                        {metric.value}
                      </p>
                      <p className="text-[11px] text-slate-600 font-medium line-clamp-1">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SIDEBAR + STUDIO WORKSPACE (12-COL SPLIT WITH STICKY PORTAL DIRECTORY) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Sticky Sidebar: All 9 Digitalization Portals + Stack */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <div className="rounded-2xl bg-white border border-slate-200/90 p-5 shadow-2xs space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <p className="text-[11px] font-bold uppercase tracking-wider text-amber-700">
                  Digitalization Suite
                </p>
                <h2 className="text-base font-extrabold text-slate-900 mt-0.5">
                  All 09 Digital Portals & Apps
                </h2>
              </div>
              <nav aria-label="Digitalization Services Directory" className="divide-y divide-slate-100">
                {context.siblings.map((item) => {
                  const isActive = item.slug === service.slug;
                  return (
                    <AppLink
                      key={item.slug}
                      href={`/services/${item.slug}`}
                      className={`flex items-center justify-between py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wide transition-all ${
                        isActive
                          ? 'bg-[#fffbeb] text-amber-900 border border-amber-200/80'
                          : 'text-slate-700 hover:text-amber-800 hover:bg-slate-50'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowRight
                        className={`w-3.5 h-3.5 shrink-0 ${
                          isActive ? 'text-amber-700' : 'text-slate-400'
                        }`}
                      />
                    </AppLink>
                  );
                })}
              </nav>
            </div>

            {/* Product Engineering Tech Stack */}
            <div className="rounded-2xl bg-white border border-slate-200/90 p-6 space-y-4 shadow-2xs">
              <p className="text-xs font-mono-tabular uppercase tracking-wider text-amber-700 font-bold">
                Portal Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          {/* Right Studio Canvas (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* UX Challenge vs Composable Portal Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 space-y-4 shadow-2xs">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  Legacy Application Friction
                </p>
                <h3 className="text-xl font-extrabold text-slate-900">
                  {service.problemStatement.headline}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.problemStatement.description}
                </p>
                <ul className="space-y-2 pt-2 border-t border-slate-100">
                  {service.problemStatement.painPoints.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <span className="font-mono-tabular font-bold text-amber-700">0{idx + 1}.</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 space-y-4 shadow-2xs">
                <p className="text-xs font-bold uppercase tracking-wider text-[#166534]">
                  Modern Digital Portal Architecture
                </p>
                <h3 className="text-xl font-extrabold text-slate-900">
                  {service.solutionStatement.headline}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.solutionStatement.description}
                </p>
                <ul className="space-y-2 pt-2 border-t border-slate-100">
                  {service.solutionStatement.outcomes.map((out, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-900 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#166534] shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 2x2 Product Capabilities Bento */}
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold text-slate-900">
                Portal & Application Engineering Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {service.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white border border-slate-200/90 p-6 space-y-2 shadow-2xs"
                  >
                    <span className="text-xs font-mono-tabular font-extrabold text-amber-700">
                      FEATURE 0{idx + 1}
                    </span>
                    <h3 className="text-lg font-extrabold text-slate-900">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2x2 Agile Sprint Roadmap */}
            <div className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-2xs">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#166534]">
                  Agile Product Delivery
                </p>
                <h2 className="text-2xl font-extrabold text-slate-900 mt-1">
                  Four-Sprint Portal Engineering Lifecycle
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {service.processSteps.map((step) => (
                  <div
                    key={step.stepNumber}
                    className="rounded-xl bg-slate-50 border border-slate-200/80 p-5 space-y-2.5"
                  >
                    <div className="flex items-center justify-between text-xs font-mono-tabular">
                      <span className="font-extrabold text-amber-800 uppercase">
                        SPRINT {step.stepNumber} · {step.phase}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                    <p className="text-xs font-bold text-[#166534] pt-2 border-t border-slate-200/70">
                      Output: {step.deliverable}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ============================================================================
   DESIGN 4: IT SERVICES PILLAR LAYOUT (Clean White Background)
   (IT Consulting Service, IT Infrastructure Services & Solutions,
    IT Managed Service, Managed Security Services, Backup and Disaster Recovery)
   ============================================================================ */
const ItServicesPillarLayout: React.FC<PillarLayoutProps> = ({
  service,
}) => {
  return (
    <div className="space-y-16 bg-white">
      {/* 1. CLEAN WHITE 24/7 NOC & INFRASTRUCTURE COMMAND HERO */}
      <section className="relative overflow-hidden bg-white py-14 lg:py-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tabular uppercase tracking-wider text-amber-700 font-bold">
                <Activity className="w-4 h-4 text-[#166534]" />
                <span>24/7/365 NOC & MANAGED IT INFRASTRUCTURE</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="text-[#166534]">PROACTIVE SLA</span>
              </div>

              <h1
                className="font-extrabold tracking-tight text-slate-900"
                style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)' }}
              >
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {service.heroDescription}
              </p>

              {/* 3 NOC SLA Counters */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {service.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white border border-slate-200/90 p-4 shadow-2xs"
                  >
                    <p className="text-2xl font-extrabold text-slate-900 font-mono-tabular">
                      {metric.value}
                    </p>
                    <p className="text-xs font-semibold text-slate-600 mt-1">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#contact-section"
                  className="btn-primary-gold inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold rounded-xl"
                >
                  <span>Connect With Our 24/7 IT Advisory Desk</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <AppLink
                  href="/stories"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-colors"
                >
                  <span>Infrastructure Case Studies</span>
                </AppLink>
              </div>
            </div>

            <div className="lg:col-span-5">
              <VisualAsset
                theme={service.visualTheme}
                title={service.title}
                subtitle="MANAGED IT & INFRASTRUCTURE SLA"
                aspectRatio="16:9"
                className="rounded-2xl border border-slate-200/90 shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. INFRASTRUCTURE DIAGNOSTIC & SLA REMEDIATION MATRIX */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
        <div className="max-w-3xl space-y-2">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Operational Diagnostic vs. Managed SLA
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Eliminating Infrastructure Downtime & Operational Overhead
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          <div className="rounded-2xl bg-white border border-slate-200/90 p-7 space-y-4 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
              <Server className="w-4 h-4 text-amber-600" />
              <span>Operational Risks & Bottlenecks</span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">
              {service.problemStatement.headline}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {service.problemStatement.description}
            </p>
            <div className="space-y-2.5 pt-2">
              {service.problemStatement.painPoints.map((pt, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3 text-sm text-slate-700"
                >
                  <span className="font-mono-tabular text-xs font-extrabold text-amber-700 mt-0.5">
                    0{idx + 1}
                  </span>
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200/90 p-7 space-y-4 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#166534]">
              <ShieldCheck className="w-4 h-4 text-[#166534]" />
              <span>Vorombetech 24/7 Managed SLA Architecture</span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">
              {service.solutionStatement.headline}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {service.solutionStatement.description}
            </p>
            <div className="space-y-2.5 pt-2">
              {service.solutionStatement.outcomes.map((out, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3 text-sm text-slate-900 font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#166534] shrink-0 mt-0.5" />
                  <span>{out}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. INFRASTRUCTURE PLATFORMS & ITIL RUNBOOK SEQUENCE */}
      <section className="bg-white border-t border-slate-200/80 pt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* OEM & Infrastructure Ecosystem Card (5 Cols) */}
            <div className="lg:col-span-5 rounded-2xl bg-white border border-slate-200/90 p-7 flex flex-col justify-between space-y-6 shadow-2xs">
              <div className="space-y-2">
                <p className="text-xs font-mono-tabular uppercase tracking-wider text-amber-700 font-bold">
                  Enterprise Infrastructure Stack
                </p>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  OEM, Virtualization & NOC Tooling
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Certified engineering coverage across hybrid servers, SD-WAN, backup vaults, and automated ITSM monitoring.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 4 Infrastructure Benefits (7 Cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200/90 p-6 space-y-2 shadow-2xs"
                >
                  <span className="text-xs font-mono-tabular font-extrabold text-[#166534]">
                    SLA GUARANTEE 0{idx + 1}
                  </span>
                  <h4 className="text-lg font-extrabold text-slate-900">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 4-Step ITIL Runbook */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {service.processSteps.map((step) => (
              <div
                key={step.stepNumber}
                className="rounded-2xl bg-white border border-slate-200/90 p-6 space-y-3 shadow-2xs"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-lg bg-[#f5c400] text-slate-950 font-mono-tabular font-extrabold text-xs">
                    RUNBOOK {step.stepNumber}
                  </span>
                  <span className="text-xs font-bold uppercase text-slate-400">
                    {step.phase}
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
                <p className="text-xs font-bold text-[#166534] pt-2 border-t border-slate-100">
                  {step.deliverable}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

/* ============================================================================
   DESIGN 5: SAAS PILLAR LAYOUT (Clean White Background)
   (Salesforce, G-Suite, Microsoft Solutions)
   ============================================================================ */
const SaasPillarLayout: React.FC<PillarLayoutProps> = ({ service, context }) => {
  return (
    <div className="space-y-16 bg-white">
      {/* 1. CLEAN WHITE EXECUTIVE SAAS & CRM ECOSYSTEM HERO */}
      <section className="relative overflow-hidden bg-white py-14 lg:py-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Interactive 3-Platform SaaS Selector Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {context.siblings.map((plat) => {
              const active = plat.slug === service.slug;
              return (
                <AppLink
                  key={plat.slug}
                  href={`/services/${plat.slug}`}
                  className={`rounded-2xl p-4 border transition-all flex items-center justify-between gap-3 ${
                    active
                      ? 'bg-[#fffbeb] text-slate-900 border-amber-400 shadow-sm'
                      : 'bg-white text-slate-900 border-slate-200/90 hover:border-amber-300'
                  }`}
                >
                  <div>
                    <p className="text-[10px] font-mono-tabular uppercase font-bold text-amber-700">
                      ENTERPRISE SAAS PLATFORM
                    </p>
                    <p className="text-base font-extrabold mt-0.5">{plat.label}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-mono-tabular font-extrabold text-[#166534]">
                      {plat.metricValue}
                    </p>
                    <p className="text-[10px] text-slate-500">Verified Lift</p>
                  </div>
                </AppLink>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#166534]">
                <Globe className="w-4 h-4 text-amber-600" />
                <span>ENTERPRISE SAAS & CRM CONSULTING</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="text-amber-800 font-mono-tabular">
                  MULTI-ORG GOVERNANCE
                </span>
              </div>

              <h1
                className="font-extrabold tracking-tight text-slate-900"
                style={{ fontSize: 'clamp(2.25rem, 3.6vw, 3.25rem)' }}
              >
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {service.heroDescription}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#contact-section"
                  className="btn-primary-gold inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold rounded-xl"
                >
                  <span>Book a SaaS & CRM Architecture Workshop</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <AppLink
                  href="/stories"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-colors"
                >
                  <span>View SaaS Case Studies</span>
                </AppLink>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <VisualAsset
                theme={service.visualTheme}
                title={service.title}
                subtitle="SAAS · CRM & WORKSPACE PLATFORM"
                aspectRatio="16:9"
                className="rounded-2xl ui-double-line-card"
              />
              <div className="grid grid-cols-3 gap-3">
                {service.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl bg-white border border-slate-200/90 p-3.5 text-center shadow-2xs"
                  >
                    <p className="text-lg sm:text-xl font-extrabold text-slate-900 font-mono-tabular">
                      {metric.value}
                    </p>
                    <p className="text-[11px] font-semibold text-slate-600 mt-0.5 line-clamp-1">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREE-COLUMN EXECUTIVE SAAS VALUE BOARD */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
          {/* Column 1: Siloed SaaS Friction */}
          <div className="rounded-2xl bg-white border border-slate-200/90 p-7 space-y-4 shadow-2xs">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
              01 · Disconnected SaaS Silos
            </p>
            <h2 className="text-xl font-extrabold text-slate-900">
              {service.problemStatement.headline}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {service.problemStatement.description}
            </p>
            <ul className="space-y-2.5 pt-3 border-t border-slate-100">
              {service.problemStatement.painPoints.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <span className="font-mono-tabular font-bold text-amber-700">0{idx + 1}.</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Unified SaaS Architecture */}
          <div className="rounded-2xl bg-white border border-slate-200/90 p-7 space-y-4 shadow-2xs">
            <p className="text-xs font-bold uppercase tracking-wider text-[#166534]">
              02 · Unified Multi-Org Architecture
            </p>
            <h2 className="text-xl font-extrabold text-slate-900">
              {service.solutionStatement.headline}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {service.solutionStatement.description}
            </p>
            <ul className="space-y-2.5 pt-3 border-t border-slate-100">
              {service.solutionStatement.outcomes.map((out, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-900 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#166534] shrink-0 mt-0.5" />
                  <span>{out}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Certified Ecosystem & Modules */}
          <div className="rounded-2xl bg-white border border-slate-200/90 p-7 flex flex-col justify-between space-y-6 shadow-2xs">
            <div className="space-y-3">
              <p className="text-xs font-mono-tabular uppercase tracking-wider text-amber-700 font-bold">
                03 · Certified SaaS Ecosystem
              </p>
              <h2 className="text-xl font-extrabold text-slate-900">
                Modules, APIs & Governance
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                End-to-end configuration, custom automation, SSO federation, and data sync across your enterprise stack.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-4">
              <p className="text-xs font-mono-tabular text-[#166534] font-bold">
                24/7 GLOBAL SAAS MAINTENANCE SLA
              </p>
              <p className="text-xs text-slate-600 mt-1">
                Dedicated administrators and certified solution architects across US & India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMMERCIAL IMPACT STRIPS & 4-PHASE ROLLOUT PLAYBOOK */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Commercial Velocity & Productivity Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {service.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/90 p-6 flex items-start gap-4 shadow-2xs"
              >
                <span className="w-11 h-11 rounded-xl bg-[#f5c400] text-slate-950 font-mono-tabular font-extrabold text-sm flex items-center justify-center shrink-0">
                  0{idx + 1}
                </span>
                <div className="space-y-1">
                  <h3 className="text-lg font-extrabold text-slate-900">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {service.processSteps.map((step) => (
            <div
              key={step.stepNumber}
              className="rounded-2xl bg-white border border-slate-200/90 p-6 space-y-3 shadow-2xs"
            >
              <div className="flex items-center justify-between text-xs font-mono-tabular">
                <span className="font-extrabold text-[#166534] uppercase">
                  {step.phase}
                </span>
                <span className="text-amber-700 font-bold">
                  PHASE {step.stepNumber}
                </span>
              </div>
              <h3 className="text-base font-extrabold text-slate-900">
                {step.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {step.description}
              </p>
              <p className="text-xs font-bold text-slate-900 pt-2 border-t border-slate-100">
                {step.deliverable}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

/* ============================================================================
   MAIN SERVICE DETAIL PAGE ROUTER
   Dispatches to one of the 5 distinct Service Pillar page designs based on slug
   ============================================================================ */
export const ServiceDetailPage: React.FC<{ slug: string }> = ({ slug }) => {
  const pageRef = useRef<HTMLDivElement>(null);
  useGsapPageAnimations(pageRef, [slug]);

  const service = getServiceBySlug(slug);
  const context = getServiceCategoryContext(slug);

  return (
    <div ref={pageRef} className="pt-18 space-y-16 bg-white">
      {context.designType === 'cloud' && (
        <CloudPillarLayout service={service} context={context} />
      )}
      {context.designType === 'security' && (
        <SecurityPillarLayout service={service} context={context} />
      )}
      {context.designType === 'digitalization' && (
        <DigitalizationPillarLayout service={service} context={context} />
      )}
      {context.designType === 'it-services' && (
        <ItServicesPillarLayout service={service} context={context} />
      )}
      {context.designType === 'saas' && (
        <SaasPillarLayout service={service} context={context} />
      )}

      <ContactSection titleOverride={`Start Your ${service.title} Initiative With`} />
    </div>
  );
};
