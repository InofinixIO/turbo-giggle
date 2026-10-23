import React, { useState } from 'react';
import { 
  Bot, 
  Sparkles, 
  Database, 
  Cpu, 
  ShieldAlert, 
  UserCheck, 
  ThumbsUp, 
  Search, 
  ShoppingBag, 
  HelpCircle, 
  CreditCard, 
  ArrowRight,
  Zap,
  CheckCircle2,
  Terminal
} from 'lucide-react';

interface AIAgentsSectionProps {
  onOpenStartFree: () => void;
}

export const AIAgentsSection: React.FC<AIAgentsSectionProps> = ({ onOpenStartFree }) => {
  const [activeAction, setActiveAction] = useState<string>('Search catalog');
  const [simulatingCall, setSimulatingCall] = useState<boolean>(true);

  const actions = [
    { id: 'Search catalog', icon: Search, payload: 'catalog.search({ category: "running", budget_max: 5000 })' },
    { id: 'Recommend product', icon: ShoppingBag, payload: 'catalog.recommend({ id: "RS-4999", reason: "waterproof" })' },
    { id: 'Answer question', icon: HelpCircle, payload: 'kb.answer({ query: "office breathability vs rain" })' },
    { id: 'Create checkout', icon: CreditCard, payload: 'checkout.create({ sku: "RS-4999", upi_intent: true })' },
    { id: 'Escalate to human', icon: UserCheck, payload: 'agent.handoff({ queue: "support_tier2", notes: "custom fit" })' }
  ];

  return (
    <section id="ai-agents" className="py-24 bg-gradient-to-br from-violet-50/60 via-purple-50/40 to-indigo-50/50 border-t border-purple-100/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 text-violet-800 text-xs font-semibold mb-3">
            <Bot className="w-3.5 h-3.5 text-violet-600" />
            <span>Autonomous Conversational AI</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            AI that actually talks to your customers.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            No robotic decision trees or generic hallucinations. Cocoon AI is grounded in your actual catalog, returns policy, inventory levels, and order database.
          </p>
        </div>

        {/* 2-Column Showcase: Actual WhatsApp Conversation (Left) vs AI Configuration & Actions (Right) */}
        <div className="bg-white rounded-3xl border border-purple-200/90 shadow-2xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Actual WhatsApp Conversation */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-xs">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  Live WhatsApp Thread
                </span>
                <span className="text-violet-600 font-mono text-[11px] font-semibold">
                  Calling: {activeAction}
                </span>
              </div>

              {/* Chat Thread */}
              <div className="bg-[#efeae2] p-4 rounded-2xl space-y-3 min-h-[440px] flex flex-col justify-between">
                <div className="space-y-3 text-xs">
                  {/* Customer Question */}
                  <div className="flex justify-end">
                    <div className="bg-[#d9fdd3] text-slate-900 p-3 rounded-2xl rounded-tr-none max-w-[85%] shadow-xs">
                      <p>Do you have the Monsoon Running Shoes in UK 9 and can I pay with UPI?</p>
                      <span className="text-[9px] text-slate-400 float-right font-mono mt-1">11:15 AM</span>
                    </div>
                  </div>

                  {/* AI Agent Calling Action Banner */}
                  <div className="flex justify-center">
                    <div className="px-3 py-1.5 rounded-xl bg-violet-900 text-white text-[11px] font-mono flex items-center gap-2 shadow-sm animate-pulse">
                      <Cpu className="w-3.5 h-3.5 text-violet-300" />
                      <span>action_call: {activeAction}()</span>
                    </div>
                  </div>

                  {/* AI Agent Reply */}
                  <div className="flex justify-start">
                    <div className="bg-white text-slate-900 p-3.5 rounded-2xl rounded-tl-none max-w-[90%] shadow-xs space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-violet-700">Cocoon AI Concierge</span>
                        <span className="text-[9px] font-mono text-emerald-600">Inventory Verified</span>
                      </div>
                      <p>
                        Yes! We have <strong>4 pairs remaining in UK 9</strong>. And yes, you can complete the purchase via <strong>UPI in 1 tap</strong> right here without leaving WhatsApp.
                      </p>

                      <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                        <div>
                          <strong className="text-slate-900 text-xs block">HydroGlide Running Shoes</strong>
                          <span className="text-emerald-600 font-bold font-mono">₹4,999</span>
                        </div>
                        <button 
                          onClick={() => setActiveAction('Create checkout')}
                          className="px-3 py-1.5 bg-slate-900 text-white rounded-lg text-[11px] font-semibold cursor-pointer"
                        >
                          Checkout Now
                        </button>
                      </div>
                      <span className="text-[9px] text-slate-400 float-right font-mono">11:15 AM</span>
                    </div>
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-white/90 border border-slate-200 text-[11px] text-slate-600 flex items-center justify-between">
                  <span>Customer Satisfaction: <strong>99.2% Positive</strong></span>
                  <span className="text-emerald-600 font-mono font-semibold">140ms Latency</span>
                </div>
              </div>
            </div>

            {/* Right Column: AI Configuration Box */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Agent Architecture &amp; Governance
                </span>
                <span className="px-2 py-0.5 rounded bg-violet-100 text-violet-800 text-[10px] font-mono">
                  Autonomous Config
                </span>
              </div>

              {/* 6 AI Configuration Pillars */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block text-xs">1. Goal</span>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    Assist shoppers, match sizes, answer logistics inquiries, and drive conversion.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block text-xs">2. Knowledge</span>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    Shopify catalog, size charts, warehouse location ETA, and 48-hr exchange policy.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block text-xs">3. Actions</span>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    API function calling: search_catalog, create_checkout, send_video.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block text-xs">4. Fallback</span>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    If uncertainty &gt; 15%, politely clarify query or route to specialist.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block text-xs">5. Escalation</span>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    Transfer VIP inquiries or complex returns directly to team inbox with summary.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block text-xs">6. Feedback</span>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    Post-interaction satisfaction scoring and autonomous prompt refinement.
                  </p>
                </div>
              </div>

              {/* Action Buttons to Animate Action Call */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-800 block">
                  Select Action to Trigger:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {actions.map((act) => {
                    const Icon = act.icon;
                    const isSelected = activeAction === act.id;

                    return (
                      <button
                        key={act.id}
                        onClick={() => setActiveAction(act.id)}
                        className={`p-2.5 rounded-xl border text-xs font-medium flex items-center justify-between transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-violet-600 text-white border-violet-600 shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <Icon className="w-3.5 h-3.5" />
                          <span>{act.id}</span>
                        </span>
                        <ArrowRight className="w-3 h-3 opacity-70" />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action Execution Payload Code Box */}
              <div className="bg-slate-900 text-white rounded-xl p-3 font-mono text-[11px] space-y-1 border border-slate-800">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Active Function Call:</span>
                  <span className="text-emerald-400">200 OK</span>
                </div>
                <p className="text-indigo-300">
                  {actions.find(a => a.id === activeAction)?.payload}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenStartFree}
                  className="w-full py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-xs sm:text-sm font-semibold shadow-md transition-all cursor-pointer"
                >
                  Configure AI Agent for Your Store
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
