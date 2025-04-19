import React from "react";
import { motion } from "framer-motion";

const WebsitesSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-indigo-100 text-gray-900 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 className="text-5xl md:text-6xl font-bold text-indigo-700 mb-8">
          Web Experiences That Convert
        </motion.h2>
        <motion.p className="text-xl md:text-2xl max-w-2xl mx-auto mb-20 text-gray-600">
          We design and build fast, scalable websites that turn clicks into customers.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">Tailored UI/UX</h3>
            <p className="text-base text-gray-600">
              Interfaces your customers actually want to use. Thoughtful, fast, and built to scale.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">Speed & SEO, Baked In</h3>
            <p className="text-base text-gray-600">
              From Lighthouse to Google, your site will pass every test and load lightning fast.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">Built to Grow</h3>
            <p className="text-base text-gray-600">
              Modular architecture that integrates cleanly with Shopify, Stripe, and your CRM.
            </p>
          </motion.div>
        </div>

        <div className="mt-24">
          <a
            href="/WorkUs"
            className="inline-block px-10 py-4 text-white text-lg font-medium bg-indigo-600 rounded-full hover:bg-indigo-700 transition hover:scale-105"
          >
            Let's Build Something Great
          </a>
        </div>

        <hr className="my-20 border-gray-300" />

        <div className="text-left">
          <h3 className="text-3xl font-bold text-indigo-700 mb-6 text-left">Tech Stack</h3>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700 text-base">
            <li>React.js, Next.js, and Vite</li>
            <li>Headless CMS: Sanity, Contentful</li>
            <li>SEO Tools: Ahrefs, SEMrush, Lighthouse</li>
            <li>Analytics: GA4, Hotjar, Segment</li>
            <li>eCommerce: Shopify, Stripe, Klaviyo</li>
          </ul>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-indigo-700 mb-6 text-left">Case Study Spotlight</h3>
          <div className="bg-white rounded-xl shadow-lg p-8 text-left space-y-4">
            <h4 className="text-2xl font-semibold text-indigo-600">Brand X Rebuild</h4>
            <p className="text-base text-gray-700">
              We redesigned their website in 4 weeks. Results? +32% conversions on mobile, -48% bounce rate. Faster, simpler, more focused.
            </p>
            <p className="text-sm text-gray-500">Stack: Tailwind, Next.js, Shopify, GA4</p>
          </div>
        </div>

        <h3 className="text-4xl font-bold text-indigo-700 mb-10 text-left">What Sets Us Apart</h3>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <h4 className="text-xl font-semibold text-indigo-600 mb-2">Mobile Optimization</h4>
            <p className="text-base text-gray-700">Every site we build is fast and fluid on mobile. Optimized down to the pixel.</p>
            <div className="mt-4 text-2xl">✅</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <h4 className="text-xl font-semibold text-indigo-600 mb-2">Conversion-Focused</h4>
            <p className="text-base text-gray-700">Design is strategy. We build with CTAs, retention, and engagement in mind.</p>
            <div className="mt-4 text-2xl">✅</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <h4 className="text-xl font-semibold text-indigo-600 mb-2">Fast Turnaround</h4>
            <p className="text-base text-gray-700">Get live in weeks, not months. Our process is streamlined and agile.</p>
            <div className="mt-4 text-2xl">🚀 2–4 weeks</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsitesSection;
