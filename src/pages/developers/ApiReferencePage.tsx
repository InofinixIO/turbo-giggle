import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Terminal, 
  Copy, 
  Check, 
  ExternalLink, 
  Send, 
  Play, 
  ChevronRight,
  Server,
  Lock,
  ArrowLeft
} from 'lucide-react';
import { SEOHead } from '../../components/SEOHead';

export const ApiReferencePage: React.FC = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState<string>('post-email');
  const [copiedCode, setCopiedCode] = useState(false);
  const [simulatedResponse, setSimulatedResponse] = useState<string | null>(null);
  const [isExecuting, setIsExecuting] = useState(false);

  const endpoints = [
    { id: 'post-email', method: 'POST', path: '/v1/emails/transactional', title: 'Send Transactional Email', desc: 'Dispatches high-priority email with sub-second SLA' },
    { id: 'post-whatsapp', method: 'POST', path: '/v1/whatsapp/messages', title: 'Send WhatsApp Message', desc: 'Sends verified template or session message' },
    { id: 'post-contacts', method: 'POST', path: '/v1/contacts', title: 'Create or Update Contact', desc: 'Upserts customer profile and dynamic CDP attributes' },
    { id: 'get-delivery', method: 'GET', path: '/v1/messages/:id/status', title: 'Get Message Status', desc: 'Returns real-time open, read, or bounce telemetry' }
  ];

  const getCurlExample = (id: string) => {
    switch (id) {
      case 'post-email':
        return `curl -X POST https://api.cocoonmail.com/v1/emails/transactional \\
  -H "Authorization: Bearer ccn_live_89f02c4b821" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "user@example.com",
    "template_id": "tpl_auth_otp_v3",
    "variables": {
      "user_name": "Sarah",
      "otp_code": "938201",
      "expires_minutes": 10
    }
  }'`;
      case 'post-whatsapp':
        return `curl -X POST https://api.cocoonmail.com/v1/whatsapp/messages \\
  -H "Authorization: Bearer ccn_live_89f02c4b821" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+14155552671",
    "template": "shipping_confirmation_v1",
    "parameters": ["Sarah", "TRACK-9824"]
  }'`;
      case 'post-contacts':
        return `curl -X POST https://api.cocoonmail.com/v1/contacts \\
  -H "Authorization: Bearer ccn_live_89f02c4b821" \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "sarah@example.com",
    "phone": "+14155552671",
    "attributes": {
      "vip_tier": "gold",
      "lifetime_value": 480
    }
  }'`;
      default:
        return `curl -X GET https://api.cocoonmail.com/v1/messages/msg_98fc208e/status \\
  -H "Authorization: Bearer ccn_live_89f02c4b821"`;
    }
  };

  const getResponseExample = (id: string) => {
    switch (id) {
      case 'post-email':
        return `{
  "id": "msg_98fc208e",
  "status": "delivered",
  "to": "user@example.com",
  "latency_ms": 612,
  "spf": "pass",
  "dkim": "pass",
  "created_at": "2026-09-28T06:12:00Z"
}`;
      case 'post-whatsapp':
        return `{
  "id": "wam_01928a3f",
  "status": "sent",
  "recipient_id": "+14155552671",
  "wamid": "wamid.HBgLMTQxNTU1NTI2NzEVAgARGBI...",
  "created_at": "2026-09-28T06:12:00Z"
}`;
      case 'post-contacts':
        return `{
  "id": "cnt_57291a",
  "email": "sarah@example.com",
  "phone": "+14155552671",
  "segments": ["vip-active", "high-ltv"],
  "updated_at": "2026-09-28T06:12:00Z"
}`;
      default:
        return `{
  "id": "msg_98fc208e",
  "channel": "email",
  "status": "opened",
  "events": [
    { "type": "sent", "timestamp": "06:12:00Z" },
    { "type": "delivered", "timestamp": "06:12:01Z" },
    { "type": "opened", "timestamp": "06:14:22Z" }
  ]
}`;
    }
  };

  const handleTestCall = () => {
    setIsExecuting(true);
    setSimulatedResponse(null);
    setTimeout(() => {
      setIsExecuting(false);
      setSimulatedResponse(getResponseExample(selectedEndpoint));
    }, 700);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(getCurlExample(selectedEndpoint));
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <SEOHead 
        title="REST API Reference & Endpoints — CocoonMail Developers"
        description="Comprehensive REST API documentation for CocoonMail. Send transactional emails, dispatch WhatsApp templates, manage customer CDP attributes, and inspect delivery telemetry."
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
              <span className="text-sky-400">API Reference v1</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">REST API Reference</h1>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono bg-slate-800 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700">
              Base URL: <strong className="text-sky-400">https://api.cocoonmail.com/v1</strong>
            </span>
            <a
              href="https://kb.cocoonmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1 bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors"
            >
              <span>Full Docs ↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid lg:grid-cols-12 gap-8">
        
        {/* Endpoint Selector Sidebar */}
        <div className="lg:col-span-4 space-y-2">
          <p className="text-xs font-mono uppercase tracking-wider text-slate-400 px-2 mb-2 font-semibold">Core Endpoints</p>
          {endpoints.map((ep) => (
            <button
              key={ep.id}
              onClick={() => {
                setSelectedEndpoint(ep.id);
                setSimulatedResponse(null);
              }}
              className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer font-sans ${
                selectedEndpoint === ep.id 
                  ? 'bg-sky-950/40 border-sky-500/80 shadow-md' 
                  : 'bg-slate-900 border-slate-800 hover:bg-slate-800/80'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                  ep.method === 'POST' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-500/20 text-blue-400'
                }`}>
                  {ep.method}
                </span>
                <span className="text-xs font-mono text-slate-300 truncate">{ep.path}</span>
              </div>
              <p className="text-xs font-bold text-white">{ep.title}</p>
              <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">{ep.desc}</p>
            </button>
          ))}
        </div>

        {/* Request & Response Sandbox */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Request Panel */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-xl overflow-hidden font-mono text-xs">
            <div className="bg-slate-950 px-4 py-3 flex items-center justify-between border-b border-slate-800">
              <span className="text-slate-300 font-sans font-semibold">cURL Request</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={copyCode}
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                </button>
                <button
                  onClick={handleTestCall}
                  disabled={isExecuting}
                  className="px-3 py-1 rounded bg-sky-500 hover:bg-sky-600 text-white font-sans text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer disabled:opacity-50"
                >
                  <Play className="w-3 h-3 fill-white" />
                  <span>{isExecuting ? 'Sending...' : 'Test Request'}</span>
                </button>
              </div>
            </div>

            <div className="p-4 overflow-x-auto text-slate-200 leading-relaxed text-[11px]">
              <pre>{getCurlExample(selectedEndpoint)}</pre>
            </div>
          </div>

          {/* Response Panel */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-xl overflow-hidden font-mono text-xs">
            <div className="bg-slate-950 px-4 py-3 flex items-center justify-between border-b border-slate-800 text-slate-300">
              <span className="font-sans font-semibold">Response Payload</span>
              <span className="text-[11px] text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded font-mono">
                {simulatedResponse ? 'HTTP 200 OK (582ms)' : 'Schema Example'}
              </span>
            </div>

            <div className="p-4 overflow-x-auto text-emerald-300 leading-relaxed text-[11px]">
              <pre>{simulatedResponse || getResponseExample(selectedEndpoint)}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
