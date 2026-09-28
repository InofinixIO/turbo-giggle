import React, { useState } from 'react';
import { 
  BarChart3, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Mail, 
  MessageSquare, 
  Megaphone, 
  CreditCard, 
  Clock, 
  Activity, 
  Filter, 
  ChevronRight, 
  Check, 
  DollarSign, 
  PieChart, 
  Zap
} from 'lucide-react';
import { PlatformPageId } from '../components/PlatformNavSwitcher';

interface AnalyticsPageProps {
  onOpenStartFree: () => void;
  onOpenBookDemo: () => void;
  onNavigateModule: (moduleId: PlatformPageId) => void;
}

export const AnalyticsPage: React.FC<AnalyticsPageProps> = ({
  onOpenStartFree,
  onOpenBookDemo,
  onNavigateModule
}) => {
  const [selectedChannel, setSelectedChannel] = useState<'all' | 'email' | 'whatsapp' | 'ads'>('all');
  const [dateRange, setDateRange] = useState<'7d' | '30d' | '90d'>('30d');

  return (
    <div className="bg-white text-slate-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-blue-50/70 via-indigo-50/30 to-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1d4ed80a_1px,transparent_1px),linear-gradient(to_bottom,#1d4ed80a_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-blue-700 tracking-wide uppercase">
            <BarChart3 className="w-4 h-4" />
            <span>Unified Omnichannel Attribution Engine</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-600">Cross-Platform Analytics</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Copy */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                One source of truth for <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600">every conversation and conversion</span>.
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Eliminate channel silos. Measure the entire end-to-end customer journey from initial Meta ad impression or email send, through WhatsApp conversation, catalog browse, in-chat payment, and lifetime retention.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenStartFree}
                  className="px-7 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold text-base shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Live Analytics</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenBookDemo}
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200 shadow-sm transition-all hover:border-slate-300 flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Custom Reporting</span>
                </button>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Closed-Loop Dollar Attribution</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Real-Time Stream Processing</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>BigQuery &amp; Snowflake Export</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Simulator: Omnichannel Funnel & Metrics Dashboard */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xl shadow-blue-950/10 overflow-hidden">
                
                {/* Header Toolbar */}
                <div className="bg-slate-900 px-4 py-3 flex items-center justify-between text-white border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-mono text-slate-300">CocoonMail Unified Attribution Telemetry</span>
                  </div>

                  <div className="flex bg-slate-800 rounded-lg p-0.5 text-xs">
                    {(['7d', '30d', '90d'] as const).map((r) => (
                      <button
                        key={r}
                        onClick={() => setDateRange(r)}
                        className={`px-2 py-0.5 rounded text-[11px] font-sans font-medium transition-colors ${
                          dateRange === r ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                {/* KPI Ribbon */}
                <div className="bg-slate-50 border-b border-slate-200 p-4 grid grid-cols-3 gap-3 text-xs">
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                    <p className="text-[10px] text-slate-400">Total Attributed Revenue</p>
                    <p className="text-lg font-black text-slate-900 font-mono">$186,420</p>
                    <span className="text-[10px] text-emerald-600 font-bold">+28.4% vs last period</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                    <p className="text-[10px] text-slate-400">Blended Conversion Rate</p>
                    <p className="text-lg font-black text-emerald-600 font-mono">15.7%</p>
                    <span className="text-[10px] text-slate-500">Email + WhatsApp</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                    <p className="text-[10px] text-slate-400">Median Response Time</p>
                    <p className="text-lg font-black text-indigo-600 font-mono">11 sec</p>
                    <span className="text-[10px] text-slate-500">AI Agents 24/7</span>
                  </div>
                </div>

                {/* Visual End-to-End Funnel */}
                <div className="p-4 bg-white space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-900">End-to-End Customer Conversion Funnel</span>
                    <span className="text-[10px] text-slate-500">Live 30-Day Cohort</span>
                  </div>

                  {/* Funnel Stages */}
                  <div className="space-y-2 text-xs">
                    
                    {/* Stage 1: Meta Ad Impressions */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-slate-600">
                        <span className="flex items-center gap-1.5"><Megaphone className="w-3.5 h-3.5 text-rose-500" /> 1. Meta Ad Clicks / Email Dispatched</span>
                        <span className="font-bold text-slate-900 font-mono">124,500</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-rose-500 h-2 rounded-full" style={{ width: '100%' }} />
                      </div>
                    </div>

                    {/* Stage 2: WhatsApp Conversations Initiated */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-slate-600">
                        <span className="flex items-center gap-1.5"><MessageSquare className="w-3.5 h-3.5 text-emerald-600" /> 2. WhatsApp Conversations Started</span>
                        <span className="font-bold text-slate-900 font-mono">18,420 (14.8%)</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '68%' }} />
                      </div>
                    </div>

                    {/* Stage 3: Catalog Browsed */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-slate-600">
                        <span className="flex items-center gap-1.5"><Activity className="w-3.5 h-3.5 text-amber-500" /> 3. Catalog Products Browsed</span>
                        <span className="font-bold text-slate-900 font-mono">9,840 (53.4%)</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-amber-500 h-2 rounded-full" style={{ width: '48%' }} />
                      </div>
                    </div>

                    {/* Stage 4: Added to Cart */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-slate-600">
                        <span className="flex items-center gap-1.5"><DollarSign className="w-3.5 h-3.5 text-indigo-500" /> 4. Items Added to Cart</span>
                        <span className="font-bold text-slate-900 font-mono">4,620 (46.9%)</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '32%' }} />
                      </div>
                    </div>

                    {/* Stage 5: Payment Completed */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-slate-600">
                        <span className="flex items-center gap-1.5"><CreditCard className="w-3.5 h-3.5 text-teal-600" /> 5. Payments Completed</span>
                        <span className="font-bold text-emerald-600 font-mono">2,890 (62.5%)</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-teal-500 h-2 rounded-full" style={{ width: '22%' }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Live Pulse */}
                <div className="bg-slate-900 px-4 py-2 text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live Event Ingestion: <strong>1,840 events/min</strong></span>
                  </div>
                  <span className="text-blue-400 font-medium">99.99% Event Integrity</span>
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
            <h2 className="text-xs font-bold text-blue-700 uppercase tracking-wider">Telemetry &amp; Attribution</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Connect Every Metric to Real Dollars
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                <PieChart className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">Multi-Touch Attribution Modeling</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Compare First-Touch, Last-Touch, Linear, and Algorithmic models to see which campaigns and channels actually drive conversions.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">Conversation Quality Telemetry</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Track AI Agent resolution rates, human escalation frequency, average first-response latency, and post-chat CSAT scores.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                <Activity className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">Deliverability &amp; Reputation Radar</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Monitor IP pool reputation, SPF/DKIM verification rates, spam complaint percentages, and WhatsApp Quality Rating status.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT CONNECTS TO THE REST OF COCOONMAIL */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-blue-200 bg-white rounded-3xl p-8 sm:p-12 shadow-sm">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Unified Architecture</span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 mb-3">
                How Analytics connects to the rest of CocoonMail
              </h3>
              <p className="text-sm text-slate-600">
                Analytics isn&apos;t a separate reporting tool. It is fed in real-time by all 10 platform modules with zero manual ETL pipelines.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <button
                onClick={() => onNavigateModule('ads')}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-rose-400 hover:bg-rose-50/20 transition-all text-left group cursor-pointer"
              >
                <h5 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-rose-600">Ads ROI Feedback</h5>
                <p className="text-xs text-slate-500">Transmits real purchase conversions to Meta CAPI for optimal ad bids.</p>
              </button>

              <button
                onClick={() => onNavigateModule('ai-agents')}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-violet-400 hover:bg-violet-50/20 transition-all text-left group cursor-pointer"
              >
                <h5 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-violet-600">AI Quality Scoring</h5>
                <p className="text-xs text-slate-500">Flags low-confidence or negative-sentiment conversations for review.</p>
              </button>

              <button
                onClick={() => onNavigateModule('segmentation')}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-cyan-400 hover:bg-cyan-50/20 transition-all text-left group cursor-pointer"
              >
                <h5 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-cyan-600">CDP Cohorts</h5>
                <p className="text-xs text-slate-500">Filter analytics by dynamic customer segments, VIPs, or geo regions.</p>
              </button>

              <button
                onClick={() => onNavigateModule('payments')}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-teal-400 hover:bg-teal-50/20 transition-all text-left group cursor-pointer"
              >
                <h5 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-teal-600">Revenue Reconciliation</h5>
                <p className="text-xs text-slate-500">Reconcile settled gateway funds with exact campaigns and conversations.</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Get total visibility into your customer journey today.
          </h2>
          <p className="text-blue-100 max-w-xl mx-auto text-sm">
            Eliminate guesswork. Measure every email, WhatsApp message, AI conversation, and payment in one unified dashboard.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenStartFree}
              className="px-8 py-3.5 rounded-xl bg-white text-blue-800 hover:bg-blue-50 font-bold shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              Start Free Analytics Trial
            </button>
            <button
              onClick={onOpenBookDemo}
              className="px-7 py-3.5 rounded-xl bg-blue-800 hover:bg-blue-900 text-white font-semibold border border-blue-600 transition-colors cursor-pointer"
            >
              Request Custom Enterprise Dashboard
            </button>
          </div>
          <p className="text-xs text-blue-200 font-medium">
            30-day data retention on free tier · Unlimited seat licenses
          </p>
        </div>
      </section>

    </div>
  );
};
