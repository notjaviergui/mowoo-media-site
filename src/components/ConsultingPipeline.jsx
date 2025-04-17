import React, { useEffect, useRef, useState } from "react";
import "./ConsultingPipeline.css";

const pipelineSteps = [
  {
    side: "left",
    icon: "🎥",
    title: "Media Creation",
    subtitle: "Capture high-quality content",
    description: "We handle your video and photo production in-house, ensuring your brand looks its best.",
  },
  {
    side: "right",
    icon: "🧠",
    title: "Strategy & Funnel",
    subtitle: "Plan with precision",
    description: "We design data-backed strategies and funnels tailored to your target audience and business model.",
  },
  {
    side: "left",
    icon: "💰",
    title: "Sales Conversion",
    subtitle: "Convert engagement into revenue",
    description: "We connect media and marketing with sales automation to drive actual business results.",
  },
];

const ConsultingPipeline = () => {
  const sectionRef = useRef(null);
  const [isPinned, setIsPinned] = useState(false);
  const stepRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPinned(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      stepRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className={`consulting-pipeline ${isPinned ? "pinned" : ""}`} ref={sectionRef}>
      <h2 className="pipeline-title">Our Consulting Pipeline</h2>
      <div className="pipeline-viewport">
        <div className="pipeline-container">
          <div className="vertical-line" />
          {pipelineSteps.map((step, index) => (
            <div
              key={index}
              className={`pipeline-step ${step.side}`}
              ref={(el) => (stepRefs.current[index] = el)}
            >
              <div className="step-icon">{step.icon}</div>
              <div className="step-content">
                <div className="step-title">{step.title}</div>
                <div className="step-subtitle">{step.subtitle}</div>
                <div className="step-description">{step.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConsultingPipeline;
