import React from "react";
import {
  FiUsers,
  FiAward,
  FiClock,
  FiBriefcase,
  FiCheckCircle
} from "react-icons/fi";

import "./OurTeam.css";

const OurTeam = () => {
  const stats = [
    { icon: <FiUsers />, value: "50+", label: "Team Members" },
    { icon: <FiClock />, value: "10+", label: "Years Experience" },
    { icon: <FiBriefcase />, value: "500+", label: "Projects" },
    { icon: <FiAward />, value: "15+", label: "Experts" }
  ];

  const roles = [
    "Structural Engineers",
    "BIM Coordinators",
    "Rebar Detailers",
    "QA/QC Specialists"
  ];

  return (
    <section className="ot-banner">
      {/* Dark Background */}
      <div className="ot-banner-bg"></div>

      <div className="ot-banner-container">
        
        {/* Left Content */}
        <div className="ot-banner-left">
          <span className="ot-banner-subtitle">OUR TEAM</span>
          <h2 className="ot-banner-title">
            Experienced Professionals
          </h2>
          <p className="ot-banner-desc">
            50+ engineers and detailers with average 10+ years experience in international projects
          </p>
          
          {/* Roles Pills */}
          <div className="ot-roles">
            {roles.map((role, index) => (
              <div key={index} className="ot-role-pill">
                <FiCheckCircle className="ot-role-icon" />
                <span>{role}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Stats */}
        <div className="ot-banner-right">
          {stats.map((stat, index) => (
            <div key={index} className="ot-banner-stat">
              <div className="ot-banner-stat-icon">{stat.icon}</div>
              <div className="ot-banner-stat-content">
                <span className="ot-banner-stat-value">{stat.value}</span>
                <span className="ot-banner-stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="ot-bottom-bar">
        <FiAward className="ot-bottom-icon" />
        <span>Certified in ISO 9001:2015 • BS 8666 • ACI 318 • Eurocode 2</span>
      </div>
    </section>
  );
};

export default OurTeam;