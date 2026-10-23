import React, { useState } from 'react';
import { 
  Bot, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Database, 
  Wrench, 
  ShieldAlert, 
  UserCheck, 
  Sliders, 
  ShoppingBag, 
  CreditCard, 
  MessageSquare, 
  Zap, 
  ChevronRight,
  BrainCircuit,
  Search,
  Check
} from 'lucide-react';
import { PlatformPageId } from '../components/PlatformNavSwitcher';

interface AIAgentsPageProps {
  onOpenStartFree: () => void;
  onOpenBookDemo: () => void;
  onNavigateModule: (moduleId: PlatformPageId) => void;
}

export const AIAgentsPage: React.FC<AIAgentsPageProps> = ({
  onOpenStartFree,
  onOpenBookDemo,
  onNavigateModule
}) => {
  // Simulator State
  const [activeStep, setActiveStep] = useState<1 | 2 | 3 | 4 | 5>(2);
  const [agentGoal, setAgentGoal] = useState<'sales' | 'support' | 'booking'>('sales');

  return (
    <div className="bg-white text-slate-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-violet-50/70 via-purple-50/30 to-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#7c3aed0a_1px,transparent_1px),linear-gradient(to_bottom,#7c3aed0a_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-violet-600 tracking-wide uppercase">
            <Bot className="w-4 h-4" />
            <span>Autonomous Conversational AI</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-600">Context-Aware Commerce</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Copy */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Let AI handle the conversation. <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600">Let your team handle what matters</span>.
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Autonomous, brand-grounded AI agents trained on your product catalog, knowledge base, and business logic. Resolves inquiries, recommends products, creates carts, and escalates to humans with zero friction.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenStartFree}
                  className="px-7 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold text-base shadow-lg shadow-violet-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 cursor-pointer"
                >
                  <span>Build Your First AI Agent</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenBookDemo}
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200 shadow-sm transition-all hover:border-slate-300 flex items-center gap-2 cursor-pointer"
                >
                  <span>Watch Agent Simulation</span>
                </button>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-violet-600" />
                  <span>Zero-Hallucination Grounding</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-violet-600" />
                  <span>Real-Time Catalog Tool Calling</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-violet-600" />
                  <span>40+ Languages Supported</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Simulator: Live Dual-Panel AI Agent Control Room */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xl shadow-violet-900/10 overflow-hidden">
                
                {/* Header */}
                <div className="bg-slate-900 px-4 py-3 flex items-center justify-between text-white border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-violet-600 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold leading-none">CocoonMail Autonomous Agent v3</p>
                      <p className="text-[10px] text-slate-400">Grounded via Catalog &amp; Brand Docs</p>
                    </div>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 font-mono">Live Reasoning</span>
                </div>

                {/* Agent Config Bar */}
                <div className="bg-slate-50 border-b border-slate-200 p-3 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700">Agent Persona Goal:</span>
                  <div className="flex gap-1.5">
                    {(['sales', 'support', 'booking'] as const).map((goal) => (
                      <button
                        key={goal}
                        onClick={() => setAgentGoal(goal)}
                        className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                          agentGoal === goal ? 'bg-violet-600 text-white shadow-sm' : 'bg-white border border-slate-300 text-slate-600'
                        }`}
                      >
                        {goal === 'sales' ? 'Commerce Sales' : goal === 'support' ? '24/7 Support' : 'Bookings'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Interactive Simulated Trace */}
                <div className="p-4 bg-slate-950 text-slate-200 font-mono text-xs space-y-3">
                  
                  {/* Step 1: User Question */}
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                    <p className="text-[10px] text-emerald-400 uppercase font-sans font-bold">1. Customer WhatsApp Message</p>
                    <p className="text-white mt-1">&quot;I have sensitive skin and need a hydrating night cream under $50. What do you recommend?&quot;</p>
                  </div>

                  {/* Step 2: AI Internal Reasoning & Tool Calling */}
                  <div className="p-2.5 rounded bg-violet-950/40 border border-violet-800/50 space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] text-violet-300 uppercase font-sans font-bold">
                      <span className="flex items-center gap-1.5">
                        <BrainCircuit className="w-3.5 h-3.5 text-violet-400" />
                        2. AI Reasoning &amp; Tool Execution
                      </span>
                      <span className="text-slate-400">180ms</span>
                    </div>
                    <p className="text-[11px] text-slate-300">
                      Querying catalog: <span className="text-amber-300">search_products(&apos;skin_type:sensitive&apos;, &apos;category:night_cream&apos;, &apos;max_price:50&apos;)</span>
                    </p>
                    <p className="text-[11px] text-emerald-400">
                      Found 1 exact match: &quot;Ceramide Cloud Restorative Cream&quot; ($42.00, Stock: 28)
                    </p>
                  </div>

                  {/* Step 3: Conversational Output */}
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800 space-y-2">
                    <p className="text-[10px] text-blue-400 uppercase font-sans font-bold">3. Generated WhatsApp Response Card</p>
                    <p className="text-slate-200 leading-relaxed text-[11px]">
                      &quot;I recommend our <strong className="text-white">Ceramide Cloud Restorative Cream</strong> ($42.00). It&apos;s fragrance-free, clinically tested for eczema-prone skin, and strengthens your lipid barrier overnight.&quot;
                    </p>
                    <div className="p-2 bg-slate-800 rounded flex items-center justify-between font-sans">
                      <div>
                        <p className="font-bold text-white text-xs">Ceramide Cloud Cream</p>
                        <p className="text-[10px] text-slate-400">$42.00 · Free Express Shipping</p>
                      </div>
                      <button 
                        onClick={() => alert("Added to cart! Tap 'Pay' to simulate checkout.")}
                        className="px-3 py-1 bg-violet-600 hover:bg-violet-700 text-white rounded text-[11px] font-semibold cursor-pointer"
                      >
                        1-Tap Add to Cart
                      </button>
                    </div>
                  </div>
                </div>

                {/* Footer Trace */}
                <div className="bg-slate-900 px-4 py-2.5 text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-800">
                  <span>Human Escalation Rule: <strong className="text-amber-300">Sentiment &lt; 0.35 OR 2 failed attempts</strong></span>
                  <span className="text-emerald-400 font-medium">Confidence: 99.4%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 7 AGENT CONFIGURATION PILLARS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <h2 className="text-xs font-bold text-violet-600 uppercase tracking-wider">Agent Architecture</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Configured like a human specialist. Faster than any team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Goal */}
            <div className="p-6 rounded-2xl border border-slate-200 hover:border-violet-300 hover:shadow-md transition-all space-y-2">
              <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center font-bold">
                <Sliders className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">1. Explicit Agent Goal</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Define the primary objective: close orders, book demo calls, verify delivery addresses, or handle return authorizations.
              </p>
            </div>

            {/* Knowledge */}
            <div className="p-6 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all space-y-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                <Database className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">2. Grounded Knowledge Base</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sync PDF manuals, FAQs, website URLs, and return policies. AI only answers using your verified brand truth.
              </p>
            </div>

            {/* Tools */}
            <div className="p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <Wrench className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">3. Dynamic Tools &amp; APIs</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Empower AI to query real-time stock levels, check order shipping status via FedEx/DHL, and generate payment links.
              </p>
            </div>

            {/* Actions */}
            <div className="p-6 rounded-2xl border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all space-y-2">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">4. Autonomous Actions</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Create carts, apply promotion codes, update customer phone numbers, or mark orders for priority packing.
              </p>
            </div>

            {/* Escalation */}
            <div className="p-6 rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <UserCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">5. Human Escalation</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Detect negative sentiment or explicit requests for a representative. AI summarizes the conversation for the human agent.
              </p>
            </div>

            {/* Fallback */}
            <div className="p-6 rounded-2xl border border-slate-200 hover:border-rose-300 hover:shadow-md transition-all space-y-2">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">6. Safety &amp; Guardrails</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Block prompt injections, prevent competitors mention, enforce discount caps, and preserve user privacy.
              </p>
            </div>

            {/* Feedback Loop */}
            <div className="p-6 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">7. Continuous Feedback</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Review conversation transcripts, tag low-confidence replies, and continuously refine your knowledge base.
              </p>
            </div>

            {/* Multi-language */}
            <div className="p-6 rounded-2xl border border-slate-200 hover:border-cyan-300 hover:shadow-md transition-all space-y-2">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">40+ Languages &amp; Hinglish</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Seamlessly converse in English, Spanish, Hindi, Hinglish, Arabic, and French without complex translation trees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT CONNECTS TO THE REST OF COCOONMAIL */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-violet-200 bg-white rounded-3xl p-8 sm:p-12 shadow-sm">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-violet-600">Unified Architecture</span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 mb-3">
                How AI Agents connect to the rest of CocoonMail
              </h3>
              <p className="text-sm text-slate-600">
                Unlike generic ChatGPT plugins, CocoonMail AI Agents have direct access to your native catalog, payment checkout, and visual workflows.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <button
                onClick={() => onNavigateModule('catalog')}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:bg-amber-50/20 transition-all text-left group cursor-pointer"
              >
                <h5 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-amber-600">Product Catalog Tool</h5>
                <p className="text-xs text-slate-500">AI checks real-time inventory and sends interactive product action cards.</p>
              </button>

              <button
                onClick={() => onNavigateModule('payments')}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-teal-400 hover:bg-teal-50/20 transition-all text-left group cursor-pointer"
              >
                <h5 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-teal-600">1-Tap Payment Link</h5>
                <p className="text-xs text-slate-500">AI generates secure UPI / Card checkout links right when purchase intent peaks.</p>
              </button>

              <button
                onClick={() => onNavigateModule('whatsapp')}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/20 transition-all text-left group cursor-pointer"
              >
                <h5 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-emerald-600">WhatsApp Business Native</h5>
                <p className="text-xs text-slate-500">Operates 24/7 on your verified WhatsApp Business phone number.</p>
              </button>

              <button
                onClick={() => onNavigateModule('automation')}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/20 transition-all text-left group cursor-pointer"
              >
                <h5 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-indigo-600">Journey Node Trigger</h5>
                <p className="text-xs text-slate-500">AI conversations trigger workflow forks based on sentiment and purchase intent.</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-16 bg-violet-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Deploy your first autonomous brand agent in minutes.
          </h2>
          <p className="text-violet-100 max-w-xl mx-auto text-sm">
            Upload your FAQ or catalog URL, test in the interactive sandbox, and connect to WhatsApp with one click.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenStartFree}
              className="px-8 py-3.5 rounded-xl bg-white text-violet-700 hover:bg-violet-50 font-bold shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              Start Free AI Trial
            </button>
            <button
              onClick={onOpenBookDemo}
              className="px-7 py-3.5 rounded-xl bg-violet-700 hover:bg-violet-800 text-white font-semibold border border-violet-500/50 transition-colors cursor-pointer"
            >
              Request Custom Agent Architecture
            </button>
          </div>
          <p className="text-xs text-violet-200 font-medium">
            Includes 1,000 free AI conversation turns · No credit card required
          </p>
        </div>
      </section>

    </div>
  );
};
