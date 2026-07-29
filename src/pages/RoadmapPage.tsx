import React, { useState } from 'react';
import { roadmapPhases } from '../data/agribusinessData';
import { PageHeader } from '../components/PageHeader';
import { GrowthTracker } from '../components/GrowthTracker';
import {
  TrendingUp,
  Users,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  ChevronRight,
  Handshake,
  ShieldCheck,
  Calculator,
  Tractor,
  Warehouse,
  Coins
} from 'lucide-react';

import { InquiryCallback } from '../types';

interface RoadmapPageProps {
  onOpenInquiryModal: InquiryCallback;
  onNavigatePage: (pageId: string) => void;
}

export const RoadmapPage: React.FC<RoadmapPageProps> = ({
  onOpenInquiryModal,
  onNavigatePage
}) => {
  const [selectedPhase, setSelectedPhase] = useState<number>(1);
  
  // Interactive Smallholder Revenue Estimator State
  const [farmAcres, setFarmAcres] = useState<number>(3);
  const [currentIncome, setCurrentIncome] = useState<number>(450000); // NGN or USD equivalent

  // Estimated benefits with Glean Agro Outgrower Scheme
  const estimatedYieldBoost = farmAcres * 180000;
  const postHarvestSavings = farmAcres * 65000;
  const netEstimatedIncome = currentIncome + estimatedYieldBoost + postHarvestSavings;
  const percentageIncrease = Math.round(((netEstimatedIncome - currentIncome) / currentIncome) * 100);

  const activePhaseData = roadmapPhases.find(p => p.phaseNumber === selectedPhase) || roadmapPhases[0];

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      {/* Page Header */}
      <PageHeader
        title="Smallholder Ecosystem Roadmap & Outgrower Scheme"
        subtitle="A phased, sustainable strategy transforming rural farming through anchor enterprise farming, solar cold storage, shared tractors, input credit, and guaranteed market off-take."
        categoryTag="Glean Agro Smallholder Strategy"
        breadcrumbs={[{ label: "Smallholder Roadmap" }]}
        onNavigatePage={onNavigatePage}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">
        
        {/* Recharts Visual Growth & Yield Improvement Tracker */}
        <GrowthTracker onOpenInquiryModal={onOpenInquiryModal} />

        {/* Phase Selector Tabs */}
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-800">
                Strategic Timeline
              </span>
              <h2 className="text-2xl font-serif font-bold text-stone-900">
                4-Phase Ecosystem Growth Roadmap
              </h2>
            </div>
            <span className="text-xs text-stone-500 font-medium">
              Click a phase to inspect detailed operational milestones
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {roadmapPhases.map((phase) => {
              const isSelected = selectedPhase === phase.phaseNumber;
              return (
                <button
                  key={phase.phaseNumber}
                  onClick={() => setSelectedPhase(phase.phaseNumber)}
                  className={`p-5 rounded-2xl text-left transition-all border cursor-pointer relative overflow-hidden ${
                    isSelected
                      ? 'bg-emerald-900 text-white border-emerald-800 shadow-md ring-2 ring-emerald-600'
                      : 'bg-stone-50 text-stone-800 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full ${
                        isSelected
                          ? 'bg-emerald-800 text-emerald-200'
                          : 'bg-stone-200 text-stone-700'
                      }`}
                    >
                      Phase 0{phase.phaseNumber}
                    </span>
                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded-md ${
                        phase.status === 'In Progress'
                          ? 'bg-emerald-600 text-white'
                          : phase.status === 'Upcoming'
                          ? 'bg-amber-500 text-white'
                          : 'bg-stone-300 text-stone-800'
                      }`}
                    >
                      {phase.status}
                    </span>
                  </div>

                  <h3 className={`font-serif font-bold text-base line-clamp-1 ${isSelected ? 'text-white' : 'text-stone-900'}`}>
                    {phase.title}
                  </h3>

                  <p className={`text-xs mt-1 font-mono ${isSelected ? 'text-emerald-300' : 'text-stone-500'}`}>
                    {phase.timeframe}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Phase Detail Showcase */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Main Info */}
          <div className="lg:col-span-7 p-8 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-serif font-bold text-lg flex items-center justify-center">
                P{activePhaseData.phaseNumber}
              </span>
              <div>
                <span className="text-xs text-emerald-700 font-mono font-bold uppercase">
                  {activePhaseData.timeframe} • Status: {activePhaseData.status}
                </span>
                <h3 className="text-2xl font-serif font-bold text-stone-900">
                  {activePhaseData.title}
                </h3>
              </div>
            </div>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              {activePhaseData.summary}
            </p>

            {/* Milestones List */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500">
                Key Operational Milestones
              </h4>
              <div className="space-y-2">
                {activePhaseData.milestones.map((m, idx) => (
                  <div key={idx} className="p-3.5 bg-stone-50 rounded-xl border border-stone-200/80 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-stone-800 font-medium">{m}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenInquiryModal('Smallholder Farmer')}
                className="px-6 py-3 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <Tractor className="w-4 h-4 text-emerald-300" />
                <span>Join Outgrower Scheme in Phase {activePhaseData.phaseNumber}</span>
              </button>
            </div>
          </div>

          {/* Impact Target Sidebar */}
          <div className="lg:col-span-5 bg-gradient-to-br from-stone-900 via-stone-950 to-emerald-950 text-white p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase mb-4">
                <Sparkles className="w-4 h-4" />
                <span>Phase {activePhaseData.phaseNumber} Target Impact</span>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-stone-900/90 rounded-2xl border border-stone-800 space-y-1">
                  <div className="text-xs text-stone-400 flex items-center gap-2">
                    <Users className="w-4 h-4 text-emerald-400" />
                    Smallholders Reached
                  </div>
                  <div className="text-2xl font-serif font-bold text-stone-100">
                    {activePhaseData.targetImpact.farmersReached}
                  </div>
                </div>

                <div className="p-4 bg-stone-900/90 rounded-2xl border border-stone-800 space-y-1">
                  <div className="text-xs text-stone-400 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-amber-400" />
                    Farmer Income Growth Target
                  </div>
                  <div className="text-2xl font-serif font-bold text-amber-300">
                    {activePhaseData.targetImpact.incomeGrowth}
                  </div>
                </div>

                <div className="p-4 bg-stone-900/90 rounded-2xl border border-stone-800 space-y-1">
                  <div className="text-xs text-stone-400 flex items-center gap-2">
                    <Warehouse className="w-4 h-4 text-emerald-400" />
                    Post-Harvest Loss Target
                  </div>
                  <div className="text-2xl font-serif font-bold text-emerald-400">
                    {activePhaseData.targetImpact.wasteReduction}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-800">
              <p className="text-xs text-stone-400">
                Impact targets are audited by Glean Agro extension leads and local farming cooperative delegates.
              </p>
            </div>
          </div>

        </div>

        {/* Interactive Smallholder Income Growth Estimator */}
        <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-md space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-emerald-800 text-xs font-mono font-bold uppercase">
                <Calculator className="w-4 h-4" />
                <span>Smallholder Profitability Estimator</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-stone-900">
                Estimate Your Income Boost with Glean Agro Outgrower Scheme
              </h3>
            </div>
            <span className="text-xs text-stone-500">
              Based on high-yield hybrid seed, solar cold storage & direct off-take
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                    Farm Cultivation Size (Hectares / Acres)
                  </label>
                  <span className="text-sm font-bold text-emerald-800 font-mono">
                    {farmAcres} Acres / Hectares
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={farmAcres}
                  onChange={(e) => setFarmAcres(Number(e.target.value))}
                  className="w-full accent-emerald-700 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                    Estimated Current Harvest Annual Revenue (₦)
                  </label>
                  <span className="text-sm font-bold text-stone-900 font-mono">
                    ₦{currentIncome.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="100000"
                  max="3000000"
                  step="50000"
                  value={currentIncome}
                  onChange={(e) => setCurrentIncome(Number(e.target.value))}
                  className="w-full accent-emerald-700 cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs text-stone-600">
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <span className="font-bold text-stone-900 block mb-0.5">Yield Boost Source</span>
                  Certified seeds, fingerlings & agronomy training
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <span className="font-bold text-stone-900 block mb-0.5">Post-Harvest Protection</span>
                  Solar cold pods & guaranteed buyback price
                </div>
              </div>
            </div>

            {/* Calculated Output Display */}
            <div className="lg:col-span-5 bg-gradient-to-br from-emerald-900 to-stone-900 text-white p-6 rounded-2xl shadow-lg space-y-4">
              <span className="text-xs font-mono font-bold uppercase text-emerald-300">
                Projected Outgrower Outcome
              </span>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs text-stone-300">
                  <span>Current Harvest Revenue:</span>
                  <span className="font-mono">₦{currentIncome.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-xs text-emerald-300">
                  <span>+ Yield Increase (Agronomy & Credit):</span>
                  <span className="font-mono">+₦{estimatedYieldBoost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-xs text-emerald-300">
                  <span>+ Spoilage Loss Prevention:</span>
                  <span className="font-mono">+₦{postHarvestSavings.toLocaleString()}</span>
                </div>

                <div className="pt-3 border-t border-emerald-800/80">
                  <div className="text-xs text-stone-300">Estimated Net Revenue</div>
                  <div className="text-3xl font-serif font-bold text-amber-300">
                    ₦{netEstimatedIncome.toLocaleString()}
                  </div>
                  <div className="text-xs text-emerald-400 font-bold mt-1">
                    ▲ +{percentageIncrease}% Potential Growth in Household Profit
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenInquiryModal('Smallholder Farmer')}
                className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-stone-950 rounded-xl font-bold text-sm transition-all shadow-md cursor-pointer"
              >
                Apply for Outgrower Scheme
              </button>
            </div>

          </div>
        </div>

        {/* Impact Investor & Donor Portal Callout */}
        <div className="bg-stone-900 text-white rounded-3xl p-8 border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="px-3 py-1 bg-amber-900/80 text-amber-200 rounded-full text-xs font-bold uppercase tracking-wider">
              NGOs & Impact Investors
            </span>
            <h3 className="text-2xl font-serif font-bold text-white">
              Partner with Glean Agro to Scale Solar Cold Chain & Tractor Fleets
            </h3>
            <p className="text-stone-300 text-sm max-w-2xl">
              We welcome partnerships with development finance institutions, agricultural NGOs, and impact funds to accelerate cold storage pods and equipment credit pools for rural Nigerian farmers.
            </p>
          </div>

          <button
            onClick={() => onOpenInquiryModal('Impact Investor')}
            className="px-6 py-3.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-xl text-sm transition-all shrink-0 cursor-pointer flex items-center gap-2"
          >
            <Handshake className="w-5 h-5" />
            <span>Partner / Invest</span>
          </button>
        </div>

      </div>
    </div>
  );
};
