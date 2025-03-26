import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../styles/components/Header.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <a href="/" className="logo">
          ADF Soluções
        </a>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>

        <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li>
              <a href="#servicos">Serviços</a>
            </li>
            <li>
              <a href="#tecnologias">Tecnologias</a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#cases">Cases</a>
            </li>
            <li>
              <a href="#contato" className="contact-btn">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
