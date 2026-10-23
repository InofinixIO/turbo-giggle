import React, { useState } from 'react';
import { 
  GitFork, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Play, 
  RotateCcw, 
  Clock, 
  Mail, 
  MessageSquare, 
  Bot, 
  Webhook, 
  Users, 
  Zap, 
  ChevronRight, 
  Check, 
  Split, 
  Target,
  ShoppingBag,
  CreditCard,
  Plus
} from 'lucide-react';
import { PlatformPageId } from '../components/PlatformNavSwitcher';

interface AutomationPageProps {
  onOpenStartFree: () => void;
  onOpenBookDemo: () => void;
  onNavigateModule: (moduleId: PlatformPageId) => void;
}

export const AutomationPage: React.FC<AutomationPageProps> = ({
  onOpenStartFree,
  onOpenBookDemo,
  onNavigateModule
}) => {
  // Interactive Simulation State
  const [simulationStep, setSimulationStep] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState(false);

  const startJourneySimulation = () => {
    setIsSimulating(true);
    setSimulationStep(1);

    setTimeout(() => setSimulationStep(2), 700);
    setTimeout(() => setSimulationStep(3), 1500);
    setTimeout(() => setSimulationStep(4), 2300);
    setTimeout(() => {
      setSimulationStep(5);
      setIsSimulating(false);
    }, 3100);
  };

  const resetJourney = () => {
    setSimulationStep(0);
    setIsSimulating(false);
  };

  return (
    <div className="bg-white text-slate-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-indigo-50/70 via-slate-50/50 to-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e50a_1px,transparent_1px),linear-gradient(to_bottom,#4f46e50a_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-indigo-600 tracking-wide uppercase">
            <GitFork className="w-4 h-4" />
            <span>Visual Customer Journey Automation</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-600">Omnichannel Canvas</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Copy */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Build customer journeys that <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600">run themselves</span>.
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Visual drag-and-drop workflow canvas connecting Email, WhatsApp, AI Agents, Meta Ads, and webhooks into unified adaptive customer journeys that react in real-time.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenStartFree}
                  className="px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 cursor-pointer"
                >
                  <span>Build Free Journey</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenBookDemo}
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200 shadow-sm transition-all hover:border-slate-300 flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Workflow Templates</span>
                </button>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  <span>Real-Time Condition Logic</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  <span>Cross-Channel Branching</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  <span>Goal &amp; Revenue Tracking</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Simulator: Visual Workflow Canvas */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xl shadow-indigo-900/10 overflow-hidden">
                
                {/* Canvas Toolbar */}
                <div className="bg-slate-900 px-4 py-3 flex items-center justify-between text-white border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-slate-300">Journey: Abandoned_Cart_Recovery_v4</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={startJourneySimulation}
                      disabled={isSimulating}
                      className="px-3 py-1 rounded bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50"
                    >
                      <Play className="w-3 h-3 fill-white" />
                      <span>{isSimulating ? 'Executing...' : 'Test Run Contact'}</span>
                    </button>
                    <button
                      onClick={resetJourney}
                      className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                      title="Reset trace"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Canvas Body */}
                <div className="p-6 bg-slate-50 relative overflow-hidden space-y-4">
                  
                  {/* Node 1: Trigger */}
                  <div className={`p-3.5 rounded-xl border transition-all ${
                    simulationStep >= 1 ? 'bg-amber-50 border-amber-400 ring-2 ring-amber-400/20 shadow-md' : 'bg-white border-slate-200 shadow-sm'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-md bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold">T</span>
                        <div>
                          <p className="text-xs font-bold text-slate-900">Trigger: Cart Abandoned &gt; $50</p>
                          <p className="text-[11px] text-slate-500">Contact: david@example.com · Cart Value: $85.00</p>
                        </div>
                      </div>
                      {simulationStep >= 1 && <span className="text-[10px] font-mono text-emerald-600 font-bold">Fired</span>}
                    </div>
                  </div>

                  {/* Connector Line */}
                  <div className="w-0.5 h-4 bg-slate-300 mx-auto" />

                  {/* Node 2: Smart Delay */}
                  <div className={`p-3.5 rounded-xl border transition-all ${
                    simulationStep >= 2 ? 'bg-blue-50 border-blue-400 ring-2 ring-blue-400/20 shadow-md' : 'bg-white border-slate-200 shadow-sm'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-md bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">
                          <Clock className="w-3.5 h-3.5" />
                        </span>
                        <div>
                          <p className="text-xs font-bold text-slate-900">Wait 1 Hour (Quiet Hours Respected)</p>
                          <p className="text-[11px] text-slate-500">Resume window: 10:00 AM - 8:00 PM local time</p>
                        </div>
                      </div>
                      {simulationStep >= 2 && <span className="text-[10px] font-mono text-emerald-600 font-bold">Elapsed</span>}
                    </div>
                  </div>

                  {/* Connector Line */}
                  <div className="w-0.5 h-4 bg-slate-300 mx-auto" />

                  {/* Node 3: True / False Condition Branch */}
                  <div className={`p-3.5 rounded-xl border transition-all ${
                    simulationStep >= 3 ? 'bg-indigo-50 border-indigo-400 ring-2 ring-indigo-400/20 shadow-md' : 'bg-white border-slate-200 shadow-sm'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-md bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold">
                          <Split className="w-3.5 h-3.5" />
                        </span>
                        <div>
                          <p className="text-xs font-bold text-slate-900">Condition: Is WhatsApp Number Opted In?</p>
                          <p className="text-[11px] text-slate-500">Evaluates channel reachability</p>
                        </div>
                      </div>
                      {simulationStep >= 3 && <span className="text-[10px] font-mono text-indigo-700 font-bold">Branch: TRUE</span>}
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px] pt-2 border-t border-slate-200/80">
                      <div className="p-2 bg-emerald-50 rounded border border-emerald-200 text-emerald-900 font-medium">
                        ✓ YES: Send WhatsApp Interactive Template (10% off)
                      </div>
                      <div className="p-2 bg-slate-100 rounded border border-slate-200 text-slate-500">
                        ✗ NO: Fallback to HTML Recovery Email
                      </div>
                    </div>
                  </div>

                  {/* Connector Line */}
                  <div className="w-0.5 h-4 bg-slate-300 mx-auto" />

                  {/* Node 4: Action & Goal */}
                  <div className={`p-3.5 rounded-xl border transition-all ${
                    simulationStep >= 4 ? 'bg-emerald-50 border-emerald-400 ring-2 ring-emerald-400/20 shadow-md' : 'bg-white border-slate-200 shadow-sm'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">
                          <Target className="w-3.5 h-3.5" />
                        </span>
                        <div>
                          <p className="text-xs font-bold text-slate-900">Action: Dispatch WhatsApp Message + AI Sizing Assistant</p>
                          <p className="text-[11px] text-slate-500">Goal Met: Order Completed ($85.00 Recovered)</p>
                        </div>
                      </div>
                      {simulationStep >= 4 && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500 text-white">
                          Goal Converted!
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Canvas Footer */}
                <div className="bg-slate-900 px-4 py-2 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Engine: <strong className="text-white">Distributed Event State Machine</strong></span>
                  <span className="text-emerald-400 font-medium">Throughput: 50,000 events/sec</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPREHENSIVE TRIGGERS & ACTIONS GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <h2 className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Building Blocks</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Six Triggers. Eight Autonomous Actions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Left: 6 Triggers */}
            <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50/50 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">TR</span>
                <h3 className="text-xl font-bold text-slate-900">Event Triggers</h3>
              </div>
              <p className="text-xs text-slate-500 mb-4">Journeys start the millisecond any of these real-time signals fire:</p>

              <div className="space-y-3">
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                  <p className="font-bold text-slate-900">1. Contact Created or Updated</p>
                  <p className="text-slate-500 text-[11px]">User registers on website, submits lead magnet, or updates VIP tier.</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                  <p className="font-bold text-slate-900">2. Campaign Engagement</p>
                  <p className="text-slate-500 text-[11px]">Email opened, specific link clicked, or email unopened after X hours.</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                  <p className="font-bold text-slate-900">3. Purchase &amp; Commerce Event</p>
                  <p className="text-slate-500 text-[11px]">Order placed, checkout abandoned, subscription renewed, or payment failed.</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                  <p className="font-bold text-slate-900">4. WhatsApp Inbound Interaction</p>
                  <p className="text-slate-500 text-[11px]">Customer sends message, clicks quick-reply button, or shares location.</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                  <p className="font-bold text-slate-900">5. Custom API Webhook Trigger</p>
                  <p className="text-slate-500 text-[11px]">Custom application event pushed via REST API with arbitrary JSON payload.</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                  <p className="font-bold text-slate-900">6. Segment Entry / Exit</p>
                  <p className="text-slate-500 text-[11px]">Customer automatically qualifies or disqualifies for a dynamic CDP filter.</p>
                </div>
              </div>
            </div>

            {/* Right: 8 Actions */}
            <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50/50 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">AC</span>
                <h3 className="text-xl font-bold text-slate-900">Workflow Actions</h3>
              </div>
              <p className="text-xs text-slate-500 mb-4">Execute across any channel or external service in exact choreography:</p>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <Mail className="w-4 h-4 text-blue-600 mb-1" />
                  <p className="font-bold text-slate-900">Send Email</p>
                  <p className="text-slate-500 text-[10px]">Responsive template with Liquid personalization.</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <MessageSquare className="w-4 h-4 text-emerald-600 mb-1" />
                  <p className="font-bold text-slate-900">Send WhatsApp</p>
                  <p className="text-slate-500 text-[10px]">Interactive buttons and product action cards.</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <Bot className="w-4 h-4 text-violet-600 mb-1" />
                  <p className="font-bold text-slate-900">Assign to AI</p>
                  <p className="text-slate-500 text-[10px]">Initialize autonomous conversational agent.</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <Clock className="w-4 h-4 text-amber-600 mb-1" />
                  <p className="font-bold text-slate-900">Wait / Delay</p>
                  <p className="text-slate-500 text-[10px]">Smart timer with quiet-hours protection.</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <Split className="w-4 h-4 text-indigo-600 mb-1" />
                  <p className="font-bold text-slate-900">Condition Fork</p>
                  <p className="text-slate-500 text-[10px]">Multi-branch if/else behavioral rules.</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <Webhook className="w-4 h-4 text-teal-600 mb-1" />
                  <p className="font-bold text-slate-900">Call Webhook</p>
                  <p className="text-slate-500 text-[10px]">POST data to CRM, ERP, or internal server.</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <Users className="w-4 h-4 text-cyan-600 mb-1" />
                  <p className="font-bold text-slate-900">Update Segment</p>
                  <p className="text-slate-500 text-[10px]">Apply tags and update customer attributes.</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <Target className="w-4 h-4 text-rose-600 mb-1" />
                  <p className="font-bold text-slate-900">Conversion Goal</p>
                  <p className="text-slate-500 text-[10px]">Track ROI and automatically exit completed contacts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT CONNECTS TO THE REST OF COCOONMAIL */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-indigo-200 bg-white rounded-3xl p-8 sm:p-12 shadow-sm">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Unified Orchestration</span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 mb-3">
                How Automation connects to the rest of CocoonMail
              </h3>
              <p className="text-sm text-slate-600">
                Automation is the central nervous system of CocoonMail. It connects your ad spend, customer segments, email newsletters, WhatsApp chats, and payments into one continuous lifecycle loop.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <button
                onClick={() => onNavigateModule('email')}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-blue-50/20 transition-all text-left group cursor-pointer"
              >
                <h5 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-blue-600">Email Module</h5>
                <p className="text-xs text-slate-500">Dispatch dynamic campaigns and branch on open/click events.</p>
              </button>

              <button
                onClick={() => onNavigateModule('whatsapp')}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/20 transition-all text-left group cursor-pointer"
              >
                <h5 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-emerald-600">WhatsApp Module</h5>
                <p className="text-xs text-slate-500">Send high-urgency notifications and interactive action templates.</p>
              </button>

              <button
                onClick={() => onNavigateModule('ai-agents')}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-violet-400 hover:bg-violet-50/20 transition-all text-left group cursor-pointer"
              >
                <h5 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-violet-600">AI Agents</h5>
                <p className="text-xs text-slate-500">Hand off engaged prospects to AI for instant consultative sales.</p>
              </button>

              <button
                onClick={() => onNavigateModule('payments')}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-teal-400 hover:bg-teal-50/20 transition-all text-left group cursor-pointer"
              >
                <h5 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-teal-600">Payments &amp; Checkout</h5>
                <p className="text-xs text-slate-500">Listen for payment captured webhooks and complete conversion goals.</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Stop running manual campaigns. Put your customer journeys on autopilot.
          </h2>
          <p className="text-indigo-100 max-w-xl mx-auto text-sm">
            Choose from 50+ pre-built journey templates for e-commerce, SaaS, healthcare, and education.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenStartFree}
              className="px-8 py-3.5 rounded-xl bg-white text-indigo-700 hover:bg-indigo-50 font-bold shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              Launch Your First Journey Free
            </button>
            <button
              onClick={onOpenBookDemo}
              className="px-7 py-3.5 rounded-xl bg-indigo-700 hover:bg-indigo-800 text-white font-semibold border border-indigo-500/50 transition-colors cursor-pointer"
            >
              Request Workflow Consultation
            </button>
          </div>
          <p className="text-xs text-indigo-200 font-medium">
            Unlimited automated steps · Visual drag-and-drop · No coding required
          </p>
        </div>
      </section>

    </div>
  );
};
