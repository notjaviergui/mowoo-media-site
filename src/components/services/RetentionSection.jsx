import React from "react";
import { motion } from "framer-motion";

const RetentionSection = () => {
  return (
    <section className="bg-gradient-to-b from-indigo-500 to-indigo-700 text-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Retention That Drives Revenue
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl mb-12 max-w-3xl mx-auto"
        >
          We build strategic retention systems that turn one-time buyers into lifelong customers. From automated SMS campaigns to segmented email flows, our retention stack maximizes LTV at every touchpoint.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-white text-black p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-indigo-700">Email Automations</h3>
            <p className="text-sm">
              Build custom flows that nurture your audience, including welcome sequences, cart abandonment, and post-purchase emails. All behavior-based, beautifully designed, and conversion optimized.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-white text-black p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-indigo-700">SMS & Blue Text Marketing</h3>
            <p className="text-sm">
              Reach customers where they live — their phone. Our SMS campaigns are engaging, automated, and perfectly timed for conversions. And yes, we do blue text personalization too.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="bg-white text-black p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-indigo-700">Funnels & Customer Journeys</h3>
            <p className="text-sm">
              Map out and optimize the full lifecycle journey—from first purchase to repeat loyalty. Smart funnels, deep segmentation, and data-backed insights ensure we always deliver at the right moment.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RetentionSection;
