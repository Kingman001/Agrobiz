import React, { use } from 'react';

const GleanAgroLogo = ({ width = "100%", className = "" }) => {
  return (
    <svg 
      xmlns="http://w3.org" 
      viewBox="0 0 900 300" 
      width={width} 
      className={className}
      style={{ display: 'block', backgroundColor: 'transparent' }}
    >
      <defs>
        {/* Wheat seed template for reuse */}
        <g id="seed">
          <path d="M0,0 Q-4,-8 0,-15 Q4,-8 0,0" fill="#a4c639" opacity="0.85" />
          <path d="M0,0 Q-3,-10 0,-18 Q3,-10 0,0" fill="#8cb827" />
        </g>
        {/* Sprout template */}
        <g id="sprout">
          <path d="M0,0 Q-3,-8 -1,-14 Q3,-8 0,0" fill="#1b8a3e" />
          <path d="M2,-1 Q6,-7 4,-12 Q0,-6 2,-1" fill="#2bb656" />
        </g>
      </defs>

      {/* Decorative Left Wheat Accent */}
      <g transform="translate(10, 200) rotate(-15) scale(0.6)">
        <path d="M0,0 Q60,-10 120,-5" fill="none" stroke="#a4c639" strokeWidth="1.5" />
        <use href="#seed" x="30" y="-4" transform="rotate(35 30 -4)" />
        <use href="#seed" x="50" y="-6" transform="rotate(40 50 -6)" />
        <use href="#seed" x="70" y="-7" transform="rotate(45 70 -7)" />
        <use href="#seed" x="90" y="-6" transform="rotate(50 90 -6)" />
        <use href="#seed" x="110" y="-3" transform="rotate(55 110 -3)" />
      </g>

      {/* --- TOP LEFT FARM EMBLEM --- */}
      <g transform="translate(300, 100)">
        {/* Wheat Arc Frame */}
        <path d="M-80,0 A80,80 0 0,1 60,-50" fill="none" stroke="#a4c639" strokeWidth="2" strokeDasharray="1,5" strokeLinecap="round" />
        <g transform="translate(-75, -15) rotate(-50)"><use href="#seed" scale="0.8"/></g>
        <g transform="translate(-60, -45) rotate(-25)"><use href="#seed" scale="0.8"/></g>
        <g transform="translate(-35, -68) rotate(0)"><use href="#seed" scale="0.8"/></g>
        <g transform="translate(-5, -78) rotate(25)"><use href="#seed" scale="0.8"/></g>
        <g transform="translate(25, -73) rotate(50)"><use href="#seed" scale="0.8"/></g>
        <g transform="translate(52, -55) rotate(75)"><use href="#seed" scale="0.8"/></g>

        {/* Right Frame Extension */}
        <path d="M40,55 A75,75 0 0,0 80,-5" fill="none" stroke="#a4c639" strokeWidth="1.5" strokeDasharray="1,4" />
        <g transform="translate(55, 45) rotate(140)"><use href="#seed" scale="0.6"/></g>
        <g transform="translate(72, 25) rotate(160)"><use href="#seed" scale="0.6"/></g>
        <g transform="translate(78, 2) rotate(180)"><use href="#seed" scale="0.6"/></g>

        {/* Green Field Slopes */}
        <path d="M-72,15 C-40,-25 40,-25 72,15 C50,55 -50,55 -72,15 Z" fill="#117f38" />
        <path d="M-65,25 C-30,-5 30,-5 65,25" fill="none" stroke="#fff" strokeWidth="4" />
        <path d="M-50,42 C-20,15 20,15 50,42" fill="none" stroke="#fff" strokeWidth="5" />
        
        {/* Growing Sprouts Above Fields */}
        <use href="#sprout" x="-40" y="-12" transform="scale(0.8)" />
        <use href="#sprout" x="-15" y="-22" transform="scale(1)" />
        <use href="#sprout" x="15" y="-22" transform="scale(1)" />
        <use href="#sprout" x="40" y="-12" transform="scale(0.8)" />
      </g>

      {/* --- TYPOGRAPHY SECTION --- */}
      {/* "Glean" in Solid Medium Blue */}
      <text 
        x="150" 
        y="235" 
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontWeight="800" 
        fontSize="125" 
        fill="#00529b" 
        letterSpacing="-3"
      >
        Glean
      </text>

      {/* Integrated Stylized Leaf on letter 'A' */}
      <g transform="translate(463, 115)">
        {/* Left flowing leaf blade */}
        <path d="M25,85 C15,30 -10,15 15,-20 C5,15 20,40 25,85 Z" fill="#006837" />
        {/* Right bright leaf accent */}
        <path d="M25,85 C35,40 45,20 22,-5 C32,20 30,50 25,85 Z" fill="#39b54a" />
        {/* Center swooping stem veil */}
        <path d="M-15,95 Q15,105 25,85 Q10,40 18,-10" fill="none" stroke="#004b23" strokeWidth="2.5" />
      </g>

      {/* "Agro" in Forest Green & Bright Green blend */}
      <text 
        x="470" 
        y="235" 
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontWeight="800" 
        fontSize="125" 
        letterSpacing="-2"
      >
        <tspan fill="#0f5132">A</tspan>
        <tspan fill="#198754">gro</tspan>
      </text>

      {/* --- RIGHT MINI SUN & HILLS LOGO OVAL --- */}
      <g transform="translate(735, 195)">
        {/* Outer Circular Boundary */}
        <circle cx="0" cy="0" r="42" fill="none" stroke="#198754" strokeWidth="4" />
        
        {/* Micro Golden Sun */}
        <circle cx="-12" cy="-18" r="8" fill="#f97316" />
        
        {/* Tiny Backdrop Trees */}
        <path d="M15,-5 L18,-15 L21,-5 Z" fill="#14532d" />
        <path d="M22,-2 L24,-11 L26,-2 Z" fill="#14532d" />
        
        {/* Wavy Landscape Contours */}
        <path d="M-38,10 Q-15,-10 10,5 T38,-2" fill="none" stroke="#198754" strokeWidth="3" />
        <path d="M-36,22 Q-10,5 15,18 T36,10" fill="none" stroke="#198754" strokeWidth="3" />
        <path d="M-30,32 Q-5,18 20,28" fill="none" stroke="#198754" strokeWidth="3" />
      </g>

      {/* Decorative Right Wheat Accent */}
      <g transform="translate(890, 200) scale(0.6) rotate(15) translate(-120, 0)">
        <path d="M0,-5 Q60,-10 120,0" fill="none" stroke="#a4c639" strokeWidth="1.5" />
        <use href="#seed" x="20" y="-5" transform="rotate(-35 20 -5)" />
        <use href="#seed" x="40" y="-7" transform="rotate(-40 40 -7)" />
        <use href="#seed" x="60" y="-8" transform="rotate(-45 60 -8)" />
        <use href="#seed" x="80" y="-7" transform="rotate(-50 80 -7)" />
        <use href="#seed" x="100" y="-4" transform="rotate(-55 100 -4)" />
      </g>
    </svg>
  );
};

export default GleanAgroLogo;