import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
  HiHome,
  HiInformationCircle,
  HiOutlineCube,
  HiOutlinePhone,
} from "react-icons/hi";
import NavLogo from '../../assets/images/logo.svg'
import "./Navbar.css";

const navLinks = [
  { path: "/",           label: "Home",       icon: <HiHome /> },
  { path: "/about-us",   label: "About Us",   icon: <HiInformationCircle /> },
  { path: "/services",   label: "Services",   icon: <HiOutlineCube /> },
  { path: "/contact-us", label: "Contact Us", icon: <HiOutlinePhone /> },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setMenuOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className="navbar">
      <div className="navbar__inner">

        {/* Logo — left */}
        <Link to="/" className="navbar__logo" aria-label="Armex home">
          <img
            src={NavLogo}
            alt="Armex Business Solutions"
            className="navbar__logo-img"
            width="160"
            height="44"
            loading="eager"
          />
        </Link>

        {/* Desktop nav — right */}
        <nav className="navbar__links" aria-label="Primary navigation">
          {navLinks.map(({ path, label, icon }) => (
            <Link
              key={path}
              to={path}
              className={`navbar__link${location.pathname === path ? " navbar__link--active" : ""}`}
            >
              <span className="navbar__link-icon" aria-hidden="true">{icon}</span>
              {label}
              <span className="navbar__link-bar" aria-hidden="true" />
            </Link>
          ))}
        </nav>

        {/* Hamburger — mobile only */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Gold bottom accent line */}
      <div className="navbar__gold-line" aria-hidden="true" />

      {/* Mobile overlay */}
      <div
        className={`mobile-overlay${menuOpen ? " mobile-overlay--open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <aside className={`mobile-drawer${menuOpen ? " mobile-drawer--open" : ""}`}>
        <nav className="mobile-drawer__nav">
          {navLinks.map(({ path, label, icon }, i) => (
            <Link
              key={path}
              to={path}
              className={`mobile-drawer__link${location.pathname === path ? " mobile-drawer__link--active" : ""}`}
              onClick={() => setMenuOpen(false)}
              style={{ "--i": i }}
            >
              <span className="mobile-drawer__icon" aria-hidden="true">{icon}</span>
              {label}
            </Link>
          ))}
        </nav>
      </aside>
    </header>
  );
};

export default Navbar;