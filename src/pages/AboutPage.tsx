import React, { useRef, useState } from 'react';
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  ArrowRight,
  Target,
  Eye,
  HeartHandshake,
  History,
  Compass,
  Cloud,
  ClipboardCheck,
  Layers,
  Code2,
  Workflow,
  Server,
  FileCheck2,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';
import { AppLink } from '../context/RouterContext';
import { VisualAsset } from '../components/VisualAsset';
import { ContactSection } from '../components/ContactSection';
import { PartnersSection } from '../components/PartnersSection';
import { RotatingText } from '../components/RotatingText';
import { useGsapPageAnimations } from '../hooks/useGsapAnimations';

interface ServiceMapItem {
  step: string;
  title: string;
  phaseId: 'strategy' | 'engineering' | 'security';
  phaseLabel: string;
  categoryTag: string;
  description: string;
  slug: string;
  deliverables: string[];
  metricValue: string;
  metricLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  featuredSpan?: boolean;
}

const SERVICE_MAP_PHASES = [
  {
    id: 'all' as const,
    label: 'All 09 Pillars',
    subtitle: 'Complete End-to-End Service Map',
  },
  {
    id: 'strategy' as const,
    label: '01–03 · Strategy, Cloud & QA',
    subtitle: 'Assessment, Cloud & Quality Engineering',
  },
  {
    id: 'engineering' as const,
    label: '04–06 · SaaS & Digitalization',
    subtitle: 'CRM, Custom Software & Business Portals',
  },
  {
    id: 'security' as const,
    label: '07–09 · Infra, Compliance & Cyber',
    subtitle: 'Resilient Infrastructure, ISO & Cyber Defense',
  },
];

