import React from "react";
import "../styles/components/Technologies.scss";

const Technologies = () => {
  return (
    <section id="tecnologias" className="technologies">
      <div className="container">
        <div className="technologies-header">
          <span className="section-badge">Tecnologias</span>
          <h2>Tecnologias que Potencializam Seus Resultados</h2>
          <p className="section-subtitle">
            Utilizamos plataformas modernas e confiáveis para criar e‑commerces rápidos, escaláveis e de alta performance.
          </p>
        </div>

        <div className="tech-grid">
          <div className="tech-card">
            <div className="tech-logo">
              <img src="/images/vtex.png" alt="VTEX" />
            </div>
            <h3>VTEX</h3>
            <p>E‑commerce enterprise com infraestrutura robusta, escalabilidade e ferramentas avançadas para operações de médio e grande porte.</p>
          </div>

          <div className="tech-card">
            <div className="tech-logo">
              <img src="/images/deco.cx.webp" alt="Deco.cx" />
            </div>
            <h3>Deco.cx</h3>
            <p>Plataforma moderna focada em velocidade, SEO e experiência do usuário, ideal para lojas e sites que precisam de alta performance.</p>
          </div>

          <div className="tech-card">
            <div className="tech-logo">
              <div className="tech-icon-custom">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <h3>Desenvolvimento Personalizado</h3>
            <p>Soluções sob medida com tecnologias atuais, garantindo performance, estabilidade e interfaces profissionais alinhadas ao seu negócio.</p>
          </div>
        </div>

        <div className="tech-footer">
          <p>Tecnologias selecionadas para entregar qualidade, velocidade e segurança em cada projeto.</p>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
