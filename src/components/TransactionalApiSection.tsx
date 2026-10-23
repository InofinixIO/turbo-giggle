import React, { useState } from 'react';
import { 
  Code, 
  Terminal, 
  Webhook, 
  Activity, 
  BarChart3, 
  ArrowRight, 
  BookOpen, 
  CheckCircle2, 
  Copy, 
  Check, 
  Zap, 
  Server
} from 'lucide-react';

interface TransactionalApiSectionProps {
  onOpenStartFree: () => void;
}

export const TransactionalApiSection: React.FC<TransactionalApiSectionProps> = ({ onOpenStartFree }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'node' | 'curl' | 'python'>('curl');

  const copyCode = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getCodeSnippet = () => {
    if (activeTab === 'node') {
      return `import { CocoonMail } from '@cocoonmail/sdk';

const cocoon = new CocoonMail({ apiKey: process.env.COCOON_API_KEY });

await cocoon.mail.send({
  to: "customer@example.com",
  template: "order-confirmed",
  data: {
    order_id: "48291"
  }
});`;
    }
    if (activeTab === 'python') {
      return `from cocoonmail import CocoonMail

client = CocoonMail(api_key="cm_live_sec_9941")

response = client.mail.send(
    to="customer@example.com",
    template="order-confirmed",
    data={"order_id": "48291"}
)`;
    }
    return `POST /mail/send HTTP/1.1
Host: api.cocoonmail.com
Authorization: Bearer cm_live_sec_9941
Content-Type: application/json

{
  "to": "customer@example.com",
  "template": "order-confirmed",
  "data": {
    "order_id": "48291"
  }
}`;
  };

  return (
    <section id="transactional-api" className="py-24 bg-slate-950 text-white border-t border-slate-800 relative overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold border border-indigo-500/30 mb-3">
            <Code className="w-3.5 h-3.5 text-indigo-400" />
            <span>Developer Experience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance">
            Built for marketers. Ready for developers.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
            Empower your marketing team with no-code visual canvases while giving engineers idempotent REST APIs, sub-second webhooks, and modern SDKs.
          </p>
        </div>

        {/* 2-Column: API Code on Left, Email Arriving in Real Time on Right */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Side: API Code Window */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-slate-400 font-mono ml-2">POST /mail/send</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex bg-slate-950 p-0.5 rounded-lg border border-slate-800 text-[11px] font-mono">
                    {(['curl', 'node', 'python'] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-2 py-0.5 rounded cursor-pointer ${
                          activeTab === tab ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={copyCode}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
                    title="Copy code"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Code Editor Body */}
              <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 font-mono text-xs text-slate-300 space-y-1 overflow-x-auto min-h-[220px]">
                <pre className="text-indigo-300 font-mono text-xs leading-relaxed">
                  {getCodeSnippet()}
                </pre>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-1 font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Zap className="w-3.5 h-3.5" />
                  HTTP 200 OK · Latency: 16ms
                </span>
                <span>Dedicated SMTP Pipe</span>
              </div>
            </div>

            {/* Right Side: Email Arriving in Real Time */}
            <div className="lg:col-span-6">
              <div className="bg-white text-slate-900 rounded-2xl border border-slate-200 shadow-2xl p-5 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs">
                  <span className="font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    Delivered in Real Time (0s ago)
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono text-[10px] font-bold">
                    INBOX (Primary)
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-600">
                    To: <strong>customer@example.com</strong> · Template: <strong>order-confirmed</strong>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 pt-1">
                    Your Order #48291 is Confirmed!
                  </h4>

                  <p className="text-slate-600 leading-relaxed">
                    Hi Aarav, thank you for your order. We are packaging your items at our Mumbai hub. You will receive real-time dispatch updates via WhatsApp.
                  </p>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between font-mono">
                    <span className="font-bold text-slate-800">Order ID: #48291</span>
                    <span className="text-emerald-600 font-bold">Total: ₹4,999.00</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>SPF: PASS · DKIM: PASS · DMARC: PASS</span>
                  <span className="text-indigo-600 font-semibold">100% Verified Delivery</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Developer Pillars: REST API, Webhooks, Events, Analytics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="w-9 h-9 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
              <Code className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white">REST API</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Standardized JSON endpoints with predictable resource routing and scoped API keys.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Webhook className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white">Webhooks</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Sub-second HTTP callbacks for delivery, read receipts, button clicks, and UPI payments.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Activity className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white">Events</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              High-throughput event ingestion stream capable of processing 50,000+ RPS.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
              <BarChart3 className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white">Analytics</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Granular latency telemetry, bounce rates, spam complaints, and queue depth.
            </p>
          </div>
        </div>

        {/* CTAs: Explore Developer Platform & Read Documentation */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenStartFree}
            className="w-full sm:w-auto px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs sm:text-sm font-semibold shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Explore Developer Platform</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://kb.cocoonmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 rounded-xl text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-2"
          >
            <BookOpen className="w-4 h-4 text-slate-400" />
            <span>Read Documentation (kb.cocoonmail.com) ↗</span>
          </a>
        </div>

      </div>
    </section>
  );
};
