import React, { useState } from 'react';
import { 
  Mail, 
  MessageSquare, 
  Workflow, 
  Bot, 
  Layers, 
  ShoppingBag, 
  CreditCard,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Zap
} from 'lucide-react';

interface PlatformStatementProps {
  onSelectChannel: (sectionId: string) => void;
}

export const PlatformStatement: React.FC<PlatformStatementProps> = ({ onSelectChannel }) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const capabilities = [
    {
      id: 0,
      title: 'Email',
      icon: Mail,
      tag: 'Deliverability & Design',
      color: 'blue',
      sectionId: 'email-section',
      desc: 'High-speed marketing broadcasts, drag-and-drop visual templates, and sub-second transactional delivery via REST API.',
      metric: '99.8% inbox placement rate',
      connectsWith: ['WhatsApp', 'Automation', 'AI']
    },
    {
      id: 1,
      title: 'WhatsApp',
      icon: MessageSquare,
      tag: 'Verified Business API',
      color: 'emerald',
      sectionId: 'whatsapp-section',
      desc: 'Official Meta Cloud API integration, green badge verification, high-volume broadcasting, and shared team inboxes.',
      metric: '98.4% open rate in 5 mins',
      connectsWith: ['AI', 'Catalog', 'Payments']
    },
    {
      id: 2,
      title: 'Automation',
      icon: Workflow,
      tag: 'Visual Journey Canvas',
      color: 'amber',
      sectionId: 'automation-section',
      desc: 'Multi-branch customer workflows triggered by purchase events, abandoned carts, webhook triggers, and behavioral tags.',
      metric: '3.4x higher customer lifetime value',
      connectsWith: ['Email', 'WhatsApp', 'Segmentation']
    },
    {
      id: 3,
      title: 'AI',
      icon: Bot,
      tag: 'Autonomous Commerce Agents',
      color: 'violet',
      sectionId: 'ai-agents-section',
      desc: 'Natural language agents that query product databases, answer customer questions, generate checkouts, and route to humans.',
      metric: '82% repetitive inquiries resolved',
      connectsWith: ['WhatsApp', 'Catalog', 'Payments']
    },
    {
      id: 4,
      title: 'Ads',
      icon: Layers,
      tag: 'Meta Ads to WhatsApp',
      color: 'indigo',
      sectionId: 'meta-ads-section',
      desc: 'Connect Instagram & Facebook Ads directly into interactive WhatsApp threads, capturing and converting leads in real time.',
      metric: '64% reduction in acquisition cost',
      connectsWith: ['WhatsApp', 'Segmentation']
    },
    {
      id: 5,
      title: 'Catalog',
      icon: ShoppingBag,
      tag: 'In-Conversation Commerce',
      color: 'rose',
      sectionId: 'catalog-commerce-section',
      desc: 'Sync entire product inventories into native WhatsApp multi-product messages and interactive carousels with live stock.',
      metric: '2.8x higher conversion than web carts',
      connectsWith: ['WhatsApp', 'AI', 'Payments']
    },
    {
      id: 6,
      title: 'Payments',
      icon: CreditCard,
      tag: 'Global & Local Gateways',
      color: 'teal',
      sectionId: 'catalog-commerce-section',
      desc: 'Frictionless payment links directly within conversation streams supporting UPI, Razorpay, Stripe, and credit cards.',
      metric: 'Sub-30 second checkout completion',
      connectsWith: ['Catalog', 'Automation', 'Analytics']
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold mb-4">
            <span>Unified Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight text-balance mb-4">
            Everything your customer journey needs.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            From the first click to the final conversion, Cocoonmail brings communication, automation and commerce into one connected platform.
          </p>
        </div>

        {/* 7 Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            const isHovered = hoveredCard === cap.id;

            return (
              <div
                key={cap.id}
                onMouseEnter={() => setHoveredCard(cap.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => onSelectChannel(cap.sectionId)}
                className={`group relative p-6 rounded-2xl bg-white border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isHovered 
                    ? 'border-blue-500 shadow-xl shadow-blue-500/10 -translate-y-1.5' 
                    : 'border-slate-200/90 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                      cap.color === 'blue' ? 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' :
                      cap.color === 'emerald' ? 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white' :
                      cap.color === 'amber' ? 'bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white' :
                      cap.color === 'violet' ? 'bg-violet-50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white' :
                      cap.color === 'indigo' ? 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white' :
                      cap.color === 'rose' ? 'bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white' :
                      'bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white'
                    }`}>
                      <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                    </div>
                    
                    <span className="text-[11px] font-semibold text-slate-400 group-hover:text-slate-600 transition-colors">
                      {cap.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {cap.desc}
                  </p>
                </div>

                <div>
                  {/* Performance Metric */}
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-slate-800">
                    <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span className="truncate">{cap.metric}</span>
                  </div>

                  {/* Ecosystem Connection Pulse */}
                  <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Connects with: {cap.connectsWith.join(', ')}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>

              </div>
            );
          })}

          {/* 8th Card: The Unified Engine summary */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white flex flex-col justify-between shadow-xl">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 text-[11px] font-semibold text-blue-300 mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Zero Context Switching</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                One Connected Architecture
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Replace 6+ standalone subscriptions (email sender, WhatsApp gateway, AI chatbot, form builder, and automation connector) with Cocoonmail.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5 mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Real-time cross-channel attribution</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Single unified customer identity across all touchpoints.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
