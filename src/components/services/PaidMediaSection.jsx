import React from "react";

export default function PaidMediaSection() {
  return (
    <section className="bg-white text-gray-900 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-10 text-center">
          Performance-Driven Paid Media
        </h2>
        <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-16 text-gray-700">
          We help brands scale with precision. Our media buying team combines deep platform expertise with
          creative testing frameworks to drive measurable ROI across channels like Meta, Google, TikTok and more.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Strategy & Planning</h3>
            <p className="text-gray-700">
              We craft custom media plans aligned with your business goals. From targeting strategy to budget allocation,
              every move is designed to convert.
            </p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Creative Testing</h3>
            <p className="text-gray-700">
              Our framework lets us continuously test creatives to find high performers quickly. Every test has a hypothesis
              and a clear metric to measure success.
            </p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Platform Management</h3>
            <p className="text-gray-700">
              We're experts in Meta Ads, Google Ads, YouTube, TikTok, and beyond. From setup to optimization,
              we handle the complexity so you can focus on scaling.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Want to see results like 3.5x ROAS?</h4>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            Let’s talk about how we can build a paid media strategy that actually works.
          </p>
          <a
            href="/WorkUs"
            className="inline-block px-8 py-3 text-white font-semibold bg-indigo-600 rounded-full hover:bg-indigo-700 transition"
          >
            Work with Us
          </a>
        </div>
      </div>
    </section>
  );
}
