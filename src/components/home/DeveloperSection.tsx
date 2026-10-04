import React, { useState } from 'react';
import { 
  Code2, 
  Terminal, 
  Webhook, 
  Activity, 
  BarChart3, 
  ExternalLink, 
  Check, 
  Copy, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { ModalType } from '../../types';

interface DeveloperSectionProps {
  onOpenModal: (type: ModalType) => void;
}

export const DeveloperSection: React.FC<DeveloperSectionProps> = ({ onOpenModal }) => {
  const [copied, setCopied] = useState(false);
  const [activeLang, setActiveLang] = useState<'curl' | 'node' | 'python'>('curl');

  const codeSnippets = {
    curl: `curl -X POST https://api.cocoonmail.com/v1/mail/send \\
  -H "Authorization: Bearer cm_live_a89f21390d" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "customer@example.com",
    "template": "order-confirmed",
    "data": {
      "order_id": "48291",
      "customer_name": "Priya",
      "amount": "₹4,999"
    }
  }'`,
    node: `import { Cocoonmail } from '@cocoonmail/sdk';

const cocoon = new Cocoonmail(process.env.COCOONMAIL_API_KEY);

await cocoon.mail.send({
  to: 'customer@example.com',
  template: 'order-confirmed',
  data: {
    order_id: '48291',
    customer_name: 'Priya',
    amount: '₹4,999'
  }
});`,
    python: `from cocoonmail import Cocoonmail

client = Cocoonmail(api_key="cm_live_a89f21390d")

response = client.mail.send(
    to="customer@example.com",
    template="order-confirmed",
    data={
        "order_id": "48291",
        "customer_name": "Priya",
        "amount": "₹4,999"
    }
)`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="developer-section" className="py-20 md:py-32 bg-slate-950 text-white border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-4">
            <Code2 className="w-3.5 h-3.5" />
            <span>Developer-First Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-balance mb-4">
            Built for marketers. Ready for developers.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed text-balance">
            Integrate email and WhatsApp messaging in minutes with high-throughput REST APIs, typed SDKs, and sub-second webhook events.
          </p>
        </div>

        {/* Big Code vs. Realtime Delivery Arena */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 md:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Code IDE with Language Switcher */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveLang('curl')}
                  className={`px-3 py-1 rounded-md text-xs font-mono font-semibold transition-colors ${
                    activeLang === 'curl' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  cURL
                </button>
                <button
                  onClick={() => setActiveLang('node')}
                  className={`px-3 py-1 rounded-md text-xs font-mono font-semibold transition-colors ${
                    activeLang === 'node' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Node.js
                </button>
                <button
                  onClick={() => setActiveLang('python')}
                  className={`px-3 py-1 rounded-md text-xs font-mono font-semibold transition-colors ${
                    activeLang === 'python' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Python
                </button>
              </div>

              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-2 py-1 rounded hover:bg-slate-800"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="font-mono">{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs font-mono text-slate-200 overflow-x-auto">
              <pre>{codeSnippets[activeLang]}</pre>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 99.8% Inbox Placement</span>
              <span className="flex items-center gap-1.5"><Activity className="w-3.5 h-3.5 text-blue-400" /> Median latency: 42ms</span>
              <span className="flex items-center gap-1.5"><Webhook className="w-3.5 h-3.5 text-violet-400" /> Retries with Exponential Backoff</span>
            </div>
          </div>

          {/* Right: Email arriving in real time */}
          <div className="lg:col-span-5 bg-slate-800/80 p-6 rounded-2xl border border-slate-700 flex flex-col justify-between min-h-[360px]">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Recipient Inbox Realtime Monitor
                  </span>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  200 OK · 42ms
                </span>
              </div>

              {/* Arrived Email Render */}
              <div className="bg-white text-slate-900 p-4 rounded-xl shadow-lg border border-slate-200 space-y-3">
                <div className="flex items-center justify-between text-xs border-b border-slate-100 pb-2">
                  <div>
                    <span className="font-bold text-slate-900">CocoonCommerce Store</span>
                    <div className="text-[11px] text-slate-500">Order Confirmed #48291</div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    Delivered
                  </span>
                </div>
                <div className="text-xs text-slate-700 space-y-1">
                  <p>Hi Priya, thank you! Your order <strong>#48291</strong> has been processed successfully.</p>
                  <div className="p-2 bg-slate-50 rounded text-[11px] font-mono flex justify-between">
                    <span>Total Amount Paid:</span>
                    <span className="font-bold text-slate-900">₹4,999</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Realtime Webhook Logs Stream */}
            <div className="mt-4 pt-4 border-t border-slate-700 text-[11px] font-mono space-y-1 text-slate-400">
              <div className="text-slate-300 font-semibold mb-1">Webhook Dispatch Stream:</div>
              <div className="flex justify-between text-emerald-400">
                <span>email.delivered (10:49:02)</span>
                <span>status: 200</span>
              </div>
              <div className="flex justify-between text-blue-400">
                <span>email.opened (10:49:14)</span>
                <span>IP: 103.21.x.x</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Developer Pillars Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <div className="text-xs font-bold text-white mb-1">REST API</div>
            <div className="text-[11px] text-slate-400">Full CRUD for contacts, campaigns, templates and broadcast triggers.</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <div className="text-xs font-bold text-white mb-1">Webhooks</div>
            <div className="text-[11px] text-slate-400">Sub-second HMAC signed webhooks for delivery, opens, and payments.</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <div className="text-xs font-bold text-white mb-1">Events & CAPI</div>
            <div className="text-[11px] text-slate-400">Direct streaming to Meta Conversions API & Google Analytics 4.</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <div className="text-xs font-bold text-white mb-1">Analytics API</div>
            <div className="text-[11px] text-slate-400">Programmatically export channel open rates, CTRs, and attributed revenue.</div>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenModal('start-free')}
            className="w-full sm:w-auto px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
          >
            <span>Explore Developer Platform</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://kb.cocoonmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 rounded-xl text-xs font-semibold flex items-center justify-center gap-2"
          >
            <span>Read Documentation</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
