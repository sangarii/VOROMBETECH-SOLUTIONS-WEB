import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Clock,
} from 'lucide-react';
import { AppLink, useRouter } from '../context/RouterContext';
import { COMPANY_INFO } from '../data/servicesData';
import { SUCCESS_STORIES_DATA } from '../data/storiesData';
import { BLOG_POSTS_DATA } from '../data/blogData';
import { ServiceIcon } from '../components/ServiceIcon';
import { VisualAsset } from '../components/VisualAsset';
import { ContactSection } from '../components/ContactSection';
import { FaqSection } from '../components/FaqSection';
import { RotatingText } from '../components/RotatingText';
import { PlatformStatementCurvedSection } from '../components/PlatformStatementCurvedSection';
import { useGsapPageAnimations } from '../hooks/useGsapAnimations';
import { VisualTheme } from '../types';

const OFFICIAL_HERO_SLIDES = [
  {
    id: 'digitalization',
    label: 'Digitalization',
    slug: 'enterprise-web-application-development',
    headline: 'Digital Transformation of your business like never before',
    title: 'Digitalization Services & Custom Portal Engineering',
    theme: 'transformation' as VisualTheme,
    description:
      'Businesses are starting to use digital technology to bypass the limitations of the physical world. Our digital consultants and expert team of engineers transform your ideas into efficient automated processes so your company can reach its full potential.',
    subItems: ['Enterprise Web App Development', 'Web Portal Development', 'UI/UX Design', 'E-commerce Portal', 'Mobile App Development'],
    kpiValue: '750+',
    kpiLabel: 'Projects Delivered',
    secondaryValue: '99%',
    secondaryLabel: 'Client Satisfaction',
  },
  {
    id: 'cloud',
    label: 'Cloud Services',
    slug: 'cloud-consultancy',
    headline: 'Embrace the future of IT with the power of the Cloud',
    title: 'Global Cloud Consultancy, Migration & FinOps',
    theme: 'cloud' as VisualTheme,
    description:
      'As a global cloud consultancy company, we help organizations with the strategic execution of secure and high-performance cloud-based services including Cloud Consulting, Cloud Migration, Cloud Security, Cloud Monitoring, AWS, and Microsoft Azure.',
    subItems: ['Cloud Consultancy', 'Cloud Migration', 'Cloud Security', 'Cloud Monitoring', 'Cloud Cost Optimization', 'AWS', 'Microsoft Azure'],
    kpiValue: '-35%',
    kpiLabel: 'Cloud Cost Optimization',
    secondaryValue: '99.99%',
    secondaryLabel: 'Cloud Infrastructure SLA',
  },
  {
    id: 'saas',
    label: 'SaaS',
    slug: 'salesforce-consulting',
    headline: 'SAAS Solutions that set you apart from your competition',
    title: 'Salesforce, G-Suite & Microsoft Office 365 Consulting',
    theme: 'salesforce' as VisualTheme,
    description:
      'Our company provides SaaS consulting to global organizations to help them optimize IT for their business with the most modern SaaS solutions. We are partnered with Salesforce, G-suite, and Microsoft Office 365 to provide maintenance and support to global applications.',
    subItems: ['Salesforce', 'G-Suite', 'Microsoft Solutions'],
    kpiValue: '250+',
    kpiLabel: 'Global Enterprise Clients',
    secondaryValue: '24/7',
    secondaryLabel: 'Global SaaS Maintenance',
  },
  {
    id: 'it-services',
    label: 'IT Services',
    slug: 'it-consulting-service',
    headline: 'One-Stop Solution for your business IT support',
    title: 'Proactive IT Consulting, Infrastructure & Managed Support',
    theme: 'cloud' as VisualTheme,
    description:
      'We are a proactive team of expert IT support providers working tirelessly to maximize business potential globally. We provide IT Consulting, IT Managed Services, IT Security Services, Backup, and Disaster Recovery.',
    subItems: ['IT Consulting', 'IT Managed Services', 'IT Infrastructure', 'Managed Security Services', 'Backup and Disaster Recovery'],
    kpiValue: '< 10 min',
    kpiLabel: 'Managed Support SLA',
    secondaryValue: '100%',
    secondaryLabel: 'Backup & DR Integrity',
  },
  {
    id: 'security',
    label: 'Info Security',
    slug: 'iso-27001-isms',
    headline: 'Secure. Comply. Trust. Succeed — Information Security Compliance',
    title: 'ISO 27001, ISO 20000, ISO 22301, ISO 27701 & ITGC Compliance',
    theme: 'security' as VisualTheme,
    description:
      'We assist organizations globally in achieving compliance through numerous legislative, regulatory, and industry body compliance frameworks covering Retail, Healthcare, Automation, and Finance.',
    subItems: ['ISO 27001_ISMS', 'ISO 20000_ITSM', 'ISO 22301_BCMS', 'ISO 27701_PIMS', 'ITGC, IT General Control', 'Security Assessment'],
    kpiValue: '100%',
    kpiLabel: 'Compliance Audit Success',
    secondaryValue: 'ISO 2021',
    secondaryLabel: 'Certified Organization',
  },
];

