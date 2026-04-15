import React from 'react';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="bg-electric-green py-32 px-6 md:px-16 flex flex-col items-center justify-center text-center">
      <div className="max-w-4xl mx-auto space-y-10">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase text-black tracking-tighter leading-none">
          Let's build your <br/> next winning ad.
        </h2>

        <div className="pt-8">
          <Link
            to="/WorkUs"
            className="inline-block bg-black text-white font-bold py-5 px-12 text-xl uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300 transform hover:scale-105"
          >
            Start Now
          </Link>
        </div>
      </div>
    </section>
  );
}