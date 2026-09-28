import React from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  MessageSquare, 
  Mail, 
  ShoppingBag, 
  CreditCard 
} from 'lucide-react';

interface FinalCTASectionProps {
  onOpenStartFree: () => void;
  onOpenBookDemo: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  onOpenStartFree,
  onOpenBookDemo
}) => {
  return (
    <section id="cta" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Colorful Gradient Container */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-700 p-8 sm:p-14 lg:p-16 text-white shadow-2xl text-center">
          
          {/* Animated Data Stream Moving Behind the CTA */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25">
            <div className="absolute -top-24 left-0 right-0 h-48 bg-gradient-to-b from-white/20 to-transparent transform -skew-y-12 animate-pulse" />
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]" />
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>One Platform · Every Conversation · Every Conversion</span>
            </div>

            {/* Headline matching spec */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-balance">
              Your customers are already talking.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-sky-200">
                Start the conversation.
              </span>
            </h2>

            {/* Supporting text matching spec */}
            <p className="text-base sm:text-xl text-indigo-100 font-normal leading-relaxed max-w-2xl mx-auto text-balance">
              Bring Email, WhatsApp, AI, automation and commerce together with CocoonMail.
            </p>

            {/* Buttons matching spec */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenStartFree}
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 rounded-xl font-bold text-sm shadow-xl hover:shadow-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>START FREE</span>
                <ArrowRight className="w-4 h-4 text-indigo-600 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenBookDemo}
                className="w-full sm:w-auto px-8 py-4 bg-indigo-700/60 hover:bg-indigo-700/80 text-white border border-white/30 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>BOOK A DEMO</span>
                <ChevronRight className="w-4 h-4 text-indigo-200" />
              </button>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-indigo-200 font-medium">
              <span>✓ No credit card required</span>
              <span>✓ 14-day full feature trial</span>
              <span>✓ Official Meta BSP Setup in 5 minutes</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
