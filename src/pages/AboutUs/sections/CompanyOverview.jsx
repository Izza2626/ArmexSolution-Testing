import React, { useEffect, useRef } from "react";
import {
  FiMapPin,
  FiGlobe,
  FiCheckCircle,
  FiAward,
  FiUsers,
  FiClock,
  FiTrendingUp
} from "react-icons/fi";

import "./CompanyOverview.css";

const CompanyOverview = () => {
  const sectionRef = useRef(null);
  const featureRefs = useRef([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("co-animate-in");
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px" }
    );

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="co-section" ref={sectionRef}>
      {/* Animated background elements */}
      <div className="co-bg-circle co-bg-circle-1"></div>
      <div className="co-bg-circle co-bg-circle-2"></div>
      <div className="co-bg-dots"></div>

      <div className="co-container">

        {/* LEFT CONTENT */}
        <div className="co-left co-fade-left">

          <span className="co-badge co-slide-down">ABOUT COMPANY</span>

          <h2 className="co-title">
            Delivering <span>Precision Rebar Detailing</span> Worldwide
          </h2>

          <p className="co-desc co-slide-up">
            Founded in Chennai in 2015, our engineering team provides
            high-precision rebar detailing and BIM coordination services
            for global infrastructure, commercial and residential projects.
          </p>

          {/* Feature List */}
          <div className="co-features">

            <div 
              className="co-feature" 
              ref={el => featureRefs.current[0] = el}
            >
              <FiGlobe className="co-feature-icon" />
              <span>Projects across 15+ countries</span>
            </div>

            <div 
              className="co-feature"
              ref={el => featureRefs.current[1] = el}
            >
              <FiUsers className="co-feature-icon" />
              <span>50+ Skilled Engineers</span>
            </div>

            <div 
              className="co-feature"
              ref={el => featureRefs.current[2] = el}
            >
              <FiCheckCircle className="co-feature-icon" />
              <span>Compliant with ACI, BS & Eurocode</span>
            </div>

            <div 
              className="co-feature"
              ref={el => featureRefs.current[3] = el}
            >
              <FiTrendingUp className="co-feature-icon" />
              <span>500+ Successful Projects</span>
            </div>

          </div>

          {/* Buttons */}
          <div className="co-actions">
            <button className="co-btn-primary">
              <span className="co-btn-text">Contact Us</span>
            </button>

            <div className="co-phone">
              <FiClock className="co-phone-icon" />
              <span>24/7 Support</span>
            </div>
          </div>

        </div>

        {/* RIGHT VISUAL - More Image Movements */}
        <div className="co-right co-fade-right">

          <div className="co-image-stack">

            {/* Main Image - Rotating */}
            <div className="co-img-wrapper co-img-wrapper-main">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                className="co-img-main co-rotate-img"
                ref={el => imageRefs.current[0] = el}
                alt="Rebar detailing work"
              />
            </div>

            {/* Small Image 1 - Bouncing */}
            <div className="co-img-wrapper co-img-wrapper-1">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                className="co-img-small co-img-1 co-bounce-img"
                ref={el => imageRefs.current[1] = el}
                alt="Construction site"
              />
            </div>

            {/* Small Image 2 - Swinging */}
            <div className="co-img-wrapper co-img-wrapper-2">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                className="co-img-small co-img-2 co-swing-img"
                ref={el => imageRefs.current[2] = el}
                alt="Global projects"
              />
            </div>

            {/* Floating Particles around images */}
            <div className="co-particle co-particle-1"></div>
            <div className="co-particle co-particle-2"></div>
            <div className="co-particle co-particle-3"></div>
            <div className="co-particle co-particle-4"></div>

            {/* Experience Card - Pulsing */}
            <div className="co-exp co-exp-pulse">
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>

            {/* Countries - Sliding */}
            <div className="co-countries co-countries-slide">
              <FiMapPin className="co-countries-icon" />
              <span>15+ Countries Served</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CompanyOverview;