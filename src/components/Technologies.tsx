import React from "react";
import "../styles/components/Technologies.scss";

const Technologies = () => {
  return (
    <section className="technologies">
      <div className="container">
        <h2>Tecnologias de Ponta</h2>

        <div className="tech-grid">
          <div className="tech-card">
            <div className="tech-logo">
              <img src="/images/vtex.png" alt="VTEX" />
            </div>
            <p>Plataforma líder em e-commerce enterprise</p>
          </div>

          <div className="tech-card">
            <div className="tech-logo">
              <img src="/images/deco.cx.webp" alt="Deco.cx" />
            </div>
            <p>Framework moderno para desenvolvimento web</p>
          </div>

          <div className="tech-card">
            <div className="tech-logo">
              <img src="/images/react.svg" alt="React" />
            </div>
            <p>Biblioteca JavaScript para interfaces modernas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
