import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCode,
  faRocket,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/components/Hero.scss";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-pattern"></div>
        <div className="hero-gradient"></div>
      </div>
      <div className="container hero-container">
        <div className={`hero-content ${isVisible ? "visible" : ""}`}>
          <div className="hero-badge">
            <span>Parceira VTEX</span>
          </div>
          <h1>
            Transforme seu negócio digital com{" "}
            <span className="highlight">soluções de alto impacto</span>
          </h1>
          <p>
            Desenvolvimento de e-commerces especializado em performance,
            conversão e experiência do usuário. Parceira VTEX, Wake e Deco.
          </p>
          <div className="hero-features">
            <div className="feature">
              <FontAwesomeIcon icon={faCode} />
              <span>Desenvolvimento Moderno</span>
            </div>
            <div className="feature">
              <FontAwesomeIcon icon={faRocket} />
              <span>Performance Otimizada</span>
            </div>
            <div className="feature">
              <FontAwesomeIcon icon={faChartLine} />
              <span>Alta Conversão</span>
            </div>
          </div>
          <div className="hero-cta">
            <a href="#contato" className="btn btn-primary">
              Fale com um especialista
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
        <div className={`hero-visual ${isVisible ? "visible" : ""}`}>
          <div className="hero-cards">
            <div className="tech-card vtex">
              <div className="card-icon">
                <img src="/vtex-icon.svg" alt="VTEX" />
              </div>
              <span>VTEX</span>
            </div>
            <div className="tech-card deco">
              <div className="card-icon">
                <img src="/deco-icon.svg" alt="Deco" />
              </div>
              <span>Deco</span>
            </div>
            <div className="tech-card react">
              <div className="card-icon">
                <FontAwesomeIcon icon={faCode} />
              </div>
              <span>React</span>
            </div>
          </div>
          <div className="hero-illustration">
            <div className="illustration-wrapper">
              <div className="code-window">
                <div className="window-header">
                  <div className="window-buttons">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="window-title">main.tsx</div>
                </div>
                <div className="window-content">
                  <pre>
                    <code>
                      <span className="code-comment">
                        {"// Transformando ideias em código"}
                      </span>
                      {"\n"}
                      <span className="code-keyword">{"const"}</span>{" "}
                      <span className="code-function">{"createEcommerce"}</span>
                      {" = () => {\n"}
                      {"  "}
                      <span className="code-keyword">{"return"}</span>
                      {" {\n"}
                      {"    "}performance:{" "}
                      <span className="code-string">{'"otimizada"'}</span>,
                      {"\n"}
                      {"    "}design:{" "}
                      <span className="code-string">{'"moderno"'}</span>,{"\n"}
                      {"    "}conversao:{" "}
                      <span className="code-string">{'"maximizada"'}</span>
                      {"\n"}
                      {"  }\n"}
                      {"}"};
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
