
import React, { useState, useEffect } from 'react';
import { Language, TranslationStrings } from '../types';
import Logo from './Logo';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationStrings;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: 'hero', label: t.nav.home },
    { id: 'services', label: t.nav.services },
    { id: 'solutions', label: t.nav.systems },
    { id: 'why-us', label: t.nav.whyUs },
    { id: 'process', label: t.nav.process },
    { id: 'about', label: t.nav.about }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" onClick={(e) => scrollToSection(e, 'hero')}>
          <Logo variant={scrolled ? 'light' : 'dark'} className="scale-90 md:scale-100 origin-left" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navItems.map(item => (
              <a 
                key={item.id} 
                href="#" 
                onClick={(e) => scrollToSection(e, item.id)}
                className={`text-sm font-bold uppercase tracking-wider transition-colors font-brand ${scrolled ? 'text-[#002B49] hover:text-orange-600' : 'text-white/80 hover:text-white'}`}
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-4 border-l border-slate-300/30 pl-8 ml-4">
            <div className={`flex rounded-lg p-1 ${scrolled ? 'bg-slate-100' : 'bg-white/10 backdrop-blur-sm'}`}>
              {(['en', 'tr', 'ar'] as Language[]).map(l => (
                <button 
                  key={l}
                  onClick={() => setLang(l)} 
                  className={`px-3 py-1.5 rounded-md text-xs font-bold transition font-brand ${lang === l ? 'bg-[#1E3A8A] text-white shadow-sm' : scrolled ? 'text-slate-600 hover:bg-slate-200' : 'text-white/70 hover:bg-white/10'}`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <a 
              href="#" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className={`px-5 py-2.5 rounded-lg text-sm font-bold transition shadow-sm font-brand ${scrolled ? 'bg-[#1E3A8A] text-white hover:bg-blue-800' : 'bg-orange-600 text-white hover:bg-orange-500'}`}
            >
              {t.nav.contact}
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className={`w-8 h-8 ${scrolled ? 'text-slate-900' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#002B49] transition-transform duration-500 z-50 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 flex flex-col h-full">
          <div className="flex justify-between items-center mb-12">
            <Logo variant="dark" />
            <button onClick={() => setIsOpen(false)} className="text-white p-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeWidth="2"/></svg>
            </button>
          </div>
          <div className="flex flex-col gap-6 text-2xl font-bold text-white/80 font-brand">
            <a href="#" onClick={(e) => scrollToSection(e, 'hero')}>{t.nav.home}</a>
            <a href="#" onClick={(e) => scrollToSection(e, 'services')}>{t.nav.services}</a>
            <a href="#" onClick={(e) => scrollToSection(e, 'solutions')}>{t.nav.systems}</a>
            <a href="#" onClick={(e) => scrollToSection(e, 'why-us')}>{t.nav.whyUs}</a>
            <a href="#" onClick={(e) => scrollToSection(e, 'process')}>{t.nav.process}</a>
            <a href="#" onClick={(e) => scrollToSection(e, 'about')}>{t.nav.about}</a>
            <a href="#" onClick={(e) => scrollToSection(e, 'contact')}>{t.nav.contact}</a>
          </div>
          <div className="mt-auto flex gap-4 border-t border-white/10 pt-8">
            {(['en', 'tr', 'ar'] as Language[]).map(l => (
              <button 
                key={l}
                onClick={() => {setLang(l); setIsOpen(false);}} 
                className={`px-6 py-3 rounded-xl font-bold font-brand ${lang === l ? 'bg-orange-600 text-white' : 'bg-white/10 text-white'}`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
