import React, { useState } from 'react';
import { Link } from 'react-router';
import { 
  Terminal, 
  Code2, 
  Webhook, 
  Puzzle, 
  ArrowRight, 
  CheckCircle2, 
  Copy, 
  Check, 
  ExternalLink, 
  Server, 
  Zap, 
  Lock, 
  Key,
  BookOpen,
  ChevronRight
} from 'lucide-react';
import { SEOHead } from '../../components/SEOHead';

interface DevelopersPageProps {
  onOpenStartFree: () => void;
  onOpenBookDemo: () => void;
}

export const DevelopersOverviewPage: React.FC<DevelopersPageProps> = ({
  onOpenStartFree,
  onOpenBookDemo
}) => {
  const [selectedSdk, setSelectedSdk] = useState<'node' | 'python' | 'curl'>('node');
  const [copiedCode, setCopiedCode] = useState(false);

  const getCodeSnippet = () => {
    if (selectedSdk === 'node') {
      return `// npm install @cocoonmail/sdk
import { CocoonMail } from '@cocoonmail/sdk';

const cocoon = new CocoonMail({
  apiKey: process.env.COCOON_API_KEY // 'ccn_live_...'
});

// 1. Send transactional authentication code
const authEmail = await cocoon.emails.send({
  to: 'developer@acme.corp',
  templateId: 'tpl_login_otp_v2',
  variables: { code: '849201', expiresMinutes: 10 }
});

// 2. Dispatch interactive WhatsApp notification
const waMessage = await cocoon.whatsapp.sendInteractive({
  to: '+14155552671',
  template: 'order_status_update',
  components: [
    { type: 'body', parameters: [{ type: 'text', text: 'Alex' }] }
  ]
});

console.log('Delivered in', authEmail.latencyMs, 'ms');`;
    }
    if (selectedSdk === 'python') {
      return `# pip install cocoonmail
from cocoonmail import CocoonMail

client = CocoonMail(api_key="ccn_live_...")

# Send transactional email
res = client.emails.send(
    to="developer@acme.corp",
    template_id="tpl_login_otp_v2",
    variables={"code": "849201", "expires_minutes": 10}
)

# Dispatch WhatsApp message
wa = client.whatsapp.send_template(
    to="+14155552671",
    template_name="order_status_update",
    parameters=["Alex"]
)

print(f"Delivered: {res.id}")`;
    }
    return `# REST API via cURL
curl -X POST https://api.cocoonmail.com/v1/emails/transactional \\
  -H "Authorization: Bearer ccn_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "developer@acme.corp",
    "template_id": "tpl_login_otp_v2",
    "variables": { "code": "849201" }
  }'`;
  };

  const copyCode = () => {
    navigator.clipboard.writeText(getCodeSnippet());
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <SEOHead 
        title="Developer Platform & API Documentation — CocoonMail"
        description="Build on CocoonMail's low-latency developer platform. Official REST API, sub-second transactional email relays, WhatsApp Cloud API webhooks, and modern SDKs."
      />

      {/* Hero Header */}
      <section className="pt-12 pb-16 border-b border-slate-800/80 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono text-sky-400 uppercase tracking-wider">
            <Terminal className="w-4 h-4" />
            <span>Developer Documentation &amp; SDKs</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-[1.1]">
                Developer platform for <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">omnichannel communication</span>.
              </h1>
              <p className="text-base text-slate-400 leading-relaxed max-w-2xl font-sans">
                Sub-second transactional email delivery, official WhatsApp Cloud API endpoints, signed webhook event streaming, and typed TypeScript &amp; Python SDKs built for reliability at scale.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenStartFree}
                  className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm shadow-lg shadow-sky-500/20 transition-all cursor-pointer"
                >
                  <span>Get Sandbox API Key</span>
                </button>
                <Link
                  to="/developers/api"
                  className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold border border-slate-700 transition-colors flex items-center gap-1.5"
                >
                  <Code2 className="w-4 h-4 text-sky-400" />
                  <span>API Reference</span>
                </Link>
                <a
                  href="https://kb.cocoonmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 text-slate-400 hover:text-white text-sm font-medium flex items-center gap-1 transition-colors"
                >
                  <span>Docs Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quickstart Code Panel */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs">
                <div className="bg-slate-950 px-4 py-3 flex items-center justify-between border-b border-slate-800 text-slate-300">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[11px] text-slate-400 ml-2">Quickstart Example</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex bg-slate-800 rounded p-0.5 text-[10px]">
                      {(['node', 'python', 'curl'] as const).map((lang) => (
                        <button
                          key={lang}
                          onClick={() => setSelectedSdk(lang)}
                          className={`px-2 py-0.5 rounded font-sans uppercase font-medium transition-colors ${
                            selectedSdk === lang ? 'bg-sky-500 text-white' : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          {lang}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={copyCode}
                      className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                      title="Copy code"
                    >
                      {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="p-4 overflow-x-auto text-[11px] text-slate-300 leading-relaxed">
                  <pre>{getCodeSnippet()}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Sub-Nav Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            
            <Link
              to="/developers/api"
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-sky-500/60 hover:bg-slate-900/80 transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base group-hover:text-sky-400 transition-colors flex items-center gap-1.5">
                <span>REST API Reference</span>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:translate-x-0.5 transition-transform" />
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed font-sans">
                Explore transactional email, WhatsApp template submission, contact CDP mutations, and message status endpoints.
              </p>
            </Link>

            <Link
              to="/developers/webhooks"
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/60 hover:bg-slate-900/80 transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Webhook className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base group-hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                <span>Webhooks &amp; Events</span>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:translate-x-0.5 transition-transform" />
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed font-sans">
                Stream real-time delivery confirmations, email opens, WhatsApp button clicks, and payments with HMAC SHA-256 signatures.
              </p>
            </Link>

            <Link
              to="/developers/integrations"
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/60 hover:bg-slate-900/80 transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Puzzle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base group-hover:text-purple-400 transition-colors flex items-center gap-1.5">
                <span>Native Integrations</span>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:translate-x-0.5 transition-transform" />
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed font-sans">
                Sync with Shopify, WooCommerce, Salesforce, HubSpot, Stripe, Razorpay, and Zapier out of the box.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Uptime & Reliability Specs */}
      <section className="py-14 bg-slate-900/60 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-center">
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-sky-400">&lt;650ms</p>
            <p className="text-xs text-slate-400 mt-1 font-sans">Median Dispatch Latency</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-emerald-400">99.99%</p>
            <p className="text-xs text-slate-400 mt-1 font-sans">Uptime Guarantee SLA</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-purple-400">HMAC-256</p>
            <p className="text-xs text-slate-400 mt-1 font-sans">Cryptographic Signatures</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-amber-400">Global Edge</p>
            <p className="text-xs text-slate-400 mt-1 font-sans">Multi-Region SMTP Relays</p>
          </div>
        </div>
      </section>
    </div>
  );
};
