import React from 'react';

interface GleanAgroLogoProps {
  className?: string;
  variant?: 'default' | 'light';
  showTagline?: boolean;
}

export const GleanAgroLogo: React.FC<GleanAgroLogoProps> = ({
  className = '',
  variant = 'default',
  showTagline = false
}) => {
  const isLight = variant === 'light';
  const gleanColor = isLight ? '#60a5fa' : '#0d54c1'; // Vibrant blue
  const agroColor = isLight ? '#4ade80' : '#009846';  // Rich agricultural green
  const accentColor = isLight ? '#fef08a' : '#f59e0b'; // Sun golden yellow

  return (
    <div className={`inline-flex flex-col items-start ${className}`}>
      <svg
        viewBox="0 0 520 160"
        className="h-10 sm:h-12 w-auto max-w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="blueTextGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isLight ? '#93c5fd' : '#0042a5'} />
            <stop offset="100%" stopColor={isLight ? '#60a5fa' : '#0f52ba'} />
          </linearGradient>

          <linearGradient id="greenTextGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isLight ? '#86efac' : '#00a34a'} />
            <stop offset="100%" stopColor={isLight ? '#4ade80' : '#007a36'} />
          </linearGradient>

          <linearGradient id="sunGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>

        {/* --- LEFT WHISP WHEAT --- */}
        <path
          d="M 10 115 C 30 112, 50 108, 80 110 C 60 113, 30 118, 10 115 Z"
          fill={agroColor}
          opacity="0.6"
        />
        <path
          d="M 25 110 Q 30 102 38 106 Q 30 110 25 110 Z"
          fill={agroColor}
          opacity="0.8"
        />
        <path
          d="M 40 108 Q 46 99 55 104 Q 45 109 40 108 Z"
          fill={agroColor}
          opacity="0.8"
        />
        <path
          d="M 58 107 Q 65 97 74 103 Q 64 108 58 107 Z"
          fill={agroColor}
          opacity="0.8"
        />

        {/* --- TOP ARCHING WHEAT & FIELD GRAPHIC (Above 'Glean') --- */}
        <g transform="translate(130, 8)">
          {/* Green arch base */}
          <path
            d="M 10 50 C 30 20, 80 5, 120 40 C 90 20, 40 25, 10 50 Z"
            fill={agroColor}
            opacity="0.85"
          />
          {/* Inner field stripes */}
          <path
            d="M 30 46 C 45 30, 75 22, 100 45 C 80 30, 50 33, 30 46 Z"
            fill={isLight ? '#bbf7d0' : '#86efac'}
            opacity="0.7"
          />
          {/* 4 Sprouting wheat heads on top arch */}
          {/* Wheat 1 */}
          <path
            d="M 30 28 C 28 20, 32 12, 36 18 C 38 22, 34 28, 30 28 Z"
            fill={agroColor}
          />
          <path
            d="M 36 18 L 38 10 M 34 16 L 28 12"
            stroke={agroColor}
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Wheat 2 */}
          <path
            d="M 52 18 C 50 10, 55 2, 60 8 C 62 12, 57 18, 52 18 Z"
            fill={agroColor}
          />
          <path
            d="M 60 8 L 62 0 M 58 6 L 52 2"
            stroke={agroColor}
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Wheat 3 */}
          <path
            d="M 74 18 C 72 10, 77 2, 82 8 C 84 12, 79 18, 74 18 Z"
            fill={agroColor}
          />
          <path
            d="M 82 8 L 84 0 M 80 6 L 74 2"
            stroke={agroColor}
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Wheat 4 */}
          <path
            d="M 96 24 C 94 16, 99 8, 104 14 C 106 18, 101 24, 96 24 Z"
            fill={agroColor}
          />
          <path
            d="M 104 14 L 107 6 M 102 12 L 96 8"
            stroke={agroColor}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>

        {/* --- MAIN TEXT: 'Glean' (BLUE) --- */}
        <text
          x="85"
          y="125"
          fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
          fontWeight="900"
          fontSize="82"
          fill="url(#blueTextGrad)"
          letterSpacing="-1.5"
        >
          Glean
        </text>

        {/* --- MAIN TEXT: 'Agro' (GREEN) --- */}
        <g transform="translate(248, 0)">
          {/* Green Leaf sprouting out from the letter 'A' */}
          <path
            d="M 32 68 C 22 45, 30 25, 48 18 C 48 35, 42 55, 32 68 Z"
            fill="url(#greenTextGrad)"
          />
          <path
            d="M 32 68 C 38 52, 45 35, 48 18"
            stroke={isLight ? '#22c55e' : '#15803d'}
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Text 'Agro' */}
          <text
            x="2"
            y="125"
            fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
            fontWeight="900"
            fontSize="82"
            fill="url(#greenTextGrad)"
            letterSpacing="-1.5"
          >
            Agro
          </text>
        </g>

        {/* --- CIRCULAR EMBLEM (To the right of 'Agro') --- */}
        <g transform="translate(370, 72)">
          {/* Circle Outline */}
          <circle
            cx="28"
            cy="28"
            r="26"
            stroke={agroColor}
            strokeWidth="4"
            fill={isLight ? '#052e16' : '#ffffff'}
          />

          {/* Golden Sun */}
          <circle cx="28" cy="18" r="6" fill="url(#sunGrad)" />

          {/* Wheat Stalks inside emblem */}
          <path
            d="M 18 26 C 20 20, 22 15, 23 20 M 18 22 C 16 18, 14 16, 18 22"
            stroke={agroColor}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M 38 26 C 36 20, 34 15, 33 20 M 38 22 C 40 18, 42 16, 38 22"
            stroke={agroColor}
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Green Rolling Hills in Emblem */}
          <path
            d="M 6 36 C 14 28, 24 30, 32 38 C 38 32, 46 32, 50 38"
            stroke={agroColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 4 42 C 16 36, 30 38, 52 42"
            stroke={agroColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* --- RIGHT WHISP WHEAT --- */}
        <g transform="translate(435, 0)">
          <path
            d="M 0 120 C 30 118, 60 115, 80 108 C 60 112, 30 115, 0 120 Z"
            fill={agroColor}
            opacity="0.6"
          />
          <path
            d="M 40 114 Q 48 107 55 112 Q 48 116 40 114 Z"
            fill={agroColor}
            opacity="0.8"
          />
          <path
            d="M 60 110 Q 68 102 75 107 Q 68 112 60 110 Z"
            fill={agroColor}
            opacity="0.8"
          />
        </g>
      </svg>

      {showTagline && (
        <span className={`text-[10px] sm:text-[11px] font-mono tracking-widest uppercase font-bold pl-1 ${
          isLight ? 'text-emerald-300' : 'text-emerald-800'
        }`}>
          Nigeria Limited • Farm to Table
        </span>
      )}
    </div>
  );
};
