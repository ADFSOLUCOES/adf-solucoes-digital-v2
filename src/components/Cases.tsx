import "../styles/components/Cases.scss";

const cases = [
  {
    title: "E-commerce Enterprise",
    description:
      "Desenvolvimento de uma plataforma completa para uma grande rede de varejo, com foco em performance e experiência do usuário.",
    image: "/case-1.jpg",
  },
  {
    title: "Marketplace Digital",
    description:
      "Criação de um marketplace integrado com múltiplos vendedores e sistema de pagamentos avançado.",
    image: "/case-2.jpg",
  },
  {
    title: "Loja Virtual Personalizada",
    description:
      "Desenvolvimento de uma loja virtual sob medida para uma marca de moda, com recursos exclusivos de personalização.",
    image: "/case-3.jpg",
  },
];

const Cases = () => {
  return (
    <section id="cases" className="section cases">
      <div className="container">
        <h2 className="section-title">Cases de Sucesso</h2>
        <div className="cases-grid">
          {cases.map((case_, index) => (
            <div key={index} className="case-card">
              <div className="case-image">
                <img src={case_.image} alt={case_.title} />
                <div className="case-overlay">
                  <h3>{case_.title}</h3>
                  <p>{case_.description}</p>
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
