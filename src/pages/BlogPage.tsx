import React, { useState, useMemo, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Search } from 'lucide-react';
import { AppLink } from '../context/RouterContext';
import { BLOG_POSTS_DATA } from '../data/blogData';
import { BlogCategory } from '../types';
import { VisualAsset } from '../components/VisualAsset';
import { ContactSection } from '../components/ContactSection';
import { RotatingText } from '../components/RotatingText';
import { useGsapPageAnimations } from '../hooks/useGsapAnimations';

const CATEGORIES: ('All' | BlogCategory)[] = [
  'All',
  'AI & Automation',
  'Salesforce',
  'Cybersecurity',
  'Digital Transformation',
  'Cloud Computing',
];

const POSTS_PER_PAGE = 6;

export const BlogPage: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | BlogCategory>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const pageRef = useRef<HTMLDivElement>(null);

  useGsapPageAnimations(pageRef, [selectedCategory, currentPage]);

  const filteredPosts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return BLOG_POSTS_DATA.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;
      if (!matchesCategory) return false;
      if (!q) return true;
      return (
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.author.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q)
      );
    });
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);

  const paginatedPosts = useMemo(() => {
    const startIndex = (safePage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredPosts, safePage]);

  const handleCategoryChange = (cat: 'All' | BlogCategory) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(searchInput);
    setCurrentPage(1);
  };

  return (
    <div ref={pageRef} className="pt-18 space-y-10 bg-white">
      {/* 1. LUMINOUS HERO BANNER WITH INLINE SEARCH BOX & SWEEPING CURVED ARCH */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f0fdf4] via-[#fffbeb]/35 to-white pt-16 pb-24 lg:pt-20 lg:pb-28">
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
              <span className="text-[#166534] font-bold">Blog</span>
            </nav>

            <h1
              className="gsap-hero-item font-extrabold tracking-tight text-slate-900"
              style={{ fontSize: 'clamp(2.25rem, 3.6vw, 3.25rem)' }}
            >
              Vorombetech Engineering Journal &{' '}
              <RotatingText
                phrases={[
                  'Architecture Playbooks',
                  'Salesforce & CPQ Guides',
                  'Enterprise RAG Blueprints',
                  'Zero-Trust Security Audits',
                ]}
                className="inline-block text-amber-700"
              />
            </h1>

            <p className="gsap-hero-item text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              In-depth technical blueprints written by our principal architects on Salesforce multi-org governance, deterministic enterprise RAG, zero-trust Kubernetes, and Cloud FinOps.
            </p>

            {/* Search Input + Button Box */}
            <form
              onSubmit={handleSearchSubmit}
              className="gsap-hero-item flex items-center justify-between bg-white border border-slate-300/90 rounded-full p-2 max-w-lg shadow-xs focus-within:border-[#166534] focus-within:ring-2 focus-within:ring-[#166534]/15 transition-all"
            >
              <label htmlFor="blog-search-input" className="sr-only">
                Search articles
              </label>
              <div className="flex items-center gap-2.5 w-full pl-3">
                <Search className="w-4 h-4 text-slate-400 shrink-0" />
                <input
                  id="blog-search-input"
                  type="search"
                  value={searchInput}
                  onChange={(e) => {
                    setSearchInput(e.target.value);
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  placeholder="Search articles, topics, or authors..."
                  className="w-full py-2 text-sm text-slate-900 placeholder:text-slate-400 bg-transparent focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="px-5 py-2.5 text-sm font-semibold text-white bg-[#166534] hover:bg-[#14532d] rounded-full transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Search
              </button>
            </form>
          </div>

          <div className="lg:col-span-5 gsap-hero-showcase">
            <VisualAsset
              theme="ai"
              title="Principal Architecture Research & Playbooks"
              subtitle="12 Technical Blueprints · Engineering Journal"
              aspectRatio="16:9"
              className="rounded-2xl ui-double-line-card"
            />
          </div>
        </div>

        {/* Sweeping Parabolic Curved Arch Transition */}
        <div
          aria-hidden="true"
          className="gsap-wave-arc pointer-events-none absolute inset-x-0 bottom-0 w-full overflow-hidden leading-none"
        >
          <svg
            viewBox="0 0 1440 84"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-10 sm:h-14 lg:h-16 preserve-3d"
            preserveAspectRatio="none"
          >
            <path
              d="M0 16C360 88 1080 88 1440 16V84H0V16Z"
              fill="#ffffff"
            />
            <path
              d="M0 16C360 88 1080 88 1440 16"
              stroke="#f5c400"
              strokeOpacity="0.4"
              strokeWidth="2"
            />
          </svg>
        </div>
      </section>

      {/* 2. CATEGORY FILTER & BLOG GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div
            role="tablist"
            aria-label="Filter articles by category"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white border border-slate-200/90 rounded-xl shadow-2xs"
          >
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                    active
                      ? 'bg-[#166534] text-white'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <p className="text-xs text-slate-500 font-mono-tabular">
            Showing {paginatedPosts.length} of {filteredPosts.length} articles (Page {safePage} of {totalPages})
          </p>
        </div>

        {paginatedPosts.length === 0 ? (
          <div className="rounded-2xl bg-white border border-slate-200 p-12 text-center space-y-4">
            <p className="text-lg font-bold text-slate-900">
              No matching engineering articles found
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchInput('');
                setSearchQuery('');
                setSelectedCategory('All');
                setCurrentPage(1);
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#166534] rounded-xl hover:bg-[#14532d] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="gsap-card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {paginatedPosts.map((post) => (
              <AppLink
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="gsap-card group rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-2xs hover:border-[#166534]/50 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <VisualAsset
                    theme={post.visualTheme}
                    title={post.title}
                    subtitle={post.category}
                    aspectRatio="4:3"
                    className="border-b border-slate-100"
                  />
                  <div className="p-6 space-y-3">
                    <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
                      <span className="font-bold text-[#166534]">{post.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{post.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="text-lg font-bold text-slate-900 group-hover:text-[#166534] transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs bg-[#f8f9fa]">
                  <div>
                    <p className="font-bold text-slate-800">{post.author}</p>
                    <p className="text-slate-500">{post.authorRole}</p>
                  </div>
                  <span className="font-bold text-[#166534] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform whitespace-nowrap">
                    Read <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </AppLink>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <nav
            aria-label="Blog pagination"
            className="mt-12 pt-8 border-t border-slate-200 flex items-center justify-center gap-2"
          >
            <button
              type="button"
              disabled={safePage <= 1}
              onClick={() => {
                setCurrentPage((p) => Math.max(1, p - 1));
                window.scrollTo({ top: 240, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1 px-3.5 py-2 text-xs font-semibold rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                type="button"
                onClick={() => {
                  setCurrentPage(pageNum);
                  window.scrollTo({ top: 240, behavior: 'smooth' });
                }}
                aria-current={pageNum === safePage ? 'page' : undefined}
                className={`w-10 h-10 text-xs font-mono-tabular font-bold rounded-xl transition-colors cursor-pointer ${
                  pageNum === safePage
                    ? 'bg-[#166534] text-white'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {pageNum}
              </button>
            ))}

            <button
              type="button"
              disabled={safePage >= totalPages}
              onClick={() => {
                setCurrentPage((p) => Math.min(totalPages, p + 1));
                window.scrollTo({ top: 240, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1 px-3.5 py-2 text-xs font-semibold rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </nav>
        )}
      </section>

      <ContactSection />
    </div>
  );
};
