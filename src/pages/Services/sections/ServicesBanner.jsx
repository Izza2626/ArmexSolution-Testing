import React from "react";
import { FiCheckCircle, FiArrowRight, FiTrendingUp, FiShield, FiCpu, FiUsers, FiGlobe, FiClock } from "react-icons/fi";
import "./ServicesBanner.css";

const ServicesBanner = () => {
  const expertiseItems = [
    { icon: <FiTrendingUp />, title: "Engineering Expertise", color: "#C9A22D" },
    { icon: <FiShield />, title: "Accuracy & Quality", color: "#0F766E" },
    { icon: <FiCpu />, title: "BIM Technology", color: "#C9A22D" },
    { icon: <FiUsers />, title: "Client-Centric", color: "#0F766E" },
    { icon: <FiClock />, title: "Reliable Delivery", color: "#C9A22D" },
    { icon: <FiGlobe />, title: "Global Experience", color: "#0F766E" },
  ];

  return (
    <section className="sb-section">
      <div className="sb-container">
        
        {/* Left Content */}
        <div className="sb-content">
          <span className="sb-subtitle">✦ WHO WE ARE ✦</span>
          <h2 className="sb-title">
            Reliable Rebar Detailing <span>Solutions Worldwide</span>
          </h2>
          
          <p className="sb-desc">
            We combine engineering expertise, advanced BIM technology, and a strong commitment 
            to deliver reliable rebar detailing solutions for construction projects worldwide. 
            Our team focuses on producing accurate, clash-free and buildable reinforcement 
            drawings that support efficient fabrication and smooth on-site installation.
          </p>

          <p className="sb-desc-secondary">
            With a client-centric approach, structured workflows, and rigorous quality control, 
            we ensure timely project delivery while maintaining the highest standards of 
            detailing accuracy and coordination.
          </p>
          
          {/* Expertise Grid - 6 items */}
          <div className="sb-expertise-grid">
            {expertiseItems.map((item, index) => (
              <div key={index} className="sb-expertise-item">
                <div className="sb-expertise-icon" style={{ background: `${item.color}15`, color: item.color }}>
                  {item.icon}
                </div>
                <span>{item.title}</span>
              </div>
            ))}
          </div>

          <a href="/contact" className="sb-link">
            Discuss Your Project <FiArrowRight className="sb-link-icon" />
          </a>
        </div>

        {/* Right Image */}
        <div className="sb-image-wrapper">
          <div className="sb-image-card">
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=700&fit=crop" 
              alt="Rebar Detailing Engineering"
              className="sb-image"
            />
            <div className="sb-image-overlay"></div>
            <div className="sb-image-badge">
              <span>20+ Years</span>
              <small>Combined Experience</small>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar - Preserved */}
      <div className="sb-bottom-bar">
        <span>Trusted by contractors and engineers across USA • UK • UAE • KSA • India</span>
      </div>
    </section>
  );
};

export default ServicesBanner;