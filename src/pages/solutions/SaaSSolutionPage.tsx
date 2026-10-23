import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Server, 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  GitFork, 
  Key, 
  Activity, 
  Users, 
  Layers, 
  ChevronRight, 
  Clock, 
  Check, 
  Code2,
  Lock,
  BarChart3
} from 'lucide-react';
import { SEOHead } from '../../components/SEOHead';

interface SolutionPageProps {
  onOpenStartFree: () => void;
  onOpenBookDemo: () => void;
}

export const SaaSSolutionPage: React.FC<SolutionPageProps> = ({
  onOpenStartFree,
  onOpenBookDemo
}) => {
  const [activeStep, setActiveStep] = useState<number>(3);

  const steps = [
    { num: 1, title: 'Inbound Lead Enters', desc: 'Signup from website or product registration API', tag: 'Acquire' },
    { num: 2, title: 'Dynamic Segmentation', desc: 'Tagged by team size, trial intent, and cloud region', tag: 'Segment' },
    { num: 3, title: 'Visual Onboarding Email', desc: 'Interactive welcome drip with personal Liquid variables', tag: 'Engage' },
    { num: 4, title: 'Product Event Trigger', desc: 'Webhook fires on "created_first_project" or inactivity', tag: 'Measure' },
    { num: 5, title: 'Workflow Automation', desc: 'Branches on product adoption milestones & WhatsApp alerts', tag: 'Automate' },
    { num: 6, title: 'Sub-Second Transactional', desc: 'Instant OTPs, invoice PDFs, & renewal notifications', tag: 'Deliver' },
    { num: 7, title: 'Proactive Retention', desc: 'Identifies churn signals and initiates automated concierge outreach', tag: 'Retain' }
  ];

  return (
    <div className="bg-white text-slate-900">
      <SEOHead 
        title="SaaS & Cloud Solutions — Lifecycle Automation & Transactional API"
        description="Connect product analytics events to automated onboarding email journeys, high-speed transactional OTPs, and intelligent churn retention."
      />

      {/* Hero */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-sky-50/60 via-indigo-50/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-sky-600 tracking-wide uppercase">
            <Server className="w-4 h-4" />
            <span>Solutions for SaaS &amp; Software Platforms</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Scale user adoption from <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600">signup to enterprise renewal</span>.
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                SaaS growth breaks down when marketing newsletters, critical product OTPs, and lifecycle drip workflows live in separate tools. CocoonMail bridges product telemetry events to visual automation, high-speed transactional relays, and multi-channel retention.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenStartFree}
                  className="px-7 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-base shadow-lg shadow-sky-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 cursor-pointer"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenBookDemo}
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200 shadow-sm transition-all hover:border-slate-300 flex items-center gap-2 cursor-pointer"
                >
                  <span>Book Product Demo</span>
                </button>
                <Link
                  to="/developers/api"
                  className="px-5 py-3.5 text-slate-600 hover:text-slate-900 text-sm font-semibold flex items-center gap-1.5"
                >
                  <span>API Docs</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-4 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> &lt;650ms Median API Latency</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 99.99% Guaranteed SLA</span>
              </div>
            </div>

            {/* Interactive Story Progression */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 text-white shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-xs font-mono text-sky-400 font-semibold">The SaaS Lifecycle Workflow</span>
                  <span className="text-[11px] text-slate-400">Step {activeStep} of 7</span>
                </div>

                <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
                  {steps.map((st) => (
                    <button
                      key={st.num}
                      onClick={() => setActiveStep(st.num)}
                      className={`w-full text-left p-3 rounded-xl transition-all cursor-pointer flex items-start gap-3 border ${
                        activeStep === st.num 
                          ? 'bg-sky-950/60 border-sky-500/80 shadow-md' 
                          : 'bg-slate-800/40 border-slate-800 hover:bg-slate-800/80'
                      }`}
                    >
                      <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold shrink-0 ${
                        activeStep === st.num ? 'bg-sky-500 text-white' : 'bg-slate-700 text-slate-300'
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
            <p className="text-3xl sm:text-4xl font-black text-slate-900">54%</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Faster Activation on Trial Day 1</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-black text-slate-900">&lt;800ms</p>
            <p className="text-xs text-slate-500 font-medium mt-1">P99 OTP Authentication Speed</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-black text-slate-900">32%</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Reduction in Month-1 Trial Churn</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-black text-slate-900">99.99%</p>
            <p className="text-xs text-slate-500 font-medium mt-1">High-Throughput Uptime SLA</p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <h2 className="text-xs font-bold text-sky-600 uppercase tracking-wider">Engineered for Technical Teams</h2>
            <p className="text-3xl font-extrabold text-slate-900">Built to handle millions of monthly product events</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all space-y-3">
              <Key className="w-8 h-8 text-sky-600" />
              <h3 className="font-bold text-slate-900 text-base">Priority Transactional Engine</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Deliver magic links, 2FA codes, password resets, and critical system alerts over dedicated, warmed IP pools that are never mixed with bulk newsletters.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all space-y-3">
              <GitFork className="w-8 h-8 text-indigo-600" />
              <h3 className="font-bold text-slate-900 text-base">Behavioral Workflow Triggers</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Branch user journeys on in-app milestones. If a user hasn&apos;t invited a teammate within 48h, trigger a contextual email walkthrough or WhatsApp alert.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all space-y-3">
              <BarChart3 className="w-8 h-8 text-blue-600" />
              <h3 className="font-bold text-slate-900 text-base">Full Product Event Telemetry</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Correlate email and WhatsApp open behaviors directly with in-app feature usage, user retention, and customer lifetime value (LTV).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-sky-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Supercharge your SaaS product communications.</h2>
          <p className="text-sky-100 max-w-xl mx-auto text-sm">
            Generate an API sandbox token, send a test payload, and launch visual user onboarding flows in minutes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenStartFree}
              className="px-8 py-3.5 rounded-xl bg-white text-sky-800 hover:bg-sky-50 font-bold shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              Get Free Sandbox Key
            </button>
            <button
              onClick={onOpenBookDemo}
              className="px-7 py-3.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-semibold border border-sky-500/50 transition-colors cursor-pointer"
            >
              Schedule SaaS Architecture Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
