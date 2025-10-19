import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = 'h-12 w-auto text-white' }) => {
  return (
    <div className={`relative ${className}`} style={{ width: '150px', height: '60px' }}>
      <svg 
        viewBox="0 0 150 75" 
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        {/* V2FLY Text */}
        <text 
          x="75" 
          y="20" 
          fontFamily="Vazirmatn, sans-serif" 
          fontSize="18" 
          fontWeight="900" 
          textAnchor="middle" 
          letterSpacing="1"
          fill="currentColor"
        >
          V2FLY
        </text>

        {/* Left Wing */}
        <path d="M 50 45 Q 20 55 20 70 L 25 70 Q 25 58 50 50 Z" />
        <path d="M 55 48 Q 30 55 30 65 L 35 65 Q 35 58 55 51 Z" />
        <path d="M 60 51 Q 40 55 40 60 L 45 60 Q 45 57 60 53 Z" />

        {/* Right Wing */}
        <path d="M 100 45 Q 130 55 130 70 L 125 70 Q 125 58 100 50 Z" />
        <path d="M 95 48 Q 120 55 120 65 L 115 65 Q 115 58 95 51 Z" />
        <path d="M 90 51 Q 110 55 110 60 L 105 60 Q 105 57 90 53 Z" />

        {/* Key */}
        <g transform="rotate(45 75 60)">
          {/* Key Head */}
          <circle cx="75" cy="40" r="10" strokeWidth="3.5" stroke="currentColor" fill="none" />
          <line x1="75" y1="30" x2="75" y2="25" strokeWidth="3.5" stroke="currentColor" strokeLinecap="round" />
          <line x1="75" y1="50" x2="75" y2="55" strokeWidth="3.5" stroke="currentColor" strokeLinecap="round" />
          
          {/* Key Body */}
          <rect x="72" y="50" width="6" height="25" rx="2" />
          
          {/* Key Teeth */}
          <rect x="78" y="65" width="7" height="4" />
          <rect x="78" y="57" width="4" height="4" />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
