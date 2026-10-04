import React, { useState } from 'react';
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  Calculator, 
  DollarSign, 
  Coins, 
  ShieldCheck, 
  Zap,
  Layers
} from 'lucide-react';
import { ModalType, PricingPlan } from '../../types';

interface PricingSectionProps {
  onOpenModal: (type: ModalType) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenModal }) => {
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');
  const [contactsSlider, setContactsSlider] = useState(25000);
  const [activeTab, setActiveTab] = useState<'plans' | 'calculator'>('plans');

  // Multi-tier plans
  const plans: PricingPlan[] = [
    {
      id: 'starter',
      name: 'Starter',
      tagline: 'Ideal for growing businesses launching WhatsApp & Email.',
      priceMonthlyUSD: 29,
      priceMonthlyINR: 2499,
      contactsIncluded: 5000,
      emailsIncluded: 50000,
      whatsappIncluded: '1,000 Free Service Conversations / mo',
      features: [
        'Unified Email & WhatsApp Inbox',
        'Visual Drag-and-Drop Email Builder',
        'Official WhatsApp Cloud API',
        'Contact Segmentation (Up to 5 rules)',
        'Basic Autoresponders & Welcomes',
        'Community & Email Support'
      ]
    },
    {
      id: 'growth',
      name: 'Growth',
      tagline: 'For fast-scaling brands selling products and automating journeys.',
      priceMonthlyUSD: 89,
      priceMonthlyINR: 7499,
      popular: true,
      contactsIncluded: 25000,
      emailsIncluded: 250000,
      whatsappIncluded: '5,000 Free Service Conversations / mo',
      features: [
        'Everything in Starter',
        'Visual Workflow Journey Canvas',
        'WhatsApp Autonomous AI Agent (Catalog Search)',
        'Native Product Catalog & Payment Links',
        'Meta Ads to WhatsApp Lead Routing',
        'Dynamic RFM & Behavioral Clusters',
        'REST API & Webhooks with 99.8% SLA',
        'Priority Chat & Slack Support'
      ]
    },
    {
      id: 'scale',
      name: 'Scale & Enterprise',
      tagline: 'For large high-volume brands requiring custom throughput & SLAs.',
      priceMonthlyUSD: 249,
      priceMonthlyINR: 19999,
      contactsIncluded: 100000,
      emailsIncluded: 1000000,
      whatsappIncluded: 'Unlimited Tiers + Dedicated Meta TPM',
      features: [
        'Everything in Growth',
        'Multi-Client Workspaces & Role RBAC',
        'Dedicated Private IP Addresses',
        'Unlimited AI Conversation Agents',
        'Custom Webhook Event Streaming to CAPI & GA4',
        'WhatsApp Green Badge Assistance',
        'Custom Billing (Stripe / Razorpay GST)',
        'Dedicated Account Manager & 99.99% SLA'
      ]
    }
  ];

  // Comparison capabilities
  const capabilities = [
    { name: 'Email Marketing Broadcasts', starter: true, growth: true, scale: true },
    { name: 'Transactional Email & SMTP', starter: true, growth: true, scale: true },
    { name: 'WhatsApp Business API (Official)', starter: true, growth: true, scale: true },
    { name: 'WhatsApp Autonomous AI Agents', starter: false, growth: true, scale: true },
    { name: 'Visual Journey Automation', starter: false, growth: true, scale: true },
    { name: 'Dynamic Customer Segmentation', starter: 'Basic (5)', growth: 'Advanced', scale: 'Unlimited' },
    { name: 'Meta Ads to WhatsApp Sync', starter: false, growth: true, scale: true },
    { name: 'Product Catalog In-Chat', starter: false, growth: true, scale: true },
    { name: 'In-Conversation Payments (UPI/Stripe)', starter: false, growth: true, scale: true },
    { name: 'High-Throughput REST API', starter: '10 req/s', growth: '100 req/s', scale: 'Custom' },
    { name: 'HMAC Webhooks', starter: true, growth: true, scale: true },
    { name: 'Real-time Revenue Attribution', starter: false, growth: true, scale: true },
  ];

  // Estimated ROI Calculation
  const estimatedEmailReach = contactsSlider * 4;
  const estimatedWaReach = Math.floor(contactsSlider * 0.4);
  const estimatedRevenueLiftUSD = Math.round(contactsSlider * 0.85);
  const estimatedRevenueLiftINR = Math.round(contactsSlider * 72);

  return (
    <section id="pricing-section" className="py-20 md:py-32 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Transparent Global Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight text-balance mb-4">
            More power. One platform.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Replace a stack of disconnected tools with one connected customer engagement platform.
          </p>

          {/* Currency & Mode Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200">
              <button
                onClick={() => setActiveTab('plans')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === 'plans' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Plan Tiers
              </button>
              <button
                onClick={() => setActiveTab('calculator')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === 'calculator' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Interactive ROI Calculator
              </button>
            </div>

            <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200">
              <button
                onClick={() => setCurrency('USD')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  currency === 'USD' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600'
                }`}
              >
                USD ($)
              </button>
              <button
                onClick={() => setCurrency('INR')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  currency === 'INR' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-600'
                }`}
              >
                INR (₹)
              </button>
            </div>
          </div>
        </div>

        {/* VIEW 1: PRICING CARDS */}
        {activeTab === 'plans' && (
          <div className="space-y-16 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {plans.map((plan) => {
                const isPopular = plan.popular;
                const price = currency === 'USD' ? `$${plan.priceMonthlyUSD}` : `₹${plan.priceMonthlyINR.toLocaleString()}`;

                return (
                  <div
                    key={plan.id}
                    className={`relative p-8 rounded-3xl border transition-all flex flex-col justify-between ${
                      isPopular 
                        ? 'bg-slate-900 text-white border-blue-500 shadow-2xl scale-105 z-10' 
                        : 'bg-white text-slate-900 border-slate-200 hover:border-slate-300 shadow-lg'
                    }`}
                  >
                    {isPopular && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-bold shadow-md">
                        MOST POPULAR CHOICE
                      </div>
                    )}

                    <div>
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl font-bold">{plan.name}</h3>
                        <span className="text-xs font-semibold text-slate-400">Monthly</span>
                      </div>
                      <p className={`text-xs mb-6 ${isPopular ? 'text-slate-300' : 'text-slate-500'}`}>
                        {plan.tagline}
                      </p>

                      <div className="mb-6">
                        <span className="text-4xl font-extrabold tracking-tight">{price}</span>
                        <span className={`text-xs ml-1 ${isPopular ? 'text-slate-400' : 'text-slate-500'}`}>/ month</span>
                      </div>

                      <div className={`p-3 rounded-xl mb-6 text-xs space-y-1 ${isPopular ? 'bg-white/10' : 'bg-slate-50 border border-slate-100'}`}>
                        <div className="flex justify-between">
                          <span>Contacts:</span>
                          <span className="font-bold">{plan.contactsIncluded.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Included Emails:</span>
                          <span className="font-bold">{plan.emailsIncluded.toLocaleString()} / mo</span>
                        </div>
                        <div className="text-[11px] text-emerald-400 font-semibold mt-1">
                          {plan.whatsappIncluded}
                        </div>
                      </div>

                      <div className="space-y-3 mb-8">
                        <div className={`text-[11px] font-bold uppercase tracking-wider ${isPopular ? 'text-blue-300' : 'text-slate-400'}`}>
                          Included Features
                        </div>
                        {plan.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs">
                            <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isPopular ? 'text-blue-400' : 'text-emerald-600'}`} />
                            <span className={isPopular ? 'text-slate-200' : 'text-slate-700'}>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenModal('start-free')}
                      className={`w-full py-3.5 rounded-xl text-xs font-bold transition-all shadow-md ${
                        isPopular
                          ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/25'
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                      }`}
                    >
                      Start 14-Day Free Trial
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Capability Comparison Matrix */}
            <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 md:p-10 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
                Platform Capability Matrix
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-400 uppercase text-[10px] tracking-wider">
                      <th className="py-3 px-4">Core Capability</th>
                      <th className="py-3 px-4 text-center">Starter</th>
                      <th className="py-3 px-4 text-center font-bold text-blue-600">Growth</th>
                      <th className="py-3 px-4 text-center">Scale & Enterprise</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {capabilities.map((cap, idx) => (
                      <tr key={idx} className="hover:bg-white/60">
                        <td className="py-3.5 px-4 font-semibold text-slate-800">{cap.name}</td>
                        
                        <td className="py-3.5 px-4 text-center text-slate-600">
                          {typeof cap.starter === 'boolean' ? (
                            cap.starter ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : '—'
                          ) : cap.starter}
                        </td>

                        <td className="py-3.5 px-4 text-center font-semibold text-blue-600 bg-blue-50/30">
                          {typeof cap.growth === 'boolean' ? (
                            cap.growth ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : '—'
                          ) : cap.growth}
                        </td>

                        <td className="py-3.5 px-4 text-center text-slate-600">
                          {typeof cap.scale === 'boolean' ? (
                            cap.scale ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : '—'
                          ) : cap.scale}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: INTERACTIVE ROI CALCULATOR */}
        {activeTab === 'calculator' && (
          <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 md:p-12 shadow-xl max-w-4xl mx-auto animate-in fade-in duration-300">
            <div className="text-center max-w-lg mx-auto mb-8">
              <h3 className="text-2xl font-bold text-slate-900">
                Estimate Your Revenue Lift & Savings
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Slide to your approximate active customer database size to calculate estimated cross-channel reach and revenue impact.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center text-sm font-bold text-slate-900 mb-2">
                  <span>Monthly Active Contacts:</span>
                  <span className="text-blue-600 font-mono text-lg">{contactsSlider.toLocaleString()} contacts</span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="150000"
                  step="1000"
                  value={contactsSlider}
                  onChange={(e) => setContactsSlider(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                  <span>2,000</span>
                  <span>50,000</span>
                  <span>100,000</span>
                  <span>150,000+</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm text-center">
                  <div className="text-xs text-slate-500 font-medium">Estimated Monthly Email Reach</div>
                  <div className="text-2xl font-black text-blue-600 mt-1">{estimatedEmailReach.toLocaleString()}</div>
                  <div className="text-[10px] text-slate-400 mt-1">99.8% Inbox Guarantee</div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm text-center">
                  <div className="text-xs text-slate-500 font-medium">Monthly WhatsApp Conversions</div>
                  <div className="text-2xl font-black text-emerald-600 mt-1">{estimatedWaReach.toLocaleString()}</div>
                  <div className="text-[10px] text-slate-400 mt-1">98% Open Rate</div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm text-center">
                  <div className="text-xs text-slate-500 font-medium">Projected Monthly Revenue Lift</div>
                  <div className="text-2xl font-black text-indigo-600 mt-1">
                    {currency === 'USD' ? `$${estimatedRevenueLiftUSD.toLocaleString()}` : `₹${estimatedRevenueLiftINR.toLocaleString()}`}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">Based on 14.8% average conversion</div>
                </div>
              </div>

              <div className="pt-4 text-center">
                <button
                  onClick={() => onOpenModal('start-free')}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl text-xs font-bold shadow-lg shadow-blue-500/25"
                >
                  Start Capturing Revenue with Cocoonmail
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
