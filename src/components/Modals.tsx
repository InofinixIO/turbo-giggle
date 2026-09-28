import React, { useState } from 'react';
import { X, Check, ArrowRight, Sparkles, Smartphone, Mail, Bot, ShoppingBag, Calendar, CheckCircle2, Lock, LogIn } from 'lucide-react';

interface StartFreeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StartFreeModal: React.FC<StartFreeModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    phone: '',
    channels: ['whatsapp', 'email'] as string[],
    volume: '25000'
  });
  const [testSent, setTestSent] = useState(false);

  if (!isOpen) return null;

  const toggleChannel = (ch: string) => {
    setFormData((prev) => ({
      ...prev,
      channels: prev.channels.includes(ch)
        ? prev.channels.filter((c) => c !== ch)
        : [...prev.channels, ch]
    }));
  };

  const handleDispatchTest = () => {
    setTestSent(true);
    setTimeout(() => {
      setStep(3);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Step Indicator */}
        <div className="flex items-center gap-2 mb-6">
          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
            step >= 1 ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-400'
          }`}>1</span>
          <div className="h-0.5 w-6 bg-slate-200" />
          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
            step >= 2 ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-400'
          }`}>2</span>
          <div className="h-0.5 w-6 bg-slate-200" />
          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
            step === 3 ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-400'
          }`}>3</span>
          <span className="text-xs text-slate-500 font-mono ml-auto">Step {step} of 3</span>
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Start your 14-day free trial</h3>
              <p className="text-xs text-slate-500 mt-1">
                Zero setup fees. Full access to Email, WhatsApp API, and AI Agents.
              </p>
            </div>

            <div className="space-y-3 pt-2 text-xs">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Work Email</label>
                <input
                  type="email"
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  placeholder="aarav@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Company / Brand Name</label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="e.g. Bombay Apparel Co."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Your Mobile / WhatsApp Number (for test dispatch)</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98201 42100"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              disabled={!formData.workEmail || !formData.companyName}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer mt-4"
            >
              <span>Continue to Channel Selection</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Select your active channels</h3>
              <p className="text-xs text-slate-500 mt-1">
                You can activate all channels during your trial without extra charges.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <button
                type="button"
                onClick={() => toggleChannel('whatsapp')}
                className={`w-full p-3 rounded-xl border text-left flex items-center justify-between text-xs cursor-pointer ${
                  formData.channels.includes('whatsapp') ? 'bg-emerald-50 border-emerald-300 text-emerald-900' : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Smartphone className="w-4 h-4 text-emerald-600" />
                  <div>
                    <strong className="block font-semibold">WhatsApp Business API &amp; Green Tick</strong>
                    <span className="text-[11px] text-slate-500">Official Meta BSP routing</span>
                  </div>
                </div>
                {formData.channels.includes('whatsapp') && <Check className="w-4 h-4 text-emerald-600" />}
              </button>

              <button
                type="button"
                onClick={() => toggleChannel('email')}
                className={`w-full p-3 rounded-xl border text-left flex items-center justify-between text-xs cursor-pointer ${
                  formData.channels.includes('email') ? 'bg-blue-50 border-blue-300 text-blue-900' : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <div>
                    <strong className="block font-semibold">High-Deliverability Email &amp; SMTP</strong>
                    <span className="text-[11px] text-slate-500">Dedicated IP pools &amp; drag-and-drop designer</span>
                  </div>
                </div>
                {formData.channels.includes('email') && <Check className="w-4 h-4 text-blue-600" />}
              </button>

              <button
                type="button"
                onClick={() => toggleChannel('ai')}
                className={`w-full p-3 rounded-xl border text-left flex items-center justify-between text-xs cursor-pointer ${
                  formData.channels.includes('ai') ? 'bg-purple-50 border-purple-300 text-purple-900' : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Bot className="w-4 h-4 text-purple-600" />
                  <div>
                    <strong className="block font-semibold">Autonomous WhatsApp AI Sales Agents</strong>
                    <span className="text-[11px] text-slate-500">24/7 product catalog recommendations</span>
                  </div>
                </div>
                {formData.channels.includes('ai') && <Check className="w-4 h-4 text-purple-600" />}
              </button>

              <button
                type="button"
                onClick={() => toggleChannel('payments')}
                className={`w-full p-3 rounded-xl border text-left flex items-center justify-between text-xs cursor-pointer ${
                  formData.channels.includes('payments') ? 'bg-amber-50 border-amber-300 text-amber-900' : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <ShoppingBag className="w-4 h-4 text-amber-600" />
                  <div>
                    <strong className="block font-semibold">In-Chat UPI &amp; Stripe Checkout</strong>
                    <span className="text-[11px] text-slate-500">Zero-redirect conversational commerce</span>
                  </div>
                </div>
                {formData.channels.includes('payments') && <Check className="w-4 h-4 text-amber-600" />}
              </button>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => setStep(1)}
                className="py-2.5 px-4 rounded-xl border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-50 cursor-pointer"
              >
                Back
              </button>
              <button
                onClick={handleDispatchTest}
                disabled={testSent}
                className="flex-1 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>{testSent ? 'Provisioning Sandbox...' : 'Complete Setup & Send Test Ping'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900">Workspace Ready!</h3>
            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              We dispatched an interactive welcome sandbox to <strong>{formData.workEmail || 'your email'}</strong> and registered your WhatsApp test line.
            </p>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 font-mono text-left space-y-1">
              <p>Workspace: {formData.companyName}.cocoonmail.com</p>
              <p>Plan: Growth Tier (14-Day Full Sandbox)</p>
              <p>API Key: cm_live_{Math.random().toString(36).substring(2, 10)}</p>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors cursor-pointer"
            >
              Enter CocoonMail Dashboard
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookDemoModal: React.FC<BookDemoModalProps> = ({ isOpen, onClose }) => {
  const [booked, setBooked] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '11-50',
    primaryInterest: 'In-chat WhatsApp commerce',
    slot: 'Tomorrow, 2:30 PM (IST / GMT+5:30)'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!booked ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-1">
                <Calendar className="w-3.5 h-3.5" /> 1-on-1 Architecture Walkthrough
              </div>
              <h3 className="text-xl font-bold text-slate-900">Book a Personalized Demo</h3>
              <p className="text-xs text-slate-500 mt-1">
                Review your current funnel with a senior customer engagement engineer.
              </p>
            </div>

            <div className="space-y-3 pt-2 text-xs">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Aarav Sharma"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Work Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="aarav@brand.com"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Company Size</label>
                  <select
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 bg-white"
                  >
                    <option value="1-10">1-10 Employees</option>
                    <option value="11-50">11-50 Employees</option>
                    <option value="51-250">51-250 Employees</option>
                    <option value="250+">250+ Enterprise</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Select Time Window</label>
                  <select
                    value={formData.slot}
                    onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 bg-white"
                  >
                    <option value="Tomorrow, 2:30 PM IST">Tomorrow, 2:30 PM IST</option>
                    <option value="Tomorrow, 5:00 PM IST">Tomorrow, 5:00 PM IST</option>
                    <option value="Thursday, 3:00 PM BST / UK">Thursday, 3:00 PM BST</option>
                    <option value="Friday, 11:00 AM EST / US">Friday, 11:00 AM EST</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Primary Area of Focus</label>
                <select
                  value={formData.primaryInterest}
                  onChange={(e) => setFormData({ ...formData, primaryInterest: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 bg-white"
                >
                  <option value="In-chat WhatsApp commerce">In-chat WhatsApp Catalog &amp; UPI Payments</option>
                  <option value="AI conversational agents">Autonomous WhatsApp AI Shopping Agents</option>
                  <option value="Multichannel automation">Visual Multichannel Workflows (Email + WA)</option>
                  <option value="Meta Ads attribution">Click-to-WhatsApp Ads &amp; Meta CAPI ROAS</option>
                  <option value="Agency workspace">Multi-brand Agency Command Center</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer mt-4"
            >
              <span>Confirm Demo Reservation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900">Demo Scheduled!</h3>
            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              A calendar invite and Google Meet link have been sent to <strong>{formData.email}</strong>.
            </p>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 font-mono text-left space-y-1">
              <p>Host: Nikhil Verma (Principal Solutions Architect)</p>
              <p>Slot: {formData.slot}</p>
              <p>Focus: {formData.primaryInterest}</p>
            </div>

            <button
              onClick={onClose}
              className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [passwordResetNotice, setPasswordResetNotice] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoggingIn(true);
    setTimeout(() => {
      setLoggingIn(false);
      setLoggedIn(true);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!loggedIn ? (
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="text-center">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-sm mx-auto mb-2">
                CM
              </div>
              <h3 className="text-xl font-bold text-slate-900">Sign in to CocoonMail</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Access your campaigns, WhatsApp API console, and analytics.
              </p>
            </div>

            <div className="space-y-3 pt-2 text-xs">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Work Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="aarav@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="font-semibold text-slate-700">Password</label>
                  <button 
                    type="button" 
                    onClick={() => setPasswordResetNotice(true)} 
                    className="text-[11px] text-indigo-600 hover:underline cursor-pointer"
                  >
                    Forgot password?
                  </button>
                </div>
                {passwordResetNotice && (
                  <p className="text-[11px] text-emerald-600 mb-1">Reset link dispatched to your work email.</p>
                )}
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loggingIn}
              className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer mt-4"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>{loggingIn ? 'Authenticating...' : 'Sign In'}</span>
            </button>

            <div className="pt-2 text-center text-xs text-slate-500">
              <span>Don&apos;t have an account? </span>
              <button 
                type="button"
                onClick={onClose}
                className="text-indigo-600 font-semibold hover:underline"
              >
                Start free trial
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-bold text-slate-900">Welcome Back!</h3>
            <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
              Redirecting to your verified WhatsApp &amp; Email dashboard...
            </p>

            <button
              onClick={onClose}
              className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
            >
              Continue to Dashboard
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
