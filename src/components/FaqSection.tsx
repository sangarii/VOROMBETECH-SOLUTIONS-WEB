import React, { useState } from 'react';
import { ChevronDown, HelpCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { AppLink } from '../context/RouterContext';
import { RotatingText } from './RotatingText';

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  highlights?: string[];
}

export const OFFICIAL_FAQS: FaqItem[] = [
  {
    id: 'faq-core-services',
    category: 'Core Capabilities',
    question: 'What core IT consulting and digital transformation services does Vorombetech Solutions provide?',
    answer:
      'Vorombetech Solutions is an ISO 27001:2021 certified global IT consulting and engineering partner delivering five primary practices: Digitalization (Enterprise Web Apps, Portals, E-Commerce, UI/UX, and Mobile Apps), Cloud Services (AWS & Azure Consultancy, Migration, Security, Monitoring, and Cost Optimization), SaaS Consulting (Salesforce, Google Workspace, and Microsoft 365), IT Managed Services & Infrastructure, and Information Security Compliance.',
    highlights: ['750+ Projects Delivered', '250+ Global Clients', '99% Client Satisfaction'],
  },
  {
    id: 'faq-iso-compliance',
    category: 'Information Security',
    question: 'Which Information Security & Regulatory Compliance frameworks do you help organizations achieve?',
    answer:
      'Our certified security auditors and compliance architects guide enterprises end-to-end through ISO 27001 (ISMS), ISO 20000 (ITSM), ISO 22301 (Business Continuity Management), ISO 27701 (Privacy Information Management / DPDP Readiness), IT General Controls (ITGC), and comprehensive VAPT & Security Assessments across Finance, Healthcare, Retail, and SaaS sectors.',
    highlights: ['ISO 27001 & 27701', 'ITGC & SOC Readiness', 'End-to-End Audit Support'],
  },
  {
    id: 'faq-cloud-migration',
    category: 'Cloud & FinOps',
    question: 'How does Vorombetech ensure zero-downtime Cloud Migration and measurable Cloud Cost Optimization?',
    answer:
      'We follow a structured 4-stage methodology: Discovery & Dependency Mapping, Landing Zone Security Architecture, Phased Replication & Cutover Testing, and Continuous FinOps Governance. Clients migrating workloads to AWS or Microsoft Azure typically achieve a 25%–35% reduction in monthly cloud spend alongside 99.99% high-availability SLAs.',
    highlights: ['AWS & Microsoft Azure', 'Up to 35% FinOps Savings', 'Zero-Downtime Cutover'],
  },
  {
    id: 'faq-salesforce-saas',
    category: 'SaaS & CRM',
    question: 'Can you customize and integrate Salesforce, Google Workspace, and Microsoft 365 with our existing ERP?',
    answer:
      'Yes. As a certified Salesforce and cloud ecosystem partner, we architect custom Sales Cloud, Service Cloud, Marketing Cloud, and Agentforce workflows, alongside bidirectional API integrations with ERP, billing, and legacy databases. We also handle enterprise-wide Google Workspace (G-Suite) and Microsoft Office 365 tenant migrations and governance.',
    highlights: ['Salesforce Consulting', 'Custom API & ERP Sync', '24/7 SaaS Maintenance'],
  },
  {
    id: 'faq-engagement-sla',
    category: 'Engagement & Support',
    question: 'What engagement models and SLA guarantees do you offer for global enterprises?',
    answer:
      'We offer flexible engagement models tailored to your roadmap: Fixed-Scope Milestone Delivery, Dedicated Agile Engineering Pods, and 24/7 Managed IT & Security Retainers. Every engagement is backed by transparent SLA response guarantees, dedicated project managers across US and India time zones, and strict NDA and IP protection.',
    highlights: ['US & India Delivery Centers', '< 10 Min Critical SLA', '100% IP & NDA Protection'],
  },
  {
    id: 'faq-project-kickoff',
    category: 'Onboarding',
    question: 'How quickly can we initiate a technical discovery or architecture assessment with your team?',
    answer:
      'Once you submit an inquiry through our contact form or reach out to info@vorombetech.com, a Principal Architect responds within 4 business hours to schedule a complimentary discovery session. Within 3–5 business days, we deliver a tailored architecture blueprint, timeline, and transparent commercial proposal.',
    highlights: ['4-Hour Response Time', 'Complimentary Discovery', 'Clear Roadmap & ROI'],
  },
];

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(OFFICIAL_FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq-section"
      aria-labelledby="faq-heading"
      className="relative overflow-hidden pt-24 pb-20 bg-gradient-to-b from-[#fffbeb]/50 via-[#f0fdf4]/25 to-white"
    >
      {/* Top Sweeping Parabolic Curve Transition */}
      <div
        aria-hidden="true"
        className="gsap-wave-arc pointer-events-none absolute inset-x-0 top-0 w-full overflow-hidden leading-none"
      >
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 lg:h-14"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0H1440V20C1080 72 360 72 0 20V0Z"
            fill="#ffffff"
          />
          <path
            d="M0 20C360 72 1080 72 1440 20"
            stroke="#f5c400"
            strokeOpacity="0.4"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="gsap-section-reveal grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Header & Quick Summary Card */}
          <div className="gsap-section-text lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300/70 text-amber-900 text-xs font-extrabold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
              <span>Frequently Asked Questions</span>
            </div>

            <h2
              id="faq-heading"
              className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight"
            >
              Clear Answers on{' '}
              <RotatingText
                phrases={[
                  'Cloud & FinOps',
                  'ISO Compliance',
                  'Salesforce & SaaS',
                  'Managed IT SLAs',
                ]}
              />
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Everything you need to know about how Vorombetech Solutions architects, secures, and scales digital platforms for over 250+ enterprise clients worldwide.
            </p>

            <div className="rounded-2xl bg-white p-6 border border-slate-200/90 shadow-xs ui-double-line-card space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#166534]">
                  ISO 27001 Certified Delivery
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-[11px] font-bold text-[#166534]">
                  24/7 Global Desk
                </span>
              </div>
              <p className="text-sm font-bold text-slate-900">
                Have a specific architectural requirement not covered here?
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Speak directly with our principal cloud, cybersecurity, and SaaS consultants in the US or India for a tailored technical briefing.
              </p>
              <div className="pt-1 flex flex-wrap items-center gap-3">
                <AppLink
                  href="/contact"
                  className="btn-primary-gold inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold"
                >
                  <span>Ask Our Architects</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </AppLink>
                <AppLink
                  href="/services"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/70 transition-colors"
                >
                  <span>Explore All 25 Services</span>
                </AppLink>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div className="lg:col-span-7 space-y-3.5">
            {OFFICIAL_FAQS.map((faq, idx) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl transition-all duration-200 overflow-hidden border ${
                    isOpen
                      ? 'bg-white border-amber-400/90 shadow-md'
                      : 'bg-white/90 border-slate-200/90 hover:border-amber-300/80 shadow-2xs'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left px-5 sm:px-6 py-5 flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-start gap-3.5">
                      <span
                        className={`mt-0.5 w-7 h-7 rounded-lg text-xs font-extrabold flex items-center justify-center shrink-0 transition-colors ${
                          isOpen
                            ? 'bg-[#f5c400] text-slate-950'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        0{idx + 1}
                      </span>
                      <div className="space-y-1">
                        <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-amber-800">
                          {faq.category}
                        </span>
                        <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    <span
                      className={`mt-1 w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-200 ${
                        isOpen
                          ? 'bg-[#166534] text-white border-[#166534] rotate-180'
                          : 'bg-slate-50 text-slate-600 border-slate-200/80'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 pl-16 space-y-4 border-t border-slate-100">
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                      {faq.highlights && faq.highlights.length > 0 && (
                        <div className="flex flex-wrap items-center gap-2 pt-1">
                          {faq.highlights.map((item) => (
                            <span
                              key={item}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#fffbeb] border border-amber-200/80 text-xs font-bold text-slate-800"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#166534] shrink-0" />
                              <span>{item}</span>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
