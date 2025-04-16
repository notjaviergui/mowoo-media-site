import React from 'react';
import { Link } from 'react-router-dom';

export default function CreativeSection() {
  return (
    <section className="bg-blue-600 text-white px-6 md:px-16 py-12 relative">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold mb-4">Creative</h2>
        <p className="text-lg leading-relaxed">
          Producing creative is more than just following brand guidelines and social media trends.
          At Mowoo Media, we take a creative approach by working closely with performance data
          and always making informed optimizations in real-time.
        </p>
        <div className="flex gap-4 mt-6">
          <Link
            to="/pages/join-us"
            className="bg-white text-black px-6 py-2 rounded-full font-semibold transition hover:scale-105"
          >
            Work with us
          </Link>
          <Link
            to="/pages/clients"
            className="bg-transparent border border-white text-white px-6 py-2 rounded-full font-semibold transition hover:scale-105"
          >
            View examples
          </Link>
        </div>
      </div>
      <ul className="absolute top-6 right-6 text-sm text-white space-y-1 hidden md:block">
        <li>Copywriting</li>
        <li>Ad Production</li>
        <li>UGC</li>
        <li>Brand Identity</li>
      </ul>
    </section>
  );
}
