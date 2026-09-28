import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare, 
  Bot, 
  CreditCard, 
  RefreshCw, 
  Megaphone, 
  TrendingUp, 
  Zap,
  ChevronRight,
  ShieldCheck,
  Percent,
  Check
} from 'lucide-react';
import { SEOHead } from '../../components/SEOHead';

interface SolutionPageProps {
  onOpenStartFree: () => void;
  onOpenBookDemo: () => void;
}

export const EcommerceSolutionPage: React.FC<SolutionPageProps> = ({
  onOpenStartFree,
  onOpenBookDemo
}) => {
  const [activeStep, setActiveStep] = useState<number>(2);

  const steps = [
    { num: 1, title: 'Meta Ads Click', desc: 'Shopper taps Instagram ad with dynamic catalog creative', tag: 'Acquire' },
    { num: 2, title: 'Instant WhatsApp', desc: 'Pre-filled greeting opens without landing page bounce', tag: 'Engage' },
    { num: 3, title: 'AI Sizing Assistant', desc: 'Autonomous agent checks real-time inventory & recommends fit', tag: 'Converse' },
    { num: 4, title: 'Product Added to Cart', desc: 'Shopper reviews multi-item native WhatsApp cart', tag: 'Select' },
    { num: 5, title: 'In-Chat Checkout', desc: '1-tap UPI, Card, or Apple Pay payment with automated receipt', tag: 'Sell' },
    { num: 6, title: 'Automated Retargeting', desc: 'VIP cross-sell email & replenishment reminder 30d later', tag: 'Retain' }
  ];

  return (
    <div className="bg-white text-slate-900">
      <SEOHead 
        title="E-Commerce Solutions — WhatsApp Commerce & Marketing Automation"
        description="Turn Meta Ad clicks into instant WhatsApp conversations, AI-assisted product recommendations, in-chat checkout, and automated retention loops."
      />

      {/* Hero */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-amber-50/60 via-orange-50/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-amber-600 tracking-wide uppercase">
            <ShoppingBag className="w-4 h-4" />
            <span>Solutions for Direct-to-Consumer &amp; Retail</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                The commerce engine built for <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600">how modern shoppers buy</span>.
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                Traditional e-commerce loses 70% of shoppers to slow web landing pages and abandoned carts. CocoonMail combines Meta Click-to-WhatsApp ads, AI product styling, native in-chat checkout, and automated email retargeting into one frictionless revenue loop.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenStartFree}
                  className="px-7 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-base shadow-lg shadow-amber-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 cursor-pointer"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenBookDemo}
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200 shadow-sm transition-all hover:border-slate-300 flex items-center gap-2 cursor-pointer"
                >
                  <span>Book Commerce Demo</span>
                </button>
                <Link
                  to="/developers/api"
                  className="px-5 py-3.5 text-slate-600 hover:text-slate-900 text-sm font-semibold flex items-center gap-1.5"
                >
                  <span>Explore API</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-4 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Shopify &amp; WooCommerce 1-Click Sync</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Meta CAPI Closed-Loop ROAS</span>
              </div>
            </div>

            {/* Interactive Story Progression */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 text-white shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-xs font-mono text-amber-400 font-semibold">The E-Commerce Customer Journey</span>
                  <span className="text-[11px] text-slate-400">Step {activeStep} of 6</span>
                </div>

                <div className="space-y-2">
                  {steps.map((st) => (
                    <button
                      key={st.num}
                      onClick={() => setActiveStep(st.num)}
                      className={`w-full text-left p-3 rounded-xl transition-all cursor-pointer flex items-start gap-3 border ${
                        activeStep === st.num 
                          ? 'bg-amber-950/60 border-amber-500/80 shadow-md' 
                          : 'bg-slate-800/40 border-slate-800 hover:bg-slate-800/80'
                      }`}
                    >
                      <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold shrink-0 ${
                        activeStep === st.num ? 'bg-amber-500 text-white' : 'bg-slate-700 text-slate-300'
                      }`}>
                        {st.num}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-bold text-white truncate">{st.title}</p>
                          <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">{st.tag}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">{st.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl sm:text-4xl font-black text-slate-900">3.8x</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Higher Conversion vs Web Forms</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-black text-slate-900">&lt;30s</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Average In-Chat Checkout Speed</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-black text-slate-900">42%</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Abandoned Cart Recovery Rate</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-black text-slate-900">98%</p>
            <p className="text-xs text-slate-500 font-medium mt-1">WhatsApp Notification Open Rate</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <h2 className="text-xs font-bold text-amber-600 uppercase tracking-wider">Engineered for Merchants</h2>
            <p className="text-3xl font-extrabold text-slate-900">Everything needed to scale D2C revenue</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all space-y-3">
              <Megaphone className="w-8 h-8 text-rose-600" />
              <h3 className="font-bold text-slate-900 text-base">Meta Click-to-WhatsApp Ads</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect your Facebook and Instagram ad spend directly to conversation triggers. Every click opens a verified WhatsApp thread with pre-filled context.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all space-y-3">
              <Bot className="w-8 h-8 text-violet-600" />
              <h3 className="font-bold text-slate-900 text-base">AI Shopping &amp; Sizing Assistant</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Train AI on your size guides, return policies, and product specifications. Resolves buyer hesitation instantly 24/7 without staffing support reps.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all space-y-3">
              <CreditCard className="w-8 h-8 text-teal-600" />
              <h3 className="font-bold text-slate-900 text-base">Instant In-Chat Payments</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Collect UPI, card, and NetBanking payments directly inside the WhatsApp conversation with Razorpay and Stripe auto-confirmations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Turn your social ad clicks into paying customers today.</h2>
          <p className="text-amber-100 max-w-xl mx-auto text-sm">
            Sync your Shopify or WooCommerce catalog in 5 minutes and launch your first Click-to-WhatsApp campaign.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenStartFree}
              className="px-8 py-3.5 rounded-xl bg-white text-amber-800 hover:bg-amber-50 font-bold shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              Start Free Trial
            </button>
            <button
              onClick={onOpenBookDemo}
              className="px-7 py-3.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-semibold border border-amber-500/50 transition-colors cursor-pointer"
            >
              Book 1-on-1 Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
