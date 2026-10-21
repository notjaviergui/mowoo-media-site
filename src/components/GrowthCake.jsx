import React from "react";

export default function GrowthCake() {
  return (
    <div className="real-cake" aria-hidden="true">
      <div className="real-cake-shadow" />
      <div className="real-cake-plate" />
      {[0, 1, 2, 3, 4].map((index) => (
        <div
          className="real-cake-slot"
          key={index}
          style={{ "--cake-index": index }}
        >
          <img
            className="real-cake-layer"
            data-cake-layer
            src="/images/cake-layer-real.png"
            alt=""
            width="1536"
            height="1024"
            decoding="async"
          />
        </div>
      ))}
    </div>
  );
}
