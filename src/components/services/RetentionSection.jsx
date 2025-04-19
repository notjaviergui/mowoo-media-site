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
          className="text-5xl font-bold mb-6"
        >
          Smarter Retention = More Revenue
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl mb-12 max-w-3xl mx-auto"
        >
          We turn one-time buyers into loyal customers with smart, automated retention systems that drive results—email, SMS, iMessage, and beyond.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-white text-black p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 text-indigo-700">Email Automations</h3>
            <p className="text-base">
              Welcome emails, abandoned carts, and post-purchase flows—automated and personalized to convert.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-white text-black p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 text-indigo-700">SMS & iMessage</h3>
            <p className="text-base">
              Real-time messages delivered where your customers pay attention. Short, smart, and perfectly timed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="bg-white text-black p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 text-indigo-700">Smart Funnels</h3>
            <p className="text-base">
              From first click to long-term loyalty. Our funnel systems guide customers every step of the way.
            </p>
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-4"
          >
            <h3 className="text-3xl font-bold text-white">Next-Gen Funnel Tech</h3>
            <p className="text-lg text-white/80">
              We use AI, real-time behavior tracking, and journey mapping to build smarter funnels that feel personal and convert better.
            </p>
            <ul className="text-white/70 list-disc list-inside text-base space-y-1 mt-4">
              <li>AI-powered segmentation</li>
              <li>Live performance optimization</li>
              <li>Smart send-time predictions</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src="/Images/funneltech.png"
              alt="Explainer graphic of funnel dashboard"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src="/Images/conductor.png"
              alt="Automation Orchestration Graphic"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-4"
          >
            <h3 className="text-3xl font-bold text-white">Omnichannel Automation Orchestration</h3>
            <p className="text-lg text-white/80">
              We sync emails, SMS, iMessage, and ads to feel like one conversation—not four. Automated, yet personal.
            </p>
            <ul className="text-white/70 list-disc list-inside text-base space-y-1 mt-4">
              <li>Unified automations across tools</li>
              <li>Behavior-based logic flows</li>
              <li>Built for Shopify, Klaviyo, Meta, and more</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RetentionSection;
