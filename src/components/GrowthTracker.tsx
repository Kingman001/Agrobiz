import React, { useState } from 'react';
import {
  yieldGrowthData,
  GrowthMetricPoint
} from '../data/agribusinessData';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import {
  TrendingUp,
  Sprout,
  Users,
  ShieldCheck,
  BarChart3,
  Award,
  ArrowUpRight,
  Sparkles,
  HelpCircle
} from 'lucide-react';

import { InquiryCallback } from '../types';

interface GrowthTrackerProps {
  onOpenInquiryModal?: InquiryCallback;
  title?: string;
  subtitle?: string;
}

export const GrowthTracker: React.FC<GrowthTrackerProps> = ({
  onOpenInquiryModal,
  title = "Glean Agro Productivity & Yield Growth Tracker",
  subtitle = "Tracking real agricultural yield gains, smallholder income surge, and post-harvest loss elimination across Nigeria from 2022 to 2026."
}) => {
  const [activeMetric, setActiveMetric] = useState<'yield' | 'income' | 'loss' | 'network'>('yield');
  const [chartType, setChartType] = useState<'area' | 'bar' | 'line'>('area');

  // Formatters
  const formatYAxis = (val: number) => {
    if (activeMetric === 'income') {
      return `₦${(val / 1000).toFixed(0)}k`;
    }
    if (activeMetric === 'loss') {
      return `${val}%`;
    }
    if (activeMetric === 'yield') {
      return `${val} T/Ha`;
    }
    if (activeMetric === 'network') {
      return `${(val / 1000).toFixed(1)}k`;
    }
    return `${val}`;
  };

  const getMetricTitle = () => {
    switch (activeMetric) {
      case 'yield':
        return 'Maize & Grain Yield Improvement (Tons / Hectare)';
      case 'income':
        return 'Average Smallholder Farmer Annual Net Income (₦)';
      case 'loss':
        return 'Post-Harvest Crop Loss & Decay Percentage (%)';
      case 'network':
        return 'Active Outgrower Farmer Network Size';
    }
  };

  const getMetricKey = () => {
    switch (activeMetric) {
      case 'yield':
        return 'maizeYieldTonsPerHa';
      case 'income':
        return 'smallholderIncomeNaira';
      case 'loss':
        return 'postHarvestLossPercent';
      case 'network':
        return 'outgrowerNetworkCount';
    }
  };

  const getMetricColor = () => {
    switch (activeMetric) {
      case 'yield':
        return '#047857'; // emerald-700
      case 'income':
        return '#d97706'; // amber-600
      case 'loss':
        return '#e11d48'; // rose-600
      case 'network':
        return '#0284c7'; // sky-600
    }
  };

  const getMetricGradientId = () => {
    return `colorGrad_${activeMetric}`;
  };

  return (
    <div className="bg-white rounded-3xl border border-stone-200 shadow-lg p-6 sm:p-8 space-y-8">
      
      {/* Title & Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-900 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-700" />
            <span>Verified Impact & Growth Analytics</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 max-w-2xl mt-1 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Chart View Switcher */}
        <div className="flex items-center gap-1.5 bg-stone-100 p-1.5 rounded-xl self-start md:self-auto border border-stone-200">
          {(['area', 'bar', 'line'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setChartType(type)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition-all cursor-pointer ${
                chartType === type
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards Selector Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* KPI 1: Yield */}
        <button
          onClick={() => setActiveMetric('yield')}
          className={`p-5 rounded-2xl border text-left transition-all cursor-pointer space-y-2 ${
            activeMetric === 'yield'
              ? 'bg-emerald-800 text-white border-emerald-800 shadow-md ring-2 ring-emerald-500/30'
              : 'bg-stone-50 hover:bg-stone-100 text-stone-900 border-stone-200'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className={`text-xs font-mono font-bold uppercase ${activeMetric === 'yield' ? 'text-emerald-200' : 'text-emerald-800'}`}>
              Crop Yield Gain
            </span>
            <Sprout className={`w-4 h-4 ${activeMetric === 'yield' ? 'text-emerald-300' : 'text-emerald-700'}`} />
          </div>
          <div className="text-2xl font-serif font-bold">
            7.5 <span className="text-xs font-normal">Tons / Ha</span>
          </div>
          <div className={`text-[11px] font-medium flex items-center gap-1 ${activeMetric === 'yield' ? 'text-emerald-200' : 'text-emerald-700'}`}>
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>+316% yield improvement</span>
          </div>
        </button>

        {/* KPI 2: Farmer Income */}
        <button
          onClick={() => setActiveMetric('income')}
          className={`p-5 rounded-2xl border text-left transition-all cursor-pointer space-y-2 ${
            activeMetric === 'income'
              ? 'bg-amber-800 text-white border-amber-800 shadow-md ring-2 ring-amber-500/30'
              : 'bg-stone-50 hover:bg-stone-100 text-stone-900 border-stone-200'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className={`text-xs font-mono font-bold uppercase ${activeMetric === 'income' ? 'text-amber-200' : 'text-amber-800'}`}>
              Farmer Annual Net Income
            </span>
            <Sparkles className={`w-4 h-4 ${activeMetric === 'income' ? 'text-amber-300' : 'text-amber-700'}`} />
          </div>
          <div className="text-2xl font-serif font-bold">
            ₦3.1 Million <span className="text-xs font-normal">/ year</span>
          </div>
          <div className={`text-[11px] font-medium flex items-center gap-1 ${activeMetric === 'income' ? 'text-amber-200' : 'text-amber-700'}`}>
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>+588% smallholder revenue</span>
          </div>
        </button>

        {/* KPI 3: Post-Harvest Loss */}
        <button
          onClick={() => setActiveMetric('loss')}
          className={`p-5 rounded-2xl border text-left transition-all cursor-pointer space-y-2 ${
            activeMetric === 'loss'
              ? 'bg-rose-900 text-white border-rose-900 shadow-md ring-2 ring-rose-500/30'
              : 'bg-stone-50 hover:bg-stone-100 text-stone-900 border-stone-200'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className={`text-xs font-mono font-bold uppercase ${activeMetric === 'loss' ? 'text-rose-200' : 'text-rose-800'}`}>
              Post-Harvest Loss
            </span>
            <ShieldCheck className={`w-4 h-4 ${activeMetric === 'loss' ? 'text-rose-300' : 'text-rose-700'}`} />
          </div>
          <div className="text-2xl font-serif font-bold">
            4% <span className="text-xs font-normal">Loss (Down from 38%)</span>
          </div>
          <div className={`text-[11px] font-medium flex items-center gap-1 ${activeMetric === 'loss' ? 'text-rose-200' : 'text-rose-700'}`}>
            <span>Solar cold pods + direct off-take</span>
          </div>
        </button>

        {/* KPI 4: Outgrower Network */}
        <button
          onClick={() => setActiveMetric('network')}
          className={`p-5 rounded-2xl border text-left transition-all cursor-pointer space-y-2 ${
            activeMetric === 'network'
              ? 'bg-sky-900 text-white border-sky-900 shadow-md ring-2 ring-sky-500/30'
              : 'bg-stone-50 hover:bg-stone-100 text-stone-900 border-stone-200'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className={`text-xs font-mono font-bold uppercase ${activeMetric === 'network' ? 'text-sky-200' : 'text-sky-800'}`}>
              Smallholder Network
            </span>
            <Users className={`w-4 h-4 ${activeMetric === 'network' ? 'text-sky-300' : 'text-sky-700'}`} />
          </div>
          <div className="text-2xl font-serif font-bold">
            15,000 <span className="text-xs font-normal">Farmers</span>
          </div>
          <div className={`text-[11px] font-medium flex items-center gap-1 ${activeMetric === 'network' ? 'text-sky-200' : 'text-sky-700'}`}>
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>Kaduna State & Regional Hubs</span>
          </div>
        </button>

      </div>

      {/* Recharts Chart Canvas Container */}
      <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 space-y-4">
        
        <div className="flex items-center justify-between">
          <span className="text-sm font-serif font-bold text-stone-800">
            {getMetricTitle()}
          </span>
          <span className="text-xs font-mono text-stone-500">
            Historical Data (2022–2026)
          </span>
        </div>

        <div className="h-72 sm:h-80 w-full pt-2">
          <ResponsiveContainer width="100%" height="100%">
            {chartType === 'area' ? (
              <AreaChart data={yieldGrowthData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id={getMetricGradientId()} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={getMetricColor()} stopOpacity={0.4} />
                    <stop offset="95%" stopColor={getMetricColor()} stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
                <XAxis dataKey="year" tick={{ fontSize: 11, fill: '#57534e' }} />
                <YAxis tickFormatter={formatYAxis} tick={{ fontSize: 11, fill: '#57534e' }} />
                <Tooltip
                  formatter={(value: any) => [
                    activeMetric === 'income' ? `₦${Number(value).toLocaleString()}` :
                    activeMetric === 'loss' ? `${value}%` :
                    activeMetric === 'yield' ? `${value} Tons / Hectare` :
                    `${Number(value).toLocaleString()} Farmers`,
                    'Metric Value'
                  ]}
                  contentStyle={{
                    backgroundColor: '#1c1917',
                    borderColor: '#44403c',
                    borderRadius: '12px',
                    color: '#f5f5f4',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}
                />
                <Area
                  type="monotone"
                  dataKey={getMetricKey()}
                  stroke={getMetricColor()}
                  strokeWidth={3}
                  fillOpacity={1}
                  fill={`url(#${getMetricGradientId()})`}
                />
              </AreaChart>
            ) : chartType === 'bar' ? (
              <BarChart data={yieldGrowthData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
                <XAxis dataKey="year" tick={{ fontSize: 11, fill: '#57534e' }} />
                <YAxis tickFormatter={formatYAxis} tick={{ fontSize: 11, fill: '#57534e' }} />
                <Tooltip
                  formatter={(value: any) => [
                    activeMetric === 'income' ? `₦${Number(value).toLocaleString()}` :
                    activeMetric === 'loss' ? `${value}%` :
                    activeMetric === 'yield' ? `${value} Tons / Hectare` :
                    `${Number(value).toLocaleString()} Farmers`,
                    'Metric Value'
                  ]}
                  contentStyle={{
                    backgroundColor: '#1c1917',
                    borderColor: '#44403c',
                    borderRadius: '12px',
                    color: '#f5f5f4',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}
                />
                <Bar
                  dataKey={getMetricKey()}
                  fill={getMetricColor()}
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            ) : (
              <LineChart data={yieldGrowthData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
                <XAxis dataKey="year" tick={{ fontSize: 11, fill: '#57534e' }} />
                <YAxis tickFormatter={formatYAxis} tick={{ fontSize: 11, fill: '#57534e' }} />
                <Tooltip
                  formatter={(value: any) => [
                    activeMetric === 'income' ? `₦${Number(value).toLocaleString()}` :
                    activeMetric === 'loss' ? `${value}%` :
                    activeMetric === 'yield' ? `${value} Tons / Hectare` :
                    `${Number(value).toLocaleString()} Farmers`,
                    'Metric Value'
                  ]}
                  contentStyle={{
                    backgroundColor: '#1c1917',
                    borderColor: '#44403c',
                    borderRadius: '12px',
                    color: '#f5f5f4',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey={getMetricKey()}
                  stroke={getMetricColor()}
                  strokeWidth={3}
                  dot={{ r: 5, fill: getMetricColor() }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            )}
          </ResponsiveContainer>
        </div>

        {/* Narrative Context Footer */}
        <div className="p-4 bg-white rounded-xl border border-stone-200 text-xs text-stone-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>
              <strong>Key Growth Driver:</strong> Certified hybrid seed inputs, Mechanized tractor leasing, solar cold pods, and guaranteed floor buybacks at farm-gate.
            </span>
          </div>

          {onOpenInquiryModal && (
            <button
              onClick={() => onOpenInquiryModal('Impact Investor')}
              className="text-emerald-800 font-bold hover:underline shrink-0 text-xs cursor-pointer flex items-center gap-1"
            >
              <span>Download Impact Audit Report</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>

    </div>
  );
};
