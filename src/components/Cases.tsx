import React from "react";
import "../styles/components/Cases.scss";

import case1 from "../../public/images/case1.png";

const cases = [
  {
    title: "E-commerce Enterprise",
    description:
      "Desenvolvimento de uma plataforma completa para uma grande rede de varejo, com foco em performance e experiência do usuário.",
    image: case1,
  },
  {
    title: "Marketplace Digital",
    description:
      "Criação de um marketplace integrado com múltiplos vendedores e sistema de pagamentos avançado.",
    image: case1,
  },
  {
    title: "Loja Virtual Personalizada",
    description:
      "Desenvolvimento de uma loja virtual sob medida para uma marca de moda, com recursos exclusivos de personalização.",
    image: case1,
  },
];

const Cases = () => {
  return (
    <section className="cases" id="cases">
      <div className="cases-container">
        <h2>Cases de Sucesso</h2>
        <div className="cases-grid">
          <div className="case-card">
            <img src="/images/case1.png" alt="App Features" />
            <div className="case-content">
              <h3>App Features</h3>
              <p>
                Desenvolvimento de aplicativo com recursos avançados e interface
                moderna
              </p>
            </div>
          </div>
          <div className="case-card">
            <img src="/images/case2.png" alt="Marketplace Digital" />
            <div className="case-content">
              <h3>Marketplace Digital</h3>
              <p>
                Plataforma integrada para vendas online com múltiplos vendedores
              </p>
            </div>
          </div>
          <div className="case-card">
            <img src="/images/case1.png" alt="Loja Virtual Personalizada" />
            <div className="case-content">
              <h3>Loja Virtual Personalizada</h3>
              <p>E-commerce personalizado com foco em experiência do usuário</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;
