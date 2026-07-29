import React from 'react';
import logoImage from '../assets/images/logo.png';

interface GleanAgroLogoProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  alt?: string;
  variant?: 'light' | 'dark';
  showTagline?: boolean;
}

export const GleanAgroLogo: React.FC<GleanAgroLogoProps> = ({
  className = '',
  width = '100%',
  height = 'auto',
  alt = 'Glean Agro logo',
  variant = 'dark',
  showTagline = false
}) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-stone-900';
  const subTextColor = variant === 'light' ? 'text-stone-300' : 'text-stone-600';

  return (
    <div
      className={`inline-flex items-center gap-3 select-none ${className}`}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height
      }}
    >
      <img
        src={logoImage}
        alt={alt}
        className="h-12 w-auto object-contain shrink-0"
      />

      {showTagline ? (
        <div className="flex flex-col leading-none">
          <span className={`text-base font-semibold tracking-tight ${textColor}`}>
            Glean Agro
          </span>
          <span className={`text-[11px] font-medium uppercase tracking-[0.25em] ${subTextColor}`}>
            Nigeria Limited
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default GleanAgroLogo;