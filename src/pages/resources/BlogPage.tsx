import React, { useState } from 'react';
import { Link } from 'react-router';
import { BookOpen, ArrowRight, Clock, Tag, ChevronRight, Sparkles } from 'lucide-react';
import { SEOHead } from '../../components/SEOHead';

export const BlogPage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const posts = [
    {
      id: 'omnichannel-architecture',
      title: 'Why Email and WhatsApp Belong in the Same Operating Loop',
      excerpt: 'Static newsletters are hitting deliverability ceilings. Here is how modern brands bridge unread emails into high-converting WhatsApp conversations.',
      tag: 'Architecture',
      date: 'September 2026',
      readTime: '6 min read'
    },
    {
      id: 'whatsapp-green-tick',
      title: 'The 2026 Guide to Meta Official Business Account (Green Tick) Verification',
      excerpt: 'Step-by-step checklist to verify your brand domain, register legal entity docs, and unlock tier-unlimited WhatsApp messaging.',
      tag: 'WhatsApp',
      date: 'September 2026',
      readTime: '8 min read'
    },
    {
      id: 'sub-second-email-api',
      title: 'Architecting a Sub-650ms Transactional Email Relay Across Global Edges',
      excerpt: 'A deep dive into TCP connection pooling, multi-region MTA dispatch, and server-side Liquid template compilation at scale.',
      tag: 'Engineering',
      date: 'August 2026',
      readTime: '11 min read'
    },
    {
      id: 'meta-capi-attribution',
      title: 'How Meta Conversions API (CAPI) Closes the Loop on WhatsApp Commerce',
      excerpt: 'Eliminate blind ad spend. Feed in-chat purchases back to Meta algorithms to lower acquisition cost per purchase.',
      tag: 'Growth',
      date: 'August 2026',
      readTime: '7 min read'
    }
  ];

  const filtered = selectedTag === 'all' 
    ? posts 
    : posts.filter(p => p.tag.toLowerCase() === selectedTag.toLowerCase());

  return (
    <div className="bg-white text-slate-900">
      <SEOHead 
        title="Engineering, Growth & Product Blog — CocoonMail"
        description="Deep dives into omnichannel marketing automation, WhatsApp Business API architecture, sub-second transactional delivery, and conversational commerce."
      />

      {/* Header */}
      <section className="pt-14 pb-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>CocoonMail Engineering &amp; Growth Insights</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">The Modern Engagement Blog</h1>
          <p className="text-base text-slate-600 max-w-2xl">
            Technical breakdowns, deliverability architectures, and growth tactics written by engineers and product leaders.
          </p>

          <div className="flex gap-2 pt-2 text-xs font-medium">
            {(['all', 'architecture', 'whatsapp', 'engineering', 'growth'] as const).map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-lg capitalize transition-colors cursor-pointer ${
                  selectedTag === tag ? 'bg-indigo-600 text-white shadow-sm' : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((post) => (
            <article 
              key={post.id}
              className="p-8 rounded-3xl border border-slate-200 hover:border-indigo-300 hover:shadow-xl transition-all flex flex-col justify-between group bg-white"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                  <span className="text-indigo-600 font-bold">{post.tag}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.date}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-indigo-600 group-hover:text-indigo-700">
                <span>Read Full Article</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
