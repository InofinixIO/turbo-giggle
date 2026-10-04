import React from 'react';
import { 
  Mail, 
  MessageSquare, 
  ArrowRight, 
  ExternalLink, 
  ShieldCheck, 
  Globe, 
  CheckCircle2 
} from 'lucide-react';
import { ModalType } from '../../types';
import { useRouter } from '../../router/RouterContext';

interface FooterProps {
  onOpenModal: (type: ModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  const { navigate } = useRouter();

  const handleLink = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 6-Column Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-12 border-b border-slate-900">
          
          {/* Column 1: Platform */}
          <div className="space-y-3">
            <div className="text-white font-bold text-xs uppercase tracking-wider">Platform</div>
            <ul className="space-y-2">
              <li><a href="/platform/email" onClick={(e) => handleLink(e, '/platform/email')} className="hover:text-white transition-colors">Email Marketing</a></li>
              <li><a href="/platform/transactional-email" onClick={(e) => handleLink(e, '/platform/transactional-email')} className="hover:text-white transition-colors">Transactional Email</a></li>
              <li><a href="/platform/whatsapp" onClick={(e) => handleLink(e, '/platform/whatsapp')} className="hover:text-white transition-colors">WhatsApp Business API</a></li>
              <li><a href="/platform/ai-agents" onClick={(e) => handleLink(e, '/platform/ai-agents')} className="hover:text-white transition-colors">AI Agents</a></li>
              <li><a href="/platform/automation" onClick={(e) => handleLink(e, '/platform/automation')} className="hover:text-white transition-colors">Visual Automation</a></li>
              <li><a href="/platform/segmentation" onClick={(e) => handleLink(e, '/platform/segmentation')} className="hover:text-white transition-colors">Segmentation</a></li>
              <li><a href="/platform/templates" onClick={(e) => handleLink(e, '/platform/templates')} className="hover:text-white transition-colors">Templates & Sandbox</a></li>
              <li><a href="/platform/ads" onClick={(e) => handleLink(e, '/platform/ads')} className="hover:text-white transition-colors">Meta Ads to WhatsApp</a></li>
              <li><a href="/platform/catalog" onClick={(e) => handleLink(e, '/platform/catalog')} className="hover:text-white transition-colors">Product Catalog</a></li>
              <li><a href="/platform/payments" onClick={(e) => handleLink(e, '/platform/payments')} className="hover:text-white transition-colors">In-Chat Payments</a></li>
              <li><a href="/platform/analytics" onClick={(e) => handleLink(e, '/platform/analytics')} className="hover:text-white transition-colors">Analytics</a></li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-3">
            <div className="text-white font-bold text-xs uppercase tracking-wider">Solutions</div>
            <ul className="space-y-2">
              <li><a href="/solutions/ecommerce" onClick={(e) => handleLink(e, '/solutions/ecommerce')} className="hover:text-white transition-colors">E-commerce & D2C</a></li>
              <li><a href="/solutions/saas" onClick={(e) => handleLink(e, '/solutions/saas')} className="hover:text-white transition-colors">B2B SaaS</a></li>
              <li><a href="/solutions/agencies" onClick={(e) => handleLink(e, '/solutions/agencies')} className="hover:text-white transition-colors">Marketing Agencies</a></li>
              <li><a href="/solutions/healthcare" onClick={(e) => handleLink(e, '/solutions/healthcare')} className="hover:text-white transition-colors">Healthcare & Clinics</a></li>
              <li><a href="/solutions/education" onClick={(e) => handleLink(e, '/solutions/education')} className="hover:text-white transition-colors">Education & EdTech</a></li>
              <li><a href="/solutions/real-estate" onClick={(e) => handleLink(e, '/solutions/real-estate')} className="hover:text-white transition-colors">Real Estate</a></li>
              <li><a href="/solutions" onClick={(e) => handleLink(e, '/solutions')} className="hover:text-white transition-colors">All Industry Solutions</a></li>
            </ul>
          </div>

          {/* Column 3: Developers */}
          <div className="space-y-3">
            <div className="text-white font-bold text-xs uppercase tracking-wider">Developers</div>
            <ul className="space-y-2">
              <li><a href="/developers/api" onClick={(e) => handleLink(e, '/developers/api')} className="hover:text-white transition-colors">REST API Reference</a></li>
              <li><a href="/developers/webhooks" onClick={(e) => handleLink(e, '/developers/webhooks')} className="hover:text-white transition-colors">Webhooks Stream</a></li>
              <li><a href="https://kb.cocoonmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">Documentation <ExternalLink className="w-3 h-3" /></a></li>
              <li><a href="/developers/integrations" onClick={(e) => handleLink(e, '/developers/integrations')} className="hover:text-white transition-colors">Integrations</a></li>
              <li><a href="/developers" onClick={(e) => handleLink(e, '/developers')} className="hover:text-white transition-colors">Developer Hub</a></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="space-y-3">
            <div className="text-white font-bold text-xs uppercase tracking-wider">Resources</div>
            <ul className="space-y-2">
              <li><a href="/resources/guides" onClick={(e) => handleLink(e, '/resources/guides')} className="hover:text-white transition-colors">Growth Guides</a></li>
              <li><a href="/resources/templates" onClick={(e) => handleLink(e, '/resources/templates')} className="hover:text-white transition-colors">Template Sandbox</a></li>
              <li><a href="/resources/case-studies" onClick={(e) => handleLink(e, '/resources/case-studies')} className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="/pricing" onClick={(e) => handleLink(e, '/pricing')} className="hover:text-white transition-colors">ROI Calculator</a></li>
              <li><a href="https://kb.cocoonmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Help Center</a></li>
            </ul>
          </div>

          {/* Column 5: Company */}
          <div className="space-y-3">
            <div className="text-white font-bold text-xs uppercase tracking-wider">Company</div>
            <ul className="space-y-2">
              <li><a href="/company/about" onClick={(e) => handleLink(e, '/company/about')} className="hover:text-white transition-colors">About Cocoonmail</a></li>
              <li><a href="/company/contact" onClick={(e) => handleLink(e, '/company/contact')} className="hover:text-white transition-colors">Contact Sales</a></li>
              <li><span className="text-slate-600">Careers (Hiring)</span></li>
              <li><span className="text-slate-600">Meta Partner Status</span></li>
              <li><span className="text-emerald-400 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-400" /> Systems Operational</span></li>
            </ul>
          </div>

          {/* Column 6: Brand & Quick Launch */}
          <div className="space-y-4">
            <div className="text-white font-bold text-xs uppercase tracking-wider">Get Started</div>
            <p className="text-[11px] leading-relaxed text-slate-400">
              Join thousands of businesses engaging customers across Email and WhatsApp today.
            </p>
            <button
              onClick={() => onOpenModal('start-free')}
              className="w-full py-2.5 px-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-md"
            >
              <span>Start Free</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <div className="text-[10px] text-slate-500">
              No credit card required. Instant account setup.
            </div>
          </div>

        </div>

        {/* Bottom Bar: Wordmark, Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a href="/" onClick={(e) => handleLink(e, '/')} className="flex items-center gap-2">
              <img 
                src="https://cocoonmail.com/images/logo/logo-2.svg" 
                alt="Cocoonmail Logo" 
                className="h-6 w-auto" 
              />
              <span className="text-sm font-bold text-white tracking-tight">Cocoonmail</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-[11px] text-slate-500">
              Customer Engagement & Commerce Operating Platform
            </span>
          </div>

          <div className="flex items-center gap-6 text-[11px] text-slate-500">
            <span>© {new Date().getFullYear()} Cocoonmail Technologies Inc. All rights reserved.</span>
            <a href="/company/about" onClick={(e) => handleLink(e, '/company/about')} className="hover:text-slate-300">Privacy Policy</a>
            <a href="/company/about" onClick={(e) => handleLink(e, '/company/about')} className="hover:text-slate-300">Terms of Service</a>
            <a href="/company/about" onClick={(e) => handleLink(e, '/company/about')} className="hover:text-slate-300">Security & GDPR</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
