import React, { useState } from 'react';
import { 
  Layout, 
  MessageSquare, 
  Mail, 
  Smartphone, 
  Monitor, 
  Send, 
  Check, 
  Sparkles, 
  Type, 
  Image as ImageIcon, 
  MousePointer,
  ShoppingBag,
  ExternalLink
} from 'lucide-react';
import { ModalType } from '../../types';

interface TemplatePlaygroundProps {
  onOpenModal: (type: ModalType) => void;
}

export const TemplatePlayground: React.FC<TemplatePlaygroundProps> = ({ onOpenModal }) => {
  const [channel, setChannel] = useState<'whatsapp' | 'email'>('whatsapp');
  
  // WhatsApp Template state
  const [waHeaderType, setWaHeaderType] = useState<'text' | 'image'>('text');
  const [waHeaderText, setWaHeaderText] = useState('Flash Sale: 24-Hour VIP Access ⚡');
  const [waBodyText, setWaBodyText] = useState('Hello {{1}}, your exclusive early access code {{2}} is ready. Tap below to browse catalog or claim 20% off.');
  const [param1, setParam1] = useState('Priya');
  const [param2, setParam2] = useState('VIP20');
  const [waButtonType, setWaButtonType] = useState<'quick_reply' | 'cta'>('quick_reply');

  // Computed preview body
  const renderedWaBody = waBodyText
    .replace('{{1}}', param1 || '{{1}}')
    .replace('{{2}}', param2 || '{{2}}');

  return (
    <section className="py-20 bg-slate-100/70 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-3">
            <Layout className="w-3.5 h-3.5" />
            <span>Interactive Template Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Build & Test Templates in Real Time
          </h2>
          <p className="text-sm text-slate-600">
            Experiment with WhatsApp pre-approved interactive templates and dynamic email variables before going live.
          </p>

          {/* Channel selector */}
          <div className="inline-flex p-1 bg-white rounded-xl border border-slate-200 mt-6 shadow-sm">
            <button
              onClick={() => setChannel('whatsapp')}
              className={`flex items-center gap-2 px-5 py-2 text-xs font-bold rounded-lg transition-all ${
                channel === 'whatsapp' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Interactive Builder</span>
            </button>
            <button
              onClick={() => setChannel('email')}
              className={`flex items-center gap-2 px-5 py-2 text-xs font-bold rounded-lg transition-all ${
                channel === 'email' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email Visual Builder</span>
            </button>
          </div>
        </div>

        {/* Sandbox Studio Workarea */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 max-w-5xl mx-auto">
          
          {/* Left: Interactive Controls */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-slate-50 border-r border-slate-100">
            {channel === 'whatsapp' ? (
              <div className="space-y-4">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  WhatsApp Cloud API Template Parameters
                </div>

                {/* Header Type */}
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Header Component</label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setWaHeaderType('text')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${waHeaderType === 'text' ? 'bg-emerald-50 border-emerald-500 text-emerald-700' : 'bg-white border-slate-200 text-slate-600'}`}
                    >
                      Text Header
                    </button>
                    <button
                      onClick={() => setWaHeaderType('image')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${waHeaderType === 'image' ? 'bg-emerald-50 border-emerald-500 text-emerald-700' : 'bg-white border-slate-200 text-slate-600'}`}
                    >
                      Media / Image Header
                    </button>
                  </div>
                  {waHeaderType === 'text' && (
                    <input
                      type="text"
                      value={waHeaderText}
                      onChange={(e) => setWaHeaderText(e.target.value)}
                      className="mt-2 w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  )}
                </div>

                {/* Body Text */}
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Message Body (Supports Variables)</label>
                  <textarea
                    rows={3}
                    value={waBodyText}
                    onChange={(e) => setWaBodyText(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono"
                  />
                </div>

                {/* Dynamic Variables Inputs */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">Sample &#123;&#123;1&#125;&#125; (Name)</label>
                    <input
                      type="text"
                      value={param1}
                      onChange={(e) => setParam1(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">Sample &#123;&#123;2&#125;&#125; (Coupon)</label>
                    <input
                      type="text"
                      value={param2}
                      onChange={(e) => setParam2(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono"
                    />
                  </div>
                </div>

                {/* Buttons Configuration */}
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Interactive Action Buttons</label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setWaButtonType('quick_reply')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${waButtonType === 'quick_reply' ? 'bg-emerald-50 border-emerald-500 text-emerald-700' : 'bg-white border-slate-200 text-slate-600'}`}
                    >
                      Quick Replies (Chips)
                    </button>
                    <button
                      onClick={() => setWaButtonType('cta')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${waButtonType === 'cta' ? 'bg-emerald-50 border-emerald-500 text-emerald-700' : 'bg-white border-slate-200 text-slate-600'}`}
                    >
                      Call to Action (URL & Call)
                    </button>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenModal('start-free')}
                    className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors"
                  >
                    Submit Template to Meta for Instant Verification
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Email Template Customizer
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Email Subject Line</label>
                    <input 
                      type="text" 
                      defaultValue="⚡ Your VIP VIP20 Reward Is Active!" 
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Preheader Preview Text</label>
                    <input 
                      type="text" 
                      defaultValue="Claim your 20% discount on Velocity Pro Road Runners..." 
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Primary Brand Color Accent</label>
                    <div className="flex gap-2">
                      <span className="w-6 h-6 rounded-full bg-blue-600 border-2 border-slate-800 cursor-pointer" />
                      <span className="w-6 h-6 rounded-full bg-indigo-600 cursor-pointer" />
                      <span className="w-6 h-6 rounded-full bg-emerald-600 cursor-pointer" />
                      <span className="w-6 h-6 rounded-full bg-rose-600 cursor-pointer" />
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenModal('start-free')}
                  className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors"
                >
                  Save & Test Send to Inbox
                </button>
              </div>
            )}
          </div>

          {/* Right: Live Interactive Rendering Screen */}
          <div className="lg:col-span-5 p-6 md:p-8 bg-slate-200/50 flex flex-col items-center justify-center">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-3">
              Sub-Second Live Preview
            </div>

            {channel === 'whatsapp' ? (
              <div className="w-full max-w-xs bg-white rounded-2xl shadow-xl border border-slate-300 overflow-hidden">
                <div className="bg-[#075E54] text-white p-2.5 flex items-center justify-between text-xs">
                  <span className="font-bold">CocoonStore Official</span>
                  <span className="text-[10px] text-emerald-200">10:50 AM</span>
                </div>

                <div className="bg-[#EFEAE2] p-3 space-y-2 text-xs">
                  <div className="bg-white rounded-xl rounded-tl-none p-3 shadow-sm space-y-2 border border-slate-200">
                    
                    {waHeaderType === 'text' ? (
                      <div className="font-bold text-slate-900 border-b border-slate-100 pb-1">
                        {waHeaderText}
                      </div>
                    ) : (
                      <div className="w-full h-24 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                        📸 Header Banner Media
                      </div>
                    )}

                    <p className="text-slate-800 leading-relaxed text-[11px]">
                      {renderedWaBody}
                    </p>

                    <div className="text-[9px] text-slate-400 text-right">10:50 AM</div>
                  </div>

                  {/* Rendered Action Buttons */}
                  {waButtonType === 'quick_reply' ? (
                    <div className="space-y-1 pt-1">
                      <div className="bg-white text-emerald-600 font-bold text-center py-1.5 rounded-lg border border-slate-200 text-xs shadow-sm hover:bg-slate-50 cursor-pointer">
                        👟 Browse Catalog
                      </div>
                      <div className="bg-white text-emerald-600 font-bold text-center py-1.5 rounded-lg border border-slate-200 text-xs shadow-sm hover:bg-slate-50 cursor-pointer">
                        💬 Speak to Agent
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-1 pt-1">
                      <div className="bg-white text-blue-600 font-bold text-center py-1.5 rounded-lg border border-slate-200 text-xs shadow-sm flex items-center justify-center gap-1">
                        <span>Visit Store</span>
                        <ExternalLink className="w-3 h-3" />
                      </div>
                    </div>
                  )}

                </div>
              </div>
            ) : (
              <div className="w-full max-w-xs bg-white rounded-2xl shadow-xl border border-slate-200 p-4 space-y-3">
                <div className="bg-blue-600 text-white p-3 rounded-xl text-center">
                  <div className="text-xs font-bold">VIP Early Access</div>
                  <div className="text-[10px] opacity-90 mt-0.5">Hello Priya, your 20% code VIP20 is active!</div>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-center">
                  <span className="text-3xl">👟</span>
                  <div className="text-xs font-bold text-slate-900 mt-1">Velocity Pro Runner</div>
                  <div className="text-[11px] font-bold text-blue-600">₹4,999 (Code: VIP20)</div>
                </div>
                <button className="w-full py-2 bg-slate-900 text-white rounded-lg text-xs font-bold">
                  Shop VIP Collection
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
