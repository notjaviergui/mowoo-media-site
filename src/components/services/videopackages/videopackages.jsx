import React, { useEffect, useRef, useState } from 'react';
import './VideoPackages.css'; // optional: external styles for animation classes

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
  }
];

export default function VideoPackages() {
  const containerRef = useRef(null);
  const positions = useRef([]);
  const velocity = useRef(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const cardWidth = 360;
    const spacing = 5;
    const totalCards = packages.length;
    const visibleWidth = 400;
    const resetPosition = totalCards * (cardWidth + spacing);
    
    for (let i = 0; i < totalCards; i++) {
      document.documentElement.style.setProperty(`--x${i}`, (i * (cardWidth + spacing)).toString());
    }

    let animationFrame;
    let lastTime = performance.now();

    const update = (timestamp) => {
      const delta = timestamp - lastTime;
      lastTime = timestamp;

      for (let i = 0; i < totalCards; i++) {
        const xVar = document.documentElement.style;
        let prev = parseFloat(xVar.getPropertyValue(`--x${i}`) || (i * (cardWidth + spacing)));
        let next = prev + velocity.current * delta * 0.05;

        // Loop back to the next card when offscreen left
        if (next < -cardWidth) {
          const lastX = parseFloat(xVar.getPropertyValue(`--x${(i + totalCards - 1) % totalCards}`));
          next = lastX + cardWidth + spacing;
        }

        xVar.setProperty(`--x${i}`, next);

        // Compute fade based on 400px zone centered
        const leftFadeStart = 0;
        const rightFadeEnd = visibleWidth;
        let opacity = 0;

        if (next < 50) {
          opacity = Math.max(0, next / 50); // fade in over 50px
        } else if (next > 350) {
          opacity = Math.max(0, (visibleWidth - next) / 50); // fade out over 50px
        } else {
          opacity = 1;
        }

        xVar.setProperty(`--opacity${i}`, opacity.toFixed(2));
      }

      if (!isDragging.current) {
        velocity.current = isHovered ? 0 : -1.5;
      }

      animationFrame = requestAnimationFrame(update);
    };

    // Start with steady speed
    velocity.current = -1.5;
    animationFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered]);

  return (
    <section className="py-20 bg-white overflow-hidden relative">
      <h2 className="text-4xl font-bold text-center mb-10 text-black">Our Video Packages</h2>
      <div
        ref={containerRef}
        className="relative w-full h-[450px] cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          isDragging.current = false;
        }}
        onMouseDown={(e) => {
          isDragging.current = true;
          startX.current = e.clientX;
        }}
        onMouseMove={(e) => {
          if (!isDragging.current) return;
          const delta = e.clientX - startX.current;
          velocity.current = delta * 0.3;
          startX.current = e.clientX;
        }}
        onMouseUp={() => {
          isDragging.current = false;
        }}
        onTouchStart={(e) => {
          isDragging.current = true;
          startX.current = e.touches[0].clientX;
        }}
        onTouchMove={(e) => {
          if (!isDragging.current) return;
          const delta = e.touches[0].clientX - startX.current;
          velocity.current = delta * 0.3;
          startX.current = e.touches[0].clientX;
        }}
        onTouchEnd={() => {
          isDragging.current = false;
        }}
      >
        {packages.map((pkg, i) => (
          <div
            key={i}
            className="absolute top-0 transition-transform duration-100 ease-linear"
            style={{
              transform: `translateX(calc(var(--x${i}) * 1px))`,
              width: '300px',
              height: '100%',
              opacity: `var(--opacity${i})`,
              left: 'calc(50% - 150px)' // center based on 300px width
            }}
          >
            <div className="bg-white border-2 rounded-xl shadow-lg p-6 h-full">
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
