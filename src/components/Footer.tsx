import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Heart, Twitter, Linkedin, Github, Youtube, MessageSquare } from 'lucide-react';
import { PlatformPageId } from './PlatformNavSwitcher';

interface FooterProps {
  onOpenStartFree: () => void;
  onOpenBookDemo: () => void;
  onNavigateSection: (sectionId: string) => void;
  onSelectSolution: (solutionId: string) => void;
  onSelectPlatformPage?: (pageId: PlatformPageId) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenStartFree,
  onOpenBookDemo,
  onNavigateSection,
  onSelectSolution,
  onSelectPlatformPage
}) => {
  const navigate = useNavigate();

  const handlePlatformClick = (moduleId: PlatformPageId) => {
    if (onSelectPlatformPage) {
      onSelectPlatformPage(moduleId);
    } else {
      navigate(`/platform/${moduleId}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900 relative overflow-hidden">
      
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Brand Header & Final CTA */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-slate-800/80">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2.5">
              <img 
                src="https://cocoonmail.com/images/logo/logo-2.svg" 
                alt="CocoonMail" 
                className="h-8 w-auto brightness-200"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                  const fallback = document.getElementById('footer-logo-fallback');
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div id="footer-logo-fallback" className="hidden items-center gap-1.5 font-bold text-xl text-white">
                <span className="w-6 h-6 rounded-md bg-indigo-600 text-white flex items-center justify-center text-xs">C</span>
                CocoonMail
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              CocoonMail is the global customer engagement and commerce operating platform. Unifying Meta Ads, WhatsApp Business API, high-throughput Email, AI shopping agents, catalog sync, and in-chat payments in one connected system.
            </p>
          </div>

          {/* Final CTA Button: Start Free */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBookDemo}
              className="px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-xl transition-colors cursor-pointer"
            >
              Book a Demo
            </button>

            <button
              onClick={onOpenStartFree}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:opacity-95 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Start Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 7 Columns: Platform, Solutions, Developers, Resources, Company, Legal, Social */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 py-12 text-xs border-b border-slate-800/80">
          
          {/* 1. Platform */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[11px] font-mono">Platform</h4>
            <ul className="space-y-2 text-slate-400">
              <li><button onClick={() => handlePlatformClick('email')} className="hover:text-white transition-colors cursor-pointer">Email Marketing</button></li>
              <li><button onClick={() => handlePlatformClick('transactional-email')} className="hover:text-white transition-colors cursor-pointer">Transactional Email</button></li>
              <li><button onClick={() => handlePlatformClick('whatsapp')} className="hover:text-white transition-colors cursor-pointer">WhatsApp</button></li>
              <li><button onClick={() => handlePlatformClick('ai-agents')} className="hover:text-white transition-colors cursor-pointer">AI Agents</button></li>
              <li><button onClick={() => handlePlatformClick('automation')} className="hover:text-white transition-colors cursor-pointer">Automation</button></li>
              <li><button onClick={() => handlePlatformClick('segmentation')} className="hover:text-white transition-colors cursor-pointer">Segmentation</button></li>
              <li><button onClick={() => handlePlatformClick('templates')} className="hover:text-white transition-colors cursor-pointer">Templates</button></li>
              <li><button onClick={() => handlePlatformClick('ads')} className="hover:text-white transition-colors cursor-pointer">Ads (Meta &amp; Status)</button></li>
              <li><button onClick={() => handlePlatformClick('catalog')} className="hover:text-white transition-colors cursor-pointer">Catalog</button></li>
              <li><button onClick={() => handlePlatformClick('payments')} className="hover:text-white transition-colors cursor-pointer">Payments</button></li>
              <li><button onClick={() => handlePlatformClick('analytics')} className="hover:text-white transition-colors cursor-pointer">Analytics</button></li>
            </ul>
          </div>

          {/* 2. Solutions */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[11px] font-mono">Solutions</h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li><button onClick={() => navigate('/solutions/ecommerce')} className="hover:text-white transition-colors cursor-pointer text-left">E-commerce</button></li>
              <li><button onClick={() => navigate('/solutions/saas')} className="hover:text-white transition-colors cursor-pointer text-left">SaaS</button></li>
              <li><button onClick={() => navigate('/solutions/agencies')} className="hover:text-white transition-colors cursor-pointer text-left">Agencies</button></li>
              <li><button onClick={() => navigate('/solutions/healthcare')} className="hover:text-white transition-colors cursor-pointer text-left">Healthcare</button></li>
              <li><button onClick={() => navigate('/solutions/education')} className="hover:text-white transition-colors cursor-pointer text-left">Education</button></li>
              <li><button onClick={() => navigate('/solutions/real-estate')} className="hover:text-white transition-colors cursor-pointer text-left">Real Estate</button></li>
            </ul>
          </div>

          {/* 3. Developers */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[11px] font-mono">Developers</h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li><button onClick={() => navigate('/developers')} className="hover:text-white transition-colors cursor-pointer text-left">Developer Overview</button></li>
              <li><button onClick={() => navigate('/developers/api')} className="hover:text-white transition-colors cursor-pointer text-left">REST API &amp; SDKs</button></li>
              <li><button onClick={() => navigate('/developers/webhooks')} className="hover:text-white transition-colors cursor-pointer text-left">Webhooks</button></li>
              <li><button onClick={() => navigate('/developers/integrations')} className="hover:text-white transition-colors cursor-pointer text-left">Integrations</button></li>
              <li><a href="https://kb.cocoonmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Documentation ↗</a></li>
            </ul>
          </div>

          {/* 4. Resources */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[11px] font-mono">Resources</h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li><button onClick={() => navigate('/resources/blog')} className="hover:text-white transition-colors cursor-pointer text-left">Engineering Blog</button></li>
              <li><button onClick={() => navigate('/resources/guides')} className="hover:text-white transition-colors cursor-pointer text-left">Tactical Guides</button></li>
              <li><button onClick={() => navigate('/resources/templates')} className="hover:text-white transition-colors cursor-pointer text-left">Template Library</button></li>
              <li><button onClick={() => navigate('/resources/case-studies')} className="hover:text-white transition-colors cursor-pointer text-left">Case Studies</button></li>
              <li><button onClick={() => navigate('/resources/help-center')} className="hover:text-white transition-colors cursor-pointer text-left">Help Center &amp; FAQ</button></li>
            </ul>
          </div>

          {/* 5. Company */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[11px] font-mono">Company</h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li><button onClick={() => navigate('/about')} className="hover:text-white transition-colors cursor-pointer text-left">About Us</button></li>
              <li><button onClick={() => navigate('/pricing')} className="hover:text-white transition-colors cursor-pointer text-left">Pricing</button></li>
              <li><button onClick={() => navigate('/contact')} className="hover:text-white transition-colors cursor-pointer text-left">Contact Us</button></li>
              <li><button onClick={() => navigate('/careers')} className="hover:text-white transition-colors cursor-pointer text-left">Careers (Hiring)</button></li>
              <li><button onClick={() => navigate('/security')} className="hover:text-white transition-colors cursor-pointer text-left">Security &amp; Trust</button></li>
            </ul>
          </div>

          {/* 6. Legal */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[11px] font-mono">Legal</h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li><button onClick={() => navigate('/legal')} className="hover:text-white transition-colors cursor-pointer text-left">Terms of Service</button></li>
              <li><button onClick={() => navigate('/legal')} className="hover:text-white transition-colors cursor-pointer text-left">Privacy Policy</button></li>
              <li><button onClick={() => navigate('/legal')} className="hover:text-white transition-colors cursor-pointer text-left">Acceptable Use (AUP)</button></li>
              <li><button onClick={() => navigate('/legal')} className="hover:text-white transition-colors cursor-pointer text-left">Data Processing (DPA)</button></li>
            </ul>
          </div>

          {/* 7. Social */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[11px] font-mono">Social</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5"><Twitter className="w-3.5 h-3.5" /> Twitter / X</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5"><Linkedin className="w-3.5 h-3.5" /> LinkedIn</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5"><Github className="w-3.5 h-3.5" /> GitHub</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5"><Youtube className="w-3.5 h-3.5" /> YouTube</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Compliance & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} CocoonMail Technologies Inc. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Official Meta BSP</span>
            <span>·</span>
            <span>ISO 27001 Certified</span>
            <span>·</span>
            <span>SOC 2 Type II</span>
            <span>·</span>
            <span>GDPR Ready</span>
          </div>
        </div>

      </div>

    </footer>
  );
};
