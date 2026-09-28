import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  ShieldCheck, 
  Lock, 
  AlertCircle, 
  CheckCircle2, 
  Scale, 
  Clock, 
  ExternalLink 
} from 'lucide-react';
import { SEOHead } from '../../components/SEOHead';

export const LegalPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy' | 'aup' | 'dpa'>('terms');

  return (
    <div className="bg-white text-slate-900">
      <SEOHead 
        title="Legal, Terms of Service & Privacy Policy — CocoonMail"
        description="Review CocoonMail's Terms of Service, Customer Privacy Policy, Acceptable Use Policy, and Data Processing Addendum (DPA)."
      />

      {/* Header */}
      <section className="pt-16 pb-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 uppercase tracking-wider">
            <Scale className="w-4 h-4" />
            <span>Legal Documentation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Terms, Privacy &amp; Governance
          </h1>
          <p className="text-sm text-slate-600 max-w-2xl">
            Effective Date: September 2026. These agreements outline the terms under which CocoonMail provides cloud engagement software and API infrastructure.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="flex flex-wrap gap-2 p-1 bg-slate-100 rounded-xl border border-slate-200">
          <button
            onClick={() => setActiveTab('terms')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              activeTab === 'terms' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Terms of Service
          </button>
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              activeTab === 'privacy' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setActiveTab('aup')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              activeTab === 'aup' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Acceptable Use Policy (AUP)
          </button>
          <button
            onClick={() => setActiveTab('dpa')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              activeTab === 'dpa' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Data Processing Addendum (DPA)
          </button>
        </div>
      </section>

      {/* Document Body */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-8">
          
          {activeTab === 'terms' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-slate-900">1. Acceptance of Terms</h2>
              <p>
                By creating a CocoonMail account, accessing our cloud dashboard, or issuing requests to the CocoonMail REST and Webhook APIs, you agree to be bound by these Terms of Service. If you are entering into this agreement on behalf of a company or other legal entity, you represent that you have the legal authority to bind such entity.
              </p>

              <h2 className="text-xl font-bold text-slate-900">2. Service Provision &amp; Service Level Agreements</h2>
              <p>
                CocoonMail provides unified multi-channel messaging infrastructure, including email dispatch relays, WhatsApp Business API endpoints via Meta Cloud API, contact segmentation engines, and visual automation pipelines. We commit to a 99.99% monthly availability SLA for paid production plans.
              </p>

              <h2 className="text-xl font-bold text-slate-900">3. Account Credentials &amp; API Keys</h2>
              <p>
                Customers are solely responsible for safeguarding API secret tokens (e.g. <code>ccn_live_...</code>) and authentication credentials. Any API requests made using your credentials will be deemed authorized by you.
              </p>

              <h2 className="text-xl font-bold text-slate-900">4. Third-Party Service Dependencies</h2>
              <p>
                WhatsApp delivery capabilities depend on Meta Platforms, Inc. WhatsApp Business API policies and network availability. Customers agree to abide by all applicable Meta Business and WhatsApp Commercial Terms.
              </p>

              <h2 className="text-xl font-bold text-slate-900">5. Fees and Payment</h2>
              <p>
                Subscription plans are billed in advance on a monthly or annual recurring basis. WhatsApp conversation fees are billed based on Meta standard pricing categories (Marketing, Utility, Authentication, Service).
              </p>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-slate-900">1. Information We Collect</h2>
              <p>
                We collect information directly provided when registering an account (name, work email, company name, billing details) and technical metadata generated during API usage (IP addresses, request latency, delivery timestamps, user-agent headers).
              </p>

              <h2 className="text-xl font-bold text-slate-900">2. Processing of Customer Subscriber Data</h2>
              <p>
                In our capacity as a data processor, we process your end-user contacts, email addresses, phone numbers, and message bodies solely to execute delivery instructions requested by your account. We never sell, rent, or cross-market your subscriber records.
              </p>

              <h2 className="text-xl font-bold text-slate-900">3. Data Retention &amp; Deletion</h2>
              <p>
                Raw delivery event logs and webhook payloads are retained for 30 days for operational debugging and audit purposes, after which they are automatically purged. Subscribers who unsubscribe or exercise their right to be forgotten are irreversibly suppressed across all modules.
              </p>

              <h2 className="text-xl font-bold text-slate-900">4. Sub-Processors</h2>
              <p>
                We partner with audited infrastructure providers including AWS and Google Cloud Platform for cloud hosting, and Meta Platforms, Inc. for official WhatsApp Business API routing.
              </p>
            </div>
          )}

          {activeTab === 'aup' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-slate-900">1. Anti-Spam &amp; Opt-In Verification</h2>
              <p>
                CocoonMail strictly enforces permission-based marketing. You may only send marketing broadcasts to recipients who have explicitly consented (opted-in) to receive communication from your brand. Purchased lists, web-scraped directories, and co-registration lead shares are strictly prohibited.
              </p>

              <h2 className="text-xl font-bold text-slate-900">2. Unsubscribe Enforcement</h2>
              <p>
                Every commercial marketing email sent via CocoonMail must include an operable, 1-click unsubscribe mechanism. WhatsApp marketing templates must respect STOP / OPT-OUT keywords with instantaneous suppression.
              </p>

              <h2 className="text-xl font-bold text-slate-900">3. Prohibited Content</h2>
              <p>
                The platform may not be used to transmit illegal content, phishing or credential-harvesting schemes, unlicensed pharmaceuticals, malware, fraudulent schemes, or hate speech. Accounts violating these rules are subject to immediate termination without refund.
              </p>
            </div>
          )}

          {activeTab === 'dpa' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-slate-900">1. GDPR &amp; Standard Contractual Clauses (SCCs)</h2>
              <p>
                Our Data Processing Addendum incorporates the European Commission&apos;s Standard Contractual Clauses for international transfers of personal data to processors established in third countries.
              </p>

              <h2 className="text-xl font-bold text-slate-900">2. Security Measures &amp; Audits</h2>
              <p>
                CocoonMail maintains comprehensive technical and organizational measures (TOMs), including encryption at rest (AES-256), encryption in transit (TLS 1.3), continuous vulnerability monitoring, and role-based access control (RBAC).
              </p>

              <h2 className="text-xl font-bold text-slate-900">3. Data Subject Requests</h2>
              <p>
                We provide REST API endpoints and dashboard controls enabling customers to export, rectify, or purge subscriber records in fulfillment of GDPR Articles 15 through 20 within 24 hours.
              </p>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};
