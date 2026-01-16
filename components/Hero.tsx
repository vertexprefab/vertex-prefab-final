
import React from 'react';
import { TranslationStrings } from '../types';

interface HeroProps {
  t: TranslationStrings;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=2000&auto=format&fit=crop" 
          className="w-full h-full object-cover" 
          alt="Modern Architecture"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002B49]/90 via-[#002B49]/70 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-600/20 border border-orange-500/30 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
            <span className="text-orange-400 text-[10px] font-bold uppercase tracking-widest font-brand">Global Modular Solutions</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.05] font-brand uppercase">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-12 leading-relaxed max-w-2xl font-light">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href="#" 
              onClick={(e) => scrollToSection(e, 'design')}
              className="bg-orange-600 hover:bg-orange-500 text-white px-10 py-5 rounded-xl font-black text-sm uppercase tracking-widest transition-all hover:scale-105 shadow-xl shadow-orange-900/20 font-brand text-center"
            >
              {t.hero.cta}
            </a>
            <a 
              href="#" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-10 py-5 rounded-xl font-black text-sm uppercase tracking-widest transition-all font-brand text-center"
            >
              {t.nav.contact}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
