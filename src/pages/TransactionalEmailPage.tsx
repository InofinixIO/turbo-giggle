import React, { useState } from 'react';
import { 
  Server, 
  Terminal, 
  ArrowRight, 
  CheckCircle2, 
  Code, 
  Copy, 
  Check, 
  Zap, 
  Send, 
  ShieldCheck, 
  Clock, 
  FileText, 
  Lock, 
  Key, 
  Bell, 
  Receipt, 
  ChevronRight,
  RefreshCw,
  MessageSquare,
  BarChart2,
  Cpu
} from 'lucide-react';
import { PlatformPageId } from '../components/PlatformNavSwitcher';

interface TransactionalEmailPageProps {
  onOpenStartFree: () => void;
  onOpenBookDemo: () => void;
  onNavigateModule: (moduleId: PlatformPageId) => void;
}

export const TransactionalEmailPage: React.FC<TransactionalEmailPageProps> = ({
  onOpenStartFree,
  onOpenBookDemo,
  onNavigateModule
}) => {
  const [selectedLang, setSelectedLang] = useState<'curl' | 'node' | 'python'>('curl');
  const [activeUseCase, setActiveUseCase] = useState<'otp' | 'order' | 'reset' | 'invoice'>('otp');
  const [copiedCode, setCopiedCode] = useState(false);
  const [isSimulatingSend, setIsSimulatingSend] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const runApiTest = () => {
    setIsSimulatingSend(true);
    setSendSuccess(false);
    setTimeout(() => {
      setIsSimulatingSend(false);
      setSendSuccess(true);
    }, 900);
  };

  const getCodeSnippet = () => {
    if (selectedLang === 'curl') {
      return `curl -X POST https://api.cocoonmail.com/v1/emails/transactional \\
  -H "Authorization: Bearer ccn_live_89f02c4b821" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "alex@acme.corp",
    "template_id": "tpl_auth_otp_v3",
    "variables": {
      "user_name": "Alex",
      "otp_code": "849201",
      "expires_in_minutes": 10
    },
    "channel_fallback": {
      "whatsapp_on_undelivered_seconds": 60
    }
  }'`;
    }
    if (selectedLang === 'node') {
      return `import { CocoonMail } from '@cocoonmail/sdk';

const cocoon = new CocoonMail({ apiKey: process.env.COCOON_API_KEY });

const result = await cocoon.emails.send({
  to: 'alex@acme.corp',
  templateId: 'tpl_auth_otp_v3',
  variables: {
    userName: 'Alex',
    otpCode: '849201',
    expiresInMinutes: 10
  },
  channelFallback: {
    whatsappOnUndeliveredSeconds: 60
  }
});

console.log(result.messageId, result.latencyMs); // "msg_89f2a", 640ms`;
    }
    return `from cocoonmail import CocoonMail

client = CocoonMail(api_key="ccn_live_89f02c4b821")

response = client.emails.send_transactional(
    to="alex@acme.corp",
    template_id="tpl_auth_otp_v3",
    variables={
        "user_name": "Alex",
        "otp_code": "849201",
        "expires_in_minutes": 10
    },
    fallback_to_whatsapp=True
)

print(f"Delivered in {response.latency_ms}ms")`;
  };

  return (
    <div className="bg-white text-slate-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-sky-50/70 via-slate-50/50 to-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c70a_1px,transparent_1px),linear-gradient(to_bottom,#0284c70a_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-sky-600 tracking-wide uppercase">
            <Server className="w-4 h-4" />
            <span>Developer Infrastructure</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-600">Transactional Delivery Engine</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Copy */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                The messages your product <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600">can&apos;t afford to miss</span>.
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Ultra-fast REST API and SMTP relay delivering OTPs, password resets, purchase receipts, and critical account alerts with sub-second latency and a guaranteed 99.99% uptime SLA.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenStartFree}
                  className="px-7 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-base shadow-lg shadow-sky-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore API</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenBookDemo}
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200 shadow-sm transition-all hover:border-slate-300 flex items-center gap-2 cursor-pointer"
                >
                  <span>Get Sandbox Key</span>
                </button>
              </div>

              {/* Technical Benchmarks */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/80">
                <div>
                  <p className="text-2xl font-black text-slate-900">&lt;650ms</p>
                  <p className="text-xs text-slate-500 font-medium">Median Delivery</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-900">99.99%</p>
                  <p className="text-xs text-slate-500 font-medium">Uptime Guarantee</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-900">Multi-Region</p>
                  <p className="text-xs text-slate-500 font-medium">Global Edge Relays</p>
                </div>
              </div>
            </div>

            {/* Right Interactive Simulator: Live API Terminal & Sandbox */}
            <div className="lg:col-span-6">
              <div className="bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs">
                
                {/* Terminal Bar */}
                <div className="bg-slate-900 px-4 py-3 flex items-center justify-between text-slate-300 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-xs text-slate-400 font-sans font-medium">CocoonMail Sandbox API</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex bg-slate-800 rounded-md p-0.5">
                      {(['curl', 'node', 'python'] as const).map((lang) => (
                        <button
                          key={lang}
                          onClick={() => setSelectedLang(lang)}
                          className={`px-2 py-0.5 rounded text-[11px] font-sans font-medium transition-colors ${
                            selectedLang === lang ? 'bg-sky-600 text-white' : 'text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          {lang}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={() => copyToClipboard(getCodeSnippet())}
                      className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                      title="Copy code"
                    >
                      {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Code Window */}
                <div className="p-4 text-slate-200 overflow-x-auto bg-slate-950 leading-relaxed text-[11px]">
                  <pre>{getCodeSnippet()}</pre>
                </div>

                {/* Action Bar */}
                <div className="bg-slate-900/90 border-t border-slate-800 p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[11px] text-slate-400 font-sans">Sandbox API Key Ready</span>
                  </div>
                  <button
                    onClick={runApiTest}
                    disabled={isSimulatingSend}
                    className="px-4 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-600 text-white font-sans font-semibold text-xs flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSimulatingSend ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>Dispatching...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Test Payload</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Simulated Webhook Response Box */}
                {sendSuccess && (
                  <div className="bg-emerald-950/40 border-t border-emerald-500/30 p-3.5 font-mono text-[11px] text-emerald-300 animate-in fade-in duration-200 space-y-1">
                    <div className="flex items-center justify-between text-emerald-400 font-semibold">
                      <span>HTTP 202 ACCEPTED</span>
                      <span className="font-sans text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded">Delivered in 582ms</span>
                    </div>
                    <p className="text-slate-400">
                      {`{ "id": "msg_98fc208e", "status": "delivered", "to": "alex@acme.corp", "spf": "pass", "dkim": "pass", "whatsapp_fallback": "standby" }`}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 6-STAGE DELIVERY PIPELINE */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <h2 className="text-xs font-bold text-sky-400 uppercase tracking-wider">Sub-Second Processing</h2>
            <p className="text-3xl font-extrabold tracking-tight">The 6-Stage Transactional Pipeline</p>
            <p className="text-sm text-slate-400">From code execution to recipient inbox in under 800 milliseconds.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 sm:gap-4 relative">
            
            {/* Step 1: API Request */}
            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 text-center space-y-2">
              <div className="w-9 h-9 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center mx-auto font-bold text-xs">
                01
              </div>
              <p className="font-bold text-xs text-white">API Request</p>
              <p className="text-[11px] text-slate-400">HTTP REST or SMTP relay intake</p>
            </div>

            {/* Step 2: Template */}
            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 text-center space-y-2">
              <div className="w-9 h-9 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto font-bold text-xs">
                02
              </div>
              <p className="font-bold text-xs text-white">Template</p>
              <p className="text-[11px] text-slate-400">Liquid variables rendered server-side</p>
            </div>

            {/* Step 3: Email Sign */}
            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 text-center space-y-2">
              <div className="w-9 h-9 rounded-lg bg-violet-500/20 text-violet-400 flex items-center justify-center mx-auto font-bold text-xs">
                03
              </div>
              <p className="font-bold text-xs text-white">Cryptographic Sign</p>
              <p className="text-[11px] text-slate-400">DKIM, SPF, &amp; DMARC authentication</p>
            </div>

            {/* Step 4: Delivery */}
            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 text-center space-y-2">
              <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto font-bold text-xs">
                04
              </div>
              <p className="font-bold text-xs text-white">MTA Delivery</p>
              <p className="text-[11px] text-slate-400">Direct TCP handshake with mailbox provider</p>
            </div>

            {/* Step 5: Event */}
            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 text-center space-y-2">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto font-bold text-xs">
                05
              </div>
              <p className="font-bold text-xs text-white">Telemetry Event</p>
              <p className="text-[11px] text-slate-400">Real-time open, click, bounce signal</p>
            </div>

            {/* Step 6: Webhook */}
            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 text-center space-y-2">
              <div className="w-9 h-9 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto font-bold text-xs">
                06
              </div>
              <p className="font-bold text-xs text-white">Webhook Post</p>
              <p className="text-[11px] text-slate-400">Instant notification to your backend</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE USE CASES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <h2 className="text-xs font-bold text-sky-600 uppercase tracking-wider">Mission-Critical Messages</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Built for what can never be dropped</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* OTP */}
            <div className="p-6 rounded-2xl border border-slate-200/90 hover:border-sky-300 hover:shadow-lg transition-all bg-white space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                <Key className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">OTP &amp; Magic Links</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Login codes delivered in &lt;650ms. With optional auto-escalation to WhatsApp if the email bounces or user is in a low-connectivity region.
              </p>
              <div className="text-[11px] font-mono bg-slate-50 text-slate-700 p-2 rounded border border-slate-200">
                Priority: P0 · SLA: 99.999%
              </div>
            </div>

            {/* Order Confirmation */}
            <div className="p-6 rounded-2xl border border-slate-200/90 hover:border-emerald-300 hover:shadow-lg transition-all bg-white space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Receipt className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Order Confirmations &amp; Receipts</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Immediate confirmation with order item breakdown, tracking URLs, and dynamic tax invoice attachments.
              </p>
              <div className="text-[11px] font-mono bg-slate-50 text-slate-700 p-2 rounded border border-slate-200">
                Auto-generates PDF receipt
              </div>
            </div>

            {/* Password Reset */}
            <div className="p-6 rounded-2xl border border-slate-200/90 hover:border-indigo-300 hover:shadow-lg transition-all bg-white space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Password Resets &amp; Security Alerts</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Secure time-limited tokens with IP and geolocation context. Instant warnings for new device sign-ins.
              </p>
              <div className="text-[11px] font-mono bg-slate-50 text-slate-700 p-2 rounded border border-slate-200">
                Encrypted payload signing
              </div>
            </div>

            {/* Invoices */}
            <div className="p-6 rounded-2xl border border-slate-200/90 hover:border-violet-300 hover:shadow-lg transition-all bg-white space-y-3">
              <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">B2B Invoices &amp; Billing Notifications</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automated monthly statements, payment failure notifications with 1-click update links, and renewal warnings.
              </p>
              <div className="text-[11px] font-mono bg-slate-50 text-slate-700 p-2 rounded border border-slate-200">
                Multi-currency &amp; GST compliant
              </div>
            </div>

            {/* Notifications */}
            <div className="p-6 rounded-2xl border border-slate-200/90 hover:border-amber-300 hover:shadow-lg transition-all bg-white space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Bell className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Real-Time Product Notifications</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Comments, team mentions, document approvals, and shipment status alerts delivered with high fidelity.
              </p>
              <div className="text-[11px] font-mono bg-slate-50 text-slate-700 p-2 rounded border border-slate-200">
                Batch aggregation &amp; digests
              </div>
            </div>

            {/* Account Events */}
            <div className="p-6 rounded-2xl border border-slate-200/90 hover:border-rose-300 hover:shadow-lg transition-all bg-white space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Compliance &amp; Legal Notices</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Terms of service updates, privacy notifications, and auditable proof of delivery with full message archiving.
              </p>
              <div className="text-[11px] font-mono bg-slate-50 text-slate-700 p-2 rounded border border-slate-200">
                7-year immutable audit log
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT CONNECTS TO THE REST OF COCOONMAIL */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-sky-200 bg-white rounded-3xl p-8 sm:p-12 shadow-sm">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600">Unified Architecture</span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 mb-3">
                How Transactional Email connects to the rest of CocoonMail
              </h3>
              <p className="text-sm text-slate-600">
                Never lose an important notification. Combine transactional email with WhatsApp failovers and visual journey workflows.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <button
                onClick={() => onNavigateModule('whatsapp')}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/20 transition-all text-left group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600" />
                </div>
                <h5 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-emerald-600">WhatsApp Failover Channel</h5>
                <p className="text-xs text-slate-500">
                  If an urgent verification OTP is unopened or bounced, automatically dispatch it via verified WhatsApp Business API.
                </p>
              </button>

              <button
                onClick={() => onNavigateModule('automation')}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/20 transition-all text-left group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center">
                    <Zap className="w-4 h-4" />
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600" />
                </div>
                <h5 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-indigo-600">Visual Automation Workflows</h5>
                <p className="text-xs text-slate-500">
                  A transactional purchase confirmation can automatically enroll the customer into a visual product onboarding journey.
                </p>
              </button>

              <button
                onClick={() => onNavigateModule('analytics')}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-blue-50/20 transition-all text-left group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                    <BarChart2 className="w-4 h-4" />
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                </div>
                <h5 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-blue-600">Latency &amp; Deliverability Logs</h5>
                <p className="text-xs text-slate-500">
                  View full cryptographic headers, SMTP response codes, and roundtrip ping times in the unified analytics portal.
                </p>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Send your first transactional message in 2 minutes.
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Grab a test API key, send a payload via curl or your favorite language SDK, and inspect the real-time webhook response.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenStartFree}
              className="px-8 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              Get Free API Key
            </button>
            <button
              onClick={onOpenBookDemo}
              className="px-7 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold border border-slate-700 transition-colors cursor-pointer"
            >
              Read API Documentation
            </button>
          </div>
          <p className="text-xs text-slate-500 font-medium">
            10,000 free transactional emails / month · No credit card required · 99.99% uptime guarantee
          </p>
        </div>
      </section>

    </div>
  );
};
