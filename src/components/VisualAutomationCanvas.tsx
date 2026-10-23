import React, { useState } from 'react';
import { 
  Play, 
  GitFork, 
  Clock, 
  Mail, 
  MessageSquare, 
  Bot, 
  CreditCard, 
  CheckCircle2, 
  Plus, 
  Settings2,
  ChevronDown,
  Sparkles,
  ArrowDown
} from 'lucide-react';

interface WorkflowNode {
  id: string;
  type: 'trigger' | 'condition' | 'action' | 'delay' | 'goal';
  title: string;
  subtitle: string;
  channel?: string;
  status?: 'ready' | 'running' | 'success';
}

export const VisualAutomationCanvas: React.FC = () => {
  const [selectedWorkflow, setSelectedWorkflow] = useState<'cart_recovery' | 'lead_qualify' | 'vip_onboarding'>('cart_recovery');
  const [simulating, setSimulating] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(-1);

  const workflows = {
    cart_recovery: {
      name: 'Omnichannel Cart Recovery Flow',
      trigger: 'Cart Abandoned > ₹2,000 / $25',
      nodes: [
        {
          id: '1',
          type: 'trigger' as const,
          title: 'Trigger: Cart Abandoned',
          subtitle: 'Cart value > ₹2,000 within last 30 minutes',
          channel: 'Shopify / Webhook'
        },
        {
          id: '2',
          type: 'action' as const,
          title: 'Action: WhatsApp Interactive Template',
          subtitle: 'Send product card with 1-click restore link & size help',
          channel: 'WhatsApp BSP'
        },
        {
          id: '3',
          type: 'condition' as const,
          title: 'Branch: Opened WhatsApp in 2 hours?',
          subtitle: 'Evaluates read receipt from Meta Business API'
        },
        {
          id: '4a',
          type: 'action' as const,
          title: 'If YES: Autonomous AI Assistant',
          subtitle: 'Answers sizing queries & triggers native UPI payment',
          channel: 'Cocoon AI'
        },
        {
          id: '4b',
          type: 'action' as const,
          title: 'If NO: Branded HTML Email Nurture',
          subtitle: 'Dispatch dynamic discount code & customer review video',
          channel: 'Transactional SMTP'
        },
        {
          id: '5',
          type: 'goal' as const,
          title: 'Goal: Purchase Completed',
          subtitle: 'Attribution logged & offline CAPI fired (64% recovery)',
          channel: 'Analytics'
        }
      ]
    },
    lead_qualify: {
      name: 'Click-to-WhatsApp Ad Lead Nurture',
      trigger: 'User clicks Meta Ad on Instagram',
      nodes: [
        {
          id: '1',
          type: 'trigger' as const,
          title: 'Trigger: Meta Ad Inquiry',
          subtitle: 'Lead clicks Instagram Story Ad & sends starter greeting',
          channel: 'Meta Ads'
        },
        {
          id: '2',
          type: 'action' as const,
          title: 'Action: AI Agent Consultation',
          subtitle: 'Captures budget, city tier, and preferred category',
          channel: 'Cocoon AI'
        },
        {
          id: '3',
          type: 'condition' as const,
          title: 'Condition: Budget Qualified > ₹50,000?',
          subtitle: 'Evaluates buyer intent threshold'
        },
        {
          id: '4a',
          type: 'action' as const,
          title: 'If YES: Route to Senior Sales Exec',
          subtitle: 'Pings sales rep on Slack + auto-books Google Meet slot',
          channel: 'Team Inbox'
        },
        {
          id: '4b',
          type: 'action' as const,
          title: 'If NO: Self-Serve WhatsApp Catalog',
          subtitle: 'Sends curated product catalog with starter pricing',
          channel: 'Catalog'
        },
        {
          id: '5',
          type: 'goal' as const,
          title: 'Goal: Qualified Opportunity',
          subtitle: '3.8x faster qualification rate than standard web forms',
          channel: 'CDP'
        }
      ]
    },
    vip_onboarding: {
      name: 'High-LTV Customer Loyalty Flow',
      trigger: 'Customer Lifetime Spend > ₹25,000',
      nodes: [
        {
          id: '1',
          type: 'trigger' as const,
          title: 'Trigger: Lifetime Value Milestone',
          subtitle: 'Total paid orders exceed ₹25,000 across channels',
          channel: 'Commerce CDP'
        },
        {
          id: '2',
          type: 'action' as const,
          title: 'Action: Assign VIP Gold Segment',
          subtitle: 'Unlocks concierge support queue & priority fulfillment',
          channel: 'Segmentation'
        },
        {
          id: '3',
          type: 'action' as const,
          title: 'Action: Founder WhatsApp Audio Note',
          subtitle: 'Delivers personalized thank-you audio & secret drop code',
          channel: 'WhatsApp API'
        },
        {
          id: '4',
          type: 'delay' as const,
          title: 'Delay: Wait 14 Days',
          subtitle: 'Before seasonal preview collection invite'
        },
        {
          id: '5',
          type: 'goal' as const,
          title: 'Goal: Repeat Order within 30d',
          subtitle: '+42% higher retention rate among VIP cohorts',
          channel: 'Analytics'
        }
      ]
    }
  };

  const currentWf = workflows[selectedWorkflow];

  const handleRunSimulation = () => {
    if (simulating) return;
    setSimulating(true);
    setActiveStep(0);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < currentWf.nodes.length) {
        setActiveStep(step);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setSimulating(false);
          setActiveStep(-1);
        }, 1200);
      }
    }, 700);
  };

  return (
    <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
      
      {/* Visual Canvas Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <h4 className="text-base sm:text-lg font-bold text-white">Visual Automation Canvas</h4>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Orchestrate conditional multichannel logic with zero code
          </p>
        </div>

        {/* Workflow Recipe Tabs */}
        <div className="flex items-center gap-2">
          <div className="flex p-1 bg-slate-900 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => { setSelectedWorkflow('cart_recovery'); setActiveStep(-1); }}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                selectedWorkflow === 'cart_recovery' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-400 hover:text-white'
              }`}
            >
              Cart Recovery
            </button>
            <button
              onClick={() => { setSelectedWorkflow('lead_qualify'); setActiveStep(-1); }}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                selectedWorkflow === 'lead_qualify' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-400 hover:text-white'
              }`}
            >
              Lead Qualification
            </button>
            <button
              onClick={() => { setSelectedWorkflow('vip_onboarding'); setActiveStep(-1); }}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                selectedWorkflow === 'vip_onboarding' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-400 hover:text-white'
              }`}
            >
              VIP Loyalty
            </button>
          </div>

          <button
            onClick={handleRunSimulation}
            disabled={simulating}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer whitespace-nowrap"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{simulating ? 'Simulating...' : 'Test Run Flow'}</span>
          </button>
        </div>
      </div>

      {/* Canvas Grid View */}
      <div className="py-8 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

        <div className="max-w-2xl mx-auto space-y-4 relative z-10">
          {currentWf.nodes.map((node, index) => {
            const isCurrentActive = activeStep === index;
            const isCompleted = activeStep > index;

            return (
              <div key={node.id} className="relative">
                {/* Node Box */}
                <div className={`p-4 rounded-2xl border transition-all duration-300 ${
                  isCurrentActive 
                    ? 'bg-indigo-950/80 border-indigo-500 ring-2 ring-indigo-500/50 shadow-lg scale-102' 
                    : isCompleted
                    ? 'bg-slate-900 border-emerald-500/60'
                    : 'bg-slate-900/90 border-slate-800 hover:border-slate-700'
                }`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold ${
                        node.type === 'trigger' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                        node.type === 'condition' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                        node.type === 'goal' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                        node.type === 'delay' ? 'bg-slate-700 text-slate-300' :
                        'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {node.type === 'trigger' && '⚡'}
                        {node.type === 'condition' && <GitFork className="w-4 h-4" />}
                        {node.type === 'goal' && <CheckCircle2 className="w-4 h-4" />}
                        {node.type === 'delay' && <Clock className="w-4 h-4" />}
                        {node.type === 'action' && (node.channel?.includes('WhatsApp') ? <MessageSquare className="w-4 h-4" /> : <Mail className="w-4 h-4" />)}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h5 className="text-sm font-semibold text-white">{node.title}</h5>
                          {node.channel && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                              {node.channel}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">{node.subtitle}</p>
                      </div>
                    </div>

                    <div className="shrink-0 text-right">
                      {isCurrentActive && (
                        <span className="text-[10px] font-mono text-indigo-400 font-bold animate-pulse">
                          EXECUTING...
                        </span>
                      )}
                      {isCompleted && (
                        <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> DONE (120ms)
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Connecting arrow */}
                {index < currentWf.nodes.length - 1 && (
                  <div className="flex justify-center my-2 text-slate-700">
                    <ArrowDown className={`w-4 h-4 transition-colors ${
                      isCompleted ? 'text-emerald-500' : isCurrentActive ? 'text-indigo-400' : 'text-slate-700'
                    }`} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Canvas Summary Footer */}
      <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span>Execution Engine:</span>
          <span className="text-slate-200 font-mono">Distributed Event Broker &lt; 180ms SLA</span>
        </div>
        <div className="flex items-center gap-3">
          <span>Zero polling</span>
          <span className="text-emerald-400">Real-time webhook triggers</span>
        </div>
      </div>

    </div>
  );
};
