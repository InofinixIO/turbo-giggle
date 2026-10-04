import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { ModalType } from '../../types';

interface FinalCtaSectionProps {
  onOpenModal: (type: ModalType) => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenModal }) => {
  return (
    <section className="relative py-24 md:py-36 bg-gradient-to-br from-blue-600 via-indigo-700 to-violet-900 text-white overflow-hidden">
      
      {/* Animated Background Data Stream Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold mb-8">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Launch Your Unified Customer Operating System</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight text-balance mb-6">
          Your customers are already talking.<br />
          <span className="text-blue-200">Start the conversation.</span>
        </h2>

        <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed text-balance mb-10">
          Bring Email, WhatsApp, AI, automation and commerce together with Cocoonmail.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            onClick={() => onOpenModal('start-free')}
            className="w-full sm:w-auto px-9 py-4 text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl shadow-2xl transition-all transform active:scale-95 flex items-center justify-center gap-2 group"
          >
            <span>START FREE</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => onOpenModal('book-demo')}
            className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-white bg-white/15 hover:bg-white/25 border border-white/30 rounded-xl backdrop-blur-md transition-all"
          >
            BOOK A DEMO
          </button>
        </div>

        {/* Micro-trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-blue-200 font-medium">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-300" /> 14-day free trial
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-300" /> No credit card required
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-300" /> Meta Cloud API ready
          </span>
        </div>

      </div>
    </section>
  );
};
