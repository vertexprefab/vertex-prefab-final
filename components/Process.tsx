
import React from 'react';
import { TranslationStrings } from '../types';

interface ProcessProps {
  t: TranslationStrings;
}

const Process: React.FC<ProcessProps> = ({ t }) => {
  const steps = [
    { num: '01', ...t.process.step1 },
    { num: '02', ...t.process.step2 },
    { num: '03', ...t.process.step3 },
    { num: '04', ...t.process.step4 },
  ];

  return (
    <section id="process" className="py-24 bg-blue-950 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
          {t.process.title}
        </h2>
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-blue-800/50 z-0"></div>
          
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-blue-800 group-hover:bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6 transition border-4 border-blue-950">
                {step.num}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-blue-200 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
