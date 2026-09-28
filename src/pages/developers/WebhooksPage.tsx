import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Webhook, 
  Terminal, 
  ShieldCheck, 
  RefreshCw, 
  Clock, 
  CheckCircle2, 
  ArrowLeft, 
  ChevronRight, 
  Copy, 
  Check,
  AlertCircle
} from 'lucide-react';
import { SEOHead } from '../../components/SEOHead';

export const WebhooksPage: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<string>('email.delivered');
  const [copiedCode, setCopiedCode] = useState(false);

  const events = [
    { name: 'email.delivered', desc: 'Dispatched when mailbox server accepts TCP delivery' },
    { name: 'email.opened', desc: 'Pixel or image engagement signal recorded' },
    { name: 'whatsapp.message.received', desc: 'Inbound message or quick reply clicked by customer' },
    { name: 'payment.captured', desc: 'Successful in-chat UPI or card settlement confirmed' },
    { name: 'agent.handoff.requested', desc: 'AI agent triggers escalation to human support representative' }
  ];

  const getPayloadExample = (evt: string) => {
    return `{
  "id": "evt_98fc208e1a",
  "event": "${evt}",
  "timestamp": 1727503920,
  "data": {
    "message_id": "msg_89f02c4b",
    "recipient": "user@example.com",
    "channel": "email",
    "metadata": {
      "campaign_id": "spring_vip_v2",
      "user_id": "usr_99182"
    }
  },
  "signature": "t=1727503920,v1=5257186dbcdf97975c4597b4e4147dd294c3a5f7"
}`;
  };

  const copyPayload = () => {
    navigator.clipboard.writeText(getPayloadExample(selectedEvent));
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <SEOHead 
        title="Webhooks & Event Delivery — CocoonMail Developers"
        description="Stream real-time delivery confirmations, email opens, WhatsApp customer messages, and payments with HMAC SHA-256 signatures and automated exponential backoff retries."
      />

      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900/80 px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1">
              <Link to="/developers" className="hover:text-white flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Developers</span>
              </Link>
              <span>/</span>
              <span className="text-emerald-400">Webhooks &amp; Event Stream</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Real-Time Webhook Architecture</h1>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-xs font-mono bg-emerald-950 text-emerald-300 px-3 py-1.5 rounded-lg border border-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              HMAC SHA-256 Signed
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid lg:grid-cols-12 gap-8">
        
        {/* Left: Event Type List */}
        <div className="lg:col-span-5 space-y-4">
          <p className="text-xs font-mono uppercase tracking-wider text-slate-400 px-2 font-semibold">Supported Event Signals</p>
          <div className="space-y-2">
            {events.map((e) => (
              <button
                key={e.name}
                onClick={() => setSelectedEvent(e.name)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer font-sans ${
                  selectedEvent === e.name 
                    ? 'bg-emerald-950/40 border-emerald-500/80 shadow-md' 
                    : 'bg-slate-900 border-slate-800 hover:bg-slate-800/80'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <p className="font-mono text-xs font-bold text-emerald-400">{e.name}</p>
                  <span className="text-[10px] text-slate-500 font-mono">Real-Time</span>
                </div>
                <p className="text-xs text-slate-400 leading-snug">{e.desc}</p>
              </button>
            ))}
          </div>

          {/* Retry Logic Card */}
          <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2 text-xs">
            <div className="flex items-center gap-1.5 font-bold text-white">
              <RefreshCw className="w-4 h-4 text-emerald-400" />
              <span>Automated Exponential Backoff</span>
            </div>
            <p className="text-slate-400 leading-relaxed font-sans">
              If your listener returns a non-2xx status code or times out after 5,000ms, CocoonMail automatically retries delivery up to 7 times over a 24-hour period.
            </p>
          </div>
        </div>

        {/* Right: Payload Inspector */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-xl overflow-hidden font-mono text-xs">
            <div className="bg-slate-950 px-4 py-3 flex items-center justify-between border-b border-slate-800">
              <span className="text-slate-300 font-sans font-semibold">Webhook JSON Payload: {selectedEvent}</span>
              <button
                onClick={copyPayload}
                className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] flex items-center gap-1 transition-colors cursor-pointer"
              >
                {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedCode ? 'Copied' : 'Copy Payload'}</span>
              </button>
            </div>

            <div className="p-4 overflow-x-auto text-emerald-300 leading-relaxed text-[11px]">
              <pre>{getPayloadExample(selectedEvent)}</pre>
            </div>
          </div>

          {/* Signature Verification Guide */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 space-y-3 text-xs">
            <div className="flex items-center gap-2 font-bold text-white">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Validating Webhook Signatures (Node.js)</span>
            </div>
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 font-mono text-[11px] text-slate-300 overflow-x-auto">
              <pre>{`import crypto from 'crypto';

function verifySignature(payload, signatureHeader, secret) {
  const [tPart, v1Part] = signatureHeader.split(',');
  const timestamp = tPart.split('=')[1];
  const signature = v1Part.split('=')[1];

  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(\`\${timestamp}.\${payload}\`)
    .digest('hex');

  return signature === expectedSignature;
}`}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
