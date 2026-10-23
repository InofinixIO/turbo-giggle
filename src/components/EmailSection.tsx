import React, { useState } from 'react';
import { 
  Mail, 
  Smartphone, 
  Monitor, 
  Sparkles, 
  Layers, 
  Type, 
  Image as ImageIcon, 
  Square, 
  ShoppingBag, 
  Code, 
  Sliders, 
  ArrowRight,
  CheckCircle2,
  Send,
  Zap,
  Check
} from 'lucide-react';

interface EmailSectionProps {
  onOpenStartFree: () => void;
}

export const EmailSection: React.FC<EmailSectionProps> = ({ onOpenStartFree }) => {
  const [previewDevice, setPreviewDevice] = useState<'mobile' | 'desktop'>('desktop');
  const [activeTab, setActiveTab] = useState<'builder' | 'transactional'>('builder');
  
  // Dynamic block toggles
  const [activeBlocks, setActiveBlocks] = useState<string[]>([
    'Text',
    'Image',
    'Button',
    'Product',
    'Dynamic variable',
    'Conditional content'
  ]);
  const [selectedBlock, setSelectedBlock] = useState<string>('Dynamic variable');

  // Transactional simulation state
  const [apiDispatched, setApiDispatched] = useState<boolean>(true);

  return (
    <section id="email" className="py-24 bg-[#f4f8ff] border-t border-blue-100/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-800 text-xs font-semibold mb-3">
            <Mail className="w-3.5 h-3.5 text-blue-600" />
            <span>Unified Email Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            Email that does more than send.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Build campaigns, personalize every message, automate customer journeys and deliver transactional email from the same platform.
          </p>

          <div className="mt-6 flex justify-center gap-3">
            <button
              onClick={() => setActiveTab('builder')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'builder'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              Visual Campaign Builder
            </button>
            <button
              onClick={() => setActiveTab('transactional')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'transactional'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              Transactional API &amp; Delivery
            </button>
          </div>
        </div>

        {/* Tab 1: Animated Email Builder */}
        {activeTab === 'builder' && (
          <div className="bg-white rounded-3xl border border-blue-200/90 shadow-xl overflow-hidden p-6 sm:p-10 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Builder Toolbox & Blocks */}
              <div className="lg:col-span-4 space-y-5">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Draggable Content Blocks</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Assemble high-converting emails with live conditional logic and dynamic personalization variables.
                  </p>
                </div>

                {/* Blocks List */}
                <div className="space-y-2">
                  {[
                    { id: 'Text', icon: Type, label: 'Text Block', desc: 'Rich typography with variable merge tags' },
                    { id: 'Image', icon: ImageIcon, label: 'Image', desc: 'Retina-ready banners & responsive lookbooks' },
                    { id: 'Button', icon: Square, label: 'Button', desc: 'Smart CTA with deep link tracking' },
                    { id: 'Product', icon: ShoppingBag, label: 'Product', desc: 'Live catalog sync with price & stock' },
                    { id: 'Dynamic variable', icon: Sliders, label: 'Dynamic Variable', desc: '{{ contact.first_name }}, {{ cart.total }}' },
                    { id: 'Conditional content', icon: Layers, label: 'Conditional Content', desc: 'Show VIP tier discount if purchased > 3x' }
                  ].map((block) => {
                    const Icon = block.icon;
                    const isSelected = selectedBlock === block.id;

                    return (
                      <div
                        key={block.id}
                        onClick={() => setSelectedBlock(block.id)}
                        className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'bg-blue-50/70 border-blue-400 shadow-xs'
                            : 'bg-slate-50 border-slate-200 hover:bg-white'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                            isSelected ? 'bg-blue-600 text-white' : 'bg-white text-slate-600 border border-slate-200'
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-slate-900 block">{block.label}</span>
                            <span className="text-[11px] text-slate-500 line-clamp-1">{block.desc}</span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-blue-600 font-semibold shrink-0">
                          {isSelected ? 'Selected' : '+ Drag'}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenStartFree}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs sm:text-sm font-semibold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Explore Email</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Live Viewport Canvas (Mobile / Desktop Toggle) */}
              <div className="lg:col-span-8">
                {/* Viewport Control Bar */}
                <div className="bg-slate-100 p-2 rounded-2xl border border-slate-200 flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-700 ml-2">Preview Viewport:</span>
                    <button
                      onClick={() => setPreviewDevice('desktop')}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                        previewDevice === 'desktop'
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Monitor className="w-3.5 h-3.5" />
                      <span>Desktop Preview</span>
                    </button>
                    <button
                      onClick={() => setPreviewDevice('mobile')}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                        previewDevice === 'mobile'
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>Mobile Preview</span>
                    </button>
                  </div>

                  <span className="text-[11px] font-mono text-emerald-600 font-bold mr-2">
                    ● Deliverability SLA: 99.8%
                  </span>
                </div>

                {/* Viewport Display Frame */}
                <div className="flex justify-center bg-slate-900/5 rounded-2xl p-4 sm:p-6 border border-slate-200">
                  <div className={`transition-all duration-300 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden ${
                    previewDevice === 'mobile' ? 'w-[360px]' : 'w-full max-w-[620px]'
                  }`}>
                    
                    {/* Simulated Email Client Header */}
                    <div className="bg-slate-100 p-3 border-b border-slate-200 text-xs space-y-1">
                      <div className="flex items-center justify-between text-slate-500 text-[11px]">
                        <span>From: <strong>Cocoon VIP &lt;vip@cocoonmail.com&gt;</strong></span>
                        <span className="font-mono">10:48 AM</span>
                      </div>
                      <p className="font-bold text-slate-800 text-xs">
                        Subject: Aarav, your personalized early access lookbook is ready ✨
                      </p>
                    </div>

                    {/* Email Body Content */}
                    <div className="p-5 sm:p-6 space-y-4 text-xs">
                      
                      {/* Image Block */}
                      <div className="h-36 rounded-xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-950 p-4 flex flex-col justify-end text-white relative overflow-hidden">
                        <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-blue-500/30 text-blue-200 text-[9px] font-mono border border-blue-400/30">
                          Block: Image Banner
                        </div>
                        <span className="text-[10px] uppercase font-bold text-blue-300 tracking-wider">Early Access</span>
                        <h4 className="text-base font-extrabold">Monsoon High-Traction Sneaker</h4>
                      </div>

                      {/* Dynamic Variable & Conditional Content */}
                      <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-xl space-y-1">
                        <div className="flex items-center justify-between text-[10px] font-mono text-blue-700">
                          <span>Block: Dynamic Variable + Conditional</span>
                          <span>✓ Verified Match</span>
                        </div>
                        <p className="text-xs text-slate-800 leading-relaxed">
                          Hello <strong>Aarav</strong>! Because you are in our <strong>VIP India Cohort</strong>, we have held your reserved size <strong>UK 9</strong> in stock for the next 24 hours.
                        </p>
                      </div>

                      {/* Product Block */}
                      <div className="border border-slate-200 rounded-xl p-3 bg-slate-50 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-mono text-slate-400 block">Block: Product Sync</span>
                          <strong className="text-xs text-slate-900">HydroBlack Running Shoes</strong>
                          <span className="text-xs font-bold text-emerald-600 block font-mono">₹4,999</span>
                        </div>
                        <button className="px-3.5 py-1.5 bg-slate-900 text-white rounded-lg text-xs font-semibold">
                          Claim Size UK 9
                        </button>
                      </div>

                      {/* Footer */}
                      <div className="pt-2 text-center text-[10px] text-slate-400 border-t border-slate-100">
                        Cocoon Commerce Inc. · 1-click unsubscribe · Instant order tracking enabled
                      </div>

                    </div>

                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Tab 2: Transactional API Transforming into Delivered Email */}
        {activeTab === 'transactional' && (
          <div className="bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden p-6 sm:p-10 animate-in fade-in duration-200 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: API Code Payload */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Code className="w-4 h-4" /> POST /v1/mail/send
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    200 OK · 18ms SLA
                  </span>
                </div>

                <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800 font-mono text-xs text-slate-300 space-y-1 overflow-x-auto">
                  <p className="text-indigo-400">curl -X POST https://api.cocoonmail.com/v1/mail/send \</p>
                  <p className="text-slate-500">  -H &quot;Authorization: Bearer cm_live_sec_9941&quot; \</p>
                  <p className="text-slate-500">  -H &quot;Content-Type: application/json&quot; \</p>
                  <p className="text-slate-500">  -d &apos;&#123;</p>
                  <p className="text-emerald-300">    &quot;to&quot;: &quot;customer@example.com&quot;,</p>
                  <p className="text-emerald-300">    &quot;template&quot;: &quot;order-confirmed&quot;,</p>
                  <p className="text-emerald-300">    &quot;data&quot;: &#123;</p>
                  <p className="text-amber-300">      &quot;order_id&quot;: &quot;48291&quot;,</p>
                  <p className="text-amber-300">      &quot;amount&quot;: 4999,</p>
                  <p className="text-amber-300">      &quot;currency&quot;: &quot;INR&quot;</p>
                  <p className="text-emerald-300">    &#125;</p>
                  <p className="text-slate-500">  &#125;&apos;</p>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>Real-time webhook events: delivered, opened, clicked, bounced.</span>
                </div>
              </div>

              {/* Right Column: Delivered Real-Time Email View */}
              <div className="lg:col-span-6">
                <div className="bg-white text-slate-900 rounded-2xl p-5 border border-slate-200 shadow-xl space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs">
                    <span className="font-bold text-slate-900 flex items-center gap-1.5 text-emerald-600">
                      <CheckCircle2 className="w-4 h-4" /> Delivered in 18ms (Dedicated IP)
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">SPF/DKIM: PASS</span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <h4 className="font-bold text-sm text-slate-900">Your Order #48291 is Confirmed!</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Thank you for your purchase. We have received your payment of <strong>₹4,999</strong> and your order is currently being prepped for dispatch.
                    </p>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between font-mono">
                      <div>
                        <span className="text-[10px] text-slate-400 block">Item</span>
                        <span className="font-bold text-slate-800">HydroGlide Running Shoes</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-slate-400 block">Total</span>
                        <span className="font-bold text-emerald-600">₹4,999.00</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-[11px] text-slate-400">Tracking code: TRK-9921-IN</span>
                      <button 
                        onClick={onOpenStartFree}
                        className="px-3 py-1.5 bg-blue-600 text-white rounded-lg font-semibold text-xs cursor-pointer hover:bg-blue-500"
                      >
                        Explore Email
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
