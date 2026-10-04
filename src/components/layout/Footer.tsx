import React from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  ShieldCheck, 
  Lock,
  RotateCcw,
  FileText,
  Cookie,
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

  const currentYear = new Date().getFullYear();

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
              <li><a href="/platform/payments" onClick={(e) => handleLink(e, '/platform/payments')} className="hover:text-white transition-colors">In-Chat Payments</a></li>
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
              <li><a href="/developers/integrations" onClick={(e) => handleLink(e, '/developers/integrations')} className="hover:text-white transition-colors">Integrations Hub</a></li>
              <li><a href="/pricing" onClick={(e) => handleLink(e, '/pricing')} className="hover:text-white transition-colors">Pricing & Volume</a></li>
            </ul>
          </div>

          {/* Column 4: Legal & Compliance */}
          <div className="space-y-3">
            <div className="text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Legal & Policy</span>
            </div>
            <ul className="space-y-2">
              <li>
                <a href="/terms-of-service" onClick={(e) => handleLink(e, '/terms-of-service')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <FileText className="w-3 h-3 text-slate-500" />
                  <span>Terms of Service</span>
                </a>
              </li>
              <li>
                <a href="/privacy-policy" onClick={(e) => handleLink(e, '/privacy-policy')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3 h-3 text-slate-500" />
                  <span>Privacy Policy</span>
                </a>
              </li>
              <li>
                <a href="/refund-policy" onClick={(e) => handleLink(e, '/refund-policy')} className="hover:text-white transition-colors flex items-center gap-1.5 text-blue-400 font-medium">
                  <RotateCcw className="w-3 h-3 text-blue-400" />
                  <span>Refund Policy</span>
                </a>
              </li>
              <li>
                <a href="/cookie-policy" onClick={(e) => handleLink(e, '/cookie-policy')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Cookie className="w-3 h-3 text-slate-500" />
                  <span>Cookie Policy</span>
                </a>
              </li>
              <li>
                <a href="/gdpr-compliance" onClick={(e) => handleLink(e, '/gdpr-compliance')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-slate-500" />
                  <span>GDPR Compliance</span>
                </a>
              </li>
              <li>
                <a href="/data-protection" onClick={(e) => handleLink(e, '/data-protection')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Lock className="w-3 h-3 text-slate-500" />
                  <span>Data Protection</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Company */}
          <div className="space-y-3">
            <div className="text-white font-bold text-xs uppercase tracking-wider">Company</div>
            <ul className="space-y-2">
              <li><a href="/company/about" onClick={(e) => handleLink(e, '/company/about')} className="hover:text-white transition-colors">About Cocoonmail</a></li>
              <li><a href="/company/contact" onClick={(e) => handleLink(e, '/company/contact')} className="hover:text-white transition-colors">Contact Sales</a></li>
              <li><a href="/resources/guides" onClick={(e) => handleLink(e, '/resources/guides')} className="hover:text-white transition-colors">Growth Guides</a></li>
              <li><span className="text-slate-600">Careers (Hiring)</span></li>
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
            <div className="pt-2 border-t border-slate-900 flex flex-col gap-1.5">
              <a
                href="https://app.cocoonmail.com/login"
                className="text-slate-400 hover:text-white text-center font-medium transition-colors"
              >
                Already registered? <span className="text-blue-400 underline">Sign In</span>
              </a>
              <span className="text-[10px] text-slate-500 text-center">
                No credit card required. Instant activation.
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Wordmark, Legal Links & Exact Copyright */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a href="/" onClick={(e) => handleLink(e, '/')} aria-label="Cocoonmail Home" className="flex items-center">
              <img 
                src="https://cdn.cocoonmail.com/assets/logo.svg" 
                alt="Cocoonmail Logo" 
                className="h-6 w-auto" 
              />
            </a>
            <span className="text-slate-700">|</span>
            <span className="text-[11px] text-slate-500">
              Customer Engagement & Commerce Operating Platform
            </span>
          </div>

          {/* Legal Quick Links in Bottom Sub-bar */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-slate-500">
            <a href="/terms-of-service" onClick={(e) => handleLink(e, '/terms-of-service')} className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="/privacy-policy" onClick={(e) => handleLink(e, '/privacy-policy')} className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="/refund-policy" onClick={(e) => handleLink(e, '/refund-policy')} className="hover:text-slate-300 transition-colors text-slate-400">Refund Policy</a>
            <a href="/cookie-policy" onClick={(e) => handleLink(e, '/cookie-policy')} className="hover:text-slate-300 transition-colors">Cookie Policy</a>
            <a href="/gdpr-compliance" onClick={(e) => handleLink(e, '/gdpr-compliance')} className="hover:text-slate-300 transition-colors">GDPR Compliance</a>
            <a href="/data-protection" onClick={(e) => handleLink(e, '/data-protection')} className="hover:text-slate-300 transition-colors">Data Protection</a>
          </div>

          {/* Exact Required Copyright Notice */}
          <div className="text-[11px] text-slate-500 text-center lg:text-right">
            Copyright © {currentYear} Cocoonmail, Inofinix Private Limited, All Rights Reserved
          </div>
        </div>

      </div>
    </footer>
  );
};
