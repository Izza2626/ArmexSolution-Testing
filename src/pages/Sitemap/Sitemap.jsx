import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../seo/SEO'; // ✅ SEO IMPORT

import { 
  FiHome, 
  FiInfo, 
  FiTool, 
  FiMail, 
  FiShield, 
  FiFileText,
  FiGrid,
  FiBox,
  FiLayers,
  FiPieChart,
  FiMap,
  FiArrowRight
} from 'react-icons/fi';
import './Sitemap.css';

const Sitemap = () => {

  const lastUpdated = new Date(Date.now() - 15 * 24 * 60 * 60 * 1000)
  .toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  })
  .toUpperCase();

  const sitemapData = [
    {
      category: "Main Pages",
      icon: <FiHome />,
      links: [
        { path: "/", label: "Home", description: "Global experts in rebar detailing and BIM coordination" },
        { path: "/about-us", label: "About Us", description: "Chennai-based. Globally trusted." },
        { path: "/services", label: "Services", description: "Professional rebar detailing solutions" },
        { path: "/contact-us", label: "Contact", description: "Get in touch with our team" }
      ]
    },
    {
      category: "Services",
      icon: <FiTool />,
      links: [
        { path: "/services/3d-rebar-modelling", label: "3D Rebar Modelling", description: "Intelligent 3D reinforcement models" },
        { path: "/services/2d-reinforcement-detailing", label: "2D Shop Drawings", description: "Fabrication-ready reinforcement drawings" },
        { path: "/services/bar-bending-schedules", label: "Bar Bending Schedules", description: "Accurate BBS with shape codes" },
        { path: "/services/rebar-estimation", label: "Rebar Estimation", description: "Precise quantity takeoffs" },
        { path: "/services/general-arrangement-drawings", label: "GA Drawings", description: "General arrangement drawings" },
        { path: "/services/site-support-reconciliation", label: "Site Support", description: "Technical support and reconciliation" }
      ]
    },
    {
      category: "Legal",
      icon: <FiShield />,
      links: [
        { path: "/privacy-policy", label: "Privacy Policy", description: "How we protect your data" },
        { path: "/terms-conditions", label: "Terms & Conditions", description: "Terms of service agreement" },
        { path: "/sitemap", label: "Sitemap", description: "Site structure and navigation" }
      ]
    }
  ];

  return (
    <>
      {/* ✅ SEO ADDED */}
      <SEO page="sitemap" />

      <section className="sm-section">
        <div className="sm-container">
          
          {/* Header */}
          <div className="sm-header">
            <span className="sm-subtitle">SITE NAVIGATION</span>
            <h1 className="sm-title">
              <span className="sm-title-line">Sitemap</span>
            </h1>
            <p className="sm-desc">
              Explore all pages and sections of ARMEX Solutions India
            </p>
          </div>

          {/* Status Bar */}
          <div className="sm-status-bar">
            <div className="sm-status-item">
              <span className="sm-status-label">TOTAL PAGES</span>
              <span className="sm-status-value">
                {sitemapData.reduce((acc, cat) => acc + cat.links.length, 0)}
              </span>
            </div>
            <div className="sm-status-divider"></div>
            <div className="sm-status-item">
              <span className="sm-status-label">CATEGORIES</span>
              <span className="sm-status-value">{sitemapData.length}</span>
            </div>
            <div className="sm-status-divider"></div>
            <div className="sm-status-item">
              <span className="sm-status-label">LAST UPDATED</span>
              <span className="sm-status-value">{lastUpdated}</span>
            </div>
          </div>

          {/* Sitemap Grid */}
          <div className="sm-grid">
            {sitemapData.map((category, catIndex) => (
              <div key={catIndex} className="sm-category-card">
                <div className="sm-category-header">
                  <span className="sm-category-icon">{category.icon}</span>
                  <h2 className="sm-category-title">{category.category}</h2>
                  <span className="sm-category-count">{category.links.length} pages</span>
                </div>
                
                <div className="sm-links-list">
                  {category.links.map((link, linkIndex) => (
                    <Link 
                      key={linkIndex} 
                      to={link.path} 
                      className="sm-link-item"
                    >
                      <div className="sm-link-content">
                        <span className="sm-link-label">{link.label}</span>
                        <span className="sm-link-desc">{link.description}</span>
                      </div>
                      <FiArrowRight className="sm-link-arrow" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="sm-quick-links">
            <span className="sm-quick-label">Quick jump:</span>
            <div className="sm-quick-items">
              <Link to="/" className="sm-quick-item">Home</Link>
              <Link to="/about-us" className="sm-quick-item">About</Link>
              <Link to="/services" className="sm-quick-item">Services</Link>
              <Link to="/contact-us" className="sm-quick-item">Contact</Link>
              <Link to="/privacy-policy" className="sm-quick-item">Privacy</Link>
              <Link to="/terms-conditions" className="sm-quick-item">Terms</Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Sitemap;