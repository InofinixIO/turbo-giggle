import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Server, 
  Building, 
  HeartPulse, 
  GraduationCap, 
  Home as HomeIcon,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  GitFork,
  MessageSquare,
  Mail,
  Zap
} from 'lucide-react';

interface SolutionsSectionProps {
  onOpenStartFree: () => void;
  onOpenBookDemo: () => void;
  selectedIndustry?: string;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  onOpenStartFree,
  onOpenBookDemo,
  selectedIndustry = 'ecommerce'
}) => {
  const [activeIndustryId, setActiveIndustryId] = useState<string>(selectedIndustry);

  const solutions = [
    {
      id: 'ecommerce',
      name: 'E-commerce',
      tagline: 'Turn abandoned carts and ad clicks into paid orders inside WhatsApp.',
      icon: ShoppingBag,
      workflow: [
        { label: 'Cart Abandoned', icon: ShoppingBag },
        { label: 'WhatsApp + UPI Link', icon: MessageSquare },
        { label: 'AI Size Helper', icon: Zap },
        { label: 'Order Settled', icon: CheckCircle2 }
      ],
      metrics: '+38% Cart Recovery · 12s Checkout Time',
      cta: 'Explore E-commerce Blueprint'
    },
    {
      id: 'saas',
      name: 'SaaS',
      tagline: 'Automate product-led onboarding, usage alerts, and billing recovery.',
      icon: Server,
      workflow: [
        { label: 'Trial Signed Up', icon: Server },
        { label: 'Onboarding Email', icon: Mail },
        { label: 'Feature Drop Ping', icon: MessageSquare },
        { label: 'Plan Upgraded', icon: TrendingUp }
      ],
      metrics: '3.4x Faster Trial Activation · 0% Churn Leakage',
      cta: 'Explore SaaS Blueprint'
    },
    {
      id: 'agencies',
      name: 'Agencies',
      tagline: 'Manage multi-brand workspaces, white-label client portals, and consolidated ROAS.',
      icon: Building,
      workflow: [
        { label: 'Client Workspace', icon: Building },
        { label: 'Omnichannel Flow', icon: GitFork },
        { label: 'CAPI Attribution', icon: TrendingUp },
        { label: 'White-Label Report', icon: CheckCircle2 }
      ],
      metrics: '85+ Clients Managed · Single Console',
      cta: 'Explore Agency Blueprint'
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      tagline: 'HIPAA-compliant appointment reminders, doctor scheduling, and lab reports.',
      icon: HeartPulse,
      workflow: [
        { label: 'Booking Request', icon: HeartPulse },
        { label: 'WhatsApp Confirm', icon: MessageSquare },
        { label: '1-Hour Alert', icon: Zap },
        { label: 'PDF Report Sent', icon: Mail }
      ],
      metrics: '78% No-Show Reduction · 100% Encrypted',
      cta: 'Explore Healthcare Blueprint'
    },
    {
      id: 'education',
      name: 'Education',
      tagline: 'Counseling automation, webinar invitations, and instant fee collection.',
      icon: GraduationCap,
      workflow: [
        { label: 'Lead Inquired', icon: GraduationCap },
        { label: 'AI Course Advisor', icon: Zap },
        { label: 'Seat Reserved', icon: MessageSquare },
        { label: 'Fee Link Settled', icon: CheckCircle2 }
      ],
      metrics: '5.2x Higher Enrollment · Instant UPI Fees',
      cta: 'Explore Education Blueprint'
    },
    {
      id: 'real-estate',
      name: 'Real Estate',
      tagline: 'Qualify property buyers instantly and coordinate in-person site visit slots.',
      icon: HomeIcon,
      workflow: [
        { label: 'Ad Lead Captured', icon: HomeIcon },
        { label: 'AI Budget Match', icon: Zap },
        { label: 'Brochure PDF', icon: MessageSquare },
        { label: 'Site Tour Booked', icon: CheckCircle2 }
      ],
      metrics: '4.8x Tour Show-Up Rate · 0 Dropped Leads',
      cta: 'Explore Real Estate Blueprint'
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Vertical Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            Built around your business.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Whether you run a high-volume D2C brand, a fast-scaling SaaS company, or a clinic network, CocoonMail provides pre-configured workflows tailored to your sector.
          </p>
        </div>

        {/* 6 Industry Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item) => {
            const Icon = item.icon;
            const isSelected = activeIndustryId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setActiveIndustryId(item.id)}
                className={`rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xl ring-2 ring-indigo-500/40 -translate-y-1'
                    : 'bg-slate-50/70 border-slate-200/90 text-slate-900 hover:bg-white hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                      isSelected ? 'bg-indigo-600 text-white shadow-sm' : 'bg-white text-slate-700 shadow-xs'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                      isSelected ? 'bg-slate-800 text-slate-300' : 'bg-slate-200 text-slate-600'
                    }`}>
                      Pre-built Blueprint
                    </span>
                  </div>

                  <h3 className={`text-xl font-bold ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                    {item.name}
                  </h3>

                  <p className={`mt-2 text-xs leading-relaxed ${isSelected ? 'text-slate-300' : 'text-slate-600'}`}>
                    {item.tagline}
                  </p>

                  {/* Relevant Workflow Illustration (Required) */}
                  <div className={`mt-5 p-3 rounded-2xl border ${
                    isSelected ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
                  }`}>
                    <span className={`text-[10px] font-mono uppercase tracking-wider block mb-2 font-bold ${
                      isSelected ? 'text-indigo-400' : 'text-slate-400'
                    }`}>
                      Automated Workflow:
                    </span>
                    <div className="grid grid-cols-4 gap-1 items-center text-center">
                      {item.workflow.map((node, i) => {
                        const NodeIcon = node.icon;
                        return (
                          <div key={i} className="flex flex-col items-center">
                            <div className={`w-6 h-6 rounded-md flex items-center justify-center mb-1 text-[10px] ${
                              isSelected ? 'bg-slate-800 text-indigo-300' : 'bg-slate-100 text-slate-600'
                            }`}>
                              <NodeIcon className="w-3 h-3" />
                            </div>
                            <span className={`text-[9px] font-medium leading-tight truncate w-full ${
                              isSelected ? 'text-slate-300' : 'text-slate-600'
                            }`}>
                              {node.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/50">
                  <span className={`text-xs font-mono font-semibold block mb-3 ${
                    isSelected ? 'text-emerald-400' : 'text-emerald-700'
                  }`}>
                    ● {item.metrics}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenStartFree();
                    }}
                    className={`w-full py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      isSelected
                        ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <span>{item.cta}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
