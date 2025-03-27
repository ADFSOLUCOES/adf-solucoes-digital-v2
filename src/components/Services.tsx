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
    icon: faCode,
    title: "Desenvolvimento Web",
    description: "Criamos sites e aplicações web modernas e responsivas",
  },
  {
    icon: faShoppingCart,
    title: "E-commerce",
    description: "Implementamos soluções completas de comércio eletrônico",
  },
  {
    icon: faChartLine,
    title: "Marketing Digital",
    description: "Estratégias para aumentar sua presença online",
  },
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="services">
      <div className="container">
        <h2>Nossos Serviços</h2>
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
