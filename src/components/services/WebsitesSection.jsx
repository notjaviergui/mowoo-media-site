import React from "react";
import { motion } from "framer-motion";

const WebsitesSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-indigo-100 text-gray-900 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-indigo-700 mb-6"
        >
          Custom Websites Built for Performance
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-16 text-gray-700"
        >
          Your website is your brand's first impression—let's make it count. We design and develop responsive,
          scalable, and conversion-driven websites tailored to your growth goals.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-indigo-700">Custom UI/UX</h3>
            <p className="text-sm">
              We craft bespoke user experiences that match your brand's tone and purpose. Our designs are intuitive,
              modern, and fully responsive across devices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-indigo-700">Performance & SEO</h3>
            <p className="text-sm">
              We optimize load speeds, accessibility, and SEO best practices to ensure visibility and ranking from
              day one—without compromising on aesthetics.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-indigo-700">Scalable & Integrated</h3>
            <p className="text-sm">
              Whether you're launching a marketing site or a full e-commerce experience, our code is clean, scalable,
              and integrates with tools like Shopify, Stripe, and HubSpot.
            </p>
          </motion.div>
        </div>

        <div className="mt-16">
          <a
            href="/WorkUs"
            className="inline-block px-10 py-4 text-white font-semibold bg-indigo-600 rounded-full hover:bg-indigo-700 transition hover:scale-105"
          >
            Start Your Project
          </a>
        </div>

        <hr className="my-20 border-gray-300" />

        <div className="text-left">
          <h3 className="text-3xl font-bold text-indigo-700 mb-6">Technologies We Use</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Next.js, React.js, and Vite for frontend development</li>
            <li>Headless CMS like Sanity and Contentful</li>
            <li>SEO tools like Ahrefs, SEMrush, and Google Lighthouse</li>
            <li>Analytics: GA4, Hotjar, Segment</li>
            <li>Full eCommerce stacks: Shopify, Stripe, Klaviyo</li>
          </ul>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-indigo-700 mb-6 text-left">Recent Case Study</h3>
          <div className="bg-white rounded-xl shadow-lg p-6 text-left">
            <h4 className="text-xl font-semibold text-indigo-600 mb-2">Brand X Redesign</h4>
            <p className="text-sm mb-2">
              We helped Brand X launch a new website in under 4 weeks that improved mobile conversions by 32% and decreased bounce rates by 48%.
            </p>
            <p className="text-sm text-gray-600">Tools used: Tailwind, Next.js, Shopify, GA4</p>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-indigo-700 mb-6 text-left">Why Us?</h3>
          <table className="w-full text-sm text-left border-collapse border border-gray-300">
            <thead>
              <tr className="bg-indigo-200 text-indigo-800">
                <th className="px-4 py-2 border border-gray-300">Feature</th>
                <th className="px-4 py-2 border border-gray-300">Mowoo Media</th>
                <th className="px-4 py-2 border border-gray-300">Traditional Agency</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="px-4 py-2 border border-gray-300">Mobile Optimization</td>
                <td className="px-4 py-2 border border-gray-300">✅</td>
                <td className="px-4 py-2 border border-gray-300">⚠️</td>
              </tr>
              <tr className="bg-indigo-50">
                <td className="px-4 py-2 border border-gray-300">Conversion-Focused</td>
                <td className="px-4 py-2 border border-gray-300">✅</td>
                <td className="px-4 py-2 border border-gray-300">❌</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-2 border border-gray-300">Turnaround Time</td>
                <td className="px-4 py-2 border border-gray-300">2-4 weeks</td>
                <td className="px-4 py-2 border border-gray-300">6-12 weeks</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default WebsitesSection;
