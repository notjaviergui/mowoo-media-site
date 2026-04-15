import React from "react";

export default function VideoHero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-background">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-60"
        src="/reel-video.mp4"
        autoPlay
        muted
        defaultMuted
        loop
        playsInline
        preload="auto"
      />

      {/* Overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-10" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-16 mt-16">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-red-500 text-xs font-bold tracking-widest uppercase">REC</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6 uppercase tracking-tight">
            We make ads <br /> people don't skip.
          </h1>

          <p className="text-xl md:text-2xl text-soft-gray font-medium max-w-xl mb-10">
            Attention <span className="text-white">→</span> Revenue. <br/>
            The living ad engine for modern brands.
          </p>

          <button className="bg-electric-green text-black font-bold py-4 px-8 rounded-none uppercase tracking-wider hover:bg-white transition-colors duration-300 transform hover:scale-105">
            Start the engine
          </button>
        </div>
      </div>
    </div>
  );
}