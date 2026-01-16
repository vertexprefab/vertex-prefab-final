
import React from 'react';
import { TranslationStrings } from '../types';
import Logo from './Logo';

interface FooterProps {
  t: TranslationStrings;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-[#002B49] text-white py-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col items-center md:items-start">
            <Logo variant="dark" className="mb-6" />
            <p className="text-slate-400 max-w-sm text-center md:text-left text-sm leading-relaxed">
              {t.footer.tagline} Delivering world-class modular infrastructure with precision engineering and sustainable design.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-8">
              {['LinkedIn', 'Twitter', 'Instagram'].map(social => (
                <a key={social} href="#" className="text-slate-400 hover:text-orange-500 transition-colors font-bold text-xs uppercase tracking-widest font-brand">
                  {social}
                </a>
              ))}
            </div>
            
            <div className="text-slate-500 text-[10px] uppercase tracking-widest font-bold font-brand text-center md:text-right">
              {t.footer.rights}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
