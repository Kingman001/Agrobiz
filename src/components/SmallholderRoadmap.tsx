import React, { useState } from 'react';
import { roadmapPhases } from '../data/agribusinessData';
import { RoadmapPhase } from '../types';
import {
  CheckCircle2,
  Clock,
  TrendingUp,
  Warehouse,
  HandCoins,
  Tractor,
  Users,
  Target,
  ArrowRight,
  ShieldAlert,
  Sparkles
} from 'lucide-react';

interface SmallholderRoadmapProps {
  onOpenInquiryModal: (role?: string) => void;
}

export const SmallholderRoadmap: React.FC<SmallholderRoadmapProps> = ({
  onOpenInquiryModal
}) => {
  const [selectedPhase, setSelectedPhase] = useState<number>(1);

  const activePhaseObj = roadmapPhases.find(p => p.phaseNumber === selectedPhase) || roadmapPhases[0];

  return (
    <section id="roadmap" className="py-20 bg-stone-900 text-white relative overflow-hidden">
      {/* Background Decorative Graphic Overlay */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-900/80 border border-emerald-500/40 text-emerald-300 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Smallholder Support Master Plan</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Our Roadmap to Empowering Smallholder Farmers
          </h2>
          <p className="text-stone-300 text-base leading-relaxed">
            Smallholder farmers generate over 70% of food supply but suffer from lack of capital, high post-harvest rot, and predatory middleman pricing. Here is how <strong className="text-emerald-300">our startup scales step-by-step</strong> to solve these challenges permanently.
          </p>
        </div>

        {/* Phase Navigation Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {roadmapPhases.map((phase) => {
            const isSelected = selectedPhase === phase.phaseNumber;
            return (
              <button
                key={phase.phaseNumber}
                onClick={() => setSelectedPhase(phase.phaseNumber)}
                className={`p-5 rounded-2xl text-left border transition-all cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? 'bg-gradient-to-br from-emerald-900/90 to-stone-900 border-emerald-400 shadow-xl ring-2 ring-emerald-500/30'
                    : 'bg-stone-950/80 hover:bg-stone-800/80 border-stone-800'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full ${
                    isSelected ? 'bg-emerald-500 text-stone-950' : 'bg-stone-800 text-stone-400'
                  }`}>
                    Phase 0{phase.phaseNumber}
                  </span>
                  <span className={`text-xs font-medium ${
                    phase.status === 'In Progress' ? 'text-emerald-400' : 'text-stone-400'
                  }`}>
                    {phase.timeframe}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-base text-white mb-2 line-clamp-1">
                  {phase.title}
                </h3>

                <p className="text-xs text-stone-400 line-clamp-2">
                  {phase.summary}
                </p>

                {/* Progress bar line */}
                <div className="mt-4 w-full bg-stone-800 h-1 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${
                      phase.status === 'In Progress'
                        ? 'bg-emerald-400 w-2/3'
                        : isSelected
                        ? 'bg-amber-400 w-1/3'
                        : 'bg-stone-700 w-0'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Phase Active Card Display */}
        <div className="bg-stone-950/90 border border-emerald-800/80 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Milestones */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 bg-emerald-950 text-emerald-300 border border-emerald-800 rounded-full text-xs font-mono font-bold uppercase">
                  Phase {activePhaseObj.phaseNumber} Focus
                </span>
                <span className="text-xs text-stone-400 font-medium">
                  Timeline Target: <strong className="text-white">{activePhaseObj.timeframe}</strong>
                </span>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                  activePhaseObj.status === 'In Progress'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-amber-600/30 text-amber-300 border border-amber-500/40'
                }`}>
                  {activePhaseObj.status}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                {activePhaseObj.title}
              </h3>

              <p className="text-stone-300 text-sm leading-relaxed">
                {activePhaseObj.summary}
              </p>

              {/* Milestones Checklist */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                  Key Milestones & Deliverables
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {activePhaseObj.milestones.map((milestone, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-stone-900/90 border border-stone-800 rounded-xl flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-stone-200 font-medium">
                        {milestone}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Target Impact Card */}
            <div className="lg:col-span-5 bg-gradient-to-b from-emerald-950/80 to-stone-900 border border-emerald-700/60 rounded-2xl p-6 space-y-6">
              <div className="flex items-center gap-2 border-b border-emerald-800/80 pb-3">
                <Target className="w-5 h-5 text-emerald-400" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                  Phase {activePhaseObj.phaseNumber} Impact Metrics
                </h4>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-stone-950/80 rounded-xl border border-stone-800">
                  <span className="text-xs text-stone-400">Farmers Target Capacity</span>
                  <div className="text-xl font-serif font-bold text-emerald-300 mt-1">
                    {activePhaseObj.targetImpact.farmersReached}
                  </div>
                </div>

                <div className="p-4 bg-stone-950/80 rounded-xl border border-stone-800">
                  <span className="text-xs text-stone-400">Net Household Income Gain</span>
                  <div className="text-xl font-serif font-bold text-amber-300 mt-1">
                    {activePhaseObj.targetImpact.incomeGrowth}
                  </div>
                </div>

                <div className="p-4 bg-stone-950/80 rounded-xl border border-stone-800">
                  <span className="text-xs text-stone-400">Post-Harvest Loss Target</span>
                  <div className="text-xl font-serif font-bold text-emerald-300 mt-1">
                    {activePhaseObj.targetImpact.wasteReduction}
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenInquiryModal('Impact Investor')}
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <HandCoins className="w-4 h-4 text-emerald-200" />
                  <span>Co-Fund This Phase / Partner</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Smallholder Solution Pillars Grid */}
        <div className="mt-16 text-center space-y-4">
          <h3 className="text-2xl font-serif font-bold text-white">
            The 5 Smallholder Support Pillars We Are Building
          </h3>
          <p className="text-stone-400 text-sm max-w-2xl mx-auto">
            Addressing every bottleneck along the agricultural value chain for rural farmers.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-6">
            <div className="p-5 bg-stone-950 rounded-2xl border border-stone-800 text-left space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center">
                <HandCoins className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-white">1. Micro-Finance</h4>
              <p className="text-xs text-stone-400">In-kind seed & input loans repaid at harvest from guaranteed produce sales.</p>
            </div>

            <div className="p-5 bg-stone-950 rounded-2xl border border-stone-800 text-left space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-white">2. Market Access</h4>
              <p className="text-xs text-stone-400">Direct off-take buyback contracts eliminating predatory middlemen prices.</p>
            </div>

            <div className="p-5 bg-stone-950 rounded-2xl border border-stone-800 text-left space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center">
                <Warehouse className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-white">3. Cold Storage</h4>
              <p className="text-xs text-stone-400">Shared solar cold pods & grain silos preventing post-harvest spoilage.</p>
            </div>

            <div className="p-5 bg-stone-950 rounded-2xl border border-stone-800 text-left space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center">
                <Tractor className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-white">4. Equipment Pool</h4>
              <p className="text-xs text-stone-400">Affordable tractor tillage, solar pumps & fish aerators leased per day.</p>
            </div>

            <div className="p-5 bg-stone-950 rounded-2xl border border-stone-800 text-left space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-white">5. Agronomy Training</h4>
              <p className="text-xs text-stone-400">Practical climate-smart farming, biosecurity & financial literacy classes.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
