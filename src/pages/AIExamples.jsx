import React, { useEffect, useRef } from 'react';
import data from '../data/aiExamples.json';

export default function AIExamples() {
  const videoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (!(video instanceof HTMLVideoElement)) return;
          if (entry.isIntersecting) {
            // Attempt to play when visible
            const playPromise = video.play();
            if (playPromise && typeof playPromise.then === 'function') {
              playPromise.catch(() => {/* ignore autoplay restrictions */});
            }
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach((v) => v && observer.observe(v));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen px-4 md:px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <header className="mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">AI Video Examples</h1>
          <p className="text-gray-600 mt-2">A growing library of AI-generated ad creatives and case studies.</p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {data.map((item, idx) => (
            <article key={item.id} className="group relative rounded-xl overflow-hidden bg-gray-50 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video overflow-hidden">
                <video
                  ref={(el) => (videoRefs.current[idx] = el)}
                  src={item.videoUrl}
                  poster={item.posterUrl}
                  className="h-full w-full object-cover transform transition-transform duration-300 group-hover:scale-[1.03]"
                  playsInline
                  muted
                  loop
                  preload="metadata"
                />
              </div>
              {(item.title || item.client) && (
                <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3 bg-gradient-to-t from-black/70 via-black/20 to-transparent text-white">
                  <div className="text-xs md:text-sm font-semibold leading-tight">
                    {item.title}
                  </div>
                  {item.client && (
                    <div className="text-[10px] md:text-xs opacity-80">{item.client}</div>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



