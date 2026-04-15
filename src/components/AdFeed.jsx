import React, { useState } from 'react';

const mockAds = [
  {
    id: 1,
    title: 'UGC Acquisition',
    metric: '+42% CTR',
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    altThumbnail: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    breakdown: 'A/B Test Winner: Fast cuts + text overlay increased engagement by 3x.'
  },
  {
    id: 2,
    title: 'Brand Story',
    metric: '2.1x ROAS',
    thumbnail: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    altThumbnail: 'https://images.unsplash.com/photo-1551218808-94e220e084d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    breakdown: 'Emotion-driven narrative reduced CPA by 25%.'
  },
  {
    id: 3,
    title: 'Product Drop',
    metric: '$1.2M Rev',
    thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    altThumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    breakdown: 'High-contrast studio lighting drove record launch day sales.'
  },
  {
    id: 4,
    title: 'Retargeting Flow',
    metric: '+15% Conv',
    thumbnail: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    altThumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    breakdown: 'Direct-response copy variation won over standard brand messaging.'
  }
];

export default function AdFeed() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="bg-background py-24 px-6 md:px-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
            The Feed
          </h2>
          <p className="text-soft-gray text-lg md:text-xl max-w-md mt-4 md:mt-0 font-medium">
            Creative in motion. Hover to see the split-test data.
          </p>
        </div>

        {/* Scrollable feed container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mockAds.map((ad) => (
            <div
              key={ad.id}
              className="relative aspect-[4/5] overflow-hidden group cursor-pointer bg-neutral-900"
              onMouseEnter={() => setHoveredId(ad.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Main Image */}
              <img
                src={hoveredId === ad.id ? ad.altThumbnail : ad.thumbnail}
                alt={ad.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                {/* Metric Overlay */}
                <div className="self-end">
                  <span className="inline-block bg-high-voltage-blue text-white font-bold px-4 py-2 text-sm uppercase tracking-wider">
                    {ad.metric}
                  </span>
                </div>

                {/* Title & Breakdown */}
                <div>
                  <h3 className="text-3xl font-bold uppercase mb-2 group-hover:text-electric-green transition-colors duration-300">
                    {ad.title}
                  </h3>

                  {/* Hover Info */}
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${hoveredId === ad.id ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-soft-gray font-medium mt-2 border-l-2 border-electric-green pl-4">
                      {ad.breakdown}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}