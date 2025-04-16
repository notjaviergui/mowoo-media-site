import React from "react";

export default function VideoHero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/reel-video.mp4"
        autoPlay
        muted
        defaultMuted
        loop
        playsInline
        preload="auto"
      />
    </div>
  );
}