import React from 'react';
import './VideoPackages.css'; // optional: external styles for animation classes
import TiltCard from '../../ui/TiltCard';

const packages = [
  {
    title: '⚡ Model Mini',
    price: '$1,500+',
    subtitle: 'Lean, fast, and built for traction',
    features: [
      '1-day shoot, 1 location',
      '1–2 min promo video',
      '3 social cutdowns',
      'Basic color + audio mix',
      '2 revisions',
      'HD delivery'
    ],
    cta: 'Get Started'
  },
  {
    title: '🚀 Model Momentum',
    price: '$3,500+',
    subtitle: 'More firepower for your next big move',
    features: [
      'Everything in Model Mini',
      'Pre-production strategy',
      '2 shoot days, 2 locations',
      'Director + Assistant',
      '5–8 short-form cutdowns',
      'Motion graphics + templates',
      'Rush delivery option'
    ],
    cta: 'Get Started'
  },
  {
    title: '🧠 Model Masterpiece',
    price: '$7,500+',
    subtitle: 'Full creative domination. For brands that go big.',
    features: [
      'Everything in Model Momentum',
      'Full campaign direction',
      '4 shoot days',
      'Talent + studio sourcing',
      'Storyboarding',
      'Product photos + content drop calendar',
      '12+ edited deliverables'
    ],
    cta: 'Get Started'
  },
  {
    title: '🎯 Model Custom',
    price: 'Contact Us',
    subtitle: 'Tailored strategy and production for your brand vision',
    features: [
      'Fully bespoke creative plan',
      'Flexible shoot days & locations',
      'Collaborative direction process',
      'Advanced editing + assets',
      'Ongoing campaign support',
      'Optional retainer model'
    ],
    cta: 'Contact Us'
  }
];

export default function VideoPackages() {
  return (
    <section className="py-20 bg-white overflow-hidden relative">
      <h2 className="text-4xl font-bold text-center mb-10 text-black">Our Video Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
        {packages.map((pkg, i) => (
          <TiltCard key={i} className="bg-white border-2 rounded-xl shadow-lg p-6 h-full">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-2">{pkg.title}</h3>
            <p className="text-black text-lg font-bold">{pkg.price}</p>
            <p className="text-sm text-gray-600 mb-4">{pkg.subtitle}</p>
            <ul className="text-sm text-black mb-4 space-y-1">
              {pkg.features.map((feature, idx) => (
                <li key={idx}>• {feature}</li>
              ))}
            </ul>
            <button className="mt-auto px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
              {pkg.cta}
            </button>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
