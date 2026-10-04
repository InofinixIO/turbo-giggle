import React, { useState } from 'react';
import { 
  Users, 
  Filter, 
  Plus, 
  X, 
  ArrowRight, 
  Check, 
  Sparkles, 
  Mail, 
  MessageSquare, 
  MapPin, 
  Tag, 
  Calendar,
  Activity
} from 'lucide-react';
import { ModalType } from '../../types';

interface SegmentationSectionProps {
  onOpenModal: (type: ModalType) => void;
}

export const SegmentationSection: React.FC<SegmentationSectionProps> = ({ onOpenModal }) => {
  // Toggleable filters that dynamically adjust the contact count
  const [activeFilters, setActiveFilters] = useState<{ id: string; label: string; countDelta: number }[]>([
    { id: 'geo', label: 'Location: India (Metro Cities)', countDelta: -19891 },
    { id: 'wa', label: 'WhatsApp Status: Engaged in Last 7 Days', countDelta: -16250 },
    { id: 'rfm', label: 'Total Spend > ₹5,000 & 2+ Purchases', countDelta: -7329 },
  ]);

  const baseContacts = 48291;
  const currentFiltered = activeFilters.reduce((acc, curr) => acc + curr.countDelta, baseContacts);

  const availableFilters = [
    { id: 'email_open', label: 'Email Open Rate > 40%', delta: -4200, category: 'Email engagement' },
    { id: 'cart_abandon', label: 'Abandoned Cart within 48h', delta: -1200, category: 'Events' },
    { id: 'tag_runner', label: 'Tag equals VIP_CLUB', delta: -1800, category: 'Tags' },
    { id: 'tier_enterprise', label: 'Account Tier = High Value', delta: -900, category: 'Custom attributes' }
  ];

  const handleAddFilter = (f: { id: string; label: string; delta: number }) => {
    if (activeFilters.some(item => item.id === f.id)) return;
    setActiveFilters([...activeFilters, { id: f.id, label: f.label, countDelta: f.delta }]);
  };

  const handleRemoveFilter = (id: string) => {
    setActiveFilters(activeFilters.filter(item => item.id !== id));
  };

  return (
    <section id="segmentation-section" className="py-20 md:py-32 bg-slate-50 border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold mb-4">
            <Filter className="w-3.5 h-3.5" />
            <span>Behavioral Audience Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight text-balance mb-4">
            Your audience isn't a list.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Static lists rot in days. Cocoonmail segments customers dynamically using real-time email clicks, WhatsApp replies, website events, order values, and geographic signals.
          </p>
        </div>

        {/* Dynamic Segmentation Studio Box */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Interactive Filter Query Builder */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-indigo-600" />
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Active Segment Query Rules (AND Logic)
                </span>
              </div>
              <span className="text-xs text-slate-400 font-mono">Real-time sync</span>
            </div>

            {/* Active Stack */}
            <div className="space-y-2.5">
              {activeFilters.map((af) => (
                <div 
                  key={af.id}
                  className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs animate-in fade-in duration-150"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="font-semibold text-slate-800">{af.label}</span>
                  </div>
                  <button
                    onClick={() => handleRemoveFilter(af.id)}
                    className="p-1 rounded-md text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                    title="Remove filter rule"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Add more filter quick chips */}
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                Click to add more behavioural dimensions:
              </div>
              <div className="flex flex-wrap gap-2">
                {availableFilters.map((filter) => {
                  const isAdded = activeFilters.some(item => item.id === filter.id);
                  return (
                    <button
                      key={filter.id}
                      disabled={isAdded}
                      onClick={() => handleAddFilter(filter)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border flex items-center gap-1.5 transition-all ${
                        isAdded 
                          ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed' 
                          : 'bg-white text-slate-700 border-slate-200 hover:border-indigo-400 hover:text-indigo-600'
                      }`}
                    >
                      <Plus className="w-3 h-3" />
                      <span>{filter.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Location</span>
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5" /> Email Engagement</span>
              <span className="flex items-center gap-1"><MessageSquare className="w-3.5 h-3.5" /> WhatsApp Activity</span>
              <span className="flex items-center gap-1"><Tag className="w-3.5 h-3.5" /> Custom Attributes</span>
            </div>
          </div>

          {/* Right: Funnel Count Transformation Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 text-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col justify-between min-h-[380px]">
            <div>
              <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider">
                Dynamic Audience Resolution
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                Targeting Precision
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                As filters refine, your audience updates instantly across ongoing automation workflows and broadcasts.
              </p>
            </div>

            {/* Visual Transformation Stream */}
            <div className="py-6 space-y-3 font-mono">
              <div className="flex justify-between items-center text-xs p-2.5 rounded-lg bg-white/5 border border-white/10">
                <span className="text-slate-400">Total Contacts:</span>
                <span className="text-base font-bold text-white">48,291</span>
              </div>
              <div className="flex justify-center text-indigo-400 text-xs">
                ↓ Real-time Filter Matrix
              </div>
              <div className="flex justify-between items-center text-xs p-3 rounded-lg bg-indigo-500/20 border border-indigo-400/30">
                <span className="text-indigo-300 font-bold">Filtered VIP Segment:</span>
                <span className="text-2xl font-black text-emerald-400">{currentFiltered.toLocaleString()}</span>
              </div>
              <div className="flex justify-center text-emerald-400 text-xs">
                ↓ Instant Dispatch
              </div>
              <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-center text-xs font-semibold text-emerald-300">
                Campaign Ready: Email & WhatsApp Broadcast
              </div>
            </div>

            <button
              onClick={() => onOpenModal('start-free')}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-all"
            >
              <span>Explore Segmentation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
