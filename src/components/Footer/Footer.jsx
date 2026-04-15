import "./Footer.css";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import FootLogo from '../../assets/images/logo.svg'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="as-footer" role="contentinfo">
      <div className="as-footer-container">

        {/* Brand */}
        <section className="as-footer-col">
          <div className="as-footer-logo-box">
            <img src={FootLogo} alt="Armex Solutions Logo" />
          </div>
          <p className="as-footer-tagline">
            ARMEX SOLUTIONS is a globally trusted provider of precision-engineered, buildable, and code-compliant rebar detailing services, empowering construction teams to deliver structurally sound and efficient projects worldwide.
          </p>
        </section>

        {/* Services */}
        <nav className="as-footer-col">
          <h3 className="as-footer-heading">Services</h3>
          <ul className="as-footer-list">
            <li>BIM-Driven 3D Rebar Modelling</li>
            <li>Precision 2D Reinforcement Detailing & Shop Drawings</li>
            <li>Optimized Bar Bending Schedules (BBS)</li>
            <li>Model-Based Rebar Estimation & Quantity Intelligence</li>
            <li>Integrated GA Drawings & Structural Coordination</li>
            <li>Site Support & Reinforcement Reconciliation</li>
          </ul>
        </nav>

        {/* Quick Links */}
        <nav className="as-footer-col">
          <h3 className="as-footer-heading">Quick Links</h3>
          <ul className="as-footer-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/career">Careers</Link></li>
          </ul>
        </nav>

        {/* Contact */}
        <section className="as-footer-col">
          <h3 className="as-footer-heading">Contact</h3>
          <address className="as-footer-contact">
            <p>India · Global Delivery</p>
            <p><a href="mailto:admin@armexsolution.com">admin@armexsolution.com</a></p>
            <p><a href="tel:+919876543210">+91 93427 61828</a></p>
          </address>
          {/* ADDED: Get in Touch button with 24/7 support */}
          <button className="as-footer-cta-button">
            Get in Touch <span className="as-footer-cta-support">24/7 Support</span>
          </button>
        </section>

      </div>

      {/* Bottom */}
      <div className="as-footer-bottom">
        <p>© {year} ARMEX SOLUTIONS. All Rights Reserved.</p>

        <div className="as-footer-social">
          <a href="https://www.linkedin.com/company/carrezza-global-solutions/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://www.instagram.com/cgs__official__" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>

        <div className="as-footer-bottom-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span>|</span>
          <Link to="/terms-and-conditions">Terms</Link>
          <span>|</span>
          <Link to="/sitemap">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;