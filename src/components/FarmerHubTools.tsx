import React, { useState } from 'react';
import {
  smallholderServices,
  liveMarketPrices,
  equipmentCatalog,
  trainingCourses
} from '../data/agribusinessData';
import {
  Calculator,
  Warehouse,
  TrendingUp,
  Tractor,
  BookOpen,
  DollarSign,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Filter,
  Sparkles,
  PhoneCall,
  Clock
} from 'lucide-react';

interface FarmerHubToolsProps {
  onOpenInquiryModal: (role?: string, serviceName?: string) => void;
}

export const FarmerHubTools: React.FC<FarmerHubToolsProps> = ({
  onOpenInquiryModal
}) => {
  const [activeTab, setActiveTab] = useState<'calculator' | 'storage' | 'prices' | 'equipment' | 'training'>('calculator');

  // Calculator State
  const [enterpriseType, setEnterpriseType] = useState<'catfish' | 'poultry' | 'maize' | 'cattle'>('catfish');
  const [scaleValue, setScaleValue] = useState<number>( enterpriseType === 'maize' ? 3 : enterpriseType === 'cattle' ? 10 : 2000 );

  // Re-adjust scale defaults when changing enterprise type
  const handleEnterpriseChange = (type: 'catfish' | 'poultry' | 'maize' | 'cattle') => {
    setEnterpriseType(type);
    if (type === 'maize') setScaleValue(3); // 3 Hectares
    else if (type === 'cattle') setScaleValue(10); // 10 Head
    else setScaleValue(2000); // 2,000 fish or broilers
  };

  // Calculations
  const calculateYieldAndRevenue = () => {
    switch (enterpriseType) {
      case 'catfish': {
        const baselineYield = scaleValue * 0.85; // kg
        const baselinePrice = 2800; // per kg
        const baselineRev = baselineYield * baselinePrice;

        const boostedYield = scaleValue * 1.15; // 30% boost with quality feed & aerators
        const offTakePrice = 3200; // Guaranteed off-take price
        const boostedRev = boostedYield * offTakePrice;

        return {
          unitName: 'Fish (Fingerlings)',
          baselineYieldText: `${Math.round(baselineYield).toLocaleString()} kg`,
          boostedYieldText: `${Math.round(boostedYield).toLocaleString()} kg`,
          baselineRev,
          boostedRev,
          gainPercent: Math.round(((boostedRev - baselineRev) / baselineRev) * 100),
          spoilageSaved: `${Math.round(scaleValue * 0.12 * 3200).toLocaleString()} NGN saved via solar cold storage`
        };
      }
      case 'poultry': {
        const baselineEggsOrMeat = scaleValue * 0.75; // birds or crates
        const baselinePrice = 4800;
        const baselineRev = baselineEggsOrMeat * baselinePrice;

        const boostedYield = scaleValue * 0.92;
        const offTakePrice = 5400;
        const boostedRev = boostedYield * offTakePrice;

        return {
          unitName: 'Birds / Layers',
          baselineYieldText: `${Math.round(baselineEggsOrMeat).toLocaleString()} units`,
          boostedYieldText: `${Math.round(boostedYield).toLocaleString()} units`,
          baselineRev,
          boostedRev,
          gainPercent: Math.round(((boostedRev - baselineRev) / baselineRev) * 100),
          spoilageSaved: `Zero breakage & temperature-controlled egg transit`
        };
      }
      case 'maize': {
        const baselineTonnes = scaleValue * 1.8; // 1.8 Tons/Ha
        const baselinePrice = 620000; // Per Ton
        const baselineRev = baselineTonnes * baselinePrice;

        const boostedTonnes = scaleValue * 4.2; // 4.2 Tons/Ha with certified seeds & tractor tillage
        const offTakePrice = 680000;
        const boostedRev = boostedTonnes * offTakePrice;

        return {
          unitName: 'Hectares Cultivated',
          baselineYieldText: `${baselineTonnes.toFixed(1)} Metric Tons`,
          boostedYieldText: `${boostedTonnes.toFixed(1)} Metric Tons`,
          baselineRev,
          boostedRev,
          gainPercent: Math.round(((boostedRev - baselineRev) / baselineRev) * 100),
          spoilageSaved: `Hermetic grain silo drying reduces aflatoxin & rot by 90%`
        };
      }
      case 'cattle': {
        const baselineWeight = scaleValue * 320; // kg average
        const baselinePrice = 2200; // per kg liveweight
        const baselineRev = baselineWeight * baselinePrice;

        const boostedWeight = scaleValue * 440; // paddock zero-grazing weight
        const offTakePrice = 2600;
        const boostedRev = boostedWeight * offTakePrice;

        return {
          unitName: 'Head of Cattle',
          baselineYieldText: `${Math.round(baselineWeight).toLocaleString()} kg Total Weight`,
          boostedYieldText: `${Math.round(boostedWeight).toLocaleString()} kg Total Weight`,
          baselineRev,
          boostedRev,
          gainPercent: Math.round(((boostedRev - baselineRev) / baselineRev) * 100),
          spoilageSaved: `Zero loss from open-range disease or pasture conflicts`
        };
      }
    }
  };

  const calcResult = calculateYieldAndRevenue();

  return (
    <section id="farmer-hub" className="py-20 bg-stone-100 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-800 text-white rounded-full text-xs font-bold uppercase tracking-wider">
            <Tractor className="w-4 h-4 text-emerald-300" />
            <span>Interactive Smallholder Support Suite</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Farmer Hub: Yield Calculators, Market Prices & Equipment Leasing
          </h2>
          <p className="text-stone-600 text-base leading-relaxed">
            Test how our ecosystem tools can increase your farm yield, protect your harvests from post-harvest rot, and connect you directly to commercial buyers.
          </p>
        </div>

        {/* Feature Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'calculator', label: 'Yield & Income Boost Calculator', icon: Calculator },
            { id: 'prices', label: 'Live Commodity Market Board', icon: TrendingUp },
            { id: 'equipment', label: 'Equipment & Supplies Lease', icon: Tractor },
            { id: 'training', label: 'Agronomy Workshops & Guides', icon: BookOpen }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-emerald-900 text-white shadow-md'
                    : 'bg-white text-stone-700 hover:bg-stone-200/80 border border-stone-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-300' : 'text-emerald-700'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: Yield & Income Calculator */}
        {activeTab === 'calculator' && (
          <div className="bg-white rounded-3xl border border-stone-200 shadow-xl p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Controls */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-800">
                    Step 1: Select Farming Enterprise
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
                    {[
                      { id: 'catfish', label: 'Aquaculture' },
                      { id: 'poultry', label: 'Poultry' },
                      { id: 'maize', label: 'Maize Grain' },
                      { id: 'cattle', label: 'Cattle' }
                    ].map(item => (
                      <button
                        key={item.id}
                        onClick={() => handleEnterpriseChange(item.id as any)}
                        className={`p-3 rounded-xl text-xs font-bold border text-center transition-all cursor-pointer ${
                          enterpriseType === item.id
                            ? 'bg-emerald-800 text-white border-emerald-900'
                            : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border-stone-200'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Scale Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold text-stone-800">
                    <span>Step 2: Enter Capacity / Scale ({calcResult.unitName}):</span>
                    <span className="text-emerald-800 font-mono text-sm bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {scaleValue.toLocaleString()} {enterpriseType === 'maize' ? 'Hectares' : enterpriseType === 'cattle' ? 'Head' : 'Units'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={enterpriseType === 'maize' ? 1 : enterpriseType === 'cattle' ? 2 : 500}
                    max={enterpriseType === 'maize' ? 20 : enterpriseType === 'cattle' ? 100 : 10000}
                    step={enterpriseType === 'maize' ? 1 : enterpriseType === 'cattle' ? 2 : 500}
                    value={scaleValue}
                    onChange={(e) => setScaleValue(Number(e.target.value))}
                    className="w-full accent-emerald-800 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-stone-400 font-mono">
                    <span>Min Scale</span>
                    <span>Max Scale</span>
                  </div>
                </div>

                <div className="p-4 bg-emerald-50/80 rounded-2xl border border-emerald-200 space-y-2">
                  <h4 className="text-xs font-bold text-emerald-900 uppercase flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    How Verdant Ecosystem Boosts Your Farm Yield:
                  </h4>
                  <ul className="text-xs text-stone-700 space-y-1">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Certified high-survival fingerlings / hybrid non-GMO seeds</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Per-acre tractor tillage & solar-powered pond aerators</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Shared solar cold storage & direct off-taker floor price contracts</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Result Dashboard */}
              <div className="lg:col-span-6 bg-stone-900 text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                  <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                    Projected Revenue Increase
                  </span>
                  <span className="text-xs text-amber-400 font-bold bg-amber-950/80 border border-amber-800 px-2 py-0.5 rounded-full">
                    +{calcResult.gainPercent}% Profit Surge
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-stone-950 rounded-xl border border-stone-800">
                    <span className="text-xs text-stone-400">Traditional Farming Income</span>
                    <div className="text-lg font-serif font-bold text-stone-300 mt-1">
                      ₦{Math.round(calcResult.baselineRev).toLocaleString()}
                    </div>
                    <span className="text-[11px] text-stone-500 font-mono">{calcResult.baselineYieldText}</span>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-emerald-950 to-stone-950 rounded-xl border border-emerald-600/80">
                    <span className="text-xs text-emerald-300 font-bold">With Verdant Ecosystem</span>
                    <div className="text-xl font-serif font-bold text-emerald-400 mt-1">
                      ₦{Math.round(calcResult.boostedRev).toLocaleString()}
                    </div>
                    <span className="text-[11px] text-emerald-200 font-mono">{calcResult.boostedYieldText}</span>
                  </div>
                </div>

                <div className="p-3.5 bg-stone-950/90 rounded-xl border border-stone-800 text-xs text-stone-300 flex items-center gap-2">
                  <Warehouse className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Post-Harvest Impact:</strong> {calcResult.spoilageSaved}</span>
                </div>

                <button
                  onClick={() => onOpenInquiryModal('Smallholder Farmer', `${enterpriseType.toUpperCase()} Yield Support`)}
                  className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Tractor className="w-4 h-4" />
                  <span>Apply For Smallholder Support Package</span>
                </button>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: Live Commodity Prices */}
        {activeTab === 'prices' && (
          <div className="bg-white rounded-3xl border border-stone-200 shadow-xl p-6 sm:p-10 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
              <div>
                <h3 className="text-xl font-serif font-bold text-stone-900">
                  Regional Farm-Gate vs. Wholesale Commodity Market Board
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Updated weekly across agricultural hubs to give farmers pricing transparency.
                </p>
              </div>
              <button
                onClick={() => onOpenInquiryModal('Commercial Buyer')}
                className="px-4 py-2 bg-emerald-800 text-white rounded-lg text-xs font-bold hover:bg-emerald-900 cursor-pointer"
              >
                Lock Wholesale Rate
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-100 border-b border-stone-200 text-xs text-stone-600 font-mono uppercase">
                    <th className="p-3">Commodity & Spec</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Farm-Gate Price</th>
                    <th className="p-3">Wholesale Price</th>
                    <th className="p-3">7-Day Trend</th>
                    <th className="p-3">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {liveMarketPrices.map((item) => (
                    <tr key={item.id} className="hover:bg-stone-50 transition-colors">
                      <td className="p-3 font-semibold text-stone-900">
                        {item.commodity}
                        <span className="block text-xs font-normal text-stone-500 font-mono">{item.unit}</span>
                      </td>
                      <td className="p-3">
                        <span className="px-2.5 py-0.5 bg-stone-100 text-stone-800 rounded-full text-xs font-medium">
                          {item.category}
                        </span>
                      </td>
                      <td className="p-3 font-mono font-bold text-emerald-800">
                        ₦{item.farmgatePrice.toLocaleString()}
                      </td>
                      <td className="p-3 font-mono text-stone-700">
                        ₦{item.wholesalePrice.toLocaleString()}
                      </td>
                      <td className="p-3">
                        <span className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full ${
                          item.trend === 'up'
                            ? 'bg-emerald-100 text-emerald-800'
                            : item.trend === 'down'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-stone-100 text-stone-800'
                        }`}>
                          {item.trend === 'up' ? '▲ +' : item.trend === 'down' ? '▼ ' : '► '}
                          {item.weeklyChangePercent}%
                        </span>
                      </td>
                      <td className="p-3">
                        <button
                          onClick={() => onOpenInquiryModal('Commercial Buyer', item.commodity)}
                          className="text-xs font-bold text-emerald-700 hover:text-emerald-900 underline cursor-pointer"
                        >
                          Off-Take
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: Equipment Leasing */}
        {activeTab === 'equipment' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {equipmentCatalog.map((eq) => (
              <div key={eq.id} className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm hover:shadow-md transition-all space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200">
                      <Tractor className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-base text-stone-900">{eq.name}</h4>
                      <span className="text-xs font-mono text-stone-500">{eq.category}</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-100 text-emerald-900 rounded-full text-xs font-bold font-mono">
                    ₦{eq.dailyRate.toLocaleString()} / Day
                  </span>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-stone-100">
                  <span className="text-[11px] font-mono text-stone-400 font-bold uppercase">Specifications:</span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-stone-700">
                    {eq.specifications.map((spec, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                    ● {eq.availability}
                  </span>
                  <button
                    onClick={() => onOpenInquiryModal('Smallholder Farmer', `Lease: ${eq.name}`)}
                    className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-lg text-xs font-bold cursor-pointer"
                  >
                    Request Booking
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: Training & Extension Workshops */}
        {activeTab === 'training' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainingCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-4">
                <div className="flex items-start justify-between">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-900 font-bold text-xs rounded-full">
                    {course.category} Academy
                  </span>
                  <span className="text-xs text-stone-500 font-mono flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    {course.duration}
                  </span>
                </div>

                <h4 className="font-serif font-bold text-lg text-stone-900">{course.title}</h4>
                <p className="text-xs text-stone-600 leading-relaxed">{course.description}</p>

                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/80 text-xs text-stone-700 space-y-1 font-mono">
                  <div><strong>Instructor:</strong> {course.instructor}</div>
                  <div><strong>Next Date:</strong> {course.upcomingDate} ({course.format})</div>
                </div>

                <button
                  onClick={() => onOpenInquiryModal('Smallholder Farmer', `Enroll: ${course.title}`)}
                  className="w-full py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs rounded-xl cursor-pointer"
                >
                  Enroll in Workshop
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
