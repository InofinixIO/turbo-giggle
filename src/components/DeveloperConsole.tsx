import React, { useState } from 'react';
import { 
  Code, 
  Terminal, 
  Copy, 
  Check, 
  Webhook, 
  ExternalLink, 
  ShieldCheck, 
  Zap,
  Server
} from 'lucide-react';
import { API_SNIPPETS } from '../data/mockData';

export const DeveloperConsole: React.FC = () => {
  const [activeLang, setActiveLang] = useState<'nodejs' | 'curl' | 'python'>('nodejs');
  const [copied, setCopied] = useState(false);

  const currentSnippet = API_SNIPPETS.find((s) => s.language === activeLang) || API_SNIPPETS[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const webhookEvents = [
    { id: '1', time: '10:44:12.810', event: 'whatsapp.message_delivered', latency: '42ms', status: '200 OK' },
    { id: '2', time: '10:44:13.204', event: 'ai_agent.intent_resolved', latency: '138ms', status: '200 OK' },
    { id: '3', time: '10:44:18.912', event: 'payment.upi_succeeded', latency: '89ms', status: '200 OK' },
    { id: '4', time: '10:44:19.050', event: 'meta_capi.purchase_dispatched', latency: '64ms', status: '200 OK' },
    { id: '5', time: '10:44:20.120', event: 'automation.order_workflow_triggered', latency: '110ms', status: '200 OK' }
  ];

  return (
    <section id="developers" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-indigo-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-indigo-400 mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>Developer First Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Engineered for developers who hate fragmented APIs.
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            One authenticated client. One webhook signature. Trigger WhatsApp interactive components, dispatch high-throughput transactional emails, and query live customer segments in a single line of code.
          </p>
        </div>

        {/* 2-Column Developer Workspace: Code Sandbox & Webhook Stream */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Code Viewer & Language Switcher */}
          <div className="lg:col-span-7 bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
            
            {/* Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5 mr-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                </div>
                <div className="flex gap-1 text-xs">
                  <button
                    onClick={() => setActiveLang('nodejs')}
                    className={`px-3 py-1 rounded-md font-mono transition-colors cursor-pointer ${
                      activeLang === 'nodejs' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Node.js / TS
                  </button>
                  <button
                    onClick={() => setActiveLang('curl')}
                    className={`px-3 py-1 rounded-md font-mono transition-colors cursor-pointer ${
                      activeLang === 'curl' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    cURL
                  </button>
                  <button
                    onClick={() => setActiveLang('python')}
                    className={`px-3 py-1 rounded-md font-mono transition-colors cursor-pointer ${
                      activeLang === 'python' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Python
                  </button>
                </div>
              </div>

              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Code Body */}
            <div className="p-4 sm:p-5 overflow-x-auto bg-[#0d1117] font-mono text-xs sm:text-[13px] leading-relaxed text-slate-200">
              <pre>
                <code>{currentSnippet.code}</code>
              </pre>
            </div>

            <div className="px-4 py-3 bg-slate-950/70 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> End-to-end TLS 1.3 &amp; HMAC SHA-256
              </span>
              <span className="text-slate-500">NPM: @cocoonmail/sdk</span>
            </div>

          </div>

          {/* Right: Live Webhook Stream Inspector */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 shadow-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Webhook className="w-4 h-4 text-emerald-400" />
                  <h4 className="text-sm font-bold text-white">Live Webhook Event Stream</h4>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Sub-second
                </span>
              </div>

              <div className="mt-3 space-y-2 font-mono text-xs">
                {webhookEvents.map((evt) => (
                  <div key={evt.id} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/90 flex items-center justify-between gap-2">
                    <div className="overflow-hidden">
                      <span className="text-indigo-400 block truncate">{evt.event}</span>
                      <span className="text-[10px] text-slate-500">{evt.time}</span>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-emerald-400 block text-[11px]">{evt.status}</span>
                      <span className="text-[10px] text-slate-500">{evt.latency}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400 space-y-2">
                <p>
                  Automatic idempotency keys, signature verification, and exponential backoff retry policies built in.
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <a
                    href="#docs"
                    onClick={(e) => { e.preventDefault(); alert("CocoonMail API Docs v3: Comprehensive OpenAPI specs with 40+ endpoints, postman collections, and SDK guides."); }}
                    className="text-indigo-400 hover:text-indigo-300 font-semibold inline-flex items-center gap-1"
                  >
                    <span>Read API Documentation</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Micro Benchmark Card */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <Server className="w-4 h-4 text-blue-400" />
                <div>
                  <span className="font-semibold text-white block">Global Edge Deliverability</span>
                  <span className="text-slate-400 text-[11px]">Direct tier-1 telecom routes &amp; dedicated IP warming</span>
                </div>
              </div>
              <span className="text-emerald-400 font-mono font-bold text-sm">99.98%</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
