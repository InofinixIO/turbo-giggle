import React, { useState } from 'react';
import { 
  MessageSquare, 
  ShieldCheck, 
  Bot, 
  ShoppingBag, 
  CreditCard, 
  Users, 
  UserCheck, 
  Send, 
  CheckCheck, 
  ArrowRight,
  Sparkles,
  Zap,
  BarChart3,
  GitFork,
  LayoutTemplate,
  Inbox
} from 'lucide-react';

interface WhatsAppSectionProps {
  onOpenStartFree: () => void;
  onOpenBookDemo: () => void;
}

export const WhatsAppSection: React.FC<WhatsAppSectionProps> = ({
  onOpenStartFree,
  onOpenBookDemo
}) => {
  // Step in the conversation simulation:
  // 0: Customer asks under 5000
  // 1: AI says found 3 options + product cards
  // 2: Customer asks for second one
  // 3: AI displays second product
  // 4: Customer says "I'll take it"
  // 5: AI shows checkout card
  // 6: AI -> Human Agent smooth handoff!
  const [chatStep, setChatStep] = useState<number>(0);

  const featureCards = [
    {
      title: 'WhatsApp Business API',
      desc: 'Official Meta BSP green tick verification, tier-1 direct telecom pipes, and enterprise throughput with 0% blockage.',
      icon: ShieldCheck,
      color: 'text-emerald-600 bg-emerald-50'
    },
    {
      title: 'Campaigns',
      desc: 'Broadcast to millions of opted-in customers with smart scheduling, personalized variables, and 98% open rates.',
      icon: Send,
      color: 'text-blue-600 bg-blue-50'
    },
    {
      title: 'Interactive Templates',
      desc: 'Quick-reply buttons, call-to-action cards, multi-product carousels, and rich media flows verified by Meta.',
      icon: LayoutTemplate,
      color: 'text-purple-600 bg-purple-50'
    },
    {
      title: 'Team Inbox',
      desc: 'Unified multiplayer inbox with role-based routing, private internal notes, and omnichannel contact history.',
      icon: Inbox,
      color: 'text-indigo-600 bg-indigo-50'
    },
    {
      title: 'AI Agents',
      desc: 'Trained on your knowledge base to answer inquiries, suggest products, check stock, and process transactions 24/7.',
      icon: Bot,
      color: 'text-violet-600 bg-violet-50'
    },
    {
      title: 'Automation',
      desc: 'Event-driven triggers from cart abandons, delivery milestones, and reorder cycles directly in chat.',
      icon: GitFork,
      color: 'text-teal-600 bg-teal-50'
    },
    {
      title: 'Analytics',
      desc: 'Attributed revenue, agent reply speed, read rates, and conversion metrics in real-time dashboards.',
      icon: BarChart3,
      color: 'text-amber-600 bg-amber-50'
    }
  ];

  return (
    <section id="whatsapp" className="py-24 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Official Meta Business Solution Provider</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            Turn WhatsApp into your customer experience.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Campaigns, conversations, automation and commerce—all connected.
          </p>
        </div>

        {/* Large WhatsApp Conversation UI + Interactive Steps */}
        <div className="bg-slate-50/70 rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-10 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Conversation Explanation & Step Controller */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider block mb-1">
                  Living Conversation Loop
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                  Natural AI sales with seamless human escalation.
                </h3>
                <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                  Notice how the AI agent answers questions, dynamically renders the catalog, creates the native checkout link, and transfers the thread to a live human advisor without losing any context.
                </p>
              </div>

              {/* Step indicator buttons */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Simulate Conversation Stage:
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    onClick={() => setChatStep(0)}
                    className={`p-2.5 rounded-xl border text-left font-medium transition-all cursor-pointer ${
                      chatStep === 0 ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs' : 'bg-white text-slate-700 border-slate-200'
                    }`}
                  >
                    1. Customer Query
                  </button>
                  <button
                    onClick={() => setChatStep(1)}
                    className={`p-2.5 rounded-xl border text-left font-medium transition-all cursor-pointer ${
                      chatStep === 1 ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs' : 'bg-white text-slate-700 border-slate-200'
                    }`}
                  >
                    2. AI Catalog Options
                  </button>
                  <button
                    onClick={() => setChatStep(2)}
                    className={`p-2.5 rounded-xl border text-left font-medium transition-all cursor-pointer ${
                      chatStep === 2 ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs' : 'bg-white text-slate-700 border-slate-200'
                    }`}
                  >
                    3. Select Product
                  </button>
                  <button
                    onClick={() => setChatStep(3)}
                    className={`p-2.5 rounded-xl border text-left font-medium transition-all cursor-pointer ${
                      chatStep === 3 ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs' : 'bg-white text-slate-700 border-slate-200'
                    }`}
                  >
                    4. In-Chat Checkout
                  </button>
                  <button
                    onClick={() => setChatStep(4)}
                    className={`col-span-2 p-2.5 rounded-xl border text-left font-medium transition-all cursor-pointer flex items-center justify-between ${
                      chatStep === 4 ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs' : 'bg-indigo-50/70 text-indigo-900 border-indigo-200'
                    }`}
                  >
                    <span>5. AI → Human Agent Handoff</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={onOpenStartFree}
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-sm font-semibold shadow-md transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Explore WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenBookDemo}
                  className="px-4 py-3 text-slate-700 hover:text-slate-900 text-sm font-medium transition-colors cursor-pointer"
                >
                  Book a Demo
                </button>
              </div>
            </div>

            {/* Simulated WhatsApp Phone Frame */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="w-full max-w-[460px] bg-[#efeae2] rounded-[32px] border-8 border-slate-900 shadow-2xl overflow-hidden flex flex-col min-h-[580px]">
                
                {/* WhatsApp Top Header Bar */}
                <div className="bg-[#008069] text-white p-3.5 flex items-center justify-between shadow-md">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-sm">
                      CM
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="font-bold text-sm leading-none">Cocoon Store</span>
                        <span className="text-[10px] text-white bg-emerald-700 px-1 rounded font-bold">✓</span>
                      </div>
                      <span className="text-[10px] text-emerald-100 block mt-0.5">
                        {chatStep === 4 ? 'Human Agent (Priya S.) Active' : 'Cocoon AI Concierge'}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono text-emerald-200 bg-emerald-900/60 px-2 py-0.5 rounded">
                    Official Meta API
                  </span>
                </div>

                {/* Conversation Stream */}
                <div className="p-4 space-y-3 flex-1 overflow-y-auto text-xs">
                  
                  {/* Message 1: Customer */}
                  <div className="flex justify-end">
                    <div className="bg-[#d9fdd3] text-slate-900 p-3 rounded-2xl rounded-tr-none max-w-[85%] shadow-xs space-y-1">
                      <p>Hi, I&apos;m looking for a running shoe under ₹5,000.</p>
                      <span className="text-[9px] text-slate-500 float-right font-mono flex items-center gap-0.5">
                        10:30 AM <CheckCheck className="w-3 h-3 text-blue-500" />
                      </span>
                    </div>
                  </div>

                  {/* Message 2: AI Responses & 3 Product Options */}
                  {chatStep >= 1 && (
                    <div className="flex justify-start animate-in fade-in slide-in-from-bottom-2 duration-200">
                      <div className="bg-white text-slate-900 p-3 rounded-2xl rounded-tl-none max-w-[90%] shadow-xs space-y-2">
                        <span className="text-[10px] font-bold text-emerald-700 block">Cocoon AI</span>
                        <p>I found three options that match your budget:</p>

                        <div className="space-y-1.5 pt-1">
                          <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                            <span className="font-medium text-slate-800">1. AeroSprint Trainer</span>
                            <span className="font-bold font-mono text-emerald-700">₹3,499</span>
                          </div>
                          <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-300 flex items-center justify-between">
                            <span className="font-bold text-emerald-900">2. HydroGlide Pro (Waterproof)</span>
                            <span className="font-bold font-mono text-emerald-700">₹4,999</span>
                          </div>
                          <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                            <span className="font-medium text-slate-800">3. UrbanStride Lite</span>
                            <span className="font-bold font-mono text-emerald-700">₹4,299</span>
                          </div>
                        </div>

                        <span className="text-[9px] text-slate-400 float-right font-mono">10:30 AM</span>
                      </div>
                    </div>
                  )}

                  {/* Message 3: Customer asks for second one */}
                  {chatStep >= 2 && (
                    <div className="flex justify-end animate-in fade-in slide-in-from-bottom-2 duration-200">
                      <div className="bg-[#d9fdd3] text-slate-900 p-3 rounded-2xl rounded-tr-none max-w-[85%] shadow-xs space-y-1">
                        <p>Show me the second one.</p>
                        <span className="text-[9px] text-slate-500 float-right font-mono flex items-center gap-0.5">
                          10:31 AM <CheckCheck className="w-3 h-3 text-blue-500" />
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Message 4: AI displays product */}
                  {chatStep >= 2 && (
                    <div className="flex justify-start animate-in fade-in slide-in-from-bottom-2 duration-200">
                      <div className="bg-white text-slate-900 p-3 rounded-2xl rounded-tl-none max-w-[90%] shadow-xs space-y-2">
                        <div className="h-28 rounded-xl bg-gradient-to-tr from-slate-900 to-indigo-950 p-3 flex flex-col justify-end text-white">
                          <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase">Option #2</span>
                          <strong className="text-sm">HydroGlide Pro Running Shoes</strong>
                          <span className="text-xs font-mono font-bold text-emerald-400">₹4,999</span>
                        </div>
                        <p className="text-[11px] text-slate-600 leading-snug">
                          3-layer waterproof membrane with dynamic arch support. 4 pairs left in size UK 9.
                        </p>
                        <span className="text-[9px] text-slate-400 float-right font-mono">10:31 AM</span>
                      </div>
                    </div>
                  )}

                  {/* Message 5: Customer says "I'll take it" */}
                  {chatStep >= 3 && (
                    <div className="flex justify-end animate-in fade-in slide-in-from-bottom-2 duration-200">
                      <div className="bg-[#d9fdd3] text-slate-900 p-3 rounded-2xl rounded-tr-none max-w-[85%] shadow-xs space-y-1">
                        <p>I&apos;ll take it.</p>
                        <span className="text-[9px] text-slate-500 float-right font-mono flex items-center gap-0.5">
                          10:32 AM <CheckCheck className="w-3 h-3 text-blue-500" />
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Message 6: AI provides checkout card */}
                  {chatStep >= 3 && (
                    <div className="flex justify-start animate-in fade-in slide-in-from-bottom-2 duration-200">
                      <div className="bg-white text-slate-900 p-3.5 rounded-2xl rounded-tl-none max-w-[92%] shadow-md border border-emerald-200 space-y-2.5">
                        <p className="font-semibold text-slate-800">Great. Here&apos;s your checkout.</p>
                        
                        <div className="p-3 bg-slate-900 text-white rounded-xl space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold">Order Summary</span>
                            <span className="text-emerald-400 font-mono font-bold">₹4,999</span>
                          </div>
                          <div className="text-[11px] text-slate-300 font-mono">
                            <p>HydroGlide Pro (Size UK 9)</p>
                            <p>Delivery: Free Express</p>
                          </div>
                          <button className="w-full py-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs">
                            <CreditCard className="w-3.5 h-3.5" />
                            <span>Pay ₹4,999 via UPI</span>
                          </button>
                        </div>
                        <span className="text-[9px] text-slate-400 float-right font-mono">10:32 AM</span>
                      </div>
                    </div>
                  )}

                  {/* Message 7: AI -> Human Agent smooth handoff */}
                  {chatStep >= 4 && (
                    <div className="animate-in fade-in duration-300 space-y-2">
                      <div className="flex justify-center">
                        <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-900 text-[10px] font-semibold flex items-center gap-1.5 border border-indigo-200 shadow-xs">
                          <UserCheck className="w-3 h-3 text-indigo-600" />
                          <span>AI transferred thread to Human Specialist (Priya S.)</span>
                        </span>
                      </div>

                      <div className="flex justify-start">
                        <div className="bg-white text-slate-900 p-3 rounded-2xl rounded-tl-none max-w-[90%] shadow-xs space-y-1">
                          <div className="flex items-center gap-1.5 text-[10px] font-bold text-indigo-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span>Priya S. (Customer Success Lead)</span>
                          </div>
                          <p>Hi Aarav! I&apos;ve verified your order and personally added complimentary waterproof spray to your shipment. Let me know if you need anything else!</p>
                          <span className="text-[9px] text-slate-400 float-right font-mono">10:33 AM</span>
                        </div>
                      </div>
                    </div>
                  )}

                </div>

                {/* WhatsApp Chat Footer Input */}
                <div className="bg-white p-2.5 border-t border-slate-200 flex items-center gap-2">
                  <div className="flex-1 bg-slate-100 rounded-full px-4 py-2 text-xs text-slate-400">
                    Type a message...
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#008069] text-white flex items-center justify-center">
                    <Send className="w-4 h-4" />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Seven WhatsApp Feature Cards */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-slate-900">
              The Complete WhatsApp Operating Stack
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featureCards.map((feat) => {
              const Icon = feat.icon;
              return (
                <div 
                  key={feat.title}
                  className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/80 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${feat.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">{feat.title}</h4>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
