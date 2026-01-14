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
import "../styles/components/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <Link to="/" className="footer-logo">
              <img src="/images/logo.png" alt="adfsolucoesdigital" />
            </Link>
            <p className="footer-description">
              Desenvolvemos soluções digitais sob medida para empresas que
              precisam de sites, e‑commerce, interfaces e sistemas de alta
              performance.
            </p>
            <p className="footer-tagline">
              Tecnologia, clareza e eficiência para transformar projetos em
              realidade.
            </p>
            <div className="footer-social" role="list">
              <a
                href="https://www.facebook.com/adfsolucaodigital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visite nossa página no Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/company/adfsolucoesdigital/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visite nosso perfil no LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedinIn} aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/adfsolucoesdigital/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Siga-nos no Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav className="footer-nav">
            <ul>
              <li>
                <a href="#servicos">Serviços</a>
              </li>
              <li>
                <a href="#tecnologias">Tecnologias</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
              <li>
                <a href="#">Carreiras</a>
              </li>
            </ul>
          </nav>

          <div className="footer-contact">
            <a href="mailto:contato@adfsolucoesdigital.com.br">
              contato@adfsolucoesdigital.com.br
            </a>
            <a href="tel:+5511945239024">+55 (11) 94523-9024</a>
            <p>São Paulo, SP</p>
            <p className="footer-hours">seg a sex, 9h às 18h</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 adfsolucoesdigital. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
