import React, { useState } from 'react';
import { 
  Mail, 
  MessageSquare, 
  GitFork, 
  Bot, 
  Megaphone, 
  ShoppingBag, 
  CreditCard,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Zap
} from 'lucide-react';

interface PlatformStatementProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenStartFree: () => void;
}

export const PlatformStatement: React.FC<PlatformStatementProps> = ({
  onNavigateSection,
  onOpenStartFree
}) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const cards = [
    {
      id: 'email',
      title: 'Email',
      badge: 'Editorial & SMTP',
      desc: 'Campaigns, personalized dynamic liquid templates, and dedicated high-deliverability transactional IP infrastructure.',
      metric: '99.8% Inbox Placement',
      icon: Mail,
      targetSection: 'email',
      gradient: 'from-blue-500 to-indigo-600',
      bgLight: 'bg-blue-50/70',
      borderLight: 'border-blue-200/80',
      textColor: 'text-blue-600',
      connectedTo: ['Automation', 'AI', 'Payments']
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      badge: 'Official Meta BSP',
      desc: 'Tier-1 direct telecom routing, verified green-tick broadcasts, rich interactive message flows, and multi-agent inboxes.',
      metric: '96.4% Open Rate in 15m',
      icon: MessageSquare,
      targetSection: 'whatsapp',
      gradient: 'from-emerald-500 to-teal-600',
      bgLight: 'bg-emerald-50/70',
      borderLight: 'border-emerald-200/80',
      textColor: 'text-emerald-600',
      connectedTo: ['Ads', 'AI', 'Catalog', 'Payments']
    },
    {
      id: 'automation',
      title: 'Automation',
      badge: 'Visual Canvas',
      desc: 'Drag-and-drop journey builder orchestrating cross-channel delays, behavioral branches, tag assignment, and automated triggers.',
      metric: 'Sub-second event dispatch',
      icon: GitFork,
      targetSection: 'automation',
      gradient: 'from-indigo-500 to-violet-600',
      bgLight: 'bg-indigo-50/70',
      borderLight: 'border-indigo-200/80',
      textColor: 'text-indigo-600',
      connectedTo: ['Email', 'WhatsApp', 'AI', 'Catalog']
    },
    {
      id: 'ai',
      title: 'AI',
      badge: 'Autonomous Agents',
      desc: 'Natural language reasoning bots connected to your live product catalog, sizing rules, FAQs, and human escalation guardrails.',
      metric: '89.1% AI Self-Resolution',
      icon: Bot,
      targetSection: 'ai-agents',
      gradient: 'from-violet-500 to-purple-600',
      bgLight: 'bg-violet-50/70',
      borderLight: 'border-violet-200/80',
      textColor: 'text-violet-600',
      connectedTo: ['WhatsApp', 'Catalog', 'Payments']
    },
    {
      id: 'ads',
      title: 'Ads',
      badge: 'Meta Ads & CAPI',
      desc: 'Click-to-WhatsApp and WhatsApp Status ads seamlessly linked to conversational checkouts with automated CAPI conversion tracking.',
      metric: '7.8x Attributed ROAS',
      icon: Megaphone,
      targetSection: 'meta-ads',
      gradient: 'from-rose-500 to-pink-600',
      bgLight: 'bg-rose-50/70',
      borderLight: 'border-rose-200/80',
      textColor: 'text-rose-600',
      connectedTo: ['WhatsApp', 'Payments', 'Automation']
    },
    {
      id: 'catalog',
      title: 'Catalog',
      badge: 'Commerce Engine',
      desc: 'Sync collections, variants, stock levels, and multi-currency pricing directly into conversational carousels and instant lookbooks.',
      metric: 'Live 2-way store sync',
      icon: ShoppingBag,
      targetSection: 'catalog-payments',
      gradient: 'from-amber-500 to-orange-600',
      bgLight: 'bg-amber-50/70',
      borderLight: 'border-amber-200/80',
      textColor: 'text-amber-600',
      connectedTo: ['WhatsApp', 'AI', 'Payments']
    },
    {
      id: 'payments',
      title: 'Payments',
      badge: 'Native In-Chat',
      desc: 'Zero-redirect payment completion via UPI intent (GPay, PhonePe, Paytm), Apple Pay, and credit cards with instant GST receipts.',
      metric: '12s Average Pay Time',
      icon: CreditCard,
      targetSection: 'catalog-payments',
      gradient: 'from-teal-500 to-emerald-600',
      bgLight: 'bg-teal-50/70',
      borderLight: 'border-teal-200/80',
      textColor: 'text-teal-600',
      connectedTo: ['Catalog', 'WhatsApp', 'Automation']
    }
  ];

  return (
    <section id="platform-statement" className="py-24 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 block mb-2">
            The Connected Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            Everything your customer journey needs.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            From the first click to the final conversion, CocoonMail brings communication, automation and commerce into one connected platform.
          </p>

          {/* Interactive State Feedback Indicator */}
          {hoveredCard && (
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-700 animate-in fade-in duration-150">
              <Zap className="w-3.5 h-3.5 text-indigo-600" />
              <span>
                Synchronizing <strong>{hoveredCard}</strong> with:{' '}
                {cards.find(c => c.title === hoveredCard)?.connectedTo.join(' · ')}
              </span>
            </div>
          )}
        </div>

        {/* Seven Interactive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
          {cards.map((card) => {
            const Icon = card.icon;
            const isHovered = hoveredCard === card.title;
            const isRelated = hoveredCard ? cards.find(c => c.title === hoveredCard)?.connectedTo.includes(card.title) : false;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setHoveredCard(card.title)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => onNavigateSection(card.targetSection)}
                className={`group relative rounded-2xl p-4 sm:p-5 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isHovered
                    ? `bg-white shadow-xl -translate-y-1.5 border-slate-300 ring-2 ring-indigo-500/20 z-20`
                    : isRelated
                    ? `bg-indigo-50/40 border-indigo-200 shadow-sm z-10 scale-[1.02]`
                    : `bg-slate-50/60 border-slate-200/80 hover:bg-white hover:border-slate-300`
                }`}
              >
                {/* Active Connection Line Glow Indicator */}
                {isHovered && (
                  <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${card.gradient}`} />
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${card.bgLight} ${card.textColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-white border border-slate-200/80 text-slate-500">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60">
                  <span className="text-[11px] font-mono font-semibold text-slate-700 block truncate">
                    {card.metric}
                  </span>
                  <div className="mt-1 flex items-center gap-1 text-[11px] font-bold text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Explore module</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Architecture Sub-Note */}
        <div className="mt-12 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-slate-900">Native Data Fabric:</span>
            <span>All 7 modules share a unified contact graph, event bus, and analytics attribution model.</span>
          </div>

          <button
            onClick={onOpenStartFree}
            className="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors flex items-center gap-1 shrink-0 cursor-pointer"
          >
            <span>Start free with all 7 modules</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

      </div>
    </section>
  );
};
