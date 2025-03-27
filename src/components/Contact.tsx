import React, { useState, ChangeEvent, FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faArrowRight,
  faSpinner,
  faCheck,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/components/Contact.scss";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Telefone é obrigatório";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mensagem é obrigatória";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar mensagem");
      }

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error("Erro:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-content">
          <h2>Solicite um Orçamento</h2>
          <p>
            Entre em contato conosco para discutir seu projeto. Nossa equipe
            está pronta para ajudar a transformar suas ideias em realidade.
          </p>
          <div className="contact-info">
            <div className="info-item">
              <div className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="text">
                <h4>Email</h4>
                <p>contato@adfsolucoes.com</p>
              </div>
            </div>
            <div className="info-item">
              <div className="icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="text">
                <h4>Telefone</h4>
                <p>(11) 99999-9999</p>
              </div>
            </div>
            <div className="info-item">
              <div className="icon">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <div className="text">
                <h4>Endereço</h4>
                <p>São Paulo, SP - Brasil</p>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {submitStatus && (
            <div className={`form-message ${submitStatus}`}>
              <FontAwesomeIcon
                icon={
                  submitStatus === "success" ? faCheck : faExclamationTriangle
                }
              />
              {submitStatus === "success"
                ? "Mensagem enviada com sucesso! Entraremos em contato em breve."
                : "Erro ao enviar mensagem. Por favor, tente novamente."}
            </div>
          )}

          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Nome completo"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "error" : ""}
              disabled={isSubmitting}
            />
            {errors.name && (
              <span className="error-message">{errors.name}</span>
            )}
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
              disabled={isSubmitting}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Telefone"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? "error" : ""}
              disabled={isSubmitting}
            />
            {errors.phone && (
              <span className="error-message">{errors.phone}</span>
            )}
          </div>

          <div className="form-group">
            <input
              type="text"
              name="company"
              placeholder="Empresa (opcional)"
              value={formData.company}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Sua mensagem"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? "error" : ""}
              disabled={isSubmitting}
            />
            {errors.message && (
              <span className="error-message">{errors.message}</span>
            )}
          </div>

          <div className="form-submit">
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  Enviar mensagem
                  <FontAwesomeIcon icon={faArrowRight} />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
