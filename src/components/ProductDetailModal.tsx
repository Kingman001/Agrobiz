import React from 'react';
import { ProducePillar } from '../types';
import { X, CheckCircle2, ShieldCheck, Package, Clock, Handshake } from 'lucide-react';

interface ProductDetailModalProps {
  pillar: ProducePillar | null;
  onClose: () => void;
  onOpenInquiryModal: (role?: string, produceName?: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  pillar,
  onClose,
  onOpenInquiryModal
}) => {
  if (!pillar) return null;

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full border border-stone-200 shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col">
        
        {/* Header Image */}
        <div className="relative h-56 bg-stone-900 shrink-0">
          <img
            src={pillar.image}
            alt={pillar.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-stone-900/80 hover:bg-stone-900 text-white rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="px-3 py-1 bg-emerald-700 text-emerald-100 rounded-full text-xs font-bold uppercase tracking-wider">
              {pillar.category} Specification Sheet
            </span>
            <h3 className="text-2xl font-serif font-bold text-white mt-1">{pillar.title}</h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 overflow-y-auto flex-1">
          <p className="text-stone-600 text-sm leading-relaxed">
            {pillar.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
              <span className="text-xs font-mono text-stone-500 font-bold uppercase block">
                Current Cycle Capacity
              </span>
              <p className="text-sm font-serif font-bold text-stone-900 mt-1">{pillar.capacity}</p>
            </div>

            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
              <span className="text-xs font-mono text-stone-500 font-bold uppercase block">
                Minimum Off-Take Order
              </span>
              <p className="text-sm font-serif font-bold text-emerald-800 mt-1">{pillar.minOrderQuantity}</p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold uppercase text-stone-500">
              Key Features & Farm Specs
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
              {pillar.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2 bg-stone-50 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold uppercase text-stone-500">
              Quality Assurance Standards
            </h4>
            <div className="flex flex-wrap gap-2">
              {pillar.qualityStandards.map((std, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-900 border border-emerald-200 rounded-full text-xs font-bold"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  {std}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-stone-600 hover:text-stone-900 cursor-pointer"
          >
            Close Sheet
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenInquiryModal('Commercial Buyer', pillar.title);
            }}
            className="px-6 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold shadow-md cursor-pointer flex items-center gap-2"
          >
            <Handshake className="w-4 h-4 text-emerald-300" />
            <span>Request Commercial Quote</span>
          </button>
        </div>

      </div>
    </div>
  );
};
