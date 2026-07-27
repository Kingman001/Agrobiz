import React from 'react';
import { ChevronRight, Home, Sprout } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  categoryTag?: string;
  breadcrumbs: { label: string; pageId?: string }[];
  onNavigatePage: (pageId: string) => void;
  bgGradient?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  categoryTag = "Glean Agro Nigeria",
  breadcrumbs,
  onNavigatePage,
  bgGradient = "from-stone-900 via-emerald-950 to-stone-900"
}) => {
  return (
    <div className={`relative bg-gradient-to-r ${bgGradient} text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-emerald-900/40 overflow-hidden shadow-xl`}>
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 space-y-4">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-emerald-300/80 font-medium overflow-x-auto py-1">
          <button
            onClick={() => onNavigatePage('home')}
            className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer shrink-0"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-stone-500 shrink-0" />
              {crumb.pageId ? (
                <button
                  onClick={() => onNavigatePage(crumb.pageId!)}
                  className="hover:text-white transition-colors cursor-pointer shrink-0"
                >
                  {crumb.label}
                </button>
              ) : (
                <span className="text-emerald-200 font-semibold shrink-0">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Title & Tag */}
        <div className="space-y-2 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 text-emerald-300 border border-emerald-700/60 text-xs font-bold uppercase tracking-wider">
            <Sprout className="w-3.5 h-3.5 text-emerald-400" />
            <span>{categoryTag}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-100 tracking-tight leading-tight">
            {title}
          </h1>

          <p className="text-stone-300 text-sm sm:text-base lg:text-lg font-normal leading-relaxed pt-1">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};
