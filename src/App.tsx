/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { StoriesPage } from './pages/StoriesPage';
import { StoryDetailPage } from './pages/StoryDetailPage';
import { BlogPage } from './pages/BlogPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { SERVICES_DATA } from './data/servicesData';
import { SUCCESS_STORIES_DATA } from './data/storiesData';
import { BLOG_POSTS_DATA } from './data/blogData';

const RouteView: React.FC = () => {
  const { pathname } = useRouter();

  useEffect(() => {
    let pageTitle = 'Vorombetech Solutions — Enterprise IT & Cloud Consulting';
    let pageDescription =
      'Your Trusted Technology Partner. Enterprise consulting in Salesforce, AI & Automation, Cybersecurity, Cloud Computing, and Digital Transformation.';

    if (pathname === '/services') {
      pageTitle = 'Enterprise Services — Vorombetech Solutions';
      pageDescription =
        'Explore our 6 specialized enterprise practices: Salesforce Consulting, AI & Automation, Cybersecurity, Cloud Computing, Digital Transformation, and CRM Optimization.';
    } else if (pathname.startsWith('/services/')) {
      const slug = pathname.replace('/services/', '');
      const service = SERVICES_DATA.find((s) => s.slug === slug);
      if (service) {
        pageTitle = `${service.title} — Vorombetech Solutions`;
        pageDescription = service.shortDescription;
      }
    } else if (pathname === '/stories') {
      pageTitle = 'Client Success Stories — Vorombetech Solutions';
      pageDescription =
        'Audited enterprise case studies and quantified outcomes across BFSI, Healthcare, SaaS, and E-commerce.';
    } else if (pathname.startsWith('/stories/')) {
      const slug = pathname.replace('/stories/', '');
      const story = SUCCESS_STORIES_DATA.find((s) => s.slug === slug);
      if (story) {
        pageTitle = `${story.clientName} Case Study — Vorombetech Solutions`;
        pageDescription = story.summary;
      }
    } else if (pathname === '/blog') {
      pageTitle = 'Engineering Blog & Architecture Playbooks — Vorombetech Solutions';
      pageDescription =
        'Technical blueprints by our principal architects on Salesforce, Enterprise RAG, Zero-Trust Security, and Cloud FinOps.';
    } else if (pathname.startsWith('/blog/')) {
      const slug = pathname.replace('/blog/', '');
      const post = BLOG_POSTS_DATA.find((p) => p.slug === slug);
      if (post) {
        pageTitle = `${post.title} — Vorombetech Solutions`;
        pageDescription = post.excerpt;
      }
    } else if (pathname === '/about') {
      pageTitle = 'About Us — Vorombetech Solutions';
      pageDescription =
        'Learn about Vorombetech Solutions, headquartered in Udyog Vihar, Gurugram with US & India enterprise delivery pods.';
    } else if (pathname === '/contact') {
      pageTitle = 'Contact Us — Vorombetech Solutions';
      pageDescription =
        'Schedule a free architecture consultation with Vorombetech Solutions in Gurugram and San Francisco.';
    }

    document.title = pageTitle;
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute('content', pageDescription);
    const ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (ogTitleMeta) ogTitleMeta.setAttribute('content', pageTitle);
    const ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (ogDescMeta) ogDescMeta.setAttribute('content', pageDescription);
  }, [pathname]);

  const renderPage = () => {
    if (pathname === '/' || pathname === '') {
      return <HomePage />;
    }
    if (pathname === '/services') {
      return <ServicesPage />;
    }
    if (pathname.startsWith('/services/')) {
      const slug = pathname.replace('/services/', '');
      return <ServiceDetailPage slug={slug} />;
    }
    if (pathname === '/stories') {
      return <StoriesPage />;
    }
    if (pathname.startsWith('/stories/')) {
      const slug = pathname.replace('/stories/', '');
      return <StoryDetailPage slug={slug} />;
    }
    if (pathname === '/blog') {
      return <BlogPage />;
    }
    if (pathname.startsWith('/blog/')) {
      const slug = pathname.replace('/blog/', '');
      return <BlogDetailPage slug={slug} />;
    }
    if (pathname === '/about') {
      return <AboutPage />;
    }
    if (pathname === '/contact') {
      return <ContactPage />;
    }
    return <HomePage />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa] text-slate-900">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1"
        >
          {renderPage()}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider>
        <RouteView />
      </RouterProvider>
    </ThemeProvider>
  );
}
