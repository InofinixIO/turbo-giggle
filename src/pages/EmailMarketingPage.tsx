import React, { useState } from 'react';
import { 
  Mail, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare, 
  Bot, 
  ShoppingBag, 
  Zap, 
  Layers, 
  Eye, 
  Send, 
  Clock, 
  BarChart2, 
  Split, 
  ShieldCheck, 
  Code2, 
  ChevronRight, 
  ExternalLink,
  Sliders,
  Check,
  RefreshCw,
  Smartphone,
  Laptop
} from 'lucide-react';
import { PlatformPageId } from '../components/PlatformNavSwitcher';

interface EmailMarketingPageProps {
  onOpenStartFree: () => void;
  onOpenBookDemo: () => void;
  onNavigateModule: (moduleId: PlatformPageId) => void;
}

export const EmailMarketingPage: React.FC<EmailMarketingPageProps> = ({
  onOpenStartFree,
  onOpenBookDemo,
  onNavigateModule
}) => {
  // Interactive Simulator State
  const [subjectVariant, setSubjectVariant] = useState<'A' | 'B'>('A');
  const [recipientName, setRecipientName] = useState('Sarah');
  const [selectedDiscount, setSelectedDiscount] = useState('20%');
  const [enableWhatsAppFallback, setEnableWhatsAppFallback] = useState(true);
  const [viewDevice, setViewDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = useState<'design' | 'content' | 'settings'>('design');

  return (
    <div className="bg-white text-slate-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-blue-50/70 via-indigo-50/30 to-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0e7ff0f_1px,transparent_1px),linear-gradient(to_bottom,#e0e7ff0f_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-blue-600 tracking-wide uppercase">
            <Mail className="w-4 h-4" />
            <span>Email Marketing Platform</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-600">Omnichannel Connected</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Copy */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Turn every send into a <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">customer journey</span>.
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Beyond static batch-and-blast newsletters. CocoonMail combines intelligent visual email creation, liquid dynamic personalization, predictive AI send times, and native handoff to WhatsApp for complete omnichannel engagement.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenStartFree}
                  className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 cursor-pointer"
                >
                  <span>Start Free</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenBookDemo}
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200 shadow-sm transition-all hover:border-slate-300 flex items-center gap-2 cursor-pointer"
                >
                  <span>Book Demo</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-4 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>99.8% Inbox Deliverability</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Liquid Dynamic Tags</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Zero Credit Card Required</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Simulator: Live Visual Campaign Designer */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xl shadow-blue-900/10 overflow-hidden">
                
                {/* Editor Header Bar */}
                <div className="bg-slate-900 px-4 py-3 flex items-center justify-between text-white border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-xs font-mono text-slate-300 ml-2">VIP_Spring_Drop_v2.cocoon</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex bg-slate-800 rounded-lg p-0.5 text-xs">
                      <button 
                        onClick={() => setViewDevice('desktop')}
                        className={`px-2 py-1 rounded transition-colors ${viewDevice === 'desktop' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
                        title="Desktop view"
                      >
                        <Laptop className="w-3.5 h-3.5" />
                      </button>
                      <button 
                        onClick={() => setViewDevice('mobile')}
                        className={`px-2 py-1 rounded transition-colors ${viewDevice === 'mobile' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
                        title="Mobile view"
                      >
                        <Smartphone className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">Live Sync</span>
                  </div>
                </div>

                {/* Control Ribbon */}
                <div className="bg-slate-50 border-b border-slate-200 p-3 grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="text-slate-500 block mb-1 font-medium">A/B Subject Line Test:</label>
                    <div className="flex rounded-lg border border-slate-300 bg-white overflow-hidden">
                      <button
                        onClick={() => setSubjectVariant('A')}
                        className={`flex-1 py-1 px-2 text-left font-medium transition-colors ${subjectVariant === 'A' ? 'bg-blue-600 text-white' : 'text-slate-700 hover:bg-slate-50'}`}
                      >
                        A: Exclusive {selectedDiscount} inside
                      </button>
                      <button
                        onClick={() => setSubjectVariant('B')}
                        className={`flex-1 py-1 px-2 text-left font-medium transition-colors ${subjectVariant === 'B' ? 'bg-blue-600 text-white' : 'text-slate-700 hover:bg-slate-50'}`}
                      >
                        B: {recipientName}, your VIP drop is here
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-500 block mb-1 font-medium">Recipient Dynamic Preview:</label>
                    <div className="flex gap-2">
                      <select 
                        value={recipientName}
                        onChange={(e) => setRecipientName(e.target.value)}
                        className="bg-white border border-slate-300 rounded-lg px-2 py-1 text-slate-800 font-medium flex-1 text-xs focus:ring-1 focus:ring-blue-500"
                      >
                        <option value="Sarah">Sarah (VIP Tier)</option>
                        <option value="Arjun">Arjun (New Subscriber)</option>
                        <option value="Elena">Elena (Dormant 30d)</option>
                      </select>
                      <select 
                        value={selectedDiscount}
                        onChange={(e) => setSelectedDiscount(e.target.value)}
                        className="bg-white border border-slate-300 rounded-lg px-2 py-1 text-slate-800 font-medium text-xs focus:ring-1 focus:ring-blue-500"
                      >
                        <option value="15%">15% off</option>
                        <option value="20%">20% off</option>
                        <option value="30%">30% off</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Email Canvas Preview */}
                <div className={`p-4 bg-slate-100 transition-all ${viewDevice === 'mobile' ? 'max-w-[340px] mx-auto py-6' : ''}`}>
                  <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 space-y-4">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
                        <span className="w-5 h-5 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">C</span>
                        <span>AURA ATELIER</span>
                      </div>
                      <span className="text-[10px] text-slate-400">View in browser</span>
                    </div>

                    {/* Email Hero Content */}
                    <div className="space-y-2">
                      <span className="text-[11px] font-semibold text-blue-600 tracking-wider uppercase">Private VIP Access</span>
                      <h3 className="text-lg font-bold text-slate-900">
                        Hello {recipientName}, your {selectedDiscount} spring vault is unlocked.
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Handcrafted Italian leather essentials curated specifically for your verified collection.
                      </p>
                    </div>

                    {/* Product Card Inside Email */}
                    <div className="bg-slate-50 rounded-lg p-3 border border-slate-200/80 flex items-center gap-3">
                      <div className="w-14 h-14 rounded-md bg-gradient-to-tr from-amber-100 to-orange-100 flex items-center justify-center text-amber-700 font-bold text-xs shrink-0">
                        BAG
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-slate-900 truncate">Milano Saffiano Tote</p>
                        <p className="text-[11px] text-slate-500">Includes complimentary monogram</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs font-bold text-slate-900">$240</span>
                          <span className="text-[10px] text-slate-400 line-through">$300</span>
                          <span className="text-[9px] px-1.5 py-0.2 bg-emerald-100 text-emerald-700 font-semibold rounded">{selectedDiscount} OFF</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div>
                      <button className="w-full py-2.5 rounded-lg bg-blue-600 text-white text-xs font-semibold shadow hover:bg-blue-700 transition-colors">
                        Claim {selectedDiscount} &amp; Shop Collection
                      </button>
                    </div>
                  </div>

                  {/* Omnichannel Fallback Card */}
                  <div className="mt-3 bg-white rounded-xl border border-emerald-200/90 p-3 shadow-sm flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                        <MessageSquare className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-900">Omnichannel WhatsApp Escalation</p>
                        <p className="text-[11px] text-slate-500">If email unopened after 18h → Send WhatsApp template</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={enableWhatsAppFallback} 
                        onChange={() => setEnableWhatsAppFallback(!enableWhatsAppFallback)}
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-600"></div>
                    </label>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="bg-slate-900 px-4 py-2 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Deliverability Check: <strong className="text-emerald-400">100% Valid (DKIM/SPF/DMARC)</strong></span>
                  <span className="text-indigo-400 font-medium">Send-Time AI: Optimized for 9:42 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE TRANSITION STATEMENT: EMAIL -> WHATSAPP */}
      <section className="py-14 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-400">Omnichannel Core Architecture</p>
          <blockquote className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-snug">
            &ldquo;Email is powerful on its own.<br className="hidden sm:inline" /> It&apos;s even more powerful when it can trigger <span className="text-emerald-400">WhatsApp</span>, <span className="text-violet-400">AI</span> and <span className="text-blue-400">automation</span>.&rdquo;
          </blockquote>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Traditional email tools trap your audience in an inbox silo. CocoonMail tracks engagement across channels so unopened campaigns automatically transition into high-converting WhatsApp conversations.
          </p>
        </div>
      </section>

      {/* 3. CORE CAPABILITIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-wider">Engineered for High-Conversion Marketing</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Everything you need to craft, target, and optimize campaigns.
            </p>
            <p className="text-slate-600">
              Built on enterprise-grade deliverability infrastructure with visual tooling your marketing team will love.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 1. Drag & Drop Builder */}
            <div className="p-6 rounded-2xl border border-slate-200/90 hover:border-blue-300 hover:shadow-lg transition-all group bg-white">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Drag-and-Drop Visual Builder</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Pixel-perfect, bulletproof responsive layouts tested across 40+ email clients (Gmail, Apple Mail, Outlook, mobile web).
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-600" /> Modular layout grid &amp; components</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-600" /> Dark mode preview and color inversion test</li>
              </ul>
            </div>

            {/* 2. Liquid Personalization */}
            <div className="p-6 rounded-2xl border border-slate-200/90 hover:border-indigo-300 hover:shadow-lg transition-all group bg-white">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Liquid Personalization &amp; Logic</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Use variables, conditions, and loops. Show different product recommendations based on VIP tier, past orders, or city.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-indigo-600" /> Dynamic conditionals: &#123;% if vip %&#125;</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-indigo-600" /> Real-time fallback defaults for missing data</li>
              </ul>
            </div>

            {/* 3. Smart Send-Time Optimization */}
            <div className="p-6 rounded-2xl border border-slate-200/90 hover:border-violet-300 hover:shadow-lg transition-all group bg-white">
              <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Predictive Send-Time AI</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Deliver each message at the exact hour the recipient typically checks their inbox, across multiple time zones automatically.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-violet-600" /> Individual historical open modeling</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-violet-600" /> Timezone-aware batch staggering</li>
              </ul>
            </div>

            {/* 4. A/B/n Multivariate Testing */}
            <div className="p-6 rounded-2xl border border-slate-200/90 hover:border-rose-300 hover:shadow-lg transition-all group bg-white">
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Split className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">A/B &amp; Multivariate Testing</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Test subject lines, sender names, layouts, discount percentages, and hero images. Automatically send the winner to the rest.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-rose-600" /> Automatic winner selection by open/click</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-rose-600" /> Statistical significance calculator</li>
              </ul>
            </div>

            {/* 5. Deliverability Shield */}
            <div className="p-6 rounded-2xl border border-slate-200/90 hover:border-emerald-300 hover:shadow-lg transition-all group bg-white">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Dedicated IP &amp; Deliverability Shield</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Automated SPF, DKIM, DMARC, and BIMI setup. Warm up your IPs automatically and avoid spam folder placement.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Real-time spam score analyzer</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Automatic IP reputation warmup</li>
              </ul>
            </div>

            {/* 6. Dynamic Segmentation */}
            <div className="p-6 rounded-2xl border border-slate-200/90 hover:border-amber-300 hover:shadow-lg transition-all group bg-white">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <BarChart2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Live Audience Segments</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Combine email metrics with WhatsApp chat behavior, purchase history, and custom CRM events for pinpoint targeting.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-600" /> Real-time membership calculation</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-600" /> RFM engagement scoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS: THE CAMPAIGN PIPELINE */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-wider">Campaign Architecture</h2>
            <p className="text-3xl font-extrabold text-slate-900">How CocoonMail delivers high open &amp; conversion rates</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative">
              <span className="text-3xl font-black text-blue-200 mb-2 block">01</span>
              <h4 className="text-base font-bold text-slate-900 mb-2">Dynamic Audience Selection</h4>
              <p className="text-xs text-slate-600">
                Query customers who bought in the last 60 days AND opened at least one email or WhatsApp message.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative">
              <span className="text-3xl font-black text-indigo-200 mb-2 block">02</span>
              <h4 className="text-base font-bold text-slate-900 mb-2">Liquid Template Assembly</h4>
              <p className="text-xs text-slate-600">
                Personalized product blocks, dynamic discounts, and localized currency are generated per recipient on-the-fly.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative">
              <span className="text-3xl font-black text-violet-200 mb-2 block">03</span>
              <h4 className="text-base font-bold text-slate-900 mb-2">AI Send-Time Dispatch</h4>
              <p className="text-xs text-slate-600">
                Emails route through warmed dedicated IP pools, staggered at each recipient&apos;s predicted reading window.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-2xl border border-emerald-300 shadow-sm relative ring-2 ring-emerald-500/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl font-black text-emerald-300 block">04</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">Omnichannel</span>
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">WhatsApp Fallback Trigger</h4>
              <p className="text-xs text-slate-600">
                If the email remains unopened after 24h, the contact smoothly flows into a WhatsApp broadcast template automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW IT CONNECTS TO THE REST OF COCOONMAIL */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-indigo-100 bg-gradient-to-br from-indigo-50/50 via-white to-blue-50/50 rounded-3xl p-8 sm:p-12 shadow-sm">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Unified Ecosystem</span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 mb-3">
                How Email Marketing connects to the rest of CocoonMail
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                CocoonMail isn&apos;t an isolated silo. Your email campaigns share real-time state with WhatsApp, AI agents, catalogs, checkout flows, and analytics.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              <button 
                onClick={() => onNavigateModule('whatsapp')}
                className="p-4 rounded-xl bg-white border border-slate-200/90 hover:border-emerald-400 hover:shadow-md transition-all text-left group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                </div>
                <h5 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-emerald-600 transition-colors">WhatsApp Escalation</h5>
                <p className="text-xs text-slate-500">Unopened email? Auto-trigger a WhatsApp message with catalog cards.</p>
              </button>

              <button 
                onClick={() => onNavigateModule('ai-agents')}
                className="p-4 rounded-xl bg-white border border-slate-200/90 hover:border-violet-400 hover:shadow-md transition-all text-left group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center">
                    <Bot className="w-4 h-4" />
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-violet-600 transition-colors" />
                </div>
                <h5 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-violet-600 transition-colors">AI Reply Assistant</h5>
                <p className="text-xs text-slate-500">Incoming replies to email campaigns are triaged by brand AI agents.</p>
              </button>

              <button 
                onClick={() => onNavigateModule('catalog')}
                className="p-4 rounded-xl bg-white border border-slate-200/90 hover:border-amber-400 hover:shadow-md transition-all text-left group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 transition-colors" />
                </div>
                <h5 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-amber-600 transition-colors">Live Catalog Sync</h5>
                <p className="text-xs text-slate-500">In-email product cards update prices and out-of-stock items in real-time.</p>
              </button>

              <button 
                onClick={() => onNavigateModule('analytics')}
                className="p-4 rounded-xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-md transition-all text-left group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <BarChart2 className="w-4 h-4" />
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <h5 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">Unified Attribution</h5>
                <p className="text-xs text-slate-500">Track email click to WhatsApp chat and final checkout conversion.</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to upgrade your email marketing to omnichannel?
          </h2>
          <p className="text-blue-100 max-w-xl mx-auto text-base">
            Start sending beautiful, high-converting emails today. Connect your domain in 5 minutes with guided DKIM and DMARC verification.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenStartFree}
              className="px-8 py-3.5 rounded-xl bg-white text-blue-600 hover:bg-blue-50 font-bold shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              Start Free Today
            </button>
            <button
              onClick={onOpenBookDemo}
              className="px-7 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold border border-blue-500/50 transition-colors cursor-pointer"
            >
              Schedule Deliverability Consultation
            </button>
          </div>
          <p className="text-xs text-blue-200 font-medium pt-2">
            No credit card required · Instant sandbox access · 10,000 free emails included
          </p>
        </div>
      </section>

    </div>
  );
};
