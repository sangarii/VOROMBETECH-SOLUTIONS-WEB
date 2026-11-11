import React, { useRef } from 'react';
import { AppLink } from '../context/RouterContext';
import { VisualAsset } from '../components/VisualAsset';
import { ContactSection } from '../components/ContactSection';
import { FaqSection } from '../components/FaqSection';
import { RotatingText } from '../components/RotatingText';
import { useGsapPageAnimations } from '../hooks/useGsapAnimations';

export const ContactPage: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  useGsapPageAnimations(pageRef);

  return (
    <div ref={pageRef} className="pt-18 space-y-6">
      <section className="relative overflow-hidden bg-white py-14 lg:py-18 ui-double-line-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <nav aria-label="Breadcrumb" className="gsap-hero-item flex items-center gap-2 text-xs text-slate-500">
              <AppLink href="/" className="hover:text-[#166534] transition-colors">
                Home
              </AppLink>
              <span aria-hidden="true">/</span>
              <span className="text-[#166534] font-bold">Get in Touch · Contact us</span>
            </nav>

            <h1
              className="gsap-hero-item font-extrabold tracking-tight text-slate-900"
              style={{ fontSize: 'clamp(2.25rem, 3.6vw, 3.25rem)' }}
            >
              Just one step away to your{' '}
              <RotatingText
                phrases={[
                  'digital success',
                  'Cloud Transformation',
                  'SaaS & CRM Excellence',
                  'Information Security Compliance',
                ]}
                className="inline-block text-amber-700"
              />
            </h1>

            <p className="gsap-hero-item text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Connect with Vorombetech Solutions via our US (+1 415 7040681) and India (+91 7303933635) consulting desks or by email at info@vorombetech.com and support@vorombetech.com.
            </p>
          </div>

          <div className="lg:col-span-5 gsap-hero-showcase">
            <VisualAsset
              theme="cloud"
              title="Get in Touch · Vorombetech Solutions"
              subtitle="US +1 415 7040681 · IN +91 7303933635"
              aspectRatio="16:9"
              className="rounded-2xl ui-double-line-card"
            />
          </div>
        </div>
      </section>

      <ContactSection />

      <FaqSection />
    </div>
  );
};
