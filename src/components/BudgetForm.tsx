import React, { useState } from "react";
import "../styles/components/BudgetForm.scss";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  features: string[];
}

const BudgetForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    features: [],
  });

  const projectTypes = [
    "E-commerce",
    "Website Institucional",
    "Aplicativo Mobile",
    "Sistema Web",
    "Outro",
  ];

  const budgetRanges = [
    "Até R$ 10.000",
    "R$ 10.000 - R$ 30.000",
    "R$ 30.000 - R$ 50.000",
    "R$ 50.000 - R$ 100.000",
    "Acima de R$ 100.000",
  ];

  const timelineOptions = [
    "Até 1 mês",
    "1-3 meses",
    "3-6 meses",
    "6-12 meses",
    "Mais de 1 ano",
  ];

  const features = [
    "Design Responsivo",
    "Painel Administrativo",
    "Integração com APIs",
    "SEO Otimizado",
    "Analytics",
    "Área de Membros",
    "Blog",
    "Newsletter",
    "Chat ao Vivo",
    "Multilíngue",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFeatureToggle = (feature: string) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar o envio do formulário
    console.log(formData);
  };

  return (
    <form className="budget-form" onSubmit={handleSubmit}>
      <div className="form-section">
        <h3>Informações Pessoais</h3>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="name">Nome Completo *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Telefone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="company">Empresa</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3>Detalhes do Projeto</h3>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="projectType">Tipo de Projeto *</label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
            >
              <option value="">Selecione...</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="budget">Orçamento Previsto *</label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
            >
              <option value="">Selecione...</option>
              {budgetRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="timeline">Prazo Desejado *</label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              required
            >
              <option value="">Selecione...</option>
              {timelineOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="description">Descrição do Projeto *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={4}
            placeholder="Descreva seu projeto, objetivos e requisitos específicos..."
          />
        </div>

        <div className="form-group">
          <label>Funcionalidades Desejadas</label>
          <div className="features-grid">
            {features.map((feature) => (
              <label key={feature} className="feature-checkbox">
                <input
                  type="checkbox"
                  checked={formData.features.includes(feature)}
                  onChange={() => handleFeatureToggle(feature)}
                />
                <span>{feature}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <button type="submit" className="btn-primary">
        Solicitar Orçamento
      </button>
    </form>
  );
};

export default BudgetForm;
