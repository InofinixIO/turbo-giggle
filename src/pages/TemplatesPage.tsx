import React, { useState } from 'react';
import { 
  FileCode2, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  MessageSquare, 
  Layers, 
  Eye, 
  Laptop, 
  Smartphone, 
  Code2, 
  Sliders, 
  Check, 
  ChevronRight, 
  Copy, 
  Image as ImageIcon,
  Zap,
  Globe,
  ShoppingBag
} from 'lucide-react';
import { PlatformPageId } from '../components/PlatformNavSwitcher';

interface TemplatesPageProps {
  onOpenStartFree: () => void;
  onOpenBookDemo: () => void;
  onNavigateModule: (moduleId: PlatformPageId) => void;
}

export const TemplatesPage: React.FC<TemplatesPageProps> = ({
  onOpenStartFree,
  onOpenBookDemo,
  onNavigateModule
}) => {
  const [templateChannel, setTemplateChannel] = useState<'email' | 'whatsapp'>('whatsapp');
  const [whatsappHeaderType, setWhatsappHeaderType] = useState<'image' | 'text' | 'document'>('image');
  const [quickButtonCount, setQuickButtonCount] = useState<number>(2);

  return (
    <div className="bg-white text-slate-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-fuchsia-50/70 via-purple-50/30 to-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#c026d30a_1px,transparent_1px),linear-gradient(to_bottom,#c026d30a_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-fuchsia-600 tracking-wide uppercase">
            <FileCode2 className="w-4 h-4" />
            <span>Dual-Channel Template Studio</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-600">Email &amp; WhatsApp</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Copy */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Design once. Deliver beautifully across <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 via-pink-600 to-indigo-600">Email and WhatsApp</span>.
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                A unified visual design studio. Craft responsive, bulletproof HTML emails and Meta-compliant interactive WhatsApp templates with quick replies, dynamic variables, and catalog buttons.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenStartFree}
                  className="px-7 py-3.5 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold text-base shadow-lg shadow-fuchsia-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 cursor-pointer"
                >
                  <span>Browse 100+ Free Templates</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenBookDemo}
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200 shadow-sm transition-all hover:border-slate-300 flex items-center gap-2 cursor-pointer"
                >
                  <span>Test Dual Editor</span>
                </button>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-fuchsia-600" />
                  <span>Meta Auto-Approval Guidance</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-fuchsia-600" />
                  <span>Liquid Dynamic Variables</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-fuchsia-600" />
                  <span>Tested on 40+ Email Clients</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Simulator: Dual Template Workspace */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xl shadow-fuchsia-900/10 overflow-hidden">
                
                {/* Header Switcher */}
                <div className="bg-slate-900 px-4 py-3 flex items-center justify-between text-white border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-slate-300">Studio: Spring_Sale_Dual_Template</span>
                  </div>

                  <div className="flex bg-slate-800 rounded-lg p-0.5 text-xs">
                    <button
                      onClick={() => setTemplateChannel('whatsapp')}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded transition-colors ${
                        templateChannel === 'whatsapp' ? 'bg-emerald-600 text-white font-medium' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Template</span>
                    </button>
                    <button
                      onClick={() => setTemplateChannel('email')}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded transition-colors ${
                        templateChannel === 'email' ? 'bg-blue-600 text-white font-medium' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>HTML Email</span>
                    </button>
                  </div>
                </div>

                {/* Sub-toolbar */}
                {templateChannel === 'whatsapp' ? (
                  <div className="bg-slate-50 border-b border-slate-200 p-3 grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-slate-500 block mb-1 font-medium">Header Media Type:</span>
                      <div className="flex gap-1">
                        {(['image', 'text', 'document'] as const).map((type) => (
                          <button
                            key={type}
                            onClick={() => setWhatsappHeaderType(type)}
                            className={`px-2 py-0.5 rounded capitalize text-[11px] font-medium transition-colors ${
                              whatsappHeaderType === type ? 'bg-emerald-600 text-white' : 'bg-white border border-slate-300 text-slate-700'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-slate-500 block mb-1 font-medium">Interactive Buttons:</span>
                      <div className="flex gap-1">
                        {[1, 2, 3].map((num) => (
                          <button
                            key={num}
                            onClick={() => setQuickButtonCount(num)}
                            className={`px-2.5 py-0.5 rounded text-[11px] font-medium transition-colors ${
                              quickButtonCount === num ? 'bg-emerald-600 text-white' : 'bg-white border border-slate-300 text-slate-700'
                            }`}
                          >
                            {num} Buttons
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-slate-50 border-b border-slate-200 p-3 flex items-center justify-between text-xs">
                    <span className="text-slate-600 font-medium">Dynamic Liquid Tags Active:</span>
                    <span className="font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      &#123;&#123; user.name &#125;&#125; · &#123;&#123; cart.discount_code &#125;&#125;
                    </span>
                  </div>
                )}

                {/* Canvas Preview Area */}
                <div className="p-5 bg-slate-100 min-h-[300px] flex items-center justify-center">
                  
                  {templateChannel === 'whatsapp' ? (
                    /* WhatsApp Bubble Preview */
                    <div className="bg-[#efeae2] p-3 rounded-xl border border-slate-300 max-w-[340px] w-full shadow-md text-xs">
                      <div className="bg-white rounded-lg shadow-sm border border-slate-200/80 overflow-hidden">
                        
                        {/* Header Media */}
                        {whatsappHeaderType === 'image' && (
                          <div className="h-32 bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white font-bold text-xs p-3 text-center">
                            SPRING COLLECTION 2026<br />
                            <span className="text-[10px] font-normal opacity-90">High-Resolution CDN Banner</span>
                          </div>
                        )}
                        {whatsappHeaderType === 'text' && (
                          <div className="p-2.5 bg-slate-50 font-bold text-slate-900 border-b border-slate-100">
                            SPECIAL ANNOUNCEMENT
                          </div>
                        )}
                        {whatsappHeaderType === 'document' && (
                          <div className="p-2.5 bg-slate-50 border-b border-slate-100 flex items-center gap-2 text-slate-700">
                            <span className="p-1 bg-rose-100 text-rose-700 rounded font-bold text-[10px]">PDF</span>
                            <span className="text-[11px] font-medium">Spring_Lookbook_2026.pdf (2.4 MB)</span>
                          </div>
                        )}

                        {/* Body Text with Variables */}
                        <div className="p-3 space-y-2">
                          <p className="text-slate-800 leading-relaxed text-[11px]">
                            Hi <span className="text-emerald-700 font-semibold bg-emerald-50 px-1 rounded">&#123;&#123;1&#125;&#125;</span>, your private access code <span className="text-emerald-700 font-semibold bg-emerald-50 px-1 rounded">&#123;&#123;2&#125;&#125;</span> gives you 25% off across all new spring arrivals.
                          </p>
                          <p className="text-[10px] text-slate-400">
                            Reply STOP to unsubscribe.
                          </p>
                        </div>

                        {/* Interactive Buttons */}
                        <div className="border-t border-slate-100 divide-y divide-slate-100 text-center font-medium text-emerald-600 text-[11px]">
                          <div className="py-2 hover:bg-slate-50 transition-colors flex items-center justify-center gap-1">
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>View Spring Catalog</span>
                          </div>
                          {quickButtonCount >= 2 && (
                            <div className="py-2 hover:bg-slate-50 transition-colors flex items-center justify-center gap-1">
                              <Zap className="w-3.5 h-3.5" />
                              <span>Apply 25% Coupon</span>
                            </div>
                          )}
                          {quickButtonCount >= 3 && (
                            <div className="py-2 hover:bg-slate-50 transition-colors flex items-center justify-center gap-1 text-slate-600">
                              <span>Chat with Stylist</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Email Preview */
                    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-md max-w-md w-full space-y-3 text-xs">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                        <span className="font-bold text-slate-800">AURA CLOTHING</span>
                        <span className="text-[10px] text-slate-400">Responsive HTML</span>
                      </div>
                      <div className="h-28 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm text-center p-2">
                        SPRING REVELATION<br />
                        <span className="text-[11px] font-normal text-blue-100">Exclusive VIP Preview</span>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-[11px]">
                        Hello &#123;&#123; user.first_name &#125;&#125;, explore our new Italian linen collection with complimentary express delivery.
                      </p>
                      <button className="w-full py-2 bg-blue-600 text-white rounded font-bold text-xs shadow">
                        Shop Exclusive Drop
                      </button>
                    </div>
                  )}
                </div>

                {/* Footer Status */}
                <div className="bg-slate-900 px-4 py-2 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Meta Approval Status: <strong className="text-emerald-400">Pre-Validated (Instant Meta BSP API)</strong></span>
                  <span className="text-white">Dark Mode Compatible</span>
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
            <h2 className="text-xs font-bold text-fuchsia-600 uppercase tracking-wider">Design Excellence</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              One Editor for Both Modern Communication Channels
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-slate-200 hover:border-fuchsia-300 hover:shadow-lg transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-fuchsia-50 text-fuchsia-600 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">Meta Submission &amp; Auto-Approval</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Submit templates directly to WhatsApp for approval with built-in AI linting that catches forbidden words and formatting errors before rejection.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <Globe className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">40+ Email Client Rendering Engine</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clean, inlined CSS and bulletproof table structures ensure your emails render flawlessly in Apple Mail, Outlook, Gmail, and Samsung Mail.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                <Code2 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">Unified Liquid Variable Syntax</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Use the exact same tags for customer names, discounts, order totals, and product lists across both Email and WhatsApp templates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT CONNECTS TO THE REST OF COCOONMAIL */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-fuchsia-200 bg-white rounded-3xl p-8 sm:p-12 shadow-sm">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-fuchsia-600">Unified Architecture</span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 mb-3">
                How Templates connect to the rest of CocoonMail
              </h3>
              <p className="text-sm text-slate-600">
                Templates built here are instantly available to your marketing campaigns, transactional API endpoints, and automated workflows.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <button
                onClick={() => onNavigateModule('email')}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-blue-50/20 transition-all text-left group cursor-pointer"
              >
                <h5 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-blue-600">Email Marketing</h5>
                <p className="text-xs text-slate-500">Select pre-designed templates in 1 click for weekly newsletters and product drops.</p>
              </button>

              <button
                onClick={() => onNavigateModule('transactional-email')}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-400 hover:bg-sky-50/20 transition-all text-left group cursor-pointer"
              >
                <h5 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-sky-600">Transactional API</h5>
                <p className="text-xs text-slate-500">Reference template IDs directly in API calls like `template_id: &quot;tpl_auth_otp&quot;`.</p>
              </button>

              <button
                onClick={() => onNavigateModule('whatsapp')}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/20 transition-all text-left group cursor-pointer"
              >
                <h5 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-emerald-600">WhatsApp Broadcasts</h5>
                <p className="text-xs text-slate-500">Deploy verified interactive templates with real-time Meta approval status.</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-16 bg-fuchsia-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Start designing beautiful dual-channel templates today.
          </h2>
          <p className="text-fuchsia-100 max-w-xl mx-auto text-sm">
            Access 100+ responsive email templates and Meta-approved WhatsApp layouts.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenStartFree}
              className="px-8 py-3.5 rounded-xl bg-white text-fuchsia-800 hover:bg-fuchsia-50 font-bold shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              Start Free Template Trial
            </button>
            <button
              onClick={onOpenBookDemo}
              className="px-7 py-3.5 rounded-xl bg-fuchsia-700 hover:bg-fuchsia-800 text-white font-semibold border border-fuchsia-500/50 transition-colors cursor-pointer"
            >
              Request Custom Brand Design
            </button>
          </div>
          <p className="text-xs text-fuchsia-200 font-medium">
            Zero design software needed · Drag-and-drop visual builder
          </p>
        </div>
      </section>

    </div>
  );
};
