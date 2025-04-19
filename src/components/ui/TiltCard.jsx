import React, { useRef, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

export default function TiltCard({ children, options = {}, className = '' }) {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.2,
        scale: 1.05,
        perspective: 1000,
        reset: true,
        ...options,
      });
    }

    return () => tiltRef.current?.vanillaTilt?.destroy(); // Clean up
  }, [options]);

  return (
    <div ref={tiltRef} className={className}>
      {children}
    </div>
  );
}