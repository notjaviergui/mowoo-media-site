import React from 'react';

export default function MetricsProof() {
  return (
    <section className="bg-background py-32 px-6 md:px-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

          {/* Metric 1 */}
          <div className="flex flex-col space-y-4 border-l-4 border-electric-green pl-6 md:pl-10">
            <span className="text-7xl md:text-8xl lg:text-9xl font-black text-electric-green tracking-tighter leading-none">
              $50M+
            </span>
            <h3 className="text-2xl md:text-3xl font-bold uppercase text-white tracking-wide">
              In Ad Spend Managed
            </h3>
            <p className="text-soft-gray text-lg max-w-sm">
              We don't guess. We test, iterate, and scale what works using cold hard data.
            </p>
          </div>

          {/* Metric 2 */}
          <div className="flex flex-col space-y-4 border-l-4 border-high-voltage-blue pl-6 md:pl-10 md:mt-16">
            <span className="text-7xl md:text-8xl lg:text-9xl font-black text-high-voltage-blue tracking-tighter leading-none">
              2.3x
            </span>
            <h3 className="text-2xl md:text-3xl font-bold uppercase text-white tracking-wide">
              Average ROAS
            </h3>
            <p className="text-soft-gray text-lg max-w-sm">
              Our creative isn't just pretty. It's engineered to lower acquisition costs and drive profitable growth.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}