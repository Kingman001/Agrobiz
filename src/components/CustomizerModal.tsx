import React, { useState } from 'react';
import { CompanySettings } from '../types';
import { X, Settings2, CheckCircle2, RotateCcw } from 'lucide-react';
import { defaultCompanySettings } from '../data/agribusinessData';

interface CustomizerModalProps {
  currentSettings: CompanySettings;
  onSave: (newSettings: CompanySettings) => void;
  onClose: () => void;
}

export const CustomizerModal: React.FC<CustomizerModalProps> = ({
  currentSettings,
  onSave,
  onClose
}) => {
  const [tempSettings, setTempSettings] = useState<CompanySettings>({ ...currentSettings });

  const handleReset = () => {
    setTempSettings({ ...defaultCompanySettings });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(tempSettings);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full border border-stone-200 shadow-2xl overflow-hidden relative">
        
        {/* Header */}
        <div className="p-6 bg-stone-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Settings2 className="w-5 h-5 text-emerald-400" />
            <h3 className="font-serif font-bold text-lg text-white">
              Customize Company Identity
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-stone-400 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleFormSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Company / Startup Name
            </label>
            <input
              type="text"
              required
              value={tempSettings.name}
              onChange={(e) => setTempSettings({ ...tempSettings, name: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm font-bold text-stone-900 focus:outline-none focus:border-emerald-600"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Company Tagline / Slogan
            </label>
            <input
              type="text"
              required
              value={tempSettings.tagline}
              onChange={(e) => setTempSettings({ ...tempSettings, tagline: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:border-emerald-600"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Primary Location / Region
            </label>
            <input
              type="text"
              required
              value={tempSettings.location}
              onChange={(e) => setTempSettings({ ...tempSettings, location: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:border-emerald-600"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Contact Email
              </label>
              <input
                type="email"
                required
                value={tempSettings.email}
                onChange={(e) => setTempSettings({ ...tempSettings, email: e.target.value })}
                className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-none focus:border-emerald-600"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                required
                value={tempSettings.phone}
                onChange={(e) => setTempSettings({ ...tempSettings, phone: e.target.value })}
                className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-none focus:border-emerald-600"
              />
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-stone-200">
            <button
              type="button"
              onClick={handleReset}
              className="text-xs text-stone-500 hover:text-stone-800 flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-bold text-stone-600 hover:text-stone-900 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl shadow-md cursor-pointer flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>Apply Branding</span>
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
};
