import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  MessageSquare, 
  Bot, 
  Workflow, 
  Layers, 
  ShoppingBag, 
  CreditCard, 
  BarChart3, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Code2, 
  Webhook, 
  BookOpen, 
  Sparkles,
  Store,
  Laptop,
  Briefcase,
  HeartPulse,
  GraduationCap,
  Home,
  Sliders,
  FileText,
  Users
} from 'lucide-react';
import { ModalType } from '../../types';
import { useRouter } from '../../router/RouterContext';

interface NavbarProps {
  onOpenModal: (type: ModalType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const { currentPath, navigate } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3' 
          : 'bg-white/70 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Wordmark (Single Text Element per Top Bar Contract) */}
          <div className="flex items-center gap-8">
            <a 
              href="/" 
              onClick={(e) => handleLinkClick(e, '/')}
              aria-label="Cocoonmail Home"
              className="flex items-center focus:outline-none"
            >
              <img 
                src="https://cdn.cocoonmail.com/assets/logo-2.svg" 
                alt="Cocoonmail" 
                className="h-8 w-auto" 
              />
            </a>

            {/* Desktop Navigation Links with Separate Slugs */}
            <nav className="hidden lg:flex items-center gap-1">
              
              {/* Platform Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('platform')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    currentPath.startsWith('/platform') || activeDropdown === 'platform' 
                      ? 'text-blue-600 bg-blue-50/60' 
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <span>Platform</span>
                  <ChevronDown className="w-3.5 h-3.5 transition-transform" />
                </button>

                {activeDropdown === 'platform' && (
                  <div className="absolute top-full left-0 w-[720px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 grid grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="col-span-2 space-y-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                          Core Capabilities & Channels
                        </span>
                        <a 
                          href="/platform" 
                          onClick={(e) => handleLinkClick(e, '/platform')}
                          className="text-[11px] font-bold text-blue-600 hover:underline"
                        >
                          View All Modules →
                        </a>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <a
                          href="/platform/email"
                          onClick={(e) => handleLinkClick(e, '/platform/email')}
                          className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors text-left group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <Mail className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Email Marketing</div>
                            <div className="text-[11px] text-slate-500 leading-tight">Visual builder & newsletters</div>
                          </div>
                        </a>

                        <a
                          href="/platform/whatsapp"
                          onClick={(e) => handleLinkClick(e, '/platform/whatsapp')}
                          className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors text-left group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <MessageSquare className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors">WhatsApp API</div>
                            <div className="text-[11px] text-slate-500 leading-tight">Verified Cloud API & broadcasts</div>
                          </div>
                        </a>

                        <a
                          href="/platform/ai-agents"
                          onClick={(e) => handleLinkClick(e, '/platform/ai-agents')}
                          className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors text-left group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <Bot className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-slate-900 group-hover:text-violet-600 transition-colors">AI Agents</div>
                            <div className="text-[11px] text-slate-500 leading-tight">Automate customer conversations</div>
                          </div>
                        </a>

                        <a
                          href="/platform/automation"
                          onClick={(e) => handleLinkClick(e, '/platform/automation')}
                          className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors text-left group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <Workflow className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-slate-900 group-hover:text-amber-600 transition-colors">Automation</div>
                            <div className="text-[11px] text-slate-500 leading-tight">Multi-step customer journeys</div>
                          </div>
                        </a>

                        <a
                          href="/platform/ads"
                          onClick={(e) => handleLinkClick(e, '/platform/ads')}
                          className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors text-left group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <Layers className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">Meta Ads</div>
                            <div className="text-[11px] text-slate-500 leading-tight">Click-to-WhatsApp funnels</div>
                          </div>
                        </a>

                        <a
                          href="/platform/catalog"
                          onClick={(e) => handleLinkClick(e, '/platform/catalog')}
                          className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors text-left group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <ShoppingBag className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-slate-900 group-hover:text-rose-600 transition-colors">Catalog & Payments</div>
                            <div className="text-[11px] text-slate-500 leading-tight">Sell in-chat with instant checkout</div>
                          </div>
                        </a>

                        <a
                          href="/platform/segmentation"
                          onClick={(e) => handleLinkClick(e, '/platform/segmentation')}
                          className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors text-left group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <Users className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-slate-900 group-hover:text-teal-600 transition-colors">Segmentation</div>
                            <div className="text-[11px] text-slate-500 leading-tight">Live behavioral customer filters</div>
                          </div>
                        </a>

                        <a
                          href="/platform/templates"
                          onClick={(e) => handleLinkClick(e, '/platform/templates')}
                          className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors text-left group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <Sliders className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Templates & Sandbox</div>
                            <div className="text-[11px] text-slate-500 leading-tight">Interactive template playground</div>
                          </div>
                        </a>
                      </div>
                    </div>

                    {/* Featured Item */}
                    <div className="bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-transparent p-4 rounded-xl border border-blue-100 flex flex-col justify-between">
                      <div>
                        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-600 text-white mb-2">
                          <Sparkles className="w-3 h-3" />
                          <span>Connected Flow</span>
                        </div>
                        <h4 className="text-xs font-bold text-slate-900 mb-1">
                          Campaign to Conversion
                        </h4>
                        <p className="text-[11px] text-slate-600 leading-relaxed">
                          See how dynamic audience segments flow directly into Email, WhatsApp, AI catalog recommendations, and instant payment loops.
                        </p>
                      </div>
                      <a
                        href="/#interactive-journey"
                        onClick={(e) => handleLinkClick(e, '/#interactive-journey')}
                        className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 group"
                      >
                        <span>Interactive 8-Step Journey</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('solutions')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    currentPath.startsWith('/solutions') || activeDropdown === 'solutions' 
                      ? 'text-blue-600 bg-blue-50/60' 
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <span>Solutions</span>
                  <ChevronDown className="w-3.5 h-3.5 transition-transform" />
                </button>

                {activeDropdown === 'solutions' && (
                  <div className="absolute top-full left-0 w-[440px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-150">
                    <a href="/solutions/ecommerce" onClick={(e) => handleLinkClick(e, '/solutions/ecommerce')} className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 text-left">
                      <Store className="w-4 h-4 text-blue-600" />
                      <span className="text-xs font-medium text-slate-800">E-commerce & D2C</span>
                    </a>
                    <a href="/solutions/saas" onClick={(e) => handleLinkClick(e, '/solutions/saas')} className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 text-left">
                      <Laptop className="w-4 h-4 text-indigo-600" />
                      <span className="text-xs font-medium text-slate-800">SaaS & Startups</span>
                    </a>
                    <a href="/solutions/agencies" onClick={(e) => handleLinkClick(e, '/solutions/agencies')} className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 text-left">
                      <Briefcase className="w-4 h-4 text-emerald-600" />
                      <span className="text-xs font-medium text-slate-800">Agencies</span>
                    </a>
                    <a href="/solutions/healthcare" onClick={(e) => handleLinkClick(e, '/solutions/healthcare')} className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 text-left">
                      <HeartPulse className="w-4 h-4 text-rose-600" />
                      <span className="text-xs font-medium text-slate-800">Healthcare</span>
                    </a>
                    <a href="/solutions/education" onClick={(e) => handleLinkClick(e, '/solutions/education')} className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 text-left">
                      <GraduationCap className="w-4 h-4 text-amber-600" />
                      <span className="text-xs font-medium text-slate-800">Education</span>
                    </a>
                    <a href="/solutions/real-estate" onClick={(e) => handleLinkClick(e, '/solutions/real-estate')} className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 text-left">
                      <Home className="w-4 h-4 text-teal-600" />
                      <span className="text-xs font-medium text-slate-800">Real Estate</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Developers Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('developers')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    currentPath.startsWith('/developers') || activeDropdown === 'developers' 
                      ? 'text-blue-600 bg-blue-50/60' 
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <span>Developers</span>
                  <ChevronDown className="w-3.5 h-3.5 transition-transform" />
                </button>

                {activeDropdown === 'developers' && (
                  <div className="absolute top-full left-0 w-[360px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-150">
                    <a href="/developers/api" onClick={(e) => handleLinkClick(e, '/developers/api')} className="w-full flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 text-left">
                      <Code2 className="w-4 h-4 text-blue-600 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-slate-900">REST API Reference</div>
                        <div className="text-[11px] text-slate-500">Send emails, trigger WhatsApp messages & queries</div>
                      </div>
                    </a>
                    <a href="/developers/webhooks" onClick={(e) => handleLinkClick(e, '/developers/webhooks')} className="w-full flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 text-left">
                      <Webhook className="w-4 h-4 text-indigo-600 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-slate-900">Webhooks & Realtime Events</div>
                        <div className="text-[11px] text-slate-500">Sub-second delivery, open, and payment event hooks</div>
                      </div>
                    </a>
                    <a href="/developers/integrations" onClick={(e) => handleLinkClick(e, '/developers/integrations')} className="w-full flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 text-left">
                      <Layers className="w-4 h-4 text-teal-600 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-slate-900">Ecosystem Integrations</div>
                        <div className="text-[11px] text-slate-500">Meta, Shopify, Razorpay & Stripe connections</div>
                      </div>
                    </a>
                    <a 
                      href="https://kb.cocoonmail.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-full flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 text-left"
                    >
                      <BookOpen className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-slate-900 flex items-center gap-1">
                          <span>Documentation Portal</span>
                          <span className="text-[9px] px-1 bg-slate-100 text-slate-500 rounded">External</span>
                        </div>
                        <div className="text-[11px] text-slate-500">Guides, SDKs and integration tutorials</div>
                      </div>
                    </a>
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('resources')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    currentPath.startsWith('/resources') || activeDropdown === 'resources' 
                      ? 'text-blue-600 bg-blue-50/60' 
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <span>Resources</span>
                  <ChevronDown className="w-3.5 h-3.5 transition-transform" />
                </button>

                {activeDropdown === 'resources' && (
                  <div className="absolute top-full left-0 w-[320px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-150">
                    <a href="/resources/guides" onClick={(e) => handleLinkClick(e, '/resources/guides')} className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50">
                      <FileText className="w-4 h-4 text-blue-600" />
                      <div>
                        <div className="text-xs font-semibold text-slate-800">Growth Guides</div>
                        <div className="text-[10px] text-slate-400">Playbooks on deliverability & WhatsApp</div>
                      </div>
                    </a>
                    <a href="/resources/templates" onClick={(e) => handleLinkClick(e, '/resources/templates')} className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50">
                      <Sliders className="w-4 h-4 text-emerald-600" />
                      <div>
                        <div className="text-xs font-semibold text-slate-800">Template Sandbox</div>
                        <div className="text-[10px] text-slate-400">Interactive builder & pre-approved chips</div>
                      </div>
                    </a>
                    <a href="/resources/case-studies" onClick={(e) => handleLinkClick(e, '/resources/case-studies')} className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50">
                      <BarChart3 className="w-4 h-4 text-violet-600" />
                      <div>
                        <div className="text-xs font-semibold text-slate-800">Case Studies</div>
                        <div className="text-[10px] text-slate-400">Verified customer ROI metrics</div>
                      </div>
                    </a>
                  </div>
                )}
              </div>

              {/* Direct Pricing Link */}
              <a 
                href="/pricing"
                onClick={(e) => handleLinkClick(e, '/pricing')}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  currentPath === '/pricing' ? 'text-blue-600 bg-blue-50/60 font-semibold' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Pricing
              </a>
            </nav>
          </div>

          {/* Right Action Zone */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://app.cocoonmail.com/login"
              className="text-xs font-semibold text-slate-700 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Sign In
            </a>

            <button
              onClick={() => onOpenModal('book-demo')}
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-2 transition-colors"
            >
              Book a Demo
            </button>

            <button
              onClick={() => onOpenModal('start-free')}
              className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 rounded-xl shadow-md shadow-blue-500/20 hover:shadow-lg transition-all transform active:scale-95 whitespace-nowrap"
            >
              Start Free
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="https://app.cocoonmail.com/login"
              className="text-xs font-semibold text-slate-700 hover:text-blue-600 px-2 py-1"
            >
              Sign In
            </a>
            <button
              onClick={() => onOpenModal('start-free')}
              className="px-3 py-1.5 text-xs font-bold text-white bg-blue-600 rounded-lg shadow-sm"
            >
              Start Free
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer with all canonical slugs */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="space-y-1">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1">Platform Modules</div>
            <a href="/platform/email" onClick={(e) => handleLinkClick(e, '/platform/email')} className="w-full text-left px-3 py-2 text-sm font-medium text-slate-800 rounded-lg hover:bg-slate-50 flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-600" />
              <span>Email Marketing</span>
            </a>
            <a href="/platform/whatsapp" onClick={(e) => handleLinkClick(e, '/platform/whatsapp')} className="w-full text-left px-3 py-2 text-sm font-medium text-slate-800 rounded-lg hover:bg-slate-50 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Business API</span>
            </a>
            <a href="/platform/ai-agents" onClick={(e) => handleLinkClick(e, '/platform/ai-agents')} className="w-full text-left px-3 py-2 text-sm font-medium text-slate-800 rounded-lg hover:bg-slate-50 flex items-center gap-2">
              <Bot className="w-4 h-4 text-violet-600" />
              <span>AI Agents</span>
            </a>
            <a href="/platform/automation" onClick={(e) => handleLinkClick(e, '/platform/automation')} className="w-full text-left px-3 py-2 text-sm font-medium text-slate-800 rounded-lg hover:bg-slate-50 flex items-center gap-2">
              <Workflow className="w-4 h-4 text-amber-600" />
              <span>Automation Canvas</span>
            </a>
            <a href="/platform/catalog" onClick={(e) => handleLinkClick(e, '/platform/catalog')} className="w-full text-left px-3 py-2 text-sm font-medium text-slate-800 rounded-lg hover:bg-slate-50 flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-rose-600" />
              <span>Catalog & Payments</span>
            </a>
            <a href="/platform/ads" onClick={(e) => handleLinkClick(e, '/platform/ads')} className="w-full text-left px-3 py-2 text-sm font-medium text-slate-800 rounded-lg hover:bg-slate-50 flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-600" />
              <span>Meta Ads to WhatsApp</span>
            </a>
          </div>

          <div className="pt-2 border-t border-slate-100 space-y-1">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1">Solutions</div>
            <a href="/solutions/ecommerce" onClick={(e) => handleLinkClick(e, '/solutions/ecommerce')} className="block px-3 py-1.5 text-xs text-slate-700">E-commerce & D2C</a>
            <a href="/solutions/saas" onClick={(e) => handleLinkClick(e, '/solutions/saas')} className="block px-3 py-1.5 text-xs text-slate-700">SaaS & Startups</a>
            <a href="/solutions/agencies" onClick={(e) => handleLinkClick(e, '/solutions/agencies')} className="block px-3 py-1.5 text-xs text-slate-700">Agencies</a>
            <a href="/solutions/healthcare" onClick={(e) => handleLinkClick(e, '/solutions/healthcare')} className="block px-3 py-1.5 text-xs text-slate-700">Healthcare</a>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a href="/pricing" onClick={(e) => handleLinkClick(e, '/pricing')} className="px-3 py-2 text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-50">
              Pricing & ROI Calculator
            </a>
            <a href="/developers/api" onClick={(e) => handleLinkClick(e, '/developers/api')} className="px-3 py-2 text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-50">
              Developer API & Webhooks
            </a>
            <a href="/company/about" onClick={(e) => handleLinkClick(e, '/company/about')} className="px-3 py-2 text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-50">
              About Cocoonmail
            </a>
            <a href="/company/contact" onClick={(e) => handleLinkClick(e, '/company/contact')} className="px-3 py-2 text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-50">
              Contact Sales
            </a>
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenModal('book-demo'); }}
                className="w-full py-2.5 px-3 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl text-center"
              >
                Book a Demo
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenModal('start-free'); }}
                className="w-full py-2.5 px-3 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl text-center"
              >
                Start Free
              </button>
            </div>
            <a
              href="https://app.cocoonmail.com/login"
              className="block w-full py-2 px-3 text-xs font-semibold text-slate-600 text-center hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
            >
              Already have an account? Sign In →
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