const OFFICIAL_HOME_SERVICES = [
  {
    indexNumber: 'Portal & App Engineering',
    title: 'Digitalization',
    slug: 'enterprise-web-application-development',
    iconName: 'Layers' as const,
    visualTheme: 'transformation' as VisualTheme,
    description:
      'Businesses are starting to use digital technology to bypass the limitations of the physical world. Our digital consultants and expert team of engineers transform your ideas into efficient automated processes so your company can reach its full potential. We implement modern-day technology via our services like mobile app development, portal and website development, e-commerce solutions, loyalty management, etc to a wide range of industries globally.',
    subLinks: [
      { label: 'Enterprise Web App Development', slug: 'enterprise-web-application-development' },
      { label: 'Web Portal Development', slug: 'web-portal-development' },
      { label: 'UI/UX Design', slug: 'ui-ux-design' },
      { label: 'Survey Portal', slug: 'survey-portal' },
      { label: 'E-commerce Portal', slug: 'e-commerce-portal' },
      { label: 'eLearning Portal', slug: 'elearning-portal' },
      { label: 'Job Portal', slug: 'job-portal' },
      { label: 'Contest Management Portal', slug: 'contest-management-portal' },
      { label: 'Mobile App Development', slug: 'mobile-app-development' },
    ],
  },
  {
    indexNumber: 'AWS, Azure & Cloud FinOps',
    title: 'Cloud Services',
    slug: 'cloud-consultancy',
    iconName: 'Cloud' as const,
    visualTheme: 'cloud' as VisualTheme,
    description:
      'As a global cloud consultancy company, we help organizations with the strategic execution of secure and high-performance cloud-based services. Our bespoke cloud services like cloud consulting, cloud infrastructure management, cloud deployment, and migration services, cloud security, cloud monitoring, AWS, Azure, etc help organizations fuel innovation, agility, and responsiveness whilst built-in security.',
    subLinks: [
      { label: 'Cloud Consultancy', slug: 'cloud-consultancy' },
      { label: 'Cloud Migration', slug: 'cloud-migration' },
      { label: 'Cloud Security', slug: 'cloud-security' },
      { label: 'Cloud Monitoring', slug: 'cloud-monitoring' },
      { label: 'Cloud Cost Optimization', slug: 'cloud-cost-optimization' },
      { label: 'AWS', slug: 'aws' },
      { label: 'Microsoft Azure', slug: 'microsoft-azure' },
    ],
  },
  {
    indexNumber: 'Managed IT & Infrastructure',
    title: 'IT Services',
    slug: 'it-consulting-service',
    iconName: 'Server' as const,
    visualTheme: 'cloud' as VisualTheme,
    description:
      'We are a proactive team of expert IT support providers working tirelessly to maximize business potential globally. From assessing the current state of your IT environment and complexities, app integrations to advancing the utilization of data resources for informed decision-making, our wide range of IT services helps businesses gain maximum efficiency and utilization of technological capabilities.',
    subLinks: [
      { label: 'IT Consulting Service', slug: 'it-consulting-service' },
      { label: 'IT Managed Services', slug: 'it-managed-service' },
      { label: 'IT Infrastructure Services & Solutions', slug: 'it-infrastructure-services-solutions' },
      { label: 'Managed Security Services', slug: 'managed-security-services' },
      { label: 'Backup and Disaster Recovery', slug: 'backup-and-disaster-recovery' },
    ],
  },
  {
    indexNumber: 'Salesforce, G-Suite & Microsoft',
    title: 'SaaS',
    slug: 'salesforce-consulting',
    iconName: 'Cloud' as const,
    visualTheme: 'salesforce' as VisualTheme,
    description:
      'Our company provides SaaS consulting to global organizations to help them optimize IT for their business with the most modern SaaS solutions. From ideation to implementation, our expert consultants guide you to maximize your SaaS capabilities to enhance user experience. We are partnered with Salesforce, G-suite, and Microsoft Office 365 to provide maintenance and support to global applications.',
    subLinks: [
      { label: 'Salesforce', slug: 'salesforce-consulting' },
      { label: 'G-suite', slug: 'g-suite' },
      { label: 'Microsoft Solutions', slug: 'microsoft-solutions' },
    ],
  },
  {
    indexNumber: 'ISO Compliance & Security',
    title: 'Information Security',
    slug: 'iso-27001-isms',
    iconName: 'ShieldCheck' as const,
    visualTheme: 'security' as VisualTheme,
    description:
      'We assist organizations globally in achieving compliance through numerous legislative, regulatory, and industry body compliance frameworks - covering a wide range of industries like Retail, Healthcare, Automation, Finance, etc. ISO 27001, ISO 22301, PCI DSS, IT Act (India), Data Protection, GDPR, IRDAI, Cyber Security Framework, and ISNP Compliance are among our compliance services.',
    subLinks: [
      { label: 'ISO 27001_ISMS', slug: 'iso-27001-isms' },
      { label: 'ISO 20000_ITSM', slug: 'iso-20000-itsm' },
      { label: 'ISO 22301_BCMS', slug: 'iso-22301-bcms' },
      { label: 'ISO 27701_PIMS', slug: 'iso-27701-pims' },
      { label: 'ITGC, IT General Control', slug: 'it-general-control-itgc' },
      { label: 'Security Assessment', slug: 'security-assessment' },
    ],
  },
  {
    indexNumber: 'CRM & API Integration',
    title: 'Salesforce Integration & CRM',
    slug: 'salesforce-consulting',
    iconName: 'BarChart3' as const,
    visualTheme: 'crm' as VisualTheme,
    description:
      'We believe in developing technology solutions with strong expertise in platforms encompassing CRM, Salesforce Integration and customization, REST & SOAP API connectivity, Sales Cloud, Service Cloud, Marketing Cloud, and Agentforce Contact Center.',
    subLinks: [
      { label: 'Salesforce Consulting Services', slug: 'salesforce-consulting' },
      { label: 'Salesforce Integration & REST API', slug: 'salesforce-consulting' },
      { label: 'Salesforce Implementation & Support', slug: 'salesforce-consulting' },
    ],
  },
];

