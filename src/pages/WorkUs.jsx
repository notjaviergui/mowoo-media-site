import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './WorkUs.css';

export default function WorkUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const location = useLocation();
  const [project, setProject] = useState(location.state?.project || '');
  const [budget, setBudget] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [showSecondInput, setShowSecondInput] = useState(false);
  const [showThirdInput, setShowThirdInput] = useState(false);
  const [showTextarea, setShowTextarea] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://formspree.io/f/xnnpllly", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, project, budget }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Form error:", err);
    }
  };

  const nextStep = () => setFormStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setFormStep((prev) => Math.max(prev - 1, 1));

  return (
    <section className="relative bg-black text-white font-sans pt-32 pb-16 px-6 md:px-16 min-h-screen">
      <img
        src="/assets/vector.png"
        alt="decorative background 1"
        className="absolute top-10 left-10 w-32 h-32 opacity-20 animate-spin-slow"
      />
      <img
        src="/assets/vector.png"
        alt="decorative background 2"
        className="absolute bottom-10 right-10 w-48 h-48 opacity-20 animate-spin-slow"
      />
      <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-white tracking-tight" style={{ fontFamily: 'Suarte, serif' }}>
        Ready to get to work?
      </h1>
      {submitted ? (
        <>
          <div className="text-center text-2xl font-semibold relative z-10">
            Thank you for your submission!
          </div>
          <div className="confetti absolute inset-0 pointer-events-none z-0">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} />
            ))}
          </div>
        </>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2 mb-6">
            <h2 className="text-3xl font-bold text-white">Let’s start your project</h2>
            <p className="text-[#cbd5e1]">Just a few questions to understand your goals better.</p>
          </div>
          {formStep === 1 && (
            <>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (e.target.value.trim()) setShowSecondInput(true);
                }}
                placeholder="What's your best email?"
                className="w-full px-4 py-3 rounded-full text-black bg-[#f5f5f5] border border-gray-400 focus:ring-2 focus:ring-blue-500"
                required
              />
              {showSecondInput && (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (e.target.value.trim()) setShowThirdInput(true);
                  }}
                  placeholder="Your full name?"
                  className="w-full px-4 py-3 rounded-full text-black bg-[#f5f5f5] border border-gray-400 focus:ring-2 focus:ring-blue-500"
                  required
                />
              )}
              {showThirdInput && (
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="What’s your company called?"
                  className="w-full px-4 py-3 rounded-full text-black bg-[#f5f5f5] border border-gray-400 focus:ring-2 focus:ring-blue-500"
                  required
                />
              )}
            </>
          )}

          {formStep === 2 && (
            <>
              <input
                type="text"
                value={budget}
                onChange={(e) => {
                  setBudget(e.target.value);
                  if (e.target.value.trim()) setShowTextarea(true);
                }}
                placeholder="What kind of budget are you working with?"
                className="w-full px-4 py-3 rounded-full text-black bg-[#f5f5f5] border border-gray-400 focus:ring-2 focus:ring-blue-500"
                required
              />
              {showTextarea && (
                <textarea
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                  placeholder="Tell us about your project goals or dreams…"
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg text-black bg-[#f5f5f5] border border-gray-400 focus:ring-2 focus:ring-blue-500"
                  required
                />
              )}
            </>
          )}

          {formStep === 3 && (
            <div className="bg-gray-900 bg-opacity-80 p-8 rounded-xl shadow-lg text-center text-lg font-medium">
              Please confirm your details and hit Submit.
            </div>
          )}

          <div className="flex justify-between items-center pt-4">
            {formStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-700 text-white px-6 py-2 rounded-full hover:scale-105 transition"
              >
                Back
              </button>
            )}
            {formStep < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-6 py-2 rounded-full hover:scale-105 transition"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="bg-gradient-to-r from-[#6366f1] via-[#3b82f6] to-[#06b6d4] text-white px-6 py-2 rounded-full hover:scale-105 transition relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                <span className="relative z-10">Submit</span>
              </button>
            )}
          </div>
        </form>
      )}
      <div className="text-center text-xl font-medium mt-12 text-white">hello@moowomedia.com</div>
      
    </section>
  );
}