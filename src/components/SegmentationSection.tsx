import React, { useState } from 'react';
import { 
  Users, 
  Filter, 
  Plus, 
  X, 
  ArrowRight, 
  ArrowDown, 
  CheckCircle2, 
  Sparkles, 
  Send, 
  MapPin, 
  Mail, 
  MessageSquare, 
  Tag, 
  Calendar,
  Activity,
  Sliders
} from 'lucide-react';

interface SegmentationSectionProps {
  onOpenStartFree: () => void;
}

export const SegmentationSection: React.FC<SegmentationSectionProps> = ({ onOpenStartFree }) => {
  // Available filters from spec:
  // Contact properties, Email engagement, WhatsApp engagement, Campaign activity, Tags, Custom attributes, Location, Events
  const [activeFilters, setActiveFilters] = useState<string[]>([
    'Location',
    'WhatsApp engagement',
    'Campaign activity',
    'Tags'
  ]);

  const allAvailableFilterTypes = [
    { id: 'Contact properties', label: 'Contact properties', icon: Sliders, desc: 'Lifecycle stage, LTV, lead score' },
    { id: 'Email engagement', label: 'Email engagement', icon: Mail, desc: 'Opened last 3 emails, clicked links' },
    { id: 'WhatsApp engagement', label: 'WhatsApp engagement', icon: MessageSquare, desc: 'Active conversation, read within 1h' },
    { id: 'Campaign activity', label: 'Campaign activity', icon: Activity, desc: 'Clicked Monsoon Sneaker Ad' },
    { id: 'Tags', label: 'Tags', icon: Tag, desc: 'VIP, Early Access, Frequent Buyer' },
    { id: 'Custom attributes', label: 'Custom attributes', icon: Sliders, desc: 'Shoe size UK 9, preferred color black' },
    { id: 'Location', label: 'Location', icon: MapPin, desc: 'Country = India, City = Mumbai' },
    { id: 'Events', label: 'Events', icon: Calendar, desc: 'Abandoned cart in last 48 hours' }
  ];

  const toggleFilter = (filterId: string) => {
    if (activeFilters.includes(filterId)) {
      if (activeFilters.length > 1) {
        setActiveFilters(activeFilters.filter(f => f !== filterId));
      }
    } else {
      setActiveFilters([...activeFilters, filterId]);
    }
  };

  // Dynamic calculation based on active filter count
  const calculateResultCount = () => {
    if (activeFilters.length === 1) return '28,450';
    if (activeFilters.length === 2) return '16,210';
    if (activeFilters.length === 3) return '8,940';
    if (activeFilters.length === 4) return '4,821';
    return '2,140';
  };

  return (
    <section id="segmentation" className="py-24 bg-slate-50/80 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-semibold mb-3">
            <Users className="w-3.5 h-3.5 text-cyan-600" />
            <span>Customer Data Platform &amp; Live Audience Engine</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            Your audience isn&apos;t a list.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Static CSV uploads become obsolete the second they are exported. CocoonMail segments are living cohorts that update in milliseconds as customer behaviors occur.
          </p>
        </div>

        {/* Dynamic Segmentation Builder Interface */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Filter Selector Panel */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Available Dynamic Filters
                </span>
                <span className="text-xs text-indigo-600 font-mono font-medium">Click to toggle</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                {allAvailableFilterTypes.map((flt) => {
                  const Icon = flt.icon;
                  const isApplied = activeFilters.includes(flt.id);

                  return (
                    <button
                      key={flt.id}
                      onClick={() => toggleFilter(flt.id)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                        isApplied
                          ? 'bg-cyan-50/80 border-cyan-400 shadow-xs'
                          : 'bg-slate-50 border-slate-200/80 hover:bg-white text-slate-600'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                          isApplied ? 'bg-cyan-600 text-white' : 'bg-white text-slate-500 border border-slate-200'
                        }`}>
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <strong className={`text-xs block ${isApplied ? 'text-cyan-950 font-bold' : 'text-slate-700'}`}>
                            {flt.label}
                          </strong>
                          <span className="text-[10px] text-slate-500 line-clamp-1">{flt.desc}</span>
                        </div>
                      </div>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold shrink-0 ${
                        isApplied ? 'bg-cyan-200/60 text-cyan-900' : 'bg-slate-200/60 text-slate-500'
                      }`}>
                        {isApplied ? 'Active' : '+ Add'}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenStartFree}
                  className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-xs sm:text-sm font-semibold shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Explore Segmentation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Live Filter Builder Execution & Result Cascade */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Cascade Visual: 48,291 contacts ↓ 4,821 contacts ↓ Campaign */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
                  <span className="font-bold text-white">Live Audience Funnel Cascade</span>
                  <span className="text-cyan-400 font-mono">0ms Query Time</span>
                </div>

                {/* Stage 1: Initial Contacts */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 font-mono text-xs">
                      ALL
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block">Total Database Pool</span>
                      <strong className="text-sm font-mono text-white">48,291 contacts</strong>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">Raw Pool</span>
                </div>

                {/* Down Arrow Indicator */}
                <div className="flex justify-center text-slate-500 py-1">
                  <ArrowDown className="w-4 h-4 text-cyan-400 animate-bounce" />
                </div>

                {/* Stage 2: Filtered Cohort */}
                <div className="p-3.5 rounded-xl bg-cyan-950/70 border border-cyan-500/40 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-cyan-300">Live Dynamic Cohort Filter Applied</span>
                    <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono text-xs font-bold">
                      {calculateResultCount()} contacts
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-cyan-200/80 space-y-1">
                    {activeFilters.map(f => (
                      <p key={f} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                        <span>Filter: {f} matched</span>
                      </p>
                    ))}
                  </div>
                </div>

                {/* Down Arrow Indicator */}
                <div className="flex justify-center text-slate-500 py-1">
                  <ArrowDown className="w-4 h-4 text-cyan-400 animate-bounce" />
                </div>

                {/* Stage 3: Instant Dispatch to Campaign */}
                <div className="p-3 rounded-xl bg-indigo-950/70 border border-indigo-500/40 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                      <Send className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-slate-300 block text-[11px]">Ready for Dispatch</span>
                      <strong className="text-indigo-300 text-xs">Multichannel Campaign Pipeline</strong>
                    </div>
                  </div>
                  <button 
                    onClick={onOpenStartFree}
                    className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold cursor-pointer"
                  >
                    Launch Campaign
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
