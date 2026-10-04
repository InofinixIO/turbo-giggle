import React, { useState } from 'react';
import { 
  Store, 
  Laptop, 
  Briefcase, 
  HeartPulse, 
  GraduationCap, 
  Home, 
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { ModalType } from '../../types';

interface SolutionsSectionProps {
  onOpenModal: (type: ModalType) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onOpenModal }) => {
  const [activeTab, setActiveTab] = useState('ecommerce');

  const industries = [
    {
      id: 'ecommerce',
      name: 'E-commerce & D2C',
      icon: Store,
      color: 'blue',
      headline: 'Recover abandoned carts & sell directly inside WhatsApp',
      desc: 'Send personalized WhatsApp product drops, interactive catalogs with live inventory, and one-tap checkout links that increase mobile conversion rates by 3.2x.',
      workflow: [
        { label: 'Website Cart Abandoned', channel: 'Event' },
        { label: '30-Min Delay', channel: 'Timer' },
        { label: 'WhatsApp Cart Alert with 10% Discount', channel: 'WhatsApp' },
        { label: 'Instant UPI / Card Payment', channel: 'Conversion' }
      ]
    },
    {
      id: 'saas',
      name: 'SaaS & Startups',
      icon: Laptop,
      color: 'indigo',
      headline: 'Onboard trial users & send critical transactional alerts',
      desc: 'Deliver welcome email sequences, feature adoption nudges, usage quota warnings, and passwordless authentication tokens with 99.8% inbox placement.',
      workflow: [
        { label: 'User Signs Up for Trial', channel: 'Event' },
        { label: 'Welcome Email + API Key Provided', channel: 'Email' },
        { label: 'If No API Call in 3 Days', channel: 'Condition' },
        { label: 'Invite to Live Technical Demo', channel: 'WhatsApp' }
      ]
    },
    {
      id: 'agencies',
      name: 'Agencies & Consultancies',
      icon: Briefcase,
      color: 'emerald',
      headline: 'Multi-client workspace management with white-label reporting',
      desc: 'Run omni-channel campaigns for dozens of brands from a single login. Isolated sub-accounts, role-based access, and client billing pass-through.',
      workflow: [
        { label: 'Client Brand Onboarding', channel: 'Admin' },
        { label: 'Custom Domain & WhatsApp Green Badge', channel: 'Setup' },
        { label: 'Campaign Scheduled & Approved', channel: 'Multi-Channel' },
        { label: 'Automated Client PDF ROI Report', channel: 'Analytics' }
      ]
    },
    {
      id: 'healthcare',
      name: 'Healthcare & Wellness',
      icon: HeartPulse,
      color: 'rose',
      headline: 'Automated appointment reminders & lab report delivery',
      desc: 'Drastically reduce clinic no-shows with two-way WhatsApp appointment confirmations, dietary guidelines, and secure transactional report links.',
      workflow: [
        { label: 'Doctor Consult Booked', channel: 'Calendar' },
        { label: 'WhatsApp Confirmation with Add to Calendar', channel: 'WhatsApp' },
        { label: '24h Prior: Interactive Reschedule / Confirm', channel: 'Quick Reply' },
        { label: 'Post-Visit Feedback & Prescription PDF', channel: 'Secure Link' }
      ]
    },
    {
      id: 'education',
      name: 'Education & EdTech',
      icon: GraduationCap,
      color: 'amber',
      headline: 'Admissions counseling & live class notification alerts',
      desc: 'Qualify prospective student leads via Meta Ads, route them to course counselors on WhatsApp, and broadcast webinar reminders with 98% open rates.',
      workflow: [
        { label: 'Prospect Downloads Syllabus', channel: 'Lead Form' },
        { label: 'AI Course Counselor Qualifies Intent', channel: 'AI Agent' },
        { label: 'WhatsApp Zoom Class Link 15m Prior', channel: 'Broadcast' },
        { label: 'Fee Payment Link Sent upon Enrollment', channel: 'Payment' }
      ]
    },
    {
      id: 'real-estate',
      name: 'Real Estate & Property',
      icon: Home,
      color: 'teal',
      headline: 'Virtual property brochures & site visit scheduling',
      desc: 'Instantly send floor plans, video walkthroughs, and pricing sheets when buyers click property ads. Schedule site visits with verified WhatsApp location pins.',
      workflow: [
        { label: 'Facebook Property Ad Click', channel: 'Meta Ad' },
        { label: 'WhatsApp Interactive Brochure Sent', channel: 'Catalog' },
        { label: 'Buyer Picks Site Visit Time Slot', channel: 'Interactive' },
        { label: 'Agent Assigned + WhatsApp Location Pin', channel: 'Handoff' }
      ]
    }
  ];

  const current = industries.find(i => i.id === activeTab) || industries[0];
  const CurrentIcon = current.icon;

  return (
    <section id="solutions-section" className="py-20 md:py-32 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailored Industry Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight text-balance mb-4">
            Built around your business.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Whether you run a high-volume D2C brand in Mumbai or a global B2B SaaS startup, Cocoonmail provides pre-configured workflows tailored to your customer journey.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {industries.map((ind) => {
            const Icon = ind.icon;
            const isActive = activeTab === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  isActive 
                    ? 'bg-slate-900 text-white shadow-md' 
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-blue-400' : 'text-slate-400'}`} />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Detail Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold">
              <CurrentIcon className="w-4 h-4" />
              <span>{current.name} Playbook</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
              {current.headline}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              {current.desc}
            </p>

            <button
              onClick={() => onOpenModal('start-free')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl shadow-md transition-all"
            >
              <span>Deploy {current.name} Solution</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Workflow Diagram Box */}
          <div className="lg:col-span-6 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Pre-Configured Automation Blueprint
            </div>

            <div className="space-y-3 font-mono">
              {current.workflow.map((step, idx) => (
                <div key={idx} className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm text-xs">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 font-bold flex items-center justify-center text-[10px]">
                      0{idx + 1}
                    </span>
                    <span className="font-semibold text-slate-800">{step.label}</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded font-bold bg-slate-100 text-slate-600">
                    {step.channel}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 text-[11px] text-emerald-600 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Tested on over 1,000,000+ customer interactions</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
