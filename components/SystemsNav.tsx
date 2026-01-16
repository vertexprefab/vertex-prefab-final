
import React, { useState, useEffect } from 'react';
import { Language, TranslationStrings } from '../types';

interface SystemsNavProps {
  lang: Language;
  t: TranslationStrings;
}

const SystemsNav: React.FC<SystemsNavProps> = ({ lang, t }) => {
  const [activeId, setActiveId] = useState('');

  // Scroll Spy for Icons
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['lgs', 'press-panel', 'caravans', 'domes', 'wooden', 'steel'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const systems = [
    { id: 'lgs', icon: 'lgs-prefab.png', label: t.sections.lgs.title.split('.')[1].trim() },
    { id: 'press-panel', icon: 'press-panel.png', label: t.sections.pressPanel.title.split('.')[1].trim() },
    { id: 'caravans', icon: 'caravans.png', label: t.sections.caravans.title.split('.')[1].trim() },
    { id: 'domes', icon: 'domes.png', label: t.sections.domes.title.split('.')[1].trim() },
    { id: 'wooden', icon: 'wooden-structure.png', label: t.sections.wooden.title.split('.')[1].trim() },
    { id: 'steel', icon: 'steel-structure.png', label: t.sections.steel.title.split('.')[1].trim() },
  ];

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-slate-900 py-12 border-y border-white/5">
      <div className="container mx-auto px-6">
        {/* Systems Icon Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
          {systems.map((sys) => {
            const isActive = activeId === sys.id;
            return (
              <a
                key={sys.id}
                href={`#${sys.id}`}
                onClick={(e) => scrollTo(e, sys.id)}
                className={`flex flex-col items-center group transition-all duration-500 p-6 rounded-2xl border ${
                  isActive 
                    ? 'bg-blue-600/10 border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.1)]' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <div className={`w-16 h-16 mb-4 transition-all duration-500 flex items-center justify-center ${
                  isActive ? 'scale-110' : 'group-hover:scale-110 opacity-70 group-hover:opacity-100'
                }`}>
                  <img 
                    src={sys.icon} 
                    alt={sys.label} 
                    className={`w-full h-full object-contain ${isActive ? '' : 'brightness-200 contrast-75'}`}
                  />
                </div>
                <span className={`text-[10px] md:text-xs font-black uppercase tracking-widest text-center font-brand transition-colors duration-300 ${
                  isActive ? 'text-blue-400' : 'text-slate-400 group-hover:text-white'
                }`}>
                  {sys.label}
                </span>
                {isActive && (
                  <div className="mt-3 w-8 h-0.5 bg-blue-500 rounded-full animate-pulse"></div>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SystemsNav;
