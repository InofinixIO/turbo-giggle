import React, { useState } from 'react';
import { 
  CreditCard, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Receipt, 
  Check, 
  ChevronRight, 
  RefreshCw, 
  QrCode, 
  Smartphone, 
  Lock,
  Mail,
  MessageSquare,
  Globe
} from 'lucide-react';
import { PlatformPageId } from '../components/PlatformNavSwitcher';

interface PaymentsPageProps {
  onOpenStartFree: () => void;
  onOpenBookDemo: () => void;
  onNavigateModule: (moduleId: PlatformPageId) => void;
}

export const PaymentsPage: React.FC<PaymentsPageProps> = ({
  onOpenStartFree,
  onOpenBookDemo,
  onNavigateModule
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'applepay'>('upi');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  const handleSimulatePayment = () => {
    setIsProcessing(true);
    setIsPaid(false);
    setTimeout(() => {
      setIsProcessing(false);
      setIsPaid(true);
    }, 1100);
  };

  const resetPayment = () => {
    setIsPaid(false);
    setIsProcessing(false);
  };

  return (
    <div className="bg-white text-slate-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-teal-50/70 via-emerald-50/30 to-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0d94880a_1px,transparent_1px),linear-gradient(to_bottom,#0d94880a_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-teal-600 tracking-wide uppercase">
            <CreditCard className="w-4 h-4" />
            <span>Conversational Payments &amp; Checkout</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-600">Zero Drop-Off Commerce</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Copy */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Frictionless checkout <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600">inside the conversation</span>.
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Accept payments natively within WhatsApp and Email. Support UPI, credit/debit cards, NetBanking, Apple Pay, and Google Pay with instant automated tax invoices, order receipts, and webhook fulfillment.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenStartFree}
                  className="px-7 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-base shadow-lg shadow-teal-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 cursor-pointer"
                >
                  <span>Enable In-Chat Payments</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenBookDemo}
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200 shadow-sm transition-all hover:border-slate-300 flex items-center gap-2 cursor-pointer"
                >
                  <span>View Supported Gateways</span>
                </button>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Razorpay, Stripe &amp; Cashfree</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Sub-30s Checkout Completion</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>PCI-DSS Level 1 Encrypted</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Simulator: Live In-Conversation Payment Modal */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xl shadow-teal-900/10 overflow-hidden">
                
                {/* Header */}
                <div className="bg-slate-900 px-4 py-3 flex items-center justify-between text-white border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Lock className="w-3.5 h-3.5 text-teal-400" />
                    <span className="text-xs font-mono text-slate-300">CocoonPay 256-Bit SSL Checkout</span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 font-mono">Order #CCN-9842</span>
                </div>

                {/* Body Content */}
                <div className="p-6 bg-slate-50 min-h-[340px]">
                  {!isPaid ? (
                    <div className="space-y-4 max-w-sm mx-auto bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-xs">
                      
                      {/* Order Summary */}
                      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                        <div>
                          <p className="font-bold text-slate-900 text-sm">Aura Fashion Order</p>
                          <p className="text-[11px] text-slate-500">1x Linen Oxford Shirt (Size M)</p>
                        </div>
                        <p className="text-lg font-black text-slate-900 font-mono">$65.00</p>
                      </div>

                      {/* Payment Method Selector */}
                      <div className="space-y-1.5">
                        <label className="text-slate-600 font-medium">Select Payment Method:</label>
                        <div className="grid grid-cols-3 gap-2">
                          <button
                            onClick={() => setPaymentMethod('upi')}
                            className={`p-2 rounded-lg border text-center transition-all cursor-pointer ${
                              paymentMethod === 'upi' ? 'bg-teal-50 border-teal-500 text-teal-800 font-bold' : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                            }`}
                          >
                            UPI / QR
                          </button>
                          <button
                            onClick={() => setPaymentMethod('card')}
                            className={`p-2 rounded-lg border text-center transition-all cursor-pointer ${
                              paymentMethod === 'card' ? 'bg-teal-50 border-teal-500 text-teal-800 font-bold' : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                            }`}
                          >
                            Card
                          </button>
                          <button
                            onClick={() => setPaymentMethod('applepay')}
                            className={`p-2 rounded-lg border text-center transition-all cursor-pointer ${
                              paymentMethod === 'applepay' ? 'bg-teal-50 border-teal-500 text-teal-800 font-bold' : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                            }`}
                          >
                            Apple Pay
                          </button>
                        </div>
                      </div>

                      {/* Method Details */}
                      {paymentMethod === 'upi' && (
                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-center">
                          <p className="text-[11px] text-slate-600 font-medium">Instant UPI App Redirect (GPay / PhonePe / Paytm)</p>
                          <div className="w-16 h-16 bg-white border border-slate-300 rounded-lg mx-auto flex items-center justify-center text-slate-400">
                            <QrCode className="w-10 h-10 text-slate-700" />
                          </div>
                          <span className="text-[10px] text-slate-400 block">or scan dynamic QR code</span>
                        </div>
                      )}

                      {paymentMethod === 'card' && (
                        <div className="space-y-2">
                          <input 
                            type="text" 
                            defaultValue="•••• •••• •••• 4242" 
                            disabled 
                            className="w-full bg-slate-50 border border-slate-200 rounded p-1.5 text-xs text-slate-700 font-mono"
                          />
                          <div className="grid grid-cols-2 gap-2">
                            <input type="text" defaultValue="12/28" disabled className="bg-slate-50 border border-slate-200 rounded p-1.5 text-xs text-slate-700 font-mono" />
                            <input type="text" defaultValue="•••" disabled className="bg-slate-50 border border-slate-200 rounded p-1.5 text-xs text-slate-700 font-mono" />
                          </div>
                        </div>
                      )}

                      {paymentMethod === 'applepay' && (
                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
                          <p className="text-[11px] text-slate-600">Biometric TouchID / FaceID Authentication</p>
                        </div>
                      )}

                      {/* Submit Pay Button */}
                      <button
                        onClick={handleSimulatePayment}
                        disabled={isProcessing}
                        className="w-full py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                      >
                        {isProcessing ? (
                          <>
                            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                            <span>Authorizing $65.00...</span>
                          </>
                        ) : (
                          <>
                            <Lock className="w-3 h-3" />
                            <span>Authorize &amp; Pay $65.00</span>
                          </>
                        )}
                      </button>
                    </div>
                  ) : (
                    /* Payment Complete Screen */
                    <div className="space-y-4 max-w-sm mx-auto bg-white p-5 rounded-2xl border border-emerald-300 shadow-md text-xs animate-in fade-in duration-300">
                      <div className="text-center space-y-1">
                        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2">
                          <Check className="w-6 h-6 stroke-[3]" />
                        </div>
                        <h4 className="font-extrabold text-slate-900 text-base">Payment Successful!</h4>
                        <p className="text-[11px] text-slate-500">Order #CCN-9842 · $65.00 Settled</p>
                      </div>

                      {/* Automated Receipt Notice */}
                      <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 space-y-2">
                        <p className="font-bold text-emerald-900 text-[11px]">Instant Automated Fulfillment:</p>
                        <div className="flex items-center gap-2 text-emerald-800 text-[11px]">
                          <MessageSquare className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>WhatsApp order confirmation sent</span>
                        </div>
                        <div className="flex items-center gap-2 text-emerald-800 text-[11px]">
                          <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>PDF Tax invoice emailed to customer</span>
                        </div>
                      </div>

                      <button
                        onClick={resetPayment}
                        className="w-full py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-semibold text-xs transition-colors cursor-pointer"
                      >
                        Test Another Transaction
                      </button>
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="bg-slate-900 px-4 py-2 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Smart Retry Engine: <strong className="text-teal-300">Zero Failed Payment Leaks</strong></span>
                  <span className="text-emerald-400 font-medium">Settlement: Instant Webhook</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE CAPABILITIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <h2 className="text-xs font-bold text-teal-600 uppercase tracking-wider">Payments Engine</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Enterprise Payment Orchestration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
                <Globe className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">Multi-Gateway Failover Routing</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect Razorpay, Cashfree, Stripe, PayU, and PayPal. If one gateway has downtime, transactions automatically failover with zero customer interruption.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <Receipt className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">Automated Tax &amp; GST Invoicing</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Generates compliant PDF invoices with sequential numbering, correct GST tax brackets, and sends them via transactional email and WhatsApp.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 hover:border-cyan-300 hover:shadow-lg transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">Instant Webhook Fulfillment</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Receive signed HMAC webhooks on `payment.captured` to fulfill orders in your warehouse, unlock digital content, or update ERP inventory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT CONNECTS TO THE REST OF COCOONMAIL */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-teal-200 bg-white rounded-3xl p-8 sm:p-12 shadow-sm">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600">Unified Architecture</span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 mb-3">
                How Payments connect to the rest of CocoonMail
              </h3>
              <p className="text-sm text-slate-600">
                Payment isn&apos;t just the end of a transaction. It feeds customer data back into segmentation, triggers onboarding flows, and closes attribution loops.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <button
                onClick={() => onNavigateModule('transactional-email')}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-400 hover:bg-sky-50/20 transition-all text-left group cursor-pointer"
              >
                <h5 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-sky-600">Transactional Receipts</h5>
                <p className="text-xs text-slate-500">Every successful payment generates sub-second email receipt with PDF invoice.</p>
              </button>

              <button
                onClick={() => onNavigateModule('automation')}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/20 transition-all text-left group cursor-pointer"
              >
                <h5 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-indigo-600">Post-Purchase Journey</h5>
                <p className="text-xs text-slate-500">Enrolls buyer into automated delivery updates and review collection flows.</p>
              </button>

              <button
                onClick={() => onNavigateModule('analytics')}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-blue-50/20 transition-all text-left group cursor-pointer"
              >
                <h5 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-blue-600">Closed-Loop Revenue</h5>
                <p className="text-xs text-slate-500">Attributes exact dollar revenue to the campaign or ad creative that inspired it.</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Start accepting payments directly inside conversations.
          </h2>
          <p className="text-teal-100 max-w-xl mx-auto text-sm">
            Plug in your Razorpay, Stripe, or Cashfree credentials and launch 1-click in-chat payments.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenStartFree}
              className="px-8 py-3.5 rounded-xl bg-white text-teal-800 hover:bg-teal-50 font-bold shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              Start Free Payments Setup
            </button>
            <button
              onClick={onOpenBookDemo}
              className="px-7 py-3.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold border border-teal-500/50 transition-colors cursor-pointer"
            >
              Consult Payment Solutions Engineer
            </button>
          </div>
          <p className="text-xs text-teal-200 font-medium">
            0% platform transaction fee on sandbox · Instant live settlement
          </p>
        </div>
      </section>

    </div>
  );
};
