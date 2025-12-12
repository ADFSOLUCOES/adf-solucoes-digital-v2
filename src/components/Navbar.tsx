import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../styles/components/Navbar.scss";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/logo.svg" alt="ADF Soluções Digital" />
        </Link>

        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>

        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          <a href="#about" onClick={closeMenu}>
            Sobre
          </a>
          <a href="#services" onClick={closeMenu}>
            Serviços
          </a>
          <a href="#blog" onClick={closeMenu}>
            Blog
          </a>
          <a href="#contact" onClick={closeMenu} className="cta">
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
