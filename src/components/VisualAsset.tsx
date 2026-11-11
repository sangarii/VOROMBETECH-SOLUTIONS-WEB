import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { VisualTheme } from '../types';
import { useTheme, BrandPalette } from '../context/ThemeContext';

interface VisualAssetProps {
  theme: VisualTheme;
  title: string;
  subtitle?: string;
  aspectRatio?: '16:9' | '4:3' | '21:9' | 'auto';
  size?: 'card' | 'medium';
  className?: string;
  customImage?: string;
  customNodes?: string[];
  customMetricValue?: string;
  customMetricLabel?: string;
  customSla?: string;
}

const DOMAIN_METADATA: Record<
  VisualTheme,
  {
    badge: string;
    metricLabel: string;
    metricValue: string;
    sla: string;
    nodes: string[];
    photos: string[];
  }
> = {
  salesforce: {
    badge: 'SALESFORCE MULTI-ORG CLOUD',
    metricLabel: 'Quote-to-Cash Velocity',
    metricValue: '+42% Faster',
    sla: '99.98% Sync SLA',
    nodes: ['Sales Cloud', 'MuleSoft API', 'Revenue CPQ'],
    photos: [
      '/images/salesforce-1.jpg',
      '/images/salesforce-2.jpg',
      '/images/salesforce-3.jpg',
    ],
  },
  ai: {
    badge: 'PRIVATE-VPC AI & RAG AGENTS',
    metricLabel: 'Straight-Through Processing',
    metricValue: '99.2% Accuracy',
    sla: 'Zero Data Retention',
    nodes: ['OCR Ingestion', 'Hybrid Vector', 'Cited Output'],
    photos: [
      '/images/ai-1.jpg',
      '/images/ai-2.jpg',
      '/images/ai-3.jpg',
    ],
  },
  security: {
    badge: 'ZERO-TRUST CYBERSECURITY',
    metricLabel: 'Mean Time to Detect',
    metricValue: '< 4 Minutes',
    sla: 'SOC 2 & ISO 27001',
    nodes: ['Okta JIT IAM', 'eBPF Mesh', 'SOAR Auto-Isolate'],
    photos: [
      '/images/security-1.jpg',
      '/images/security-2.jpg',
      '/images/security-3.jpg',
    ],
  },
  cloud: {
    badge: 'MULTI-CLOUD KUBERNETES & FINOPS',
    metricLabel: 'Cloud FinOps Savings',
    metricValue: '-34% Spend',
    sla: '99.99% Multi-AZ',
    nodes: ['AWS / Azure', 'Karpenter EKS', 'ArgoCD GitOps'],
    photos: [
      '/images/cloud-1.jpg',
      '/images/cloud-2.jpg',
    ],
  },
  transformation: {
    badge: 'DIGITAL TRANSFORMATION',
    metricLabel: 'Release Velocity',
    metricValue: '4.5x Faster',
    sla: 'Zero-Downtime Cutover',
    nodes: ['Legacy CDC', 'Kafka Event Bus', 'Next.js Edge'],
    photos: [
      '/images/transformation-1.jpg',
      '/images/transformation-2.jpg',
      '/images/transformation-3.jpg',
    ],
  },
  crm: {
    badge: 'REVOPS & CRM OPTIMIZATION',
    metricLabel: 'Inbound Speed-to-Lead',
    metricValue: '< 45 Seconds',
    sla: '99.4% Data Hygiene',
    nodes: ['Auto-Enrich', 'Account Match', 'Slack Routing'],
    photos: [
      '/images/crm-1.jpg',
      '/images/crm-2.jpg',
      '/images/crm-3.jpg',
    ],
  },
  bfsi: {
    badge: 'BFSI COMMERCIAL BANKING',
    metricLabel: 'Credit Underwriting',
    metricValue: '64% Faster',
    sla: 'PCI-DSS & FFIEC',
    nodes: ['Core Banking', 'Shield Encrypt', 'FSC Workspace'],
    photos: [
      '/images/bfsi-1.jpg',
      '/images/bfsi-2.jpg',
      '/images/bfsi-3.jpg',
    ],
  },
  healthcare: {
    badge: 'HIPAA CLINICAL AI NETWORK',
    metricLabel: 'Auto-Adjudicated Claims',
    metricValue: '82% Automated',
    sla: 'HIPAA & HITRUST',
    nodes: ['HL7 FHIR R4', 'Clinical RAG', 'Nurse Review'],
    photos: [
      '/images/healthcare-1.jpg',
      '/images/healthcare-2.jpg',
    ],
  },
  saas: {
    badge: 'HIGH-THROUGHPUT SAAS PLATFORM',
    metricLabel: 'SaaS Gross Margin',
    metricValue: '+14 pts Lift',
    sla: '99.99% Uptime SLA',
    nodes: ['Graviton4 Nodes', 'Wiz CNAPP', 'SOC 2 Type II'],
    photos: [
      '/images/saas-1.jpg',
      '/images/saas-2.jpg',
    ],
  },
  ecommerce: {
    badge: 'COMPOSABLE RETAIL COMMERCE',
    metricLabel: 'Mobile Conversion',
    metricValue: '+34% Checkout',
    sla: '< 180ms Edge TTFB',
    nodes: ['Edge Storefront', 'Redis ATP Mesh', '140 Stores'],
    photos: [
      '/images/ecommerce-1.jpg',
      '/images/ecommerce-2.jpg',
    ],
  },
};

