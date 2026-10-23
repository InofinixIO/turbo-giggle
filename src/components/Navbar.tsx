import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  MessageSquare, 
  Bot, 
  GitFork, 
  Users, 
  ShoppingBag, 
  CreditCard, 
  BarChart3, 
  Code, 
  Webhook, 
  Puzzle, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight,
  Sparkles,
  ShoppingBag as CartIcon,
  Server,
  Building,
  HeartPulse,
  GraduationCap,
  Home as HomeIcon,
  BookOpen,
  FileText,
  HelpCircle,
  FolderGit2,
  Megaphone,
  CheckCircle2,
  Zap,
  LogIn,
  FileCode2,
  Terminal
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PlatformPageId } from './PlatformNavSwitcher';

interface NavbarProps {
  onOpenStartFree: () => void;
  onOpenBookDemo: () => void;
  onOpenLogin: () => void;
  onNavigateSection: (sectionId: string) => void;
  onSelectSolution: (solutionId: string) => void;
  onSelectPlatformPage?: (pageId: PlatformPageId) => void;
  onBackToHome?: () => void;
  currentPage?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenStartFree,
  onOpenBookDemo,
  onOpenLogin,
  onNavigateSection,
  onSelectSolution,
  onSelectPlatformPage,
  onBackToHome,
  currentPage
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'platform' | 'solutions' | 'developers' | 'resources' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const handleNavClick = (sectionId: string) => {
    closeDropdowns();
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        onNavigateSection(sectionId);
      }, 100);
    } else {
      onNavigateSection(sectionId);
    }
  };

  const handlePlatformClick = (pageId: PlatformPageId) => {
    closeDropdowns();
    setMobileMenuOpen(false);
    if (onSelectPlatformPage) {
      onSelectPlatformPage(pageId);
    } else {
      navigate(`/platform/${pageId}`);
    }
  };

  const handleLogoClick = () => {
    closeDropdowns();
    setMobileMenuOpen(false);
    if (onBackToHome) {
      onBackToHome();
    } else {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSolutionClick = (solutionId: string) => {
    closeDropdowns();
    setMobileMenuOpen(false);
    navigate(`/solutions/${solutionId}`);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3' 
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 shrink-0">
            <button 
              onClick={handleLogoClick} 
              className="flex items-center gap-2.5 focus-visible:outline-indigo-500 rounded-lg group text-left cursor-pointer"
              aria-label="CocoonMail Home"
            >
              <img 
                src="https://cocoonmail.com/images/logo/logo-2.svg" 
                alt="CocoonMail" 
                className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                  const fallback = document.getElementById('logo-fallback-text');
                  if (fallback) fallback.style.display = 'inline-flex';
                }}
              />
              <span id="logo-fallback-text" className="hidden items-center gap-1.5 font-bold text-xl tracking-tight text-slate-900">
                <span className="w-6 h-6 rounded-md bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center text-xs font-black">C</span>
                CocoonMail
              </span>
            </button>
          </div>

          {/* Desktop Navigation Links with Mega-Menus */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-slate-700">
            
            {/* 1. Platform Mega-Menu */}
            <div className="relative" onMouseLeave={closeDropdowns}>
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'platform' ? null : 'platform')}
                onMouseEnter={() => setActiveDropdown('platform')}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                  activeDropdown === 'platform' ? 'text-indigo-600 bg-slate-50' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span>Platform</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'platform' ? 'rotate-180 text-indigo-600' : 'text-slate-400'}`} />
              </button>

              {activeDropdown === 'platform' && (
                <div 
                  className="absolute top-full left-0 w-[780px] bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-5 grid grid-cols-12 gap-5 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseEnter={() => setActiveDropdown('platform')}
                  onMouseLeave={closeDropdowns}
                >
                  <div className="col-span-8 grid grid-cols-2 gap-2.5 max-h-[420px] overflow-y-auto pr-1">
                    
                    <button 
                      onClick={() => handlePlatformClick('email')}
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors text-left group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Mail className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-900 group-hover:text-blue-600">Email Marketing</p>
                        <p className="text-[11px] text-slate-500 leading-snug">Visual builder, dynamic tags &amp; journeys</p>
                      </div>
                    </button>

                    <button 
                      onClick={() => handlePlatformClick('transactional-email')}
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors text-left group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Server className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-900 group-hover:text-sky-600">Transactional Email</p>
                        <p className="text-[11px] text-slate-500 leading-snug">REST API &amp; SMTP sub-second delivery</p>
                      </div>
                    </button>

                    <button 
                      onClick={() => handlePlatformClick('whatsapp')}
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors text-left group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <MessageSquare className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-900 group-hover:text-emerald-600">WhatsApp</p>
                        <p className="text-[11px] text-slate-500 leading-snug">Cloud API, team inbox &amp; broadcasts</p>
                      </div>
                    </button>

                    <button 
                      onClick={() => handlePlatformClick('ai-agents')}
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors text-left group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Bot className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-900 group-hover:text-violet-600">AI Agents</p>
                        <p className="text-[11px] text-slate-500 leading-snug">Autonomous conversational commerce</p>
                      </div>
                    </button>

                    <button 
                      onClick={() => handlePlatformClick('automation')}
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors text-left group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <GitFork className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-900 group-hover:text-indigo-600">Automation</p>
                        <p className="text-[11px] text-slate-500 leading-snug">Visual multi-channel journey canvas</p>
                      </div>
                    </button>

                    <button 
                      onClick={() => handlePlatformClick('segmentation')}
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors text-left group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Users className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-900 group-hover:text-cyan-600">Segmentation</p>
                        <p className="text-[11px] text-slate-500 leading-snug">Real-time dynamic audience builder</p>
                      </div>
                    </button>

                    <button 
                      onClick={() => handlePlatformClick('templates')}
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors text-left group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-fuchsia-50 text-fuchsia-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <FileCode2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-900 group-hover:text-fuchsia-600">Templates</p>
                        <p className="text-[11px] text-slate-500 leading-snug">Dual email &amp; WhatsApp editor</p>
                      </div>
                    </button>

                    <button 
                      onClick={() => handlePlatformClick('ads')}
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors text-left group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Megaphone className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-900 group-hover:text-rose-600">Ads</p>
                        <p className="text-[11px] text-slate-500 leading-snug">Click-to-WhatsApp &amp; status ads</p>
                      </div>
                    </button>

                    <button 
                      onClick={() => handlePlatformClick('catalog')}
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors text-left group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <ShoppingBag className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-900 group-hover:text-amber-600">Catalog</p>
                        <p className="text-[11px] text-slate-500 leading-snug">In-conversation native commerce</p>
                      </div>
                    </button>

                    <button 
                      onClick={() => handlePlatformClick('payments')}
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors text-left group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <CreditCard className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-900 group-hover:text-teal-600">Payments</p>
                        <p className="text-[11px] text-slate-500 leading-snug">In-chat UPI, cards &amp; receipts</p>
                      </div>
                    </button>

                    <button 
                      onClick={() => handlePlatformClick('analytics')}
                      className="col-span-2 flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors text-left group cursor-pointer border-t border-slate-100"
                    >
                      <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <BarChart3 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-900 group-hover:text-blue-700">Analytics</p>
                        <p className="text-[11px] text-slate-500 leading-snug">Cross-channel conversion funnel &amp; revenue telemetry</p>
                      </div>
                    </button>

                  </div>

                  {/* Featured Item in Platform Dropdown */}
                  <div className="col-span-4 bg-gradient-to-br from-indigo-50/80 via-purple-50/60 to-pink-50/40 rounded-xl p-4 border border-indigo-100 flex flex-col justify-between">
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider mb-2">
                        <Sparkles className="w-3 h-3" /> Featured
                      </span>
                      <h4 className="font-bold text-sm text-slate-900">Campaign to Conversion</h4>
                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                        See how Meta Ads, WhatsApp, AI Agents and in-chat checkout work together in one continuous loop.
                      </p>
                    </div>
                    <button
                      onClick={() => handleNavClick('journey')}
                      className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-indigo-700 hover:text-indigo-900 cursor-pointer"
                    >
                      <span>Interactive Walkthrough</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Solutions Dropdown */}
            <div className="relative" onMouseLeave={closeDropdowns}>
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')}
                onMouseEnter={() => setActiveDropdown('solutions')}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                  activeDropdown === 'solutions' ? 'text-indigo-600 bg-slate-50' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180 text-indigo-600' : 'text-slate-400'}`} />
              </button>

              {activeDropdown === 'solutions' && (
                <div 
                  className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseEnter={() => setActiveDropdown('solutions')}
                  onMouseLeave={closeDropdowns}
                >
                  <button 
                    onClick={() => handleSolutionClick('ecommerce')}
                    className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors text-left cursor-pointer"
                  >
                    <CartIcon className="w-4 h-4 text-emerald-600" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">E-commerce</p>
                      <p className="text-xs text-slate-500">Cart recovery, catalog &amp; in-chat UPI</p>
                    </div>
                  </button>

                  <button 
                    onClick={() => handleSolutionClick('saas')}
                    className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors text-left cursor-pointer"
                  >
                    <Server className="w-4 h-4 text-blue-600" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">SaaS</p>
                      <p className="text-xs text-slate-500">User onboarding &amp; lifecycle alerts</p>
                    </div>
                  </button>

                  <button 
                    onClick={() => handleSolutionClick('agencies')}
                    className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors text-left cursor-pointer"
                  >
                    <Building className="w-4 h-4 text-indigo-600" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Agencies</p>
                      <p className="text-xs text-slate-500">Multi-client workspaces &amp; white-label</p>
                    </div>
                  </button>

                  <button 
                    onClick={() => handleSolutionClick('healthcare')}
                    className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors text-left cursor-pointer"
                  >
                    <HeartPulse className="w-4 h-4 text-rose-600" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Healthcare</p>
                      <p className="text-xs text-slate-500">HIPAA alerts &amp; appointment scheduling</p>
                    </div>
                  </button>

                  <button 
                    onClick={() => handleSolutionClick('education')}
                    className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors text-left cursor-pointer"
                  >
                    <GraduationCap className="w-4 h-4 text-amber-600" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Education</p>
                      <p className="text-xs text-slate-500">Student counseling &amp; automated fee links</p>
                    </div>
                  </button>

                  <button 
                    onClick={() => handleSolutionClick('real-estate')}
                    className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors text-left cursor-pointer"
                  >
                    <HomeIcon className="w-4 h-4 text-purple-600" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Real Estate</p>
                      <p className="text-xs text-slate-500">Instant qualification &amp; site visit booking</p>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* 3. Developers Dropdown */}
            <div className="relative" onMouseLeave={closeDropdowns}>
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'developers' ? null : 'developers')}
                onMouseEnter={() => setActiveDropdown('developers')}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                  activeDropdown === 'developers' ? 'text-indigo-600 bg-slate-50' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span>Developers</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'developers' ? 'rotate-180 text-indigo-600' : 'text-slate-400'}`} />
              </button>

              {activeDropdown === 'developers' && (
                <div 
                  className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseEnter={() => setActiveDropdown('developers')}
                  onMouseLeave={closeDropdowns}
                >
                  <button 
                    onClick={() => {
                      closeDropdowns();
                      navigate('/developers');
                    }}
                    className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors text-left cursor-pointer"
                  >
                    <Terminal className="w-4 h-4 text-slate-700" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Developer Overview</p>
                      <p className="text-xs text-slate-500">Architecture, SDKs &amp; dark UI sandbox</p>
                    </div>
                  </button>

                  <button 
                    onClick={() => {
                      closeDropdowns();
                      navigate('/developers/api');
                    }}
                    className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors text-left cursor-pointer"
                  >
                    <Code className="w-4 h-4 text-indigo-600" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">REST API &amp; SDKs</p>
                      <p className="text-xs text-slate-500">Node.js, Python &amp; cURL endpoints</p>
                    </div>
                  </button>

                  <button 
                    onClick={() => {
                      closeDropdowns();
                      navigate('/developers/webhooks');
                    }}
                    className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors text-left cursor-pointer"
                  >
                    <Webhook className="w-4 h-4 text-emerald-600" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Webhooks</p>
                      <p className="text-xs text-slate-500">Real-time delivery &amp; payment events</p>
                    </div>
                  </button>

                  <button 
                    onClick={() => {
                      closeDropdowns();
                      navigate('/developers/integrations');
                    }}
                    className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors text-left cursor-pointer"
                  >
                    <Puzzle className="w-4 h-4 text-cyan-600" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Integrations</p>
                      <p className="text-xs text-slate-500">Meta CAPI, Shopify, Razorpay &amp; CRMs</p>
                    </div>
                  </button>

                  <a 
                    href="https://kb.cocoonmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors text-left"
                  >
                    <BookOpen className="w-4 h-4 text-amber-600" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Documentation ↗</p>
                      <p className="text-xs text-slate-500">Official docs at kb.cocoonmail.com</p>
                    </div>
                  </a>
                </div>
              )}
            </div>

            {/* 4. Resources Dropdown */}
            <div className="relative" onMouseLeave={closeDropdowns}>
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')}
                onMouseEnter={() => setActiveDropdown('resources')}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                  activeDropdown === 'resources' ? 'text-indigo-600 bg-slate-50' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span>Resources</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180 text-indigo-600' : 'text-slate-400'}`} />
              </button>

              {activeDropdown === 'resources' && (
                <div 
                  className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseEnter={() => setActiveDropdown('resources')}
                  onMouseLeave={closeDropdowns}
                >
                  <button 
                    onClick={() => {
                      closeDropdowns();
                      navigate('/resources/case-studies');
                    }}
                    className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors text-left cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-blue-600" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Case Studies</p>
                      <p className="text-xs text-slate-500">Real customer benchmarks &amp; ROAS proof</p>
                    </div>
                  </button>

                  <button 
                    onClick={() => {
                      closeDropdowns();
                      navigate('/resources/templates');
                    }}
                    className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors text-left cursor-pointer"
                  >
                    <FolderGit2 className="w-4 h-4 text-purple-600" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Template Library</p>
                      <p className="text-xs text-slate-500">50+ email &amp; WhatsApp presets</p>
                    </div>
                  </button>

                  <button 
                    onClick={() => {
                      closeDropdowns();
                      navigate('/resources/guides');
                    }}
                    className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors text-left cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-emerald-600" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Tactical Playbooks</p>
                      <p className="text-xs text-slate-500">WABA onboarding &amp; DMARC guides</p>
                    </div>
                  </button>

                  <button 
                    onClick={() => {
                      closeDropdowns();
                      navigate('/resources/blog');
                    }}
                    className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors text-left cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Engineering Blog</p>
                      <p className="text-xs text-slate-500">Deep dives into deliverability &amp; Meta CAPI</p>
                    </div>
                  </button>

                  <button 
                    onClick={() => {
                      closeDropdowns();
                      navigate('/resources/help-center');
                    }}
                    className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors text-left cursor-pointer"
                  >
                    <HelpCircle className="w-4 h-4 text-teal-600" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Help Center &amp; FAQs</p>
                      <p className="text-xs text-slate-500">Knowledge base &amp; answers</p>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Pricing Link */}
            <button
              onClick={() => {
                closeDropdowns();
                navigate('/pricing');
              }}
              className="px-3 py-2 rounded-lg hover:text-slate-900 hover:bg-slate-50 transition-colors whitespace-nowrap cursor-pointer"
            >
              Pricing
            </button>
          </nav>

          {/* Right Side Actions: Login & Start Free */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenLogin}
              className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
            >
              <LogIn className="w-4 h-4 text-slate-500" />
              <span>Login</span>
            </button>

            <button
              onClick={onOpenBookDemo}
              className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            >
              Book a Demo
            </button>

            <button
              onClick={onOpenStartFree}
              className="relative group px-4 py-2 text-sm font-semibold text-white rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all active:scale-[0.98] whitespace-nowrap cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 transition-all group-hover:opacity-90" />
              <span className="relative flex items-center gap-1.5">
                Start Free
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenStartFree}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 rounded-lg whitespace-nowrap"
            >
              Start Free
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg focus-visible:outline-indigo-500 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1 max-h-[300px] overflow-y-auto">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 py-1">Platform Modules</p>
            <button onClick={() => handlePlatformClick('email')} className="w-full text-left px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50 rounded-lg flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-blue-600" /> Email Marketing
            </button>
            <button onClick={() => handlePlatformClick('transactional-email')} className="w-full text-left px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50 rounded-lg flex items-center gap-2">
              <Server className="w-3.5 h-3.5 text-sky-600" /> Transactional Email
            </button>
            <button onClick={() => handlePlatformClick('whatsapp')} className="w-full text-left px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50 rounded-lg flex items-center gap-2">
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" /> WhatsApp Business
            </button>
            <button onClick={() => handlePlatformClick('ai-agents')} className="w-full text-left px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50 rounded-lg flex items-center gap-2">
              <Bot className="w-3.5 h-3.5 text-violet-600" /> AI Agents
            </button>
            <button onClick={() => handlePlatformClick('automation')} className="w-full text-left px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50 rounded-lg flex items-center gap-2">
              <GitFork className="w-3.5 h-3.5 text-indigo-600" /> Automation Journeys
            </button>
            <button onClick={() => handlePlatformClick('segmentation')} className="w-full text-left px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50 rounded-lg flex items-center gap-2">
              <Users className="w-3.5 h-3.5 text-cyan-600" /> Segmentation
            </button>
            <button onClick={() => handlePlatformClick('templates')} className="w-full text-left px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50 rounded-lg flex items-center gap-2">
              <FileCode2 className="w-3.5 h-3.5 text-fuchsia-600" /> Templates
            </button>
            <button onClick={() => handlePlatformClick('ads')} className="w-full text-left px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50 rounded-lg flex items-center gap-2">
              <Megaphone className="w-3.5 h-3.5 text-rose-600" /> Meta Ads
            </button>
            <button onClick={() => handlePlatformClick('catalog')} className="w-full text-left px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50 rounded-lg flex items-center gap-2">
              <ShoppingBag className="w-3.5 h-3.5 text-amber-600" /> Catalog
            </button>
            <button onClick={() => handlePlatformClick('payments')} className="w-full text-left px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50 rounded-lg flex items-center gap-2">
              <CreditCard className="w-3.5 h-3.5 text-teal-600" /> Payments
            </button>
            <button onClick={() => handlePlatformClick('analytics')} className="w-full text-left px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50 rounded-lg flex items-center gap-2">
              <BarChart3 className="w-3.5 h-3.5 text-blue-700" /> Analytics
            </button>
          </div>

          <div className="border-t border-slate-100 pt-3 space-y-1">
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                navigate('/pricing');
              }} 
              className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-800 hover:text-indigo-600 cursor-pointer"
            >
              Pricing Plans
            </button>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                navigate('/developers');
              }} 
              className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-800 hover:text-indigo-600 cursor-pointer"
            >
              Developers &amp; API
            </button>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                navigate('/solutions/ecommerce');
              }} 
              className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-800 hover:text-indigo-600 cursor-pointer"
            >
              Industry Solutions
            </button>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                navigate('/resources/templates');
              }} 
              className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-800 hover:text-indigo-600 cursor-pointer"
            >
              Template Library
            </button>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                navigate('/about');
              }} 
              className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-800 hover:text-indigo-600 cursor-pointer"
            >
              About CocoonMail
            </button>
          </div>

          <div className="border-t border-slate-100 pt-3 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
              className="w-full py-2.5 text-sm font-medium text-slate-700 bg-slate-50 rounded-xl flex items-center justify-center gap-2"
            >
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenStartFree();
              }}
              className="w-full py-2.5 text-sm font-semibold text-white bg-indigo-600 rounded-xl"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
