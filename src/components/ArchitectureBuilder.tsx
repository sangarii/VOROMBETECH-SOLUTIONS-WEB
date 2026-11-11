import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
  Layers,
  ShieldCheck,
  ArrowRight,
  Cpu,
  Clock,
  TrendingUp,
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { StoryIndustry } from '../types';

const INDUSTRIES: {
  id: StoryIndustry;
  label: string;
  compliance: string;
  dataGravity: string;
}[] = [
  {
    id: 'BFSI',
    label: 'Banking, Financial Services & Insurance',
    compliance: 'SOC 2 Type II, ISO 27001, RBI & PCI-DSS Field Encryption',
    dataGravity: 'Multi-region ledger synchronization + immutable audit logs',
  },
  {
    id: 'Healthcare',
    label: 'Healthcare & Life Sciences',
    compliance: 'HIPAA BAA, HL7 FHIR R4, PHI Tokenization & Private VPC',
    dataGravity: 'EHR interoperability + clinical citation verification',
  },
  {
    id: 'SaaS',
    label: 'Enterprise B2B SaaS & Technology',
    compliance: 'SOC 2 Type II, GDPR, Multi-Tenant Row-Level Isolation',
    dataGravity: 'High-throughput telemetry + Reverse ETL product usage',
  },
  {
    id: 'E-commerce',
    label: 'Omnichannel Retail & E-Commerce',
    compliance: 'PCI-DSS 4.0, Global Edge CDN & GDPR Consent Governance',
    dataGravity: 'Sub-second storefront LCP + real-time ATP inventory mesh',
  },
];

const SCALES = [
  {
    id: 'growth',
    label: 'Rapid Modernization',
    duration: '8–10 Weeks',
    podSize: '4 Senior Engineers + 1 Principal Architect',
    roiMultiplier: 1,
  },
  {
    id: 'enterprise',
    label: 'Multi-Org Enterprise',
    duration: '12–16 Weeks',
    podSize: '7 Senior Engineers + 2 Principal Architects',
    roiMultiplier: 2.2,
  },
  {
    id: 'global',
    label: 'Global Core Transformation',
    duration: '16–24 Weeks',
    podSize: '12 Senior Engineers + Dedicated SRE & Security Pod',
    roiMultiplier: 4.1,
  },
];