const SERVICE_MAP_ITEMS: ServiceMapItem[] = [
  {
    step: '01',
    title: 'IT Consulting',
    phaseId: 'strategy',
    phaseLabel: 'Phase 01 · Advisory & Modernization',
    categoryTag: 'Architecture & Strategy',
    description:
      'In-depth analysis of IT needs and dynamic assistance in achieving IT modernization and infrastructure optimization, data management, and digital transformation of your business.',
    slug: 'it-consulting-service',
    deliverables: ['IT Landscape Audit', 'Modernization Roadmap', 'Data & TCO Optimization'],
    metricValue: '40%',
    metricLabel: 'Faster Modernization Cycles',
    icon: Compass,
  },
  {
    step: '02',
    title: 'Cloud Services',
    phaseId: 'strategy',
    phaseLabel: 'Phase 01 · Advisory & Modernization',
    categoryTag: 'AWS · Azure · Hybrid Cloud',
    description:
      'Experience innovative cloud solutions and take advantage of new business opportunities.',
    slug: 'cloud-consultancy',
    deliverables: ['Zero-Downtime Migration', 'Multi-Cloud Architecture', 'Cloud FinOps & Cost Control'],
    metricValue: '-35%',
    metricLabel: 'Average Cloud TCO Reduction',
    icon: Cloud,
  },
  {
    step: '03',
    title: 'Quality Assurance',
    phaseId: 'strategy',
    phaseLabel: 'Phase 01 · Advisory & Modernization',
    categoryTag: 'Automated & Security Testing',
    description:
      'Certified test engineers for functional, integration, performance, usability, & security testing of your apps, desktop, SaaS apps, etc accompanied by state-of-the-art technology.',
    slug: 'security-assessment',
    deliverables: ['Functional & Regression Suites', 'Load & Stress Benchmarking', 'AppSec & Vulnerability QA'],
    metricValue: '99.8%',
    metricLabel: 'Defect-Free Release Rate',
    icon: ClipboardCheck,
    featuredSpan: true,
  },
  {
    step: '04',
    title: 'SaaS',
    phaseId: 'engineering',
    phaseLabel: 'Phase 02 · Engineering & Platforms',
    categoryTag: 'Salesforce · G-Suite · M365',
    description:
      'SaaS-based platform based around CRM to help you obtain business intelligence and efficiency.',
    slug: 'salesforce-consulting',
    deliverables: ['Salesforce CRM Customization', 'Workspace & M365 Governance', 'BI & Workflow Automation'],
    metricValue: '3.2x',
    metricLabel: 'CRM Adoption & Pipeline Velocity',
    icon: Layers,
  },
  {
    step: '05',
    title: 'Software Development',
    phaseId: 'engineering',
    phaseLabel: 'Phase 02 · Engineering & Platforms',
    categoryTag: 'Custom Enterprise Engineering',
    description:
      'Development and support of your applications, SaaS product development, etc.',
    slug: 'enterprise-web-application-development',
    deliverables: ['Cloud-Native Web & Mobile Apps', 'Multi-Tenant SaaS Products', 'API & Legacy Integration'],
    metricValue: '750+',
    metricLabel: 'Enterprise Projects Delivered',
    icon: Code2,
  },
  {
    step: '06',
    title: 'Digitalization Services',
    phaseId: 'engineering',
    phaseLabel: 'Phase 02 · Engineering & Platforms',
    categoryTag: 'Portals & Process Automation',
    description:
      'Management, modernization, and support of business applications for reduced cost and increased profitability.',
    slug: 'web-portal-development',
    deliverables: ['B2B/B2C Web Portals', 'E-Commerce & eLearning Suites', 'End-to-End Process Digitization'],
    metricValue: '99%',
    metricLabel: 'Client Satisfaction Score',
    icon: Workflow,
    featuredSpan: true,
  },
  {
    step: '07',
    title: 'IT Infrastructure',
    phaseId: 'security',
    phaseLabel: 'Phase 03 · Infrastructure & Governance',
    categoryTag: '24/7 NOC · Hybrid Ops',
    description:
      'IT infrastructure optimization for reduced spending, reliability and operational improvements.',
    slug: 'it-infrastructure-services-solutions',
    deliverables: ['Server & Network Hardening', '24/7 Proactive Monitoring', 'Backup & Disaster Recovery'],
    metricValue: '99.99%',
    metricLabel: 'Infrastructure Uptime SLA',
    icon: Server,
  },
  {
    step: '08',
    title: 'Compliance Consulting',
    phaseId: 'security',
    phaseLabel: 'Phase 03 · Infrastructure & Governance',
    categoryTag: 'ISO 27001 · 27701 · 22301 · ITGC',
    description:
      'Compliance and Regulatory consulting services with end-to-end approach to secure and mitigate businesses risks.',
    slug: 'iso-27001-isms',
    deliverables: ['ISO/IEC Gap & Risk Assessment', 'Policy & ISMS Implementation', 'Internal & External Audit Prep'],
    metricValue: '100%',
    metricLabel: 'First-Attempt Audit Pass Rate',
    icon: FileCheck2,
  },
  {
    step: '09',
    title: 'Cyber Security Consulting',
    phaseId: 'security',
    phaseLabel: 'Phase 03 · Infrastructure & Governance',
    categoryTag: 'Zero-Trust · Cloud Security · SOC',
    description:
      'Transform your business with industry-leading cyber security consulting and cloud security services.',
    slug: 'cloud-security',
    deliverables: ['Zero-Trust & IAM Architecture', 'VAPT & Threat Remediation', 'Managed Security Operations'],
    metricValue: '< 10 min',
    metricLabel: 'Incident Response SLA',
    icon: ShieldAlert,
    featuredSpan: true,
  },
];

const WHY_CHOOSE_US_ITEMS = [
  'Advanced Approach',
  'Certified Professionals',
  'Reliable Service Delivery',
  'Cost Optimization',
  'Increased Business Productivity',
  'Client-Centric Decisions',
  'State-of-the-art Technology',
  'Certifications & Compliances',
  'Transparency and Professional Ethics',
];

