import React, { useState } from 'react';
import { Sparkles, ArrowRight, LoaderCircle, CheckCircle2 } from 'lucide-react';

interface OpportunityFormState {
  farmSize: string;
  enterprise: string;
  goal: string;
  location: string;
  budget: string;
}

interface OpportunityInsight {
  summary: string;
  recommendations: string[];
  nextActions: string[];
  geminiConfigured: boolean;
  generatedAt?: string;
}

const defaultForm: OpportunityFormState = {
  farmSize: '5 hectares',
  enterprise: 'maize',
  goal: 'increase income and reduce harvest losses',
  location: 'Kaduna State',
  budget: '1500000'
};

export const AIOpportunityAdvisor: React.FC = () => {
  const [form, setForm] = useState<OpportunityFormState>(defaultForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<OpportunityInsight | null>(null);

  const handleChange = (field: keyof OpportunityFormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/ai/opportunity', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = (await response.json()) as OpportunityInsight;
      setResult(data);
    } catch (submissionError) {
      const message = submissionError instanceof Error ? submissionError.message : 'Unable to generate the recommendation right now.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-stone-900 text-white rounded-3xl border border-emerald-800 shadow-2xl overflow-hidden">
      <div className="grid grid-cols-1 xl:grid-cols-[1.15fr_1fr]">
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.18em] text-emerald-300">
            <Sparkles className="w-4 h-4" />
            <span>AI Opportunity Planner</span>
          </div>

          <h3 className="mt-4 text-2xl sm:text-3xl font-serif font-bold text-white">
            Get a practical growth strategy for your farm or business.
          </h3>

          <p className="mt-3 max-w-xl text-sm sm:text-base text-emerald-50/80 leading-relaxed">
            Enter your farm profile and goals to receive a quick recommendation based on Glean Agro’s agribusiness playbook for Nigeria.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="mb-1 block text-[11px] font-bold uppercase tracking-wide text-emerald-200">Farm size</span>
                <input
                  value={form.farmSize}
                  onChange={(event) => handleChange('farmSize', event.target.value)}
                  className="w-full rounded-xl border border-emerald-700 bg-emerald-950/50 p-3 text-sm text-white placeholder:text-emerald-200/60 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  placeholder="5 hectares"
                />
              </label>

              <label className="block">
                <span className="mb-1 block text-[11px] font-bold uppercase tracking-wide text-emerald-200">Enterprise</span>
                <select
                  value={form.enterprise}
                  onChange={(event) => handleChange('enterprise', event.target.value)}
                  className="w-full rounded-xl border border-emerald-700 bg-emerald-950/50 p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                  <option value="maize">Maize grain</option>
                  <option value="fishery">Aquaculture / fishery</option>
                  <option value="poultry">Poultry / eggs</option>
                  <option value="cattle">Cattle / dairy</option>
                  <option value="crops">Crops / mixed farming</option>
                </select>
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="mb-1 block text-[11px] font-bold uppercase tracking-wide text-emerald-200">Location</span>
                <input
                  value={form.location}
                  onChange={(event) => handleChange('location', event.target.value)}
                  className="w-full rounded-xl border border-emerald-700 bg-emerald-950/50 p-3 text-sm text-white placeholder:text-emerald-200/60 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  placeholder="Kaduna State"
                />
              </label>

              <label className="block">
                <span className="mb-1 block text-[11px] font-bold uppercase tracking-wide text-emerald-200">Budget (NGN)</span>
                <input
                  value={form.budget}
                  onChange={(event) => handleChange('budget', event.target.value)}
                  className="w-full rounded-xl border border-emerald-700 bg-emerald-950/50 p-3 text-sm text-white placeholder:text-emerald-200/60 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  placeholder="1500000"
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-1 block text-[11px] font-bold uppercase tracking-wide text-emerald-200">Primary goal</span>
              <input
                value={form.goal}
                onChange={(event) => handleChange('goal', event.target.value)}
                className="w-full rounded-xl border border-emerald-700 bg-emerald-950/50 p-3 text-sm text-white placeholder:text-emerald-200/60 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                placeholder="increase income and reduce harvest losses"
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 text-sm font-bold text-emerald-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <>
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                  <span>Generating strategy…</span>
                </>
              ) : (
                <>
                  <span>Generate recommendation</span>
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          {error && (
            <div className="mt-4 rounded-xl border border-rose-400/40 bg-rose-950/40 p-3 text-sm text-rose-100">
              {error}
            </div>
          )}
        </div>

        <div className="border-t border-emerald-800 bg-emerald-950/40 p-6 sm:p-8 xl:border-l xl:border-t-0 xl:p-10">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.18em] text-emerald-300">
            <CheckCircle2 className="h-4 w-4" />
            <span>Recommendation</span>
          </div>

          {result ? (
            <div aria-live="polite" className="mt-4 space-y-5">
              <p className="text-sm leading-relaxed text-emerald-50/90">{result.summary}</p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">Priority actions</h4>
                <ul className="mt-3 space-y-2 text-sm text-emerald-50/85">
                  {result.recommendations.map((item, index) => (
                    <li key={index} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">Next steps</h4>
                <ul className="mt-3 space-y-2 text-sm text-emerald-50/80">
                  {result.nextActions.map((item, index) => (
                    <li key={index} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-emerald-700/70 bg-emerald-900/50 px-3 py-2 text-[11px] font-medium uppercase tracking-wide text-emerald-200">
                {result.geminiConfigured ? 'AI strategy generated via Gemini' : 'Demo strategy generated locally'}
              </div>
            </div>
          ) : (
            <div className="mt-4 rounded-2xl border border-dashed border-emerald-700 bg-emerald-900/20 p-5 text-sm text-emerald-50/80">
              Your strategy summary appears here after you submit the form.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
