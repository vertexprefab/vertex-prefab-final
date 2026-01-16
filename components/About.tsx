
import React from 'react';
import { TranslationStrings } from '../types';

interface AboutProps {
  t: TranslationStrings;
}

const About: React.FC<AboutProps> = ({ t }) => {
  const content = t.aboutSection;

  return (
    <section id="about" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-0.5 bg-orange-600"></span>
              <span className="text-orange-600 font-bold uppercase tracking-widest text-sm italic">{content.subtitle}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-slate-900 uppercase font-brand leading-none">
              {content.title}
            </h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              {content.overview}
            </p>
            
            <div className="space-y-8">
              {[content.vision, content.mission, content.commitment].map((item, idx) => (
                <div key={idx} className="flex gap-6 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    {idx === 0 && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeWidth="2"/></svg>}
                    {idx === 1 && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth="2"/></svg>}
                    {idx === 2 && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeWidth="2"/></svg>}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase font-brand">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 flex flex-col gap-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop" 
                alt="Corporate Office" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10"></div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-900 text-white p-8 rounded-3xl flex flex-col justify-center">
                <div className="text-4xl font-black mb-1">50+</div>
                <div className="text-xs uppercase tracking-widest opacity-70">Countries Served</div>
              </div>
              <div className="bg-orange-600 text-white p-8 rounded-3xl flex flex-col justify-center">
                <div className="text-4xl font-black mb-1">ISO</div>
                <div className="text-xs uppercase tracking-widest opacity-70">Certified Standard</div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h4 className="text-slate-900 font-bold uppercase tracking-tight mb-4 font-brand">Our Global Reach</h4>
              <p className="text-slate-500 text-sm leading-relaxed italic">
                "Operating from the heart of Turkey, we bridge the gap between European precision and Middle Eastern scale, providing turnkey solutions to every continent."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