const SOLUTIONS_WE_OFFER = [
  { label: 'E-commerce Portal', slug: 'e-commerce-portal' },
  { label: 'Survey Portal', slug: 'survey-portal' },
  { label: 'E-learning Portal', slug: 'elearning-portal' },
  { label: 'Job Portal', slug: 'job-portal' },
  { label: 'Contest Management Portal', slug: 'contest-management-portal' },
  { label: 'Cloud Migration Support', slug: 'cloud-migration' },
  { label: 'Cloud Security', slug: 'cloud-security' },
  { label: 'IT Managed Services', slug: 'it-managed-service' },
  { label: 'Managed Security Services', slug: 'managed-security-services' },
  { label: 'Backup and Disaster Recovery', slug: 'backup-and-disaster-recovery' },
  { label: 'Salesforce Support', slug: 'salesforce-consulting' },
  { label: 'G-suite', slug: 'g-suite' },
  { label: 'Microsoft Office 365', slug: 'microsoft-solutions' },
  { label: 'ISO27001 Consulting', slug: 'iso-27001-isms' },
  { label: 'ISO 27701 Consulting', slug: 'iso-27701-pims' },
  { label: 'Business Continuity Management', slug: 'iso-22301-bcms' },
];

export const AboutPage: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  useGsapPageAnimations(pageRef);

  const [activePhase, setActivePhase] = useState<'all' | 'strategy' | 'engineering' | 'security'>('all');
  const [selectedStep, setSelectedStep] = useState<string>('01');

  const filteredServiceMap =
    activePhase === 'all'
      ? SERVICE_MAP_ITEMS
      : SERVICE_MAP_ITEMS.filter((item) => item.phaseId === activePhase);

  const activeServiceItem =
    SERVICE_MAP_ITEMS.find((item) => item.step === selectedStep) || SERVICE_MAP_ITEMS[0];
  const ActivePreviewIcon = activeServiceItem.icon;

  return (
    <div ref={pageRef} className="pt-18 space-y-16 bg-white">
      {/* 1. OFFICIAL ABOUT US HERO WITH SWEEPING CURVED ARCH */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f0fdf4] via-white to-[#fffbeb]/35 pt-16 pb-10 lg:pt-20 lg:pb-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-12 w-96 h-96 rounded-full bg-[#166534]/12 blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <nav aria-label="Breadcrumb" className="gsap-hero-item flex items-center gap-2 text-xs text-slate-500">
              <AppLink href="/" className="hover:text-[#166534] transition-colors">
                Home
              </AppLink>
              <span aria-hidden="true">/</span>
              <span className="text-[#166534] font-bold">About Us</span>
            </nav>

            <h1
              className="gsap-hero-item font-extrabold tracking-tight text-slate-900"
              style={{ fontSize: 'clamp(2.25rem, 3.6vw, 3.25rem)' }}
            >
              Accelerating technical{' '}
              <RotatingText
                phrases={[
                  'success of your business',
                  'Cloud Migration & Security',
                  'SaaS & Digitalization',
                  'IT Infrastructure Excellence',
                ]}
                className="inline-block text-amber-700"
              />
            </h1>

            <p className="gsap-hero-item text-base sm:text-lg text-slate-600 leading-relaxed">
              Vorombetech Solutions is a prominent IT consulting company helping organizations achieve digital transformation with a plethora of services — Cloud Migration, Cloud Security, SaaS, IT Infrastructure, Digitalization, etc. We are inspired by how innovators and market leaders strive to rise above the ordinary — making their businesses simpler, smarter, cost-effective, and more efficient.
            </p>

            <p className="gsap-hero-item text-sm sm:text-base text-slate-600 leading-relaxed">
              Since our inception, we have successfully delivered high-quality and strategic business solutions to prominent global organizations. Our dedicated team of certified experts is creating benchmarks by delivering customer-centric and technology-driven services that span across industries.
            </p>
          </div>

          <div className="lg:col-span-5 gsap-hero-showcase">
            <VisualAsset
              theme="transformation"
              title="Accelerating Technical Success of Your Business"
              subtitle="750+ Projects · 250+ Global Clients · 99% Satisfaction"
              size="medium"
              className="rounded-2xl ui-double-line-card"
            />
          </div>
        </div>

        {/* Smooth GSAP-Animated Sweeping Parabolic Curve Transition */}
        <div aria-hidden="true" className="gsap-wave-arc w-full overflow-hidden leading-none pt-10 -mb-10">
          <svg
            viewBox="0 0 1440 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-10 sm:h-16 block"
            preserveAspectRatio="none"
          >
            <path d="M0 12 Q720 72 1440 12 L1440 72 L0 72 Z" fill="#ffffff" />
            <path
              d="M0 12 Q720 72 1440 12"
              stroke="#166534"
              strokeWidth="2"
              strokeOpacity="0.3"
              fill="none"
            />
          </svg>
        </div>
      </section>

      {/* 2. WORK PROCESS — OUR SERVICE MAP (Interactive Split Architectural Roadmap) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-b from-[#f8fafc] via-white to-[#fffbeb]/40 border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-xs space-y-10">
          {/* Top Header + Interactive Phase Filter Bar */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-200/80">
            <div className="max-w-2xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-amber-700">
                <Sparkles className="w-3.5 h-3.5" />
                <span>WORK PROCESS</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="text-slate-600 font-mono-tabular">09 CORE CAPABILITIES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                OUR SERVICE MAP
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Begin your Digital Transformation today with our end-to-end IT consulting, cloud, compliance, and software engineering services.
              </p>
            </div>

            {/* Phase Filter Tabs */}
            <div
              role="tablist"
              aria-label="Filter Service Map by transformation phase"
              className="flex flex-wrap gap-2 bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200/80 self-start lg:self-auto"
            >
              {SERVICE_MAP_PHASES.map((phase) => {
                const isActive = activePhase === phase.id;
                return (
                  <button
                    key={phase.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => {
                      setActivePhase(phase.id);
                      const firstInPhase =
                        phase.id === 'all'
                          ? SERVICE_MAP_ITEMS[0]
                          : SERVICE_MAP_ITEMS.find((i) => i.phaseId === phase.id);
                      if (firstInPhase) setSelectedStep(firstInPhase.step);
                    }}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#f5c400] text-slate-950 shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/70'
                    }`}
                  >
                    {phase.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main 12-Column Split Architecture: Left Sticky Inspector + Right Staggered Bento Roadmap */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* LEFT COLUMN: Sticky Interactive Service Blueprint Inspector */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-5">
              <div className="rounded-2xl bg-slate-900 text-white p-6 sm:p-7 space-y-6 border border-slate-800 shadow-lg relative overflow-hidden">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-20 -right-20 w-52 h-52 rounded-full bg-[#f5c400]/15 blur-3xl"
                />

                <div className="flex items-center justify-between gap-3 border-b border-slate-800 pb-4">
                  <div className="text-xs font-mono-tabular text-amber-400 font-bold tracking-wider uppercase">
                    STEP {activeServiceItem.step} OF 09 · ACTIVE NODE
                  </div>
                  <span className="text-[11px] font-mono-tabular text-slate-400">
                    {activeServiceItem.categoryTag}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#f5c400] text-slate-950 flex items-center justify-center shadow-sm">
                    <ActivePreviewIcon className="w-6 h-6" />
                  </div>
                  <p className="text-xs font-semibold text-slate-400">
                    {activeServiceItem.phaseLabel}
                  </p>
                  <h3 className="text-2xl font-extrabold text-white tracking-tight">
                    {activeServiceItem.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {activeServiceItem.description}
                  </p>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-slate-800/90">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Key Deliverables & Scope
                  </p>
                  <div className="space-y-2">
                    {activeServiceItem.deliverables.map((deliv) => (
                      <div key={deliv} className="flex items-center gap-2.5 text-xs text-slate-200 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#f5c400] shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl bg-slate-800/90 border border-slate-700/80 p-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-2xl font-extrabold text-[#f5c400] font-mono-tabular">
                      {activeServiceItem.metricValue}
                    </p>
                    <p className="text-xs text-slate-300 mt-0.5">
                      {activeServiceItem.metricLabel}
                    </p>
                  </div>
                  <AppLink
                    href={`/services/${activeServiceItem.slug}`}
                    className="btn-primary-gold inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold shrink-0"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </AppLink>
                </div>

                {/* Quick Step Jumper Strip */}
                <div className="pt-1 space-y-2">
                  <p className="text-[11px] text-slate-400 font-medium">
                    Select any step to inspect blueprint:
                  </p>
                  <div className="grid grid-cols-9 gap-1.5">
                    {SERVICE_MAP_ITEMS.map((node) => {
                      const isSelected = node.step === activeServiceItem.step;
                      return (
                        <button
                          key={node.step}
                          type="button"
                          onClick={() => setSelectedStep(node.step)}
                          title={`${node.step}. ${node.title}`}
                          className={`py-1.5 rounded-lg text-[11px] font-mono-tabular font-bold transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#f5c400] text-slate-950'
                              : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                          }`}
                        >
                          {node.step}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Staggered Bento Service Map Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredServiceMap.map((item) => {
                const IconComponent = item.icon;
                const isSelected = item.step === activeServiceItem.step;
                const spanFull = item.featuredSpan && activePhase === 'all';

                return (
                  <div
                    key={item.title}
                    onMouseEnter={() => setSelectedStep(item.step)}
                    onClick={() => setSelectedStep(item.step)}
                    className={`group relative rounded-2xl bg-white border transition-all duration-200 flex flex-col justify-between overflow-hidden cursor-pointer ${
                      spanFull ? 'md:col-span-2' : ''
                    } ${
                      isSelected
                        ? 'border-amber-400 shadow-md ring-1 ring-amber-300/60'
                        : 'border-slate-200/90 shadow-2xs hover:border-amber-300 hover:shadow-sm'
                    }`}
                  >
                    {/* Top Subtle Accent Bar */}
                    <div
                      className={`h-1 w-full transition-colors ${
                        isSelected
                          ? 'bg-gradient-to-r from-[#f5c400] via-amber-500 to-[#166534]'
                          : 'bg-slate-100 group-hover:bg-amber-300'
                      }`}
                    />

                    <div className={`p-6 sm:p-7 ${spanFull ? 'grid grid-cols-1 md:grid-cols-12 gap-6 items-center' : 'space-y-4'}`}>
                      <div className={spanFull ? 'md:col-span-7 space-y-3.5' : 'space-y-3.5'}>
                        {/* Step Meta & Icon Row */}
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors shrink-0 ${
                                isSelected
                                  ? 'bg-[#f5c400] text-slate-950 font-bold'
                                  : 'bg-[#fffbeb] border border-amber-200/80 text-amber-900 group-hover:bg-[#f5c400] group-hover:text-slate-950'
                              }`}
                            >
                              <IconComponent className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5 text-xs font-mono-tabular">
                                <span className="font-extrabold text-amber-800">
                                  STEP {item.step}
                                </span>
                                <span aria-hidden="true" className="text-slate-300">·</span>
                                <span className="text-slate-500 font-sans font-semibold">
                                  {item.categoryTag}
                                </span>
                              </div>
                              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-amber-800 transition-colors mt-0.5">
                                {item.title}
                              </h3>
                            </div>
                          </div>

                          <span
                            aria-hidden="true"
                            className="text-2xl sm:text-3xl font-black font-mono-tabular text-slate-200/90 group-hover:text-amber-500/30 transition-colors select-none"
                          >
                            {item.step}
                          </span>
                        </div>

                        <p className="text-sm text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Deliverables Column / Strip */}
                      <div
                        className={
                          spanFull
                            ? 'md:col-span-5 rounded-xl bg-[#f8fafc] border border-slate-200/80 p-4 space-y-2'
                            : 'pt-3 border-t border-slate-100 space-y-1.5'
                        }
                      >
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Core Capabilities
                        </p>
                        <div className="space-y-1.5">
                          {item.deliverables.map((capability) => (
                            <div
                              key={capability}
                              className="flex items-center gap-2 text-xs font-semibold text-slate-700"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                              <span>{capability}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer with Metric & Direct Navigation Link */}
                    <div className="px-6 sm:px-7 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-4 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-mono-tabular font-extrabold text-slate-900">
                          {item.metricValue}
                        </span>
                        <span aria-hidden="true" className="text-slate-300">·</span>
                        <span className="text-slate-600 font-medium">
                          {item.metricLabel}
                        </span>
                      </div>

                      <AppLink
                        href={`/services/${item.slug}`}
                        onClick={(e) => e.stopPropagation()}
                        className="font-bold text-slate-900 hover:text-amber-700 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-all shrink-0"
                      >
                        <span>Explore Service</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </AppLink>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR VISION, OUR MISSION & CORE VALUES (Official Verbatim Text) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="gsap-card-grid grid grid-cols-1 md:grid-cols-3 gap-7">
          <div className="gsap-card rounded-2xl bg-[#fffbeb] border border-amber-200/90 p-7 space-y-4">
            <div className="w-11 h-11 rounded-xl bg-[#f5c400] text-slate-950 flex items-center justify-center">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">Our Vision</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Our vision is to be recognized as a trusted and preferred IT strategic partner for global enterprises.
            </p>
          </div>

          <div className="gsap-card rounded-2xl bg-white border border-slate-200/90 p-7 space-y-4 shadow-xs">
            <div className="w-11 h-11 rounded-xl bg-[#fffbeb] border border-amber-200 text-amber-800 flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">Our Mission</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our mission is to enhance the business growth of our clients with innovative IT solutions by following quality-driven, cost-effective, and client-centric approaches that create value and reliable competitive advantage for clients globally.
            </p>
          </div>

          <div className="gsap-card rounded-2xl bg-white border border-slate-200/90 p-7 space-y-4 shadow-xs">
            <div className="w-11 h-11 rounded-xl bg-[#fffbeb] border border-amber-200 text-amber-800 flex items-center justify-center">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">Core Values</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We stand on strong pillars of transparency and professional ethics and work tirelessly to gain client trust by focussing on their specific needs and delivering exceptional services.
            </p>
          </div>
        </div>
      </section>

      {/* 4. ACHIEVEMENT — INTERACTIVE CONNECTED JOURNEY TIMELINE & WHY CHOOSE US */}
      <section className="relative py-14 bg-gradient-to-b from-white via-[#fffbeb]/35 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Connected Milestone Timeline for "Achievement · Our Journey" */}
          <div className="space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fffbeb] border border-amber-200 text-xs font-bold text-amber-900">
                <History className="w-3.5 h-3.5 text-amber-700" />
                <span>Achievement · Our Journey</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                From 2016 Inception to 200+ Global Enterprise Clients
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Our company is united by the aim of delivering technology-based and customer-centric business solutions across global ecosystems.
              </p>
            </div>

            <div className="gsap-flow-container relative pt-4">
              {/* Animated Horizontal GSAP Progress Line on Desktop */}
              <div
                aria-hidden="true"
                className="hidden lg:block absolute top-11 left-[14%] right-[14%] h-1 bg-amber-200/70 rounded-full overflow-hidden"
              >
                <div className="gsap-flow-line h-full w-full bg-gradient-to-r from-[#f5c400] via-amber-500 to-[#166534]" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                <div className="gsap-flow-node flex flex-col items-start lg:items-center lg:text-center space-y-3.5">
                  <div className="px-5 py-3 rounded-full bg-[#f5c400] text-slate-950 font-mono-tabular font-extrabold text-sm shadow-md ring-4 ring-amber-100">
                    2016 – 2019
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900">
                    Inception & Strategic Evolution
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Our journey began in <strong className="text-slate-900">2016</strong> when we started RITX. In <strong className="text-slate-900">2018</strong>, we created a strategic partnership with Vorom Techno Solutions, and started <strong className="text-slate-900">Vorom Tech Solutions in 2019</strong>.
                  </p>
                </div>

                <div className="gsap-flow-node flex flex-col items-start lg:items-center lg:text-center space-y-3.5">
                  <div className="px-5 py-3 rounded-full bg-white border-2 border-[#f5c400] text-slate-950 font-mono-tabular font-extrabold text-sm shadow-md">
                    2021 ISO Certified
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900">
                    Global Ecosystem Partnerships
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Throughout our journey, we have partnered with global clients and ecosystems like <strong className="text-slate-900">Microsoft, AWS, Google Cloud, Fortinet, Digicert, and Veritas</strong>. As a result of our achievements, we acquired an <strong className="text-slate-900">ISO certification in the year 2021</strong>.
                  </p>
                </div>

                <div className="gsap-flow-node flex flex-col items-start lg:items-center lg:text-center space-y-3.5">
                  <div className="px-5 py-3 rounded-full bg-[#166534] text-white font-mono-tabular font-extrabold text-sm shadow-md ring-4 ring-emerald-100">
                    200+ Global Clients
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900">
                    Premier Global IT Partner
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Today, we stand as a premier IT consulting company with more than <strong className="text-slate-900">200 global clients</strong>. Our company is united by the aim of delivering technology-based and customer-centric business solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us — Flowing Pill Stream */}
          <div className="gsap-open-row pt-10 border-t border-amber-200/70 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-800">
                <Award className="w-4 h-4 text-amber-600" />
                <span>WHY CHOOSE US?</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                What makes us a global choice?
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every engagement is governed by strict ISO compliance, certified cloud and security architects, and transparent SLAs.
              </p>
            </div>

            <div className="lg:col-span-8 flex flex-wrap gap-3">
              {WHY_CHOOSE_US_ITEMS.map((item, idx) => (
                <div
                  key={item}
                  className="gsap-stat-item inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-white border border-amber-200/90 shadow-2xs hover:border-[#f5c400] transition-all"
                >
                  <span className="w-6 h-6 rounded-full bg-[#fffbeb] text-amber-900 font-mono-tabular text-[11px] font-extrabold flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    {item}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#166534] shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OFFICIAL TECHNOLOGY & ECOSYSTEM PARTNERS */}
      <PartnersSection />

      {/* 5. SOLUTIONS WE OFFER (Interactive Pill Cloud with Curved Top Accent) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-b from-[#fffbeb]/60 via-white to-white border border-amber-200/80 p-7 sm:p-10 space-y-8 overflow-hidden shadow-2xs">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
                WHY CHOOSE US?
              </p>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
                SOLUTIONS WE OFFER
              </h3>
            </div>
            <AppLink
              href="/services"
              className="btn-primary-gold inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold"
            >
              <span>Request a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </AppLink>
          </div>

          <div className="flex flex-wrap gap-3">
            {SOLUTIONS_WE_OFFER.map((sol) => (
              <AppLink
                key={sol.label}
                href={`/services/${sol.slug}`}
                className="gsap-stat-item group inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-white hover:bg-[#f5c400] border border-slate-200/90 hover:border-[#f5c400] shadow-2xs transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-amber-600 group-hover:text-slate-950 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-slate-900">
                  {sol.label}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-950 group-hover:translate-x-0.5 transition-all shrink-0" />
              </AppLink>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};
