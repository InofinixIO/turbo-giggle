import React, { useState } from 'react';
import { 
  Users, 
  Mail, 
  MessageSquare, 
  LayoutTemplate, 
  Bot, 
  ShoppingBag, 
  CreditCard, 
  BarChart3, 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  Sparkles,
  Smartphone,
  Eye,
  Sliders,
  DollarSign,
  TrendingUp,
  Send,
  Zap,
  Check
} from 'lucide-react';

interface SignatureJourneyProps {
  onOpenStartFree: () => void;
}

export const SignatureJourney: React.FC<SignatureJourneyProps> = ({ onOpenStartFree }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  // Step 2 Interactive channel selection state
  const [selectedChannel, setSelectedChannel] = useState<'whatsapp' | 'email'>('whatsapp');

  // Step 3 Interactive template block dragging state
  const [templateBlocks, setTemplateBlocks] = useState<string[]>(['Hero Image', 'Personalized Salutation', 'Product Grid']);
  const [previewMode, setPreviewMode] = useState<'mobile' | 'desktop'>('mobile');

  // Step 4/5 AI query interactive simulation state
  const [aiTyping, setAiTyping] = useState<boolean>(false);
  const [catalogSearched, setCatalogSearched] = useState<boolean>(true);

  // Step 7 Payment click state
  const [paymentDone, setPaymentDone] = useState<boolean>(true);

  const steps = [
    {
      id: 'audience',
      stepNum: 1,
      title: 'AUDIENCE',
      shortTitle: 'Audience',
      icon: Users,
      headline: 'Target dynamic high-intent cohorts in real time',
      desc: 'Filter 48,291 raw contacts by location, engagement velocity, and purchase recency down to 4,821 high-probability buyers.'
    },
    {
      id: 'campaign',
      stepNum: 2,
      title: 'CAMPAIGN',
      shortTitle: 'Campaign',
      icon: Send,
      headline: 'Choose channel or launch dual-orchestration',
      desc: 'Select WhatsApp for instant conversational engagement or Email for long-form editorial storytelling.'
    },
    {
      id: 'template',
      stepNum: 3,
      title: 'TEMPLATE',
      shortTitle: 'Template',
      icon: LayoutTemplate,
      headline: 'Drag-and-drop builder with live personalization',
      desc: 'Assemble blocks, preview dynamic tags, and toggle instant mobile-first viewport previews.'
    },
    {
      id: 'whatsapp',
      stepNum: 4,
      title: 'WHATSAPP',
      shortTitle: 'WhatsApp',
      icon: MessageSquare,
      headline: 'Realistic two-way business conversation',
      desc: 'Customer reaches out on WhatsApp; the conversation stream opens with zero lag.'
    },
    {
      id: 'ai-agent',
      stepNum: 5,
      title: 'AI AGENT',
      shortTitle: 'AI Agent',
      icon: Bot,
      headline: 'AI understands intent & searches catalog',
      desc: 'The agent parses customer natural language, queries live inventory, and suggests exact recommendations.'
    },
    {
      id: 'catalog',
      stepNum: 6,
      title: 'CATALOG',
      shortTitle: 'Catalog',
      icon: ShoppingBag,
      headline: 'Native interactive product cards in chat',
      desc: 'Showcase Running Shoes at ₹4,999 with instant Buy Now action buttons inside the thread.'
    },
    {
      id: 'payment',
      stepNum: 7,
      title: 'PAYMENT',
      shortTitle: 'Payment',
      icon: CreditCard,
      headline: 'Zero-friction native checkout completion',
      desc: 'Instant UPI settlement with Order #CM-48291 confirmed without jumping to an external browser tab.'
    },
    {
      id: 'analytics',
      stepNum: 8,
      title: 'ANALYTICS',
      shortTitle: 'Analytics',
      icon: BarChart3,
      headline: 'Full-funnel attribution & revenue metrics',
      desc: 'Track messages delivered, open rates, conversion rates, and attributed sales on a unified dashboard.'
    }
  ];

  const handleNext = () => {
    setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
  };

  return (
    <section id="journey" className="py-24 bg-slate-50/70 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 block mb-2">
            Signature Interactive Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            From campaign to conversion.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Build the entire customer journey without stitching together multiple platforms.
          </p>
        </div>

        {/* 8-Step Interactive Progress Bar */}
        <div className="mb-10 overflow-x-auto pb-4 pt-1 scrollbar-none">
          <div className="flex items-center gap-2 min-w-[880px] justify-between px-1">
            {steps.map((stg, idx) => {
              const Icon = stg.icon;
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <button
                  key={stg.id}
                  onClick={() => setActiveStep(idx)}
                  className={`flex-1 flex flex-col items-center gap-1.5 py-3 px-2 rounded-2xl transition-all cursor-pointer relative ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-lg scale-105 z-10'
                      : isPast
                      ? 'bg-white text-indigo-700 border border-indigo-200/80 hover:bg-indigo-50/40'
                      : 'bg-white/80 text-slate-600 border border-slate-200 hover:bg-white hover:text-slate-900'
                  }`}
                >
                  <div className={`w-7 h-7 rounded-xl flex items-center justify-center transition-colors ${
                    isActive
                      ? 'bg-indigo-600 text-white'
                      : isPast
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'bg-slate-100 text-slate-500'
                  }`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] font-bold tracking-tight">
                    {stg.shortTitle}
                  </span>
                  <span className="text-[9px] font-mono opacity-70">
                    Step {stg.stepNum}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Interactive Stage Canvas */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Stage Explanation & Controls */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                  STEP 0{steps[activeStep].stepNum} OF 08
                </span>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {steps[activeStep].title}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {steps[activeStep].headline}
                </h3>
                <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                  {steps[activeStep].desc}
                </p>
              </div>

              {/* Navigation Steps Controller */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer"
                    aria-label="Previous step"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer"
                    aria-label="Next step"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-mono text-slate-400 ml-2">
                    {activeStep + 1} / 8
                  </span>
                </div>

                <button
                  onClick={onOpenStartFree}
                  className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all cursor-pointer"
                >
                  Try in Sandbox
                </button>
              </div>
            </div>

            {/* Right Column: Realistic Step UI Simulation */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-5 sm:p-6 min-h-[420px] flex flex-col justify-between shadow-inner">
                
                {/* STEP 1: AUDIENCE */}
                {activeStep === 0 && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                      <div>
                        <span className="text-xs font-bold text-slate-900 block">Audience Segmentation Builder</span>
                        <span className="text-[11px] text-slate-500 font-mono">Total Database: 48,291 contacts</span>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-indigo-100 text-indigo-800 font-mono text-xs font-bold">
                        Result: 4,821 customers
                      </span>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                        Applied Dynamic Filters:
                      </span>
                      
                      <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-200 text-xs shadow-xs">
                        <span className="font-medium text-slate-700">📍 Location = India</span>
                        <span className="font-mono text-emerald-600 font-semibold">✓ 34,120 match</span>
                      </div>

                      <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-200 text-xs shadow-xs">
                        <span className="font-medium text-slate-700">💬 WhatsApp engaged = True</span>
                        <span className="font-mono text-emerald-600 font-semibold">✓ 19,840 match</span>
                      </div>

                      <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-200 text-xs shadow-xs">
                        <span className="font-medium text-slate-700">🛍️ Purchased in last 90 days = True</span>
                        <span className="font-mono text-emerald-600 font-semibold">✓ 8,920 match</span>
                      </div>

                      <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-indigo-300 text-xs bg-indigo-50/40 shadow-xs">
                        <span className="font-bold text-indigo-900">⭐ Customer Tier = VIP</span>
                        <span className="font-mono text-indigo-700 font-bold">✓ 4,821 final cohort</span>
                      </div>
                    </div>

                    <div className="p-3 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-xl border border-indigo-100 text-xs flex items-center justify-between">
                      <span className="text-slate-600">Cohort ready for multichannel campaign</span>
                      <button 
                        onClick={() => setActiveStep(1)}
                        className="font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
                      >
                        <span>Send to Campaign</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: CAMPAIGN */}
                {activeStep === 1 && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                      <span className="text-xs font-bold text-slate-900">Choose Primary Communication Channel</span>
                      <span className="text-xs text-slate-500 font-mono">Target: 4,821 VIPs</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {/* WhatsApp Channel Card */}
                      <div 
                        onClick={() => setSelectedChannel('whatsapp')}
                        className={`p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                          selectedChannel === 'whatsapp'
                            ? 'bg-emerald-50/50 border-emerald-500 shadow-md ring-2 ring-emerald-500/20'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center mb-3 shadow-xs">
                          <MessageSquare className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-slate-900 text-sm">WhatsApp</h4>
                        <p className="text-xs text-slate-500 mt-1">High open rates (96%), interactive catalog &amp; instant AI responses.</p>
                        <span className="mt-3 inline-block text-[11px] font-mono text-emerald-700 font-semibold">
                          Recommended for D2C &amp; Sales
                        </span>
                      </div>

                      {/* Email Channel Card */}
                      <div 
                        onClick={() => setSelectedChannel('email')}
                        className={`p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                          selectedChannel === 'email'
                            ? 'bg-blue-50/50 border-blue-500 shadow-md ring-2 ring-blue-500/20'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-3 shadow-xs">
                          <Mail className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-slate-900 text-sm">Email</h4>
                        <p className="text-xs text-slate-500 mt-1">Long-form editorial storytelling, lookbooks &amp; transactional invoices.</p>
                        <span className="mt-3 inline-block text-[11px] font-mono text-blue-700 font-semibold">
                          Dedicated High-Reputation IP
                        </span>
                      </div>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs flex items-center justify-between">
                      <span className="text-slate-600">Selected: <strong className="text-slate-900 capitalize">{selectedChannel}</strong></span>
                      <button 
                        onClick={() => setActiveStep(2)}
                        className="px-3.5 py-1.5 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors cursor-pointer"
                      >
                        Open Template Builder →
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: TEMPLATE */}
                {activeStep === 2 && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900">CocoonMail Template Builder</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-800">Drag &amp; Drop</span>
                      </div>
                      <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200 text-xs">
                        <button 
                          onClick={() => setPreviewMode('mobile')}
                          className={`px-2 py-0.5 rounded cursor-pointer ${previewMode === 'mobile' ? 'bg-slate-900 text-white' : 'text-slate-600'}`}
                        >
                          Mobile
                        </button>
                        <button 
                          onClick={() => setPreviewMode('desktop')}
                          className={`px-2 py-0.5 rounded cursor-pointer ${previewMode === 'desktop' ? 'bg-slate-900 text-white' : 'text-slate-600'}`}
                        >
                          Desktop
                        </button>
                      </div>
                    </div>

                    {/* Canvas simulation */}
                    <div className="grid grid-cols-12 gap-3 items-start">
                      {/* Blocks panel */}
                      <div className="col-span-4 bg-white rounded-xl border border-slate-200 p-2.5 space-y-1.5 text-xs">
                        <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Blocks</span>
                        {['Text', 'Image', 'Button', 'Product', 'Dynamic Variable'].map((b) => (
                          <div key={b} className="p-1.5 rounded bg-slate-50 border border-slate-200 text-slate-700 text-[11px] font-medium flex items-center justify-between cursor-grab active:cursor-grabbing">
                            <span>{b}</span>
                            <span className="text-slate-400 font-mono text-[9px]">+ Add</span>
                          </div>
                        ))}
                      </div>

                      {/* Live Preview Screen */}
                      <div className="col-span-8 bg-white rounded-xl border border-slate-300 p-3 shadow-xs space-y-2">
                        <div className="h-16 rounded-lg bg-gradient-to-r from-indigo-900 to-slate-900 p-2 flex items-end text-white text-[11px] font-bold">
                          VIP Early Access: Monsoon Capsule
                        </div>
                        <div className="p-2 rounded bg-amber-50 border border-amber-200 text-[11px] text-amber-900 font-mono">
                          Dynamic: Hey {'{{ contact.first_name | default: "Friend" }}'}, your size UK 9 is waiting!
                        </div>
                        <div className="flex items-center justify-between pt-1">
                          <span className="text-xs font-bold text-slate-900">Running Shoes ₹4,999</span>
                          <span className="px-2.5 py-1 bg-slate-900 text-white rounded text-[10px] font-semibold">Buy Now</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end pt-1">
                      <button 
                        onClick={() => setActiveStep(3)}
                        className="px-3.5 py-1.5 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
                      >
                        Next: Simulate WhatsApp Flow →
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 4: WHATSAPP */}
                {activeStep === 3 && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold">C</div>
                        <span className="font-semibold text-slate-900">Cocoon Verified Store</span>
                        <span className="text-emerald-600 font-bold">✓</span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">WhatsApp Business API</span>
                    </div>

                    {/* WhatsApp Chat UI */}
                    <div className="bg-[#efeae2] p-4 rounded-2xl space-y-3 min-h-[240px] flex flex-col justify-end">
                      {/* Customer Question */}
                      <div className="flex justify-end">
                        <div className="bg-[#d9fdd3] text-slate-900 p-3 rounded-2xl rounded-tr-xs max-w-[85%] text-xs shadow-xs">
                          <p>Hi, I&apos;m looking for a running shoe under ₹5,000.</p>
                          <span className="text-[9px] text-slate-400 float-right mt-1 ml-2 font-mono">10:42 AM ✓✓</span>
                        </div>
                      </div>

                      {/* AI Response */}
                      <div className="flex justify-start">
                        <div className="bg-white text-slate-900 p-3 rounded-2xl rounded-tl-xs max-w-[88%] text-xs shadow-xs space-y-1">
                          <span className="text-[10px] font-bold text-indigo-600 block">Cocoon AI Agent</span>
                          <p>I found three options that match your budget! Would you like me to check stock in your exact shoe size?</p>
                          <span className="text-[9px] text-slate-400 float-right mt-0.5 font-mono">10:42 AM</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1 text-xs">
                      <span className="text-slate-500">Autonomous response delivered in 140ms</span>
                      <button 
                        onClick={() => setActiveStep(4)}
                        className="font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
                      >
                        <span>Inspect AI Agent Action</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 5: AI AGENT */}
                {activeStep === 4 && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-xs">
                      <span className="font-bold text-slate-900 flex items-center gap-1.5 text-violet-700">
                        <Bot className="w-4 h-4" /> AI Action Execution Log
                      </span>
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono text-[10px]">Action Triggered</span>
                    </div>

                    <div className="bg-slate-900 text-white rounded-xl p-3.5 font-mono text-xs space-y-2">
                      <div className="text-indigo-400 font-semibold text-[11px]">
                        EXECUTE: search_catalog(category=&quot;running_shoes&quot;, max_price=5000)
                      </div>
                      <div className="bg-slate-950 p-2.5 rounded border border-slate-800 text-[11px] text-slate-300 space-y-1">
                        <p>✓ 1 item matched price &amp; stock constraints</p>
                        <p>Product: HydroGlide Pro Running Shoes</p>
                        <p>SKU: HG-RUN-4999 | Price: ₹4,999 | In Stock: 6 pairs</p>
                      </div>
                      <p className="text-emerald-400 text-[11px]">
                        OUTPUT: Render WhatsApp Native Product Card
                      </p>
                    </div>

                    <div className="p-3 bg-violet-50 rounded-xl border border-violet-200 text-xs text-violet-950 flex items-center justify-between">
                      <span>AI successfully selected matching product</span>
                      <button 
                        onClick={() => setActiveStep(5)}
                        className="px-3 py-1.5 bg-violet-600 text-white rounded-lg font-medium hover:bg-violet-700 transition-colors cursor-pointer"
                      >
                        View Product Card →
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 6: CATALOG */}
                {activeStep === 5 && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-xs">
                      <span className="font-bold text-slate-900">WhatsApp Product Card Card</span>
                      <span className="text-emerald-600 font-mono font-bold">Ready for Checkout</span>
                    </div>

                    {/* Realistic Product Card */}
                    <div className="bg-white border-2 border-slate-200 rounded-2xl p-4 shadow-sm space-y-3">
                      <div className="h-32 rounded-xl bg-gradient-to-tr from-slate-900 to-indigo-950 p-3 flex flex-col justify-end text-white">
                        <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase">In Stock (Size UK 9)</span>
                        <h4 className="text-base font-bold">Running Shoes</h4>
                        <span className="text-sm font-extrabold text-emerald-400 font-mono">₹4,999</span>
                      </div>

                      <div className="flex items-center justify-between text-xs text-slate-600">
                        <span>Free express delivery · 30-day exchange</span>
                        <span className="font-mono text-slate-400">SKU: RS-4999</span>
                      </div>

                      <button
                        onClick={() => setActiveStep(6)}
                        className="w-full py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-xs font-bold shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>Buy Now</span>
                      </button>
                    </div>

                    <div className="text-center text-[11px] text-slate-400">
                      Click &ldquo;Buy Now&rdquo; to trigger the native in-chat UPI payment screen
                    </div>
                  </div>
                )}

                {/* STEP 7: PAYMENT */}
                {activeStep === 6 && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-xs">
                      <span className="font-bold text-slate-900">Payment Status</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono text-[10px] font-bold">Settled</span>
                    </div>

                    {/* Payment Success Card */}
                    <div className="bg-white border-2 border-emerald-500 rounded-2xl p-5 shadow-md space-y-4 text-center">
                      <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                        <Check className="w-6 h-6 stroke-[3]" />
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-slate-900">Payment successful</h4>
                        <p className="text-xs text-slate-500 mt-0.5">Zero redirect. Completed in WhatsApp.</p>
                      </div>

                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 grid grid-cols-2 gap-2 text-xs text-left font-mono">
                        <div>
                          <span className="text-slate-400 block text-[10px]">Order ID</span>
                          <span className="font-bold text-slate-900">#CM-48291</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px]">Amount Settled</span>
                          <span className="font-bold text-emerald-600 text-sm">₹4,999</span>
                        </div>
                      </div>

                      <button
                        onClick={() => setActiveStep(7)}
                        className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold cursor-pointer"
                      >
                        View Full Funnel Analytics →
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 8: ANALYTICS */}
                {activeStep === 7 && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-xs">
                      <span className="font-bold text-slate-900">Campaign Performance Dashboard</span>
                      <span className="text-indigo-600 font-mono font-bold">Live Attribution</span>
                    </div>

                    {/* Analytics 4-card grid */}
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
                        <span className="text-slate-400 block text-[10px] font-mono">Messages</span>
                        <span className="text-xl font-bold font-mono text-slate-900">4,821</span>
                        <span className="text-[10px] text-emerald-600 font-medium block mt-0.5">99.8% delivered</span>
                      </div>

                      <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
                        <span className="text-slate-400 block text-[10px] font-mono">Engagement</span>
                        <span className="text-xl font-bold font-mono text-slate-900">96.4%</span>
                        <span className="text-[10px] text-indigo-600 font-medium block mt-0.5">3.8m avg read time</span>
                      </div>

                      <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
                        <span className="text-slate-400 block text-[10px] font-mono">Conversions</span>
                        <span className="text-xl font-bold font-mono text-slate-900">1,248</span>
                        <span className="text-[10px] text-emerald-600 font-medium block mt-0.5">25.8% conversion rate</span>
                      </div>

                      <div className="p-3 bg-white rounded-xl border border-emerald-300 shadow-xs bg-emerald-50/20">
                        <span className="text-slate-400 block text-[10px] font-mono">Revenue</span>
                        <span className="text-xl font-bold font-mono text-emerald-600">₹62,38,752</span>
                        <span className="text-[10px] text-emerald-700 font-bold block mt-0.5">7.84x Attributed ROAS</span>
                      </div>
                    </div>

                    <div className="p-3 bg-slate-900 text-white rounded-xl text-xs flex items-center justify-between">
                      <span className="text-slate-300 text-[11px]">Journey loop feeds next campaign segment automatically</span>
                      <button 
                        onClick={onOpenStartFree}
                        className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-500 transition-colors cursor-pointer"
                      >
                        Launch Your First Flow
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
