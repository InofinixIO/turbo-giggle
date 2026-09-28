import React from 'react';
import { Link } from 'react-router';
import { 
  ShieldCheck, 
  Lock, 
  Key, 
  Server, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  RefreshCw, 
  Globe, 
  Zap,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { SEOHead } from '../../components/SEOHead';

export const SecurityPage: React.FC = () => {
  const securityPillars = [
    {
      title: 'Encryption at Rest & In Transit',
      desc: 'All customer data, message templates, contact metadata, and webhooks are encrypted in transit using TLS 1.3 and at rest using AES-256 with automated KMS key rotation.',
      icon: Lock,
      points: ['TLS 1.3 mandatory cipher suites', 'AES-256 GCM database encryption', 'HSM-backed KMS key rotation']
    },
    {
      title: 'Official Meta Cloud API Architecture',
      desc: 'We operate strictly as an official Meta Business Solution Provider (BSP). We never run headless browsers, reverse-engineered web scrapers, or third-party proxy tunnels.',
      icon: Server,
      points: ['Direct Meta Cloud API integration', 'Zero session hijacking vulnerability', 'Official Green Tick verification support']
    },
    {
      title: 'Tenant Isolation & Multi-Tenancy Security',
      desc: 'Customer databases, segment computation nodes, and transactional email queues are strictly isolated. No cross-tenant data leakage is structurally possible.',
      icon: Key,
      points: ['Row-level security enforcement', 'Isolated Redis queue partitions', 'Dedicated outbound IP pool options']
    },
    {
      title: 'Regulatory & Privacy Compliance',
      desc: 'CocoonMail is architected from day one to comply with the European Union GDPR, California Consumer Privacy Act (CCPA), and India DPDP 2023 regulations.',
      icon: ShieldCheck,
      points: ['Automated GDPR right-to-be-forgotten', 'Standard Data Processing Agreements (DPA)', 'Data residency options in EU and US']
    }
  ];

  return (
    <div className="bg-white text-slate-900">
      <SEOHead 
        title="Security, Privacy & Infrastructure Compliance — CocoonMail"
        description="Learn how CocoonMail protects mission-critical customer data with AES-256 encryption, TLS 1.3, Meta Cloud API compliance, GDPR, and 99.99% uptime SLAs."
      />

      {/* Header */}
      <section className="pt-16 pb-20 bg-gradient-to-b from-slate-50 via-indigo-50/20 to-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-indigo-600 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Enterprise Trust &amp; Security</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Security built into every byte and every conversation.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From financial OTP relays to conversational WhatsApp commerce, our infrastructure is built to meet the strictest security, compliance, and availability standards.
          </p>
        </div>
      </section>

      {/* Key Stats Bar */}
      <section className="border-y border-slate-200 bg-slate-50/60 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-2xl sm:text-3xl font-black text-slate-900">99.99%</p>
            <p className="text-xs text-slate-500 mt-1">Uptime SLA Guarantee</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-black text-slate-900">AES-256</p>
            <p className="text-xs text-slate-500 mt-1">Encryption at Rest</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-black text-slate-900">TLS 1.3</p>
            <p className="text-xs text-slate-500 mt-1">Encrypted In Transit</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-black text-slate-900">Official BSP</p>
            <p className="text-xs text-slate-500 mt-1">Meta Certified Cloud API</p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {securityPillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="p-8 rounded-3xl border border-slate-200 bg-white hover:border-indigo-300 transition-all space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{p.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                <div className="pt-2 border-t border-slate-100 space-y-2">
                  {p.points.map((pt, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Vulnerability Disclosure */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Responsible Vulnerability Disclosure</h3>
            <p className="text-xs text-slate-400 max-w-xl leading-relaxed">
              We value the contributions of independent security researchers. If you believe you have discovered a vulnerability in our services, please report it to our dedicated team.
            </p>
          </div>
          <a
            href="mailto:security@cocoonmail.com"
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold text-xs transition-colors shrink-0"
          >
            Contact security@cocoonmail.com &rarr;
          </a>
        </div>
      </section>
    </div>
  );
};
