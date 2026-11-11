import React, { useState, useRef } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Play,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
} from 'lucide-react';
import { AppLink } from '../context/RouterContext';
import { BLOG_POSTS_DATA } from '../data/blogData';
import { COMPANY_INFO } from '../data/servicesData';
import { VisualAsset } from '../components/VisualAsset';
import { ContactSection } from '../components/ContactSection';
import { RotatingText } from '../components/RotatingText';
import { useGsapPageAnimations } from '../hooks/useGsapAnimations';

export const BlogDetailPage: React.FC<{ slug: string }> = ({ slug }) => {
  const pageRef = useRef<HTMLDivElement>(null);
  useGsapPageAnimations(pageRef, [slug]);
  const post =
    BLOG_POSTS_DATA.find((item) => item.slug === slug) || BLOG_POSTS_DATA[0];

  const [playingVideoIdx, setPlayingVideoIdx] = useState<number | null>(null);

  const recentPosts = BLOG_POSTS_DATA.filter(
    (item) => item.slug !== post.slug
  ).slice(0, 8);

  const relatedArticles = BLOG_POSTS_DATA.filter(
    (item) => item.slug !== post.slug && item.category === post.category
  )
    .concat(
      BLOG_POSTS_DATA.filter(
        (item) => item.slug !== post.slug && item.category !== post.category
      )
    )
    .slice(0, 3);

  return (
    <div ref={pageRef} className="pt-18 space-y-12">
      {/* ARTICLE HEADER (2-Column Layout with Medium Right-Side Image) */}
      <section className="relative overflow-hidden bg-white pt-12 pb-14 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-6 gsap-hero-item">
            <AppLink
              href="/blog"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#166534] hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Blog</span>
            </AppLink>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="gsap-hero-item flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500">
                <span className="font-bold text-[#166534]">{post.category}</span>
                <span aria-hidden="true">·</span>
                <span className="font-bold text-slate-900">{post.author}</span>
                <span className="text-slate-500">({post.authorRole})</span>
                <span aria-hidden="true">·</span>
                <RotatingText
                  phrases={[
                    `${post.date} · ${post.readTime}`,
                    'Principal Engineering Playbook',
                    'Production Architecture Blueprint',
                  ]}
                  className="inline-block font-bold text-amber-700"
                />
              </div>

              <h1
                className="font-extrabold tracking-tight text-slate-900 leading-tight"
                style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.85rem)' }}
              >
                {post.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {post.excerpt}
              </p>
            </div>

            <div className="lg:col-span-5">
              <VisualAsset
                theme={post.visualTheme}
                title={post.title}
                subtitle={`${post.category} · By ${post.author}`}
                aspectRatio="16:9"
                className="rounded-2xl w-full ui-double-line-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT (9 cols) + SIDEBAR (3 cols on desktop, stacks on mobile) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Article Body (9 columns on desktop) */}
          <article className="lg:col-span-9 space-y-6 bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/90 shadow-2xs">
            {post.content.map((block, index) => {
              switch (block.type) {
                case 'h2':
                  return (
                    <h2
                      key={index}
                      className="text-2xl sm:text-3xl font-bold text-slate-900 pt-6 pb-1 tracking-tight"
                    >
                      {block.text}
                    </h2>
                  );

                case 'h3':
                  return (
                    <h3
                      key={index}
                      className="text-xl font-bold text-slate-900 pt-4 pb-1"
                    >
                      {block.text}
                    </h3>
                  );

                case 'paragraph':
                  return (
                    <p
                      key={index}
                      className="text-base text-slate-700 leading-[1.75] max-w-[72ch]"
                    >
                      {block.text}
                    </p>
                  );

                case 'bulletList':
                  return (
                    <ul
                      key={index}
                      className="space-y-2.5 pl-1 py-2 max-w-[72ch]"
                    >
                      {block.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-base text-slate-700 leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#166534] shrink-0 mt-1.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );

                case 'numberedList':
                  return (
                    <ol
                      key={index}
                      className="space-y-3 pl-1 py-2 max-w-[72ch]"
                    >
                      {block.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3.5 text-base text-slate-700 leading-relaxed"
                        >
                          <span className="font-mono-tabular text-xs font-bold text-white bg-[#166534] w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                            0{i + 1}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ol>
                  );

                case 'image':
                  return (
                    <figure key={index} className="my-6 max-w-xl">
                      <VisualAsset
                        theme={block.visualTheme}
                        title={block.diagramLabel}
                        subtitle={block.alt}
                        aspectRatio="16:9"
                        className="rounded-xl border border-slate-200/90"
                      />
                      <figcaption className="text-xs text-slate-500 mt-2.5">
                        {block.caption}
                      </figcaption>
                    </figure>
                  );

                case 'blockquote':
                  return (
                    <blockquote
                      key={index}
                      className="my-6 rounded-2xl bg-[#fffbeb] border border-amber-200/90 p-6 sm:p-7 space-y-3 max-w-2xl"
                    >
                      <Quote className="w-6 h-6 text-amber-700" />
                      <p className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed">
                        “{block.quote}”
                      </p>
                      <footer className="text-xs font-bold text-amber-900">
                        — {block.attribution}
                      </footer>
                    </blockquote>
                  );

                case 'youtube':
                  return (
                    <div
                      key={index}
                      className="my-8 rounded-2xl overflow-hidden border border-amber-200/90 bg-[#fffbeb]"
                    >
                      <div className="aspect-video w-full relative flex flex-col justify-between p-6 sm:p-8">
                        {playingVideoIdx === index ? (
                          <iframe
                            className="absolute inset-0 w-full h-full"
                            src={`https://www.youtube-nocookie.com/embed/${block.videoId}?autoplay=1`}
                            title={block.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        ) : (
                          <>
                            <div className="flex items-center justify-between text-xs font-bold text-amber-900">
                              <span>Vorombetech Architecture Briefing Video</span>
                              <span className="font-mono-tabular">
                                Duration {block.duration}
                              </span>
                            </div>

                            <div className="my-auto space-y-4 max-w-xl">
                              <h4 className="text-lg sm:text-2xl font-extrabold text-slate-900">
                                {block.title}
                              </h4>
                              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                                {block.keyTakeaways.map((takeaway, tIdx) => (
                                  <li key={tIdx} className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
                                    <span>{takeaway}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="flex items-center gap-4">
                              <button
                                type="button"
                                onClick={() => setPlayingVideoIdx(index)}
                                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-[#166534] hover:bg-[#14532d] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                              >
                                <Play className="w-4 h-4 fill-current" />
                                <span>Watch Technical Walkthrough</span>
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  );

                default:
                  return null;
              }
            })}
          </article>

          {/* Sidebar (3 columns on desktop, stacks on mobile) */}
          <aside className="lg:col-span-3 space-y-6 lg:sticky lg:top-22">
            {/* Recent Posts (8 items) */}
            <div className="rounded-2xl bg-white border border-slate-200/90 p-5 space-y-4 shadow-2xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Recent Posts
                </h2>
                <span className="text-xs font-mono-tabular text-slate-400">
                  8 Articles
                </span>
              </div>

              <ul className="divide-y divide-slate-100">
                {recentPosts.map((recent, idx) => (
                  <li key={recent.slug} className="py-2.5 first:pt-0 last:pb-0">
                    <AppLink
                      href={`/blog/${recent.slug}`}
                      className="group block space-y-1"
                    >
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                        <span className="font-mono-tabular text-[#166534] font-bold">
                          0{idx + 1}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{recent.category}</span>
                      </div>
                      <p className="text-xs font-semibold text-slate-800 group-hover:text-[#166534] transition-colors line-clamp-2 leading-snug">
                        {recent.title}
                      </p>
                    </AppLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info Card */}
            <div className="rounded-2xl bg-[#fffbeb] border border-amber-200/90 p-5 space-y-4">
              <div className="space-y-3">
                <p className="text-[11px] font-bold uppercase tracking-wider text-amber-900">
                  Architecture Advisory
                </p>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  Speak with {post.author.split(' ')[0]}’s Practice Team
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Need a custom architecture review for {post.category}? Contact our Gurugram or US desk directly.
                </p>

                <div className="space-y-2.5 pt-2 text-xs text-slate-700 border-t border-amber-200/70">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-800 shrink-0 mt-0.5" />
                    <span>Udyog Vihar, Phase IV, Gurugram 122022</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono-tabular">
                    <Phone className="w-3.5 h-3.5 text-amber-800 shrink-0" />
                    <a href="tel:+14157040681" className="hover:text-amber-900 font-medium">
                      {COMPANY_INFO.usPhone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 font-mono-tabular">
                    <Phone className="w-3.5 h-3.5 text-amber-800 shrink-0" />
                    <a href="tel:+917303933635" className="hover:text-amber-900 font-medium">
                      {COMPANY_INFO.inPhone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-amber-800 shrink-0" />
                    <a
                      href={`mailto:${COMPANY_INFO.salesEmail}`}
                      className="hover:text-amber-900 font-medium"
                    >
                      {COMPANY_INFO.salesEmail}
                    </a>
                  </div>
                </div>

                <a
                  href="#contact-section"
                  className="mt-2 w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-[#166534] hover:bg-[#14532d] rounded-xl transition-colors"
                >
                  <span>Book Technical Review</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* RELATED ARTICLES (3 cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-200/80">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Related Engineering Articles
          </h2>
          <AppLink
            href="/blog"
            className="text-xs font-bold text-[#166534] hover:underline"
          >
            Browse all articles
          </AppLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedArticles.map((related) => (
            <AppLink
              key={related.slug}
              href={`/blog/${related.slug}`}
              className="group rounded-2xl bg-white border border-slate-200/90 overflow-hidden hover:border-[#166534]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <VisualAsset
                  theme={related.visualTheme}
                  title={related.title}
                  subtitle={related.category}
                  aspectRatio="4:3"
                  className="border-b border-slate-100"
                />
                <div className="p-5 space-y-2.5">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <span className="font-bold text-[#166534]">
                      {related.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{related.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#166534] transition-colors line-clamp-2">
                    {related.title}
                  </h3>
                </div>
              </div>
              <div className="px-5 pb-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>{related.author}</span>
                <span className="font-bold text-[#166534] inline-flex items-center gap-1">
                  Read <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </AppLink>
          ))}
        </div>
      </section>

      <ContactSection />
    </div>
  );
};
