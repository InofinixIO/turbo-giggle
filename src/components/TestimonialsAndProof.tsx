import React from 'react';
import { ShieldCheck, Lock, Award, CheckCircle2, TrendingUp, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const TestimonialsAndProof: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Customer Proof Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 block mb-2">
            Verified Business Impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Trusted by over 4,200 fast-growing brands across 45 countries.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            See how forward-thinking growth teams run their customer engagement, sales automation, and multichannel commerce on CocoonMail.
          </p>
        </div>

        {/* Quantified Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-20">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/90 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 text-xs">
                  <span className="font-mono text-emerald-600 font-bold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    {t.metric}
                  </span>
                  <span className="text-slate-400 font-mono text-[11px]">{t.channel}</span>
                </div>

                <p className="mt-5 text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t.author}</h4>
                  <p className="text-xs text-slate-500">{t.role}, {t.company}</p>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">{t.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Security & Compliance Section */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 block">
                Bank-Grade Reliability
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Enterprise security, zero telecom downtime, and total privacy compliance.
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Whether processing millions of transactional OTP receipts or managing confidential patient follow-ups, your customer conversations are guarded by modern cryptographic standards.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span className="font-bold text-sm text-white block">Official Meta BSP</span>
                <p className="text-xs text-slate-400">Direct WhatsApp Cloud API infrastructure with Tier-1 routing.</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                <Lock className="w-5 h-5 text-indigo-400" />
                <span className="font-bold text-sm text-white block">SOC-2 Type II Certified</span>
                <p className="text-xs text-slate-400">Audited operational controls, access management, and pen testing.</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                <Award className="w-5 h-5 text-cyan-400" />
                <span className="font-bold text-sm text-white block">ISO 27001 &amp; GDPR</span>
                <p className="text-xs text-slate-400">Comprehensive customer data protection and opt-out compliance.</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                <TrendingUp className="w-5 h-5 text-amber-400" />
                <span className="font-bold text-sm text-white block">99.99% Uptime SLA</span>
                <p className="text-xs text-slate-400">Multi-region redundancy with real-time failover routing.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
