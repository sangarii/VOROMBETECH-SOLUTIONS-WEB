import React from 'react';
import { Phone, Mail, ArrowUpRight } from 'lucide-react';
import { AppLink } from '../context/RouterContext';
import { COMPANY_INFO } from '../data/servicesData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#161d2a] text-slate-200 relative overflow-hidden mt-12 border-t-2 border-[#f5c400]">
      {/* Subtle architectural dot-grid pattern overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(#f5c400 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '28px 28px, 112px 112px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-700/80">
          {/* Column 1: Official Company Info */}
          <div className="lg:col-span-4 space-y-4">
            <AppLink
              href="/"
              className="inline-flex items-center gap-3 text-xl font-extrabold tracking-tight text-white"
            >
              <svg
                width="34"
                height="34"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="shrink-0"
              >
                <defs>
                  <linearGradient id="footer-gold-top" x1="6" y1="5" x2="34" y2="20" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FEF08A" />
                    <stop offset="50%" stopColor="#FDE047" />
                    <stop offset="100%" stopColor="#F5C400" />
                  </linearGradient>
                  <linearGradient id="footer-gold-left" x1="5" y1="14" x2="20" y2="36" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FACC15" />
                    <stop offset="100%" stopColor="#EAB308" />
                  </linearGradient>
                  <linearGradient id="footer-gold-right" x1="20" y1="15" x2="35" y2="35" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#EAB308" />
                    <stop offset="100%" stopColor="#B45309" />
                  </linearGradient>
                </defs>
                <path
                  d="M20 4.5L34.5 12.8L20 20.8L5.5 12.8L20 4.5Z"
                  fill="url(#footer-gold-top)"
                />
                <path
                  d="M5.5 14.5L19 22.2V35.8L5.5 28V14.5Z"
                  fill="url(#footer-gold-left)"
                />
                <path
                  d="M34.5 14.5L21 22.2V35.8L34.5 28V14.5Z"
                  fill="url(#footer-gold-right)"
                />
                <path
                  d="M6.2 13.4L20 21.3L33.8 13.4M20 21.3V35.2"
                  stroke="#0f172a"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{COMPANY_INFO.name}</span>
            </AppLink>
            <p className="text-xs font-bold uppercase tracking-wider text-[#f5c400]">
              IT Consulting Firm
            </p>
            <p className="text-sm text-slate-200/90 leading-relaxed max-w-sm">
              Vorombetech Solutions is an IT Consulting Firm. It is an innovative organization that empowers businesses to provide rich & seamless experiences resulting in high operational excellence and efficiency.
            </p>
            <div className="pt-1 flex items-center gap-2.5">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-[#18181b] hover:bg-[#f5c400] px-3.5 py-2 rounded-xl bg-white/10 border border-white/20 hover:border-[#f5c400] transition-all"
              >
                LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-[#18181b] hover:bg-[#f5c400] px-3.5 py-2 rounded-xl bg-white/10 border border-white/20 hover:border-[#f5c400] transition-all"
              >
                X / Twitter <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div className="lg:col-span-2 space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#f5c400]">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <AppLink href="/" className="text-slate-200 hover:text-[#f5c400] font-medium transition-colors">
                  Home
                </AppLink>
              </li>
              <li>
                <AppLink href="/about" className="text-slate-200 hover:text-[#f5c400] font-medium transition-colors">
                  About Us
                </AppLink>
              </li>
              <li>
                <AppLink href="/services" className="text-slate-200 hover:text-[#f5c400] font-medium transition-colors">
                  Services
                </AppLink>
              </li>
              <li>
                <AppLink href="/stories" className="text-slate-200 hover:text-[#f5c400] font-medium transition-colors">
                  Success Stories
                </AppLink>
              </li>
              <li>
                <AppLink href="/blog" className="text-slate-200 hover:text-[#f5c400] font-medium transition-colors">
                  Blog
                </AppLink>
              </li>
              <li>
                <AppLink href="/contact" className="text-slate-200 hover:text-[#f5c400] font-medium transition-colors">
                  Get In Touch
                </AppLink>
              </li>
            </ul>
          </div>

          {/* Column 3: Official Solution Links */}
          <div className="lg:col-span-3 space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#f5c400]">
              Solution
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <AppLink
                  href="/services/enterprise-web-application-development"
                  className="text-slate-200 hover:text-[#f5c400] font-medium transition-colors"
                >
                  Digitalization
                </AppLink>
              </li>
              <li>
                <AppLink
                  href="/services/cloud-consultancy"
                  className="text-slate-200 hover:text-[#f5c400] font-medium transition-colors"
                >
                  Cloud Services
                </AppLink>
              </li>
              <li>
                <AppLink
                  href="/services/salesforce-consulting"
                  className="text-slate-200 hover:text-[#f5c400] font-medium transition-colors"
                >
                  SaaS
                </AppLink>
              </li>
              <li>
                <AppLink
                  href="/services/it-consulting-service"
                  className="text-slate-200 hover:text-[#f5c400] font-medium transition-colors"
                >
                  IT Services
                </AppLink>
              </li>
              <li>
                <AppLink
                  href="/services/iso-27001-isms"
                  className="text-slate-200 hover:text-[#f5c400] font-medium transition-colors"
                >
                  Compliance consulting
                </AppLink>
              </li>
            </ul>
          </div>

          {/* Column 4: Get In Touch Details */}
          <div className="lg:col-span-3 space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#f5c400]">
              Get In Touch
            </h3>
            <div className="space-y-3.5 text-sm text-slate-200">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#f5c400]/15 border border-[#f5c400]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-[#f5c400]" />
                </div>
                <div className="space-y-1 tabular-nums">
                  <div>
                    <span className="text-slate-400 font-semibold">(US) </span>
                    <a href="tel:+14157040681" className="text-white hover:text-[#f5c400] font-medium transition-colors">
                      {COMPANY_INFO.usPhone}
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-400 font-semibold">(IN) </span>
                    <a href="tel:+917303933635" className="text-white hover:text-[#f5c400] font-medium transition-colors">
                      {COMPANY_INFO.inPhone}
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#f5c400]/15 border border-[#f5c400]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-[#f5c400]" />
                </div>
                <div className="space-y-1">
                  <div>
                    <a
                      href={`mailto:${COMPANY_INFO.salesEmail}`}
                      className="text-white hover:text-[#f5c400] font-medium transition-colors"
                    >
                      {COMPANY_INFO.salesEmail}
                    </a>
                  </div>
                  <div>
                    <a
                      href={`mailto:${COMPANY_INFO.supportEmail}`}
                      className="text-white hover:text-[#f5c400] font-medium transition-colors"
                    >
                      {COMPANY_INFO.supportEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>
            © Copyright Vorombetech Solutions. All Rights Reserved.
          </p>
          <p className="text-slate-300">
            Design and Developed by: <span className="text-[#f5c400] font-semibold">Vorombetech Solutions</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
