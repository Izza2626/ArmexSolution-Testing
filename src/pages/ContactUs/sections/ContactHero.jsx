import React from "react";
import { FiArrowDown } from "react-icons/fi";
import "./ContactHero.css";
import ContactH from '../../../assets/images/Contact/ContactHero.jpeg'

const ContactHero = () => {
  return (
    <section className="c-hero">
      {/* Background with Creative Elements */}
      <div className="c-hero-bg">
        <img 
          src={ContactH}
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
            <span className="c-stat-number">100%</span>
            <span className="c-stat-label">Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;