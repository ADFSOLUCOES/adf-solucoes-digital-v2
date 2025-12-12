import React from "react";
import "../styles/components/Cases.scss";

import case1 from "../../public/images/case1.png";

const cases = [
  {
    title: "E-commerce Fashion - Moda Fashion",
    result: "+250% em vendas",
    description:
      "Desenvolvimento completo em VTEX com foco em performance e UX. Resultado: aumento de 250% nas vendas em 3 meses e redução de 40% na taxa de rejeição.",
    image: case1,
    metrics: ["+250% Vendas", "95 Performance", "40% Menos Rejeição"],
  },
  {
    title: "Marketplace TechStore",
    result: "+180% conversão",
    description:
      "Plataforma marketplace integrada com múltiplos vendedores, sistema de pagamentos avançado e gestão automatizada. Aumento de 180% na taxa de conversão.",
    image: case1,
    metrics: ["+180% Conversão", "50+ Vendedores", "99% Uptime"],
  },
  {
    title: "E-commerce EcoMarket",
    result: "+320% ROI",
    description:
      "Loja virtual personalizada com recursos exclusivos de personalização e integração completa com ERP. ROI de 320% no primeiro ano.",
    image: case1,
    metrics: ["+320% ROI", "100% Integrado", "4.9 Avaliação"],
  },
];

const Cases = () => {
  return (
    <section className="cases" id="cases">
      <div className="cases-container">
        <div className="cases-header">
          <span className="section-badge">Cases de Sucesso</span>
          <h2>Resultados Reais de Clientes Reais</h2>
          <p className="section-subtitle">
            Veja como transformamos e-commerces em máquinas de vendas
          </p>
        </div>
        <div className="cases-grid">
          {cases.map((caseItem, index) => (
            <div key={index} className="case-card">
              <div className="case-image">
                <img src="/images/case1.png" alt={caseItem.title} />
                <div className="case-badge">{caseItem.result}</div>
              </div>
              <div className="case-content">
                <h3>{caseItem.title}</h3>
                <p>{caseItem.description}</p>
                <div className="case-metrics">
                  {caseItem.metrics.map((metric, idx) => (
                    <span key={idx} className="metric-tag">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
