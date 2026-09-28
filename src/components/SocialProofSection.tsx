import React from 'react';
import { 
  Building2, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  Lock,
  Server
} from 'lucide-react';

interface SocialProofSectionProps {
  onOpenStartFree: () => void;
  onOpenBookDemo: () => void;
}

export const SocialProofSection: React.FC<SocialProofSectionProps> = ({
  onOpenStartFree,
  onOpenBookDemo
}) => {
  // Brand categories representing growing businesses using the platform
  const brandLogos = [
    { name: 'Kalyan Essentials', sector: 'Direct-to-Consumer' },
    { name: 'OmniCloud Labs', sector: 'B2B SaaS' },
    { name: 'Zenith Retail', sector: 'Omnichannel Fashion' },
    { name: 'MedPulse Health', sector: 'Clinical Healthcare' },
    { name: 'EduSphere', sector: 'EdTech' },
    { name: 'UrbanNest Realty', sector: 'Real Estate' }
  ];

  const caseStudies = [
    {
      company: 'D2C Streetwear & Footwear',
      challenge: 'High cart abandonment on website and high cost per lead from Instagram ads.',
      solution: 'Replaced web landing forms with Click-to-WhatsApp ads, AI size concierge, and 1-tap in-chat UPI checkout.',
      metrics: [
        { label: 'Attributed ROAS', value: '7.84x' },
        { label: 'Cart Recovery', value: '+38.2%' },
        { label: 'Checkout Time', value: '11.8s' }
      ]
    },
    {
      company: 'B2B SaaS & Developer Cloud',
      challenge: 'Low onboarding email engagement and dropped trial-to-paid activations.',
      solution: 'Automated dual-channel workflow combining high-deliverability transactional email with instant WhatsApp milestone notifications.',
      metrics: [
        { label: 'Inbox Placement', value: '99.8%' },
        { label: 'Activation Rate', value: '3.4x' },
        { label: 'API P99 Latency', value: '16ms' }
      ]
    },
    {
      company: 'National Diagnostic Clinics',
      challenge: 'High patient appointment no-show rates and delays in report delivery.',
      solution: 'Automated WhatsApp confirmation sequence with calendar invite, instant clinic directions, and password-protected PDF report delivery.',
      metrics: [
        { label: 'No-Show Drop', value: '-78%' },
        { label: 'Delivery Speed', value: '< 2 sec' },
        { label: 'Support Deflection', value: '89.1%' }
      ]
    }
  ];

  return (
    <section id="social-proof" className="py-24 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 block mb-2">
            Proven Performance
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            Trusted by growing businesses.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            From fast-growing D2C lifestyle brands to enterprise SaaS teams, discover how companies scale customer relationships with CocoonMail.
          </p>
        </div>

        {/* Customer Logo Strip */}
        <div className="mb-16 py-6 border-y border-slate-100">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center text-center">
            {brandLogos.map((brand) => (
              <div key={brand.name} className="flex flex-col items-center">
                <span className="font-extrabold text-slate-700 text-sm tracking-tight">
                  {brand.name}
                </span>
                <span className="text-[10px] text-slate-400 font-mono mt-0.5">
                  {brand.sector}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {caseStudies.map((study) => (
            <div 
              key={study.company}
              className="bg-slate-50/80 rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:bg-white hover:border-slate-300 hover:shadow-md transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200">
                    {study.company}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">Case Study</span>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Challenge:</span>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Solution:</span>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    {study.solution}
                  </p>
                </div>
              </div>

              {/* Verified Metrics */}
              <div className="mt-6 pt-4 border-t border-slate-200/60">
                <div className="grid grid-cols-3 gap-2 text-center">
                  {study.metrics.map((m) => (
                    <div key={m.label} className="p-2 rounded-xl bg-white border border-slate-200/80">
                      <span className="text-[10px] text-slate-400 block font-mono">{m.label}</span>
                      <strong className="text-xs sm:text-sm font-bold font-mono text-emerald-600">
                        {m.value}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Compliance Banner */}
        <div className="p-6 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600/30 text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-500/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">
                Enterprise Data Security &amp; Meta Compliance
              </h4>
              <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                ISO 27001 certified, SOC 2 Type II compliant, GDPR ready, and official Meta BSP telecom routing.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenBookDemo}
            className="px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-900 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer"
          >
            Review Security Whitepaper
          </button>
        </div>

      </div>
    </section>
  );
};
