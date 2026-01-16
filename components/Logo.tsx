
import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  showText?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'light', showText = true, className = '' }) => {
  const isDark = variant === 'dark';
  const textColorPrimary = isDark ? 'text-white' : 'text-[#002B49]';
  const textColorSecondary = isDark ? 'text-slate-400' : 'text-slate-500';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-10 h-11 shrink-0">
        <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Top Orange Diamond */}
          <path d="M50 5L85 25L50 45L15 25L50 5Z" fill="#F97316" stroke="#FB923C" strokeWidth="2" />
          {/* Left Teal Wing */}
          <path d="M15 30V75L45 95V50L15 30Z" fill="#0EA5E9" />
          {/* Right Dark Blue Wing */}
          <path d="M85 30V75L55 95V50L85 30Z" fill="#1E3A8A" />
          {/* Center Vertical Highlight */}
          <path d="M47 55V85L53 85V55L47 55Z" fill="#F97316" className="animate-pulse" />
        </svg>
      </div>
      
      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-baseline">
            <span className={`text-2xl font-black uppercase tracking-tighter font-brand ${textColorPrimary}`}>Vertex</span>
            <span className={`text-2xl font-light uppercase tracking-tighter font-brand ml-1 ${textColorSecondary}`}>Prefab</span>
          </div>
          <span className={`text-[8px] font-bold uppercase tracking-[0.2em] mt-0.5 opacity-70 ${isDark ? 'text-white' : 'text-slate-600'}`}>
            Prefabricated Buildings Ltd
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
