import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/components/FAQ.scss";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Quanto tempo leva para desenvolver um e-commerce?",
    answer:
      "O tempo varia conforme a complexidade do projeto. Um e-commerce básico leva de 4 a 8 semanas, enquanto projetos mais complexos podem levar de 12 a 16 semanas. Após a análise inicial, apresentamos um cronograma detalhado.",
  },
  {
    question: "Vocês trabalham apenas com VTEX e Deco.cx?",
    answer:
      "Somos especialistas em VTEX e Deco.cx, mas também desenvolvemos soluções personalizadas com outras tecnologias como React, Next.js e Node.js. Escolhemos a melhor tecnologia para cada projeto.",
  },
  {
    question: "Oferecem suporte após o lançamento?",
    answer:
      "Sim! Oferecemos planos de suporte e manutenção mensais que incluem atualizações, correções, monitoramento de performance e suporte técnico. Também oferecemos treinamento para sua equipe.",
  },
  {
    question: "Como funciona o processo de desenvolvimento?",
    answer:
      "Nosso processo é dividido em etapas: 1) Análise e planejamento, 2) Design e prototipação, 3) Desenvolvimento, 4) Testes e ajustes, 5) Lançamento e suporte. Você acompanha cada etapa e tem voz ativa em todas as decisões.",
  },
  {
    question: "Quais são as formas de pagamento?",
    answer:
      "Trabalhamos com diferentes modelos: pagamento único, parcelado ou dividido por etapas do projeto. Aceitamos transferência bancária, PIX e cartão de crédito. Sempre apresentamos propostas transparentes.",
  },
  {
    question: "Vocês fazem integração com sistemas ERP?",
    answer:
      "Sim! Fazemos integração com os principais ERPs do mercado como TOTVS, SAP, Bling, Tiny, entre outros. Também desenvolvemos integrações personalizadas quando necessário.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq-header">
          <span className="section-badge">Dúvidas Frequentes</span>
          <h2>Perguntas que Nossos Clientes Fazem</h2>
          <p className="section-subtitle">
            Tire suas dúvidas sobre nossos serviços e processos
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <FontAwesomeIcon
                  icon={openIndex === index ? faChevronUp : faChevronDown}
                />
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="faq-cta">
          <p>Ainda tem dúvidas?</p>
          <a href="#contact" className="btn">
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

