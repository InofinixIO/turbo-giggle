import React from 'react';
import { 
  Puzzle, 
  Megaphone, 
  MessageSquare, 
  CreditCard, 
  Code, 
  Webhook, 
  Database, 
  ArrowRight,
  Sparkles,
  Zap,
  Building
} from 'lucide-react';

interface IntegrationsSectionProps {
  onOpenStartFree: () => void;
}

export const IntegrationsSection: React.FC<IntegrationsSectionProps> = ({ onOpenStartFree }) => {
  // Surrounding integrations from spec:
  // Meta, WhatsApp, Razorpay, REST API, Webhooks, CRM
  const integrations = [
    {
      id: 'meta',
      name: 'Meta Ads & CAPI',
      desc: 'Automatic offline purchase conversion event dispatch',
      icon: Megaphone,
      color: 'from-pink-500 to-rose-500',
      badge: 'Ad Network'
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp Business API',
      desc: 'Official BSP direct tier-1 routing with green tick verification',
      icon: MessageSquare,
      color: 'from-emerald-500 to-teal-500',
      badge: 'Communication'
    },
    {
      id: 'razorpay',
      name: 'Razorpay & UPI',
      desc: 'Native Indian payment rails with automated GST invoices',
      icon: CreditCard,
      color: 'from-blue-600 to-indigo-600',
      badge: 'Payments'
    },
    {
      id: 'rest-api',
      name: 'REST API',
      desc: 'Idempotent transactional and contact management endpoints',
      icon: Code,
      color: 'from-purple-500 to-violet-600',
      badge: 'Developer'
    },
    {
      id: 'webhooks',
      name: 'Webhooks',
      desc: 'Sub-second real-time event streaming callbacks',
      icon: Webhook,
      color: 'from-amber-500 to-orange-500',
      badge: 'Event Bus'
    },
    {
      id: 'crm',
      name: 'CRM Systems',
      desc: 'Bidirectional sync with HubSpot, Salesforce, Zoho & Klaviyo',
      icon: Database,
      color: 'from-teal-500 to-emerald-600',
      badge: 'Audience Sync'
    }
  ];

  return (
    <section id="integrations" className="py-24 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold mb-3">
            <Puzzle className="w-3.5 h-3.5 text-indigo-600" />
            <span>Native Ecosystem Connectivity</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            Connect the tools you already use.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            CocoonMail sits at the center of your stack, orchestrating data flow between Meta Ads, WhatsApp, payment gateways, and your core business systems.
          </p>
        </div>

        {/* Central Visual Hub with Animated Connection Lines */}
        <div className="relative bg-slate-50/70 rounded-3xl border border-slate-200/90 shadow-xl p-8 sm:p-14 overflow-hidden mb-12 flex flex-col items-center justify-center min-h-[500px]">
          
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

          {/* SVG Animated Connection Lines radiating from center */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="w-[420px] h-[420px] rounded-full border border-indigo-200/60 border-dashed animate-[spin_40s_linear_infinite]" />
            <div className="absolute w-[580px] h-[580px] rounded-full border border-slate-200/50" />
          </div>

          {/* Center Hub: CocoonMail */}
          <div className="relative z-20 mb-12 sm:mb-16">
            <div className="relative group">
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity" />
              <div className="relative px-6 py-5 rounded-2xl bg-slate-900 text-white border-2 border-indigo-500/40 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white font-black text-sm">
                  CM
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-indigo-300 font-bold block">
                    Central Operating Core
                  </span>
                  <strong className="text-lg font-extrabold tracking-tight">CocoonMail</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Surrounding Connected Tools (6 Cards Grid around Center) */}
          <div className="relative z-20 w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {integrations.map((tool) => {
              const Icon = tool.icon;

              return (
                <div 
                  key={tool.id}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all group flex items-start gap-3.5"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${tool.color} text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {tool.name}
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 block mt-0.5">
                      {tool.badge}
                    </span>
                    <p className="text-xs text-slate-600 mt-1.5 leading-snug">
                      {tool.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Integration Callout */}
        <div className="text-center">
          <p className="text-xs text-slate-500 font-medium">
            Over 50+ pre-built connectors including Shopify, WooCommerce, Zapier, Make, Segment, and custom HTTP destinations.
          </p>
        </div>

      </div>
    </section>
  );
};
