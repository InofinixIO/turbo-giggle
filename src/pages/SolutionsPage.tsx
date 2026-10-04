import React from 'react';
import { 
  Store, 
  Laptop, 
  Briefcase, 
  HeartPulse, 
  GraduationCap, 
  Home, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Zap,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';
import { ModalType } from '../types';
import { useRouter } from '../router/RouterContext';
import { SolutionsSection } from '../components/home/SolutionsSection';

interface SolutionsPageProps {
  slug: string;
  onOpenModal: (type: ModalType) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ slug, onOpenModal }) => {
  const { navigate } = useRouter();

  const solutionDetails: Record<string, {
    title: string;
    subtitle: string;
    icon: any;
    color: string;
    stats: { label: string; value: string }[];
    useCases: string[];
    steps: { title: string; desc: string; channel: string }[];
  }> = {
    ecommerce: {
      title: 'E-commerce & D2C Brands',
      subtitle: 'Recover abandoned carts, send VIP catalog drops, and collect in-chat payments on WhatsApp & Email.',
      icon: Store,
      color: 'blue',
      stats: [
        { label: 'Cart Recovery Lift', value: '3.2x' },
        { label: 'Average WhatsApp Open Rate', value: '98.4%' },
        { label: 'Checkout Drop-off Reduction', value: '64%' }
      ],
      useCases: [
        'Automated abandoned cart recovery over WhatsApp within 30 minutes',
        'VIP flash sales with interactive product card carousels',
        'Direct in-chat order payment links via UPI and Razorpay',
        'Automated order confirmation and Bluedart/Delhivery shipment tracking'
      ],
      steps: [
        { title: 'Prospect Abandons Cart', desc: 'Customer leaves checkout after viewing running shoes', channel: 'Website Event' },
        { title: 'Automated 30-Min Wait', desc: 'Allows customer time to reconsider before engaging', channel: 'Delay Timer' },
        { title: 'Personalized WhatsApp Drop', desc: 'Sends product photo + 10% instant checkout voucher', channel: 'WhatsApp API' },
        { title: 'Instant UPI Payment Completed', desc: 'Order booked and inventory decremented in ERP', channel: 'Razorpay / Stripe' }
      ]
    },
    saas: {
      title: 'B2B SaaS & Tech Startups',
      subtitle: 'Turn trial signups into active paying customers with automated onboarding, usage alerts, and transactional API emails.',
      icon: Laptop,
      color: 'indigo',
      stats: [
        { label: 'Trial-to-Paid Lift', value: '+42%' },
        { label: 'Inbox Placement Rate', value: '99.8%' },
        { label: 'Median API Latency', value: '42ms' }
      ],
      useCases: [
        'Transactional welcome emails and instant API key issuance',
        'Usage quota threshold notifications sent via WhatsApp & Email',
        'Feature adoption drip sequences triggered by in-app telemetry',
        'Automated renewal invoice reminders with receipt PDFs'
      ],
      steps: [
        { title: 'User Registers Trial', desc: 'Account created and API workspace provisioned', channel: 'Auth Event' },
        { title: 'Transactional Welcome Sent', desc: 'Instant email with setup guide and SDK sample', channel: 'Email REST API' },
        { title: 'Feature Inactivity Check', desc: 'If no API call made within 72 hours', channel: 'Condition' },
        { title: 'Technical Consultation Invite', desc: 'Founder invite to 15-minute architecture review', channel: 'WhatsApp / Email' }
      ]
    },
    agencies: {
      title: 'Marketing & Growth Agencies',
      subtitle: 'Manage client accounts, deploy pre-tested campaign templates, and deliver white-label reporting from one master console.',
      icon: Briefcase,
      color: 'emerald',
      stats: [
        { label: 'Client Retention', value: '94%' },
        { label: 'Workspaces Supported', value: 'Unlimited' },
        { label: 'Time Saved per Campaign', value: '75%' }
      ],
      useCases: [
        'Multi-client isolated workspaces with custom domain sending',
        'Assistance securing official WhatsApp Green Badges for clients',
        'Reusable automation blueprints cloned with one click',
        'Automated client-ready PDF performance and ROAS summaries'
      ],
      steps: [
        { title: 'Brand Subaccount Created', desc: 'Client domain, DKIM and WhatsApp Business verified', channel: 'Admin Console' },
        { title: 'Blueprint Deployed', desc: 'Clone proven 8-step journey into client environment', channel: 'Automation' },
        { title: 'Multi-Channel Campaign Launch', desc: 'Scheduled broadcast across targeted VIP segments', channel: 'WhatsApp + Email' },
        { title: 'Automated Client Reporting', desc: 'Weekly attributed revenue delivered to stakeholders', channel: 'Analytics' }
      ]
    },
    healthcare: {
      title: 'Healthcare Clinics & Diagnostic Labs',
      subtitle: 'Drastically reduce no-shows with two-way appointment scheduling and deliver lab reports securely over WhatsApp.',
      icon: HeartPulse,
      color: 'rose',
      stats: [
        { label: 'No-Show Reduction', value: '82%' },
        { label: 'Report Download Speed', value: 'Sub-1min' },
        { label: 'HIPAA & GDPR Ready', value: '100%' }
      ],
      useCases: [
        'Automated appointment confirmations with 1-tap Google Calendar add',
        '24h prior interactive WhatsApp buttons to Confirm or Reschedule',
        'Secure password-protected lab report PDF delivery in WhatsApp',
        'Post-consultation medication instructions and follow-up prompts'
      ],
      steps: [
        { title: 'Consultation Scheduled', desc: 'Patient books slot via clinic portal or phone', channel: 'EMR Sync' },
        { title: 'WhatsApp Calendar Card', desc: 'Instant verification with clinic location pin', channel: 'WhatsApp' },
        { title: 'Interactive Day-Before Check', desc: 'Patient taps "Confirm" or "Reschedule" chip', channel: 'Quick Reply' },
        { title: 'Lab Results Dispatched', desc: 'Secure encrypted PDF delivered to patient inbox', channel: 'Secure Link' }
      ]
    },
    education: {
      title: 'Education, Universities & EdTech',
      subtitle: 'Engage prospective students, qualify admissions inquiries with AI counselors, and broadcast live class reminders.',
      icon: GraduationCap,
      color: 'amber',
      stats: [
        { label: 'Admissions Conversion', value: '+54%' },
        { label: 'Webinar Attendance', value: '88%' },
        { label: 'Counselor Response Time', value: '< 2 mins' }
      ],
      useCases: [
        'Meta Ads lead capture with instant syllabus delivery over WhatsApp',
        'AI course counselors qualifying student budgets and academic background',
        'Live webinar and lecture broadcast reminders 15 minutes prior',
        'Tuition fee payment links with instant installment plans'
      ],
      steps: [
        { title: 'Lead Submits Form', desc: 'Student downloads brochure from Instagram Ad', channel: 'Meta Ad' },
        { title: 'AI Counselor Qualification', desc: 'Natural language chat identifies interest & budget', channel: 'AI Agent' },
        { title: 'Webinar Zoom Invite Sent', desc: 'Automated WhatsApp reminder 15m before start', channel: 'Broadcast' },
        { title: 'Tuition Payment Collected', desc: 'Direct installment payment link in WhatsApp', channel: 'Payment' }
      ]
    },
    'real-estate': {
      title: 'Real Estate & Property Developers',
      subtitle: 'Deliver interactive project brochures, virtual floor plan walkthroughs, and schedule site viewings on WhatsApp.',
      icon: Home,
      color: 'teal',
      stats: [
        { label: 'Site Visit Booking Rate', value: '3.8x' },
        { label: 'Lead Contact Speed', value: 'Instant' },
        { label: 'Verified Buyer Pipeline', value: '₹40Cr+' }
      ],
      useCases: [
        'Instant WhatsApp PDF brochure delivery upon ad click',
        'Interactive floor plans and video walkthrough messages',
        'Site visit appointment scheduling with verified location pins',
        'Dedicated property advisor assignment with chat history handoff'
      ],
      steps: [
        { title: 'Ad Click Generated', desc: 'Buyer clicks luxury villa showcase ad', channel: 'Meta Ad' },
        { title: 'Brochure Catalog Sent', desc: 'Full high-res floor plans & pricing sheet', channel: 'WhatsApp Catalog' },
        { title: 'Site Visit Booked', desc: 'Customer selects preferred weekend slot', channel: 'Interactive' },
        { title: 'Advisor Handoff', desc: 'Relationship manager greets client at property', channel: 'Human Handoff' }
      ]
    }
  };

  const solution = solutionDetails[slug];

  // Route: /solutions (Overview Hub)
  if (!solution) {
    return (
      <div className="pt-24 pb-20">
        <SolutionsSection onOpenModal={onOpenModal} />
      </div>
    );
  }

  const Icon = solution.icon;

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bespoke Industry Hero */}
        <div className="py-12 border-b border-slate-100">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-4">
            <Icon className="w-4 h-4" />
            <span>Dedicated Industry Solution</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            {solution.title}
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed mb-8">
            {solution.subtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onOpenModal('start-free')}
              className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-blue-500/25 transition-all"
            >
              Start Free Trial for {solution.title.split(' ')[0]}
            </button>
            <button
              onClick={() => onOpenModal('book-demo')}
              className="px-7 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-all"
            >
              Book Industry Walkthrough
            </button>
          </div>
        </div>

        {/* Quantified Impact Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
          {solution.stats.map((s, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl font-black text-slate-900">{s.value}</div>
              <div className="text-xs font-bold text-blue-600 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Core Industry Use Cases */}
        <div className="py-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Engineered specifically for {solution.title}
            </h2>
            <div className="space-y-3">
              {solution.useCases.map((uc, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800">{uc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step Sequence */}
          <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-4">
            <div className="text-xs font-bold text-blue-400 uppercase tracking-wider">
              Automated Journey Blueprint
            </div>
            <div className="space-y-3 font-mono text-xs">
              {solution.steps.map((st, idx) => (
                <div key={idx} className="p-3 bg-slate-800 rounded-xl border border-slate-700 flex justify-between items-center">
                  <div>
                    <div className="font-bold text-white">{st.title}</div>
                    <div className="text-[11px] text-slate-400">{st.desc}</div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-slate-700 text-blue-300 text-[10px] font-bold">
                    {st.channel}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
