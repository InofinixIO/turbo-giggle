import React from 'react';
import { useNavigate } from 'react-router';
import { ArrowRight, ShieldCheck, Heart, MessageSquare } from 'lucide-react';
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
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  Twitter / X
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  YouTube
                </a>
              </li>
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