export const ArchitectureBuilder: React.FC = () => {
  const [selectedServiceSlug, setSelectedServiceSlug] = useState(
    SERVICES_DATA[0].slug
  );
  const [selectedIndustry, setSelectedIndustry] = useState<StoryIndustry>('BFSI');
  const [selectedScaleIdx, setSelectedScaleIdx] = useState(1);

  const blueprintCardRef = useRef<HTMLDivElement>(null);

  const currentService =
    SERVICES_DATA.find((s) => s.slug === selectedServiceSlug) ||
    SERVICES_DATA[0];
  const currentIndustry =
    INDUSTRIES.find((i) => i.id === selectedIndustry) || INDUSTRIES[0];
  const currentScale = SCALES[selectedScaleIdx];

  const estimatedAnnualSavings = Math.round(380000 * currentScale.roiMultiplier);

  useEffect(() => {
    if (!blueprintCardRef.current) return;
    gsap.fromTo(
      blueprintCardRef.current,
      { opacity: 0.6, y: 6 },
      { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
    );
  }, [selectedServiceSlug, selectedIndustry, selectedScaleIdx]);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
      <div className="rounded-2xl bg-white border border-slate-200/90 shadow-xs overflow-hidden">
        {/* Top Golden Yellow Accent Strip */}
        <div className="h-1.5 w-full bg-[#f5c400]" />

        <div className="p-6 sm:p-10 lg:p-12 space-y-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-slate-200/80 pb-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
                <Cpu className="w-4 h-4" />
                <span>Interactive Architecture & Scope Configurator</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Build Your Target Enterprise Architecture Blueprint
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Select your practice area, industry compliance profile, and deployment scale to generate a tailored technical stack, delivery timeline, and projected business outcome.
              </p>
            </div>
            <div className="text-xs font-mono-tabular font-semibold text-slate-600 bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-xl shrink-0">
              Vorombetech Solution Blueprint Engine
            </div>
          </div>

          {/* Interactive Controls Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 5 Columns: Configuration Selectors */}
            <div className="lg:col-span-5 space-y-6">
              {/* Step 1: Practice Selector */}
              <div className="space-y-2.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  1. Select Primary Practice Area
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SERVICES_DATA.map((service) => {
                    const active = service.slug === selectedServiceSlug;
                    return (
                      <button
                        key={service.slug}
                        type="button"
                        onClick={() => setSelectedServiceSlug(service.slug)}
                        className={`text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer flex items-center justify-between ${
                          active
                            ? 'bg-[#f5c400] text-slate-900 border-[#eab308] font-bold shadow-2xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-amber-300 hover:bg-amber-50/40'
                        }`}
                      >
                        <span className="truncate">{service.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Industry Compliance Profile */}
              <div className="space-y-2.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  2. Select Industry & Compliance Tier
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {INDUSTRIES.map((ind) => {
                    const active = ind.id === selectedIndustry;
                    return (
                      <button
                        key={ind.id}
                        type="button"
                        onClick={() => setSelectedIndustry(ind.id)}
                        className={`px-3 py-2.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer text-center ${
                          active
                            ? 'bg-[#fffbeb] text-slate-900 border-[#f5c400] font-bold'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {ind.id}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Deployment Scale */}
              <div className="space-y-2.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  3. Select Program Scale
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {SCALES.map((scale, idx) => {
                    const active = idx === selectedScaleIdx;
                    return (
                      <button
                        key={scale.id}
                        type="button"
                        onClick={() => setSelectedScaleIdx(idx)}
                        className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                          active
                            ? 'bg-[#fffbeb] border-[#f5c400] text-slate-900'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <div>
                          <p className="text-xs font-bold text-slate-900">
                            {scale.label}
                          </p>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            {scale.podSize}
                          </p>
                        </div>
                        <span className="font-mono-tabular text-xs font-bold text-amber-800 bg-white px-2.5 py-1 rounded-lg border border-amber-200">
                          {scale.duration}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right 7 Columns: Particular Soft Yellow Blueprint Output Card */}
            <div
              ref={blueprintCardRef}
              className="lg:col-span-7 card-soft-yellow rounded-2xl p-6 sm:p-8 space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-200/70 pb-5">
                <div>
                  <div className="flex items-center gap-2 text-xs text-amber-800 font-semibold">
                    <span>{currentIndustry.label}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono-tabular">{currentScale.duration}</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                    {currentService.title} Reference Blueprint
                  </h3>
                </div>
                <div className="bg-white border border-amber-200 rounded-xl px-4 py-2.5 shrink-0 shadow-2xs">
                  <p className="text-[11px] text-slate-500">Projected Annual Impact</p>
                  <p className="text-lg font-extrabold text-slate-900 font-mono-tabular">
                    ${estimatedAnnualSavings.toLocaleString()}+ / yr
                  </p>
                </div>
              </div>

              {/* Compliance & Architecture Requirements */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-white border border-amber-200/60 p-4 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                    <ShieldCheck className="w-4 h-4 text-amber-700" />
                    <span>Regulatory Guardrails</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {currentIndustry.compliance}
                  </p>
                </div>

                <div className="rounded-xl bg-white border border-amber-200/60 p-4 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                    <Layers className="w-4 h-4 text-amber-700" />
                    <span>Data & Integration Pattern</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {currentIndustry.dataGravity}
                  </p>
                </div>
              </div>

              {/* Recommended Tech Stack */}
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Recommended Production Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {currentService.technologies.slice(0, 6).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-white border border-amber-200/80 text-xs font-semibold text-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 5-Phase Execution Timeline Preview */}
              <div className="space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Phased Delivery Milestones ({currentScale.duration})
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                  {currentService.processSteps.map((step) => (
                    <div
                      key={step.stepNumber}
                      className="rounded-xl bg-white border border-amber-200/70 p-3 space-y-1"
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono-tabular">
                        <span className="font-bold text-amber-800 uppercase">
                          {step.phase}
                        </span>
                        <span className="text-slate-400">{step.stepNumber}</span>
                      </div>
                      <p className="text-xs font-bold text-slate-900 line-clamp-2 leading-snug">
                        {step.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Bar */}
              <div className="pt-3 border-t border-amber-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-700">
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-amber-700" />
                    {currentScale.podSize}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono-tabular font-bold text-slate-900">
                    <TrendingUp className="w-3.5 h-3.5 text-amber-700" />
                    {currentService.metrics[0].value} {currentService.metrics[0].label}
                  </span>
                </div>

                <a
                  href="#contact-section"
                  className="btn-primary-gold inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold rounded-xl whitespace-nowrap shrink-0"
                >
                  <span>Request This Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
