import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Puzzle, 
  ArrowLeft, 
  CheckCircle2, 
  ArrowRight, 
  ShoppingBag, 
  CreditCard, 
  Users, 
  Zap, 
  ExternalLink,
  ChevronRight,
  Sparkles,
  RefreshCw
} from 'lucide-react';
import { SEOHead } from '../../components/SEOHead';

export const IntegrationsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'commerce' | 'crm' | 'payments'>('all');

  const integrations = [
    { id: 'shopify', name: 'Shopify & Shopify Plus', category: 'commerce', desc: 'Real-time order sync, catalog inventory reflection, and abandoned checkout triggers.', icon: ShoppingBag, color: 'text-emerald-400 bg-emerald-500/10' },
    { id: 'woocommerce', name: 'WooCommerce', category: 'commerce', desc: 'Open-source WordPress plugin for in-chat WhatsApp catalog feeds and order statuses.', icon: ShoppingBag, color: 'text-purple-400 bg-purple-500/10' },
    { id: 'meta-ads', name: 'Meta Ads & CAPI', category: 'commerce', desc: 'Direct Conversions API integration reporting in-chat purchases back to Facebook & Instagram.', icon: Zap, color: 'text-rose-400 bg-rose-500/10' },
    { id: 'razorpay', name: 'Razorpay', category: 'payments', desc: 'Native UPI, card, and NetBanking payments with immediate WhatsApp receipt webhooks.', icon: CreditCard, color: 'text-sky-400 bg-sky-500/10' },
    { id: 'stripe', name: 'Stripe', category: 'payments', desc: 'Global currency processing with automatic payment intent generation inside conversations.', icon: CreditCard, color: 'text-indigo-400 bg-indigo-500/10' },
    { id: 'hubspot', name: 'HubSpot CRM', category: 'crm', desc: 'Sync WhatsApp conversation logs and email engagement directly to contact timelines.', icon: Users, color: 'text-amber-400 bg-amber-500/10' },
    { id: 'salesforce', name: 'Salesforce', category: 'crm', desc: 'Enterprise lead routing, opportunity tracking, and bi-directional contact enrichment.', icon: Users, color: 'text-blue-400 bg-blue-500/10' },
    { id: 'zapier', name: 'Zapier & Make.com', category: 'crm', desc: 'Connect CocoonMail to 5,000+ business applications with no-code triggers and actions.', icon: Zap, color: 'text-orange-400 bg-orange-500/10' }
  ];

  const filtered = activeCategory === 'all' 
    ? integrations 
    : integrations.filter(i => i.category === activeCategory);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <SEOHead 
        title="Native Integrations — Shopify, Meta Ads, Razorpay, HubSpot & Stripe"
        description="Connect CocoonMail with your existing commerce, CRM, and payment tech stack. Pre-built integrations for Shopify, WooCommerce, Meta CAPI, Stripe, and HubSpot."
      />

      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900/80 px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1">
              <Link to="/developers" className="hover:text-white flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Developers</span>
              </Link>
              <span>/</span>
              <span className="text-purple-400">Native Integrations Ecosystem</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Connected Ecosystem</h1>
          </div>

          <div className="flex gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-medium">
            {(['all', 'commerce', 'payments', 'crm'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg capitalize transition-colors cursor-pointer ${
                  activeCategory === cat ? 'bg-purple-600 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id}
                className="bg-slate-900 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between hover:border-purple-500/50 hover:bg-slate-900/90 transition-all group"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color} group-hover:scale-105 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base group-hover:text-purple-400 transition-colors">{item.name}</h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center justify-between text-xs">
                  <span className="text-emerald-400 font-mono flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Sync</span>
                  </span>
                  <span className="text-slate-500 group-hover:text-slate-300 flex items-center gap-1">
                    <span>Setup ↗</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
