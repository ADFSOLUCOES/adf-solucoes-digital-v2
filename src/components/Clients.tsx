import React from "react";
import "../styles/components/Clients.scss";

interface Client {
  name: string;
  logo: string;
  website?: string;
}

// Array de clientes - adicione os logos na pasta public/images/clients/
const clients: Client[] = [
  {
    name: "Aitraflow",
    logo: "/images/clients/aitraflow.png", // Adicione o logo aqui
    website: "https://aitraflow.com/",
  },
  {
    name: "Aitra",
    logo: "/images/clients/aitra.png", // Adicione o logo aqui
    website: "https://www.aitra.pt/",
  },
];

const Clients: React.FC = () => {
  return (
    <section className="clients" id="clientes">
      <div className="container">
        <div className="clients-header">
          <span className="section-badge">Nossos Clientes</span>
          <h2>
            Empresas que <span className="highlight">confiam</span> no nosso trabalho
          </h2>
          <p className="section-subtitle">
            Atendemos empresas de diversos segmentos com soluções digitais de alta performance.
          </p>
        </div>

        <div className="clients-grid">
          {clients.map((client, index) => (
            <div key={index} className="client-item">
              {client.website && client.website !== "#" ? (
                <a
                  href={client.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="client-link"
                  aria-label={`Visitar site de ${client.name}`}
                >
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.client-name-fallback')) {
                        const fallback = document.createElement('span');
                        fallback.className = 'client-name-fallback';
                        fallback.textContent = client.name;
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                  <span className="client-name-fallback" style={{ display: 'none' }}>
                    {client.name}
                  </span>
                </a>
              ) : (
                <div className="client-logo">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.client-name-fallback')) {
                        const fallback = document.createElement('span');
                        fallback.className = 'client-name-fallback';
                        fallback.textContent = client.name;
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                  <span className="client-name-fallback" style={{ display: 'none' }}>
                    {client.name}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
