import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ChevronRight,
  Megaphone,
  Users,
  Mail,
  MessageSquare,
  Bot,
  ShoppingBag,
  CreditCard,
  BarChart3,
  Zap,
  Play,
  Pause
} from 'lucide-react';

interface HeroProps {
  onOpenStartFree: () => void;
  onOpenBookDemo: () => void;
  onExploreJourney: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenStartFree,
  onOpenBookDemo,
  onExploreJourney
}) => {
  // Current active node index in the data stream:
  // 0: Meta Ads, 1: Segment, 2: WhatsApp, 3: AI Agent, 4: Catalog, 5: Payment, 6: Analytics
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const ecosystemNodes = [
    {
      id: 'meta-ads',
      title: 'META ADS',
      subtitle: 'Click-to-WhatsApp Ads',
      icon: Megaphone,
      color: 'from-pink-500 to-rose-500',
      badge: 'Acquisition',
      liveData: '1,420 Clicks · ₹12.40 CPC',
      pos: 'top-left' // orbital location
    },
    {
      id: 'segment',
      title: 'SEGMENT',
      subtitle: 'Dynamic CDP Cohorts',
      icon: Users,
      color: 'from-blue-500 to-indigo-500',
      badge: 'Audience',
      liveData: '4,821 High-Intent Leads',
      pos: 'top-center'
    },
    {
      id: 'email',
      title: 'EMAIL',
      subtitle: 'VIP Editorial Drop',
      icon: Mail,
      color: 'from-sky-500 to-blue-600',
      badge: 'Channel',
      liveData: '99.8% Inbox Placement',
      pos: 'top-right'
    },
    {
      id: 'whatsapp',
      title: 'WHATSAPP',
      subtitle: 'Verified Business API',
      icon: MessageSquare,
      color: 'from-emerald-500 to-teal-500',
      badge: 'Conversation',
      liveData: '96.4% Open · 0.8s Delivery',
      pos: 'mid-right'
    },
    {
      id: 'ai-agent',
      title: 'AI AGENT',
      subtitle: 'Autonomous Concierge',
      icon: Bot,
      color: 'from-violet-500 to-purple-600',
      badge: 'Intelligence',
      liveData: 'Sizing & Stock Matched',
      pos: 'bottom-right'
    },
    {
      id: 'catalog',
      title: 'CATALOG',
      subtitle: 'Live Inventory Sync',
      icon: ShoppingBag,
      color: 'from-amber-500 to-orange-500',
      badge: 'Commerce',
      liveData: 'Running Shoes · ₹4,999',
      pos: 'bottom-center'
    },
    {
      id: 'payment',
      title: 'PAYMENT',
      subtitle: 'Native In-Chat UPI',
      icon: CreditCard,
      color: 'from-emerald-600 to-teal-600',
      badge: 'Checkout',
      liveData: '₹4,999 Settled (Order #48291)',
      pos: 'bottom-left'
    },
    {
      id: 'analytics',
      title: 'ANALYTICS',
      subtitle: 'Meta CAPI & ROAS',
      icon: BarChart3,
      color: 'from-indigo-600 to-violet-600',
      badge: 'Measurement',
      liveData: '7.8x Attributed ROAS',
      pos: 'mid-left'
    }
  ];

  // Particle pathway sequence
  const particleSequence = [0, 1, 3, 4, 5, 6, 7]; // Meta Ads -> Segment -> WhatsApp -> AI -> Catalog -> Payment -> Analytics

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % particleSequence.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [isPlaying, particleSequence.length]);

  const currentActiveNodeIndex = particleSequence[activeStep];
  const activeNode = ecosystemNodes[currentActiveNodeIndex];

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-38 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50/70 via-white to-slate-50/50">
      
      {/* Background Soft Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[520px] bg-gradient-to-tr from-blue-100/50 via-indigo-100/40 to-violet-100/40 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-12 left-10 w-72 h-72 bg-emerald-100/30 blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-100/30 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Micro-Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs text-xs text-slate-700">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-slate-900">Official Meta Business Solution Provider</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600">Unified WhatsApp &amp; Email Commerce</span>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08] text-balance">
            One platform.<br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Every conversation.
            </span><br />
            Every conversion.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto text-balance">
            Engage customers across Email and WhatsApp, automate conversations with AI, turn interactions into purchases, and measure the entire customer journey from one powerful platform.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={onOpenStartFree}
              className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.99] flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>START FREE</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenBookDemo}
              className="w-full sm:w-auto px-8 py-3.5 text-base font-medium text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>BOOK A DEMO</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          <p className="mt-3 text-xs text-slate-400 font-medium">
            No credit card required.
          </p>

          {/* Below Ribbon */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-xs sm:text-sm font-medium text-slate-500">
            <span>Email</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>WhatsApp</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>AI Agents</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Automation</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Ads</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Catalog</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Payments</span>
          </div>
        </div>

        {/* HERO VISUAL: Large Animated Product Ecosystem */}
        <div className="mt-14 max-w-6xl mx-auto">
          
          {/* Active Data Stream Status Bar */}
          <div className="flex items-center justify-between gap-3 p-3 bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/80 shadow-xs mb-4">
            <div className="flex items-center gap-2 text-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold text-slate-800">Live Customer Particle Flow:</span>
              <span className="font-mono text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded text-[11px] font-semibold">
                Meta Ads → Segment → WhatsApp → AI → Catalog → Payment → Analytics
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                Currently at: <strong className="text-slate-900">{activeNode.title}</strong>
              </span>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium flex items-center gap-1 cursor-pointer transition-colors"
              >
                {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                <span>{isPlaying ? 'Pause' : 'Play'}</span>
              </button>
            </div>
          </div>

          {/* Living Ecosystem Canvas */}
          <div className="relative bg-slate-950 rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl overflow-hidden min-h-[580px] flex items-center justify-center">
            
            {/* Ambient Background Grid & Radial Light */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
            <div className="absolute w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

            {/* Central Connected Core: COCOONMAIL */}
            <div className="relative z-20 flex flex-col items-center justify-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity animate-pulse" />
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-3xl bg-slate-900 border-2 border-indigo-500/50 shadow-2xl p-5 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg mb-2">
                    <Zap className="w-6 h-6 text-white animate-bounce" />
                  </div>
                  <span className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">
                    Core Platform
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mt-0.5">
                    COCOONMAIL
                  </h3>
                  <span className="mt-1 text-[11px] text-slate-400">
                    Unified Engagement &amp; Commerce Engine
                  </span>
                  <div className="mt-2 flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                    <span>● 8 Synchronized Engines</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Orbital Surrounding Cards Grid (Surrounding the Center) */}
            <div className="absolute inset-0 p-4 sm:p-8 pointer-events-none flex flex-col justify-between">
              
              {/* TOP ROW: META ADS (Left), SEGMENT (Center), EMAIL (Right) */}
              <div className="flex items-start justify-between gap-4">
                
                {/* 1. META ADS */}
                <div 
                  onClick={() => { setActiveStep(0); setIsPlaying(false); }}
                  className={`pointer-events-auto cursor-pointer max-w-[210px] sm:max-w-[240px] p-3 sm:p-3.5 rounded-2xl border transition-all duration-300 ${
                    currentActiveNodeIndex === 0
                      ? 'bg-slate-900 border-pink-500 shadow-lg shadow-pink-500/20 scale-105 ring-2 ring-pink-500/40'
                      : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-7 h-7 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center shrink-0">
                      <Megaphone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white tracking-wide block">META ADS</span>
                      <span className="text-[10px] text-slate-400">Click-to-WhatsApp</span>
                    </div>
                  </div>
                  <p className="text-[11px] font-mono text-pink-300 truncate">1,420 Clicks · ₹12.40 CPC</p>
                  {currentActiveNodeIndex === 0 && (
                    <span className="mt-1.5 inline-block text-[9px] font-mono bg-pink-500/20 text-pink-300 px-1.5 py-0.5 rounded">
                      ● Particle Ingress
                    </span>
                  )}
                </div>

                {/* 2. SEGMENT */}
                <div 
                  onClick={() => { setActiveStep(1); setIsPlaying(false); }}
                  className={`pointer-events-auto cursor-pointer max-w-[210px] sm:max-w-[240px] p-3 sm:p-3.5 rounded-2xl border transition-all duration-300 ${
                    currentActiveNodeIndex === 1
                      ? 'bg-slate-900 border-blue-500 shadow-lg shadow-blue-500/20 scale-105 ring-2 ring-blue-500/40'
                      : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                      <Users className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white tracking-wide block">SEGMENT</span>
                      <span className="text-[10px] text-slate-400">Dynamic CDP</span>
                    </div>
                  </div>
                  <p className="text-[11px] font-mono text-blue-300 truncate">4,821 High-Intent Leads</p>
                  {currentActiveNodeIndex === 1 && (
                    <span className="mt-1.5 inline-block text-[9px] font-mono bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded">
                      ● Cohort Classified
                    </span>
                  )}
                </div>

                {/* 3. EMAIL */}
                <div 
                  className="pointer-events-auto max-w-[210px] sm:max-w-[240px] p-3 sm:p-3.5 rounded-2xl border bg-slate-900/80 border-slate-800 hover:border-slate-700 hidden sm:block"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white tracking-wide block">EMAIL</span>
                      <span className="text-[10px] text-slate-400">Campaigns &amp; SMTP</span>
                    </div>
                  </div>
                  <p className="text-[11px] font-mono text-sky-300 truncate">99.8% Inbox Placement</p>
                </div>
              </div>

              {/* MID ROW: ANALYTICS (Left), WHATSAPP (Right) */}
              <div className="flex items-center justify-between gap-4 my-auto">
                
                {/* 8. ANALYTICS */}
                <div 
                  onClick={() => { setActiveStep(6); setIsPlaying(false); }}
                  className={`pointer-events-auto cursor-pointer max-w-[210px] sm:max-w-[240px] p-3 sm:p-3.5 rounded-2xl border transition-all duration-300 ${
                    currentActiveNodeIndex === 7
                      ? 'bg-slate-900 border-indigo-500 shadow-lg shadow-indigo-500/20 scale-105 ring-2 ring-indigo-500/40'
                      : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                      <BarChart3 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white tracking-wide block">ANALYTICS</span>
                      <span className="text-[10px] text-slate-400">Meta CAPI Attribution</span>
                    </div>
                  </div>
                  <p className="text-[11px] font-mono text-indigo-300 truncate">7.8x Attributed ROAS</p>
                  {currentActiveNodeIndex === 7 && (
                    <span className="mt-1.5 inline-block text-[9px] font-mono bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded">
                      ● Loop Closed
                    </span>
                  )}
                </div>

                {/* 4. WHATSAPP */}
                <div 
                  onClick={() => { setActiveStep(2); setIsPlaying(false); }}
                  className={`pointer-events-auto cursor-pointer max-w-[210px] sm:max-w-[240px] p-3 sm:p-3.5 rounded-2xl border transition-all duration-300 ${
                    currentActiveNodeIndex === 3
                      ? 'bg-slate-900 border-emerald-500 shadow-lg shadow-emerald-500/20 scale-105 ring-2 ring-emerald-500/40'
                      : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white tracking-wide block">WHATSAPP</span>
                      <span className="text-[10px] text-slate-400">Business API</span>
                    </div>
                  </div>
                  <p className="text-[11px] font-mono text-emerald-300 truncate">96.4% Open · 0.8s Latency</p>
                  {currentActiveNodeIndex === 3 && (
                    <span className="mt-1.5 inline-block text-[9px] font-mono bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded">
                      ● Chat Initiated
                    </span>
                  )}
                </div>
              </div>

              {/* BOTTOM ROW: PAYMENT (Left), CATALOG (Center), AI AGENT (Right) */}
              <div className="flex items-end justify-between gap-4">
                
                {/* 7. PAYMENT */}
                <div 
                  onClick={() => { setActiveStep(5); setIsPlaying(false); }}
                  className={`pointer-events-auto cursor-pointer max-w-[210px] sm:max-w-[240px] p-3 sm:p-3.5 rounded-2xl border transition-all duration-300 ${
                    currentActiveNodeIndex === 6
                      ? 'bg-slate-900 border-emerald-500 shadow-lg shadow-emerald-500/20 scale-105 ring-2 ring-emerald-500/40'
                      : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <CreditCard className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white tracking-wide block">PAYMENT</span>
                      <span className="text-[10px] text-slate-400">In-Chat UPI Checkout</span>
                    </div>
                  </div>
                  <p className="text-[11px] font-mono text-emerald-300 truncate">₹4,999 Settled (#48291)</p>
                  {currentActiveNodeIndex === 6 && (
                    <span className="mt-1.5 inline-block text-[9px] font-mono bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded">
                      ● 1-Tap Settled
                    </span>
                  )}
                </div>

                {/* 6. CATALOG */}
                <div 
                  onClick={() => { setActiveStep(4); setIsPlaying(false); }}
                  className={`pointer-events-auto cursor-pointer max-w-[210px] sm:max-w-[240px] p-3 sm:p-3.5 rounded-2xl border transition-all duration-300 ${
                    currentActiveNodeIndex === 5
                      ? 'bg-slate-900 border-amber-500 shadow-lg shadow-amber-500/20 scale-105 ring-2 ring-amber-500/40'
                      : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                      <ShoppingBag className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white tracking-wide block">CATALOG</span>
                      <span className="text-[10px] text-slate-400">Live Inventory</span>
                    </div>
                  </div>
                  <p className="text-[11px] font-mono text-amber-300 truncate">Running Shoes · ₹4,999</p>
                  {currentActiveNodeIndex === 5 && (
                    <span className="mt-1.5 inline-block text-[9px] font-mono bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded">
                      ● Buy Now Clicked
                    </span>
                  )}
                </div>

                {/* 5. AI AGENT */}
                <div 
                  onClick={() => { setActiveStep(3); setIsPlaying(false); }}
                  className={`pointer-events-auto cursor-pointer max-w-[210px] sm:max-w-[240px] p-3 sm:p-3.5 rounded-2xl border transition-all duration-300 ${
                    currentActiveNodeIndex === 4
                      ? 'bg-slate-900 border-violet-500 shadow-lg shadow-violet-500/20 scale-105 ring-2 ring-violet-500/40'
                      : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-7 h-7 rounded-lg bg-violet-500/20 text-violet-400 flex items-center justify-center shrink-0">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white tracking-wide block">AI AGENT</span>
                      <span className="text-[10px] text-slate-400">Autonomous Sales</span>
                    </div>
                  </div>
                  <p className="text-[11px] font-mono text-violet-300 truncate">Sizing &amp; Stock Matched</p>
                  {currentActiveNodeIndex === 4 && (
                    <span className="mt-1.5 inline-block text-[9px] font-mono bg-violet-500/20 text-violet-300 px-1.5 py-0.5 rounded">
                      ● Product Recommended
                    </span>
                  )}
                </div>
              </div>

            </div>

            {/* Bottom Canvas Footer Info */}
            <div className="absolute bottom-3 left-6 right-6 flex items-center justify-between text-[11px] font-mono text-slate-500 border-t border-slate-800/80 pt-2 pointer-events-none">
              <span>● Continuous Ecosystem Synchronization</span>
              <span className="text-indigo-400">Zero data silos · Single unified customer profile</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
