import React from 'react';
import { 
  Mail, 
  MessageSquare, 
  Bot, 
  Workflow, 
  Layers, 
  ShoppingBag, 
  CreditCard, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Sparkles, 
  ShieldCheck, 
  Code2, 
  ExternalLink,
  Users,
  Sliders
} from 'lucide-react';
import { ModalType } from '../types';
import { useRouter } from '../router/RouterContext';
import { FeatureDetailPage } from './FeatureDetailPage';

interface PlatformPageProps {
  slug: string;
  onOpenModal: (type: ModalType) => void;
}

export const PlatformPage: React.FC<PlatformPageProps> = ({ slug, onOpenModal }) => {
  const { navigate } = useRouter();

  // If a specific feature slug is provided, render the dedicated FeatureDetailPage
  if (slug && slug !== 'overview') {
    return <FeatureDetailPage slug={slug} onOpenModal={onOpenModal} />;
  }

  // Route: /platform (Overview Hub)
  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto py-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Unified Operating Architecture</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            One connected platform for conversations and commerce.
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Cocoonmail replaces fragmented tools with a single unified operating system connecting Meta Ads, Email, WhatsApp Business API, AI agents, catalogs, and instant payments.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => onOpenModal('start-free')}
              className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-500/25 transition-all"
            >
              Start Free Trial
            </button>
            <button
              onClick={() => onOpenModal('book-demo')}
              className="px-7 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm rounded-xl transition-all"
            >
              Book Architectural Walkthrough
            </button>
          </div>
        </div>

        {/* Feature Modules Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            { path: '/platform/email', title: 'Email Marketing & Builder', desc: 'Drag-and-drop newsletter builder with dynamic variables & 99.8% inbox placement.', icon: Mail, color: 'text-blue-600 bg-blue-50' },
            { path: '/platform/whatsapp', title: 'WhatsApp Business API', desc: 'Verified Meta Cloud API, high-volume broadcast campaigns & collaborative team inboxes.', icon: MessageSquare, color: 'text-emerald-600 bg-emerald-50' },
            { path: '/platform/ai-agents', title: 'Conversational AI Agents', desc: 'Autonomous LLM agents grounded in your live product catalog and return policies.', icon: Bot, color: 'text-violet-600 bg-violet-50' },
            { path: '/platform/automation', title: 'Visual Customer Journeys', desc: 'Node-based workflow builder with purchase triggers, delays, and condition splits.', icon: Workflow, color: 'text-amber-600 bg-amber-50' },
            { path: '/platform/segmentation', title: 'Dynamic Behavioral Segments', desc: 'Real-time filtering by RFM, WhatsApp engagement, order values, and geography.', icon: Users, color: 'text-indigo-600 bg-indigo-50' },
            { path: '/platform/ads', title: 'Meta Ads to WhatsApp', desc: 'Turn Instagram and Facebook ads into direct WhatsApp sales conversations.', icon: Layers, color: 'text-pink-600 bg-pink-50' },
            { path: '/platform/catalog', title: 'In-Chat Product Catalog', desc: 'Sync Shopify and ERP product feeds into native interactive WhatsApp cards.', icon: ShoppingBag, color: 'text-rose-600 bg-rose-50' },
            { path: '/platform/payments', title: 'Conversational Payments', desc: 'In-chat checkout links supporting UPI, Razorpay, Stripe, and credit cards.', icon: CreditCard, color: 'text-teal-600 bg-teal-50' },
            { path: '/platform/analytics', title: 'Closed-Loop Analytics', desc: 'Track delivery, open rates, click-throughs, and directly attributed revenue.', icon: BarChart3, color: 'text-cyan-600 bg-cyan-50' },
            { path: '/platform/transactional-email', title: 'Transactional SMTP & API', desc: 'Sub-45ms delivery latency for receipts, OTPs, and password resets.', icon: Zap, color: 'text-blue-600 bg-blue-50' },
            { path: '/platform/templates', title: 'Interactive Template Engine', desc: 'Pre-approved WhatsApp templates and responsive email layouts.', icon: Sliders, color: 'text-violet-600 bg-violet-50' },
          ].map((mod, idx) => {
            const IconMod = mod.icon;
            return (
              <div
                key={idx}
                onClick={() => navigate(mod.path)}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${mod.color} group-hover:scale-110 transition-transform`}>
                    <IconMod className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {mod.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {mod.desc}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 pt-3 border-t border-slate-100">
                  <span>Explore What You Get & Benefits</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
