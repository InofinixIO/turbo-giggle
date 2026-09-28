import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartPulse, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare, 
  Calendar, 
  Clock, 
  Bell, 
  FileText, 
  ShieldCheck, 
  Check,
  ChevronRight,
  UserCheck
} from 'lucide-react';
import { SEOHead } from '../../components/SEOHead';

interface SolutionPageProps {
  onOpenStartFree: () => void;
  onOpenBookDemo: () => void;
}

export const HealthcareSolutionPage: React.FC<SolutionPageProps> = ({
  onOpenStartFree,
  onOpenBookDemo
}) => {
  const [activeStep, setActiveStep] = useState<number>(3);

  const steps = [
    { num: 1, title: 'Inbound Inquiry Received', desc: 'Patient or client submits inquiry via website clinic portal or ad', tag: 'Acquire' },
    { num: 2, title: 'Instant WhatsApp Connect', desc: 'Verified clinic account initiates scheduling communication immediately', tag: 'Connect' },
    { num: 3, title: 'Intake Qualification', desc: 'Collects branch preference, preferred practitioner, & consultation timing', tag: 'Qualify' },
    { num: 4, title: 'Appointment Confirmation', desc: 'Dispatches confirmed slot details, clinic directions, & preparation guide', tag: 'Confirm' },
    { num: 5, title: 'Automated 24h & 2h Reminders', desc: 'Reduces appointment no-shows with interactive 1-tap confirm/reschedule buttons', tag: 'Remind' },
    { num: 6, title: 'Post-Visit Follow-Up', desc: 'Sends digital feedback survey, care instructions, and next checkup link', tag: 'Follow-Up' }
  ];

  return (
    <div className="bg-white text-slate-900">
      <SEOHead 
        title="Healthcare & Clinics — Patient Appointment Communication & Reminders"
        description="Streamline clinic appointment bookings, eliminate no-shows with automated WhatsApp reminders, and send verified post-consultation care instructions."
      />

      {/* Hero */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-teal-50/60 via-emerald-50/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-teal-600 tracking-wide uppercase">
            <HeartPulse className="w-4 h-4" />
            <span>Solutions for Clinics, Wellness &amp; Healthcare Practices</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Respect your patients&apos; time with <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600">effortless appointment communication</span>.
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                Manual phone tag and unanswered confirmation emails result in 25%+ clinic no-show rates. CocoonMail powers verified, privacy-conscious WhatsApp appointment scheduling, timely 24h reminders, and automated post-visit feedback.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenStartFree}
                  className="px-7 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-base shadow-lg shadow-teal-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 cursor-pointer"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenBookDemo}
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200 shadow-sm transition-all hover:border-slate-300 flex items-center gap-2 cursor-pointer"
                >
                  <span>Book Practice Consultation</span>
                </button>
              </div>

              <div className="flex items-center gap-6 pt-4 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Verified WhatsApp Business Profile</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> ISO 27001 &amp; Encrypted Data Security</span>
              </div>
            </div>

            {/* Interactive Story Progression */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 text-white shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-xs font-mono text-teal-400 font-semibold">Clinic Patient Communication Journey</span>
                  <span className="text-[11px] text-slate-400">Step {activeStep} of 6</span>
                </div>

                <div className="space-y-2">
                  {steps.map((st) => (
                    <button
                      key={st.num}
                      onClick={() => setActiveStep(st.num)}
                      className={`w-full text-left p-3 rounded-xl transition-all cursor-pointer flex items-start gap-3 border ${
                        activeStep === st.num 
                          ? 'bg-teal-950/60 border-teal-500/80 shadow-md' 
                          : 'bg-slate-800/40 border-slate-800 hover:bg-slate-800/80'
                      }`}
                    >
                      <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold shrink-0 ${
                        activeStep === st.num ? 'bg-teal-500 text-white' : 'bg-slate-700 text-slate-300'
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
            <p className="text-3xl sm:text-4xl font-black text-slate-900">76%</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Reduction in Consultation No-Shows</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-black text-slate-900">98%</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Patient Read Rate on WhatsApp</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-black text-slate-900">4.9/5</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Average Patient Scheduling Satisfaction</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-black text-slate-900">Zero</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Manual Phone Calling Overhead</p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <h2 className="text-xs font-bold text-teal-600 uppercase tracking-wider">Patient-Centric Features</h2>
            <p className="text-3xl font-extrabold text-slate-900">Reliable communication your clinic can trust</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all space-y-3">
              <Calendar className="w-8 h-8 text-teal-600" />
              <h3 className="font-bold text-slate-900 text-base">Interactive Appointment Confirmation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Send appointment dates with Google Maps directions, preparation notes, and 1-tap &quot;Confirm&quot; or &quot;Reschedule&quot; WhatsApp buttons.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all space-y-3">
              <Bell className="w-8 h-8 text-emerald-600" />
              <h3 className="font-bold text-slate-900 text-base">Automated Staggered Reminders</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automatically schedule 24-hour and 2-hour reminders before the appointment, freeing clinical staff from hours of manual phone calls.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all space-y-3">
              <FileText className="w-8 h-8 text-cyan-600" />
              <h3 className="font-bold text-slate-900 text-base">Post-Visit Guidance &amp; Surveys</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Deliver digital routine care instructions, dietary guidelines, and Google review requests following the completed visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Modernize your clinic appointment communication.</h2>
          <p className="text-teal-100 max-w-xl mx-auto text-sm">
            Set up verified WhatsApp reminders and reduce appointment drop-offs this week.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenStartFree}
              className="px-8 py-3.5 rounded-xl bg-white text-teal-800 hover:bg-teal-50 font-bold shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              Start Free Trial
            </button>
            <button
              onClick={onOpenBookDemo}
              className="px-7 py-3.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold border border-teal-500/50 transition-colors cursor-pointer"
            >
              Request Healthcare Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
