import React, { useState } from 'react';
import { Check, Sparkles, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { PRICING_PLANS } from '../data/mockData';

interface PricingCalculatorProps {
  onOpenStartFree: () => void;
  onOpenBookDemo: () => void;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({
  onOpenStartFree,
  onOpenBookDemo
}) => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');
  const [contactVolume, setContactVolume] = useState<number>(25000);

  // Volume scale multiplier
  const volumeMultiplier = Math.max(1, contactVolume / 25000);

  return (
    <section id="pricing" className="py-24 bg-slate-50/70 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 block mb-2">
            Predictable Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            Scale seamlessly from first 1,000 contacts to millions.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Zero hidden telecom markup. Keep all your customer conversations, automated AI workflows, and payments under one straightforward plan.
          </p>

          {/* Currency & Annual Billing Toggles */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            
            {/* Annual / Monthly */}
            <div className="flex items-center p-1 bg-white rounded-xl border border-slate-200 shadow-xs text-xs font-medium">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  !isAnnual ? 'bg-slate-900 text-white font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-3.5 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                  isAnnual ? 'bg-slate-900 text-white font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>Annual Billing</span>
                <span className="px-1.5 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-bold">
                  Save 20%
                </span>
              </button>
            </div>

            {/* Currency Selector */}
            <div className="flex items-center p-1 bg-white rounded-xl border border-slate-200 shadow-xs text-xs font-medium">
              <button
                onClick={() => setCurrency('USD')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  currency === 'USD' ? 'bg-indigo-600 text-white font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                USD ($)
              </button>
              <button
                onClick={() => setCurrency('INR')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  currency === 'INR' ? 'bg-indigo-600 text-white font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                INR (₹)
              </button>
            </div>

          </div>

          {/* Interactive Volume Slider */}
          <div className="mt-8 max-w-xl mx-auto bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
              <span className="font-semibold text-slate-700">Estimated Active Monthly Contacts:</span>
              <strong className="text-slate-900 font-mono text-sm">{contactVolume.toLocaleString()} contacts</strong>
            </div>
            <input
              type="range"
              min="5000"
              max="150000"
              step="5000"
              value={contactVolume}
              onChange={(e) => setContactVolume(Number(e.target.value))}
              className="w-full accent-indigo-600 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
              <span>5,000</span>
              <span>25,000</span>
              <span>75,000</span>
              <span>150,000+</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const rawPrice = currency === 'USD' ? plan.baseMonthlyPriceUSD : plan.baseMonthlyPriceINR;
            const billedPrice = isAnnual ? Math.round(rawPrice * 0.8) : rawPrice;
            const symbol = currency === 'USD' ? '$' : '₹';

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all relative ${
                  plan.popular
                    ? 'bg-white border-2 border-indigo-600 shadow-xl lg:-translate-y-2'
                    : 'bg-white border border-slate-200 shadow-sm'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                  </div>

                  <p className="mt-2 text-xs text-slate-500 leading-relaxed min-h-[36px]">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mt-6 pb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold font-mono text-slate-900 tracking-tight">
                        {symbol}{billedPrice.toLocaleString()}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">/ month</span>
                    </div>
                    <span className="text-[11px] text-slate-400 block mt-1">
                      {isAnnual ? 'Billed annually (20% off)' : 'Billed monthly'}
                    </span>
                  </div>

                  {/* Included Resource Caps */}
                  <div className="py-4 space-y-2 text-xs font-mono border-b border-slate-100">
                    <div className="flex justify-between text-slate-600">
                      <span>Included Contacts:</span>
                      <strong className="text-slate-900">{plan.includedContacts.toLocaleString()}</strong>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Monthly Emails:</span>
                      <strong className="text-slate-900">{plan.includedEmails.toLocaleString()}</strong>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>WhatsApp Convs:</span>
                      <strong className="text-slate-900">{plan.includedWhatsAppConversations.toLocaleString()}</strong>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>AI Agent Queries:</span>
                      <strong className="text-slate-900">{plan.includedAiAgentQueries.toLocaleString()}</strong>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Team Seats:</span>
                      <strong className="text-slate-900">{plan.teamSeats} Seats</strong>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="py-6 space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      Everything included:
                    </span>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={plan.id === 'scale' ? onOpenBookDemo : onOpenStartFree}
                    className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      plan.popular
                        ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <span>{plan.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] text-slate-400 text-center block mt-2">
                    14-day free trial · No credit card required
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Enterprise Compliance Guarantee Callout */}
        <div className="mt-14 p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
            <div>
              <strong className="text-slate-900 block text-sm">Need custom data residency, high-throughput dedicated IPs, or WhatsApp Green Tick?</strong>
              <span>Our enterprise engineering team deploys bespoke clusters for global operations.</span>
            </div>
          </div>
          <button
            onClick={onOpenBookDemo}
            className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl font-semibold whitespace-nowrap cursor-pointer transition-colors"
          >
            Contact Enterprise Sales
          </button>
        </div>

      </div>
    </section>
  );
};
