import React from "react";

/** Five independent surfaces share the scroll plan's eased layer progress. */
export default function GrowthCake() {
  return (
    <svg
      className="growth-cake"
      viewBox="0 0 640 640"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="cake-body"
          x1="100"
          y1="0"
          x2="540"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#706e62" />
          <stop offset=".18" stopColor="#c5c1ad" />
          <stop offset=".43" stopColor="#e3dfcc" />
          <stop offset=".72" stopColor="#b2af9c" />
          <stop offset="1" stopColor="#55574c" />
        </linearGradient>
        <linearGradient
          id="cake-surface"
          x1="130"
          y1="-50"
          x2="470"
          y2="50"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#f3f0df" />
          <stop offset=".5" stopColor="#d6d6bf" />
          <stop offset="1" stopColor="#929a7b" />
        </linearGradient>
        <linearGradient id="cake-cream">
          <stop stopColor="#a7aa91" />
          <stop offset=".4" stopColor="#eff0d7" />
          <stop offset="1" stopColor="#747d5b" />
        </linearGradient>
        <radialGradient id="cake-pool">
          <stop stopColor="#bacb8f" stopOpacity=".15" />
          <stop offset="1" stopColor="#bacb8f" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="cake-plinth">
          <stop stopColor="#232820" />
          <stop offset=".45" stopColor="#7d8770" />
          <stop offset="1" stopColor="#20271c" />
        </linearGradient>
        <pattern
          id="cake-grain"
          width="19"
          height="17"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="3" cy="4" r=".65" fill="#32392b" fillOpacity=".14" />
          <circle cx="12" cy="11" r=".5" fill="#fff" fillOpacity=".2" />
          <circle cx="17" cy="2" r=".4" fill="#32392b" fillOpacity=".16" />
        </pattern>
      </defs>
      <ellipse cx="320" cy="515" rx="310" ry="110" fill="url(#cake-pool)" />
      <ellipse cx="320" cy="516" rx="235" ry="57" fill="#000" opacity=".55" />
      <path
        d="M72 491C72 459 183 433 320 433S568 459 568 491V501C568 534 457 560 320 560S72 534 72 501Z"
        fill="url(#cake-plinth)"
      />
      <ellipse
        cx="320"
        cy="491"
        rx="248"
        ry="58"
        fill="#1c2119"
        stroke="#707c5b"
        strokeOpacity=".5"
      />
      {[0, 1, 2, 3, 4].map((index) => (
        <g key={index} transform={`translate(0 ${444 - index * 66})`}>
          <g className="sculpture-layer" data-cake-layer>
            <g
              transform={`translate(320 0) scale(${1 - index * 0.045} 1) translate(-320 0)`}
            >
              <path
                d="M110 0C110 29 204 53 320 53S530 29 530 0V58C530 88 436 112 320 112S110 88 110 58Z"
                fill="url(#cake-body)"
              />
              <path
                d="M110 0C110 29 204 53 320 53S530 29 530 0V58C530 88 436 112 320 112S110 88 110 58Z"
                fill="url(#cake-grain)"
              />
              <path
                d="M110 53C110 82 204 106 320 106S530 82 530 53V62C530 92 436 116 320 116S110 92 110 62Z"
                fill="url(#cake-cream)"
              />
              <ellipse
                cx="320"
                cy="0"
                rx="210"
                ry="53"
                fill="url(#cake-surface)"
              />
              <ellipse
                cx="320"
                cy="-1"
                rx="209"
                ry="52"
                stroke="#f6f7de"
                strokeOpacity=".5"
              />
              <path
                d="M112 3C124 33 214 56 320 56S516 33 528 3"
                stroke="#f4f3da"
                strokeOpacity=".4"
                strokeWidth="2"
              />
            </g>
          </g>
        </g>
      ))}
    </svg>
  );
}
