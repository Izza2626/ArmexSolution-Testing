import React from "react";
import "./OurPresence.css";
import AboutMap from '../../../assets/images/About/AboutMap.png'

const OurPresence = ({ mapImage }) => {
  const certifications = [
    { name: "UK" },
    { name: "USA" },
    { name: "UAE" },
    { name: "KSA" },
    { name: "INDIA" },
  ];

  // Default stylish world map image (high-res illustration)
  const defaultMapImage = AboutMap;
  const imageSrc = mapImage || defaultMapImage;

  return (
    <section className="op-section">
      <div className="op-container">

        {/* Header */}
        <div className="op-header">
          <span className="op-subtitle">GLOBAL PRESENCE</span>
          <h2 className="op-title">
            Serving <span>International Markets</span>
          </h2>
        </div>

        {/* Stylish Map Image with Animations & Effects */}
        <div className="op-map-real">
          <div className="op-map-image-wrapper">
            <img
              src={imageSrc}
              alt="Stylish world map showing global presence"
              className="op-map-image"
              loading="lazy"
            />
          </div>
          {/* Scanning beam effect overlay for "real functioning" feel */}
          <div className="op-scan-overlay"></div>
        </div>

        {/* Certifications */}
        <div className="op-cert-simple">
          {certifications.map((cert, index) => (
            <div key={index} className="op-cert-badge">
              <span>{cert.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurPresence;