import React from 'react';
import { Link } from 'react-router';
import { FileText, ArrowRight, ShieldCheck, Download, ChevronRight, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../../components/SEOHead';

export const GuidesPage: React.FC = () => {
  const guides = [
    {
      id: 'whatsapp-bsp-onboarding',
      title: 'WhatsApp Business API Onboarding Playbook',
      desc: 'Everything you need to provision your official Meta Cloud API number, register your display name, and avoid messaging rate limit throttling.',
      level: 'Essential',
      pages: '18 pages PDF',
      color: 'border-emerald-200 hover:border-emerald-400'
    },
    {
      id: 'deliverability-handbook',
      title: 'The Enterprise Email Deliverability Handbook',
      desc: 'Technical guide to SPF alignment, cryptographic DKIM rotation, strict DMARC enforcement, and custom return-path configuration.',
      level: 'Technical',
      pages: '24 pages PDF',
      color: 'border-blue-200 hover:border-blue-400'
    },
    {
      id: 'ctwa-playbook',
      title: 'Click-to-WhatsApp Ads Masterclass',
      desc: 'Campaign setup blueprints for Facebook and Instagram feeds, pre-filled referral parameter tracking, and offline CAPI revenue feedback loops.',
      level: 'Growth',
      pages: '14 pages PDF',
      color: 'border-rose-200 hover:border-rose-400'
    },
    {
      id: 'cart-recovery-blueprints',
      title: 'Omnichannel Cart Recovery Workflows',
      desc: 'Visual journey recipes blending timing delays, email product carousels, WhatsApp conversational prompts, and dynamic coupon codes.',
      level: 'Automation',
      pages: '12 pages PDF',
      color: 'border-indigo-200 hover:border-indigo-400'
    }
  ];

  return (
    <div className="bg-white text-slate-900">
      <SEOHead 
        title="Implementation Guides & Tactical Playbooks — CocoonMail"
        description="Comprehensive guides on WhatsApp Business API setup, DMARC and DKIM email deliverability, Click-to-WhatsApp ad optimization, and abandoned cart recovery."
      />

      <section className="pt-14 pb-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            <span>Implementation Playbooks</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">Tactical Playbooks &amp; Guides</h1>
          <p className="text-base text-slate-600 max-w-2xl">
            Step-by-step technical blueprints for marketing teams, developers, and deliverability specialists.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {guides.map((g) => (
            <div 
              key={g.id}
              className={`p-8 rounded-3xl border ${g.color} bg-white hover:shadow-xl transition-all flex flex-col justify-between group`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-mono px-2.5 py-1 rounded bg-slate-100 text-slate-700">{g.level}</span>
                  <span className="text-xs text-slate-400">{g.pages}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{g.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{g.desc}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-indigo-600">
                <span className="flex items-center gap-1.5"><Download className="w-4 h-4" /> Download PDF Guide</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
