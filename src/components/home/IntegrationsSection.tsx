import React, { useState } from 'react';
import { 
  Layers, 
  MessageSquare, 
  CreditCard, 
  Code2, 
  Webhook, 
  Database, 
  ArrowRight,
  Sparkles,
  Zap
} from 'lucide-react';
import { ModalType } from '../../types';

interface IntegrationsSectionProps {
  onOpenModal: (type: ModalType) => void;
}

export const IntegrationsSection: React.FC<IntegrationsSectionProps> = ({ onOpenModal }) => {
  const [activeIntegration, setActiveIntegration] = useState<string | null>('WhatsApp');

  const integrations = [
    { name: 'Meta Ads', icon: Layers, desc: 'Sync leads and Conversions API (CAPI) events seamlessly', color: 'blue' },
    { name: 'WhatsApp', icon: MessageSquare, desc: 'Official Cloud API with high throughput & green badge', color: 'emerald' },
    { name: 'Razorpay', icon: CreditCard, desc: 'Direct in-conversation payments and instant refunds', color: 'teal' },
    { name: 'REST API', icon: Code2, desc: 'High-speed JSON API for custom backend integrations', color: 'indigo' },
    { name: 'Webhooks', icon: Webhook, desc: 'Sub-second real-time event subscriptions with HMAC', color: 'violet' },
    { name: 'CRM & ERP', icon: Database, desc: 'Sync with HubSpot, Salesforce, Shopify & WooCommerce', color: 'rose' },
  ];

  return (
    <section id="integrations-section" className="py-20 md:py-32 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight text-balance mb-4">
            Connect the tools you already use.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Cocoonmail plays nicely with your entire stack. Plug into your current e-commerce store, payment gateway, CRM, and ad accounts in minutes.
          </p>
        </div>

        {/* Central Hub with Orbiting Integrations */}
        <div className="bg-slate-50/80 rounded-3xl border border-slate-200 p-8 md:p-14 shadow-lg relative max-w-4xl mx-auto">
          
          {/* Circular Orbit Ring Background */}
          <div className="hidden md:block absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[420px] h-[420px] rounded-full border border-slate-200/90 border-dashed" />
          </div>

          {/* Grid Layout of Integrations with Central Cocoonmail Core */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center">
            {integrations.slice(0, 3).map((item) => {
              const Icon = item.icon;
              const isActive = activeIntegration === item.name;
              return (
                <div
                  key={item.name}
                  onClick={() => setActiveIntegration(item.name)}
                  className={`p-5 rounded-2xl bg-white border transition-all cursor-pointer ${
                    isActive 
                      ? 'border-blue-500 shadow-xl ring-2 ring-blue-500/10 -translate-y-1' 
                      : 'border-slate-200 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900">{item.name}</h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Central Cocoonmail Engine Banner in the Middle */}
          <div className="my-8 relative z-20 flex justify-center">
            <div className="p-4 px-8 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-xl flex items-center gap-4">
              <img 
                src="https://cdn.cocoonmail.com/assets/logo.svg" 
                alt="Cocoonmail Core" 
                className="w-8 h-8" 
              />
              <div>
                <div className="text-sm font-extrabold tracking-tight">Cocoonmail Central Hub</div>
                <div className="text-[11px] text-blue-100">Live bidirectional synchronization active</div>
              </div>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center">
            {integrations.slice(3, 6).map((item) => {
              const Icon = item.icon;
              const isActive = activeIntegration === item.name;
              return (
                <div
                  key={item.name}
                  onClick={() => setActiveIntegration(item.name)}
                  className={`p-5 rounded-2xl bg-white border transition-all cursor-pointer ${
                    isActive 
                      ? 'border-blue-500 shadow-xl ring-2 ring-blue-500/10 -translate-y-1' 
                      : 'border-slate-200 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900">{item.name}</h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
