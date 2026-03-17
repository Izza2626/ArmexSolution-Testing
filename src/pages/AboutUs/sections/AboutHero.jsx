import React, { useEffect, useRef } from 'react';
import {
  FiAward,
  FiGlobe,
  FiUsers,
  FiClock,
  FiTool,
  FiHome,
  FiGrid,
  FiActivity,
  FiArrowRight
} from "react-icons/fi";

import "./AboutHero.css";

const AboutHero = () => {
  const statRefs = useRef([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('about-animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    // Observe stats
    statRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Observe cards
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-hero">

      {/* Background with Parallax Effect */}
      <div className="about-hero-bg">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Modern construction site with steel reinforcement - ARMEX Solutions rebar detailing experts"
          className="about-bg-image"
        />
        <div className="about-overlay"></div>
        
        {/* Animated Particles */}
        <div className="about-particles">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="about-particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}></div>
          ))}
        </div>
      </div>

      <div className="about-wrapper">

        {/* LEFT SIDE */}
        <div className="about-left about-fade-in-left">

          <div className="about-label about-slide-in">
            <span className="about-label-line"></span>
            <span className="about-label-text">GLOBAL REBAR DETAILING EXPERTS</span>
          </div>

          <h1 className="about-heading">
            <span className="about-heading-line about-heading-line-1">Engineering</span>
            <span className="about-heading-line about-heading-line-2 about-text-gold">Precision Structures</span>
            <span className="about-heading-line about-heading-line-3">Worldwide</span>
          </h1>

          <p className="about-desc about-slide-in">
            Precision-driven reinforcement detailing and BIM coordination
            supporting infrastructure and structural projects worldwide.
          </p>

          <button className="about-btn about-slide-in">
            <span className="about-btn-text">Explore Our Journey</span>
            <FiArrowRight className="about-btn-icon" />
            <span className="about-btn-glare"></span>
          </button>

          {/* STATS GRID */}
          <div className="about-stats">
            {[
              { icon: FiAward, value: '10+', label: 'Years', delay: 0.1 },
              { icon: FiGlobe, value: '15+', label: 'Countries', delay: 0.2 },
              { icon: FiUsers, value: '500+', label: 'Projects', delay: 0.3 },
              { icon: FiClock, value: '24/7', label: 'Support', delay: 0.4 }
            ].map((stat, index) => (
              <div 
                key={index}
                className="about-stat about-stat-hover"
                ref={el => statRefs.current[index] = el}
                style={{ animationDelay: `${stat.delay}s` }}
              >
                <stat.icon className="about-stat-icon" />
                <div className="about-stat-content">
                  <h3 className="about-stat-value">{stat.value}</h3>
                  <p className="about-stat-label">{stat.label}</p>
                </div>
                <div className="about-stat-glow"></div>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT SIDE - Industry Cards */}
        <div className="about-right about-fade-in-right">
          {[
            { icon: FiTool, title: 'Structural', desc: 'High-rise, bridges, industrial', delay: 0.2 },
            { icon: FiHome, title: 'Residential', desc: 'Apartments, villas, housing', delay: 0.3 },
            { icon: FiGrid, title: 'Commercial', desc: 'Offices, malls, complexes', delay: 0.4 },
            { icon: FiActivity, title: 'Infrastructure', desc: 'Metro, tunnels, ports', delay: 0.5 }
          ].map((card, index) => (
            <div 
              key={index}
              className="about-card about-card-hover"
              ref={el => cardRefs.current[index] = el}
              style={{ animationDelay: `${card.delay}s` }}
            >
              <card.icon className="about-card-icon" />
              <h4 className="about-card-title">{card.title}</h4>
              <p className="about-card-desc">{card.desc}</p>
              <div className="about-card-shine"></div>
              <div className="about-card-border"></div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default AboutHero;