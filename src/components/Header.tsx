import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../styles/components/Header.scss";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

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
          <img src="/images/logo.png" alt="adfsolucoesdigital" />
        </Link>

        <button
          className="mobile-menu-btn"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
        >
          <FontAwesomeIcon
            icon={isMenuOpen ? faTimes : faBars}
            aria-hidden="true"
          />
        </button>

        <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li>
              <a href="#home" onClick={() => setIsMenuOpen(false)}>
                Início
              </a>
            </li>
            <li>
              <a href="#servicos" onClick={() => setIsMenuOpen(false)}>
                Serviços
              </a>
            </li>
            <li>
              <a href="#tecnologias" onClick={() => setIsMenuOpen(false)}>
                Tecnologias
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                Contato
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <a
            href="#contact"
            className="contact-btn"
            onClick={() => setIsMenuOpen(false)}
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
