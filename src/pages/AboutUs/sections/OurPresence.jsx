import React, { useEffect, useRef } from "react";
import {
  FiMapPin,
  FiGlobe,
  FiUsers,
  FiClock,
  FiCheckCircle,
  FiAward
} from "react-icons/fi";

import "./OurPresence.css";

const OurPresence = () => {
  const markerRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("op-visible");
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px" }
    );

    markerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const certifications = [
    { name: "ISO 9001:2015", desc: "Quality Management" },
    { name: "BS 8666", desc: "UK Standards" },
    { name: "ACI 318", desc: "US Standards" },
    { name: "Eurocode 2", desc: "European Standards" }
  ];

  return (
    <section className="op-section">
      <div className="op-container">

        {/* Header */}
        <div className="op-header">
          <span className="op-subtitle">GLOBAL PRESENCE</span>
          <h2 className="op-title">
            Serving <span>International Markets</span>
          </h2>
          <p className="op-desc">
            Headquartered in Chennai since 2015, delivering rebar detailing across continents
          </p>
        </div>

        {/* Map Container */}
        <div className="op-map-simple">
          
          {/* World Map Dots */}
          <div className="op-map-minimal">
            
            {/* Markers */}
            <div className="op-markers-simple">
              
              <div className="op-marker-simple op-marker-usa" ref={el => markerRefs.current[0] = el}>
                <span className="op-marker-dot-simple"></span>
                <span className="op-marker-flag-simple">🇺🇸</span>
              </div>

              <div className="op-marker-simple op-marker-uk" ref={el => markerRefs.current[1] = el}>
                <span className="op-marker-dot-simple"></span>
                <span className="op-marker-flag-simple">🇬🇧</span>
              </div>

              <div className="op-marker-simple op-marker-uae" ref={el => markerRefs.current[2] = el}>
                <span className="op-marker-dot-simple"></span>
                <span className="op-marker-flag-simple">🇦🇪</span>
              </div>

              <div className="op-marker-simple op-marker-ksa" ref={el => markerRefs.current[3] = el}>
                <span className="op-marker-dot-simple"></span>
                <span className="op-marker-flag-simple">🇸🇦</span>
              </div>

              <div className="op-marker-simple op-marker-india" ref={el => markerRefs.current[4] = el}>
                <span className="op-marker-dot-simple op-dot-hq"></span>
                <span className="op-marker-flag-simple">🇮🇳</span>
              </div>

            </div>

            {/* Connection Line */}
            <svg className="op-line-simple" viewBox="0 0 400 200">
              <path d="M80,80 L160,60 L240,100 L300,120" stroke="#C9A22D30" strokeWidth="1" strokeDasharray="3,3" fill="none" />
            </svg>

          </div>

          {/* Map Legend */}
          <div className="op-map-legend">
            <div className="op-legend-item">
              <span className="op-legend-dot"></span>
              <span className="op-legend-text">Active Markets</span>
            </div>
            <div className="op-legend-item">
              <span className="op-legend-dot op-dot-hq"></span>
              <span className="op-legend-text">Headquarters</span>
            </div>
          </div>

        </div>

        {/* Stats Row */}
        <div className="op-stats-simple">
          <div className="op-stat-simple">
            <FiClock className="op-stat-simple-icon" />
            <div>
              <span className="op-stat-simple-value">Since 2015</span>
              <span className="op-stat-simple-label">10+ Years</span>
            </div>
          </div>
          <div className="op-stat-simple">
            <FiUsers className="op-stat-simple-icon" />
            <div>
              <span className="op-stat-simple-value">50+</span>
              <span className="op-stat-simple-label">Team Members</span>
            </div>
          </div>
          <div className="op-stat-simple">
            <FiGlobe className="op-stat-simple-icon" />
            <div>
              <span className="op-stat-simple-value">5</span>
              <span className="op-stat-simple-label">Countries</span>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="op-cert-simple">
          {certifications.map((cert, index) => (
            <div key={index} className="op-cert-badge">
              <FiCheckCircle className="op-cert-badge-icon" />
              <span>{cert.name}</span>
            </div>
          ))}
        </div>

        {/* HQ Badge */}
        <div className="op-hq-simple">
          <FiMapPin className="op-hq-simple-icon" />
          <span>Headquarters: <strong>Chennai, India</strong></span>
        </div>

      </div>
    </section>
  );
};

export default OurPresence;