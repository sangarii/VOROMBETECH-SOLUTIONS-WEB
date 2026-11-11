import React, { useState, useMemo } from 'react';
import {
  Phone,
  Mail,
  User,
  RefreshCw,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';
import { useTheme } from '../context/ThemeContext';

const CAPTCHA_CODES = ['VT8K4M', '9X2P7Q', 'G4R6N8', '5M9W2L', 'K7H3V6', '3P8D5F'];

export const ContactSection: React.FC<{ titleOverride?: string }> = ({ titleOverride }) => {
  const { palette } = useTheme();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [projectScope, setProjectScope] = useState('Salesforce Consulting');
  const [captchaIndex, setCaptchaIndex] = useState(0);
  const [captchaInput, setCaptchaInput] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const currentCaptcha = CAPTCHA_CODES[captchaIndex];

  const captchaSvgUri = useMemo(() => {
    const chars = currentCaptcha.split('');
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 52" width="180" height="52">
      <rect width="180" height="52" rx="10" fill="${palette.softBg}" stroke="${palette.borderTint}" stroke-width="1.5" />
      <path d="M 10 14 Q 60 42 170 18" stroke="${palette.primary}" stroke-width="1.4" fill="none" stroke-opacity="0.32" />
      <path d="M 14 40 Q 95 10 166 36" stroke="${palette.secondary}" stroke-width="1.2" fill="none" stroke-opacity="0.35" />
      <circle cx="42" cy="18" r="2" fill="${palette.primary}" fill-opacity="0.35" />
      <circle cx="128" cy="34" r="2.5" fill="${palette.primary}" fill-opacity="0.35" />
      ${chars
        .map((ch, idx) => {
          const x = 22 + idx * 24;
          const y = 33 + (idx % 2 === 0 ? -2 : 3);
          const rotate = idx % 2 === 0 ? -7 : 8;
          return `<text x="${x}" y="${y}" transform="rotate(${rotate}, ${x}, ${y})" fill="${palette.primary}" font-family="monospace" font-size="21" font-weight="800" letter-spacing="2">${ch}</text>`;
        })
        .join('')}
    </svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  }, [currentCaptcha, palette]);

  const handleRefreshCaptcha = () => {
    setCaptchaIndex((prev) => (prev + 1) % CAPTCHA_CODES.length);
    setCaptchaInput('');
    setErrorMessage(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!fullName.trim() || fullName.trim().length < 2) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMessage('Please enter a valid corporate email address.');
      return;
    }
    const phoneDigits = mobile.replace(/\D/g, '');
    if (phoneDigits.length < 7) {
      setErrorMessage('Please enter a valid mobile or direct phone number.');
      return;
    }
    if (captchaInput.trim().toUpperCase() !== currentCaptcha) {
      setErrorMessage('Security verification code does not match. Please try again.');
      return;
    }

    setSubmitted(true);
  };

  return (
    <section
      id="contact-section"
      aria-labelledby="contact-heading"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="relative rounded-2xl bg-white shadow-sm border border-slate-200/90 overflow-hidden">
        {/* Dynamic brand gradient accent strip on top */}
        <div className="h-2 w-full bg-gradient-to-r from-[#166534] via-[#15803d] to-emerald-500" />

        {/* Subtle architectural tech pattern background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(${palette.primary} 1px, transparent 1px), linear-gradient(to right, ${palette.primary} 1px, transparent 1px)`,
            backgroundSize: '24px 24px, 96px 96px',
          }}
        />

        {/* Decorative blurred circle (bottom-right quarter, 240px) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-12 right-12 w-[240px] h-[240px] rounded-full bg-[#166534]/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 -left-16 w-64 h-64 rounded-full bg-[#166534]/10 blur-3xl"
        />

        <div className="relative z-10 p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-8 lg:py-4">
            <div className="space-y-3">
              <p className="text-xs font-bold tracking-wider text-[#166534] uppercase">
                Get in touch
              </p>
              <h2
                id="contact-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight"
              >
                {titleOverride || 'Contact'}{' '}
                <span className="text-[#166534]">Us</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                Connect directly with our principal architects. We respond to all enterprise consultation inquiries within 4 business hours.
              </p>
            </div>

            {/* Contact Tiles — Phone & Mail Kept */}
            <div className="space-y-6 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#166534]/10 text-[#166534] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Direct Enterprise Hotlines
                  </h3>
                  <div className="text-sm text-slate-600 mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1 tabular-nums">
                    <a
                      href="tel:+14157040681"
                      className="hover:text-[#166534] font-medium transition-colors"
                    >
                      US: {COMPANY_INFO.usPhone}
                    </a>
                    <span aria-hidden="true" className="text-slate-300">
                      ·
                    </span>
                    <a
                      href="tel:+917303933635"
                      className="hover:text-[#166534] font-medium transition-colors"
                    >
                      IN: {COMPANY_INFO.inPhone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#166534]/10 text-[#166534] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Electronic Correspondence
                  </h3>
                  <div className="text-sm text-slate-600 mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <a
                      href={`mailto:${COMPANY_INFO.salesEmail}`}
                      className="hover:text-[#166534] font-medium transition-colors"
                    >
                      {COMPANY_INFO.salesEmail}
                    </a>
                    <span aria-hidden="true" className="text-slate-300">
                      ·
                    </span>
                    <a
                      href={`mailto:${COMPANY_INFO.supportEmail}`}
                      className="hover:text-[#166534] font-medium transition-colors"
                    >
                      {COMPANY_INFO.supportEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form Panel */}
          <div className="lg:col-span-6">
            <div className="bg-slate-100/80 rounded-2xl p-6 sm:p-8 border border-slate-200/80">
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#166534]/15 text-[#166534] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Consultation Request Confirmed
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-900">{fullName}</span>. Our principal architecture team has logged your inquiry for{' '}
                    <span className="font-semibold text-[#166534]">{projectScope}</span> and will contact you at{' '}
                    <span className="font-mono text-xs text-slate-800">{email}</span> within 4 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFullName('');
                      setEmail('');
                      setMobile('');
                      setCaptchaInput('');
                      handleRefreshCaptcha();
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#166534] bg-white border border-slate-300 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900">
                      Schedule Architecture Consultation
                    </h3>
                    <span className="text-xs text-slate-500">NDA Protected</span>
                  </div>

                  {/* Full Name input with user icon */}
                  <div>
                    <label
                      htmlFor="contact-fullname"
                      className="block text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        id="contact-fullname"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Rajeshwari Iyer"
                        className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#166534] transition-all"
                      />
                    </div>
                  </div>

                  {/* Email Address input with mail icon */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#166534] transition-all"
                      />
                    </div>
                  </div>

                  {/* Mobile Number input with phone icon + Practice selector */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label
                        htmlFor="contact-mobile"
                        className="block text-xs font-semibold text-slate-700 mb-1.5"
                      >
                        Mobile Number
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          id="contact-mobile"
                          type="tel"
                          required
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          placeholder="+1 415 555 0192"
                          className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#166534] transition-all tabular-nums"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-practice"
                        className="block text-xs font-semibold text-slate-700 mb-1.5"
                      >
                        Practice Area
                      </label>
                      <select
                        id="contact-practice"
                        value={projectScope}
                        onChange={(e) => setProjectScope(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-[#166534] transition-all"
                      >
                        <option value="Salesforce Consulting">Salesforce Consulting</option>
                        <option value="AI & Automation">AI & Automation</option>
                        <option value="Cybersecurity">Cybersecurity</option>
                        <option value="Cloud Computing">Cloud Computing</option>
                        <option value="Digital Transformation">Digital Transformation</option>
                        <option value="CRM Optimization">CRM Optimization</option>
                      </select>
                    </div>
                  </div>

                  {/* Image Captcha Section */}
                  <div className="pt-1">
                    <label
                      htmlFor="contact-captcha"
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-[#166534]" />
                      Security Verification
                    </label>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <div className="flex items-center gap-2 bg-white p-1.5 rounded-xl border border-slate-200 shrink-0">
                        <img
                          src={captchaSvgUri}
                          alt={`Security captcha code ${currentCaptcha}`}
                          referrerPolicy="no-referrer"
                          className="h-10 w-36 rounded-lg object-cover select-none"
                        />
                        <button
                          type="button"
                          onClick={handleRefreshCaptcha}
                          aria-label="Generate new security verification code"
                          title="Refresh code"
                          className="p-2 text-slate-500 hover:text-[#166534] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                        >
                          <RefreshCw className="w-4 h-4" />
                        </button>
                      </div>
                      <input
                        id="contact-captcha"
                        type="text"
                        required
                        value={captchaInput}
                        onChange={(e) => setCaptchaInput(e.target.value)}
                        placeholder="Enter 6-character code"
                        className="w-full px-3.5 py-2.5 text-sm font-mono uppercase tracking-wider bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 placeholder:font-sans placeholder:normal-case placeholder:tracking-normal focus:outline-none focus:border-[#166534] transition-all"
                      />
                    </div>
                  </div>

                  {errorMessage && (
                    <div
                      role="alert"
                      className="text-xs font-medium text-red-700 bg-red-50 border border-red-200 rounded-xl px-3.5 py-2.5"
                    >
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#166534] hover:bg-[#14532d] rounded-full shadow-xs transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <span>Get Free Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
