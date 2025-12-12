import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faShoppingCart,
  faChartLine,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/components/Services.scss";

interface Service {
  icon: IconDefinition;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: faShoppingCart,
    title: "E-commerce VTEX & Deco.cx",
    description: "Lojas de alta performance com integração completa, checkout otimizado e arquitetura escalável para o crescimento do seu negócio.",
  },
  {
    icon: faCode,
    title: "Desenvolvimento Personalizado",
    description: "Sistemas, sites e aplicações web sob medida, com foco em código organizado, segurança, velocidade e escala.",
  },
  {
    icon: faChartLine,
    title: "Otimização & Performance",
    description: "Melhoria de velocidade, SEO técnico, análise de métricas e otimizações que impactam diretamente na experiência e nos resultados.",
  },
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="services">
      <div className="container">
        <div className="services-header">
          <span className="section-badge">Nossos Serviços</span>
          <h2>
            O que a <span className="highlight">ADF Soluções Digital</span> entrega<br />
            para o seu negócio
          </h2>
          <p className="section-subtitle">
            Serviços especializados em desenvolvimento web, e‑commerce, interfaces e performance para o seu projeto digital.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
