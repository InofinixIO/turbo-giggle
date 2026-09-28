import React, { useState } from 'react';
import { 
  Megaphone, 
  ArrowDown, 
  MessageSquare, 
  Bot, 
  ShoppingBag, 
  CreditCard, 
  ArrowRight,
  TrendingUp,
  Sparkles,
  Zap,
  Radio,
  BarChart3,
  CheckCircle2
} from 'lucide-react';

interface MetaAdsSectionProps {
  onOpenStartFree: () => void;
}

export const MetaAdsSection: React.FC<MetaAdsSectionProps> = ({ onOpenStartFree }) => {
  const [adMode, setAdMode] = useState<'click-to-whatsapp' | 'status-ads'>('click-to-whatsapp');

  const mainFlowSteps = [
    { id: 'meta-ad', title: 'META AD', subtitle: 'IG / FB Sponsored Creative', icon: Megaphone, color: 'from-pink-500 to-rose-500' },
    { id: 'click-wa', title: 'CLICK TO WHATSAPP', subtitle: 'Direct 1-Tap Entry', icon: Zap, color: 'from-amber-500 to-orange-500' },
    { id: 'whatsapp', title: 'WHATSAPP', subtitle: 'Verified Thread Initiated', icon: MessageSquare, color: 'from-emerald-500 to-teal-500' },
    { id: 'ai-agent', title: 'AI AGENT', subtitle: 'Instant Sizing & Advice', icon: Bot, color: 'from-violet-500 to-purple-500' },
    { id: 'catalog', title: 'CATALOG', subtitle: 'Live Inventory Display', icon: ShoppingBag, color: 'from-blue-500 to-cyan-500' },
    { id: 'payment', title: 'PAYMENT', subtitle: 'In-Chat UPI Settlement', icon: CreditCard, color: 'from-emerald-600 to-teal-600' }
  ];

  return (
    <section id="meta-ads" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white border-t border-slate-800 relative overflow-hidden">
      
      {/* Background Radial Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-pink-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs font-semibold border border-pink-500/30 mb-3">
            <Megaphone className="w-3.5 h-3.5 text-pink-400" />
            <span>Meta Ads &amp; Conversion API (CAPI)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance">
            Turn ads into conversations.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
            Stop sending ad traffic to high-dropoff landing pages. Start high-intent 1-on-1 WhatsApp conversations that convert at 3x higher rates.
          </p>

          <div className="mt-6 flex justify-center gap-3">
            <button
              onClick={() => setAdMode('click-to-whatsapp')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                adMode === 'click-to-whatsapp'
                  ? 'bg-pink-600 text-white shadow-lg'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Click-to-WhatsApp Flow
            </button>
            <button
              onClick={() => setAdMode('status-ads')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                adMode === 'status-ads'
                  ? 'bg-pink-600 text-white shadow-lg'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              WhatsApp Status Ads
            </button>
          </div>
        </div>

        {/* Mode 1: Full Main Linear Pipeline */}
        {adMode === 'click-to-whatsapp' && (
          <div className="space-y-12 animate-in fade-in duration-200">
            {/* The Visual Pipeline Nodes */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {mainFlowSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={step.id} className="relative group">
                    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between min-h-[150px] shadow-lg hover:border-pink-500/50 transition-all hover:-translate-y-1">
                      <div>
                        <div className={`w-8 h-8 rounded-xl bg-gradient-to-tr ${step.color} flex items-center justify-center text-white mb-2 shadow-sm`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 block">Stage 0{idx + 1}</span>
                        <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide mt-0.5">{step.title}</h4>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-2">{step.subtitle}</p>
                    </div>

                    {/* Connecting Chevron on Desktop */}
                    {idx < mainFlowSteps.length - 1 && (
                      <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-slate-600">
                        <ArrowRight className="w-4 h-4 text-pink-400" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Simulated Ads Manager + Conversational ROAS Attribution */}
            <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Ad Creative Simulation */}
                <div className="lg:col-span-5 bg-slate-950 rounded-2xl p-5 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
                    <span className="font-semibold text-white">Instagram Sponsored Story</span>
                    <span className="text-pink-400 font-mono">CTWA Enabled</span>
                  </div>

                  <div className="h-44 rounded-xl bg-gradient-to-tr from-pink-900/70 via-rose-950 to-slate-900 p-4 flex flex-col justify-end text-white border border-pink-500/20">
                    <span className="text-[10px] uppercase font-bold text-pink-300">Monsoon Collection 2026</span>
                    <h5 className="font-bold text-base">Zero Wet Socks. 100% Breathable.</h5>
                    <p className="text-[11px] text-slate-300 mt-1">Tap below to chat directly with footwear stylist on WhatsApp.</p>
                  </div>

                  <div className="p-3 bg-emerald-600 text-white rounded-xl text-xs font-bold flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <MessageSquare className="w-4 h-4" />
                      <span>Send WhatsApp Message</span>
                    </span>
                    <span className="text-[10px] font-mono opacity-80">0-Click App Switch</span>
                  </div>
                </div>

                {/* Attribution Metrics Side */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="font-bold text-sm text-white flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      Closed-Loop CAPI Revenue Attribution
                    </span>
                    <span className="text-xs text-emerald-400 font-mono">100% Match Rate</span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                      <span className="text-slate-400 text-xs block font-mono">Ad Spend</span>
                      <span className="text-lg font-bold font-mono text-white">₹18,400</span>
                    </div>

                    <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                      <span className="text-slate-400 text-xs block font-mono">Conversations</span>
                      <span className="text-lg font-bold font-mono text-white">1,482</span>
                    </div>

                    <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                      <span className="text-slate-400 text-xs block font-mono">Attributed ROAS</span>
                      <span className="text-lg font-bold font-mono text-emerald-400">7.84x</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    When a buyer completes the in-chat payment, CocoonMail automatically transmits an offline purchase event to Meta Conversion API (CAPI). Your Meta algorithm optimizes for high-ticket buyers rather than cheap clicks.
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={onOpenStartFree}
                      className="px-6 py-3 bg-pink-600 hover:bg-pink-500 text-white rounded-xl text-xs sm:text-sm font-semibold shadow-lg transition-all cursor-pointer flex items-center gap-2"
                    >
                      <span>Connect Meta Ads Manager</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Mode 2: WhatsApp Status Ad -> WhatsApp Conversation */}
        {adMode === 'status-ads' && (
          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl animate-in fade-in duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* WhatsApp Status Card */}
              <div className="lg:col-span-5 bg-slate-950 rounded-2xl p-5 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-800 text-xs">
                  <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
                  <span className="font-semibold text-white">WhatsApp Status Ad Simulation</span>
                </div>

                <div className="h-56 rounded-xl bg-gradient-to-t from-slate-950 via-emerald-950 to-slate-900 p-4 flex flex-col justify-between border border-emerald-500/30">
                  <div className="flex items-center justify-between text-xs text-emerald-300">
                    <span className="font-bold">Cocoon Official Store</span>
                    <span className="text-[10px] font-mono">Status Ad</span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold text-emerald-400 uppercase">Flash VIP Drop</span>
                    <h5 className="font-bold text-sm text-white">Exclusive 30% Off Running Shoes for Status Viewers</h5>
                    <p className="text-[11px] text-slate-300">Swipe up to unlock VIP discount coupon in WhatsApp chat.</p>
                  </div>

                  <div className="py-2 bg-emerald-500 text-white rounded-lg text-center text-xs font-bold flex items-center justify-center gap-1 shadow-sm">
                    <span>Swipe up to chat</span>
                    <ArrowDown className="w-3.5 h-3.5 rotate-180" />
                  </div>
                </div>
              </div>

              {/* Status Flow Explanation */}
              <div className="lg:col-span-7 space-y-5">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                  Status Broadcast to 1-on-1 Dialogue
                </span>
                <h3 className="text-2xl font-bold text-white">
                  WhatsApp Status Ads that trigger instant personalized threads.
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Engage active WhatsApp users right where they check daily updates. Swiping up on your Status Ad creates a verified 1-on-1 thread with your pre-populated promotional token.
                </p>

                <div className="space-y-2 text-xs text-slate-300 font-mono">
                  <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                    <span>WhatsApp Status View</span>
                    <span className="text-emerald-400 font-semibold">92% View-Through</span>
                  </div>
                  <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                    <span>Swipe Up to Chat Handshake</span>
                    <span className="text-emerald-400 font-semibold">41.8% Swipe Rate</span>
                  </div>
                  <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                    <span>AI Discount Applied &amp; Checkout Settled</span>
                    <span className="text-emerald-400 font-semibold">Instant In-Chat</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenStartFree}
                    className="px-6 py-3 bg-pink-600 hover:bg-pink-500 text-white rounded-xl text-xs sm:text-sm font-semibold shadow-md transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>Connect Meta</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
