import React from 'react';
import { 
  Code2, 
  Webhook, 
  Terminal, 
  ArrowRight, 
  ExternalLink, 
  ShieldCheck, 
  Activity, 
  Database,
  Layers,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { ModalType } from '../types';
import { useRouter } from '../router/RouterContext';
import { DeveloperSection } from '../components/home/DeveloperSection';
import { IntegrationsSection } from '../components/home/IntegrationsSection';

interface DevelopersPageProps {
  slug: string;
  onOpenModal: (type: ModalType) => void;
}

export const DevelopersPage: React.FC<DevelopersPageProps> = ({ slug, onOpenModal }) => {
  const { navigate } = useRouter();

  // Route: /developers/integrations
  if (slug === 'integrations') {
    return (
      <div className="pt-24 pb-20">
        <IntegrationsSection onOpenModal={onOpenModal} />
      </div>
    );
  }

  // Route: /developers/api or /developers/webhooks or /developers overview
  return (
    <div className="pt-24 pb-20 bg-slate-950 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-4">
            <Code2 className="w-3.5 h-3.5" />
            <span>Developer Platform & Infrastructure</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
            Built for marketers. Engineered for developers.
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Dispatch emails, trigger WhatsApp templates, stream webhooks, and query customer attributes with type-safe SDKs and sub-45ms latency.
          </p>
          
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => onOpenModal('start-free')}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-blue-600/25"
            >
              Get Free API Key
            </button>
            <a
              href="https://kb.cocoonmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 font-semibold text-xs rounded-xl flex items-center gap-1.5"
            >
              <span>API Reference Docs</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Live IDE & Webhook Component */}
        <DeveloperSection onOpenModal={onOpenModal} />

        {/* Additional Architecture Pillars */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <ShieldCheck className="w-6 h-6 text-emerald-400 mb-3" />
            <h3 className="text-base font-bold text-white mb-2">99.8% Global Edge Deliverability</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Automated IP warm-ups, feedback loops with top mailbox providers, and official Meta Cloud API hosting.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <Webhook className="w-6 h-6 text-blue-400 mb-3" />
            <h3 className="text-base font-bold text-white mb-2">HMAC Signed Webhook Retries</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every delivery status, click, open, and conversational payment is signed with HMAC SHA256 and retried with exponential backoff.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <Layers className="w-6 h-6 text-violet-400 mb-3" />
            <h3 className="text-base font-bold text-white mb-2">Meta Conversions API (CAPI)</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Server-side purchase events stream directly to Meta Ads Manager, optimizing campaign performance with zero ad-blocker loss.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
