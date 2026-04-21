import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FiArrowLeft, FiCheckCircle, FiCpu, FiAward, FiUsers, FiClock } from 'react-icons/fi';
import { servicesData, getServiceById } from '../../../data/servicesData';
import SEO from '../../../seo/SEO'
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = getServiceById(serviceId);

  useEffect(() => {
    if (!service) {
      navigate('/services', { replace: true });
    }
    window.scrollTo(0, 0);
  }, [service, navigate, serviceId]);

  if (!service) {
    return null;
  }

  return (
    <>
      <SEO
        title={`${service.title} | ARMEX SOLUTIONS`}
        description={service.description}
        canonical={`https://www.armexsolutions.com/services/${serviceId}`}
      />

      <main className="sd-creative">
        {/* Back Button */}
        <Link to="/services" className="sd-back">
          <FiArrowLeft /> Back
        </Link>

        {/* Hero Section */}
        <div className="sd-hero">
          <div className="sd-hero-bg">
            <img src={service.bgImage} alt={service.title} />
            <div className="sd-hero-overlay"></div>
          </div>
          <div className="sd-hero-content">
            <span className="sd-hero-sub">{service.subtitle}</span>
            <h1 className="sd-hero-title">{service.title}</h1>
            <p className="sd-hero-tagline">{service.tagline}</p>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="sd-stats-strip">
          <div className="sd-stat-item">
            <FiCpu className="sd-stat-icon" />
            <div>
              <span className="sd-stat-value">{service.features.length}</span>
              <span className="sd-stat-label">Features</span>
            </div>
          </div>
          <div className="sd-stat-item">
            <FiAward className="sd-stat-icon" />
            <div>
              <span className="sd-stat-value">{service.standards.length}</span>
              <span className="sd-stat-label">Standards</span>
            </div>
          </div>
          <div className="sd-stat-item">
            <FiUsers className="sd-stat-icon" />
            <div>
              <span className="sd-stat-value">{service.industries.length}</span>
              <span className="sd-stat-label">Industries</span>
            </div>
          </div>
          <div className="sd-stat-item">
            <FiClock className="sd-stat-icon" />
            <div>
              <span className="sd-stat-value">24/7</span>
              <span className="sd-stat-label">Support</span>
            </div>
          </div>
        </div>

        {/* Description Card */}
        <div className="sd-desc-card">
          <p>{service.description}</p>
        </div>

        {/* Features & Benefits Grid */}
        <div className="sd-grid-2col">
          {/* Features */}
          <div className="sd-card">
            <h3 className="sd-card-title">Key Features</h3>
            <ul className="sd-list">
              {service.features.map((feature, index) => (
                <li key={index} className="sd-list-item">
                  <FiCheckCircle className="sd-list-icon" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="sd-card">
            <h3 className="sd-card-title">Benefits</h3>
            <ul className="sd-list">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="sd-list-item">
                  <FiCheckCircle className="sd-list-icon" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Standards & Tools */}
        <div className="sd-grid-2col">
          {/* Standards */}
          <div className="sd-card">
            <h3 className="sd-card-title">Standards</h3>
            <div className="sd-tags">
              {service.standards.map((standard, index) => (
                <span key={index} className="sd-tag">{standard}</span>
              ))}
            </div>
          </div>

          {/* Software */}
          <div className="sd-card">
            <h3 className="sd-card-title">Software</h3>
            <div className="sd-tags">
              {service.software.map((item, index) => (
                <span key={index} className="sd-tag">{item}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Industries */}
        <div className="sd-card sd-card-full">
          <h3 className="sd-card-title">Industries Served</h3>
          <div className="sd-tags">
            {service.industries.map((item, index) => (
              <span key={index} className="sd-tag sd-tag-industry">{item}</span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="sd-cta">
          <h3>Need this service for your project?</h3>
          <Link to="/contact-us" className="sd-cta-btn">
            Contact Us Now
          </Link>
        </div>
      </main>
    </>
  );
};

export default ServiceDetail;