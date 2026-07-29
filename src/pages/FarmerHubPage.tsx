import React, { useState } from 'react';
import {
  liveMarketPrices,
  equipmentCatalog,
  trainingCourses,
  smallholderServices
} from '../data/agribusinessData';
import { PageHeader } from '../components/PageHeader';
import { GrowthTracker } from '../components/GrowthTracker';
import {
  Tractor,
  TrendingUp,
  BookOpen,
  Warehouse,
  Phone,
  Search,
  CheckCircle2,
  Calendar,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  HandCoins,
  ShieldCheck,
  Calculator,
  Tag
} from 'lucide-react';

import { InquiryCallback } from '../types';

interface FarmerHubPageProps {
  onOpenInquiryModal: InquiryCallback;
  onNavigatePage: (pageId: string) => void;
}

export const FarmerHubPage: React.FC<FarmerHubPageProps> = ({
  onOpenInquiryModal,
  onNavigatePage
}) => {
  const [activeTab, setActiveTab] = useState<'prices' | 'equipment' | 'training' | 'services'>('prices');
  const [priceSearch, setPriceSearch] = useState('');
  
  // Commodity calculator
  const [selectedCommodityId, setSelectedCommodityId] = useState(liveMarketPrices[0].id);
  const [commodityQty, setCommodityQty] = useState(10);

  const selectedCommodity = liveMarketPrices.find(p => p.id === selectedCommodityId) || liveMarketPrices[0];
  const calculatedTotal = selectedCommodity.farmgatePrice * commodityQty;

  const filteredPrices = liveMarketPrices.filter(item =>
    item.commodity.toLowerCase().includes(priceSearch.toLowerCase()) ||
    item.category.toLowerCase().includes(priceSearch.toLowerCase()) ||
    item.location.toLowerCase().includes(priceSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      {/* Page Header */}
      <PageHeader
        title="Farmer Hub & Interactive Agribusiness Tools"
        subtitle="Access live farm-gate commodity market prices, equipment & tractor leasing catalog, input credit, and expert agronomy training workshops."
        categoryTag="Glean Agro Farmer Services"
        breadcrumbs={[{ label: "Farmer Hub & Tools" }]}
        onNavigatePage={onNavigatePage}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-10">
        
        {/* Navigation Tabs Bar */}
        <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {([
              { id: 'prices', label: 'Live Market Prices', icon: TrendingUp },
              { id: 'equipment', label: 'Equipment & Tractor Leasing', icon: Tractor },
              { id: 'training', label: 'Agronomy Training Academy', icon: BookOpen },
              { id: 'services', label: 'Outgrower Support Services', icon: HandCoins }
            ] as const).map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-emerald-800 text-white shadow-md'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200 hover:text-stone-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs text-stone-500 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Live Regional Market Feed • Updated Daily</span>
          </div>
        </div>

        {/* TAB 1: Live Market Commodity Prices */}
        {activeTab === 'prices' && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono font-bold uppercase text-emerald-800">
                    Transparent Regional Pricing
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-stone-900">
                    Daily Agricultural Commodity Price Index
                  </h3>
                </div>

                <div className="relative w-full sm:w-64">
                  <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    placeholder="Filter commodity or region..."
                    value={priceSearch}
                    onChange={(e) => setPriceSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
              </div>

              {/* Price Table */}
              <div className="overflow-x-auto rounded-2xl border border-stone-200">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-stone-100 text-stone-700 uppercase font-mono font-bold text-[11px] border-b border-stone-200">
                    <tr>
                      <th className="py-3.5 px-4">Commodity / Produce</th>
                      <th className="py-3.5 px-4">Category</th>
                      <th className="py-3.5 px-4">Farm-Gate Price (₦)</th>
                      <th className="py-3.5 px-4">Wholesale Price (₦)</th>
                      <th className="py-3.5 px-4">Weekly Trend</th>
                      <th className="py-3.5 px-4">Region / Depot</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 bg-white">
                    {filteredPrices.map((item) => (
                      <tr key={item.id} className="hover:bg-stone-50 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-stone-900 flex items-center gap-2">
                          <Tag className="w-4 h-4 text-emerald-700 shrink-0" />
                          <span>{item.commodity}</span>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-700 font-semibold text-xs">
                            {item.category}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-mono font-bold text-emerald-800">
                          ₦{item.farmgatePrice.toLocaleString()} <span className="text-[11px] text-stone-400 font-normal">/{item.unit}</span>
                        </td>
                        <td className="py-3.5 px-4 font-mono font-bold text-stone-800">
                          ₦{item.wholesalePrice.toLocaleString()} <span className="text-[11px] text-stone-400 font-normal">/{item.unit}</span>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className={`inline-flex items-center gap-1 font-bold text-xs ${
                            item.trend === 'up' ? 'text-emerald-700' : item.trend === 'down' ? 'text-rose-600' : 'text-stone-600'
                          }`}>
                            {item.trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                            {item.weeklyChangePercent > 0 ? `+${item.weeklyChangePercent}%` : `${item.weeklyChangePercent}%`}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-stone-600 text-xs">
                          {item.location}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Price Value Calculator Box */}
            <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-8 border border-stone-800 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase">
                  <Calculator className="w-4 h-4" />
                  <span>Interactive Commodity Value Calculator</span>
                </div>
                <h4 className="text-xl font-serif font-bold text-stone-100">
                  Calculate Estimated Farm-Gate Harvest Value
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-300 uppercase mb-1">Select Commodity</label>
                    <select
                      value={selectedCommodityId}
                      onChange={(e) => setSelectedCommodityId(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-stone-950 border border-stone-700 text-sm text-stone-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      {liveMarketPrices.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.commodity}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-300 uppercase mb-1">Batch Units / Quantity</label>
                    <input
                      type="number"
                      min="1"
                      value={commodityQty}
                      onChange={(e) => setCommodityQty(Math.max(1, Number(e.target.value)))}
                      className="w-full p-2.5 rounded-xl bg-stone-950 border border-stone-700 text-sm text-stone-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 bg-stone-950 p-6 rounded-2xl border border-stone-800 text-center md:text-left space-y-3">
                <span className="text-xs text-stone-400 font-mono">Estimated Harvest Gross Value</span>
                <div className="text-3xl font-serif font-bold text-amber-300">
                  ₦{calculatedTotal.toLocaleString()}
                </div>
                <p className="text-xs text-stone-400">
                  Unit Price: ₦{selectedCommodity.farmgatePrice.toLocaleString()} ({selectedCommodity.unit})
                </p>
                <button
                  onClick={() => onOpenInquiryModal('Smallholder Farmer', `Market Sale: ${selectedCommodity.commodity} (${commodityQty} Units)`)}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs transition-all shadow-md cursor-pointer"
                >
                  Sell Produce at Farm-Gate Price
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Equipment & Tractor Leasing Catalog */}
        {activeTab === 'equipment' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-emerald-800">
                  Mechanized Shared Fleet
                </span>
                <h3 className="text-2xl font-serif font-bold text-stone-900">
                  Shared Machinery & Equipment Rental Catalog
                </h3>
              </div>
              <p className="text-xs text-stone-500 max-w-md">
                Affordable daily leasing rates including fuel and trained operators. Protects smallholders from heavy capital expenditure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {equipmentCatalog.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all p-6 space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                        {item.category}
                      </span>
                      <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                        {item.availability}
                      </span>
                    </div>

                    <h4 className="text-xl font-serif font-bold text-stone-900">
                      {item.name}
                    </h4>

                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                      <span className="text-xs text-stone-500 font-medium">Daily Lease Rate:</span>
                      <div className="text-xl font-bold text-stone-900 font-mono">
                        ₦{item.dailyRate.toLocaleString()} <span className="text-xs text-stone-500 font-normal">/ day</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-mono font-bold uppercase text-stone-500">Specifications:</span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-stone-700">
                        {item.specifications.map((spec, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenInquiryModal('Smallholder Farmer', `Equipment Booking: ${item.name}`)}
                    className="w-full py-3 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
                  >
                    <Tractor className="w-4 h-4 text-emerald-300" />
                    <span>Book Equipment Leasing</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: Agronomy Training Academy */}
        {activeTab === 'training' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-emerald-800">
                  Capacity Building & Education
                </span>
                <h3 className="text-2xl font-serif font-bold text-stone-900">
                  Glean Agro Agronomy Training Academy
                </h3>
              </div>
              <p className="text-xs text-stone-500 max-w-md">
                Practical field workshops led by resident veterinarians, aquaculturists, and pasture agronomists.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trainingCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase">
                        {course.category}
                      </span>
                      <span className="text-xs text-stone-500 font-mono flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {course.duration}
                      </span>
                    </div>

                    <h4 className="text-xl font-serif font-bold text-stone-900">
                      {course.title}
                    </h4>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      {course.description}
                    </p>

                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/80 space-y-1 text-xs">
                      <div className="text-stone-500">
                        Instructor: <strong className="text-stone-800">{course.instructor}</strong>
                      </div>
                      <div className="text-stone-500">
                        Upcoming Date: <strong className="text-emerald-800 font-mono">{course.upcomingDate}</strong>
                      </div>
                      <div className="text-stone-500">
                        Format: <strong className="text-stone-800">{course.format}</strong> ({course.modulesCount} Modules)
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenInquiryModal('Smallholder Farmer', `Training Enrollment: ${course.title}`)}
                    className="w-full py-3 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4 text-emerald-300" />
                    <span>Enroll in Workshop</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: Outgrower Support Services */}
        {activeTab === 'services' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {smallholderServices.map((svc) => (
              <div key={svc.id} className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold uppercase">
                    {svc.category}
                  </div>
                  <h4 className="text-xl font-serif font-bold text-stone-900">{svc.title}</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">{svc.description}</p>
                  <div className="space-y-1.5 pt-2">
                    <span className="text-xs font-mono font-bold uppercase text-stone-500">Key Benefits:</span>
                    {svc.benefits.map((b, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenInquiryModal('Smallholder Farmer', svc.title)}
                  className="w-full py-3 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
                >
                  <HandCoins className="w-4 h-4 text-emerald-300" />
                  <span>{svc.actionLabel}</span>
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Recharts Visual Growth & Productivity Tracker */}
        <GrowthTracker onOpenInquiryModal={onOpenInquiryModal} />

        {/* Farmer Extension Hotline Banner */}
        <div className="bg-gradient-to-r from-emerald-900 via-stone-900 to-emerald-950 text-white rounded-3xl p-8 border border-emerald-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-2 text-center md:text-left">
            <span className="px-3 py-1 bg-emerald-800 text-emerald-200 rounded-full text-xs font-bold uppercase tracking-wider">
              Farmer Advisory Desk
            </span>
            <h3 className="text-2xl font-serif font-bold text-white">
              Need Direct Agronomy Support or Emergency Veterinary Advice?
            </h3>
            <p className="text-stone-300 text-sm max-w-xl">
              Our resident extension officers and veterinarians offer field visits, pond water testing, and disease management support across Kaduna State & North-Central Nigeria.
            </p>
          </div>

          <a
            href="tel:+2348134407110"
            className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-stone-950 rounded-xl font-bold text-sm shadow-md transition-all shrink-0 flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            <span>Call +234 813 440 7110</span>
          </a>
        </div>

      </div>
    </div>
  );
};
