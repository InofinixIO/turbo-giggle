import React, { useState } from 'react';
import { 
  Users, 
  Filter, 
  Plus, 
  Trash2, 
  Check, 
  RefreshCw, 
  Sparkles,
  Smartphone,
  Mail,
  ShoppingBag,
  CreditCard,
  Clock,
  ArrowRight
} from 'lucide-react';

interface FilterRule {
  id: string;
  field: string;
  operator: string;
  value: string;
  enabled: boolean;
}

export const SegmentationBuilder: React.FC = () => {
  const [rules, setRules] = useState<FilterRule[]>([
    { id: '1', field: 'Total Lifetime Spend', operator: 'greater than', value: '₹5,000 / $60', enabled: true },
    { id: '2', field: 'WhatsApp Opt-in Status', operator: 'equals', value: 'Verified Active', enabled: true },
    { id: '3', field: 'Last Checkout Abandonment', operator: 'within last', value: '24 Hours', enabled: true },
    { id: '4', field: 'Meta Ad Campaign Tag', operator: 'contains', value: 'Monsoon_Footwear', enabled: false }
  ]);

  const [activeTab, setActiveTab] = useState<'builder' | 'customer360'>('builder');

  const toggleRule = (id: string) => {
    setRules((prev) =>
      prev.map((r) => (r.id === id ? { ...r, enabled: !r.enabled } : r))
    );
  };

  // Compute simulated audience count based on enabled filters
  const baseCount = 42800;
  const enabledCount = rules.filter((r) => r.enabled).length;
  const simulatedAudience = Math.round(baseCount / Math.pow(1.65, enabledCount));

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8">
      
      {/* Top Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse" />
            <h4 className="text-lg font-bold text-slate-900">Dynamic Customer Segmentation</h4>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Audiences update automatically as customer behavior changes in real time
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex p-1 bg-slate-100 rounded-xl text-xs font-medium">
          <button
            onClick={() => setActiveTab('builder')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'builder' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Filter Rules Engine
          </button>
          <button
            onClick={() => setActiveTab('customer360')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'customer360' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Customer 360 Profile
          </button>
        </div>
      </div>

      {activeTab === 'builder' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-center">
          
          {/* Rules List */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-500 pb-1">
              <span>ACTIVE FILTER CONDITIONS (MATCH ALL)</span>
              <span>Toggle to recalculate</span>
            </div>

            {rules.map((rule, idx) => (
              <div
                key={rule.id}
                onClick={() => toggleRule(rule.id)}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                  rule.enabled
                    ? 'bg-slate-50/90 border-slate-300 shadow-xs'
                    : 'bg-white border-dashed border-slate-200 opacity-60 hover:opacity-90'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center text-xs transition-colors ${
                    rule.enabled ? 'bg-indigo-600 text-white' : 'border border-slate-300 text-transparent'
                  }`}>
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-900 block">{rule.field}</span>
                    <span className="text-[11px] font-mono text-slate-500">
                      {rule.operator} &ldquo;{rule.value}&rdquo;
                    </span>
                  </div>
                </div>

                <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                  rule.enabled ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-500'
                }`}>
                  {rule.enabled ? 'ACTIVE' : 'MUTED'}
                </span>
              </div>
            ))}

            <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                Live cohort recalculates instantly without manual CSV export
              </span>
            </div>
          </div>

          {/* Real-Time Audience Counter & Sync Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl p-6 shadow-md border border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
              <span>LIVE MATCHING COHORT</span>
              <span className="text-emerald-400 font-mono">Real-time sync</span>
            </div>

            <div className="py-6 text-center">
              <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-white block">
                {simulatedAudience.toLocaleString()}
              </span>
              <span className="text-xs text-slate-400 mt-1 block">
                High-Intent Verified Contacts
              </span>
            </div>

            <div className="space-y-2 text-xs border-t border-slate-800 pt-4">
              <div className="flex items-center justify-between text-slate-300">
                <span>WhatsApp Opted In:</span>
                <span className="font-mono text-emerald-400 font-semibold">96.8%</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>Predicted Cart Recovery:</span>
                <span className="font-mono text-indigo-300 font-semibold">62.4%</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>Meta Custom Audience Sync:</span>
                <span className="font-mono text-slate-400">Continuous 2-way</span>
              </div>
            </div>

            <div className="mt-5">
              <button className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer">
                <span>Launch Campaign to this Cohort</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      ) : (
        /* Customer 360 View */
        <div className="pt-6 space-y-4">
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-base font-bold">
                AS
              </div>
              <div>
                <h5 className="font-bold text-slate-900 text-base">Aarav Sharma</h5>
                <p className="text-xs text-slate-500 font-mono">+91 98201 42100 · aarav.sharma@example.com · Mumbai, IN</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                VIP Tier 1
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                ₹8,490 Total LTV
              </span>
            </div>
          </div>

          {/* Unified Timeline across channels */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block px-1">
              Unified Activity Timeline
            </span>

            <div className="space-y-2 text-xs">
              <div className="p-3 bg-white border border-slate-200 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <CreditCard className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Payment Completed · ₹2,499</span>
                    <span className="text-slate-500 text-[11px]">Via Google Pay UPI inside WhatsApp</span>
                  </div>
                </div>
                <span className="text-slate-400 font-mono text-[11px]">10 mins ago</span>
              </div>

              <div className="p-3 bg-white border border-slate-200 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Smartphone className="w-4 h-4 text-indigo-600 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900 block">WhatsApp AI Agent Sizing Advice</span>
                    <span className="text-slate-500 text-[11px]">Recommended UK 9 HydroBlack</span>
                  </div>
                </div>
                <span className="text-slate-400 font-mono text-[11px]">14 mins ago</span>
              </div>

              <div className="p-3 bg-white border border-slate-200 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Email Lookbook Opened</span>
                    <span className="text-slate-500 text-[11px]">Monsoon 2026 Collection</span>
                  </div>
                </div>
                <span className="text-slate-400 font-mono text-[11px]">2 hours ago</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
