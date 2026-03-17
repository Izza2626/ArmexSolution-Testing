import React from "react";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import "./ServicesBanner.css";

const ServicesBanner = () => {
  return (
    <section className="sb-section">
      <div className="sb-container">
        
        {/* Left Content */}
        <div className="sb-content">
          <span className="sb-subtitle">WHY CHOOSE US</span>
          <h2 className="sb-title">
            Precision Detailing for <span>Global Projects</span>
          </h2>
          <p className="sb-desc">
            Every drawing we deliver is code-compliant, fabrication-ready, and coordinated 
            with BIM workflows to ensure seamless construction execution.
          </p>
          
          {/* Features List */}
          <div className="sb-features">
            <div className="sb-feature">
              <FiCheckCircle className="sb-feature-icon" />
              <span>ACI 318 • BS 8666 • Eurocode 2 • IS Codes</span>
            </div>
            <div className="sb-feature">
              <FiCheckCircle className="sb-feature-icon" />
              <span>500+ Projects Delivered Worldwide</span>
            </div>
            <div className="sb-feature">
              <FiCheckCircle className="sb-feature-icon" />
              <span>50+ Skilled Engineers & Detailers</span>
            </div>
          </div>

          <a href="/contact" className="sb-link">
            Discuss Your Project <FiArrowRight className="sb-link-icon" />
          </a>
        </div>

        {/* Right Stats Cards */}
        <div className="sb-stats">
          <div className="sb-stat-card">
            <span className="sb-stat-value">10+</span>
            <span className="sb-stat-label">Years Experience</span>
          </div>
          <div className="sb-stat-card">
            <span className="sb-stat-value">15+</span>
            <span className="sb-stat-label">Countries Served</span>
          </div>
          <div className="sb-stat-card">
            <span className="sb-stat-value">500+</span>
            <span className="sb-stat-label">Projects</span>
          </div>
          <div className="sb-stat-card">
            <span className="sb-stat-value">50+</span>
            <span className="sb-stat-label">Team Members</span>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="sb-bottom-bar">
        <span>Trusted by contractors and engineers across USA • UK • UAE • KSA • India</span>
      </div>
    </section>
  );
};

export default ServicesBanner;