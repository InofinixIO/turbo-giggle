import React, { useState } from 'react';
import { 
  Megaphone, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare, 
  Bot, 
  ShoppingBag, 
  CreditCard, 
  TrendingUp, 
  Instagram, 
  Facebook, 
  ChevronRight, 
  Check, 
  DollarSign, 
  Eye, 
  Target,
  BarChart3
} from 'lucide-react';
import { PlatformPageId } from '../components/PlatformNavSwitcher';

interface AdsPageProps {
  onOpenStartFree: () => void;
  onOpenBookDemo: () => void;
  onNavigateModule: (moduleId: PlatformPageId) => void;
}

export const AdsPage: React.FC<AdsPageProps> = ({
  onOpenStartFree,
  onOpenBookDemo,
  onNavigateModule
}) => {
  const [adStep, setAdStep] = useState<1 | 2 | 3 | 4>(1);

  return (
    <div className="bg-white text-slate-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-rose-50/70 via-orange-50/30 to-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e11d480a_1px,transparent_1px),linear-gradient(to_bottom,#e11d480a_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-rose-600 tracking-wide uppercase">
            <Megaphone className="w-4 h-4" />
            <span>Meta Ads &amp; WhatsApp Status Ads</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-600">Click-to-Conversation</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Copy */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Turn ad clicks into conversations, <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600">not bounced landing pages</span>.
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Traditional ads send paid traffic to slow web pages where 70% drop off. CocoonMail bridges Meta Ads directly into instant WhatsApp conversations with 24/7 AI qualification, catalog discovery, and closed-loop ROAS attribution.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenStartFree}
                  className="px-7 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-semibold text-base shadow-lg shadow-rose-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 cursor-pointer"
                >
                  <span>Launch Click-to-WhatsApp Ads</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenBookDemo}
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200 shadow-sm transition-all hover:border-slate-300 flex items-center gap-2 cursor-pointer"
                >
                  <span>Book Strategy Call</span>
                </button>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-rose-600" />
                  <span>Meta Conversions API (CAPI) Integrated</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-rose-600" />
                  <span>62% Lower Cost Per Qualified Lead</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-rose-600" />
                  <span>Sub-1-Second AI Greeting</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Simulator: 4-Step Ad-to-Conversion Journey */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xl shadow-rose-900/10 overflow-hidden">
                
                {/* Step Bar */}
                <div className="bg-slate-900 px-4 py-3 flex items-center justify-between text-white border-b border-slate-800">
                  <span className="text-xs font-semibold text-rose-400">Click-to-WhatsApp Simulation</span>
                  <div className="flex gap-1">
                    {([1, 2, 3, 4] as const).map((step) => (
                      <button
                        key={step}
                        onClick={() => setAdStep(step)}
                        className={`w-6 h-6 rounded-full text-xs font-bold transition-all cursor-pointer ${
                          adStep === step ? 'bg-rose-500 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {step}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Interactive Flow Views */}
                <div className="p-6 bg-slate-50 min-h-[340px]">
                  {adStep === 1 && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                        <span className="flex items-center gap-1"><Instagram className="w-3.5 h-3.5 text-pink-600" /> Instagram Feed Sponsored Ad</span>
                        <span>Step 1: Ad Impression</span>
                      </div>
                      <div className="bg-white rounded-xl border border-slate-200 p-4 space-y-3 shadow-sm max-w-sm mx-auto">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">AA</div>
                          <div>
                            <p className="text-xs font-bold text-slate-900 leading-none">Aura Apparel</p>
                            <p className="text-[10px] text-slate-400">Sponsored</p>
                          </div>
                        </div>
                        <div className="h-36 bg-gradient-to-tr from-rose-500 via-pink-500 to-amber-500 rounded-lg flex items-center justify-center text-white font-bold text-center text-sm p-4">
                          Get 25% Off + Chat Live With A Personal Stylist
                        </div>
                        <p className="text-xs text-slate-600">
                          Looking for the perfect summer look? Tap below to chat directly with our styling team on WhatsApp.
                        </p>
                        <button
                          onClick={() => setAdStep(2)}
                          className="w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow transition-all cursor-pointer"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>Send WhatsApp Message (25% Promo)</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {adStep === 2 && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                        <span>Step 2: Instant WhatsApp Chat Opened</span>
                        <span className="text-emerald-600 font-bold">Zero Friction Handoff</span>
                      </div>
                      <div className="bg-[#efeae2] p-4 rounded-xl border border-slate-300 max-w-sm mx-auto shadow-sm space-y-3 text-xs">
                        <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-slate-900 shadow-sm">
                          <p className="text-slate-500 text-[10px] uppercase font-bold">Pre-Filled Referral Message:</p>
                          <p className="text-slate-800 font-medium mt-1">
                            &quot;Hi Aura Apparel! I saw your Instagram ad for 25% off. Can you recommend pieces for a beach wedding?&quot;
                          </p>
                        </div>
                        <button
                          onClick={() => setAdStep(3)}
                          className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded font-bold text-xs shadow cursor-pointer"
                        >
                          Simulate Customer Taps Send ➔
                        </button>
                      </div>
                    </div>
                  )}

                  {adStep === 3 && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                        <span>Step 3: AI Agent 24/7 Qualification</span>
                        <span className="text-violet-600 font-bold">120ms Latency</span>
                      </div>
                      <div className="bg-[#efeae2] p-4 rounded-xl border border-slate-300 max-w-sm mx-auto shadow-sm space-y-2 text-xs">
                        <div className="bg-white p-3 rounded-lg border border-slate-200 text-slate-900 shadow-sm space-y-2">
                          <div className="flex items-center gap-1.5 text-violet-600 font-bold text-[11px]">
                            <Bot className="w-3.5 h-3.5" />
                            <span>Aura AI Assistant:</span>
                          </div>
                          <p className="text-slate-700 text-[11px] leading-relaxed">
                            &quot;Hello! For a beach wedding, our breathable Linen Blazer &amp; Silk Chiffon Midi are trending. Here is your 25% coupon code <strong className="font-mono text-emerald-600">BEACH25</strong> applied!&quot;
                          </p>
                          <div className="bg-slate-50 p-2 rounded border border-slate-200 flex items-center justify-between">
                            <span className="font-bold text-[11px]">Silk Chiffon Midi ($110)</span>
                            <button
                              onClick={() => setAdStep(4)}
                              className="px-2.5 py-1 bg-emerald-600 text-white rounded text-[10px] font-bold"
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => setAdStep(4)}
                          className="w-full py-1.5 bg-slate-900 text-white rounded font-bold text-xs shadow cursor-pointer"
                        >
                          View Attribution Analytics ➔
                        </button>
                      </div>
                    </div>
                  )}

                  {adStep === 4 && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                        <span>Step 4: Meta CAPI Closed-Loop Attribution</span>
                        <span className="text-emerald-600 font-bold">ROAS 4.8x</span>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-3 text-xs max-w-sm mx-auto">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                            <p className="text-[10px] text-slate-400">Ad Click Cost</p>
                            <p className="font-bold text-slate-900 text-sm">$0.42 CPC</p>
                          </div>
                          <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                            <p className="text-[10px] text-slate-400">WhatsApp Conversion</p>
                            <p className="font-bold text-emerald-600 text-sm">34.2%</p>
                          </div>
                        </div>
                        <div className="p-2.5 bg-emerald-50 rounded border border-emerald-200">
                          <div className="flex items-center justify-between font-bold text-emerald-800">
                            <span>Order #CCN-7192</span>
                            <span>$110.00 Paid</span>
                          </div>
                          <p className="text-[10px] text-emerald-600 mt-0.5">Reported to Meta CAPI within 400ms</p>
                        </div>
                        <button
                          onClick={() => setAdStep(1)}
                          className="w-full py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded font-semibold text-xs transition-colors cursor-pointer"
                        >
                          Restart Journey Simulation
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="bg-slate-900 px-4 py-2 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Ad Type: <strong className="text-rose-400">CTWA &amp; Status Ads</strong></span>
                  <span className="text-white">Full Privacy Safe Signal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE CAPABILITIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <h2 className="text-xs font-bold text-rose-600 uppercase tracking-wider">High ROAS Advertising</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Click-to-WhatsApp Outperforms Traditional Landing Pages
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-slate-200 hover:border-rose-300 hover:shadow-lg transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">Direct Lead Capture Without Forms</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                When a user clicks your ad, you instantly receive their verified WhatsApp phone number and name. No typing into clunky 8-field forms.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 hover:border-pink-300 hover:shadow-lg transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center font-bold">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">Meta Conversions API (CAPI)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Feed offline transactions and in-chat purchases back to Meta&apos;s ad algorithm. Optimize specifically for buyers, not just clickers.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">WhatsApp Status Ads Placement</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Reach active users inside the WhatsApp Status tab where engagement is highest, with 1-tap swipe-up into a private conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT CONNECTS TO THE REST OF COCOONMAIL */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-rose-200 bg-white rounded-3xl p-8 sm:p-12 shadow-sm">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600">Unified Architecture</span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 mb-3">
                How Ads connect to the rest of CocoonMail
              </h3>
              <p className="text-sm text-slate-600">
                Ads don&apos;t end at the click. They instantly activate AI agents, catalog browsing, and segmented retargeting workflows.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <button
                onClick={() => onNavigateModule('ai-agents')}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-violet-400 hover:bg-violet-50/20 transition-all text-left group cursor-pointer"
              >
                <h5 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-violet-600">AI Agents</h5>
                <p className="text-xs text-slate-500">Every ad click is greeted 24/7 in &lt;1 second with custom intent prompts.</p>
              </button>

              <button
                onClick={() => onNavigateModule('catalog')}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:bg-amber-50/20 transition-all text-left group cursor-pointer"
              >
                <h5 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-amber-600">Product Catalog</h5>
                <p className="text-xs text-slate-500">Display the specific collection or product featured in the ad creative.</p>
              </button>

              <button
                onClick={() => onNavigateModule('segmentation')}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-cyan-400 hover:bg-cyan-50/20 transition-all text-left group cursor-pointer"
              >
                <h5 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-cyan-600">Dynamic CDP Segments</h5>
                <p className="text-xs text-slate-500">Sync high-LTV customer lists back into Meta as high-converting Lookalike Audiences.</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-16 bg-rose-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Stop losing ad spend on high-bounce landing pages.
          </h2>
          <p className="text-rose-100 max-w-xl mx-auto text-sm">
            Launch your first Click-to-WhatsApp ad campaign and start talking to ready buyers directly.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenStartFree}
              className="px-8 py-3.5 rounded-xl bg-white text-rose-700 hover:bg-rose-50 font-bold shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              Start Free Trial
            </button>
            <button
              onClick={onOpenBookDemo}
              className="px-7 py-3.5 rounded-xl bg-rose-700 hover:bg-rose-800 text-white font-semibold border border-rose-500/50 transition-colors cursor-pointer"
            >
              Schedule Ads Strategy Call
            </button>
          </div>
          <p className="text-xs text-rose-200 font-medium">
            Meta Business Partner Certified · Real-time CAPI sync
          </p>
        </div>
      </section>

    </div>
  );
};
