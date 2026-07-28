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
    <div className={`flex items-center justify-center p-4 bg-white select-none ${className}`}>
      <svg
        viewBox="0 0 500 150"
        className="w-full max-w-[500px] h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Decorative background wheat wisps */}
        <g stroke="#A3D977" strokeWidth="1" fill="none" opacity="0.6">
          {/* Left faint stalk */}
          <path d="M 10 100 Q 40 110 80 105" />
          <path d="M 25 102 C 23 95, 30 92, 33 97 C 36 92, 43 95, 41 102" fill="#A3D977" />
          <path d="M 45 104 C 43 97, 50 94, 53 99 C 56 94, 63 97, 61 104" fill="#A3D977" />

          {/* Right faint stalk */}
          <path d="M 420 105 Q 460 110 490 100" />
          <path d="M 435 104 C 433 97, 440 94, 443 99 C 446 94, 453 97, 451 104" fill="#A3D977" />
          <path d="M 455 104 C 453 97, 460 94, 463 99 C 466 94, 473 97, 471 104" fill="#A3D977" />
        </g>

        {/* Top Left Icon (Field and Sprout Circle) */}
        <g transform="translate(110, 5) scale(0.9)">
          {/* Curved Field Lines */}
          <path d="M 30 50 Q 55 20 80 50" fill="#008736" />
          <path d="M 32 55 Q 55 28 78 55" fill="#FFFFFF" />
          <path d="M 35 60 Q 55 35 75 60" fill="#008736" />
          <path d="M 38 65 Q 55 42 72 65" fill="#FFFFFF" />
          <path d="M 42 70 Q 55 50 68 70" fill="#008736" />

          {/* Growing Sprouts */}
          <path d="M 40 22 Q 45 12 43 5 Q 40 12 36 20 Z" fill="#008736" />
          <path d="M 43 22 Q 48 14 51 8 Q 47 15 43 22 Z" fill="#008736" />
          <path d="M 55 18 Q 60 6 58 0 Q 55 8 51 16 Z" fill="#008736" />
          <path d="M 58 18 Q 63 9 66 3 Q 62 10 58 18 Z" fill="#008736" />
          <path d="M 70 22 Q 75 12 73 5 Q 70 12 66 20 Z" fill="#008736" />
          <path d="M 73 22 Q 78 14 81 8 Q 77 15 73 22 Z" fill="#008736" />

          {/* Enclosing Circular Wheat Ears */}
          <path d="M 28 45 C 22 25, 40 5, 55 3" fill="none" stroke="#A3D977" strokeWidth="1.5" strokeDasharray="3,3" />
          <path d="M 82 45 C 88 25, 70 5, 55 3" fill="none" stroke="#A3D977" strokeWidth="1.5" strokeDasharray="3,3" />
        </g>

        {/* Text Group */}
        <g id="logo-text">
          {/* "Glean" in Deep Blue */}
          <text
            x="85"
            y="115"
            fill="#00529B"
            className="font-sans font-bold tracking-tight"
            style={{ fontSize: '76px', letterSpacing: '-2px' }}
          >
            Glean
          </text>

          {/* Integrated Leaf Graphic on the 'A' */}
          <g transform="translate(233, 40)">
            {/* Elegant swooping leaf dynamic lines */}
            <path d="M 12 60 Q 20 20 22 0 C 12 15, 2 35, 12 60" fill="#008736" />
            <path d="M 12 60 Q -2 40 5 15 C 10 25, 12 45, 12 60" fill="#A3D977" opacity="0.8" />
          </g>

          {/* "Agro" in Forest Green */}
          <text
            x="248"
            y="115"
            fill="#008736"
            className="font-sans font-bold tracking-tight"
            style={{ fontSize: '76px', letterSpacing: '-2px' }}
          >
            Agro
          </text>
        </g>

        {/* Right Circle Landscape Emblem (Inside the 'o' area) */}
        <g transform="translate(385, 92)" id="emblem-o">
          {/* Outer Border */}
          <circle cx="25" cy="25" r="23" fill="none" stroke="#008736" strokeWidth="4" />

          {/* Sun */}
          <circle cx="22" cy="14" r="4" fill="#FF9E1B" />

          {/* Micro Landscape / Hills inside 'o' */}
          <path d="M 6 35 Q 15 28 25 35 Q 35 28 44 35" fill="none" stroke="#008736" strokeWidth="2" />
          <path d="M 6 41 Q 15 34 25 41 Q 35 34 44 41" fill="none" stroke="#008736" strokeWidth="2" />

          {/* Micro Trees */}
          <path d="M 32 25 L 35 20 L 38 25 Z" fill="#008736" />
          <path d="M 35 25 L 35 28" stroke="#008736" strokeWidth="1" />

          <path d="M 37 27 L 39 23 L 41 27 Z" fill="#008736" />
          <path d="M 39 27 L 39 29" stroke="#008736" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
};
