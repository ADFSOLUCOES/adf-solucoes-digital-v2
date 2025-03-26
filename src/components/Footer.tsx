import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/components/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-description">
            <p>
              Transformando negócios através de soluções digitais inovadoras.
              Especialistas em desenvolvimento de e-commerce de alto impacto.
            </p>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>

          <nav className="footer-nav">
            <a href="#servicos">Serviços</a>
            <a href="#tecnologias">Tecnologias</a>
            <a href="#sobre">Sobre</a>
            <a href="#cases">Cases</a>
            <a href="#contato">Contato</a>
          </nav>

          <div className="footer-contact">
            <a href="mailto:contato@adfsolucoes.com">contato@adfsolucoes.com</a>
            <a href="tel:+551199999999">+55 (11) 9999-9999</a>
            <span>São Paulo, SP</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} ADF Soluções. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
