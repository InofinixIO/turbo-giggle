import React, { useState } from 'react';
import { 
  GitFork, 
  ShoppingBag, 
  Users, 
  Mail, 
  Clock, 
  MessageSquare, 
  Bot, 
  HelpCircle, 
  CheckCircle2, 
  RefreshCw, 
  ArrowRight, 
  ArrowDown, 
  Play, 
  Sparkles,
  Zap,
  Check
} from 'lucide-react';

interface AutomationSectionProps {
  onOpenStartFree: () => void;
}

export const AutomationSection: React.FC<AutomationSectionProps> = ({ onOpenStartFree }) => {
  // Animated node simulation
  const [activeNode, setActiveNode] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  // Workflow structure strictly matching the specification:
  // Purchase -> Segment -> Email -> Wait 2 days -> WhatsApp -> AI Agent -> Condition: YES -> Conversion / NO -> Retarget
  const nodes = [
    {
      id: 'purchase',
      title: '1. Purchase',
      desc: 'Order #CM-48291 confirmed via store checkout',
      icon: ShoppingBag,
      color: 'bg-emerald-500 text-white',
      badge: 'Trigger'
    },
    {
      id: 'segment',
      title: '2. Segment',
      desc: 'Assign cohort: "Recent_Buyer_VIP" in CDP',
      icon: Users,
      color: 'bg-cyan-500 text-white',
      badge: 'Audience'
    },
    {
      id: 'email',
      title: '3. Email',
      desc: 'Send GST Tax Invoice & care guide',
      icon: Mail,
      color: 'bg-blue-600 text-white',
      badge: 'Channel'
    },
    {
      id: 'wait',
      title: '4. Wait 2 days',
      desc: 'Smart delay before delivery follow-up',
      icon: Clock,
      color: 'bg-amber-500 text-white',
      badge: 'Time Delay'
    },
    {
      id: 'whatsapp',
      title: '5. WhatsApp',
      desc: 'Ping customer: "Did your order arrive smoothly?"',
      icon: MessageSquare,
      color: 'bg-emerald-600 text-white',
      badge: 'Channel'
    },
    {
      id: 'ai-agent',
      title: '6. AI Agent',
      desc: 'Answers questions & checks sizing satisfaction',
      icon: Bot,
      color: 'bg-violet-600 text-white',
      badge: 'Intelligence'
    }
  ];

  return (
    <section id="automation" className="py-24 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-800 text-xs font-semibold border border-indigo-200 mb-3">
            <GitFork className="w-3.5 h-3.5 text-indigo-600" />
            <span>Visual Journey Automation Canvas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            Build journeys, not campaigns.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Replace static one-off blasts with intelligent, event-driven workflows that respond to customer signals across Email, WhatsApp, and AI in real time.
          </p>

          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setActiveNode((prev) => (prev + 1) % (nodes.length + 2))}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors"
            >
              <Zap className="w-3.5 h-3.5 text-indigo-600" />
              <span>Simulate Next Workflow Node</span>
            </button>
          </div>
        </div>

        {/* Large Workflow Canvas */}
        <div className="bg-slate-950 rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl overflow-hidden relative">
          
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

          {/* Workflow Canvas Top Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-800 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-white font-bold">Workflow: Post-Purchase VIP Care &amp; Retention</span>
            </div>
            <span className="text-indigo-400">Status: Running Live</span>
          </div>

          {/* Linear Nodes Flow: Purchase -> Segment -> Email -> Wait 2 days -> WhatsApp -> AI Agent */}
          <div className="py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 relative">
            {nodes.map((node, idx) => {
              const Icon = node.icon;
              const isCurrent = activeNode === idx;

              return (
                <div key={node.id} className="relative">
                  <div 
                    onClick={() => setActiveNode(idx)}
                    className={`rounded-2xl p-4 border transition-all cursor-pointer flex flex-col justify-between min-h-[160px] ${
                      isCurrent
                        ? 'bg-slate-900 border-indigo-500 shadow-lg shadow-indigo-500/20 ring-2 ring-indigo-500/40 scale-105 z-10'
                        : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${node.color} shadow-xs`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                          {node.badge}
                        </span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide">{node.title}</h4>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">{node.desc}</p>
                  </div>

                  {/* Flow Arrow on Desktop */}
                  {idx < nodes.length - 1 && (
                    <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-20 text-indigo-400">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Condition Branch: YES -> Conversion / NO -> Retarget */}
          <div className="pt-6 border-t border-slate-800 flex flex-col items-center">
            
            <div className="mb-4 px-4 py-2 rounded-2xl bg-indigo-900/40 border border-indigo-500/40 text-center">
              <span className="text-xs font-mono text-indigo-300 font-bold flex items-center gap-1.5 justify-center">
                <HelpCircle className="w-3.5 h-3.5" />
                Condition: Did customer respond or purchase within 48h?
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
              
              {/* Branch YES -> Conversion */}
              <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-2xl p-4 text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded bg-emerald-500 text-white font-mono text-[10px] font-bold">
                    YES
                  </span>
                  <span className="text-emerald-400 font-mono font-semibold">68.4% of users</span>
                </div>
                <strong className="text-white text-sm block">Action: Conversion &amp; Loyalty Points</strong>
                <p className="text-slate-400 leading-snug">
                  Customer claimed discount. Transmit 500 loyalty credits via WhatsApp &amp; mark cohort as &quot;Brand Advocate&quot;.
                </p>
              </div>

              {/* Branch NO -> Retarget */}
              <div className="bg-rose-950/40 border border-rose-500/40 rounded-2xl p-4 text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded bg-rose-500 text-white font-mono text-[10px] font-bold">
                    NO
                  </span>
                  <span className="text-rose-400 font-mono font-semibold">31.6% of users</span>
                </div>
                <strong className="text-white text-sm block">Action: Retarget &amp; WhatsApp Reminder</strong>
                <p className="text-slate-400 leading-snug">
                  Schedule soft WhatsApp Status ad reminder &amp; dispatch personalized sizing survey with 10% voucher.
                </p>
              </div>

            </div>

          </div>

          {/* Bottom Action Footer */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              Interactive node execution engine · Sub-second event dispatch
            </span>
            <button
              onClick={onOpenStartFree}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs sm:text-sm font-semibold shadow-md transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Explore Automation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
