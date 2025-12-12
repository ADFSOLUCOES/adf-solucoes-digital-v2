import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import "../styles/components/Testimonials.scss";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Carlos Silva",
    role: "CEO",
    company: "Moda Fashion",
    content:
      "A ADF Soluções Digital transformou nosso e-commerce. Em 3 meses aumentamos as vendas em 250% e melhoramos significativamente a experiência dos nossos clientes. Profissionais excepcionais!",
    rating: 5,
  },
  {
    name: "Mariana Santos",
    role: "Diretora de E-commerce",
    company: "TechStore",
    content:
      "Trabalho impecável! A equipe entendeu perfeitamente nossas necessidades e entregou uma solução completa em VTEX. O resultado superou todas as expectativas. Recomendo sem hesitação!",
    rating: 5,
  },
  {
    name: "Roberto Lima",
    role: "Fundador",
    company: "EcoMarket",
    content:
      "Parceiros estratégicos de verdade. Não apenas desenvolveram nossa loja, mas também nos ajudaram a otimizar processos e aumentar conversão. ROI excelente desde o primeiro mês!",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials" id="depoimentos">
      <div className="container">
        <div className="testimonials-header">
          <span className="section-badge">Depoimentos</span>
          <h2>O que Nossos Clientes Dizem</h2>
          <p className="section-subtitle">
            Resultados reais de empresas que confiaram na ADF Soluções Digital
          </p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <div className="quote-icon">
                  <FontAwesomeIcon icon={faQuoteLeft} />
                </div>
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} />
                  ))}
                </div>
              </div>
              <p className="testimonial-content">"{testimonial.content}"</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>
                    {testimonial.role} • {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

