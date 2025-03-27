import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../contexts/ThemeContext";
import "../styles/components/Header.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="/images/logo.png" alt="ADF Soluções" />
        </Link>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>

        <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li>
              <Link to="/servicos">Serviços</Link>
            </li>
            <li>
              <Link to="/tecnologias">Tecnologias</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/cases">Cases</Link>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          {/* <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Ativar modo claro" : "Ativar modo escuro"}
          >
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
          </button> */}
          <Link to="/contato" className="contact-btn">
            Fale Conosco
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
