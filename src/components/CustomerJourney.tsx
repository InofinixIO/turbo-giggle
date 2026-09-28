import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowDown, 
  CheckCircle, 
  Zap, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft,
  Smartphone,
  Mail,
  Bot,
  ShoppingBag,
  CreditCard,
  BarChart3,
  Users,
  Megaphone,
  GitFork,
  Repeat
} from 'lucide-react';
import { JOURNEY_STEPS } from '../data/mockData';
import { JourneyStep } from '../types';

interface CustomerJourneyProps {
  onOpenStartFree: () => void;
}

export const CustomerJourney: React.FC<CustomerJourneyProps> = ({ onOpenStartFree }) => {
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);
  const currentStep = JOURNEY_STEPS[selectedStepIndex];

  const handlePrev = () => {
    setSelectedStepIndex((prev) => (prev > 0 ? prev - 1 : JOURNEY_STEPS.length - 1));
  };

  const handleNext = () => {
    setSelectedStepIndex((prev) => (prev < JOURNEY_STEPS.length - 1 ? prev + 1 : 0));
  };

  const getStepIcon = (id: string) => {
    switch (id) {
      case 'meta-ads': return Megaphone;
      case 'lead': return Sparkles;
      case 'segment': return Users;
      case 'message': return Mail;
      case 'ai-conversation': return Bot;
      case 'catalog': return ShoppingBag;
      case 'payment': return CreditCard;
      case 'analytics': return BarChart3;
      case 'automation': return GitFork;
      case 'next-campaign': return Repeat;
      default: return Zap;
    }
  };

  return (
    <section id="journey" className="py-24 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 block mb-2">
            The Central Operating System
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            From first ad impression to repeat purchase in 10 seamless steps.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Most tools drop the ball between clicks, conversations, and checkouts. CocoonMail links your entire customer journey into one continuous, intelligent loop.
          </p>
        </div>

        {/* 10-Step Interactive Horizontal Flow Bar */}
        <div className="mb-10 overflow-x-auto pb-4 pt-1 scrollbar-none">
          <div className="flex items-center gap-1.5 min-w-[940px] px-1">
            {JOURNEY_STEPS.map((step, idx) => {
              const isSelected = selectedStepIndex === idx;
              const isPast = selectedStepIndex > idx;
              const Icon = getStepIcon(step.id);

              return (
                <React.Fragment key={step.id}>
                  <button
                    onClick={() => setSelectedStepIndex(idx)}
                    className={`flex flex-col items-center gap-2 p-2.5 rounded-xl transition-all cursor-pointer text-center relative group min-w-[84px] ${
                      isSelected
                        ? 'bg-slate-900 text-white shadow-md scale-105 z-10'
                        : isPast
                        ? 'bg-indigo-50/80 text-indigo-900 hover:bg-indigo-100'
                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                      isSelected 
                        ? 'bg-indigo-600 text-white' 
                        : isPast 
                        ? 'bg-indigo-200/80 text-indigo-700' 
                        : 'bg-white text-slate-500 shadow-xs'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-semibold leading-tight line-clamp-1">
                      {step.label}
                    </span>
                    <span className="text-[9px] font-mono opacity-70">
                      Step {step.stepNumber}
                    </span>
                  </button>

                  {idx < JOURNEY_STEPS.length - 1 && (
                    <div className="shrink-0 flex items-center justify-center text-slate-300">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Interactive Step Showcase Card */}
        <div className="bg-slate-50/80 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Story & Philosophy Side: What happens to the customer? */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-100 text-indigo-800">
                  STAGE 0{currentStep.stepNumber} OF 10
                </span>
                <span className="text-xs text-slate-500">
                  Channel: <strong className="text-slate-700">{currentStep.channel}</strong>
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                  {currentStep.title}
                </h3>
                <p className="mt-2 text-slate-600 text-base leading-relaxed">
                  {currentStep.shortDesc}
                </p>
              </div>

              {/* The "What happens to the customer?" Box (Master Creative Direction requirement) */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  What happens to the customer?
                </div>
                <p className="text-sm text-slate-800 font-medium leading-relaxed italic">
                  &ldquo;{currentStep.whatHappensToCustomer}&rdquo;
                </p>
                <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100">
                  <span>Customer persona: <strong className="text-slate-800">{currentStep.customerName}</strong></span>
                  <span className="text-indigo-600 font-medium">Real-time sync</span>
                </div>
              </div>

              {/* Metric & Navigation Controls */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">{currentStep.metricLabel}</span>
                    <span className="text-2xl font-bold text-slate-900 tracking-tight font-mono">
                      {currentStep.metricValue}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-colors"
                    aria-label="Previous Step"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-colors"
                    aria-label="Next Step"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={onOpenStartFree}
                    className="ml-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all"
                  >
                    Try this flow
                  </button>
                </div>
              </div>

            </div>

            {/* Realistic UI Simulation Side */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-5 sm:p-6 min-h-[380px] flex flex-col justify-between">
                
                {/* Simulated Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs text-slate-500 font-mono">
                  <span className="flex items-center gap-1.5 text-slate-700 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    {currentStep.channel}
                  </span>
                  <span>ID: step_{currentStep.id}</span>
                </div>

                {/* Simulated Content Card based on stage */}
                <div className="my-auto py-4">
                  {currentStep.sampleUiType === 'ad' && (
                    <div className="space-y-3">
                      <div className="rounded-xl border border-slate-200 overflow-hidden bg-slate-50">
                        <div className="p-3 bg-gradient-to-r from-pink-500 via-rose-500 to-indigo-600 text-white">
                          <span className="text-[10px] font-bold uppercase tracking-wider block opacity-80">Sponsored Instagram Reel</span>
                          <p className="font-semibold text-sm">Monsoon Waterproof Sneaker Drop 2026</p>
                        </div>
                        <div className="p-4 space-y-2 text-xs">
                          <p className="text-slate-600">Never get caught in sudden downpours with soaked socks again. Rated 4.9/5 by 12,000+ commuters.</p>
                          <div className="pt-2 flex items-center justify-between">
                            <span className="text-slate-500 font-mono text-[11px]">Click-to-WhatsApp Enabled</span>
                            <span className="px-3 py-1.5 bg-[#25D366] text-white rounded-lg font-bold text-xs flex items-center gap-1.5 shadow-xs">
                              <Smartphone className="w-3.5 h-3.5" /> Chat on WhatsApp
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep.sampleUiType === 'lead' && (
                    <div className="bg-slate-900 text-white rounded-xl p-4 font-mono text-xs space-y-3">
                      <div className="text-emerald-400 font-semibold flex items-center justify-between">
                        <span>● Instant Lead Handshake</span>
                        <span>0ms Form Fill</span>
                      </div>
                      <div className="space-y-1.5 text-slate-300 text-[11px] bg-slate-950 p-3 rounded-lg border border-slate-800">
                        <p><span className="text-slate-500">phone:</span> +91 98201 42100 (WhatsApp Verified)</p>
                        <p><span className="text-slate-500">profile_name:</span> Aarav Sharma</p>
                        <p><span className="text-slate-500">source_campaign:</span> IG_REELS_MONSOON_V4</p>
                        <p><span className="text-slate-500">consent:</span> WhatsApp Opt-In Confirmed</p>
                      </div>
                      <p className="text-[11px] text-slate-400 font-sans">
                        Zero dropped leads from long signup forms. High-intent verified profile synced immediately into Cocoon CDP.
                      </p>
                    </div>
                  )}

                  {currentStep.sampleUiType === 'segment' && (
                    <div className="border border-slate-200 rounded-xl p-4 space-y-3 bg-white">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-900">Live Dynamic Audience Filter</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono text-[10px]">Real-Time Sync</span>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 font-mono text-slate-700">
                          IF campaign == &quot;Monsoon_Drop&quot; AND city == &quot;Mumbai&quot;
                        </div>
                        <div className="p-2.5 rounded-lg bg-indigo-50 border border-indigo-200 font-mono text-indigo-900">
                          THEN tag = &quot;Monsoon_High_Intent&quot; &amp; route = &quot;VIP_Early_Access&quot;
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-1 text-xs text-slate-500">
                        <span>Live cohort count:</span>
                        <strong className="text-slate-900 font-mono text-sm">28,450 buyers</strong>
                      </div>
                    </div>
                  )}

                  {currentStep.sampleUiType === 'message' && (
                    <div className="space-y-2">
                      <div className="bg-[#eef5f1] border border-emerald-200 rounded-xl p-3.5 text-xs text-slate-800 space-y-2">
                        <div className="flex items-center gap-1.5 font-bold text-emerald-800">
                          <Smartphone className="w-3.5 h-3.5" /> Official WhatsApp Interactive Broadcast
                        </div>
                        <p className="text-slate-700">
                          Hey Aarav! 👋 Thanks for inquiring. Here is your VIP invite to the HydroBlack Sneaker launch before public release.
                        </p>
                        <div className="flex gap-2 pt-1">
                          <span className="px-2.5 py-1 bg-white border border-slate-300 rounded text-[11px] font-semibold text-slate-800">
                            Check Size Availability
                          </span>
                          <span className="px-2.5 py-1 bg-[#25D366] text-white rounded text-[11px] font-semibold">
                            Browse Collection
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep.sampleUiType === 'ai' && (
                    <div className="space-y-2 text-xs">
                      <div className="bg-slate-100 rounded-lg p-3 text-slate-700">
                        <span className="text-[10px] font-bold text-slate-400 block mb-1">Aarav Sharma</span>
                        &quot;Do you have UK 9 in stock and are they suitable for Mumbai monsoon rains?&quot;
                      </div>
                      <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-3 text-indigo-950 space-y-1.5">
                        <div className="flex items-center gap-1 text-[10px] font-bold text-indigo-600">
                          <Bot className="w-3 h-3" /> Cocoon Autonomous AI Agent
                        </div>
                        <p className="text-xs leading-relaxed">
                          &quot;Yes Aarav! We have 4 pairs of HydroBlack left in UK 9. They feature hydrophobic nano-coating tested for 10,000mm rainfall. Would you like me to reserve a pair?&quot;
                        </p>
                      </div>
                    </div>
                  )}

                  {currentStep.sampleUiType === 'catalog' && (
                    <div className="border border-slate-200 rounded-xl p-3 bg-white space-y-2.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-900">WhatsApp Product Card</span>
                        <span className="text-emerald-600 font-bold font-mono">₹2,499</span>
                      </div>
                      <div className="h-24 rounded-lg bg-gradient-to-r from-slate-800 to-slate-900 flex items-center justify-center text-white text-xs font-medium">
                        [ HydroBlack Sneaker 3D Interactive Model ]
                      </div>
                      <div className="flex items-center justify-between text-xs pt-1">
                        <span className="text-slate-500 font-mono text-[11px]">SKU: HYD-UK9-BLK</span>
                        <span className="px-3 py-1 bg-slate-900 text-white rounded-lg text-xs font-semibold">
                          1-Click Purchase
                        </span>
                      </div>
                    </div>
                  )}

                  {currentStep.sampleUiType === 'payment' && (
                    <div className="bg-slate-900 text-white rounded-xl p-4 text-xs space-y-3 font-mono">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                        <span className="text-emerald-400 font-bold">UPI Fast Checkout</span>
                        <span className="text-slate-400">12 seconds</span>
                      </div>
                      <div className="space-y-1.5 text-slate-300 text-[11px]">
                        <p>Customer: Aarav Sharma</p>
                        <p>Gateway: NPCI UPI Intent Flow (GPay / PhonePe / Paytm)</p>
                        <p>Status: <span className="text-emerald-400 font-bold">SETTLED (₹2,499.00)</span></p>
                        <p>Zero redirect. Zero cart abandonment.</p>
                      </div>
                    </div>
                  )}

                  {currentStep.sampleUiType === 'analytics' && (
                    <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-3 text-xs">
                      <div className="flex items-center justify-between font-bold text-slate-900">
                        <span>Campaign Revenue Attribution</span>
                        <span className="text-indigo-600 font-mono">ROAS: 7.84x</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                        <div className="bg-white p-2 rounded border border-slate-200">
                          <span className="text-slate-400 block">Ad Spend</span>
                          <span className="font-bold text-slate-800">₹318.00</span>
                        </div>
                        <div className="bg-white p-2 rounded border border-slate-200">
                          <span className="text-slate-400 block">Net Revenue</span>
                          <span className="font-bold text-emerald-600">₹2,499.00</span>
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-500">
                        Meta Conversion API (CAPI) fired instantly to feed conversion value back into ad bidding algorithms.
                      </p>
                    </div>
                  )}

                  {currentStep.sampleUiType === 'automation' && (
                    <div className="bg-slate-900 text-white rounded-xl p-4 text-xs font-mono space-y-2">
                      <div className="text-indigo-400 font-bold flex items-center justify-between">
                        <span>● Automated Post-Purchase Sequence</span>
                        <span>Active</span>
                      </div>
                      <div className="space-y-1 text-slate-300 text-[11px]">
                        <p>⚡ Trigger: Payment Succeeded</p>
                        <p>↳ WhatsApp: Send tracking link &amp; unboxing video</p>
                        <p>↳ Email: Dispatch GST Tax Invoice</p>
                        <p>↳ Delay: Wait 7 days after delivery</p>
                        <p>↳ Action: Request 5-star review via WhatsApp Interactive Survey</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Simulated Step Footer */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Data connected to next stage</span>
                  <span className="text-indigo-600 font-semibold flex items-center gap-1">
                    Continuous feedback loop <ArrowRight className="w-3 h-3" />
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
