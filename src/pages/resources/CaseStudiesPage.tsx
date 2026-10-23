import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowRight, CheckCircle2, ChevronRight, BarChart3, Building } from 'lucide-react';
import { SEOHead } from '../../components/SEOHead';

export const CaseStudiesPage: React.FC = () => {
  const [filterIndustry, setFilterIndustry] = useState<string>('all');

  const studies = [
    {
      id: 'd2c-apparel-ctwa',
      industry: 'ecommerce',
      industryLabel: 'D2C Retail & Apparel',
      headline: 'How an Omnichannel Retailer Scaled Return on Ad Spend to 4.8x via Click-to-WhatsApp',
      metric: '4.8x',
      metricLabel: 'Verified Closed-Loop ROAS',
      summary: 'By replacing high-bounce product landing pages with instant WhatsApp conversations powered by AI sizing assistance, cart completions jumped by 34% in 60 days.',
      highlights: ['Sub-1-second AI reply speed', 'Automated UPI in-chat checkout', 'Direct Meta CAPI conversion reporting']
    },
    {
      id: 'b2b-saas-activation',
      industry: 'saas',
      industryLabel: 'Cloud Developer Tools',
      headline: 'Reducing Day-1 Drop-Off and Accelerating Developer Onboarding to 54%',
      metric: '54%',
      metricLabel: 'Faster Project Activation',
      summary: 'Connecting product event telemetry with sub-second transactional authentication emails and automated milestone journey forks reduced trial abandonment significantly.',
      highlights: ['612ms median delivery latency', 'Zero dropped OTP codes', 'Automated retention emails for dormant workspaces']
    },
    {
      id: 'luxury-property-leads',
      industry: 'real-estate',
      industryLabel: 'Premium Real Estate',
      headline: 'Boosting Weekend Site Visit Attendance by 3.4x with Automated Qualification',
      metric: '3.4x',
      metricLabel: 'Site Visit Attendance',
      summary: 'Engaging ad leads within 5 seconds on WhatsApp and delivering dynamic floorplan PDFs before scheduling weekend viewing slots resulted in higher qualified buyer show rates.',
      highlights: ['Sub-5s response speed', 'Interactive calendar booking', 'Automated senior broker handoff']
    }
  ];

  const filtered = filterIndustry === 'all' 
    ? studies 
    : studies.filter(s => s.industry === filterIndustry);

  return (
    <div className="bg-white text-slate-900">
      <SEOHead 
        title="Customer Case Studies & Verified Results — CocoonMail"
        description="See how growing brands, SaaS companies, and high-volume merchants achieve measurable business impact with CocoonMail's connected engagement platform."
      />

      <section className="pt-14 pb-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 uppercase tracking-wider">
            <TrendingUp className="w-4 h-4" />
            <span>Verified Results &amp; Benchmarks</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">Customer Case Studies</h1>
          <p className="text-base text-slate-600 max-w-2xl">
            Explore authentic workflow architectures and measurable performance metrics achieved across industries.
          </p>

          <div className="flex gap-2 pt-2 text-xs font-medium">
            {(['all', 'ecommerce', 'saas', 'real-estate'] as const).map((ind) => (
              <button
                key={ind}
                onClick={() => setFilterIndustry(ind)}
                className={`px-3 py-1.5 rounded-lg capitalize transition-colors cursor-pointer ${
                  filterIndustry === ind ? 'bg-indigo-600 text-white shadow-sm' : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
                }`}
              >
                {ind === 'all' ? 'All Industries' : ind}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {filtered.map((study) => (
          <div 
            key={study.id}
            className="p-8 sm:p-12 rounded-3xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-xl transition-all grid lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 font-mono">{study.industryLabel}</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">{study.headline}</h2>
              <p className="text-sm text-slate-600 leading-relaxed">{study.summary}</p>
              
              <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-700 font-medium">
                {study.highlights.map((h, i) => (
                  <span key={i} className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1 rounded-lg">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{h}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center space-y-2">
              <p className="text-4xl sm:text-5xl font-black text-indigo-600 font-mono">{study.metric}</p>
              <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">{study.metricLabel}</p>
              <p className="text-[11px] text-slate-400">Benchmarked over 90-day production run</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
