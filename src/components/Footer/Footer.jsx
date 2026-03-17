import "./Footer.css";
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="as-footer" role="contentinfo">
      <div className="as-footer-container">

        {/* Brand */}
        <section className="as-footer-col" aria-labelledby="as-footer-brand">
          <h2 id="as-footer-brand" className="as-footer-logo">
            ARMEX SOLUTIONS
          </h2>
          <p className="as-footer-tagline">
              ARMEX SOLUTIONS is a premier provider of accurate, constructible, and code-compliant 
              rebar detailing services for global construction projects. 
          </p>
        </section>

        {/* Services */}
        <nav className="as-footer-col" aria-labelledby="as-footer-services">
          <h3 id="as-footer-services" className="as-footer-heading">
            Services
          </h3>
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
        <nav className="as-footer-col" aria-labelledby="as-footer-links">
          <h3 id="as-footer-links" className="as-footer-heading">
            Quick Links
          </h3>
          <ul className="as-footer-list">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </nav>

        {/* Contact */}
        <section className="as-footer-col" aria-labelledby="as-footer-contact">
          <h3 id="as-footer-contact" className="as-footer-heading">
            Contact
          </h3>
          <address className="as-footer-contact">
            <p>India · Global Delivery</p>
            <p><a href="mailto:info@teamcarrezza.com">admin@armexsolution.com</a></p>
            <p><a href="tel:+919876543210">+91 98765 43210</a></p>
            <p>Monday – Friday | 1:00 PM – 4:00 AM (US, UK)</p>
          </address>
        </section>

      </div>

      {/* Bottom Bar */}
      <div className="as-footer-bottom">
        <p>© {year} CARREZZA GLOBAL SOLUTIONS. All Rights Reserved.</p>

        <div className="as-footer-social" aria-label="Social media links">
          <a href="https://www.linkedin.com/company/carrezza-global-solutions/" aria-label="CARREZZA on LinkedIn"><FaLinkedinIn /></a>
          <a href="https://www.instagram.com/cgs__official__?igsh=MWR5aWZobGoxNnluNw==" aria-label="CARREZZA on Instagram"><FaInstagram /></a>
          {/* <a href="#" aria-label="CARREZZA on WhatsApp"><FaWhatsapp /></a> */}
        </div>

        <div className="as-footer-bottom-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <span>|</span>
          <a href="/terms-and-conditions">Terms</a>
          <span>|</span>
          <a href="/sitemap">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;