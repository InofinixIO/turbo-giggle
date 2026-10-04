import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  Zap,
  TrendingUp,
  Clock,
  Send,
  Smartphone,
  Layers,
  Users
} from 'lucide-react';
import { FeatureData, featuresMap } from '../data/featuresData';
import { ModalType } from '../types';
import { useRouter } from '../router/RouterContext';

interface FeatureDetailPageProps {
  slug: string;
  onOpenModal: (type: ModalType) => void;
}

export const FeatureDetailPage: React.FC<FeatureDetailPageProps> = ({ slug, onOpenModal }) => {
  const { navigate } = useRouter();
  const feature = featuresMap[slug] || featuresMap['email'];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeUseCaseTab, setActiveUseCaseTab] = useState<number>(0);

  const Icon = feature.icon;

  // Schema.org FAQPage & Product JSON-LD Injection for Google Rich Snippets & AI (GEO) Grounding
  useEffect(() => {
    const existingScript = document.getElementById('schema-faq-jsonld');
    if (existingScript) existingScript.remove();

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": feature.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const script = document.createElement('script');
    script.id = 'schema-faq-jsonld';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('schema-faq-jsonld');
      if (el) el.remove();
    };
  }, [feature]);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="pt-24 pb-20 bg-white">
      
      {/* 1. BESPOKE MARKETING HERO */}
      <section className="relative overflow-hidden pt-12 pb-20 bg-gradient-to-b from-slate-50 via-white to-blue-50/20">
        
        {/* Vibrant ambient gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-blue-400/10 via-indigo-300/15 to-violet-400/10 blur-3xl -z-10 rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Feature Category Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold mb-6">
              <Icon className="w-3.5 h-3.5" />
              <span>{feature.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              {feature.heroHeadline}
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              {feature.heroSubheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <button
                onClick={() => onOpenModal('start-free')}
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-bold text-sm rounded-xl shadow-xl shadow-blue-500/25 transition-all transform active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Start Free with {feature.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenModal('book-demo')}
                className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm rounded-xl border border-slate-200 shadow-sm transition-all"
              >
                Schedule Live Product Demo
              </button>
            </div>

            <div className="flex items-center justify-center gap-6 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 14-day free trial</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> No credit card needed</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Instant setup</span>
            </div>

          </div>

          {/* 2. POLISHED SAAS UI MOCKUP */}
          <div className="mt-14 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden">
              
              {/* Window Header */}
              <div className="bg-slate-900 px-6 py-4 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 pl-3 border-l border-slate-800">
                    app.cocoonmail.com/{feature.slug}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-emerald-400">Live Active Workspace</span>
                </div>
              </div>

              {/* SaaS Dashboard Body */}
              <div className="p-6 sm:p-8 bg-slate-50/60">
                
                {/* Metric Summary Ribbon */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                    <span className="text-xs font-semibold text-slate-400">{feature.primaryMetric.label}</span>
                    <div className="text-3xl font-black text-slate-900 mt-1">{feature.primaryMetric.value}</div>
                    <div className="text-[11px] font-bold text-emerald-600 mt-1 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> Top 1% Industry Benchmark
                    </div>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                    <span className="text-xs font-semibold text-slate-400">{feature.secondaryMetric.label}</span>
                    <div className="text-3xl font-black text-blue-600 mt-1">{feature.secondaryMetric.value}</div>
                    <div className="text-[11px] font-semibold text-slate-500 mt-1">Verified Real-Time Metric</div>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                    <span className="text-xs font-semibold text-slate-400">{feature.tertiaryMetric.label}</span>
                    <div className="text-3xl font-black text-violet-600 mt-1">{feature.tertiaryMetric.value}</div>
                    <div className="text-[11px] font-semibold text-slate-500 mt-1">Continuous Platform Optimization</div>
                  </div>
                </div>

                {/* Interactive Simulated Preview */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{feature.name} Preview Console</h4>
                      <p className="text-xs text-slate-500">Live configuration & delivery simulation</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold">
                      Enterprise Tier Ready
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="space-y-3">
                      <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">Active Configuration</div>
                      <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 space-y-2 text-xs">
                        <div className="flex justify-between text-slate-600">
                          <span>Connection Status</span>
                          <span className="font-bold text-emerald-600">Connected & Verified</span>
                        </div>
                        <div className="flex justify-between text-slate-600">
                          <span>Target Channel</span>
                          <span className="font-bold text-slate-900">{feature.name}</span>
                        </div>
                        <div className="flex justify-between text-slate-600">
                          <span>Deliverability Protection</span>
                          <span className="font-bold text-blue-600">Active (SPF/DKIM/Tier-1)</span>
                        </div>
                        <div className="flex justify-between text-slate-600">
                          <span>Event Streaming</span>
                          <span className="font-bold text-violet-600">Sub-Second Webhooks</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900 text-white font-mono text-xs space-y-2 shadow-inner">
                      <div className="text-slate-400">// Telemetry Payload</div>
                      <div className="text-emerald-400">feature_slug: "{feature.slug}"</div>
                      <div className="text-blue-300">target_audience: "48,291 contacts"</div>
                      <div className="text-amber-300">average_latency: "{feature.secondaryMetric.value}"</div>
                      <div className="text-violet-300">attributed_lift: "{feature.primaryMetric.value}"</div>
                      <div className="text-slate-400 pt-1">// System Ready for Live Traffic</div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>

      </section>

      {/* 3. WHAT YOU GET (CAPABILITIES & CORE DELIVERABLES) */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Comprehensive Platform Inclusions
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">
              What you get with {feature.name}
            </h2>
            <p className="text-base text-slate-600">
              Everything your marketing and engineering teams need to launch, scale, and automate without engineering bottlenecks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {feature.whatYouGet.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-[11px] font-bold text-blue-600 uppercase tracking-wider">
                  Deliverable: {item.deliverable}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. HOW YOU BENEFIT (BUSINESS ROI & OUTCOMES) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
              Tangible Business Impact
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">
              How your business benefits
            </h2>
            <p className="text-base text-slate-600">
              Transform marketing efficiency into measurable top-line revenue, customer retention, and hours saved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {feature.howYouBenefit.map((benefit, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-4xl font-black text-slate-900 mb-2">
                    {benefit.metric}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {benefit.description}
                  </p>
                </div>
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-xs font-bold text-emerald-700 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{benefit.highlight}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. REAL-WORLD USE CASES */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-violet-600 uppercase tracking-wider">
              Proven Playbooks
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">
              Real-world use cases in action
            </h2>
            <p className="text-base text-slate-600">
              See how modern growth teams deploy {feature.name} across different industries.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 bg-slate-100 rounded-xl gap-1">
              {feature.useCases.map((uc, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveUseCaseTab(idx)}
                  className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                    activeUseCaseTab === idx 
                      ? 'bg-white text-slate-900 shadow-sm' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {uc.industry}
                </button>
              ))}
            </div>
          </div>

          {/* Active Case Card */}
          <div className="max-w-3xl mx-auto bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl">
            <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
              Industry Focus: {feature.useCases[activeUseCaseTab].industry}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {feature.useCases[activeUseCaseTab].scenario}
            </h3>
            
            <div className="p-4 bg-slate-800 rounded-2xl border border-slate-700 mb-6 space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Automated Workflow:</span>
              <p className="text-sm text-slate-200 leading-relaxed">
                {feature.useCases[activeUseCaseTab].workflow}
              </p>
            </div>

            <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/30 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Measured Outcome: </span>
                <span className="text-xs text-white font-medium">{feature.useCases[activeUseCaseTab].outcome}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. SEO & GEO FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Clarity & Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2 mb-3">
              Frequently asked questions about {feature.name}
            </h2>
            <p className="text-sm text-slate-600">
              Everything you need to know about implementation, technical requirements, and deliverability.
            </p>
          </div>

          <div className="space-y-4">
            {feature.faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                >
                  <span className="text-sm font-bold text-slate-900">
                    {faq.question}
                  </span>
                  {openFaqIndex === idx ? (
                    <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                  )}
                </button>

                {openFaqIndex === idx && (
                  <div className="px-6 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/30">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. HIGH-CONVERTING BOTTOM CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Ready to scale with {feature.name}?
          </h2>
          <p className="text-base text-blue-100 max-w-2xl mx-auto mb-8">
            Start your 14-day free trial today. Connect in minutes with zero setup fees or long-term contracts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenModal('start-free')}
              className="px-8 py-3.5 bg-white text-blue-700 hover:bg-blue-50 font-bold text-xs rounded-xl shadow-lg transition-all"
            >
              Start Free Trial Now
            </button>
            <button
              onClick={() => onOpenModal('book-demo')}
              className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/20 transition-all"
            >
              Talk to a Solutions Architect
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
