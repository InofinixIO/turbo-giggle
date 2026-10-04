import React, { useState } from 'react';
import { 
  Bot, 
  Sparkles, 
  Search, 
  ShoppingBag, 
  HelpCircle, 
  CreditCard, 
  UserCheck, 
  Settings, 
  Database, 
  Check, 
  Zap,
  ArrowRight
} from 'lucide-react';
import { ModalType } from '../../types';

interface AIAgentSectionProps {
  onOpenModal: (type: ModalType) => void;
}

export const AIAgentSection: React.FC<AIAgentSectionProps> = ({ onOpenModal }) => {
  const [activeAction, setActiveAction] = useState<'search' | 'recommend' | 'checkout' | 'escalate'>('recommend');

  return (
    <section id="ai-agents-section" className="py-20 md:py-32 bg-gradient-to-b from-violet-50/40 via-white to-slate-50 border-b border-violet-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100/80 text-violet-800 text-xs font-semibold mb-4">
            <Bot className="w-3.5 h-3.5" />
            <span>Autonomous Conversational Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight text-balance mb-4">
            AI that actually talks to your customers.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Ground your AI agent in your real product inventory, policy documents, and customer attributes. It takes actions, queries catalogs, and closes sales without hallucinations.
          </p>
        </div>

        {/* Dual Split Console: Left Chat Conversation, Right AI Configuration Brain */}
        <div className="bg-white rounded-3xl border border-violet-200 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left: Actual WhatsApp Live Conversation with Action Calling Badge */}
          <div className="lg:col-span-6 p-6 sm:p-8 bg-slate-50 border-r border-slate-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                    WA
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Live Customer Session #4928</div>
                    <div className="text-[10px] text-slate-500">Channel: WhatsApp Verified · Latency: 140ms</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-100 text-violet-700 font-bold">
                  AI AGENT ACTIVE
                </span>
              </div>

              {/* Chat Thread */}
              <div className="space-y-3 text-xs">
                {/* Customer */}
                <div className="flex justify-end">
                  <div className="bg-white text-slate-900 p-3 rounded-2xl rounded-tr-none border border-slate-200 shadow-sm max-w-[85%]">
                    Can I wear these for rainy trail marathons? And what is your return policy?
                    <div className="text-[9px] text-slate-400 text-right mt-1">10:48 AM</div>
                  </div>
                </div>

                {/* AI Internal Action Trigger Pill */}
                <div className="flex justify-center my-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-600 text-white text-[10px] font-bold shadow-md shadow-violet-500/20 animate-pulse">
                    <Zap className="w-3 h-3 text-amber-300" />
                    <span>Agent Invoked: Action = Knowledge_Base_Search + Catalog_Query</span>
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex justify-start">
                  <div className="bg-white text-slate-900 p-3.5 rounded-2xl rounded-tl-none border border-violet-200 shadow-sm max-w-[90%] space-y-2">
                    <p className="leading-relaxed">
                      Yes! The <strong>Velocity Pro Carbon Runner</strong> features water-resistant ripstop mesh and Vibram Megagrip outsoles, engineered for wet trails and road rain.
                    </p>
                    <p className="leading-relaxed text-slate-600">
                      Our return policy allows <strong>30-day hassle-free doorstep returns</strong> in original packaging.
                    </p>
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                      <span className="text-emerald-600 font-bold">100% Verified by Grounding</span>
                      <button 
                        onClick={() => setActiveAction('checkout')}
                        className="px-2.5 py-1 bg-violet-600 hover:bg-violet-700 text-white rounded font-bold"
                      >
                        Create Checkout Link
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 mt-6 flex items-center justify-between text-xs text-slate-500">
              <span>Customer Satisfaction Score:</span>
              <span className="font-bold text-slate-900">4.9 / 5.0 (99.2% Accuracy)</span>
            </div>
          </div>

          {/* Right: AI Configuration Studio Console */}
          <div className="lg:col-span-6 p-6 sm:p-8 bg-white flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-violet-600 uppercase tracking-wider">
                    Agent Studio Configuration
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                    Cocoon Commerce Intelligence Brain
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center">
                  <Settings className="w-4 h-4" />
                </div>
              </div>

              {/* 1. Goal */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-violet-600" />
                  <span>Agent Goal</span>
                </div>
                <p className="text-xs text-slate-800 font-medium">
                  "Guide customer product discovery, answer catalog & sizing questions accurately, generate instant payment links, and escalate complex support to human agents."
                </p>
              </div>

              {/* 2. Knowledge Base */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-blue-600" />
                  <span>Connected Knowledge Bases</span>
                </div>
                <div className="flex flex-wrap gap-2 text-[11px]">
                  <span className="px-2 py-0.5 bg-white border border-slate-200 rounded font-mono text-slate-700">Live Shopify / ERP Catalog</span>
                  <span className="px-2 py-0.5 bg-white border border-slate-200 rounded font-mono text-slate-700">Return & Shipping Policy (PDF)</span>
                  <span className="px-2 py-0.5 bg-white border border-slate-200 rounded font-mono text-slate-700">FAQ & Sizing Charts</span>
                </div>
              </div>

              {/* 3. Actions Palette */}
              <div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Configured Autonomous Actions
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button 
                    onClick={() => setActiveAction('search')}
                    className={`p-2 rounded-lg border text-left flex items-center gap-2 transition-all ${
                      activeAction === 'search' ? 'border-violet-500 bg-violet-50 font-bold text-violet-900' : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <Search className="w-3.5 h-3.5 text-violet-600 shrink-0" />
                    <span className="truncate">Search Catalog</span>
                  </button>

                  <button 
                    onClick={() => setActiveAction('recommend')}
                    className={`p-2 rounded-lg border text-left flex items-center gap-2 transition-all ${
                      activeAction === 'recommend' ? 'border-violet-500 bg-violet-50 font-bold text-violet-900' : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-violet-600 shrink-0" />
                    <span className="truncate">Recommend Product</span>
                  </button>

                  <button 
                    onClick={() => setActiveAction('checkout')}
                    className={`p-2 rounded-lg border text-left flex items-center gap-2 transition-all ${
                      activeAction === 'checkout' ? 'border-violet-500 bg-violet-50 font-bold text-violet-900' : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <CreditCard className="w-3.5 h-3.5 text-violet-600 shrink-0" />
                    <span className="truncate">Create Checkout</span>
                  </button>

                  <button 
                    onClick={() => setActiveAction('escalate')}
                    className={`p-2 rounded-lg border text-left flex items-center gap-2 transition-all ${
                      activeAction === 'escalate' ? 'border-violet-500 bg-violet-50 font-bold text-violet-900' : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <UserCheck className="w-3.5 h-3.5 text-violet-600 shrink-0" />
                    <span className="truncate">Escalate to Human</span>
                  </button>
                </div>
              </div>

              {/* 4. Fallback & Escalation Rules */}
              <div className="p-3 bg-violet-50/50 rounded-xl border border-violet-100 text-[11px] text-slate-600 space-y-1">
                <div className="font-bold text-violet-900">Escalation Guardrails</div>
                <div>Trigger human handover if sentiment &lt; 0.4 or user requests a human twice.</div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6">
              <button
                onClick={() => onOpenModal('start-free')}
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <span>Deploy Your First AI Agent</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
