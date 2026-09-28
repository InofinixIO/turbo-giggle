import React, { useState } from 'react';
import { Link } from 'react-router';
import { 
  Check, 
  ArrowRight, 
  HelpCircle, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  ChevronRight,
  Info
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

interface PricingPageProps {
  onOpenStartFree: () => void;
  onOpenBookDemo: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({
  onOpenStartFree,
  onOpenBookDemo
}) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');
  const [expandedCategory, setExpandedCategory] = useState<string | null>('channels');

  const discountMultiplier = billingCycle === 'annual' ? 0.8 : 1.0;

  const tiers = [
    {
      id: 'starter',
      name: 'Starter',
      badge: 'Best for Small Businesses & Creators',
      desc: 'All core channels connected for growing brands.',
      monthlyUsd: 29,
      monthlyInr: 2400,
      emailLimit: '10,000 emails / mo',
      whatsappLimit: '1,000 service conversations',
      aiTurns: '500 AI agent replies',
      seats: '2 team seats',
      highlighted: false
    },
    {
      id: 'growth',
      name: 'Growth',
      badge: 'Most Popular for D2C & SaaS',
      desc: 'High-volume WhatsApp campaigns, AI commerce, and journeys.',
      monthlyUsd: 79,
      monthlyInr: 6500,
      emailLimit: '50,000 emails / mo',
      whatsappLimit: '5,000 marketing conversations',
      aiTurns: '2,500 AI agent replies',
      seats: '5 team seats',
      highlighted: true
    },
    {
      id: 'scale',
      name: 'Scale',
      badge: 'For Fast-Growing Enterprises',
      desc: 'Dedicated IP pools, unlimited visual workflows, and priority support.',
      monthlyUsd: 199,
      monthlyInr: 16500,
      emailLimit: '200,000 emails / mo',
      whatsappLimit: '25,000 marketing conversations',
      aiTurns: '10,000 AI agent replies',
      seats: '15 team seats',
      highlighted: false
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      badge: 'Custom Throughput & Compliance',
      desc: 'Custom SLA, dedicated solution architect, and custom contracts.',
      customPrice: true,
      emailLimit: 'Millions / mo',
      whatsappLimit: 'Unlimited throughput',
      aiTurns: 'Custom LLM fine-tuning',
      seats: 'Unlimited seats',
      highlighted: false
    }
  ];

  const getPrice = (t: typeof tiers[0]) => {
    if (t.customPrice) return 'Custom';
    const base = currency === 'USD' ? t.monthlyUsd : t.monthlyInr;
    const final = Math.round((base || 0) * discountMultiplier);
    return currency === 'USD' ? `$${final}` : `₹${final.toLocaleString()}`;
  };

  return (
    <div className="bg-white text-slate-900">
      <SEOHead 
        title="Simple, Transparent SaaS Pricing — CocoonMail"
        description="More functionality for the price. Unify Email, WhatsApp Business API, AI shopping agents, catalog sync, and payments without paying for four separate tools."
      />

      {/* Header */}
      <section className="pt-14 pb-12 bg-gradient-to-b from-slate-50 via-indigo-50/20 to-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
            More Functionality for the Price
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            One platform. Every conversation. <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">Zero duplicate software subscriptions</span>.
          </h1>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Stop paying separate bills for email newsletters, WhatsApp marketing tools, transactional relays, and chatbot plugins. CocoonMail bundles them together seamlessly.
          </p>

          {/* Toggles */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            
            {/* Monthly / Annual Toggle */}
            <div className="bg-slate-100 p-1 rounded-xl flex items-center border border-slate-200 text-xs font-semibold">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                  billingCycle === 'monthly' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                  billingCycle === 'annual' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>Annual</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded font-bold">Save 20%</span>
              </button>
            </div>

            {/* Currency Selector */}
            <div className="bg-slate-100 p-1 rounded-xl flex items-center border border-slate-200 text-xs font-semibold">
              <button
                onClick={() => setCurrency('USD')}
                className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                  currency === 'USD' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                USD ($)
              </button>
              <button
                onClick={() => setCurrency('INR')}
                className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                  currency === 'INR' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                INR (₹)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-6 flex flex-col justify-between transition-all border ${
                tier.highlighted 
                  ? 'border-indigo-600 bg-white ring-2 ring-indigo-600/20 shadow-2xl relative' 
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] uppercase font-bold tracking-wider px-3 py-0.5 rounded-full shadow">
                  Most Popular
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-black text-slate-900">{tier.name}</h3>
                  <p className="text-[11px] text-indigo-600 font-semibold mt-0.5">{tier.badge}</p>
                  <p className="text-xs text-slate-500 mt-2 min-h-[32px] leading-relaxed">{tier.desc}</p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900 font-mono tracking-tight">
                      {getPrice(tier)}
                    </span>
                    {!tier.customPrice && (
                      <span className="text-xs text-slate-500 font-medium">/ month</span>
                    )}
                  </div>
                  {!tier.customPrice && (
                    <p className="text-[10px] text-slate-400 mt-0.5">
                      {billingCycle === 'annual' ? 'Billed annually' : 'Billed monthly'}
                    </p>
                  )}
                </div>

                {/* Key Limits */}
                <div className="pt-4 border-t border-slate-100 space-y-2.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span><strong>{tier.emailLimit}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{tier.whatsappLimit}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{tier.aiTurns}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{tier.seats}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Visual Workflow Canvas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Dynamic CDP Segmentation</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                {tier.customPrice ? (
                  <button
                    onClick={onOpenBookDemo}
                    className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors cursor-pointer"
                  >
                    Contact Enterprise Sales
                  </button>
                ) : (
                  <button
                    onClick={onOpenStartFree}
                    className={`w-full py-3 rounded-xl font-semibold text-xs transition-all cursor-pointer ${
                      tier.highlighted 
                        ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-500/20' 
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                    }`}
                  >
                    Start Free Sandbox
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expandable Feature Groups */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-2xl font-bold text-slate-900">Compare Full Feature Inclusions</h2>
          <p className="text-xs text-slate-500">Transparent specs with zero hidden platform upcharges.</p>
        </div>

        <div className="space-y-4">
          
          {/* Category: Channels & Infrastructure */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden">
            <button
              onClick={() => setExpandedCategory(expandedCategory === 'channels' ? null : 'channels')}
              className="w-full p-4 bg-slate-50 hover:bg-slate-100 transition-colors flex items-center justify-between text-left cursor-pointer"
            >
              <span className="font-bold text-sm text-slate-900">Communication Channels &amp; Delivery Engine</span>
              {expandedCategory === 'channels' ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
            </button>
            {expandedCategory === 'channels' && (
              <div className="p-4 bg-white divide-y divide-slate-100 text-xs">
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-slate-700">Official WhatsApp Cloud API (Tier-1 BSP)</span>
                  <span className="font-semibold text-emerald-600">Included in all plans</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-slate-700">Dedicated IP Warmup &amp; Deliverability Shield</span>
                  <span className="font-semibold text-slate-900">Scale &amp; Enterprise</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-slate-700">Transactional REST API &amp; SMTP Relay (&lt;650ms SLA)</span>
                  <span className="font-semibold text-emerald-600">Included in all plans</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-slate-700">Meta Click-to-WhatsApp Ads CAPI Synchronization</span>
                  <span className="font-semibold text-emerald-600">Included in all plans</span>
                </div>
              </div>
            )}
          </div>

          {/* Category: Automation & Commerce */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden">
            <button
              onClick={() => setExpandedCategory(expandedCategory === 'automation' ? null : 'automation')}
              className="w-full p-4 bg-slate-50 hover:bg-slate-100 transition-colors flex items-center justify-between text-left cursor-pointer"
            >
              <span className="font-bold text-sm text-slate-900">Automation, AI Agents &amp; In-Chat Commerce</span>
              {expandedCategory === 'automation' ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
            </button>
            {expandedCategory === 'automation' && (
              <div className="p-4 bg-white divide-y divide-slate-100 text-xs">
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-slate-700">Visual Drag-and-Drop Workflow Canvas</span>
                  <span className="font-semibold text-emerald-600">Unlimited journeys</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-slate-700">Native WhatsApp Catalog &amp; Cart Browser</span>
                  <span className="font-semibold text-emerald-600">Included in all plans</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-slate-700">In-Chat Checkout (UPI, Cards, Apple Pay, Stripe, Razorpay)</span>
                  <span className="font-semibold text-emerald-600">0% platform transaction fee</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-slate-700">AI Autonomous Catalog Tool Calling</span>
                  <span className="font-semibold text-slate-900">Growth, Scale &amp; Enterprise</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Try CocoonMail free in your development sandbox.</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            No credit card required. Send your first 1,000 emails and test interactive WhatsApp templates with zero obligation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenStartFree}
              className="px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              Start Free Today
            </button>
            <button
              onClick={onOpenBookDemo}
              className="px-7 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold border border-slate-700 transition-colors cursor-pointer"
            >
              Schedule Custom Pricing Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
