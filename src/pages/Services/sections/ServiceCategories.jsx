import React from "react";
import { Link } from "react-router-dom";
import { 
  FiBox, 
  FiLayers, 
  FiGrid, 
  FiPieChart, 
  FiMap, 
  FiTool, 
  FiArrowRight,
  FiClock,
  FiCheckCircle
} from "react-icons/fi";
import { servicesData } from "../../../data/servicesData";
import "./ServiceCategories.css";

const ServiceCategories = () => {
  // Map icons to services
  const getIcon = (title) => {
    const iconMap = {
      '3D REBAR': <FiBox />,
      '2D SHOP': <FiLayers />,
      'BAR BENDING': <FiGrid />,
      'REBAR': <FiPieChart />,
      'GA': <FiMap />,
      'SITE': <FiTool />
    };
    return iconMap[title] || <FiBox />;
  };

  // Map stats based on service
  const getStats = (title) => {
    const statsMap = {
      '3D REBAR': '200+ projects',
      '2D SHOP': '500+ drawings',
      'BAR BENDING': '100% accuracy',
      'REBAR': '98% accuracy',
      'GA': 'All projects',
      'SITE': '24/7 support'
    };
    return statsMap[title] || 'Featured service';
  };

  return (
    <section className="sc-section">
      {/* Background Pattern */}
      <div className="sc-pattern"></div>

      <div className="sc-container">
        
        {/* Header */}
        <div className="sc-header">
          <span className="sc-subtitle">OUR SERVICES</span>
          <h2 className="sc-title">
            Comprehensive <span>Rebar Detailing</span> Solutions
          </h2>
          <p className="sc-desc">
            End-to-end reinforcement detailing services backed by BIM technology and international standards
          </p>
        </div>

        {/* Categories Grid */}
        <div className="sc-grid">
          {servicesData.map((service) => (
            <Link 
              to={`/services/${service.id}`}
              key={service.id}
              className="sc-card"
              style={{ '--card-color': '#C9A22D' }}
            >
              {/* Card Image */}
              <div className="sc-card-image">
                <img src={service.cardImage} alt={service.title} />
                <div className="sc-image-overlay"></div>
              </div>

              {/* Card Content */}
              <div className="sc-card-content">
                <div className="sc-card-icon">{getIcon(service.title)}</div>
                <h3 className="sc-card-title">
                  {service.title} <span>{service.subtitle}</span>
                </h3>
                <p className="sc-card-desc">{service.shortDesc}</p>
                
                {/* Card Stats */}
                <div className="sc-card-stats">
                  <FiClock className="sc-stats-icon" />
                  <span>{getStats(service.title)}</span>
                </div>

                {/* Card Footer */}
                <div className="sc-card-footer">
                  <span className="sc-card-link">
                    Learn More <FiArrowRight className="sc-link-icon" />
                  </span>
                  <div className="sc-card-shine"></div>
                </div>
              </div>

              {/* Card Badge */}
              <div className="sc-card-badge">
                <FiCheckCircle />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="sc-cta">
          <p>Need a custom solution for your project?</p>
          <Link to="/contact" className="sc-cta-btn">
            Contact Our Experts <FiArrowRight />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServiceCategories;