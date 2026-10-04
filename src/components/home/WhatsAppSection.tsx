import React, { useState } from 'react';
import { 
  MessageSquare, 
  Check, 
  CheckCheck, 
  ShoppingBag, 
  CreditCard, 
  UserCheck, 
  ArrowRight, 
  Send, 
  Sparkles,
  Users,
  Layers,
  BarChart3,
  Workflow,
  ShieldCheck,
  Bot
} from 'lucide-react';
import { ModalType } from '../../types';

interface WhatsAppSectionProps {
  onOpenModal: (type: ModalType) => void;
}

export const WhatsAppSection: React.FC<WhatsAppSectionProps> = ({ onOpenModal }) => {
  // Conversation progression state: 0 to 4
  const [dialogueStep, setDialogueStep] = useState(3);
  const [handoffActive, setHandoffActive] = useState(false);

  const featureCards = [
    { title: 'WhatsApp Business API', desc: 'Direct Meta Cloud API integration with unlimited messaging tiers & green badge verification.', icon: ShieldCheck },
    { title: 'Broadcast Campaigns', desc: 'Send personalized rich media broadcasts with 98% open rates and instant CTAs.', icon: Send },
    { title: 'Interactive Templates', desc: 'Pre-approved quick replies, multi-product lists, and call-to-action button messages.', icon: Layers },
    { title: 'Shared Team Inbox', desc: 'Collaborate with your support team, assign conversations, and write private internal notes.', icon: Users },
    { title: 'Autonomous AI Agents', desc: 'LLM agents trained on your product catalog that search, answer, and close sales 24/7.', icon: Bot },
    { title: 'Visual Automation', desc: 'Trigger WhatsApp messages from abandoned carts, website events, or CRM stage changes.', icon: Workflow },
    { title: 'Deep Analytics', desc: 'Track delivery, read receipts, button click-throughs, and revenue generated per message.', icon: BarChart3 },
  ];

  return (
    <section id="whatsapp-section" className="py-20 md:py-32 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Official Meta Business Solution Partner</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight text-balance mb-4">
            Turn WhatsApp into your customer experience.
          </h2>
          <p className="text-base sm:text-xl text-slate-600 leading-relaxed text-balance">
            Campaigns, conversations, automation and commerce—all connected.
          </p>
        </div>

        {/* Big Interactive WhatsApp Experience Arena */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200/80 p-6 md:p-10 shadow-xl mb-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Interactive Dialogue Controller & Features */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                Full-Funnel Conversational Commerce
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                From Query to Payment in 4 Messages
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Watch how a casual inquiry converts directly into an authenticated order with native catalog lookups and automated human escalation.
              </p>
            </div>

            {/* Conversation Step Scrubbers */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-700">Simulate Dialogue Progression:</div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => { setDialogueStep(1); setHandoffActive(false); }}
                  className={`p-2.5 rounded-xl text-left border text-xs font-semibold transition-all ${
                    dialogueStep === 1 ? 'bg-emerald-600 text-white border-emerald-600 shadow-md' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  1. Budget Query
                </button>
                <button
                  onClick={() => { setDialogueStep(2); setHandoffActive(false); }}
                  className={`p-2.5 rounded-xl text-left border text-xs font-semibold transition-all ${
                    dialogueStep === 2 ? 'bg-emerald-600 text-white border-emerald-600 shadow-md' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  2. 3 Options Found
                </button>
                <button
                  onClick={() => { setDialogueStep(3); setHandoffActive(false); }}
                  className={`p-2.5 rounded-xl text-left border text-xs font-semibold transition-all ${
                    dialogueStep === 3 ? 'bg-emerald-600 text-white border-emerald-600 shadow-md' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  3. Select & Checkout
                </button>
                <button
                  onClick={() => { setDialogueStep(3); setHandoffActive(true); }}
                  className={`p-2.5 rounded-xl text-left border text-xs font-semibold transition-all ${
                    handoffActive ? 'bg-violet-600 text-white border-violet-600 shadow-md' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  4. Human Agent Handoff
                </button>
              </div>
            </div>

            {/* Human Agent Handoff Highlight Box */}
            <div className={`p-4 rounded-2xl border transition-all ${
              handoffActive 
                ? 'bg-violet-50 border-violet-300 ring-2 ring-violet-500/20' 
                : 'bg-white border-slate-200'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center font-bold text-xs">
                    PS
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Seamless AI → Human Escalation</div>
                    <div className="text-[11px] text-slate-500">Agent Priya S. received chat history & context</div>
                  </div>
                </div>
                <button
                  onClick={() => setHandoffActive(!handoffActive)}
                  className="px-2.5 py-1 text-[11px] font-semibold text-violet-700 bg-violet-100 rounded-lg hover:bg-violet-200"
                >
                  {handoffActive ? 'Active' : 'Trigger Handoff'}
                </button>
              </div>
            </div>

            <div>
              <button
                onClick={() => onOpenModal('start-free')}
                className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 transition-all"
              >
                <span>Explore WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Realistic WhatsApp Phone Mockup */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl border-[6px] border-slate-800 overflow-hidden">
              
              {/* WhatsApp App Header */}
              <div className="bg-[#075E54] text-white p-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
                      👟
                    </div>
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#075E54]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold flex items-center gap-1">
                      <span>CocoonFootwear Official</span>
                      <CheckCheck className="w-3.5 h-3.5 text-emerald-300" />
                    </div>
                    <div className="text-[10px] text-emerald-100">
                      {handoffActive ? 'Priya S. (Support Agent) joined' : 'Verified Business Account · AI Active'}
                    </div>
                  </div>
                </div>
                <div className="text-[11px] text-emerald-100 font-mono">10:45 AM</div>
              </div>

              {/* Chat Thread Container with WhatsApp Wallpaper */}
              <div className="bg-[#EFEAE2] p-4 min-h-[460px] space-y-3.5 text-xs">
                
                {/* Security encryption pill */}
                <div className="text-center">
                  <span className="inline-block bg-[#FCF4CB] text-slate-700 text-[10px] px-2.5 py-1 rounded-md shadow-sm">
                    🔒 Messages and calls are end-to-end encrypted.
                  </span>
                </div>

                {/* 1. Customer: "Hi, I'm looking for a running shoe under ₹5,000." */}
                {dialogueStep >= 1 && (
                  <div className="flex justify-end animate-in fade-in slide-in-from-bottom-2 duration-200">
                    <div className="bg-[#E7FFDB] text-slate-900 p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[85%]">
                      <p>Hi, I'm looking for a running shoe under ₹5,000.</p>
                      <div className="text-[9px] text-slate-400 text-right mt-1 flex items-center justify-end gap-1">
                        <span>10:41 AM</span>
                        <CheckCheck className="w-3 h-3 text-blue-500" />
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. AI: "I found three options that match your budget." */}
                {dialogueStep >= 2 && (
                  <div className="flex justify-start animate-in fade-in slide-in-from-bottom-2 duration-200">
                    <div className="bg-white text-slate-900 p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[90%] space-y-2">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-violet-600">
                        <Sparkles className="w-3 h-3" />
                        <span>Cocoonmail AI Assistant</span>
                      </div>
                      <p>I found three options that match your budget:</p>
                      
                      {/* Product Carousel / list */}
                      <div className="space-y-1.5 pt-1">
                        <div className="p-2 bg-slate-50 rounded-lg border border-slate-100 flex justify-between items-center text-[11px]">
                          <div>
                            <span className="font-bold text-slate-800">1. Strider Pulse Lite</span>
                            <div className="text-[10px] text-slate-400">Road running · ₹3,799</div>
                          </div>
                          <span className="font-semibold text-slate-700">₹3,799</span>
                        </div>

                        <div className="p-2 bg-blue-50/70 rounded-lg border border-blue-200 flex justify-between items-center text-[11px]">
                          <div>
                            <span className="font-bold text-blue-900">2. Velocity Pro Carbon Runner</span>
                            <div className="text-[10px] text-blue-600">Marathon foam · Best Seller</div>
                          </div>
                          <span className="font-bold text-blue-700">₹4,999</span>
                        </div>

                        <div className="p-2 bg-slate-50 rounded-lg border border-slate-100 flex justify-between items-center text-[11px]">
                          <div>
                            <span className="font-bold text-slate-800">3. AeroGlide Speed UK</span>
                            <div className="text-[10px] text-slate-400">Trail grip · ₹4,499</div>
                          </div>
                          <span className="font-semibold text-slate-700">₹4,499</span>
                        </div>
                      </div>

                      <div className="text-[9px] text-slate-400 text-right">10:42 AM</div>
                    </div>
                  </div>
                )}

                {/* 3. Customer: "Show me the second one." & "I'll take it." */}
                {dialogueStep >= 3 && (
                  <>
                    <div className="flex justify-end animate-in fade-in slide-in-from-bottom-2 duration-200">
                      <div className="bg-[#E7FFDB] text-slate-900 p-2.5 rounded-2xl rounded-tr-none shadow-sm max-w-[80%]">
                        <p>Show me the second one. I'll take it!</p>
                        <div className="text-[9px] text-slate-400 text-right mt-0.5">10:43 AM</div>
                      </div>
                    </div>

                    {/* AI: Great. Here's your checkout + Payment Card */}
                    <div className="flex justify-start animate-in fade-in slide-in-from-bottom-2 duration-200">
                      <div className="bg-white text-slate-900 p-3 rounded-2xl rounded-tl-none shadow-md max-w-[90%] space-y-2 border border-slate-100">
                        <p>Great! Here's your instant checkout for <strong>Velocity Pro Carbon Runner</strong>:</p>
                        
                        {/* Native Payment Sheet Card */}
                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-[11px] space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-slate-900">Total: ₹4,999</span>
                            <span className="px-1.5 py-0.5 bg-emerald-100 text-emerald-800 text-[9px] font-bold rounded">Instant Order</span>
                          </div>
                          <button className="w-full py-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-lg flex items-center justify-center gap-1.5 shadow-sm">
                            <CreditCard className="w-3.5 h-3.5" />
                            <span>Pay ₹4,999 via UPI / Card</span>
                          </button>
                        </div>
                        <div className="text-[9px] text-slate-400 text-right">10:44 AM</div>
                      </div>
                    </div>
                  </>
                )}

                {/* Smooth Handoff Note */}
                {handoffActive && (
                  <div className="bg-violet-100 border border-violet-200 p-2.5 rounded-xl text-[11px] text-violet-900 flex items-center gap-2 animate-in fade-in duration-300">
                    <UserCheck className="w-4 h-4 text-violet-700 shrink-0" />
                    <div>
                      <span className="font-bold">Human Agent Joined:</span> Priya S. took over the conversation with full cart and order history.
                    </div>
                  </div>
                )}

              </div>

            </div>
          </div>

        </div>

        {/* 7 WhatsApp Feature Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featureCards.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div 
                key={idx} 
                className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-emerald-300 hover:shadow-md transition-all group"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-1">
                  {feat.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
