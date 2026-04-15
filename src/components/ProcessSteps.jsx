import React from 'react';

const steps = [
  {
    id: '01',
    title: 'Capture Attention',
    desc: 'Thumb-stopping hooks and ruthless editing. We buy you the first 3 seconds.',
    color: 'border-white'
  },
  {
    id: '02',
    title: 'Refine Creative',
    desc: 'Rapid testing of variables. We drop the losers and iterate on the winners.',
    color: 'border-electric-green'
  },
  {
    id: '03',
    title: 'Scale What Works',
    desc: 'Pump budget into proven assets. Turn winning creative into predictable revenue.',
    color: 'border-high-voltage-blue'
  }
];

export default function ProcessSteps() {
  return (
    <section className="bg-background py-32 px-6 md:px-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-16 md:mb-24 text-center">
          The System
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative group">
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-[2px] bg-white/10 z-0" />
              )}

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className={`w-24 h-24 rounded-full border-4 ${step.color} bg-background flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110`}>
                  <span className="text-3xl font-black text-white">{step.id}</span>
                </div>

                <h3 className="text-2xl font-bold uppercase mb-4 text-white">
                  {step.title}
                </h3>

                <p className="text-soft-gray text-lg max-w-xs">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}