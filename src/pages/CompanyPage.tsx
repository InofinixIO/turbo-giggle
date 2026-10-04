import React, { useState } from 'react';
import { 
  Building, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Users, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Globe2,
  Sparkles
} from 'lucide-react';
import { ModalType } from '../types';

interface CompanyPageProps {
  slug: string;
  onOpenModal: (type: ModalType) => void;
}

export const CompanyPage: React.FC<CompanyPageProps> = ({ slug, onOpenModal }) => {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', subject: 'Enterprise Inquiry' });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  // Route: /company/contact
  if (slug === 'contact') {
    return (
      <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Get in Touch</span>
            <h1 className="text-4xl font-extrabold text-slate-900 mt-2 mb-4">
              Speak with a Cocoonmail Solutions Specialist
            </h1>
            <p className="text-slate-600 text-sm">
              Whether you are scaling WhatsApp campaigns, migrating from another email provider, or need enterprise SLAs, our team is here to assist.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-5 bg-slate-900 text-white p-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Direct Headquarters</h3>
                  <p className="text-xs text-slate-400">
                    Cocoonmail Technologies Inc.<br />
                    Global SaaS Operations & India Regional Engineering Hub.
                  </p>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span>support@cocoonmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe2 className="w-4 h-4 text-emerald-400" />
                    <span>Global Support across US, EU & APAC</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-4 h-4 text-violet-400" />
                    <span>Enterprise 99.99% Uptime SLA</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-800 text-[11px] text-slate-500">
                Official Meta Business Solution Partner
              </div>
            </div>

            <div className="md:col-span-7 p-8">
              {contactSubmitted ? (
                <div className="text-center py-12 space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Message Received</h3>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Thank you, {formData.name}. Our enterprise solutions engineer will respond to {formData.email} within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Priya Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Work Email</label>
                      <input
                        type="email"
                        required
                        placeholder="priya@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Topic</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Enterprise Inquiry">Enterprise Volume & SLA</option>
                      <option value="WhatsApp Green Badge">WhatsApp Cloud API & Green Badge</option>
                      <option value="Custom Integration">Custom CRM / API Integration</option>
                      <option value="Agency Partnership">Agency Partnership Program</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Message</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about your active contact database size and channels..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors"
                  >
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Route: /company/about (default)
  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-4">
            <Building className="w-3.5 h-3.5" />
            <span>About Cocoonmail</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            One platform. Every conversation. Every conversion.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We founded Cocoonmail with a single conviction: modern businesses shouldn't have to stitch together 6 disconnected tools to talk to their customers and sell products.
          </p>
        </div>

        {/* Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <Sparkles className="w-6 h-6 text-blue-600 mb-3" />
            <h3 className="text-base font-bold text-slate-900 mb-2">Connected, Not Fragmented</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              When email and WhatsApp communicate with the same customer catalog and behavioral segments, conversions naturally multiply.
            </p>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <ShieldCheck className="w-6 h-6 text-emerald-600 mb-3" />
            <h3 className="text-base font-bold text-slate-900 mb-2">Uncompromising Reliability</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Sub-second message delivery, 99.8% inbox placement, and enterprise SOC2 compliance from day one.
            </p>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <Globe2 className="w-6 h-6 text-violet-600 mb-3" />
            <h3 className="text-base font-bold text-slate-900 mb-2">Global SaaS, Local Depth</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Built for high-growth global teams with native support for India's high-velocity WhatsApp commerce, UPI rails, and regional localization.
            </p>
          </div>
        </div>

        <div className="p-8 bg-slate-900 text-white rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Ready to modernize your customer engagement?</h3>
            <p className="text-xs text-slate-400 mt-1">Get started with a 14-day free trial or speak with an architect.</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => onOpenModal('start-free')}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl"
            >
              Start Free
            </button>
            <button
              onClick={() => onOpenModal('book-demo')}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl"
            >
              Book a Demo
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
