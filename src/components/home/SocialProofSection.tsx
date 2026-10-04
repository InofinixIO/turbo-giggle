import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  TrendingUp, 
  Lock, 
  Globe2,
  Sparkles,
  Zap
} from 'lucide-react';

export const SocialProofSection: React.FC = () => {
  const trustStats = [
    { value: '99.8%', label: 'Inbox Deliverability', sub: 'Verified across Gmail, Yahoo & Outlook' },
    { value: '98.4%', label: 'WhatsApp Open Rate', sub: 'Average open rate within 15 minutes' },
    { value: '14.8%', label: 'Conversation Conversion', sub: 'In-chat catalog to payment completed' },
    { value: 'Sub-45ms', label: 'API Dispatch Latency', sub: 'Global edge transactional delivery' },
  ];

  const caseStudies = [
    {
      sector: 'D2C Footwear & Apparel',
      headline: 'Automating VIP Drops & WhatsApp Checkouts',
      challenge: 'High cart abandonment on mobile web checkout flows and declining email open rates.',
      outcome: '+310% in-chat checkout revenue within 60 days using Meta Ads to WhatsApp with instant Razorpay payments.',
      metric: '3.2x ROAS'
    },
    {
      sector: 'High-Growth B2B SaaS',
      headline: 'Consolidating Email Campaigns & Product Alerts',
      challenge: 'Managing fragmented third-party SMTP and customer support chat across multiple vendors.',
      outcome: 'Unified transactional receipts, weekly product digests, and renewal warnings under one API with 99.9% uptime.',
      metric: '64% Cost Reduction'
    },
    {
      sector: 'Healthcare & Diagnostic Labs',
      headline: 'Automated Patient Notifications & Fast Results',
      challenge: 'High clinic no-show rates and delayed lab report downloads via SMS links.',
      outcome: 'Real-time verified WhatsApp PDF lab report delivery with automated interactive two-way confirmation.',
      metric: '82% Fewer No-Shows'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Enterprise Reliability & Trust</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance mb-3">
            Trusted by growing businesses.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-balance">
            Infrastructure engineered for zero-loss message delivery, global data sovereignty, and audited enterprise security.
          </p>
        </div>

        {/* Quantified Performance Metrics Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustStats.map((stat, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
              <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-blue-600 mt-1">{stat.label}</div>
              <div className="text-[11px] text-slate-500 mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Partner & Security Certifications Strip */}
        <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-wrap items-center justify-around gap-6 mb-16">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-400" />
            <span className="text-xs font-bold">Official Meta Business Solution Partner</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-blue-400" />
            <span className="text-xs font-bold">SOC 2 Type II Certified & GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-violet-400" />
            <span className="text-xs font-bold">ISO 27001 Security Standard Ready</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe2 className="w-5 h-5 text-teal-400" />
            <span className="text-xs font-bold">Multi-Region Data Residency (India & EU)</span>
          </div>
        </div>

        {/* Case Studies */}
        <div>
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6 text-center">
            Demonstrated Customer Impact
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
                    {cs.sector}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-1 mb-2">
                    {cs.headline}
                  </h3>
                  <p className="text-xs text-slate-500 mb-3">
                    <strong className="text-slate-700">Challenge:</strong> {cs.challenge}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong className="text-slate-800">Outcome:</strong> {cs.outcome}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Measured Impact:</span>
                  <span className="font-bold text-emerald-600 text-sm bg-emerald-50 px-2 py-0.5 rounded">
                    {cs.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
