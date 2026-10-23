import React, { useState } from 'react';
import { HelpCircle, Search, ExternalLink, ArrowRight, BookOpen, MessageSquare, Mail, ShieldCheck } from 'lucide-react';
import { SEOHead } from '../../components/SEOHead';

export const HelpCenterPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { title: 'Getting Started', desc: 'Account provisioning, domain verification, and sandbox API keys', articles: 12, icon: BookOpen },
    { title: 'WhatsApp Business API', desc: 'Meta Business Manager setup, green tick, and phone number porting', articles: 18, icon: MessageSquare },
    { title: 'Email Deliverability', desc: 'DKIM records, SPF alignment, DMARC policies, and IP reputation', articles: 15, icon: Mail },
    { title: 'Security & Compliance', desc: 'GDPR compliance, ISO 27001, SOC 2, and data encryption standards', articles: 9, icon: ShieldCheck }
  ];

  const faqs = [
    {
      q: 'Do I need my own WhatsApp Business API account or does CocoonMail provide one?',
      a: 'CocoonMail is an official Meta Business Solution Provider (BSP). We provision and manage the official Meta Cloud API infrastructure for you directly, with zero proxy intermediaries or unofficial ban risks.'
    },
    {
      q: 'Can I send both bulk marketing campaigns and high-priority OTP emails?',
      a: 'Yes. CocoonMail strictly separates marketing newsletter pools from priority transactional relays. Your critical OTPs and receipts are never delayed by scheduled broadcast batches.'
    },
    {
      q: 'How does in-chat WhatsApp checkout handle payments?',
      a: 'CocoonMail integrates directly with Razorpay, Stripe, Cashfree, and WhatsApp Pay. Customers complete checkout securely via UPI or Card within the app, and you receive real-time webhook confirmation.'
    },
    {
      q: 'Can we migrate contacts from Mailchimp, Klaviyo, or Twilio?',
      a: 'Yes. Our automated 1-click CSV and REST API importer maps tags, custom attributes, and unsubscribe preferences automatically with zero loss of subscriber history.'
    }
  ];

  const filteredFaqs = searchQuery.trim() === ''
    ? faqs
    : faqs.filter(f => f.q.toLowerCase().includes(searchQuery.toLowerCase()) || f.a.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="bg-white text-slate-900">
      <SEOHead 
        title="Help Center, FAQs & Knowledge Base — CocoonMail"
        description="Search documentation, configuration guides, and FAQs for CocoonMail. Learn how to verify your domain, configure WhatsApp Business API, and set up visual workflows."
      />

      {/* Hero */}
      <section className="pt-14 pb-16 bg-gradient-to-b from-slate-50 via-indigo-50/20 to-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-indigo-600 uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Support &amp; Documentation</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">How can we help you?</h1>
          <p className="text-base text-slate-600 max-w-xl mx-auto">
            Search our documentation, step-by-step onboarding guides, and common developer questions.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative pt-2">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics (e.g., DKIM, WhatsApp green tick, webhooks, UPI)..."
              className="w-full bg-white border border-slate-300 rounded-2xl pl-12 pr-4 py-3.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="pt-2">
            <a
              href="https://kb.cocoonmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800"
            >
              <span>Visit Official Knowledge Base Portal (kb.cocoonmail.com)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((c, i) => {
            const Icon = c.icon;
            return (
              <a
                key={i}
                href="https://kb.cocoonmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-lg transition-all group block"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base group-hover:text-indigo-600 transition-colors flex items-center justify-between">
                  <span>{c.title}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{c.desc}</p>
                <span className="text-[11px] font-mono text-slate-400 block mt-3">{c.articles} articles</span>
              </a>
            );
          })}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-slate-200 bg-white space-y-2">
              <h3 className="text-base font-bold text-slate-900">{faq.q}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
