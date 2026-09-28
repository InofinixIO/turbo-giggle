import React, { useState } from 'react';
import { 
  Mail, 
  MessageSquare, 
  Bot, 
  GitFork, 
  Users, 
  ShoppingBag, 
  CreditCard, 
  BarChart3, 
  Megaphone,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Smartphone,
  ShieldCheck,
  Zap,
  Layers
} from 'lucide-react';
import { InteractiveWhatsAppSimulator } from './InteractiveWhatsAppSimulator';
import { VisualAutomationCanvas } from './VisualAutomationCanvas';
import { SegmentationBuilder } from './SegmentationBuilder';

interface ProductEcosystemProps {
  onOpenStartFree: () => void;
  onOpenBookDemo: () => void;
}

export const ProductEcosystem: React.FC<ProductEcosystemProps> = ({
  onOpenStartFree,
  onOpenBookDemo
}) => {
  const [activeTab, setActiveTab] = useState<'whatsapp' | 'email' | 'automation' | 'segmentation' | 'commerce' | 'ads'>('whatsapp');

  return (
    <section id="platform" className="py-24 bg-slate-50/60 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 block mb-2">
            The Connected Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            Engineered as one operating platform, not seven disjointed tools.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Stop stitching together an email sender, a WhatsApp bot, an automation engine, and a checkout plugin. Experience true native synchronization.
          </p>
        </div>

        {/* Module Switcher Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-1 p-1.5 bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-x-auto max-w-full scrollbar-none">
            <button
              onClick={() => setActiveTab('whatsapp')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'whatsapp'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp &amp; AI Agents</span>
            </button>

            <button
              onClick={() => setActiveTab('email')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'email'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>Email &amp; Transactional</span>
            </button>

            <button
              onClick={() => setActiveTab('automation')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'automation'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <GitFork className="w-4 h-4" />
              <span>Visual Workflows</span>
            </button>

            <button
              onClick={() => setActiveTab('segmentation')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'segmentation'
                  ? 'bg-cyan-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Dynamic Segments</span>
            </button>

            <button
              onClick={() => setActiveTab('commerce')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'commerce'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Catalog &amp; Payments</span>
            </button>

            <button
              onClick={() => setActiveTab('ads')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'ads'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Megaphone className="w-4 h-4" />
              <span>Meta Ads &amp; ROAS</span>
            </button>
          </div>
        </div>

        {/* Tab Content 1: WhatsApp & AI Agents */}
        {activeTab === 'whatsapp' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-200">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Official Meta Business Solution Provider</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                Turn WhatsApp into your primary revenue generator.
              </h3>

              <p className="text-slate-600 text-base leading-relaxed">
                Do not settle for simple broadcast notifications. CocoonMail powers high-converting two-way conversations with autonomous AI agents that know your entire product catalog, size guides, and order database.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-sm text-slate-900 block">Green Tick Verification &amp; Unlimited Broadcasts</strong>
                    <span className="text-xs text-slate-500">Tier-1 direct telecom routing with 98% read rates within 15 minutes.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-sm text-slate-900 block">Autonomous Conversational AI Agents</strong>
                    <span className="text-xs text-slate-500">Natural language reasoning that answers stock queries, provides styling advice, and shares videos.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-sm text-slate-900 block">Graceful Human Agent Escalation</strong>
                    <span className="text-xs text-slate-500">Shared team inbox with internal notes, customer timeline, and assignment rules.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={onOpenStartFree}
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-sm font-semibold shadow-md transition-all cursor-pointer"
                >
                  Start WhatsApp Trial
                </button>
                <button
                  onClick={onOpenBookDemo}
                  className="px-5 py-3 text-slate-700 hover:text-slate-900 font-medium text-sm transition-colors cursor-pointer"
                >
                  Schedule Live Walkthrough →
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <InteractiveWhatsAppSimulator />
            </div>
          </div>
        )}

        {/* Tab Content 2: Email & Transactional */}
        {activeTab === 'email' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-200">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-semibold border border-blue-200">
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <span>99.8% Global Inbox Placement SLA</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                High-deliverability marketing &amp; transactional email.
              </h3>

              <p className="text-slate-600 text-base leading-relaxed">
                Design editorial marketing campaigns with our modular drag-and-drop designer, and send critical transactional receipts via dedicated IP pools with automatic SPF, DKIM, and DMARC enforcement.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-sm text-slate-900 block">Dedicated IP Warming &amp; Reputation Guard</strong>
                    <span className="text-xs text-slate-500">Intelligent throttle algorithms protect domain sender reputation automatically.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-sm text-slate-900 block">Dynamic Liquid Templating</strong>
                    <span className="text-xs text-slate-500">Inject personalized product recommendations and localized currency figures.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-sm text-slate-900 block">Multichannel Fallback Rules</strong>
                    <span className="text-xs text-slate-500">If an urgent order update email goes unread in 3 hours, automatically dispatch WhatsApp ping.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenStartFree}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-semibold shadow-md transition-all cursor-pointer"
                >
                  Explore Email Infrastructure
                </button>
              </div>
            </div>

            {/* Simulated Email Studio UI */}
            <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200 shadow-xl p-5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-900">Campaign: VIP Summer Lookbook</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-mono">Ready to Dispatch</span>
                </div>
                <span className="text-slate-400 font-mono text-[11px]">Deliverability Score: 99.8%</span>
              </div>

              <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 p-4 space-y-3">
                <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Subject Line</span>
                    <strong className="text-slate-900">Aarav, your VIP HydroBlack invite is inside</strong>
                  </div>
                  <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded text-[11px] font-mono">A/B Test 50/50</span>
                </div>

                <div className="bg-white rounded-xl border border-slate-200/80 p-5 space-y-4">
                  <div className="h-28 rounded-xl bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 p-4 flex flex-col justify-end text-white">
                    <span className="text-[10px] uppercase tracking-wider text-blue-300 font-bold">Exclusive Early Access</span>
                    <h5 className="font-bold text-base">The Monsoon HydroBlack Capsule</h5>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Crafted with 3-layer microporous waterproofing. Pre-orders include complimentary storm socks and free express delivery.
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="font-mono text-sm font-bold text-slate-900">₹2,499.00</span>
                    <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold">
                      Claim Your Size UK 9
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs pt-1">
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-400 text-[10px] block">Open Rate Avg</span>
                  <span className="font-bold text-slate-800 font-mono text-sm">46.2%</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-400 text-[10px] block">Click-to-Open</span>
                  <span className="font-bold text-indigo-600 font-mono text-sm">21.8%</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-400 text-[10px] block">Unsubscribe Rate</span>
                  <span className="font-bold text-emerald-600 font-mono text-sm">&lt; 0.08%</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 3: Visual Workflows */}
        {activeTab === 'automation' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <VisualAutomationCanvas />
          </div>
        )}

        {/* Tab Content 4: Dynamic Segments */}
        {activeTab === 'segmentation' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <SegmentationBuilder />
          </div>
        )}

        {/* Tab Content 5: Catalog & Payments */}
        {activeTab === 'commerce' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-200">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold border border-amber-200">
                <ShoppingBag className="w-3.5 h-3.5 text-amber-600" />
                <span>Conversational Commerce</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                Showcase catalogs and accept native payments inside chat.
              </h3>

              <p className="text-slate-600 text-base leading-relaxed">
                Navigating buyers to an external website introduces 5-8 friction points and causes over 70% cart abandonment. CocoonMail allows customers to browse live synchronized inventory and settle with UPI, Apple Pay, or credit cards directly inside the conversation.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-sm text-slate-900 block">Real-Time Inventory Synchronization</strong>
                    <span className="text-xs text-slate-500">Live 2-way sync with Shopify, WooCommerce, Magento, or custom REST endpoints.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-sm text-slate-900 block">One-Tap UPI Intent &amp; Global Gateways</strong>
                    <span className="text-xs text-slate-500">Native NPCI UPI flows for India, plus Stripe &amp; Razorpay for international credit cards.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-sm text-slate-900 block">Instant Automated Tax Invoices</strong>
                    <span className="text-xs text-slate-500">GST-compliant and VAT receipts generated and dispatched via email and WhatsApp.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenStartFree}
                  className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-xl text-sm font-semibold shadow-md transition-all cursor-pointer"
                >
                  Enable WhatsApp Payments
                </button>
              </div>
            </div>

            {/* Catalog & Checkout Mockup */}
            <div className="lg:col-span-6 bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-800">
                <span className="font-semibold text-slate-200">WhatsApp Commerce Hub</span>
                <span className="text-emerald-400 font-mono">Shopify Sync Active</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-2">
                  <div className="h-16 rounded bg-slate-800 flex items-center justify-center text-[10px] text-slate-400">
                    Product Image
                  </div>
                  <span className="font-semibold block truncate">HydroBlack Sneaker UK 9</span>
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-400 font-bold font-mono">₹2,499</span>
                    <span className="text-[10px] text-slate-400 font-mono">Stock: 4</span>
                  </div>
                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-2">
                  <div className="h-16 rounded bg-slate-800 flex items-center justify-center text-[10px] text-slate-400">
                    Product Image
                  </div>
                  <span className="font-semibold block truncate">StormTech Windbreaker</span>
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-400 font-bold font-mono">₹3,999</span>
                    <span className="text-[10px] text-slate-400 font-mono">Stock: 12</span>
                  </div>
                </div>
              </div>

              {/* UPI Intent Simulator */}
              <div className="bg-[#111b21] p-4 rounded-2xl border border-emerald-500/40 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <CreditCard className="w-4 h-4" /> Native UPI Payment Gateway
                  </span>
                  <span className="text-slate-400 font-mono text-[10px]">NPCI Fast Route</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-xl flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Total Order Amount</span>
                    <span className="text-lg font-bold font-mono text-white">₹2,499.00</span>
                  </div>
                  <span className="px-3 py-1 bg-emerald-600 text-white rounded-lg text-xs font-semibold">
                    Pay in 1-Click
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                  <span>Zero redirect to browser</span>
                  <span className="text-emerald-400 font-semibold">78.5% Checkout Rate</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 6: Meta Ads & ROAS */}
        {activeTab === 'ads' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-200">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-800 text-xs font-semibold border border-rose-200">
                <Megaphone className="w-3.5 h-3.5 text-rose-600" />
                <span>Meta Ads &amp; WhatsApp Status Ads</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                Acquire high-intent customers with Click-to-WhatsApp Ads.
              </h3>

              <p className="text-slate-600 text-base leading-relaxed">
                Connect your Meta Ads Manager directly to CocoonMail. Track ad spend against real conversational purchases and dispatch offline purchase events automatically via the Meta Conversion API (CAPI) to optimize algorithmic bidding.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-sm text-slate-900 block">Click-to-WhatsApp (CTWA) Attribution</strong>
                    <span className="text-xs text-slate-500">Know exactly which ad creative, ad set, and campaign delivered the highest revenue.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-sm text-slate-900 block">WhatsApp Status Ads</strong>
                    <span className="text-xs text-slate-500">Publish interactive status promotions to your opted-in subscriber base.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-sm text-slate-900 block">Continuous Custom Audience Sync</strong>
                    <span className="text-xs text-slate-500">Push VIP segments directly into Meta lookalikes for 3x lower customer acquisition costs.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenStartFree}
                  className="px-6 py-3 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-sm font-semibold shadow-md transition-all cursor-pointer"
                >
                  Connect Meta Ads Manager
                </button>
              </div>
            </div>

            {/* Ads Manager & CAPI Dashboard UI */}
            <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200 shadow-xl p-5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs">
                <span className="font-bold text-slate-900">Meta CAPI Campaign Performance</span>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-mono text-[10px]">Attribution: 100% Match</span>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-slate-900 block">Monsoon_Sneaker_Reel_Drop</span>
                    <span className="text-slate-500 text-[11px]">Click-to-WhatsApp · IG Story + Feed</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-emerald-600 font-mono text-sm block">7.84x ROAS</span>
                    <span className="text-[10px] text-slate-400 font-mono">Spend: ₹18,400 → Rev: ₹1,44,256</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-slate-900 block">VIP_Early_Access_Lookbook</span>
                    <span className="text-slate-500 text-[11px]">WhatsApp Status + Dynamic Retargeting</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-emerald-600 font-mono text-sm block">9.20x ROAS</span>
                    <span className="text-[10px] text-slate-400 font-mono">Spend: ₹6,500 → Rev: ₹59,800</span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-100 text-xs text-indigo-950 flex items-center justify-between">
                <span className="font-medium">Meta Conversion API Event Match Quality</span>
                <strong className="font-mono text-indigo-700 font-bold">9.4 / 10 (Great)</strong>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
