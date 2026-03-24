import React from "react";
import "./OurPresence.css";

const OurPresence = () => {
  const certifications = [
    { name: "ISO 9001:2015" },
    { name: "BS 8666" },
    { name: "ACI 318" },
    { name: "Eurocode 2" }
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
        </div>

        {/* Map with Overlay */}
        <div className="op-map-real">

          <iframe
            title="global-map"
            src="https://www.google.com/maps?q=Middle+East&z=3&output=embed"
            loading="lazy"
          ></iframe>

          <div className="op-map-overlay">

            {/* UAE */}
            <div className="op-map-marker op-uae">
              <span className="op-dot"></span>
              <span className="op-label">UAE</span>
            </div>

            {/* Saudi */}
            <div className="op-map-marker op-ksa">
              <span className="op-dot"></span>
              <span className="op-label">KSA</span>
            </div>

            {/* India */}
            <div className="op-map-marker op-india">
              <span className="op-dot op-dot-hq"></span>
              <span className="op-label">India</span>
            </div>

          </div>
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