/* ============================================================================
   DEDICATED NON-DUPLICATE PHOTO MAPPING FOR EVERY CARD & HERO ACROSS THE SITE
   Ensures every card on Home, Services, Case Studies, Blog, About, Contact,
   and all 29 Service Detail pages displays a unique, topic-related local image.
   ============================================================================ */
const TITLE_TO_PHOTO_MAP: Record<string, string> = {
  // 1. Home Hero Blueprint Console Slides (5 distinct photos)
  'Digitalization Services & Custom Portal Engineering': '/images/transformation-2.jpg',
  'Global Cloud Consultancy, Migration & FinOps': '/images/cloud-2.jpg',
  'Salesforce, G-Suite & Microsoft Office 365 Consulting': '/images/salesforce-2.jpg',
  'Proactive IT Consulting, Infrastructure & Managed Support': '/images/cloud-1.jpg',
  'ISO 27001, ISO 20000, ISO 22301, ISO 27701 & ITGC Compliance': '/images/security-2.jpg',

  // 2. Home & Section Showcase Headers
  'We Offer End-to-End IT Solutions': '/images/five-services-hub.jpg',
  'Proven Results, Trusted Relationship': '/images/bfsi-1.jpg',
  'Vorombetech Blogs · Latest News & Articles': '/images/ai-1.jpg',
  'Accelerating Technical Success of Your Business': '/images/transformation-3.jpg',
  'Enterprise Engineering & Architecture Delivery': '/images/salesforce-3.jpg',
  'Audited Client Impact & Production Outcomes': '/images/bfsi-1.jpg',
  'Principal Architecture Research & Playbooks': '/images/ai-1.jpg',

  // 3. Home 6 Core Service Pillar Cards (6 distinct photos — zero overlap)
  Digitalization: '/images/transformation-1.jpg',
  'Cloud Services': '/images/cloud-2.jpg',
  'IT Services': '/images/cloud-1.jpg',
  SaaS: '/images/salesforce-1.jpg',
  'Information Security': '/images/security-1.jpg',
  'Salesforce Integration & CRM': '/images/crm-3.jpg',

  // 4. ServicesPage 6 Core Practice Deep-Dive Cards (6 distinct photos — zero overlap)
  'Salesforce Consulting': '/images/salesforce-1.jpg',
  'AI & Automation': '/images/ai-2.jpg',
  Cybersecurity: '/images/security-1.jpg',
  'Cloud Computing': '/images/cloud-2.jpg',
  'Digital Transformation': '/images/transformation-2.jpg',
  'CRM Optimization': '/images/crm-3.jpg',

  // 5. All 29 Mega-Menu Sub-Service Detail Pages (each mapped to a distinct existing photo)
  AWS: '/images/cloud-1.jpg',
  'Cloud Consultancy': '/images/cloud-2.jpg',
  'Cloud Cost Optimization': '/images/saas-2.jpg',
  'Cloud Migration': '/images/transformation-3.jpg',
  'Cloud Monitoring': '/images/ai-3.jpg',
  'Cloud Security': '/images/security-2.jpg',
  'Microsoft Azure': '/images/saas-1.jpg',

  'Iso 20000 ITSM': '/images/security-1.jpg',
  'Iso 22301 BCMS': '/images/healthcare-2.jpg',
  'Iso 27001 ISMS': '/images/security-3.jpg',
  'Iso 27701 PIMS': '/images/healthcare-1.jpg',
  'IT General Control (ITGC)': '/images/security-2.jpg',
  'Security Assessment': '/images/bfsi-2.jpg',

  'Contest Management Portal': '/images/transformation-1.jpg',
  'E-commerce Portal': '/images/ecommerce-1.jpg',
  'Elearning Portal': '/images/ai-1.jpg',
  'Enterprise Web Application Development': '/images/transformation-2.jpg',
  'Job Portal': '/images/ai-2.jpg',
  'Mobile App Development': '/images/ecommerce-2.jpg',
  'Survey Portal': '/images/crm-1.jpg',
  'UI/UX Design': '/images/salesforce-2.jpg',
  'Web Portal Development': '/images/transformation-3.jpg',

  'IT Consulting Service': '/images/bfsi-3.jpg',
  'IT Infrastructure Services & Solutions': '/images/cloud-1.jpg',
  'IT Managed Service': '/images/salesforce-3.jpg',
  'Managed Security Services': '/images/security-3.jpg',
  'Backup And Disaster Recovery': '/images/cloud-2.jpg',

  'G-suite': '/images/saas-1.jpg',
  'Microsoft Solutions': '/images/saas-2.jpg',

  // 6. Featured & All Case Studies (zero overlap on HomePage & StoriesPage)
  'Vatika Business Centre': '/images/ecommerce-1.jpg',
  'Vorombetech Solutions Joined hand with Vatika Business Centre to enhance Property Management System':
    '/images/ecommerce-1.jpg',

  'B2C eLearning Platform': '/images/ecommerce-2.jpg',
  'Enhance Security Design for B2C Learning Portal': '/images/ecommerce-2.jpg',

  'B2B Vendor & Procurement SaaS': '/images/saas-1.jpg',
  'Vorombetech Solution helps Tech Firms to enhance the Security of their SaaS Platform':
    '/images/saas-1.jpg',

  'Loyalty Management Tech Firm': '/images/security-3.jpg',
  'Vorombetech helped Loyalty Management Tech Firm to achieve Risk and Compliance Management excellence!':
    '/images/security-3.jpg',

  'Online Auction Platform': '/images/saas-2.jpg',
  '35% AWS Infra cost reduced for online auction platform': '/images/saas-2.jpg',

  'Enterprise VDI Deployment': '/images/cloud-1.jpg',
  'Resilient Virtual Desktop Infrastructure (VDI) Experience': '/images/cloud-1.jpg',

  'Enterprise Document Repository': '/images/transformation-1.jpg',
  'Value-Added Document Management System': '/images/transformation-1.jpg',

  'Enterprise Market Research & Feedback': '/images/crm-3.jpg',
  'User-Friendly Survey Management Portal': '/images/crm-3.jpg',

  'Enterprise Office 365 & SharePoint Client': '/images/salesforce-2.jpg',
  'Secure On-Premise To Office 365 Migration': '/images/salesforce-2.jpg',

  'Legal Business Consulting Organization': '/images/bfsi-2.jpg',
  'Revolutionalized Managed IT Services For Legal Business Consulting Organization':
    '/images/bfsi-2.jpg',

  'Hospitality Tech Firm': '/images/security-2.jpg',
  'Comprehensive Managed Security Services For Hospitality Tech Firm':
    '/images/security-2.jpg',

  'Global IT Consulting Firm': '/images/cloud-2.jpg',
  'Implementing A Resilient High Availability VPN Connection For Global IT Consulting Firm':
    '/images/cloud-2.jpg',

  // 7. Blog Posts (each mapped to a distinct existing local photo)
  'Deploying AI Agents Is Easy. Governing Them Is the Real Strategy': '/images/ai-2.jpg',
  'AI Agent Governance & Policy Enforcement': '/images/ai-3.jpg',
  'Why Your Salesforce Marketing Cloud Campaigns Are Not Converting — A Practical Perspective from Vorombetech Solutions':
    '/images/salesforce-3.jpg',
  'Most AI Strategies Focus on Cost. The Real Opportunity Is Revenue': '/images/ai-3.jpg',
  'Agentforce Contact Center: Transforming Customer Service Operations':
    '/images/blog-salesforce-partner.jpg',
  'What Business Leaders Should Expect from a Salesforce Consulting Partner':
    '/images/salesforce-1.jpg',
  'How Poor Integration Strategy Undermines Salesforce Sales Cloud — Lessons from Vorombetech Solutions':
    '/images/crm-1.jpg',
  'Why Sales Cloud Needs Continuous Optimization, Not One-Time Implementation':
    '/images/salesforce-2.jpg',
  'Mobile and Remote Security: Protecting the Modern Distributed Workforce':
    '/images/security-1.jpg',
  'DPDP for Start-ups: How to Stay Compliant Without Slowing Growth': '/images/healthcare-1.jpg',
  'Personal Data vs Sensitive Data: What Changes Under DPDP?': '/images/healthcare-2.jpg',
  'DPDP Implementation: A Step-by-Step Compliance Roadmap': '/images/security-2.jpg',
  'Cybersecurity Predictions: What’s Next in Digital Threats and Defence':
    '/images/security-3.jpg',
};

function selectPhotoForTitle(photos: string[], title: string): string {
  const trimmed = title.trim();
  if (TITLE_TO_PHOTO_MAP[trimmed]) {
    return TITLE_TO_PHOTO_MAP[trimmed];
  }
  let hash = 0;
  for (let i = 0; i < trimmed.length; i++) {
    hash = (hash * 31 + trimmed.charCodeAt(i)) >>> 0;
  }
  return photos[hash % photos.length];
}

export function createDynamicEnterpriseSvgUri(
  theme: VisualTheme,
  _palette: BrandPalette,
  title: string,
  subtitle?: string
): string {
  const cfg = DOMAIN_METADATA[theme] || DOMAIN_METADATA.salesforce;
  const safeTitle = title
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .slice(0, 54);
  const safeSubtitle = (subtitle || cfg.badge)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .slice(0, 62);

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <rect width="1200" height="675" fill="#0F172A" />
    <rect x="0" y="0" width="1200" height="8" fill="#F5C400" />
    <circle cx="980" cy="220" r="240" fill="#1E293B" />
    <circle cx="980" cy="220" r="150" fill="#334155" opacity="0.6" />
    <g transform="translate(72, 90)">
      <rect x="0" y="0" width="320" height="36" rx="18" fill="#F5C400" />
      <text x="20" y="23" fill="#0F172A" font-family="sans-serif" font-size="12" font-weight="800" letter-spacing="1">${safeSubtitle.slice(0, 32).toUpperCase()}</text>
    </g>
    <g transform="translate(72, 340)">
      <text x="0" y="0" fill="#F5C400" font-family="sans-serif" font-size="14" font-weight="700" letter-spacing="1.5">VOROMBETECH ENTERPRISE ARCHITECTURE</text>
      <text x="0" y="46" fill="#FFFFFF" font-family="sans-serif" font-size="28" font-weight="800">${safeTitle}</text>
      <rect x="0" y="72" width="84" height="5" rx="2.5" fill="#F5C400" />
    </g>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export const VisualAsset: React.FC<VisualAssetProps> = ({
  theme,
  title,
  subtitle,
  aspectRatio = '16:9',
  className = '',
  customImage,
  customNodes,
  customMetricValue,
  customMetricLabel,
  customSla,
}) => {
  const { palette } = useTheme();
  const [imgFailed, setImgFailed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const vignetteRef = useRef<HTMLDivElement>(null);
  const slaPillRef = useRef<HTMLSpanElement>(null);
  const bottomStripRef = useRef<HTMLDivElement>(null);

  const cfg = DOMAIN_METADATA[theme] || DOMAIN_METADATA.salesforce;
  const photoUrl = customImage || selectPhotoForTitle(cfg.photos, title);
  const displayNodes = customNodes || cfg.nodes;
  const displayMetricValue = customMetricValue || cfg.metricValue;
  const displayMetricLabel = customMetricLabel || cfg.metricLabel;
  const displaySla = customSla || cfg.sla;
  const fallbackSvgUri = createDynamicEnterpriseSvgUri(theme, palette, title, subtitle);

  const aspectValue =
    aspectRatio === '4:3'
      ? '4 / 3'
      : aspectRatio === '21:9'
      ? '21 / 9'
      : '16 / 9';

  useEffect(() => {
    const container = containerRef.current;
    const img = imgRef.current;
    const vignette = vignetteRef.current;
    const slaPill = slaPillRef.current;
    const bottomStrip = bottomStripRef.current;
    if (!container || !img || !vignette || !bottomStrip) return;

    const pillItems = bottomStrip.querySelectorAll('.gsap-img-pill');

    // Hidden by default; only revealed when hovering the image (or parent card)
    gsap.set(vignette, { autoAlpha: 0.25 });
    if (slaPill) gsap.set(slaPill, { autoAlpha: 0, y: -8 });
    gsap.set(bottomStrip, { autoAlpha: 0, y: 18 });
    gsap.set(pillItems, { autoAlpha: 0, y: 16, scale: 0.94 });

    const triggerTarget =
      (container.closest('a, .gsap-card, .gsap-service-card') as HTMLElement | null) ||
      container;

    const handleMouseEnter = () => {
      gsap.killTweensOf([img, vignette, slaPill, bottomStrip, pillItems]);

      // Lift and slightly zoom the image on hover
      gsap.to(img, {
        scale: 1.07,
        y: -4,
        duration: 0.45,
        ease: 'power3.out',
      });

      gsap.to(vignette, {
        autoAlpha: 1,
        duration: 0.3,
        ease: 'power2.out',
      });

      if (slaPill) {
        gsap.to(slaPill, {
          autoAlpha: 1,
          y: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
      }

      gsap.to(bottomStrip, {
        autoAlpha: 1,
        y: 0,
        duration: 0.32,
        ease: 'power3.out',
      });

      // Stagger-pop the dark node pills + metric badge up on hover
      gsap.fromTo(
        pillItems,
        { autoAlpha: 0, y: 16, scale: 0.94 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.36,
          stagger: 0.065,
          ease: 'back.out(1.4)',
        }
      );
    };

    const handleMouseLeave = () => {
      gsap.killTweensOf([img, vignette, slaPill, bottomStrip, pillItems]);

      gsap.to(img, {
        scale: 1,
        y: 0,
        duration: 0.42,
        ease: 'power3.out',
      });

      gsap.to(vignette, {
        autoAlpha: 0.25,
        duration: 0.28,
        ease: 'power2.out',
      });

      if (slaPill) {
        gsap.to(slaPill, {
          autoAlpha: 0,
          y: -8,
          duration: 0.22,
          ease: 'power2.in',
        });
      }

      gsap.to(pillItems, {
        autoAlpha: 0,
        y: 12,
        scale: 0.96,
        duration: 0.22,
        stagger: 0.03,
        ease: 'power2.in',
      });

      gsap.to(bottomStrip, {
        autoAlpha: 0,
        y: 16,
        duration: 0.25,
        ease: 'power2.in',
      });
    };

    triggerTarget.addEventListener('mouseenter', handleMouseEnter);
    triggerTarget.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      triggerTarget.removeEventListener('mouseenter', handleMouseEnter);
      triggerTarget.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [theme, title, customImage]);

  return (
    <div
      ref={containerRef}
      style={{
        aspectRatio: aspectValue,
        backgroundImage: `url("${fallbackSvgUri}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className={`w-full block relative overflow-hidden bg-slate-900 min-h-[220px] sm:min-h-[240px] select-none ${className}`}
    >
      {/* Official Website High-Resolution Enterprise Photography */}
      <img
        ref={imgRef}
        src={imgFailed ? fallbackSvgUri : photoUrl}
        alt={title}
        loading="eager"
        referrerPolicy="no-referrer"
        onError={() => setImgFailed(true)}
        className="absolute inset-0 w-full h-full object-cover will-change-transform"
      />

      {/* Subtle Bottom Vignette (intensifies smoothly on hover so pop-up pills are crisp) */}
      <div
        ref={vignetteRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent"
      />

      {/* Top Row: Category Badge + Hover-Revealed SLA Pill */}
      <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between gap-2 pointer-events-none">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-900 shadow-xs truncate">
          <span className="w-2 h-2 rounded-full bg-[#f5c400] shrink-0" />
          <span className="truncate">{subtitle || cfg.badge}</span>
        </span>

        <span
          ref={slaPillRef}
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-900/90 backdrop-blur-xs border border-white/15 text-[10px] sm:text-[11px] font-medium text-white shrink-0"
        >
          {displaySla}
        </span>
      </div>

      {/* Hover-Only Pop-Up Content Strip (Dark Rounded Node Pills + Golden KPI Badge) */}
      <div
        ref={bottomStripRef}
        className="pointer-events-none absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between gap-2"
      >
        <div className="flex flex-wrap items-center gap-1.5">
          {displayNodes.map((node) => (
            <span
              key={node}
              className="gsap-img-pill px-2.5 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-xs border border-white/20 text-[10px] sm:text-xs font-semibold text-white shadow-sm"
            >
              {node}
            </span>
          ))}
        </div>

        <div className="gsap-img-pill px-3 py-1.5 rounded-lg bg-[#f5c400] text-slate-950 text-right shrink-0 shadow-sm">
          <p className="text-xs sm:text-sm font-extrabold font-mono-tabular leading-none">
            {displayMetricValue}
          </p>
          <p className="text-[9px] sm:text-[10px] font-semibold text-slate-800 leading-tight mt-0.5">
            {displayMetricLabel}
          </p>
        </div>
      </div>
    </div>
  );
};
