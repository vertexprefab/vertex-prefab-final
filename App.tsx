
import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { translations } from './translations';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionLayout from './components/SectionLayout';
import Process from './components/Process';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import SystemsNav from './components/SystemsNav';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className={`min-h-screen selection:bg-blue-100 selection:text-blue-900`}>
      <Navbar lang={lang} setLang={setLang} t={t} />
      
      <main>
        <Hero t={t} />
        
        {/* Why Choose Us Section */}
        <section id="why-us" className="py-24 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter italic font-brand">
                {t.whyChooseUs.title}
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { data: t.whyChooseUs.quality, icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                { data: t.whyChooseUs.speed, icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                { data: t.whyChooseUs.global, icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10 hover:bg-white/10 transition duration-500 group">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(30,58,138,0.5)] group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black mb-4 uppercase tracking-tight font-brand">{item.data.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-lg">{item.data.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dedicated Services Section */}
        <section id="services" className="py-32 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-12 h-0.5 bg-orange-600"></span>
                  <span className="text-orange-600 font-bold uppercase tracking-widest text-sm italic">{t.designServices.subtitle}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-8 text-slate-900 leading-[1.1] uppercase font-brand">
                  {t.designServices.title}
                </h2>
                <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                  {t.designServices.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {t.designServices.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0"></div>
                      <span className="text-slate-800 font-bold text-sm tracking-tight uppercase font-brand">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop" 
                  alt="Engineering Design" 
                  className="rounded-3xl shadow-2xl object-cover aspect-video"
                />
                <div className="absolute -bottom-10 -right-10 bg-blue-900 text-white p-8 rounded-2xl shadow-xl hidden lg:block">
                  <div className="text-3xl font-black mb-1">20+</div>
                  <div className="text-xs uppercase tracking-widest opacity-70 font-brand">Years of Engineering</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Construction Systems Section */}
        <div id="solutions">
          <SystemsNav lang={lang} t={t} />
          
          <SectionLayout content={t.sections.lgs} index={1} image="https://images.unsplash.com/photo-1518005020480-1099289748fa?q=80&w=800&auto=format&fit=crop" />
          <SectionLayout content={t.sections.pressPanel} index={2} image="https://images.unsplash.com/photo-1503387762-592dea58ed23?q=80&w=800&auto=format&fit=crop" />
          <SectionLayout content={t.sections.caravans} index={3} image="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=800&auto=format&fit=crop" />
          <SectionLayout content={t.sections.domes} index={4} image="https://images.unsplash.com/photo-1493246507139-91e8bef99c02?q=80&w=800&auto=format&fit=crop" />
          <SectionLayout content={t.sections.wooden} index={5} image="https://images.unsplash.com/photo-1510627945391-057a8271cc18?q=80&w=800&auto=format&fit=crop" />
          <SectionLayout content={t.sections.steel} index={6} image="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop" />
        </div>

        <Process t={t} />
        <About t={t} />
        <Contact t={t} />
      </main>

      <Footer t={t} />

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/905000000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition duration-300 flex items-center justify-center group"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86(9.884 9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412.001 12.048a11.827 11.827 0 001.578 5.925L0 24l6.135-1.61a11.845 11.845 0 005.912 1.586h.005c6.631 0 12.042-5.412 12.045-12.048a11.82 11.82 0 00-3.48-8.52z"/>
        </svg>
        <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          {t.contact.whatsapp}
        </span>
      </a>
    </div>
  );
};

export default App;
