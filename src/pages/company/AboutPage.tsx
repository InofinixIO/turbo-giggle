import React from 'react';
import { Link } from 'react-router';
import { Sparkles, ArrowRight, ShieldCheck, Heart, Users, Target, Globe, Zap } from 'lucide-react';
import { SEOHead } from '../../components/SEOHead';

interface AboutPageProps {
  onOpenStartFree: () => void;
  onOpenBookDemo: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenStartFree,
  onOpenBookDemo
}) => {
  return (
    <div className="bg-white text-slate-900">
      <SEOHead 
        title="About Us — One Platform. Every Conversation. Every Conversion."
        description="Learn about CocoonMail's mission to unify marketing automation, WhatsApp Business messaging, AI conversational commerce, and high-throughput transactional delivery."
      />

      {/* Hero */}
      <section className="pt-16 pb-20 bg-gradient-to-b from-slate-50 via-indigo-50/20 to-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
            About CocoonMail
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            One platform. Every conversation. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">Every conversion.</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We built CocoonMail because modern customer communication became fractured across disconnected tools: newsletters in one app, WhatsApp in another, chatbots on a third, and payments on a web form. We brought them together into one unified operating system.
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50/50 space-y-3">
            <Target className="w-8 h-8 text-blue-600" />
            <h3 className="text-xl font-bold text-slate-900">Unified Architecture</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every message, ad click, chat response, and transaction exists in a single event stream. No siloed data, no stale CSV syncs.
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50/50 space-y-3">
            <Globe className="w-8 h-8 text-emerald-600" />
            <h3 className="text-xl font-bold text-slate-900">Global Scale, Local Power</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Serving fast-growing businesses worldwide with world-class support for high-growth markets, including native WhatsApp Pay and instant UPI.
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50/50 space-y-3">
            <ShieldCheck className="w-8 h-8 text-indigo-600" />
            <h3 className="text-xl font-bold text-slate-900">Engineering Rigor</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We treat deliverability, sub-second latency, and data privacy with enterprise seriousness. Official Meta BSP, ISO 27001, and SOC 2 Type II certified.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Join thousands of businesses scaling on CocoonMail.</h2>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenStartFree}
              className="px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              Start Free Trial
            </button>
            <button
              onClick={onOpenBookDemo}
              className="px-7 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold border border-slate-700 transition-colors cursor-pointer"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
