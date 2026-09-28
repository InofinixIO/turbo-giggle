import React, { useState } from 'react';
import { Link } from 'react-router';
import { 
  Home as HomeIcon, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare, 
  Bot, 
  MapPin, 
  UserCheck, 
  FileText, 
  PhoneCall, 
  Check, 
  ChevronRight,
  Sparkles,
  Building2
} from 'lucide-react';
import { SEOHead } from '../../components/SEOHead';

interface SolutionPageProps {
  onOpenStartFree: () => void;
  onOpenBookDemo: () => void;
}

export const RealEstateSolutionPage: React.FC<SolutionPageProps> = ({
  onOpenStartFree,
  onOpenBookDemo
}) => {
  const [activeStep, setActiveStep] = useState<number>(3);

  const steps = [
    { num: 1, title: 'Property Ad Lead Captured', desc: 'High-intent buyer taps Instagram or Portal ad for luxury project', tag: 'Acquire' },
    { num: 2, title: 'Immediate WhatsApp Conversation', desc: 'Opens within 5 seconds with pre-selected project brochure & video walkthrough', tag: 'Engage' },
    { num: 3, title: 'Autonomous AI Qualification', desc: 'AI filters budget, desired configuration (2BHK/3BHK/Villa), & financing status', tag: 'Qualify' },
    { num: 4, title: 'Personalized Property Match', desc: 'Sends matching floorplans, unit pricing sheets, and site amenity maps', tag: 'Recommend' },
    { num: 5, title: 'Interactive Site Visit Booking', desc: 'Buyer selects preferred Saturday/Sunday slot with driving directions', tag: 'Schedule' },
    { num: 6, title: 'Senior Broker Handoff', desc: 'Full conversational transcript & budget profile assigned to dedicated broker', tag: 'Handoff' }
  ];

  return (
    <div className="bg-white text-slate-900">
      <SEOHead 
        title="Real Estate Solutions — Buyer Qualification & WhatsApp Site Visit Scheduling"
        description="Qualify real estate buyers in real-time with AI, share interactive floorplans on WhatsApp, and book site visits with seamless sales broker handoff."
      />

      {/* Hero */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-stone-50/70 via-amber-50/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-amber-700 tracking-wide uppercase">
            <Building2 className="w-4 h-4" />
            <span>Solutions for Property Developers &amp; Real Estate Brokerages</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Qualify high-ticket buyers <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-700 via-stone-800 to-amber-900">before your competitors call</span>.
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                Real estate leads cool down within 15 minutes. CocoonMail engages ad leads in sub-second time on WhatsApp, qualifies budget and timeline using conversational AI, delivers high-res floorplans, and hands qualified buyers to senior agents.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenStartFree}
                  className="px-7 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-base shadow-lg shadow-stone-900/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 cursor-pointer"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenBookDemo}
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200 shadow-sm transition-all hover:border-slate-300 flex items-center gap-2 cursor-pointer"
                >
                  <span>Book Real Estate Demo</span>
                </button>
              </div>

              <div className="flex items-center gap-6 pt-4 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Sub-5s Lead Response Speed</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> WhatsApp Floorplan Delivery</span>
              </div>
            </div>

            {/* Interactive Story Progression */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 text-white shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-xs font-mono text-amber-400 font-semibold">Real Estate Buyer Qualification Journey</span>
                  <span className="text-[11px] text-slate-400">Step {activeStep} of 6</span>
                </div>

                <div className="space-y-2">
                  {steps.map((st) => (
                    <button
                      key={st.num}
                      onClick={() => setActiveStep(st.num)}
                      className={`w-full text-left p-3 rounded-xl transition-all cursor-pointer flex items-start gap-3 border ${
                        activeStep === st.num 
                          ? 'bg-amber-950/60 border-amber-500/80 shadow-md' 
                          : 'bg-slate-800/40 border-slate-800 hover:bg-slate-800/80'
                      }`}
                    >
                      <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold shrink-0 ${
                        activeStep === st.num ? 'bg-amber-600 text-white' : 'bg-slate-700 text-slate-300'
                      }`}>
                        {st.num}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-bold text-white truncate">{st.title}</p>
                          <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">{st.tag}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">{st.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl sm:text-4xl font-black text-slate-900">&lt;5 sec</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Lead Contact Response Time</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-black text-slate-900">3.4x</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Higher Site Visit Attendance</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-black text-slate-900">62%</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Lower Cost Per Verified Buyer</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-black text-slate-900">100%</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Lead Attribution to Sales Agent</p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <h2 className="text-xs font-bold text-amber-700 uppercase tracking-wider">High-Value Deal Closing</h2>
            <p className="text-3xl font-extrabold text-slate-900">Built for luxury and commercial real estate</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all space-y-3">
              <Bot className="w-8 h-8 text-amber-700" />
              <h3 className="font-bold text-slate-900 text-base">Conversational Budget Qualification</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Filter out casual browsers automatically. AI asks respectful clarifying questions regarding purchase timeline, loan pre-approval, and area preference.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all space-y-3">
              <FileText className="w-8 h-8 text-stone-700" />
              <h3 className="font-bold text-slate-900 text-base">Rich Floorplans &amp; Video Walkthroughs</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Deliver high-resolution architectural plans, 3D render walkthroughs, and project location maps natively into the WhatsApp chat thread.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all space-y-3">
              <UserCheck className="w-8 h-8 text-emerald-700" />
              <h3 className="font-bold text-slate-900 text-base">Seamless Senior Broker Handover</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                When a buyer requests a site visit or speaks to a representative, their CRM profile and conversation summary are instantly forwarded to the on-duty broker.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Never lose another high-ticket property lead.</h2>
          <p className="text-stone-300 max-w-xl mx-auto text-sm">
            Deploy instant WhatsApp buyer qualification and book site visits on autopilot.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenStartFree}
              className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              Start Free Trial
            </button>
            <button
              onClick={onOpenBookDemo}
              className="px-7 py-3.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-white font-semibold border border-stone-700 transition-colors cursor-pointer"
            >
              Schedule Brokerage Strategy Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
