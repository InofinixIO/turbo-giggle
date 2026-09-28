import React, { useState } from 'react';
import { Link } from 'react-router';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Zap, 
  Code2, 
  Users, 
  Heart, 
  Sparkles,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { SEOHead } from '../../components/SEOHead';

interface JobRole {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
}

export const CareersPage: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>('all');
  const [activeJob, setActiveJob] = useState<JobRole | null>(null);

  const roles: JobRole[] = [
    {
      id: 'staff-distributed-systems',
      title: 'Staff Distributed Systems Engineer (MTA & Relay)',
      department: 'Engineering',
      location: 'Remote (Global)',
      type: 'Full-time',
      experience: '6+ years',
      description: 'Lead the architecture of our sub-second transactional email MTA relay, TCP connection pooling, and multi-region outbound queue pipelines.',
      requirements: [
        'Deep experience with Go, Rust, or C++ and low-level network I/O',
        'Strong understanding of SMTP protocols, TLS handshakes, and DNS resolution',
        'Experience scaling message queues (Kafka, Redis, or NATS) to billions of monthly events'
      ]
    },
    {
      id: 'senior-whatsapp-bsp-engineer',
      title: 'Senior WhatsApp Protocol & Integration Engineer',
      department: 'Engineering',
      location: 'Remote (Americas / EMEA / APAC)',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Scale our official Meta Cloud API infrastructure, interactive component parsers, dynamic catalog sync, and webhook fan-out clusters.',
      requirements: [
        'Expertise in Node.js / TypeScript and concurrent webhook stream processing',
        'Hands-on experience with Meta Graph API, WhatsApp Business API (WABA) or similar messaging APIs',
        'Passion for sub-100ms response times and fault-tolerant state machines'
      ]
    },
    {
      id: 'staff-frontend-infra',
      title: 'Staff Frontend Infrastructure Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Own the performance, accessibility, and canvas architecture for our visual workflow automation builder and dual template editors.',
      requirements: [
        'Mastery of React, TypeScript, HTML canvas/SVG rendering, and state management',
        'Obsession with micro-interactions, keyboard navigation, and WCAG AA accessibility',
        'Proven track record building complex SaaS dashboards or design tools'
      ]
    },
    {
      id: 'solutions-architect-enterprise',
      title: 'Enterprise Solutions Architect',
      department: 'Solutions',
      location: 'Remote (US or EU)',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Partner with high-growth merchants, fintechs, and SaaS customers to design omnichannel architectures, custom webhooks, and deliverability ramp plans.',
      requirements: [
        'Strong technical fluency with REST APIs, authentication headers, and database schemas',
        'Exceptional communication skills and ability to lead technical proof-of-concept projects',
        'Prior experience in marketing automation, transactional messaging, or cloud SaaS'
      ]
    },
    {
      id: 'developer-relations-lead',
      title: 'Developer Relations & Technical Content Lead',
      department: 'DevRel',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Author reference implementations, SDK documentation, video walkthroughs, and community sample apps that developers love.',
      requirements: [
        'Active coding experience with TypeScript/Node, Python, and modern web frameworks',
        'Clear, concise technical writing with zero marketing fluff',
        'Empathy for developer onboarding hurdles and API ergonomics'
      ]
    }
  ];

  const filteredRoles = selectedDept === 'all' 
    ? roles 
    : roles.filter(r => r.department.toLowerCase() === selectedDept.toLowerCase());

  return (
    <div className="bg-white text-slate-900">
      <SEOHead 
        title="Careers & Open Engineering Roles — CocoonMail"
        description="Join CocoonMail to build the unified customer engagement platform for high-volume WhatsApp, email deliverability, AI agents, and conversational commerce."
      />

      {/* Header */}
      <section className="pt-16 pb-20 bg-gradient-to-b from-slate-50 via-indigo-50/20 to-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-indigo-600 uppercase tracking-wider">
            <Briefcase className="w-4 h-4" />
            <span>Join Our Team</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Build the modern backbone of customer engagement.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We are a remote-first, engineering-led team obsessed with low-latency messaging, pristine deliverability, and delightful developer tools.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-600" />
              <span>Speed &amp; Craft</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We ship continuously, eliminate bureaucratic meetings, and sweat every millisecond of UI latency and API response time.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Globe className="w-4 h-4 text-emerald-600" />
              <span>Remote-First &amp; Async</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Work from wherever you produce your best work. We value clear written documentation and documented design decisions over synchronous calls.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-indigo-600" />
              <span>Customer Obsession</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every engineer talks to real customers and reads production delivery logs. We solve real operational bottlenecks.
            </p>
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-black text-slate-900">Open Positions</h2>
            <p className="text-xs text-slate-500 mt-1">We are hiring globally across multiple time zones.</p>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
            {['all', 'engineering', 'solutions', 'devrel'].map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg capitalize transition-colors cursor-pointer ${
                  selectedDept === dept ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {dept === 'devrel' ? 'DevRel' : dept}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredRoles.map((role) => (
            <div
              key={role.id}
              className="p-6 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-xs transition-all bg-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group"
            >
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="font-semibold text-indigo-600">{role.department}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {role.location}</span>
                  <span aria-hidden="true">·</span>
                  <span>{role.experience}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {role.title}
                </h3>
                <p className="text-xs text-slate-600 max-w-3xl leading-relaxed">
                  {role.description}
                </p>
              </div>

              <button
                onClick={() => setActiveJob(role)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-indigo-600 hover:text-white text-slate-800 text-xs font-semibold cursor-pointer transition-colors shrink-0"
              >
                View Role Details &rarr;
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Role Details Modal */}
      {activeJob && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setActiveJob(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 text-lg font-bold cursor-pointer"
            >
              ✕
            </button>

            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-1">
                <span>{activeJob.department}</span>
                <span aria-hidden="true">·</span>
                <span>{activeJob.location}</span>
              </div>
              <h2 className="text-2xl font-black text-slate-900">{activeJob.title}</h2>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">{activeJob.description}</p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">What We Are Looking For</h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {activeJob.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
              <p className="font-semibold text-slate-900">How to apply:</p>
              <p>Email your resume, GitHub profile or portfolio to <a href={`mailto:careers@cocoonmail.com?subject=Application: ${encodeURIComponent(activeJob.title)}`} className="text-indigo-600 font-bold hover:underline">careers@cocoonmail.com</a> with the role title in the subject line.</p>
            </div>

            <div className="flex gap-3">
              <a
                href={`mailto:careers@cocoonmail.com?subject=Application: ${encodeURIComponent(activeJob.title)}`}
                className="flex-1 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs text-center cursor-pointer transition-colors"
              >
                Apply via Email
              </a>
              <button
                onClick={() => setActiveJob(null)}
                className="py-3 px-4 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 font-semibold text-xs cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
