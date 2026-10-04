import React, { useState } from 'react';
import { 
  Layers, 
  ArrowRight, 
  MessageSquare, 
  Bot, 
  ShoppingBag, 
  CreditCard, 
  Sparkles, 
  Radio, 
  Zap, 
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { ModalType } from '../../types';

interface MetaAdsSectionProps {
  onOpenModal: (type: ModalType) => void;
}

export const MetaAdsSection: React.FC<MetaAdsSectionProps> = ({ onOpenModal }) => {
  const [adMode, setAdMode] = useState<'click-to-wa' | 'status-ads'>('click-to-wa');

  const funnelSteps = [
    { label: 'Meta Ad', detail: 'Instagram / Facebook feed sponsor with instant "Send Message" CTA', icon: Layers, color: 'text-blue-400' },
    { label: 'Click to WhatsApp', detail: 'Zero friction deep-link passes ad campaign ID & customer context', icon: MessageSquare, color: 'text-emerald-400' },
    { label: 'WhatsApp Thread', detail: 'User opens WhatsApp natively with pre-filled enquiry string', icon: MessageSquare, color: 'text-emerald-400' },
    { label: 'AI Agent', detail: 'Instant autonomous reply answering product specs & sizing', icon: Bot, color: 'text-violet-400' },
    { label: 'Catalog', detail: 'Interactive product message with live stock verification', icon: ShoppingBag, color: 'text-rose-400' },
    { label: 'Payment', detail: 'One-tap in-chat checkout completed via UPI / Stripe link', icon: CreditCard, color: 'text-amber-400' },
  ];

  return (
    <section id="meta-ads-section" className="py-20 md:py-32 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
      
      {/* Background glowing gradients */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-3xl -z-10 rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-emerald-600/10 blur-3xl -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Direct Meta Ads Integration</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-balance mb-4">
            Turn ads into conversations.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed text-balance">
            Stop sending paid traffic to leaky landing pages. Route high-intent buyers straight into WhatsApp conversations that convert at 3x higher rates.
          </p>

          {/* Ad Mode Switcher */}
          <div className="inline-flex p-1 bg-slate-900 border border-slate-800 rounded-xl mt-6 shadow-inner">
            <button
              onClick={() => setAdMode('click-to-wa')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                adMode === 'click-to-wa' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              Click-to-WhatsApp Funnel
            </button>
            <button
              onClick={() => setAdMode('status-ads')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                adMode === 'status-ads' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              WhatsApp Status Ads & Stories
            </button>
          </div>
        </div>

        {/* Funnel Visual Stream */}
        {adMode === 'click-to-wa' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3">
              {funnelSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-slate-500 font-bold">0{idx + 1}</span>
                        <Icon className={`w-4 h-4 ${step.color}`} />
                      </div>
                      <h4 className="text-xs font-bold text-white mb-1.5">{step.label}</h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed">{step.detail}</p>
                    </div>
                    {idx < funnelSteps.length - 1 && (
                      <div className="hidden lg:flex justify-end pt-3 text-slate-600">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Visual Funnel Card */}
            <div className="bg-slate-900/70 rounded-3xl border border-slate-800 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-left">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Real-Time Ad Attribution</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Full Return On Ad Spend (ROAS) Tracking
                </h3>
                <p className="text-xs text-slate-400 max-w-xl">
                  Every order placed in WhatsApp automatically sends conversion value telemetry back to Meta Ads Manager via the Conversions API (CAPI), improving your ad optimization algorithms instantly.
                </p>
              </div>

              <button
                onClick={() => onOpenModal('start-free')}
                className="shrink-0 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl text-xs font-bold shadow-lg shadow-blue-600/20 flex items-center gap-2"
              >
                <span>Connect Meta</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* WhatsApp Status Ads mode */}
        {adMode === 'status-ads' && (
          <div className="bg-slate-900/90 rounded-3xl border border-slate-800 p-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-in fade-in duration-300">
            <div className="space-y-4">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span>WhatsApp Status Ads</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Monetize WhatsApp Statuses Directly
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Publish high-converting visual stories into your customers' Status feed. A simple swipe up launches an automated AI concierge without friction.
              </p>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Full vertical story creative format (9:16)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Direct swipe-up conversation start</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Zero drop-off from external browsers</span>
                </div>
              </div>
              <button
                onClick={() => onOpenModal('start-free')}
                className="mt-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-2"
              >
                <span>Connect Meta</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex justify-center">
              <div className="w-64 bg-slate-950 rounded-[2rem] p-3 border-4 border-slate-700 shadow-2xl space-y-3">
                <div className="h-64 bg-gradient-to-tr from-emerald-600 to-teal-800 rounded-xl p-4 flex flex-col justify-between text-white">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center text-[10px] font-bold">
                      CM
                    </div>
                    <span className="text-[11px] font-bold">CocoonStore Status</span>
                  </div>
                  <div className="text-center">
                    <span className="text-3xl">👟</span>
                    <div className="text-xs font-bold mt-2">VIP 48-Hour Drop</div>
                    <div className="text-[10px] opacity-80">Swipe up to order in chat</div>
                  </div>
                  <div className="text-center text-[10px] bg-white/20 backdrop-blur-md py-1 rounded-lg">
                    ▲ Swipe Up to Chat
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
