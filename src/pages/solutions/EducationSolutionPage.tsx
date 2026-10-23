import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare, 
  Mail, 
  Users, 
  Calendar, 
  CreditCard, 
  BookOpen, 
  Check, 
  ChevronRight,
  FileCheck
} from 'lucide-react';
import { SEOHead } from '../../components/SEOHead';

interface SolutionPageProps {
  onOpenStartFree: () => void;
  onOpenBookDemo: () => void;
}

export const EducationSolutionPage: React.FC<SolutionPageProps> = ({
  onOpenStartFree,
  onOpenBookDemo
}) => {
  const [activeStep, setActiveStep] = useState<number>(3);

  const steps = [
    { num: 1, title: 'Prospective Student Inquires', desc: 'Downloads curriculum syllabus or fills out course inquiry form', tag: 'Acquire' },
    { num: 2, title: 'Automated Qualification', desc: 'AI agent queries background, target graduation year, & scholarship intent', tag: 'Qualify' },
    { num: 3, title: 'Instant WhatsApp Outreach', desc: 'Sends digital prospectus, fee structure PDF, and direct counsellor connect', tag: 'Engage' },
    { num: 4, title: 'Visual Nurture Email', desc: 'Alumni success stories, faculty highlights, & campus tour video sequences', tag: 'Educate' },
    { num: 5, title: '1-on-1 Academic Counselling', desc: 'Student books interview or campus visit directly via interactive calendar', tag: 'Counsel' },
    { num: 6, title: 'Seamless Enrollment & Fees', desc: 'Delivers application acceptance letter and secure fee payment links', tag: 'Enroll' }
  ];

  return (
    <div className="bg-white text-slate-900">
      <SEOHead 
        title="Education & EdTech Solutions — Student Admissions & Enrollment Automation"
        description="Accelerate student admissions with automated qualification, WhatsApp prospectus delivery, counsellor booking, and fee collection."
      />

      {/* Hero */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-blue-50/60 via-indigo-50/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-blue-600 tracking-wide uppercase">
            <GraduationCap className="w-4 h-4" />
            <span>Solutions for Universities, Academies &amp; EdTech</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Turn student inquiries into <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">confirmed admissions</span>.
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                Prospective students evaluate programs on mobile and expect answers within minutes. CocoonMail combines instant WhatsApp curriculum delivery, automated counselling call booking, visual email nurture, and secure admission fee processing.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenStartFree}
                  className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 cursor-pointer"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenBookDemo}
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200 shadow-sm transition-all hover:border-slate-300 flex items-center gap-2 cursor-pointer"
                >
                  <span>Book Admissions Demo</span>
                </button>
              </div>

              <div className="flex items-center gap-6 pt-4 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Multi-Counsellor Shared Inbox</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> High-Volume Application Reminders</span>
              </div>
            </div>

            {/* Interactive Story Progression */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 text-white shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-xs font-mono text-blue-400 font-semibold">Admissions &amp; Enrollment Journey</span>
                  <span className="text-[11px] text-slate-400">Step {activeStep} of 6</span>
                </div>

                <div className="space-y-2">
                  {steps.map((st) => (
                    <button
                      key={st.num}
                      onClick={() => setActiveStep(st.num)}
                      className={`w-full text-left p-3 rounded-xl transition-all cursor-pointer flex items-start gap-3 border ${
                        activeStep === st.num 
                          ? 'bg-blue-950/60 border-blue-500/80 shadow-md' 
                          : 'bg-slate-800/40 border-slate-800 hover:bg-slate-800/80'
                      }`}
                    >
                      <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold shrink-0 ${
                        activeStep === st.num ? 'bg-blue-500 text-white' : 'bg-slate-700 text-slate-300'
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
            <p className="text-3xl sm:text-4xl font-black text-slate-900">4.2x</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Faster Lead-to-Counsellor Contact</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-black text-slate-900">68%</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Increase in Application Completions</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-black text-slate-900">95%</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Scholarship Deadline Alert Open Rate</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-black text-slate-900">100%</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Automated Fee Receipt Generation</p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-wider">Admissions Acceleration</h2>
            <p className="text-3xl font-extrabold text-slate-900">Built to guide students through the decision cycle</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all space-y-3">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <h3 className="font-bold text-slate-900 text-base">Instant WhatsApp Prospectus</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                When a student clicks an ad or submits a form, automatically deliver the course syllabus, faculty credentials, and tuition breakdown in WhatsApp.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all space-y-3">
              <Calendar className="w-8 h-8 text-indigo-600" />
              <h3 className="font-bold text-slate-900 text-base">Counselling Session Booking</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Empower applicants to book 1-on-1 virtual or in-person guidance sessions with direct calendar sync, automated reminders, and rescheduling buttons.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all space-y-3">
              <FileCheck className="w-8 h-8 text-violet-600" />
              <h3 className="font-bold text-slate-900 text-base">Document Collection &amp; Fees</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Collect transcripts and identification via WhatsApp attachments, approve admission status, and collect registration fees securely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Boost your upcoming intake enrollments.</h2>
          <p className="text-blue-100 max-w-xl mx-auto text-sm">
            Engage prospective students on the channel they check most frequently.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenStartFree}
              className="px-8 py-3.5 rounded-xl bg-white text-blue-800 hover:bg-blue-50 font-bold shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              Start Free Admissions Trial
            </button>
            <button
              onClick={onOpenBookDemo}
              className="px-7 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold border border-blue-500/50 transition-colors cursor-pointer"
            >
              Consult Education Specialist
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
