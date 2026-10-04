import React, { useState } from 'react';
import { 
  Mail, 
  Smartphone, 
  Monitor, 
  Layers, 
  Type, 
  Image as ImageIcon, 
  MousePointer, 
  ShoppingBag, 
  Code, 
  CheckCircle2, 
  ArrowRight,
  Terminal,
  Zap,
  Split
} from 'lucide-react';
import { ModalType } from '../../types';

interface EmailSectionProps {
  onOpenModal: (type: ModalType) => void;
}

export const EmailSection: React.FC<EmailSectionProps> = ({ onOpenModal }) => {
  const [devicePreview, setDevicePreview] = useState<'desktop' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = useState<'builder' | 'transactional'>('builder');
  const [injectedBlock, setInjectedBlock] = useState<'hero' | 'product' | 'discount'>('hero');
  const [apiDispatched, setApiDispatched] = useState(true);

  return (
    <section id="email-section" className="py-20 md:py-28 bg-[#F0F7FF] border-b border-blue-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-semibold mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>High-Throughput Global Deliverability</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight text-balance mb-4">
            Email that does more than send.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Build campaigns, personalize every message, automate customer journeys and deliver transactional email from the same platform.
          </p>
          
          {/* Sub-mode switcher */}
          <div className="inline-flex p-1 bg-white rounded-xl border border-blue-200 mt-6 shadow-sm">
            <button
              onClick={() => setActiveTab('builder')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'builder' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Visual Drag-and-Drop Builder
            </button>
            <button
              onClick={() => setActiveTab('transactional')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'transactional' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Transactional REST API & SMTP
            </button>
          </div>
        </div>

        {/* TAB 1: VISUAL EMAIL BUILDER SHOWCASE */}
        {activeTab === 'builder' && (
          <div className="bg-white rounded-3xl border border-blue-100 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 animate-in fade-in duration-300">
            
            {/* Left Toolbar / Block Palette */}
            <div className="lg:col-span-4 p-6 bg-slate-50 border-r border-slate-100 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center justify-between">
                  <span>Visual Canvas Blocks</span>
                  <span className="text-[10px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded">6 Available</span>
                </div>

                <div className="space-y-2.5">
                  <button 
                    onClick={() => setInjectedBlock('hero')}
                    className={`w-full flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                      injectedBlock === 'hero' ? 'bg-white border-blue-500 shadow-sm ring-2 ring-blue-500/10' : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                        <Type className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800">Heading & Hero Block</div>
                        <div className="text-[11px] text-slate-500">Dynamic personalized greeting</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-blue-600">{injectedBlock === 'hero' ? 'Active' : '+'}</span>
                  </button>

                  <button 
                    onClick={() => setInjectedBlock('product')}
                    className={`w-full flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                      injectedBlock === 'product' ? 'bg-white border-blue-500 shadow-sm ring-2 ring-blue-500/10' : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center">
                        <ShoppingBag className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800">Product Showcase Card</div>
                        <div className="text-[11px] text-slate-500">Live price, variant & Buy button</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-blue-600">{injectedBlock === 'product' ? 'Active' : '+'}</span>
                  </button>

                  <button 
                    onClick={() => setInjectedBlock('discount')}
                    className={`w-full flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                      injectedBlock === 'discount' ? 'bg-white border-blue-500 shadow-sm ring-2 ring-blue-500/10' : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                        <Split className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800">Conditional Discount Box</div>
                        <div className="text-[11px] text-slate-500">Show only if order total &gt; ₹3,000</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-blue-600">{injectedBlock === 'discount' ? 'Active' : '+'}</span>
                  </button>
                </div>

                <div className="mt-6 p-4 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-slate-600 space-y-1.5">
                  <div className="font-semibold text-blue-900">Dynamic Variable Support</div>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    Insert variables like <code className="text-blue-700 bg-white px-1 py-0.5 rounded border border-blue-200">&#123;&#123;customer.first_name&#125;&#125;</code> and conditional branches directly in the editor.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <button
                  onClick={() => onOpenModal('start-free')}
                  className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Explore Email</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Live Interactive Visual Canvas */}
            <div className="lg:col-span-8 p-6 md:p-10 bg-slate-100/50 flex flex-col items-center">
              
              {/* Preview device toggles */}
              <div className="flex items-center justify-between w-full max-w-xl mb-4 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Real-time Rendering Preview</span>
                </div>
                <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200 shadow-sm">
                  <button
                    onClick={() => setDevicePreview('desktop')}
                    className={`p-1.5 rounded flex items-center gap-1 font-semibold ${
                      devicePreview === 'desktop' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    <span>Desktop</span>
                  </button>
                  <button
                    onClick={() => setDevicePreview('mobile')}
                    className={`p-1.5 rounded flex items-center gap-1 font-semibold ${
                      devicePreview === 'mobile' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Mobile</span>
                  </button>
                </div>
              </div>

              {/* Rendered Canvas Body */}
              <div className={`transition-all duration-300 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden ${
                devicePreview === 'desktop' ? 'w-full max-w-xl p-8' : 'w-72 p-4'
              }`}>
                {/* Email Subject Line Header */}
                <div className="border-b border-slate-100 pb-3 mb-4 text-xs text-slate-500">
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-800">From: CocoonStore &lt;updates@cocoonmail.com&gt;</span>
                    <span>10:45 AM</span>
                  </div>
                  <div className="font-bold text-slate-900 text-sm mt-1">
                    Your Personalized VIP Selection Has Arrived!
                  </div>
                </div>

                {/* Email Body Blocks */}
                <div className="space-y-4">
                  
                  {/* Hero Block */}
                  <div className={`p-4 rounded-xl border transition-all ${
                    injectedBlock === 'hero' ? 'bg-blue-50/80 border-blue-300' : 'bg-slate-50 border-slate-100'
                  }`}>
                    <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1">
                      Personalized Hero Block
                    </div>
                    <h4 className="text-base font-bold text-slate-900">
                      Hello, Alex! Your Running Season Upgrade
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      We noticed you recently crushed your 10K goal. Here are our top-rated nitrogen cushioning road runners designed for your gait.
                    </p>
                  </div>

                  {/* Product Block */}
                  <div className={`p-4 rounded-xl border transition-all ${
                    injectedBlock === 'product' ? 'bg-indigo-50/80 border-indigo-300' : 'bg-slate-50 border-slate-100'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider">Product Showcase</div>
                        <div className="text-sm font-bold text-slate-900">Velocity Pro Carbon Runner</div>
                        <div className="text-xs font-semibold text-emerald-600">₹4,999 · In Stock</div>
                      </div>
                      <span className="text-3xl">👟</span>
                    </div>
                    <button className="mt-3 w-full py-2 bg-slate-900 text-white rounded-lg text-xs font-bold shadow-sm">
                      View in Store or Order via WhatsApp
                    </button>
                  </div>

                  {/* Discount Block */}
                  <div className={`p-4 rounded-xl border transition-all ${
                    injectedBlock === 'discount' ? 'bg-emerald-50/80 border-emerald-300' : 'bg-slate-50 border-slate-100'
                  }`}>
                    <div className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Conditional Perk</div>
                    <div className="text-xs text-slate-700 mt-0.5">
                      Use code <strong className="font-mono text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded">VIPRUNNER20</strong> for 20% off at checkout.
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        )}

        {/* TAB 2: TRANSACTIONAL API & LIVE EMAIL ARRIVAL */}
        {activeTab === 'transactional' && (
          <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl p-6 sm:p-10 text-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
            
            {/* Left: Code payload */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-blue-400 font-mono">POST /mail/send</span>
                <span className="text-xs text-slate-400 font-mono">200 OK · 42ms</span>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
                <pre>{`curl -X POST https://api.cocoonmail.com/v1/mail/send \\
  -H "Authorization: Bearer cm_live_sec_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "customer@example.com",
    "template": "order-confirmed",
    "data": {
      "order_id": "CM-48291",
      "customer_name": "Alex",
      "item": "Velocity Pro Runner",
      "amount": "₹4,999"
    }
  }'`}</pre>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setApiDispatched(true)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5"
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Execute Simulated API Call</span>
                </button>
                <span className="text-xs text-slate-400">99.8% inbox guarantee</span>
              </div>
            </div>

            {/* Right: Simulated Realtime Email Arrival */}
            <div className="lg:col-span-6 bg-slate-800/80 p-6 rounded-2xl border border-slate-700 space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold text-white">Live Inbox Stream</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Delivered in 180ms
                </span>
              </div>

              <div className="bg-white text-slate-900 p-5 rounded-xl shadow-lg border border-slate-200">
                <div className="flex justify-between items-start text-xs border-b border-slate-100 pb-2 mb-3">
                  <div>
                    <div className="font-bold text-slate-900">CocoonStore Support</div>
                    <div className="text-[11px] text-slate-500">Order Confirmation #CM-48291</div>
                  </div>
                  <span className="text-[11px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                    Verified SPF / DKIM
                  </span>
                </div>
                <div className="text-xs text-slate-700 space-y-2">
                  <p>Hi Alex, your order for <strong>Velocity Pro Runner (₹4,999)</strong> has been confirmed and scheduled for dispatch.</p>
                  <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-[11px] font-mono">
                    Tracking code: BLUEDART-948291-IN
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
