import React from 'react';
import { FiUsers, FiAward, FiTrendingUp, FiArrowDown } from 'react-icons/fi';
import './CareerHero.css';

const CareerHero = () => {
  return (
    <section className="ch-career-hero">
      {/* Background Image */}
      <div className="ch-hero-bg">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Team collaboration at ARMEX Solutions"
        />
        <div className="ch-hero-overlay"></div>
      </div>

      <div className="ch-hero-container">
        
        {/* Content */}
        <div className="ch-hero-content">
          <span className="ch-hero-subtitle">JOIN OUR TEAM</span>
          <h1 className="ch-hero-title">
            Build Your <span>Career</span> With Us
          </h1>
          <p className="ch-hero-desc">
            Be part of a team that delivers precision engineering solutions to global construction projects.
            We're always looking for talented individuals to grow with us.
          </p>
          
          {/* Stats */}
          <div className="ch-hero-stats">
            <div className="ch-stat-item">
              <FiUsers className="ch-stat-icon" />
              <div>
                <span className="ch-stat-value">50+</span>
                <span className="ch-stat-label">Team Members</span>
              </div>
            </div>
            <div className="ch-stat-item">
              <FiAward className="ch-stat-icon" />
              <div>
                <span className="ch-stat-value">10+</span>
                <span className="ch-stat-label">Years Experience</span>
              </div>
            </div>
            <div className="ch-stat-item">
              <FiTrendingUp className="ch-stat-icon" />
              <div>
                <span className="ch-stat-value">100%</span>
                <span className="ch-stat-label">Growth</span>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="ch-scroll-indicator">
            <span>Upload Your CV</span>
            <FiArrowDown className="ch-scroll-icon" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default CareerHero;