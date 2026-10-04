import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, Sparkles, Building, Mail, Phone, User, Globe } from 'lucide-react';
import { ModalType } from '../../types';

interface LeadModalProps {
  type: ModalType;
  onClose: () => void;
}

export const LeadModal: React.FC<LeadModalProps> = ({ type, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    primaryChannel: 'Both Email & WhatsApp',
    contactVolume: '10,000 - 50,000',
  });

  if (!type) return null;

  const isDemo = type === 'book-demo';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.name) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.cocoonmail.com/assets/logo-2.svg" 
              alt="Cocoonmail" 
              className="h-7 w-auto" 
            />
            <span className="text-sm font-semibold text-slate-900">
              {isDemo ? 'Schedule a Product Walkthrough' : 'Create Free Cocoonmail Account'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {isDemo ? "Demo Request Received!" : "Welcome to Cocoonmail!"}
              </h3>
              <p className="text-sm text-slate-600 max-w-sm mx-auto mb-6">
                {isDemo
                  ? `Thank you, ${formData.name}. Our platform specialist will contact you at ${formData.email} within 2 hours to confirm your tailored walkthrough.`
                  : `Your test environment has been prepared. We sent verification credentials to ${formData.email}.`}
              </p>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-left text-xs text-slate-600 space-y-1.5 mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-400">Selected Channels:</span>
                  <span className="font-semibold text-slate-700">{formData.primaryChannel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Monthly Volume:</span>
                  <span className="font-semibold text-slate-700">{formData.contactVolume} contacts</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Environment Status:</span>
                  <span className="font-semibold text-emerald-600">Provisioned · Cloud API Active</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-semibold transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
                  {isDemo ? 'Custom Live Demo' : '14-Day Full Access Trial'}
                </p>
                <h3 className="text-xl font-bold text-slate-900">
                  {isDemo ? 'See Cocoonmail in action' : 'Start engaging customers today'}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  No credit card required · Connect Email, WhatsApp & Meta in minutes
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Work Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Company / Brand</label>
                  <div className="relative">
                    <Building className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Acme Commerce"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Phone / WhatsApp</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Primary Channels</label>
                  <select
                    value={formData.primaryChannel}
                    onChange={(e) => setFormData({ ...formData, primaryChannel: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  >
                    <option value="Both Email & WhatsApp">Email + WhatsApp (Unified)</option>
                    <option value="WhatsApp Business API">WhatsApp Commerce & API</option>
                    <option value="Email Marketing">Email Marketing & API</option>
                    <option value="Meta Ads to WhatsApp">Meta Ads + WhatsApp</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Audience Size</label>
                  <select
                    value={formData.contactVolume}
                    onChange={(e) => setFormData({ ...formData, contactVolume: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  >
                    <option value="1,000 - 10,000">Up to 10,000 contacts</option>
                    <option value="10,000 - 50,000">10,000 - 50,000 contacts</option>
                    <option value="50,000 - 250,000">50,000 - 250,000 contacts</option>
                    <option value="250,000+">250,000+ contacts (Enterprise)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-semibold text-sm rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:shadow-xl"
                >
                  <span>{isDemo ? 'Request Guided Walkthrough' : 'Launch Free Account'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-400 pt-1">
                By submitting, you agree to Cocoonmail's Terms of Service and Privacy Policy.
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
