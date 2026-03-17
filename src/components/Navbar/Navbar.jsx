import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  HiOutlineMenuAlt3, 
  HiOutlineX,
  HiHome,
  HiInformationCircle,
  HiOutlineCube,
  HiOutlinePhone
} from "react-icons/hi";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setMenuOpen(false), [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { path: "/", label: "Home", icon: <HiHome /> },
    { path: "/about-us", label: "About Us", icon: <HiInformationCircle /> },
    { path: "/services", label: "Services", icon: <HiOutlineCube /> },
    { path: "/contact-us", label: "Contact Us", icon: <HiOutlinePhone /> }
  ];

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">

          {/* Desktop Logo */}
          <div className="navbar-logo desktop-logo">
            <Link to="/" className="logo-link">
              <img
                src="/logo.svg"
                alt="Armex Business Solutions Logo"
                className="logo-img"
                width="180"
                height="50"
                loading="eager"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="nav-menu nav-menu-right desktop-menu">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
              >
                <span className="nav-icon">{link.icon}</span>
                <span className="nav-label">{link.label}</span>
                <span className="nav-indicator"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            className={`mobile-toggle ${menuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="toggle-icon">
              {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`mobile-menu-overlay ${menuOpen ? "active" : ""}`}
          onClick={closeMenu}
        ></div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
          <div className="mobile-menu-header">
            
            {/* Mobile Logo */}
            <div className="mobile-logo">
              <img
                src="/logo.svg"
                alt="Armex Business Solutions Logo"
                className="logo-img"
                width="150"
                height="42"
              />
            </div>

            <button className="mobile-close" onClick={closeMenu}>
              <HiOutlineX />
            </button>
          </div>

          <nav className="mobile-nav">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`mobile-nav-link ${
                  location.pathname === link.path ? "active" : ""
                }`}
                onClick={closeMenu}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="mobile-nav-icon">{link.icon}</span>
                <span className="mobile-nav-label">{link.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <div className="navbar-spacer"></div>
      <div className="navbar-bottom-line"></div>
    </>
  );
};

export default Navbar;





