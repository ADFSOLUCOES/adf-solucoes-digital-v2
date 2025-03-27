import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/components/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <Link to="/" className="footer-logo">
              <img src="/images/logo.png" alt="ADF Soluções" />
            </Link>
            <p className="footer-description">
              Transformando negócios através de soluções digitais inovadoras.
              Especialistas em desenvolvimento de e-commerce de alto impacto.
            </p>
            <div className="footer-social">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>

          <nav className="footer-nav">
            <ul>
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
              <li>
                <Link to="/contato">Contato</Link>
              </li>
            </ul>
          </nav>

          <div className="footer-contact">
            <a href="mailto:contato@adfsolucoes.com">contato@adfsolucoes.com</a>
            <a href="tel:+551199999999">+55 (11) 9999-9999</a>
            <p>São Paulo, SP</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 ADF Soluções. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
