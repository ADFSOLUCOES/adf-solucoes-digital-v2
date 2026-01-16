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
            <span>🚀 Especializado em E‑commerce</span>
          </div>
          <h1>
            Soluções Web e E‑commerce de Alta Performance para Empresas que Precisam Ir Além
          </h1>
          <p className="hero-subtitle">
            Desenvolvemos e‑commerces, sites e sistemas sob medida com foco em velocidade, performance e experiência do usuário. Atuamos com VTEX, Deco.cx e desenvolvimento web moderno para criar soluções estáveis, bem planejadas e prontas para crescer. Construímos uma presença digital sólida, eficiente e alinhada às necessidades do seu negócio.
          </p>
          <div className="hero-features">
            <div className="feature">
              <FontAwesomeIcon icon={faCode} />
              <span>E‑commerce, sites e sistemas sob medida</span>
            </div>
            <div className="feature">
              <FontAwesomeIcon icon={faGaugeHigh} />
              <span>Foco em performance, velocidade e experiência do usuário</span>
            </div>
            <div className="feature">
              <FontAwesomeIcon icon={faRocket} />
              <span>Implementação profissional em VTEX e Deco.cx</span>
            </div>
          </div>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary" aria-label="Solicitar orçamento gratuito">
              Solicitar Orçamento Gratuito
              <FontAwesomeIcon icon={faArrowRight} className="icon" aria-hidden="true" />
            </a>
            <a href="#servicos" className="btn btn-secondary" aria-label="Ver serviços disponíveis">
              Ver Serviços
            </a>
          </div>
          <div className="hero-trust">
            <p className="trust-text">Orçamento em até 24h • Sem compromisso • Consultoria inicial gratuita</p>
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
                      // Soluções digitais sob medida
                    </span>
                    <br />
                    <span className="keyword">import</span>{" "}
                    <span className="string">{"{ VTEX, Deco }"}</span>{" "}
                    <span className="keyword">from</span>{" "}
                    <span className="string">"@adfsolucoesdigital"</span>
                    <br />
                    <br />
                    <span className="keyword">const</span>{" "}
                    <span className="variable">projeto</span>{" "}
                    <span className="operator">=</span>{" "}
                    <span className="function">desenvolver</span>({"{"}
                    <br />
                    {"  "}
                    <span className="property">tipo</span>:{" "}
                    <span className="string">"e-commerce | site | sistema"</span>,
                    <br />
                    {"  "}
                    <span className="property">stack</span>:{" "}
                    <span className="string">"[VTEX, Deco.cx]"</span>,
                    <br />
                    {"  "}
                    <span className="property">foco</span>:{" "}
                    <span className="string">"performance & UX"</span>
                    <br />
                    {"}"})
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
