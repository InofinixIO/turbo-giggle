import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Send, 
  Layout, 
  MessageSquare, 
  Mail,
  Bot, 
  ShoppingBag, 
  CheckCircle, 
  BarChart, 
  ArrowRight, 
  Play, 
  Pause, 
  Check, 
  Sparkles, 
  Smartphone, 
  Eye, 
  Sliders, 
  DollarSign, 
  TrendingUp, 
  CreditCard 
} from 'lucide-react';

export const JourneySection: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedChannel, setSelectedChannel] = useState<'whatsapp' | 'email'>('whatsapp');
  const [templateBlock, setTemplateBlock] = useState('hero-card');

  const totalSteps = 8;

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev >= totalSteps ? 1 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const stepTabs = [
    { id: 1, title: 'Audience', icon: Users, shortDesc: '4,821 VIP Leads' },
    { id: 2, title: 'Campaign', icon: Send, shortDesc: 'Email & WhatsApp' },
    { id: 3, title: 'Template', icon: Layout, shortDesc: 'Drag-and-Drop' },
    { id: 4, title: 'WhatsApp', icon: MessageSquare, shortDesc: 'Customer Chat' },
    { id: 5, title: 'AI Agent', icon: Bot, shortDesc: 'Intent & Catalog' },
    { id: 6, title: 'Catalog', icon: ShoppingBag, shortDesc: '₹4,999 Shoes' },
    { id: 7, title: 'Payment', icon: CheckCircle, shortDesc: 'Order #CM-48291' },
    { id: 8, title: 'Analytics', icon: BarChart, shortDesc: 'Revenue & ROI' },
  ];

  return (
    <section id="interactive-journey" className="py-20 md:py-28 bg-slate-50/70 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Signature Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight text-balance mb-4">
            From campaign to conversion.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Build the entire customer journey without stitching together multiple platforms.
          </p>
        </div>

        {/* Step Navigation Pill Bar */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200">
          <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none w-full max-w-4xl">
            {stepTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = currentStep === tab.id;
              const isPast = currentStep > tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => { setCurrentStep(tab.id); setIsPlaying(false); }}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive 
                      ? 'bg-slate-900 text-white shadow-md' 
                      : isPast
                      ? 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                    isActive ? 'bg-blue-500 text-white' : isPast ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {isPast ? '✓' : tab.id}
                  </span>
                  <span>{tab.title}</span>
                </button>
              );
            })}
          </div>

          {/* Autoplay toggle */}
          <div className="hidden md:flex items-center gap-2 pl-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 shadow-sm flex items-center gap-1.5 text-xs font-medium"
              title={isPlaying ? 'Pause Auto-cycle' : 'Play Auto-cycle'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-blue-600" /> : <Play className="w-3.5 h-3.5 text-slate-600" />}
              <span>{isPlaying ? 'Auto-Advancing' : 'Paused'}</span>
            </button>
          </div>
        </div>

        {/* Main Step Demonstration Stage Box */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden min-h-[500px]">
          
          {/* STEP 1: AUDIENCE DYNAMIC SEGMENTATION */}
          {currentStep === 1 && (
            <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Step 1 — Audience</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                  Dynamic Segmentation in Real Time
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Start with your entire global contact list and drill down using live behavioral filters. No static exports or outdated CSV uploads.
                </p>
                <div className="p-4 bg-blue-50/60 rounded-2xl border border-blue-100 space-y-2 text-xs">
                  <div className="flex justify-between font-medium text-slate-700">
                    <span>Total Database:</span>
                    <span className="font-bold text-slate-900">48,291 contacts</span>
                  </div>
                  <div className="flex justify-between font-medium text-emerald-700">
                    <span>Target Segment Filtered:</span>
                    <span className="font-bold text-emerald-800">4,821 VIP customers</span>
                  </div>
                </div>
                <button
                  onClick={() => setCurrentStep(2)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-all"
                >
                  <span>Flow into Campaign</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="lg:col-span-7 bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Live Condition Stack</div>
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2 py-0.5 bg-blue-100 text-blue-800 font-mono text-[11px] rounded">LOCATION</span>
                      <span className="text-xs font-semibold text-slate-800">Country equals India (IN)</span>
                    </div>
                    <span className="text-xs text-slate-400">28,400 match</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-mono text-[11px] rounded">ENGAGEMENT</span>
                      <span className="text-xs font-semibold text-slate-800">WhatsApp message read in last 7 days</span>
                    </div>
                    <span className="text-xs text-slate-400">12,150 match</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2 py-0.5 bg-amber-100 text-amber-800 font-mono text-[11px] rounded">PURCHASE</span>
                      <span className="text-xs font-semibold text-slate-800">Purchased in last 90 days &gt; ₹3,000</span>
                    </div>
                    <span className="text-xs text-slate-400">6,100 match</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2 py-0.5 bg-violet-100 text-violet-800 font-mono text-[11px] rounded">TAG</span>
                      <span className="text-xs font-semibold text-slate-800">Tag has "VIP_RUNNER"</span>
                    </div>
                    <span className="text-xs font-bold text-emerald-600">Final: 4,821 match</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: CAMPAIGN CHANNEL SELECTION */}
          {currentStep === 2 && (
            <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Step 2 — Campaign</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                  Choose Primary Channels or Combine Both
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Cocoonmail treats Email and WhatsApp as unified touchpoints. Broadcast simultaneously or create conditional fallbacks when emails aren't opened.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button
                    onClick={() => setSelectedChannel('whatsapp')}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      selectedChannel === 'whatsapp' 
                        ? 'border-emerald-500 bg-emerald-50/50 shadow-md ring-2 ring-emerald-500/20' 
                        : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <MessageSquare className="w-5 h-5 text-emerald-600 mb-2" />
                    <div className="text-xs font-bold text-slate-900">WhatsApp API</div>
                    <div className="text-[11px] text-slate-500">98% Open Rate · Fast Action</div>
                  </button>

                  <button
                    onClick={() => setSelectedChannel('email')}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      selectedChannel === 'email' 
                        ? 'border-blue-500 bg-blue-50/50 shadow-md ring-2 ring-blue-500/20' 
                        : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <Mail className="w-5 h-5 text-blue-600 mb-2" />
                    <div className="text-xs font-bold text-slate-900">Email Marketing</div>
                    <div className="text-[11px] text-slate-500">Visual Rich Story · 99.8% Inbox</div>
                  </button>
                </div>
                <button
                  onClick={() => setCurrentStep(3)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-all"
                >
                  <span>Build Template Next</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="lg:col-span-7 bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Multi-Channel Delivery Strategy</div>
                <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
                      WA
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Priority WhatsApp Dispatch</div>
                      <div className="text-xs text-slate-500">Sends personalized WhatsApp message with instant product recommendation</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pl-4 text-xs font-medium text-slate-400">
                    <span className="w-0.5 h-6 bg-slate-200" />
                    <span>If no reply within 4 hours ↓</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
                      EM
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Rich Email Catalog Digest</div>
                      <div className="text-xs text-slate-500">Delivers high-res imagery and coupon code to customer's primary inbox</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: TEMPLATE BUILDER */}
          {currentStep === 3 && (
            <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Step 3 — Template Builder</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                  Drag Block → Personalize → Preview
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Design stunning responsive layouts with dynamic token tags like <code className="bg-slate-100 px-1 py-0.5 rounded text-blue-600 font-mono text-xs">&#123;&#123;first_name&#125;&#125;</code> and interactive WhatsApp quick-replies.
                </p>
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-slate-700">Select Block to Inject:</div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setTemplateBlock('hero-card')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${templateBlock === 'hero-card' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-700 border-slate-200'}`}
                    >
                      Hero Banner
                    </button>
                    <button 
                      onClick={() => setTemplateBlock('product-card')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${templateBlock === 'product-card' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-700 border-slate-200'}`}
                    >
                      Shoe Product Card
                    </button>
                    <button 
                      onClick={() => setTemplateBlock('quick-reply')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${templateBlock === 'quick-reply' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-700 border-slate-200'}`}
                    >
                      Quick Replies
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => setCurrentStep(4)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-all"
                >
                  <span>Launch WhatsApp Simulation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="lg:col-span-7 bg-slate-50 p-6 rounded-2xl border border-slate-200 flex justify-center">
                {/* Mobile Preview Frame */}
                <div className="w-72 bg-white rounded-[2.5rem] p-3 shadow-xl border-4 border-slate-800">
                  <div className="w-20 h-4 bg-slate-800 rounded-full mx-auto mb-2" />
                  <div className="p-3 bg-slate-100 rounded-2xl space-y-2">
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider text-center">
                      Live Mobile Preview
                    </div>
                    {templateBlock === 'hero-card' && (
                      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-xl shadow-sm text-center">
                        <div className="text-xs font-bold">VIP Early Access Drop</div>
                        <div className="text-[10px] opacity-90 mt-1">Hello &#123;&#123;first_name&#125;&#125;, your special 20% runner reward is active!</div>
                      </div>
                    )}
                    {templateBlock === 'product-card' && (
                      <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm text-center">
                        <div className="w-full h-20 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 font-bold text-xs mb-2">
                          👟 Performance Runner (₹4,999)
                        </div>
                        <button className="w-full py-1 bg-emerald-600 text-white text-[11px] font-bold rounded">
                          Order in WhatsApp
                        </button>
                      </div>
                    )}
                    {templateBlock === 'quick-reply' && (
                      <div className="space-y-1.5 pt-2">
                        <div className="p-2 bg-white rounded-lg text-[11px] text-slate-800 shadow-sm">
                          Would you like to browse sizes or speak with an agent?
                        </div>
                        <div className="flex gap-1.5">
                          <span className="px-2 py-1 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded-full">Browse Sizes</span>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-[10px] font-bold rounded-full">Talk to Agent</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: WHATSAPP CONVERSATION */}
          {currentStep === 4 && (
            <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Step 4 — WhatsApp Experience</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                  Instant Customer Enquiry on Verified WhatsApp
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Customers reply directly to your verified business profile. No logins, no forgotten passwords, and zero friction.
                </p>
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-xs text-emerald-800">
                  <div className="font-bold">Official WhatsApp Cloud API</div>
                  <div className="text-[11px] mt-0.5">High-throughput channel with sub-second message delivery.</div>
                </div>
                <button
                  onClick={() => setCurrentStep(5)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-all"
                >
                  <span>See AI Agent Respond</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="lg:col-span-7 bg-slate-100 p-6 rounded-2xl flex justify-center">
                <div className="w-full max-w-md bg-[#EFEAE2] rounded-2xl shadow-lg border border-slate-300 p-4 space-y-3">
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-300/60 bg-emerald-800 text-white -m-4 p-3 rounded-t-2xl mb-3">
                    <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">
                      CM
                    </div>
                    <div>
                      <div className="text-xs font-bold flex items-center gap-1">
                        CocoonShoes Official
                        <Check className="w-3 h-3 text-emerald-300" />
                      </div>
                      <div className="text-[10px] text-emerald-200">Verified Business Account</div>
                    </div>
                  </div>

                  {/* Customer message */}
                  <div className="flex justify-end">
                    <div className="bg-[#E7FFDB] text-slate-900 text-xs p-3 rounded-xl rounded-tr-none shadow-sm max-w-[80%]">
                      Hi, I saw your VIP alert! I'm looking for a running shoe under ₹5,000 for road marathons.
                      <div className="text-[9px] text-slate-400 text-right mt-1">10:42 AM · Read</div>
                    </div>
                  </div>

                  {/* AI typing indicator */}
                  <div className="flex justify-start">
                    <div className="bg-white text-slate-700 text-xs px-3 py-2 rounded-xl rounded-tl-none shadow-sm flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-pulse" />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-pulse delay-100" />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-pulse delay-200" />
                      <span className="text-[10px] text-slate-400 font-medium ml-1">AI searching catalog...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: AI AGENT ACTION */}
          {currentStep === 5 && (
            <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold text-violet-600 uppercase tracking-wider">Step 5 — AI Agent Action</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                  Autonomous Catalog Search & Recommendation
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The AI parses the customer's intent (road running shoe &lt; ₹5,000), queries your connected product catalog, and formats an interactive product card.
                </p>
                <div className="space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Intent classified: <strong>PRODUCT_SEARCH</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Price ceiling constraint: <strong>₹5,000</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Catalog matches found: <strong>3 in stock</strong></span>
                  </div>
                </div>
                <button
                  onClick={() => setCurrentStep(6)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-all"
                >
                  <span>Inspect Product Card</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="lg:col-span-7 bg-slate-100 p-6 rounded-2xl flex justify-center">
                <div className="w-full max-w-md bg-[#EFEAE2] rounded-2xl shadow-lg border border-slate-300 p-4 space-y-3">
                  <div className="bg-white text-slate-900 text-xs p-3 rounded-xl rounded-tl-none shadow-sm space-y-2">
                    <p>I found three lightweight road running shoes within your budget! Here is our top-rated model:</p>
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-bold text-slate-900 text-sm">Velocity Pro Carbon Runner</div>
                          <div className="text-[11px] text-slate-500">Dual nitrogen foam · 190g</div>
                        </div>
                        <span className="font-bold text-blue-600 text-sm">₹4,999</span>
                      </div>
                      <div className="mt-2 text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold inline-block">
                        In Stock · Sizes UK 7, 8, 9, 10
                      </div>
                    </div>
                    <div className="text-[9px] text-slate-400 text-right">10:43 AM</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 6: CATALOG PRODUCT CARD */}
          {currentStep === 6 && (
            <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">Step 6 — Catalog & Selection</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                  In-Chat Product Card with One-Tap Buy
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  No redirecting the user to an external slow-loading e-commerce site where carts get abandoned. The customer selects their size and clicks Buy Now right in WhatsApp.
                </p>
                <button
                  onClick={() => setCurrentStep(7)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-xl transition-all shadow-md"
                >
                  <span>Simulate Instant Payment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="lg:col-span-7 bg-slate-50 p-6 rounded-2xl border border-slate-200 flex justify-center">
                <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                  <div className="h-44 bg-gradient-to-tr from-blue-600 to-indigo-600 flex flex-col items-center justify-center text-white p-4 relative">
                    <span className="text-5xl">👟</span>
                    <span className="text-xs font-bold tracking-wider uppercase mt-2">Velocity Pro Runner</span>
                    <span className="absolute top-3 right-3 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold">
                      ₹4,999
                    </span>
                  </div>
                  <div className="p-5 space-y-4">
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider font-bold">Selected Variant</div>
                      <div className="text-sm font-bold text-slate-900">Color: Cobalt Electric / Size: UK 9</div>
                    </div>
                    <div className="flex justify-between items-center text-xs pt-2 border-t border-slate-100">
                      <span className="text-slate-500">Shipping:</span>
                      <span className="font-bold text-emerald-600">Free Express (2 Days)</span>
                    </div>
                    <button 
                      onClick={() => setCurrentStep(7)}
                      className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
                    >
                      <CreditCard className="w-4 h-4" />
                      <span>Buy Now — ₹4,999</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 7: PAYMENT CONFIRMATION */}
          {currentStep === 7 && (
            <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Step 7 — Payment & Checkout</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                  Instant Payment via UPI, Razorpay & Stripe
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Seamless payment authorization without leaves or dead-ends. The receipt and shipping tracking are automatically returned to WhatsApp.
                </p>
                <button
                  onClick={() => setCurrentStep(8)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-all"
                >
                  <span>View Revenue in Analytics</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="lg:col-span-7 bg-slate-50 p-6 rounded-2xl border border-slate-200 flex justify-center">
                <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-emerald-200 p-6 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Payment Successful</h4>
                    <p className="text-xs text-slate-500 mt-1">Transaction settled via UPI / Razorpay Gateway</p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-left space-y-2 font-mono">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Order ID:</span>
                      <span className="font-bold text-slate-800">#CM-48291</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Amount Paid:</span>
                      <span className="font-bold text-emerald-600">₹4,999.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Tracking:</span>
                      <span className="font-bold text-blue-600">Dispatched via Bluedart</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 8: ANALYTICS LOOP */}
          {currentStep === 8 && (
            <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Step 8 — Analytics & Retention</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                  Every Interaction Attributed to Revenue
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Real-time analytics calculate ROI across both channels, feeding purchase events directly into the next automated retention loop.
                </p>
                <button
                  onClick={() => setCurrentStep(1)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl transition-all shadow-md"
                >
                  <span>Replay Complete Journey</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="lg:col-span-7 bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <div className="text-xs text-slate-400 font-semibold">Messages Sent</div>
                    <div className="text-2xl font-black text-slate-900 mt-1">4,821</div>
                    <div className="text-[11px] text-emerald-600 mt-1">99.4% Delivery rate</div>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <div className="text-xs text-slate-400 font-semibold">Engagement</div>
                    <div className="text-2xl font-black text-slate-900 mt-1">68.2%</div>
                    <div className="text-[11px] text-blue-600 mt-1">3,288 Active responses</div>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <div className="text-xs text-slate-400 font-semibold">Conversions</div>
                    <div className="text-2xl font-black text-slate-900 mt-1">14.8%</div>
                    <div className="text-[11px] text-violet-600 mt-1">714 Instant checkouts</div>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <div className="text-xs text-slate-400 font-semibold">Attributed Revenue</div>
                    <div className="text-2xl font-black text-emerald-600 mt-1">₹35,69,286</div>
                    <div className="text-[11px] text-slate-500 mt-1">18.4x Campaign ROI</div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
