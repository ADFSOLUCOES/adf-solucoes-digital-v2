import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faCode,
  faGaugeHigh,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/components/Hero.scss";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-pattern"></div>
        <div className="hero-gradient"></div>
      </div>
      <div className="hero-container">
        <div className={`hero-content ${isVisible ? "visible" : ""}`}>
          <div className="hero-badge">
            <span>App Features</span>
          </div>
          <h1>Transforme seu negócio digital com soluções de alto impacto</h1>
          <p>
            Desenvolvimento web moderno, otimização de performance e estratégias
            digitais personalizadas para impulsionar seu sucesso online.
          </p>
          <div className="hero-features">
            <div className="feature">
              <FontAwesomeIcon icon={faCode} />
              <span>Desenvolvimento Moderno</span>
            </div>
            <div className="feature">
              <FontAwesomeIcon icon={faGaugeHigh} />
              <span>Performance Otimizada</span>
            </div>
            <div className="feature">
              <FontAwesomeIcon icon={faRocket} />
              <span>Alta Conversão</span>
            </div>
          </div>
          <div className="hero-cta">
            <a href="#contact" className="btn">
              Solicite um Orçamento
              <FontAwesomeIcon icon={faArrowRight} className="icon" />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-cards">
            <div className="tech-card vtex">
              <img src="/images/vtex.png" alt="VTEX" />
            </div>
            <div className="tech-card deco">
              <img src="/images/deco.cx.webp" alt="Deco.cx" />
            </div>
          </div>
          <div className="hero-illustration">
            <div className="code-window">
              <div className="code-header">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
              <div className="code-content">
                <pre>
                  <code>
                    <span className="comment">
                      // Transformando ideias em realidade
                    </span>
                    <br />
                    <span className="keyword">const</span>{" "}
                    <span className="variable">success</span>{" "}
                    <span className="operator">=</span>{" "}
                    <span className="keyword">async</span> () {"=> {"}
                    <br />
                    {"  "}
                    <span className="keyword">await</span>{" "}
                    <span className="function">transform</span>({"{"}
                    <br />
                    {"    "}idea: <span className="string">"seu negócio"</span>,
                    <br />
                    {"    "}into:{" "}
                    <span className="string">"sucesso digital"</span>
                    <br />
                    {"  }"});
                    <br />
                    {"}"};
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
