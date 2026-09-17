import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Handshake } from 'lucide-react';
import afexLogo from '../assets/partners/afex.jpg';
import fcmbLogo from '../assets/partners/fcmb.png';
import fmanLogo from '../assets/partners/fman.jpg';
import zenithLogo from '../assets/partners/zenith-bank.png';
import olamLogo from '../assets/partners/olam.png';

const partners = [
  { name: 'AFEX', image: afexLogo },
  { name: 'FCMB', image: fcmbLogo },
  { name: 'FMAN', image: fmanLogo },
  { name: 'Zenith Bank', image: zenithLogo },
  { name: 'Olam', image: olamLogo },
];

export const PartnersCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<number | undefined>(undefined);

  const move = (direction: 1 | -1) => {
    setActiveIndex((current) => (current + direction + partners.length) % partners.length);
  };

  useEffect(() => {
    intervalRef.current = window.setInterval(() => move(1), 4500);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section aria-labelledby="partners-heading" className="agro-panel overflow-hidden bg-white p-6 md:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--agro-green-700)]">Our partners</p>
          <h2 id="partners-heading" className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[var(--agro-charcoal)] sm:text-4xl">Working together across agriculture</h2>
          <p className="mt-3 max-w-2xl text-base text-[var(--agro-muted)]">GleanAgro’s current website identifies these organisations as partners. We value collaboration that connects knowledge, finance, markets, and agricultural opportunity.</p>
        </div>
        <div className="flex gap-2" aria-label="Partner carousel controls">
          <button type="button" onClick={() => move(-1)} aria-label="Previous partner" className="rounded-full border border-stone-300 p-2 text-emerald-800 hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"><ChevronLeft className="h-5 w-5" /></button>
          <button type="button" onClick={() => move(1)} aria-label="Next partner" className="rounded-full border border-stone-300 p-2 text-emerald-800 hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"><ChevronRight className="h-5 w-5" /></button>
        </div>
      </div>
      <div className="mt-8 overflow-hidden" aria-live="polite">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {partners.map((partner, index) => {
            const offset = (index - activeIndex + partners.length) % partners.length;
            const isVisible = offset < 3 || partners.length <= 3;
            return (
              <div key={partner.name} className={`flex min-h-36 items-center justify-center rounded-2xl border border-stone-200 bg-stone-50 p-5 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'hidden lg:flex lg:opacity-40'}`}>
                <img src={partner.image} alt={`${partner.name} logo`} className="max-h-24 w-full object-contain mix-blend-multiply" />
              </div>
            );
          })}
        </div>
      </div>
      <p className="mt-5 flex items-center gap-2 text-xs text-stone-500"><Handshake className="h-4 w-4 text-emerald-700" /> Partner listings reflect the current published website and should be reconfirmed before launch.</p>
    </section>
  );
};