const OFFICIAL_WORK_PROCESS = [
  {
    step: '01',
    phase: 'Discovery & Selection',
    title: 'Choose Your Services',
    description:
      'Select from our end-to-end portfolio across Digitalization, Cloud Services, IT Services, SaaS, and Information Security.',
    highlight: '29+ Enterprise Offerings',
  },
  {
    step: '02',
    phase: 'Architect Alignment',
    title: 'Request Meeting',
    description:
      'Connect with our certified consultants in the US (+1 415 7040681) or India (+91 7303933635) to discuss your business objectives.',
    highlight: 'US & India Delivery Desks',
  },
  {
    step: '03',
    phase: 'Blueprint & FinOps',
    title: 'Receive Custom Plans',
    description:
      'Get a tailored architecture roadmap, compliance framework, and cost-effective execution plan designed around your goals.',
    highlight: 'Tailored SLA & ROI Roadmap',
  },
  {
    step: '04',
    phase: 'Execution & Support',
    title: 'Let’s Make It Happen',
    description:
      'Our dedicated engineering and compliance experts execute, monitor, and support your solution with 99% client satisfaction.',
    highlight: '99% Client Satisfaction',
  },
];

const OFFICIAL_WHY_CHOOSE_US = [
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

const HERO_ROTATING_PHRASES = [
  'Digital Transformation of your business like never before',
  'Embrace the future of IT with the power of the Cloud',
  'SAAS Solutions that set you apart from your competition',
  'One-Stop Solution for your business IT support',
  'Secure. Comply. Trust. Succeed',
];

const SERVICES_ROTATING_LABELS = [
  'Digitalization Services',
  'Cloud Services (AWS & Azure)',
  'IT Services & Managed Support',
  'SaaS (Salesforce, G-Suite, Microsoft)',
  'Information Security & ISO Compliance',
];

export const HomePage: React.FC = () => {
  const { navigate } = useRouter();
  const [heroEmail, setHeroEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [activeBlueprintIdx, setActiveBlueprintIdx] = useState(0);
  const [consolePaused, setConsolePaused] = useState(false);
  const [activeProcessStep, setActiveProcessStep] = useState(0);

  const pageRef = useRef<HTMLDivElement>(null);
  const consoleCardRef = useRef<HTMLDivElement>(null);
  const consoleProgressRef = useRef<HTMLDivElement>(null);

  // Page-wide GSAP entrance, scroll-triggered reveals, curved SVG waves, and connected timeline flows
  useGsapPageAnimations(pageRef);

  // Animate numeric KPI values smoothly on initial load
  useEffect(() => {
    const el = pageRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const counters = gsap.utils.toArray<HTMLElement>('.gsap-counter');
      counters.forEach((counterEl) => {
        const target = Number(counterEl.dataset.target || '0');
        const prefix = counterEl.dataset.prefix || '';
        const suffix = counterEl.dataset.suffix || '';
        const state = { val: 0 };
        gsap.to(state, {
          val: target,
          duration: 1.4,
          delay: 0.25,
          ease: 'power2.out',
          onUpdate: () => {
            counterEl.textContent = `${prefix}${Math.round(state.val)}${suffix}`;
          },
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  // Auto-advance Hero Interactive Practice Console with GSAP progress bar
  useEffect(() => {
    const bar = consoleProgressRef.current;
    if (!bar) return;

    gsap.killTweensOf(bar);

    if (consolePaused) {
      gsap.to(bar, { width: '100%', duration: 0.2 });
      return;
    }

    const tween = gsap.fromTo(
      bar,
      { width: '0%' },
      {
        width: '100%',
        duration: 4.5,
        ease: 'none',
        onComplete: () => {
          setActiveBlueprintIdx((prev) => (prev + 1) % OFFICIAL_HERO_SLIDES.length);
        },
      }
    );

    return () => {
      tween.kill();
    };
  }, [activeBlueprintIdx, consolePaused]);

  // Rich GSAP transition when switching Hero Console tabs
  useEffect(() => {
    const card = consoleCardRef.current;
    if (!card) return;

    const kpiItems = card.querySelectorAll('.gsap-console-kpi');

    gsap.fromTo(
      card,
      { autoAlpha: 0.35, y: 12, scale: 0.98 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.42,
        ease: 'power3.out',
      }
    );

    if (kpiItems.length > 0) {
      gsap.fromTo(
        kpiItems,
        { autoAlpha: 0, y: 8 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.35,
          stagger: 0.07,
          delay: 0.08,
          ease: 'power2.out',
        }
      );
    }
  }, [activeBlueprintIdx]);

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroEmail.trim()) {
      navigate('/contact');
      return;
    }
    setEmailSubmitted(true);
  };

  const activeBlueprint = OFFICIAL_HERO_SLIDES[activeBlueprintIdx];
  const latestPosts = BLOG_POSTS_DATA.slice(0, 3);
  const featuredStories = SUCCESS_STORIES_DATA.slice(0, 4);

  return (
    <div ref={pageRef} className="pt-18 bg-white">
      {/* 1. OFFICIAL VOROMBETECH HERO SECTION WITH CURVED ARCH TRANSITION */}
      <section className="relative bg-gradient-to-b from-[#fffbeb]/50 via-white to-[#f0fdf4]/35 pt-14 pb-10 lg:pt-20 lg:pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Official Hero Headlines & Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="gsap-hero-item inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fffbeb] border border-amber-200/90 text-xs font-semibold text-amber-900">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f5c400]" />
                <span>{COMPANY_INFO.name}</span>
                <span aria-hidden="true" className="text-amber-300">·</span>
                <span className="text-slate-600">We Offer End-to-End IT Solutions</span>
              </div>

              <h1
                className="gsap-hero-item font-extrabold tracking-tight text-slate-900 leading-[1.15]"
                style={{ fontSize: 'clamp(2.2rem, 3.9vw, 3.5rem)' }}
              >
                <RotatingText
                  phrases={HERO_ROTATING_PHRASES}
                  className="inline-block text-slate-900"
                />
              </h1>

              <p className="gsap-hero-item text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Vorombetech Solutions is an IT Consulting Firm. It is an innovative organization that empowers businesses to provide rich & seamless experiences resulting in high operational excellence and efficiency. We believe in developing technology solutions with strong expertise in platforms encompassing CRM, Salesforce Integration and customization, Web Development, Digital Services, IT Infrastructure Support, Managed IT Services and Cyber Security to provide the best experience to our customers.
              </p>

              {/* Signature White Input Bar with Embedded Golden Yellow "Start Now" Button */}
              <div className="gsap-hero-item pt-1 space-y-4">
                {emailSubmitted ? (
                  <div className="inline-flex items-center gap-3 bg-[#fffbeb] border border-amber-300 rounded-xl px-5 py-3.5 text-sm text-slate-900">
                    <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
                    <span>
                      Consultation request logged for <strong className="font-semibold">{heroEmail}</strong>.
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setEmailSubmitted(false);
                        setHeroEmail('');
                      }}
                      className="text-xs font-semibold text-amber-800 hover:underline cursor-pointer"
                    >
                      Reset
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleHeroSubmit}
                    className="ui-double-line-card flex items-center justify-between bg-white rounded-xl p-2 max-w-lg focus-within:border-[#f5c400] transition-all"
                  >
                    <label htmlFor="hero-work-email" className="sr-only">
                      Your Work Email
                    </label>
                    <input
                      id="hero-work-email"
                      type="email"
                      value={heroEmail}
                      onChange={(e) => setHeroEmail(e.target.value)}
                      placeholder="Enter your work email for a free consultation..."
                      className="w-full px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 bg-transparent focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="btn-primary-gold inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-lg whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <span>Start Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <AppLink
                    href="/about"
                    className="btn-secondary-clean inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold"
                  >
                    <span>Get More Detail</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </AppLink>
                  <AppLink
                    href="/stories"
                    className="btn-secondary-clean inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold"
                  >
                    <span>Explore Success Stories</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </AppLink>
                </div>
              </div>

              {/* Trust Signals */}
              <div className="gsap-hero-item pt-4 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>ISO 27001, 20000, 22301 & 27701</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Udyog Vihar, Gurugram & US Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>+1 415 7040681 · +91 7303933635</span>
                </div>
              </div>
            </div>

            {/* Right Column: Auto-Cycling Official 5-Pillar Interactive Console */}
            <div
              className="lg:col-span-5 gsap-hero-showcase"
              onMouseEnter={() => setConsolePaused(true)}
              onMouseLeave={() => setConsolePaused(false)}
            >
              <div className="ui-double-line-card rounded-2xl bg-white p-5 sm:p-6 space-y-4 relative overflow-hidden">
                {/* Animated GSAP Cycle Progress Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100">
                  <div
                    ref={consoleProgressRef}
                    className="h-full bg-[#f5c400] w-0"
                  />
                </div>

                <div className="flex items-center justify-between gap-2 pt-1">
                  <span className="text-xs font-bold text-slate-800">
                    Our Services · End-to-End IT Solutions
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#fffbeb] border border-amber-200 text-[11px] font-mono-tabular text-amber-800 font-semibold">
                    {consolePaused ? 'Inspecting Pillar' : 'Auto-Cycling Live'}
                  </span>
                </div>

                {/* Segmented Tab Controls for the 5 Official Pillars */}
                <div
                  role="tablist"
                  aria-label="Select Vorombetech service pillar"
                  className="grid grid-cols-5 gap-1 p-1 bg-slate-100 rounded-xl"
                >
                  {OFFICIAL_HERO_SLIDES.map((bp, idx) => {
                    const active = idx === activeBlueprintIdx;
                    return (
                      <button
                        key={bp.id}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        onClick={() => setActiveBlueprintIdx(idx)}
                        className={`py-1.5 px-1.5 text-[10px] sm:text-[11px] font-semibold rounded-lg transition-all cursor-pointer truncate ${
                          active
                            ? 'bg-[#f5c400] text-slate-900 font-bold shadow-2xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        {bp.label}
                      </button>
                    );
                  })}
                </div>

                {/* Animated Blueprint Content */}
                <div ref={consoleCardRef} className="space-y-4">
                  <VisualAsset
                    theme={activeBlueprint.theme}
                    title={activeBlueprint.title}
                    subtitle={activeBlueprint.headline}
                    aspectRatio="16:9"
                    className="rounded-xl border border-slate-200/80"
                  />

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {activeBlueprint.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Official Stats Ribbon */}
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="gsap-stat-card clean-card rounded-2xl bg-white p-5 sm:p-6">
              <p
                className="gsap-counter text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono-tabular"
                data-target="750"
                data-suffix="+"
              >
                750+
              </p>
              <p className="text-sm font-bold text-slate-800 mt-1">
                Project
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                Successfully delivered across global industries
              </p>
            </div>
            <div className="gsap-stat-card clean-card rounded-2xl bg-white p-5 sm:p-6">
              <p
                className="gsap-counter text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono-tabular"
                data-target="250"
                data-suffix="+"
              >
                250+
              </p>
              <p className="text-sm font-bold text-slate-800 mt-1">
                Clients
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                Prominent global & enterprise organizations
              </p>
            </div>
            <div className="gsap-stat-card clean-card rounded-2xl bg-white p-5 sm:p-6">
              <p
                className="gsap-counter text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono-tabular"
                data-target="99"
                data-suffix="%"
              >
                99%
              </p>
              <p className="text-sm font-bold text-slate-800 mt-1">
                Satisfaction
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                Customer-centric & transparent delivery
              </p>
            </div>
            <div className="gsap-stat-card clean-card rounded-2xl bg-white p-5 sm:p-6">
              <p
                className="gsap-counter text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono-tabular"
                data-target="29"
                data-suffix="+"
              >
                29+
              </p>
              <p className="text-sm font-bold text-slate-800 mt-1">
                End-to-End IT Solutions
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                Cloud, InfoSec, Digitalization, IT & SaaS
              </p>
            </div>
          </div>
        </div>

        {/* Smooth GSAP-Animated Sweeping Parabolic Curve Transition at Base of Hero */}
        <div aria-hidden="true" className="gsap-wave-arc w-full overflow-hidden leading-none pt-10">
          <svg
            viewBox="0 0 1440 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-10 sm:h-16 block"
            preserveAspectRatio="none"
          >
            <path
              d="M0 12 Q720 72 1440 12 L1440 72 L0 72 Z"
              fill="#ffffff"
            />
            <path
              d="M0 12 Q720 72 1440 12"
              stroke="#f5c400"
              strokeWidth="2"
              strokeOpacity="0.45"
              fill="none"
            />
          </svg>
        </div>
      </section>

      {/* 2. OUR SERVICES — WE OFFER END-TO-END IT SOLUTIONS (Restored Clean 6-Card Grid) */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
        <div className="gsap-section-reveal grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12">
          <div className="gsap-section-text lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold tracking-wider uppercase">
              <span className="text-amber-700">Our Services</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <RotatingText
                phrases={SERVICES_ROTATING_LABELS}
                className="inline-block text-slate-900 bg-[#fffbeb] px-2.5 py-0.5 rounded-md border border-amber-200/80"
              />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              We offer End-to-End IT Solutions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              We Convert Ordinary into ‘Great’. Vorombetech Solutions empowers businesses across Digitalization, Cloud Services, IT Services, SaaS, and Information Security Compliance to achieve operational excellence and efficiency.
            </p>
            <div className="pt-1">
              <AppLink
                href="/services"
                className="btn-primary-gold inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold"
              >
                <span>Explore All 29 Services</span>
                <ArrowRight className="w-4 h-4" />
              </AppLink>
            </div>
          </div>

          <div className="gsap-section-media lg:col-span-5">
            <VisualAsset
              theme="transformation"
              title="We Offer End-to-End IT Solutions"
              subtitle="Digitalization · Cloud · IT · SaaS · InfoSec"
              customImage="/images/five-services-hub.jpg"
              customNodes={['Digitalization', 'Cloud', 'IT', 'SaaS', 'InfoSec']}
              customMetricValue="29+ Solutions"
              customMetricLabel="5 Core Pillars"
              customSla="End-to-End IT SLA"
              aspectRatio="16:9"
              className="rounded-2xl ui-double-line-card"
            />
          </div>
        </div>

        <div className="gsap-card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {OFFICIAL_HOME_SERVICES.map((pillar) => (
            <div
              key={pillar.title}
              className="gsap-card gsap-service-card group rounded-2xl bg-white overflow-hidden flex flex-col justify-between border border-slate-200/80 shadow-xs"
            >
              <div>
                <AppLink href={`/services/${pillar.slug}`} className="block">
                  <VisualAsset
                    theme={pillar.visualTheme}
                    title={pillar.title}
                    subtitle={pillar.indexNumber}
                    aspectRatio="16:9"
                    className="border-b border-slate-100"
                  />
                </AppLink>

                <div className="px-6 pb-5 pt-3.5 sm:px-7 sm:pb-6 sm:pt-4 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-11 h-11 rounded-xl bg-[#fffbeb] border border-amber-200/80 text-slate-900 group-hover:bg-[#f5c400] transition-colors flex items-center justify-center shrink-0">
                      <ServiceIcon name={pillar.iconName} className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-amber-900 bg-[#fffbeb] px-2.5 py-1 rounded-md border border-amber-200/80">
                      {pillar.indexNumber}
                    </span>
                  </div>

                  <AppLink href={`/services/${pillar.slug}`} className="block">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                      {pillar.title}
                    </h3>
                  </AppLink>

                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-4">
                    {pillar.description}
                  </p>
                </div>
              </div>

              <div className="px-6 sm:px-7 pb-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs bg-slate-50/50">
                <span className="font-semibold text-slate-600">
                  {pillar.subLinks.length} Specialized Offerings
                </span>
                <AppLink
                  href={`/services/${pillar.slug}`}
                  className="font-bold text-slate-900 group-hover:text-amber-700 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-all"
                >
                  Get More Detail <ArrowRight className="w-3.5 h-3.5" />
                </AppLink>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WORK PROCESS — INTERACTIVE CONNECTED CURVED TIMELINE ARC (Replaces Boxy Step Cards) */}
      <section className="relative pt-12 pb-16 bg-gradient-to-b from-white via-[#fffbeb]/35 to-[#fffbeb]/60 overflow-hidden">
        {/* Top Subtle Curved SVG Wave */}
        <div aria-hidden="true" className="gsap-wave-arc w-full overflow-hidden leading-none mb-8">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-8 sm:h-12 block"
            preserveAspectRatio="none"
          >
            <path
              d="M0 50 Q720 0 1440 50"
              stroke="#e2e8f0"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
              WORK PROCESS
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              How We Help Organizations
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              We Convert Ordinary into ‘Great’ — empowering businesses to provide rich & seamless experiences resulting in high operational excellence and efficiency.
            </p>
          </div>

          {/* Connected GSAP Horizontal Progress Path + Interactive Step Nodes */}
          <div className="gsap-flow-container relative pt-4">
            {/* Curved / Horizontal Animated Progress Spine on Desktop */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-1 bg-amber-200/60 rounded-full overflow-hidden"
            >
              <div className="gsap-flow-line h-full w-full bg-gradient-to-r from-[#f5c400] via-amber-500 to-[#166534]" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {OFFICIAL_WORK_PROCESS.map((proc, idx) => {
                const isActive = activeProcessStep === idx;
                return (
                  <div
                    key={proc.step}
                    onMouseEnter={() => setActiveProcessStep(idx)}
                    onClick={() => setActiveProcessStep(idx)}
                    className="gsap-flow-node group cursor-pointer flex flex-col items-start lg:items-center lg:text-center space-y-4"
                  >
                    {/* Circular Milestone Node */}
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center font-mono-tabular font-extrabold text-lg transition-all duration-300 shadow-md ${
                        isActive
                          ? 'bg-[#f5c400] text-slate-950 scale-110 ring-4 ring-amber-200/80'
                          : 'bg-white text-slate-900 border-2 border-[#f5c400] group-hover:bg-[#fffbeb]'
                      }`}
                    >
                      {proc.step}
                    </div>

                    <div className="space-y-2 px-1">
                      <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#166534]">
                        {proc.phase}
                      </span>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-amber-800 transition-colors">
                        {proc.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {proc.description}
                      </p>
                      <div className="pt-1">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#166534] shrink-0" />
                          <span>{proc.highlight}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* WHY CHOOSE US? — Brand-Native Curved Showcase Stage */}
          <div className="gsap-open-row pt-8 border-t border-amber-200/70 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-800">
                WHY CHOOSE US?
              </p>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Our passion is to work hard and deliver outstanding results
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Partner with ISO-certified enterprise consultants, cloud architects, and cybersecurity specialists focused on measurable business outcomes.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <AppLink
                  href="/about"
                  className="btn-primary-gold inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold shadow-xs"
                >
                  <span>About Vorombetech</span>
                  <ArrowRight className="w-4 h-4" />
                </AppLink>
                <AppLink
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-white hover:bg-slate-50 border border-amber-300/80 text-xs sm:text-sm font-bold text-slate-900 transition-colors"
                >
                  <span>Schedule Discovery Call</span>
                </AppLink>
              </div>
            </div>

            {/* Flowing Pill Stream of 9 Differentiators */}
            <div className="lg:col-span-7 flex flex-wrap gap-3">
              {OFFICIAL_WHY_CHOOSE_US.map((item, idx) => (
                <div
                  key={item}
                  className="gsap-stat-item group inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-white border border-amber-200/90 shadow-2xs hover:border-[#f5c400] hover:shadow-md transition-all"
                >
                  <span className="w-6 h-6 rounded-full bg-[#fffbeb] group-hover:bg-[#f5c400] text-amber-900 group-hover:text-slate-950 font-mono-tabular text-[11px] font-extrabold flex items-center justify-center transition-colors">
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

      {/* 3B. FULL-BLEED CURVED PLATFORM STATEMENT SECTION (Light Blue Curved Design) */}
      <PlatformStatementCurvedSection
        topLinkText="Explore ISO 27001 & Cloud Excellence"
        topLinkHref="/services"
        headline="Technology is the greatest platform for business transformation"
        description="Grounded in trust, customer success, innovation, quality governance, and security compliance, we’re committed to converting ordinary operations into great digital experiences—investing our cloud, SaaS, and engineering expertise to create lasting measurable value for enterprises of all sizes."
        ctaText="Start Your Transformation"
        ctaHref="/contact"
        bottomFollowUpHeadline="Meet the enterprise clients achieving measurable transformation"
        bottomFollowUpSubtext="250+ global organizations across BFSI, Healthcare, Retail, eLearning, and SaaS trust Vorombetech Solutions."
      />

      {/* 4. CASE STUDIES / SUCCESS STORIES + CLIENT TESTIMONIALS ("What Our Clients Say") */}
      <section className="bg-white pb-20 pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Stories Header with Right-Side Showcase Image */}
          <div className="gsap-section-reveal grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="gsap-section-text lg:col-span-7 space-y-4">
              <p className="text-xs font-bold tracking-wider text-amber-700 uppercase">
                Case Studies · Success Stories
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Proven Results & Trusted Relationships Across{' '}
                <RotatingText
                  phrases={[
                    '250+ Global Clients',
                    '750+ Delivered Projects',
                    'Cloud, Security & Portals',
                    '99% Client Satisfaction',
                  ]}
                />
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                Explore how Vorombetech Solutions joined hands with Vatika Business Centre, B2C eLearning Platforms, B2B SaaS Firms, Loyalty Management Platforms, and Global Enterprises to deliver measurable transformation.
              </p>
              <div className="pt-1">
                <AppLink
                  href="/stories"
                  className="btn-primary-gold inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold"
                >
                  <span>View All 12 Case Studies</span>
                  <ArrowRight className="w-4 h-4" />
                </AppLink>
              </div>
            </div>

            <div className="gsap-section-media lg:col-span-5">
              <VisualAsset
                theme="bfsi"
                title="Proven Results, Trusted Relationship"
                subtitle="750+ Projects · 250+ Global Clients"
                aspectRatio="16:9"
                className="rounded-2xl ui-double-line-card"
              />
            </div>
          </div>

          {/* Featured Case Studies Grid */}
          <div className="gsap-card-grid grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredStories.map((story) => (
              <AppLink
                key={story.slug}
                href={`/stories/${story.slug}`}
                className="gsap-card group rounded-2xl bg-white overflow-hidden flex flex-col justify-between border border-slate-200/80 shadow-xs"
              >
                <div>
                  <VisualAsset
                    theme={story.visualTheme}
                    title={story.clientName}
                    subtitle={`${story.industry} · Case Study`}
                    aspectRatio="16:9"
                    className="border-b border-slate-200/70"
                  />
                  <div className="p-6 sm:p-8 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="px-2 py-0.5 rounded bg-[#fffbeb] border border-amber-200 font-bold text-amber-900">
                        {story.industry}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="font-medium text-slate-800">{story.clientName}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {story.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-8 pb-6 pt-4 border-t border-slate-100 grid grid-cols-3 gap-4 bg-slate-50/60">
                  {story.metrics.slice(0, 3).map((metric, idx) => (
                    <div key={idx}>
                      <p className="text-lg sm:text-xl font-extrabold text-slate-900 font-mono-tabular">
                        {metric.value}
                      </p>
                      <p className="text-xs text-slate-600 mt-0.5 line-clamp-1">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </AppLink>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR BLOG — LATEST NEWS & ARTICLES (Verbatim Vorombetech Blogs by Hemraj) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white border-t border-slate-200/80">
        <div className="gsap-section-reveal grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12">
          <div className="gsap-section-text lg:col-span-7 space-y-4">
            <p className="text-xs font-bold tracking-wider text-amber-700 uppercase">
              OUR BLOG · Vorombetech Blogs
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Latest News & Articles
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              Practical perspectives from Vorombetech Solutions covering AI Agent governance, Salesforce Marketing Cloud & Sales Cloud optimization, Agentforce Contact Center, DPDP compliance, and enterprise cybersecurity.
            </p>
            <div className="pt-1">
              <AppLink
                href="/blog"
                className="btn-primary-gold inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold"
              >
                <span>View All Vorombetech Blogs</span>
                <ArrowRight className="w-4 h-4" />
              </AppLink>
            </div>
          </div>

          <div className="gsap-section-media lg:col-span-5">
            <VisualAsset
              theme="ai"
              title="Vorombetech Blogs · Latest News & Articles"
              subtitle="By Hemraj · AI, Salesforce, DPDP & Cybersecurity"
              aspectRatio="16:9"
              className="rounded-2xl ui-double-line-card"
            />
          </div>
        </div>

        <div className="gsap-card-grid grid grid-cols-1 md:grid-cols-3 gap-7">
          {latestPosts.map((post) => (
            <AppLink
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="gsap-card group rounded-2xl bg-white overflow-hidden flex flex-col justify-between border border-slate-200/80 shadow-xs"
            >
              <div>
                <VisualAsset
                  theme={post.visualTheme}
                  title={post.title}
                  subtitle={post.category}
                  aspectRatio="16:9"
                  className="border-b border-slate-100"
                />
                <div className="p-6 space-y-3">
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
                    <span className="font-bold text-amber-800">{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.author}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 line-clamp-2 group-hover:text-amber-800 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>By {post.author}</span>
                <span className="font-bold text-slate-900 group-hover:text-amber-700 inline-flex items-center gap-1">
                  Read More <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </AppLink>
          ))}
        </div>
      </section>

      {/* 6. FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <FaqSection />

      {/* 7. REUSABLE CONTACT US SECTION */}
      <ContactSection />
    </div>
  );
};
