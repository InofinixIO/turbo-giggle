import React, { useState } from 'react';
import { 
  Users, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Filter, 
  Mail, 
  MessageSquare, 
  ShoppingBag, 
  CreditCard, 
  MapPin, 
  Tag, 
  Activity, 
  Zap, 
  ChevronRight, 
  Check, 
  SlidersHorizontal,
  RefreshCw,
  Megaphone
} from 'lucide-react';
import { PlatformPageId } from '../components/PlatformNavSwitcher';

interface SegmentationPageProps {
  onOpenStartFree: () => void;
  onOpenBookDemo: () => void;
  onNavigateModule: (moduleId: PlatformPageId) => void;
}

export const SegmentationPage: React.FC<SegmentationPageProps> = ({
  onOpenStartFree,
  onOpenBookDemo,
  onNavigateModule
}) => {
  // Live Segment Interactive Filter State
  const [minSpend, setMinSpend] = useState<number>(100);
  const [whatsAppActiveOnly, setWhatsAppActiveOnly] = useState<boolean>(true);
  const [locationFilter, setLocationFilter] = useState<string>('all');
  const [emailEngagement, setEmailEngagement] = useState<string>('active');

  // Compute realistic dynamic audience based on filters
  const computeAudience = () => {
    let base = 28400;
    if (minSpend > 150) base -= 9200;
    if (minSpend > 250) base -= 8100;
    if (whatsAppActiveOnly) base = Math.round(base * 0.78);
    if (locationFilter !== 'all') base = Math.round(base * 0.42);
    if (emailEngagement === 'high') base = Math.round(base * 0.65);
    return Math.max(1240, base);
  };

  const audienceCount = computeAudience();
  const reachableWhatsApp = Math.round(audienceCount * 0.88);
  const reachableEmail = Math.round(audienceCount * 0.96);

  return (
    <div className="bg-white text-slate-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-cyan-50/70 via-sky-50/30 to-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0891b20a_1px,transparent_1px),linear-gradient(to_bottom,#0891b20a_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-cyan-600 tracking-wide uppercase">
            <Users className="w-4 h-4" />
            <span>Customer Data Platform (CDP)</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-600">Dynamic Segmentation</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Copy */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                The right message starts with the <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600">right audience</span>.
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Unified customer data engine and live dynamic segment builder. Segment by email open history, WhatsApp engagement, order value, location, and real-time custom attributes without writing SQL.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenStartFree}
                  className="px-7 py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-semibold text-base shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 cursor-pointer"
                >
                  <span>Build Dynamic Segment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenBookDemo}
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200 shadow-sm transition-all hover:border-slate-300 flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore CDP Demo</span>
                </button>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>Real-Time Auto-Enrollment</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>Zero Stale Static CSVs</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>Cross-Channel RFM Scoring</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Simulator: Live Dynamic Segment Builder */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xl shadow-cyan-900/10 overflow-hidden">
                
                {/* Header */}
                <div className="bg-slate-900 px-4 py-3 flex items-center justify-between text-white border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono text-slate-300">Segment: High_Value_Omnichannel_VIPs</span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">Dynamic Live Query</span>
                </div>

                {/* Interactive Filter Controls */}
                <div className="p-4 bg-slate-50 border-b border-slate-200 space-y-3 text-xs">
                  
                  {/* Condition 1: Minimum Spend */}
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                        <CreditCard className="w-3.5 h-3.5 text-cyan-600" />
                        Total Lifetime Spend:
                      </span>
                      <span className="font-bold text-cyan-700 font-mono">&gt; ${minSpend}</span>
                    </div>
                    <input 
                      type="range" 
                      min="50" 
                      max="300" 
                      step="25"
                      value={minSpend} 
                      onChange={(e) => setMinSpend(Number(e.target.value))}
                      className="w-full accent-cyan-600"
                    />
                  </div>

                  {/* Condition 2: WhatsApp Engagement Toggle */}
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="font-semibold text-slate-700">Has active WhatsApp interaction in last 30d</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={whatsAppActiveOnly} 
                        onChange={() => setWhatsAppActiveOnly(!whatsAppActiveOnly)}
                        className="sr-only peer"
                      />
                      <div className="w-8 h-4 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-cyan-600"></div>
                    </label>
                  </div>

                  {/* Condition 3: Location Select */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white p-2 rounded-xl border border-slate-200">
                      <span className="text-[10px] text-slate-400 block mb-1">Geographic Region:</span>
                      <select 
                        value={locationFilter} 
                        onChange={(e) => setLocationFilter(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded p-1 text-slate-800 font-medium text-xs"
                      >
                        <option value="all">Global (All Regions)</option>
                        <option value="in">India (Metro Tier 1)</option>
                        <option value="us">United States &amp; Canada</option>
                        <option value="eu">European Union</option>
                      </select>
                    </div>

                    <div className="bg-white p-2 rounded-xl border border-slate-200">
                      <span className="text-[10px] text-slate-400 block mb-1">Email Engagement:</span>
                      <select 
                        value={emailEngagement} 
                        onChange={(e) => setEmailEngagement(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded p-1 text-slate-800 font-medium text-xs"
                      >
                        <option value="active">Active (Opened last 60d)</option>
                        <option value="high">High (Clicked &gt; 3 links)</option>
                        <option value="all">Any Subscriber</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Live Count Result Display */}
                <div className="p-4 bg-white space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Matching Audience Count</p>
                      <p className="text-3xl font-black text-slate-900 tracking-tight">
                        {audienceCount.toLocaleString()} <span className="text-sm font-semibold text-cyan-600">profiles</span>
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center gap-1 text-[11px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        <RefreshCw className="w-3 h-3 animate-spin" /> Live Synchronized
                      </span>
                    </div>
                  </div>

                  {/* Reachability Bars */}
                  <div className="space-y-2 text-xs">
                    <div>
                      <div className="flex items-center justify-between text-slate-600 mb-1">
                        <span className="flex items-center gap-1.5"><MessageSquare className="w-3.5 h-3.5 text-emerald-600" /> WhatsApp Reachable</span>
                        <span className="font-bold text-slate-900">{reachableWhatsApp.toLocaleString()} (88%)</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '88%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-slate-600 mb-1">
                        <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-blue-600" /> Email Reachable</span>
                        <span className="font-bold text-slate-900">{reachableEmail.toLocaleString()} (96%)</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '96%' }} />
                      </div>
                    </div>
                  </div>

                  {/* 1-Click Action Buttons */}
                  <div className="pt-2 grid grid-cols-2 gap-2">
                    <button 
                      onClick={() => alert(`Enrolled ${audienceCount.toLocaleString()} profiles into WhatsApp Flash Campaign.`)}
                      className="py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Send to WhatsApp</span>
                    </button>
                    <button 
                      onClick={() => alert(`Enrolled ${audienceCount.toLocaleString()} profiles into Email Campaign.`)}
                      className="py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send to Email</span>
                    </button>
                  </div>
                </div>

                {/* Footer */}
                <div className="bg-slate-900 px-4 py-2 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Audience Refresh: <strong className="text-cyan-300">Continuous Sub-Second Event Ingestion</strong></span>
                  <span className="text-white font-mono">ID: seg_vip_89a02</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 8 SEGMENT FILTER DIMENSIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <h2 className="text-xs font-bold text-cyan-600 uppercase tracking-wider">Granular Precision</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Eight Dimensions of Behavioral Intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-5 rounded-2xl border border-slate-200 hover:border-cyan-300 hover:shadow-md transition-all space-y-2">
              <Users className="w-6 h-6 text-cyan-600" />
              <h4 className="font-bold text-slate-900 text-sm">1. Contact Properties</h4>
              <p className="text-xs text-slate-600">Created date, company size, lifecycle stage, lead score, language preference.</p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all space-y-2">
              <Mail className="w-6 h-6 text-blue-600" />
              <h4 className="font-bold text-slate-900 text-sm">2. Email Engagement</h4>
              <p className="text-xs text-slate-600">Opens, specific clicks, bounce records, unread durations, unsubscribe trends.</p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all space-y-2">
              <MessageSquare className="w-6 h-6 text-emerald-600" />
              <h4 className="font-bold text-slate-900 text-sm">3. WhatsApp Engagement</h4>
              <p className="text-xs text-slate-600">Quick reply clicks, inbound questions, media downloads, last message timestamp.</p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all space-y-2">
              <ShoppingBag className="w-6 h-6 text-amber-600" />
              <h4 className="font-bold text-slate-900 text-sm">4. Purchase &amp; Commerce</h4>
              <p className="text-xs text-slate-600">Total orders, lifetime value, average order value, cart abandonment count.</p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 hover:border-rose-300 hover:shadow-md transition-all space-y-2">
              <Tag className="w-6 h-6 text-rose-600" />
              <h4 className="font-bold text-slate-900 text-sm">5. Tags &amp; Labels</h4>
              <p className="text-xs text-slate-600">VIP Club, Early Adopter, High Churn Risk, Influencer, B2B Partner.</p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all space-y-2">
              <MapPin className="w-6 h-6 text-indigo-600" />
              <h4 className="font-bold text-slate-900 text-sm">6. Geographic Location</h4>
              <p className="text-xs text-slate-600">Country, state, metro city, postal code, local timezone calculation.</p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 hover:border-violet-300 hover:shadow-md transition-all space-y-2">
              <Activity className="w-6 h-6 text-violet-600" />
              <h4 className="font-bold text-slate-900 text-sm">7. Real-Time Events</h4>
              <p className="text-xs text-slate-600">Viewed pricing page 3 times, requested demo, downloaded whitepaper.</p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 hover:border-teal-300 hover:shadow-md transition-all space-y-2">
              <Zap className="w-6 h-6 text-teal-600" />
              <h4 className="font-bold text-slate-900 text-sm">8. Custom JSON Attributes</h4>
              <p className="text-xs text-slate-600">Store and query any custom metadata passed from your internal database or API.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT CONNECTS TO THE REST OF COCOONMAIL */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-cyan-200 bg-white rounded-3xl p-8 sm:p-12 shadow-sm">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-600">Unified Architecture</span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 mb-3">
                How Segmentation connects to the rest of CocoonMail
              </h3>
              <p className="text-sm text-slate-600">
                Segments are not static lists that sit in a folder. They power targeted broadcasts, trigger automated workflows, and sync with Meta Ads.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <button
                onClick={() => onNavigateModule('ads')}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-rose-400 hover:bg-rose-50/20 transition-all text-left group cursor-pointer"
              >
                <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm mb-1 group-hover:text-rose-600">
                  <Megaphone className="w-4 h-4 text-rose-500" />
                  <span>Meta Lookalike Sync</span>
                </div>
                <p className="text-xs text-slate-500">Automatically sync top 5% VIP customers as Meta Custom Audiences.</p>
              </button>

              <button
                onClick={() => onNavigateModule('automation')}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/20 transition-all text-left group cursor-pointer"
              >
                <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm mb-1 group-hover:text-indigo-600">
                  <Zap className="w-4 h-4 text-indigo-500" />
                  <span>Workflow Enrollment</span>
                </div>
                <p className="text-xs text-slate-500">Trigger welcome and VIP nurture workflows the instant a user enters a segment.</p>
              </button>

              <button
                onClick={() => onNavigateModule('email')}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-blue-50/20 transition-all text-left group cursor-pointer"
              >
                <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm mb-1 group-hover:text-blue-600">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <span>Email Campaigns</span>
                </div>
                <p className="text-xs text-slate-500">Ensure high engagement and low spam complaints by targeting active openers.</p>
              </button>

              <button
                onClick={() => onNavigateModule('whatsapp')}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/20 transition-all text-left group cursor-pointer"
              >
                <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm mb-1 group-hover:text-emerald-600">
                  <MessageSquare className="w-4 h-4 text-emerald-500" />
                  <span>WhatsApp Broadcasts</span>
                </div>
                <p className="text-xs text-slate-500">Dispatch broadcast messages only to opted-in, high-affinity customers.</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-16 bg-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Know exactly who to talk to, when, and on which channel.
          </h2>
          <p className="text-cyan-100 max-w-xl mx-auto text-sm">
            Import your contacts via CSV, Shopify, or REST API and start querying live dynamic segments immediately.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenStartFree}
              className="px-8 py-3.5 rounded-xl bg-white text-cyan-800 hover:bg-cyan-50 font-bold shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              Start Free Segmenting
            </button>
            <button
              onClick={onOpenBookDemo}
              className="px-7 py-3.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-semibold border border-cyan-500/50 transition-colors cursor-pointer"
            >
              Request Custom Data Schema Review
            </button>
          </div>
          <p className="text-xs text-cyan-200 font-medium">
            First 2,500 contacts free forever · Unlimited dynamic segments
          </p>
        </div>
      </section>

    </div>
  );
};
