import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AIAdCreationSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Generate professional ads in minutes, not days. 10x faster than traditional production."
    },
    {
      icon: "🔄",
      title: "Unlimited Iterations",
      description: "Test hundreds of variations instantly. Find your winning creative without the wait."
    },
    {
      icon: "💰",
      title: "Cost Effective",
      description: "Reduce production costs by 70% while maintaining professional quality standards."
    },
    {
      icon: "🎨",
      title: "Modern Graphics",
      description: "AI-powered visual effects and animations that make your brand stand out."
    },
    {
      icon: "📊",
      title: "Data-Driven",
      description: "Optimize based on real performance data. Every ad is backed by insights."
    },
    {
      icon: "🚀",
      title: "Scalable",
      description: "Create content for multiple platforms simultaneously with consistent branding."
    }
  ];

  const packages = [
    {
      title: '🤖 AI Starter',
      price: '$500+',
      subtitle: 'Perfect for testing AI ad creation',
      features: [
        '5 AI-generated ad variations',
        '2 platform formats',
        'Basic performance analytics',
        '1 revision round',
        'HD delivery',
        '7-day turnaround'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      title: '⚡ AI Pro',
      price: '$1,200+',
      subtitle: 'Advanced AI features for growing brands',
      features: [
        'Everything in AI Starter',
        '15 AI-generated variations',
        'Multi-platform optimization',
        'Advanced analytics dashboard',
        '3 revision rounds',
        'Custom brand training',
        '3-day turnaround'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      title: '🚀 AI Enterprise',
      price: '$2,500+',
      subtitle: 'Full AI suite for established brands',
      features: [
        'Everything in AI Pro',
        'Unlimited AI variations',
        'Custom AI model training',
        'Real-time performance optimization',
        'Dedicated AI specialist',
        'Priority support',
        '24-hour turnaround'
      ],
      cta: 'Contact Us',
      popular: false
    },
    {
      title: '🎯 AI Custom',
      price: 'Contact Us',
      subtitle: 'Bespoke AI solutions for your brand',
      features: [
        'Fully customized AI workflow',
        'Brand-specific AI training',
        'Advanced visual effects',
        'Multi-language support',
        'Ongoing optimization',
        'Dedicated team'
      ],
      cta: 'Contact Us',
      popular: false
    }
  ];

  return (
    <div className="max-w-6xl mx-auto" ref={ref}>
      {/* Hero Section - AI Theme with Glass Effects */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center mb-24 relative"
      >
        {/* AI-themed glass background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/20 via-blue-50/20 to-cyan-50/20 rounded-3xl"></div>
        <div className="absolute inset-0 backdrop-blur-2xl rounded-3xl"></div>
        
        <div className="relative z-10 p-16">
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="text-6xl mb-6"
          >
            🤖
          </motion.div>
          <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight">
            AI Ad <span className="text-purple-600">Creation</span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Revolutionize your ad production with AI. Create high-converting ads in minutes, 
            not days. Unlimited iterations, modern graphics, and data-driven optimization.
          </p>
        </div>
      </motion.div>

      {/* Features Grid - Modern Startup Style */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.9 }}
            transition={{ 
              delay: index * 0.1, 
              duration: 1, 
              ease: "easeOut" 
            }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative"
          >
            {/* Glass card with AI theme */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-purple-50/60 backdrop-blur-xl rounded-3xl border border-purple-200/50 shadow-lg group-hover:shadow-xl transition-all duration-500"></div>
            <div className="relative z-10 p-8">
              <div className="text-5xl mb-6 transition-transform duration-500 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* AI Packages Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
        className="mb-24"
      >
        <div className="text-center mb-16">
          <h3 className="text-5xl font-bold text-gray-900 mb-6">AI Ad Packages</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect AI ad creation package for your brand's needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`relative group ${pkg.popular ? 'lg:scale-105' : ''}`}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}
              
              {/* Glass card with AI theme */}
              <div className={`absolute inset-0 rounded-3xl border shadow-lg group-hover:shadow-xl transition-all duration-500 ${
                pkg.popular 
                  ? 'bg-gradient-to-br from-purple-600/90 to-blue-600/90 border-purple-400/50 group-hover:from-purple-500/95 group-hover:to-blue-500/95' 
                  : 'bg-gradient-to-br from-white/60 to-purple-50/60 border-purple-200/50 group-hover:from-purple-100/80 group-hover:to-blue-100/80 group-hover:border-purple-300/70'
              } backdrop-blur-xl`}></div>
              
              <div className={`relative z-10 p-8 h-full flex flex-col ${
                pkg.popular ? 'text-white' : 'text-gray-900'
              }`}>
                <h4 className="text-2xl font-bold mb-2">{pkg.title}</h4>
                <div className="text-3xl font-bold mb-2">{pkg.price}</div>
                <p className={`text-sm mb-6 ${
                  pkg.popular ? 'text-purple-100' : 'text-gray-600'
                }`}>{pkg.subtitle}</p>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-3 text-purple-400">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 block text-center ${
                    pkg.popular
                      ? 'bg-white/90 text-purple-600 hover:bg-white hover:shadow-lg'
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 hover:shadow-lg hover:shadow-purple-500/25'
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section - AI Theme */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ delay: 1, duration: 1, ease: "easeOut" }}
        className="relative text-center"
      >
        {/* AI-themed glass background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-blue-600/90 backdrop-blur-2xl rounded-3xl shadow-2xl"></div>
        <div className="relative z-10 p-16 text-white">
          <h3 className="text-5xl font-bold mb-8">Ready to Revolutionize Your Ads?</h3>
          <p className="text-xl text-purple-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join the future of ad creation. Generate high-converting ads with AI in minutes, 
            not days. Unlimited iterations, modern graphics, and data-driven optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-white/90 backdrop-blur-xl text-purple-600 px-12 py-6 rounded-3xl text-xl font-semibold hover:bg-white transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl border border-white/50"
            >
              Start with AI
            </Link>
            <Link
              to="/pages/ai-examples"
              className="bg-transparent border-2 border-white/80 text-white px-12 py-6 rounded-3xl text-xl font-semibold hover:bg-white/10 transition-all duration-500 hover:scale-105 backdrop-blur-xl"
            >
              See AI Examples
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
