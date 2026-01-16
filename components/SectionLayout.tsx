
import React from 'react';
import { SectionContent } from '../types';

interface SectionLayoutProps {
  content: SectionContent;
  index: number;
  image: string;
}

const SectionLayout: React.FC<SectionLayoutProps> = ({ content, index, image }) => {
  const isEven = index % 2 === 0;

  return (
    <section id={content.id} className={`py-32 relative overflow-hidden ${isEven ? 'bg-slate-50' : 'bg-white'}`}>
      {/* Background Decorative Element */}
      <div className={`absolute top-0 opacity-5 pointer-events-none select-none text-[20vw] font-black text-blue-900 ${isEven ? '-left-20' : '-right-20'}`}>
        0{index}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`flex flex-col lg:flex-row items-center gap-20 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
          <div className="lg:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-0.5 bg-blue-600"></span>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">{content.title.split('.')[1].trim()}</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-slate-900 leading-[1.1]">
              {content.title}
            </h2>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium italic border-l-4 border-blue-900/10 pl-6">
              {content.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
              {content.advantages.map((adv, i) => (
                <div key={i} className="group flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-800 font-bold text-sm uppercase tracking-tight">{adv}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-900/5 rounded-[2rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="relative rounded-[1.5rem] overflow-hidden shadow-2xl">
                <img 
                  src={image} 
                  alt={content.title} 
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
                    <span className="text-white text-xs font-bold uppercase tracking-widest block mb-1">Vertex Engineering</span>
                    <span className="text-white/80 text-[10px] uppercase font-medium">Certified Modular System • 2024 Series</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionLayout;
