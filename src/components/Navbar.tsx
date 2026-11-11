import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { AppLink, useRouter } from '../context/RouterContext';
import { MEGA_MENU_CATEGORIES } from '../data/megaMenuServicesData';

export const Navbar: React.FC = () => {
  const { pathname } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const dropdownPanelRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  // Smooth GSAP animation when Services 5-Column Mega-Menu opens
  useEffect(() => {
    const panel = dropdownPanelRef.current;
    if (!panel || !servicesDropdownOpen) return;

    const cols = panel.querySelectorAll('.gsap-mega-col');
    gsap.killTweensOf([panel, cols]);

    gsap.fromTo(
      panel,
      { autoAlpha: 0, y: 10 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.24,
        ease: 'power3.out',
      }
    );

    if (cols.length > 0) {
      gsap.fromTo(
        cols,
        { autoAlpha: 0, y: 12 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.28,
          stagger: 0.045,
          ease: 'power2.out',
        }
      );
    }
  }, [servicesDropdownOpen]);

  const handleServicesMouseEnter = () => {
    if (closeTimeoutRef.current !== null) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    closeTimeoutRef.current = window.setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services', hasDropdown: true },
    { label: 'Success Stories', href: '/stories' },
    { label: 'Blog', href: '/blog' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white/95 backdrop-blur-md ${
        scrolled
          ? 'border-b border-slate-200/90 shadow-xs'
          : 'border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8 relative">
        {/* Zone 1: Clean 3D Golden Cube Emblem + Wordmark */}
        <AppLink
          href="/"
          className="inline-flex items-center gap-3 text-lg sm:text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0"
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
            <path
              d="M20 4.5L34.5 12.8L20 20.8L5.5 12.8L20 4.5Z"
              fill="#FDE047"
            />
            <path
              d="M5.5 14.5L19 22.2V35.8L5.5 28V14.5Z"
              fill="#F5C400"
            />
            <path
              d="M34.5 14.5L21 22.2V35.8L34.5 28V14.5Z"
              fill="#D97706"
            />
            <path
              d="M6.2 13.4L20 21.3L33.8 13.4M20 21.3V35.2"
              stroke="#FFFFFF"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Vorombetech Solutions</span>
        </AppLink>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600"
        >
          {navItems.map((item) => {
            const active = isActive(item.href);

            if (item.hasDropdown) {
              return (
                <div
                  key={item.href}
                  className="static"
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  <AppLink
                    href={item.href}
                    aria-expanded={servicesDropdownOpen}
                    className={`py-1 inline-flex items-center gap-1 transition-colors whitespace-nowrap shrink-0 border-b-2 ${
                      active || servicesDropdownOpen
                        ? 'text-slate-900 font-bold border-[#f5c400]'
                        : 'text-slate-600 border-transparent hover:text-slate-900'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        servicesDropdownOpen ? 'rotate-180 text-amber-700' : ''
                      }`}
                    />
                  </AppLink>

                  {/* Full-Width 5-Column Official Vorombetech Services Mega-Menu */}
                  {servicesDropdownOpen && (
                    <div className="absolute left-0 right-0 top-full pt-1 z-50 px-4 sm:px-6 lg:px-8">
                      <div
                        ref={dropdownPanelRef}
                        className="bg-white rounded-2xl border border-slate-200/95 shadow-2xl p-6 lg:p-8"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
                          {MEGA_MENU_CATEGORIES.map((category) => (
                            <div key={category.title} className="gsap-mega-col space-y-3">
                              <h3 className="text-sm sm:text-[15px] font-bold tracking-wide text-slate-900 uppercase leading-snug pb-1">
                                {category.title}
                              </h3>
                              <ul className="divide-y divide-slate-200/80 border-b border-slate-200/80">
                                {category.items.map((sub) => {
                                  const isSubActive = pathname === `/services/${sub.slug}`;
                                  return (
                                    <li key={sub.slug}>
                                      <AppLink
                                        href={`/services/${sub.slug}`}
                                        onClick={() => setServicesDropdownOpen(false)}
                                        className={`block py-2.5 text-[11px] sm:text-xs font-semibold tracking-wide uppercase transition-colors leading-snug ${
                                          isSubActive
                                            ? 'text-amber-700 bg-[#fffbeb] px-2 rounded-md font-bold'
                                            : 'text-slate-700 hover:text-amber-700 hover:translate-x-0.5 transition-transform'
                                        }`}
                                      >
                                        {sub.label}
                                      </AppLink>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {/* Bottom Mega-Menu Action Footer */}
                        <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs">
                          <span className="text-slate-500 font-medium">
                            Vorombetech Solutions · Cloud, Information Security, Digitalization, IT & SaaS Practices
                          </span>
                          <AppLink
                            href="/services"
                            onClick={() => setServicesDropdownOpen(false)}
                            className="inline-flex items-center gap-1.5 font-bold text-slate-900 hover:text-amber-700"
                          >
                            <span>Explore All Services Overview</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </AppLink>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <AppLink
                key={item.href}
                href={item.href}
                className={`py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 ${
                  active
                    ? 'text-slate-900 font-bold border-[#f5c400]'
                    : 'text-slate-600 border-transparent hover:text-slate-900'
                }`}
              >
                {item.label}
              </AppLink>
            );
          })}
        </nav>

        {/* Zone 3: Primary CTA Button */}
        <div className="flex items-center gap-3 shrink-0">
          <AppLink
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold bg-[#166534] rounded-xl whitespace-nowrap shrink-0"
          >
            <span>Get Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </AppLink>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-1.5 shadow-lg max-h-[82vh] overflow-y-auto">
          {navItems.map((item) => {
            const active = isActive(item.href);

            if (item.hasDropdown) {
              return (
                <div key={item.href} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <AppLink
                      href={item.href}
                      className={`flex-1 py-2.5 px-3.5 rounded-xl text-base font-medium transition-colors ${
                        active
                          ? 'bg-[#fffbeb] text-slate-900 font-bold'
                          : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                    >
                      {item.label}
                    </AppLink>
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((prev) => !prev)}
                      aria-expanded={mobileServicesOpen}
                      aria-label="Toggle services submenu"
                      className="p-2.5 rounded-xl text-slate-600 hover:bg-slate-100 cursor-pointer"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileServicesOpen ? 'rotate-180 text-amber-700' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {mobileServicesOpen && (
                    <div className="pl-4 pr-2 py-2 space-y-4 border-l-2 border-amber-200 ml-3">
                      {MEGA_MENU_CATEGORIES.map((category) => (
                        <div key={category.title} className="space-y-1">
                          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900 px-2">
                            {category.title}
                          </p>
                          <div className="divide-y divide-slate-100">
                            {category.items.map((sub) => (
                              <AppLink
                                key={sub.slug}
                                href={`/services/${sub.slug}`}
                                className="block py-2 px-2 text-xs font-semibold uppercase text-slate-600 hover:text-amber-700"
                              >
                                {sub.label}
                              </AppLink>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <AppLink
                key={item.href}
                href={item.href}
                className={`block py-2.5 px-3.5 rounded-xl text-base font-medium transition-colors ${
                  active
                    ? 'bg-[#fffbeb] text-slate-900 font-bold'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {item.label}
              </AppLink>
            );
          })}
          <div className="pt-2">
            <AppLink
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold bg-[#166534] rounded-xl"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </AppLink>
          </div>
        </div>
      )}
    </header>
  );
};
