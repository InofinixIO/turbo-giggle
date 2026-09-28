import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  FolderGit2, 
  Share2, 
  BarChart3, 
  ShieldCheck, 
  Layers, 
  FileSpreadsheet, 
  Lock,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { SEOHead } from '../../components/SEOHead';

interface SolutionPageProps {
  onOpenStartFree: () => void;
  onOpenBookDemo: () => void;
}

export const AgenciesSolutionPage: React.FC<SolutionPageProps> = ({
  onOpenStartFree,
  onOpenBookDemo
}) => {
  const [activeStep, setActiveStep] = useState<number>(2);

  const steps = [
    { num: 1, title: 'Multiple Client Accounts', desc: 'Onboard 10 to 100+ brands with complete data and billing isolation', tag: 'Organize' },
    { num: 2, title: 'Dedicated Workspaces', desc: 'Custom permissions, dedicated sender domains, & WhatsApp numbers per brand', tag: 'Isolate' },
    { num: 3, title: 'Omnichannel Campaigns', desc: 'Craft high-converting email and WhatsApp campaigns with shared asset libraries', tag: 'Execute' },
    { num: 4, title: 'Dynamic Client Segments', desc: 'Build live behavioral customer audiences without manual CSV exports', tag: 'Target' },
    { num: 5, title: 'Official WhatsApp BSP', desc: 'Deploy verified broadcast templates under the client’s own verified business', tag: 'Broadcast' },
    { num: 6, title: 'Whitelabel PDF Reports', desc: 'Automate weekly client performance dashboards with ROI and conversion attribution', tag: 'Report' }
  ];

  return (
    <div className="bg-white text-slate-900">
      <SEOHead 
        title="Agency Solutions — Multi-Client Workspaces & Marketing Automation"
        description="Manage multiple client brands with isolated workspaces, shared template libraries, verified WhatsApp Business numbers, and automated ROI client reporting."
      />

      {/* Hero */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-indigo-50/60 via-purple-50/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-indigo-600 tracking-wide uppercase">
            <Building className="w-4 h-4" />
            <span>Solutions for Marketing &amp; Performance Agencies</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Deliver 10x ROI for every client <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600">from one unified command center</span>.
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                Juggling separate logins, unverified WhatsApp numbers, and messy client reporting slows down agency teams. CocoonMail provides isolated multi-tenant workspaces, shared asset libraries, and automated client analytics in one platform.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenStartFree}
                  className="px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 cursor-pointer"
                >
                  <span>Start Agency Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenBookDemo}
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200 shadow-sm transition-all hover:border-slate-300 flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Agency Partnership</span>
                </button>
              </div>

              <div className="flex items-center gap-6 pt-4 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Multi-Tenant Role Isolation</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Agency Volume Tier Discounts</span>
              </div>
            </div>

            {/* Interactive Story Progression */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 text-white shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-xs font-mono text-indigo-400 font-semibold">Agency Client Operations Workflow</span>
                  <span className="text-[11px] text-slate-400">Step {activeStep} of 6</span>
                </div>

                <div className="space-y-2">
                  {steps.map((st) => (
                    <button
                      key={st.num}
                      onClick={() => setActiveStep(st.num)}
                      className={`w-full text-left p-3 rounded-xl transition-all cursor-pointer flex items-start gap-3 border ${
                        activeStep === st.num 
                          ? 'bg-indigo-950/60 border-indigo-500/80 shadow-md' 
                          : 'bg-slate-800/40 border-slate-800 hover:bg-slate-800/80'
                      }`}
                    >
                      <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold shrink-0 ${
                        activeStep === st.num ? 'bg-indigo-500 text-white' : 'bg-slate-700 text-slate-300'
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
            <p className="text-3xl sm:text-4xl font-black text-slate-900">85%</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Faster Campaign Setup Time</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-black text-slate-900">100%</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Client Data &amp; Billing Separation</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-black text-slate-900">5.2x</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Average Client Marketing ROAS</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-black text-slate-900">Unlimited</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Workspaces &amp; Sub-Accounts</p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <h2 className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Built for High-Growth Agencies</h2>
            <p className="text-3xl font-extrabold text-slate-900">Everything needed to service 50+ clients effortlessly</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all space-y-3">
              <FolderGit2 className="w-8 h-8 text-indigo-600" />
              <h3 className="font-bold text-slate-900 text-base">Isolated Client Workspaces</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Keep client contact databases, Meta ad credentials, and WhatsApp business profiles strictly separated with zero risk of cross-client data leaks.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all space-y-3">
              <Share2 className="w-8 h-8 text-purple-600" />
              <h3 className="font-bold text-slate-900 text-base">Shared Master Asset Library</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Design proven high-converting email and WhatsApp templates once, then deploy them into multiple client workspaces with one click.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all space-y-3">
              <FileSpreadsheet className="w-8 h-8 text-violet-600" />
              <h3 className="font-bold text-slate-900 text-base">Automated Client Reporting</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Generate clean, branded performance reports showing open rates, WhatsApp conversions, and total attributed revenue sent directly to client stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Scale your agency margins with CocoonMail.</h2>
          <p className="text-indigo-100 max-w-xl mx-auto text-sm">
            Unlock agency pricing tiers, dedicated onboarding support, and unlimited workspaces.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenStartFree}
              className="px-8 py-3.5 rounded-xl bg-white text-indigo-800 hover:bg-indigo-50 font-bold shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              Start Free Agency Trial
            </button>
            <button
              onClick={onOpenBookDemo}
              className="px-7 py-3.5 rounded-xl bg-indigo-700 hover:bg-indigo-800 text-white font-semibold border border-indigo-500/50 transition-colors cursor-pointer"
            >
              Book Agency Partnership Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
