import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faMobileAlt,
  faChartLine,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/components/Services.scss";

const services = [
  {
    icon: faCode,
    title: "Desenvolvimento de E-commerce",
    description:
      "Criação de lojas virtuais personalizadas com foco em performance e experiência do usuário.",
  },
  {
    icon: faMobileAlt,
    title: "Responsividade",
    description:
      "Soluções totalmente adaptáveis para todos os dispositivos e plataformas.",
  },
  {
    icon: faChartLine,
    title: "Otimização de Performance",
    description:
      "Melhorias contínuas para garantir velocidade e eficiência em sua loja virtual.",
  },
  {
    icon: faHeadset,
    title: "Suporte Técnico",
    description:
      "Assistência especializada para manter sua loja sempre funcionando em perfeitas condições.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section services">
      <div className="container">
        <h2 className="section-title">Nossos Serviços</h2>
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
