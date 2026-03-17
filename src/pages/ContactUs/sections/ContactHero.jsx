import React from "react";
import { FiArrowDown } from "react-icons/fi";
import "./ContactHero.css";

const ContactHero = () => {
  return (
    <section className="c-hero">
      {/* Background with Creative Elements */}
      <div className="c-hero-bg">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Contact ARMEX Solutions"
        />
        <div className="c-hero-overlay"></div>
        
        {/* Creative Floating Shapes */}
        <div className="c-hero-shape c-shape-1"></div>
        <div className="c-hero-shape c-shape-2"></div>
        <div className="c-hero-shape c-shape-3"></div>
      </div>

      <div className="c-hero-container">
        
        {/* Main Title - Centered */}
        <div className="c-hero-title-block">
          <span className="c-hero-subtitle">GET IN TOUCH</span>
          <h1 className="c-hero-title">
            Let's <span>Connect</span>
          </h1>
          <p className="c-hero-desc">
            Ready to discuss your project? We're just a message away.
          </p>
        </div>

        {/* Creative Stats */}
        <div className="c-hero-stats">
          <div className="c-stat">
            <span className="c-stat-number">24/7</span>
            <span className="c-stat-label">Support</span>
          </div>
          <div className="c-stat-divider"></div>
          <div className="c-stat">
            <span className="c-stat-number">2h</span>
            <span className="c-stat-label">Response</span>
          </div>
          <div className="c-stat-divider"></div>
          <div className="c-stat">
            <span className="c-stat-number">100%</span>
            <span className="c-stat-label">Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;