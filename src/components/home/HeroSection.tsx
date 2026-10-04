import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Mail, 
  MessageSquare, 
  Bot, 
  ShoppingBag, 
  CreditCard, 
  BarChart3, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Clock,
  Play,
  Smartphone,
  Send,
  Users
} from 'lucide-react';
import { ModalType } from '../../types';
import { useRouter } from '../../router/RouterContext';

interface HeroSectionProps {
  onOpenModal: (type: ModalType) => void;
  onExploreJourney?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenModal }) => {
  const { navigate } = useRouter();
  const [activeTab, setActiveTab] = useState<'overview' | 'whatsapp' | 'email'>('overview');

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50/20">
      
      {/* Background Tech Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-blue-500/10 via-indigo-500/15 to-violet-500/10 blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-emerald-400/5 blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-400/5 blur-3xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Headline & Value Proposition */}
        <div className="text-center max-w-4xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span>The Unified Customer Engagement & Commerce Operating Platform</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.08] text-balance mb-6">
            One platform.{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Every conversation.
            </span>{' '}
            Every conversion.
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed text-balance mb-8">
            Acquire customers with Meta Ads, engage them across Email and WhatsApp, automate conversations with 24/7 AI, showcase catalogs, and collect payments in one connected system.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <button
              onClick={() => onOpenModal('start-free')}
              className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 rounded-xl shadow-xl shadow-blue-500/25 hover:shadow-2xl transition-all transform active:scale-95 flex items-center justify-center gap-2 group"
            >
              <span>START FREE TRIAL</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onOpenModal('book-demo')}
              className="w-full sm:w-auto px-7 py-3.5 text-sm font-bold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl shadow-sm transition-all"
            >
              BOOK A DEMO
            </button>
          </div>

          {/* Microcopy */}
          <p className="text-xs text-slate-400 mb-8">
            No credit card required · 14-day free trial · Instant setup
          </p>

          {/* Feature Shortcuts Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-xs font-semibold text-slate-500">
            <button onClick={() => navigate('/platform/email')} className="hover:text-blue-600 transition-colors">Email Marketing</button>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <button onClick={() => navigate('/platform/whatsapp')} className="hover:text-emerald-600 transition-colors">WhatsApp API</button>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <button onClick={() => navigate('/platform/ai-agents')} className="hover:text-violet-600 transition-colors">AI Agents</button>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <button onClick={() => navigate('/platform/automation')} className="hover:text-amber-600 transition-colors">Automation</button>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <button onClick={() => navigate('/platform/ads')} className="hover:text-pink-600 transition-colors">Meta Ads</button>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <button onClick={() => navigate('/platform/catalog')} className="hover:text-rose-600 transition-colors">Product Catalog</button>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <button onClick={() => navigate('/platform/payments')} className="hover:text-teal-600 transition-colors">In-Chat Payments</button>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <button onClick={() => navigate('/platform/analytics')} className="hover:text-cyan-600 transition-colors">Analytics</button>
          </div>

        </div>

        {/* POLISHED SAAS PLATFORM UI MOCKUP WITH CUSTOMER BENEFIT BADGES */}
        <div className="mt-14 relative max-w-5xl mx-auto">
          
          {/* FLOATING BENEFIT BADGES */}
          {/* Badge 1: Top Left */}
          <div className="hidden lg:flex absolute -top-6 -left-6 z-20 items-center gap-3 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200/90 shadow-xl animate-bounce-slow">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">+340% WhatsApp ROAS</div>
              <div className="text-[11px] text-slate-500">98.4% open rate in 15 mins</div>
            </div>
          </div>

          {/* Badge 2: Top Right */}
          <div className="hidden lg:flex absolute -top-6 -right-6 z-20 items-center gap-3 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200/90 shadow-xl animate-bounce-slow">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">99.8% Inbox Guarantee</div>
              <div className="text-[11px] text-slate-500">Automated SPF/DKIM warmup</div>
            </div>
          </div>

          {/* Badge 3: Bottom Left */}
          <div className="hidden lg:flex absolute -bottom-6 -left-6 z-20 items-center gap-3 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200/90 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center font-black">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">24/7 Autonomous AI Sales</div>
              <div className="text-[11px] text-slate-500">Catalog-grounded checkout</div>
            </div>
          </div>

          {/* Badge 4: Bottom Right */}
          <div className="hidden lg:flex absolute -bottom-6 -right-6 z-20 items-center gap-3 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200/90 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-black">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Sub-45ms Edge Delivery</div>
              <div className="text-[11px] text-slate-500">Global tier-1 SMTP & Cloud API</div>
            </div>
          </div>

          {/* MAIN PLATFORM DASHBOARD CARD */}
          <div className="relative bg-white rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden backdrop-blur-xl">
            
            {/* Window Top Bar */}
            <div className="bg-slate-900 px-6 py-4 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/90" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/90" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/90" />
                </div>
                <div className="flex items-center gap-2 pl-3 border-l border-slate-800">
                  <span className="text-xs font-bold text-white tracking-tight">Cocoonmail</span>
                  <span className="text-[11px] text-slate-400">/ Workspace: Nike D2C Global</span>
                </div>
              </div>

              {/* View Switcher Tabs */}
              <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-xl">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'overview' 
                      ? 'bg-blue-600 text-white shadow-sm' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Omni Dashboard
                </button>
                <button
                  onClick={() => setActiveTab('whatsapp')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'whatsapp' 
                      ? 'bg-emerald-600 text-white shadow-sm' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  WhatsApp Live
                </button>
                <button
                  onClick={() => setActiveTab('email')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'email' 
                      ? 'bg-blue-600 text-white shadow-sm' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Email Studio
                </button>
              </div>
            </div>

            {/* Dashboard Workspace View */}
            <div className="p-6 sm:p-8 bg-slate-50/50">
              
              {/* TAB 1: OVERVIEW */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  {/* Top Stats Ribbon */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Attributed Revenue</span>
                      <div className="text-2xl font-black text-slate-900 mt-1">₹35,69,286</div>
                      <div className="text-[11px] font-bold text-emerald-600 mt-1 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" /> +32.4% this month
                      </div>
                    </div>

                    <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">WhatsApp Open Rate</span>
                      <div className="text-2xl font-black text-emerald-600 mt-1">98.4%</div>
                      <div className="text-[11px] font-semibold text-slate-500 mt-1">12,480 delivered</div>
                    </div>

                    <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Email Placement</span>
                      <div className="text-2xl font-black text-blue-600 mt-1">99.8%</div>
                      <div className="text-[11px] font-semibold text-slate-500 mt-1">Primary inbox guaranteed</div>
                    </div>

                    <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">In-Chat Orders</span>
                      <div className="text-2xl font-black text-violet-600 mt-1">1,420</div>
                      <div className="text-[11px] font-semibold text-slate-500 mt-1">UPI & Card settled</div>
                    </div>
                  </div>

                  {/* Active Campaigns Split */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    
                    {/* Left: Active Live Flow */}
                    <div className="lg:col-span-7 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                          <span className="text-xs font-bold text-slate-900">Active Multi-Channel Journeys</span>
                        </div>
                        <span className="text-[11px] font-bold text-blue-600">4,821 active contacts</span>
                      </div>

                      <div className="space-y-2.5 text-xs">
                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                              <MessageSquare className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="font-bold text-slate-900">VIP Drop WhatsApp Flash Broadcast</div>
                              <div className="text-[11px] text-slate-500">Segment: High LTV &gt; ₹5k · 98.4% open rate</div>
                            </div>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                            ₹14.2L Generated
                          </span>
                        </div>

                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                              <Mail className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="font-bold text-slate-900">Weekly Product Roundup Newsletter</div>
                              <div className="text-[11px] text-slate-500">Delivered to 48,291 subscribers · 0 bounces</div>
                            </div>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[10px] font-bold">
                            99.8% Inbox
                          </span>
                        </div>

                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center">
                              <Bot className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="font-bold text-slate-900">24/7 AI Catalog Sizing Assistant</div>
                              <div className="text-[11px] text-slate-500">Resolved 840 shoe queries autonomously</div>
                            </div>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-violet-100 text-violet-800 text-[10px] font-bold">
                            92% Automation
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Live Conversion Spotlight */}
                    <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white p-5 rounded-2xl shadow-xl space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                        <span className="text-[10px] font-mono text-emerald-400">REAL-TIME PURCHASE</span>
                        <span className="text-[10px] font-mono text-slate-400">42 seconds ago</span>
                      </div>

                      <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/80 space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-slate-400">Order #CM-48291</span>
                          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">
                            UPI Paid ₹4,999
                          </span>
                        </div>
                        <div className="text-xs font-bold text-white">Velocity Pro Carbon Runner (UK 9)</div>
                        <div className="text-[11px] text-slate-400">Customer: Priya Sharma · Mumbai</div>
                      </div>

                      <div className="pt-2 text-[11px] text-slate-400 flex items-center justify-between">
                        <span>Attributed Channel:</span>
                        <span className="font-bold text-emerald-400">Meta Ad → WhatsApp AI</span>
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {/* TAB 2: WHATSAPP LIVE INBOX */}
              {activeTab === 'whatsapp' && (
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm max-w-xl mx-auto space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs">
                        CM
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Cocoonmail Verified Store</div>
                        <div className="text-[10px] text-emerald-600 font-medium">Meta Verified Business · Active</div>
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold">
                      Green Badge
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="p-3 bg-slate-100 rounded-2xl rounded-tl-none max-w-xs text-slate-800">
                      Hi Priya! Looking for lightweight marathon running shoes?
                    </div>

                    <div className="p-3 bg-emerald-600 text-white rounded-2xl rounded-tr-none max-w-xs ml-auto">
                      Yes! Do you have the Velocity Pro in UK size 9?
                    </div>

                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl max-w-sm space-y-2">
                      <div className="font-bold text-slate-900">Velocity Pro Carbon Runner</div>
                      <div className="text-[11px] text-slate-600">In stock: UK 8, 9, 10 · ₹4,999.00</div>
                      <button className="w-full py-2 bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-sm">
                        Pay ₹4,999 with 1-Tap UPI
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: EMAIL STUDIO */}
              {activeTab === 'email' && (
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm max-w-xl mx-auto space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-xs font-bold text-slate-900">Visual Block Builder</span>
                    <span className="text-xs font-bold text-blue-600">99.8% Inbox Health</span>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-3 text-center">
                    <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">Summer Collection 2026</div>
                    <h3 className="text-lg font-black text-slate-900">Exclusive 20% VIP Early Access</h3>
                    <p className="text-xs text-slate-600">Reserved for our highest-tier loyalty subscribers.</p>
                    <button className="px-6 py-2 bg-blue-600 text-white font-bold text-xs rounded-xl">
                      Claim Your VIP Access
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
