import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  HelpCircle, 
  Sparkles, 
  Zap, 
  Building, 
  CheckCircle2,
  X
} from 'lucide-react';

interface PricingSectionProps {
  onOpenStartFree: () => void;
  onOpenBookDemo: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onOpenStartFree,
  onOpenBookDemo
}) => {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [annualBilling, setAnnualBilling] = useState<boolean>(true);
  const [contactVolume, setContactVolume] = useState<number>(10000);

  // Pricing calculations
  const calculatePrice = (baseINR: number, baseUSD: number) => {
    let price = currency === 'INR' ? baseINR : baseUSD;
    if (annualBilling) {
      price = Math.round(price * 0.8); // 20% discount
    }
    return price.toLocaleString();
  };

  const capabilities = [
    { name: 'Email', starter: true, pro: true, enterprise: true, note: 'Visual editor & dynamic liquid tags' },
    { name: 'Transactional', starter: true, pro: true, enterprise: true, note: 'Dedicated high-throughput SMTP' },
    { name: 'WhatsApp', starter: true, pro: true, enterprise: true, note: 'Meta BSP verified API pipes' },
    { name: 'AI', starter: 'Basic FAQ', pro: 'Autonomous Agent', enterprise: 'Custom Finetuned', note: 'Natural language sizing & catalog queries' },
    { name: 'Automation', starter: '3 Workflows', pro: 'Unlimited', enterprise: 'Unlimited + SLA', note: 'Multichannel branching canvas' },
    { name: 'Segmentation', starter: 'Standard', pro: 'Dynamic Live', enterprise: 'Sub-second CDP', note: 'Live behavioral rule engine' },
    { name: 'Ads', starter: false, pro: true, enterprise: true, note: 'Click-to-WhatsApp & CAPI tracking' },
    { name: 'Catalog', starter: 'Up to 500 items', pro: 'Unlimited', enterprise: 'ERP Real-time sync', note: 'In-thread interactive products' },
    { name: 'Payments', starter: true, pro: true, enterprise: true, note: 'Native UPI, Apple Pay & Cards' },
    { name: 'API', starter: '100 req/min', pro: '1,000 req/min', enterprise: 'Custom Rate Limit', note: 'Idempotent REST endpoints' },
    { name: 'Webhooks', starter: true, pro: true, enterprise: true, note: 'Real-time event stream delivery' },
    { name: 'Analytics', starter: 'Standard', pro: 'Full Attribution', enterprise: 'Raw Event Export', note: 'End-to-end ROAS measurement' }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50/80 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-800 text-xs font-semibold border border-indigo-200 mb-3">
            <Zap className="w-3.5 h-3.5 text-indigo-600" />
            <span>Transparent Platform Pricing</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            More power. One platform.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Replace a stack of disconnected tools with one connected customer engagement platform.
          </p>

          {/* Currency & Billing Toggles */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {/* Currency Selector */}
            <div className="inline-flex items-center bg-white p-1 rounded-xl border border-slate-200 shadow-xs text-xs font-semibold">
              <button
                onClick={() => setCurrency('INR')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  currency === 'INR' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                ₹ INR (India)
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  currency === 'USD' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                $ USD (Global)
              </button>
            </div>

            {/* Annual billing switch */}
            <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-700 bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-xs">
              <span className={!annualBilling ? 'font-bold text-slate-900' : 'text-slate-500'}>Monthly</span>
              <button
                onClick={() => setAnnualBilling(!annualBilling)}
                className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
                  annualBilling ? 'bg-indigo-600' : 'bg-slate-300'
                }`}
              >
                <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                  annualBilling ? 'translate-x-5' : 'translate-x-0'
                }`} />
              </button>
              <span className={annualBilling ? 'font-bold text-slate-900' : 'text-slate-500'}>
                Annual <span className="text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded text-[10px]">Save 20%</span>
              </span>
            </div>
          </div>
        </div>

        {/* 3 Main Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-stretch">
          
          {/* 1. Starter Tier */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Starter</span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">Growth Essentials</h3>
              <p className="text-xs text-slate-500 mt-2">
                Ideal for emerging brands launching their first omnichannel engagement workflows.
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-slate-900 font-mono">
                  {currency === 'INR' ? '₹' : '$'}{calculatePrice(2499, 39)}
                </span>
                <span className="text-xs text-slate-400 font-medium">/month</span>
              </div>

              <div className="mt-6 space-y-3 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Up to 10,000 active contacts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Unified Email &amp; WhatsApp broadcasts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Native in-chat payment checkout</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>3 Visual automation workflows</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <button
                onClick={onOpenStartFree}
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer"
              >
                Start Free 14-Day Trial
              </button>
            </div>
          </div>

          {/* 2. Pro Tier (Highlighted) */}
          <div className="bg-slate-900 text-white rounded-3xl border-2 border-indigo-500 p-8 shadow-2xl relative flex flex-col justify-between">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
              Most Popular Operating Plan
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 font-mono">Scale Pro</span>
              <h3 className="text-xl font-bold text-white mt-1">Autonomous Commerce</h3>
              <p className="text-xs text-slate-300 mt-2">
                For scaling brands requiring autonomous AI agents, unlimited workflows, and Meta CAPI.
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white font-mono">
                  {currency === 'INR' ? '₹' : '$'}{calculatePrice(6999, 99)}
                </span>
                <span className="text-xs text-slate-400 font-medium">/month</span>
              </div>

              <div className="mt-6 space-y-3 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Up to 50,000 active contacts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Autonomous Conversational AI Agents</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Meta Ads integration &amp; CAPI offline attribution</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Live Dynamic Segmentation &amp; CDP</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Unlimited visual automation journeys</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <button
                onClick={onOpenStartFree}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs sm:text-sm font-semibold shadow-lg transition-all cursor-pointer"
              >
                Start Free with Pro Features
              </button>
            </div>
          </div>

          {/* 3. Enterprise Tier */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Enterprise</span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">Custom Dedicated</h3>
              <p className="text-xs text-slate-500 mt-2">
                For high-throughput organizations with dedicated IP pools, custom rate limits &amp; SLAs.
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-slate-900 font-mono">Custom</span>
                <span className="text-xs text-slate-400 font-medium">/tailored volume</span>
              </div>

              <div className="mt-6 space-y-3 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>500k+ to 10M+ contacts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dedicated warmed IP pools &amp; 99.9% uptime SLA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Custom ERP / CRM bidirectional data pipelines</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dedicated Slack support &amp; Solutions Architect</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <button
                onClick={onOpenBookDemo}
                className="w-full py-3 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer"
              >
                Talk to Enterprise Sales
              </button>
            </div>
          </div>

        </div>

        {/* Full 12-Capability Comparison Table */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-10 mb-8">
          <div className="pb-6 border-b border-slate-100 mb-6 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Full Capability Comparison Matrix
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Every tool needed to acquire, converse, sell, and measure—included in one unified platform.
              </p>
            </div>
            <button
              onClick={onOpenStartFree}
              className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
            >
              View Pricing
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-mono uppercase text-[11px]">
                  <th className="py-3 px-4 font-semibold">Capability</th>
                  <th className="py-3 px-4 font-semibold">Starter</th>
                  <th className="py-3 px-4 font-semibold text-indigo-600">Scale Pro</th>
                  <th className="py-3 px-4 font-semibold">Enterprise</th>
                  <th className="py-3 px-4 font-semibold">Architecture Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {capabilities.map((cap) => (
                  <tr key={cap.name} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      {cap.name}
                    </td>

                    {/* Starter */}
                    <td className="py-3.5 px-4">
                      {typeof cap.starter === 'boolean' ? (
                        cap.starter ? <Check className="w-4 h-4 text-emerald-600" /> : <X className="w-4 h-4 text-slate-300" />
                      ) : (
                        <span className="font-medium text-slate-700">{cap.starter}</span>
                      )}
                    </td>

                    {/* Pro */}
                    <td className="py-3.5 px-4 bg-indigo-50/40">
                      {typeof cap.pro === 'boolean' ? (
                        cap.pro ? <Check className="w-4 h-4 text-indigo-600" /> : <X className="w-4 h-4 text-slate-300" />
                      ) : (
                        <span className="font-bold text-indigo-900">{cap.pro}</span>
                      )}
                    </td>

                    {/* Enterprise */}
                    <td className="py-3.5 px-4">
                      {typeof cap.enterprise === 'boolean' ? (
                        cap.enterprise ? <Check className="w-4 h-4 text-emerald-600" /> : <X className="w-4 h-4 text-slate-300" />
                      ) : (
                        <span className="font-medium text-slate-700">{cap.enterprise}</span>
                      )}
                    </td>

                    {/* Note */}
                    <td className="py-3.5 px-4 text-slate-500 font-mono text-[11px]">
                      {cap.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
