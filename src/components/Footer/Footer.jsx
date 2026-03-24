import "./Footer.css";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo2 from '../../../public/logo2.svg' // added

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="as-footer" role="contentinfo">
      <div className="as-footer-container">

        {/* Brand */}
        <section className="as-footer-col">
          <div className="as-footer-logo-box">
            <img src={logo2} alt="Armex Solutions Logo" />
          </div>
          <p className="as-footer-tagline">
            ARMEX SOLUTIONS is a premier provider of accurate, constructible,
            and code-compliant rebar detailing services for global construction projects.
          </p>
        </section>

        {/* Services */}
        <nav className="as-footer-col">
          <h3 className="as-footer-heading">Services</h3>
          <ul className="as-footer-list">
            <li>3d-rebar-modelling</li>
            <li>2d-reinforcement-detailing</li>
            <li>bar-bending-schedules</li>
            <li>rebar-estimation</li>
            <li>general-arrangement-drawings</li>
            <li>site-support-reconciliation</li>
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
            <p><a href="tel:+919876543210">+91 98765 43210</a></p>
            <p>Monday – Friday | 1:00 PM – 4:00 AM (US, UK)</p>
          </address>
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