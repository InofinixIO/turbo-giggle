import React from 'react';
import { 
  BookOpen, 
  Layout, 
  TrendingUp, 
  ArrowRight, 
  Sparkles, 
  Download, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { ModalType } from '../types';
import { useRouter } from '../router/RouterContext';
import { FeatureDetailPage } from './FeatureDetailPage';
import { SocialProofSection } from '../components/home/SocialProofSection';

interface ResourcesPageProps {
  slug: string;
  onOpenModal: (type: ModalType) => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ slug, onOpenModal }) => {
  const { navigate } = useRouter();

  // Route: /resources/templates -> Dedicated marketing templates page
  if (slug === 'templates') {
    return <FeatureDetailPage slug="templates" onOpenModal={onOpenModal} />;
  }

  // Route: /resources/case-studies
  if (slug === 'case-studies') {
    return (
      <div className="pt-24 pb-20">
        <SocialProofSection />
      </div>
    );
  }

  // Route: /resources/guides or /resources overview
  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Growth Knowledge & Best Practices</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Guides, Benchmarks & Best Practices
          </h1>
          <p className="text-slate-600 text-sm sm:text-base">
            Master high-converting WhatsApp commerce, email deliverability algorithms, and autonomous customer AI agents.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'The 2026 WhatsApp Commerce Playbook',
              category: 'Strategy & Commerce',
              readTime: '8 min read',
              desc: 'How top D2C brands configure catalog messaging, UPI payment buttons, and automated reorders.'
            },
            {
              title: 'Achieving 99.8% Inbox Placement in Gmail & Yahoo',
              category: 'Deliverability & Tech',
              readTime: '6 min read',
              desc: 'Complete walkthrough on SPF, DKIM, DMARC, IP warm-up curves, and spam prevention.'
            },
            {
              title: 'Grounding Conversational AI Agents in E-commerce Catalogs',
              category: 'AI & Engineering',
              readTime: '10 min read',
              desc: 'Architecture patterns for preventing AI hallucination, structuring product JSON feeds, and automated human handoff.'
            },
            {
              title: 'Meta Click-to-WhatsApp Ads Mastery',
              category: 'Acquisition & ROAS',
              readTime: '7 min read',
              desc: 'How to structure ad creatives, pass custom payload parameters, and reduce customer acquisition costs.'
            },
            {
              title: 'Cross-Channel Automation Sequences That Convert',
              category: 'Lifecycle Automation',
              readTime: '9 min read',
              desc: 'Visual flow diagrams comparing abandoned cart recovery across pure email vs WhatsApp fallback.'
            },
            {
              title: 'Migrating from Legacy SMTP to Modern REST APIs',
              category: 'Developer Guide',
              readTime: '5 min read',
              desc: 'Step-by-step code tutorial to migrate Mailgun, SendGrid, or AWS SES to Cocoonmail without downtime.'
            }
          ].map((guide, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center text-[11px] text-slate-500 mb-2">
                  <span className="font-semibold text-blue-600">{guide.category}</span>
                  <span>{guide.readTime}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{guide.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{guide.desc}</p>
              </div>
              <button 
                onClick={() => onOpenModal('start-free')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
              >
                <span>Read Full Playbook</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
