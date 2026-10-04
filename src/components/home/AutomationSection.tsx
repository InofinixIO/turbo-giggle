import React, { useState, useEffect } from 'react';
import { 
  Workflow, 
  ShoppingBag, 
  Users, 
  Mail, 
  Clock, 
  MessageSquare, 
  Bot, 
  Split, 
  CheckCircle, 
  RotateCcw, 
  ArrowRight,
  Play,
  Sparkles,
  Zap
} from 'lucide-react';
import { ModalType } from '../../types';

interface AutomationSectionProps {
  onOpenModal: (type: ModalType) => void;
}

export const AutomationSection: React.FC<AutomationSectionProps> = ({ onOpenModal }) => {
  const [activeNode, setActiveNode] = useState(0);

  // Workflow nodes sequence
  const nodes = [
    { id: 0, title: 'Purchase Completed', type: 'Trigger', desc: 'Customer buys Velocity Pro Runner', icon: ShoppingBag, color: 'emerald' },
    { id: 1, title: 'Segment Update', type: 'Action', desc: 'Tag as VIP_POST_PURCHASE', icon: Users, color: 'indigo' },
    { id: 2, title: 'Transactional Email', type: 'Dispatch', desc: 'Send receipt & unboxing video', icon: Mail, color: 'blue' },
    { id: 3, title: 'Wait Delay: 2 Days', type: 'Timer', desc: 'Allow shoe delivery to arrive', icon: Clock, color: 'slate' },
    { id: 4, title: 'WhatsApp Check-in', type: 'Message', desc: 'Ask how the first run went', icon: MessageSquare, color: 'emerald' },
    { id: 5, title: 'AI Agent Sentiment', type: 'Evaluation', desc: 'Classifies customer response tone', icon: Bot, color: 'violet' },
    { id: 6, title: 'Condition Split', type: 'Decision', desc: 'Did customer love the shoes?', icon: Split, color: 'amber' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % (nodes.length + 1));
    }, 2400);
    return () => clearInterval(timer);
  }, [nodes.length]);

  return (
    <section id="automation-section" className="py-20 md:py-32 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold mb-4">
            <Workflow className="w-3.5 h-3.5" />
            <span>Visual Customer Lifecycle Canvas</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight text-balance mb-4">
            Build journeys, not campaigns.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Automate personalized cross-channel journeys that trigger based on customer actions, delays, and AI intelligence.
          </p>
        </div>

        {/* Big Node Canvas */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200/90 p-6 md:p-10 shadow-xl overflow-hidden">
          
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Live Journey Execution Flow: Post-Purchase Replenishment & Review
              </span>
            </div>
            <span className="text-xs font-mono text-slate-500 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
              Active Enrollees: 1,420
            </span>
          </div>

          {/* Node Progression Sequence */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 relative">
            {nodes.map((node) => {
              const Icon = node.icon;
              const isActive = activeNode === node.id;

              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNode(node.id)}
                  className={`relative p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isActive 
                      ? 'bg-white border-blue-600 shadow-xl scale-105 ring-2 ring-blue-500/20' 
                      : 'bg-white/80 border-slate-200 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        {node.type}
                      </span>
                      <Icon className={`w-4 h-4 ${
                        node.color === 'emerald' ? 'text-emerald-600' :
                        node.color === 'indigo' ? 'text-indigo-600' :
                        node.color === 'blue' ? 'text-blue-600' :
                        node.color === 'violet' ? 'text-violet-600' :
                        node.color === 'amber' ? 'text-amber-600' :
                        'text-slate-500'
                      }`} />
                    </div>
                    <h4 className="text-xs font-bold text-slate-900 mb-1">{node.title}</h4>
                    <p className="text-[11px] text-slate-500 leading-snug">{node.desc}</p>
                  </div>

                  {isActive && (
                    <div className="mt-2 text-[10px] font-bold text-blue-600 flex items-center gap-1">
                      <Zap className="w-2.5 h-2.5" /> Firing now...
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Condition Split Branch (YES / NO) */}
          <div className="mt-8 pt-8 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* YES: High Sentiment Conversion Branch */}
            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Condition = YES (Positive Sentiment)</span>
                </span>
                <span className="text-xs font-mono font-bold text-emerald-700">88% of users</span>
              </div>
              <p className="text-xs text-slate-700">
                Action: Deliver VIP Referral Discount code & VIP Catalog Preview on WhatsApp.
              </p>
              <div className="p-3 bg-white rounded-xl border border-emerald-200 text-xs font-semibold text-emerald-800 flex justify-between items-center shadow-sm">
                <span>Result: Repeat Purchase & Review Captured</span>
                <span className="font-bold">+₹14.2L Attributed</span>
              </div>
            </div>

            {/* NO: Retarget Branch */}
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
                  <RotateCcw className="w-4 h-4 text-amber-600" />
                  <span>Condition = NO (Neutral / Issues)</span>
                </span>
                <span className="text-xs font-mono font-bold text-amber-700">12% of users</span>
              </div>
              <p className="text-xs text-slate-700">
                Action: Escalate instantly to human support team & offer complimentary size exchange.
              </p>
              <div className="p-3 bg-white rounded-xl border border-amber-200 text-xs font-semibold text-amber-800 flex justify-between items-center shadow-sm">
                <span>Result: Churn Avoided & Ticket Closed</span>
                <span className="font-bold">Zero Bad Reviews</span>
              </div>
            </div>

          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => onOpenModal('start-free')}
              className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg transition-all"
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
