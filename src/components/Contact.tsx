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
      // Detecta automaticamente a URL da API baseado no ambiente
      const getApiUrl = () => {
        // Se houver variável de ambiente definida, usa ela (prioridade máxima)
        if (import.meta.env.VITE_API_URL) {
          return import.meta.env.VITE_API_URL;
        }
        
        // Em produção, tenta diferentes configurações possíveis
        if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
          const hostname = window.location.hostname;
          const protocol = window.location.protocol;
          
          // Tenta subdomínio api primeiro (mais comum em produção)
          // Se não funcionar, o frontend pode tentar a porta 3001
          return `${protocol}//api.${hostname}`;
        }
        
        // Em desenvolvimento, usa localhost
        return "http://localhost:3001";
      };
      
      const apiUrl = getApiUrl();
      
      // Lista de URLs para tentar (fallback)
      const apiUrls = [apiUrl];
      if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
        // Adiciona fallback para porta 3001 se subdomínio não funcionar
        const hostname = window.location.hostname;
        const protocol = window.location.protocol;
        if (!apiUrl.includes(':3001')) {
          apiUrls.push(`${protocol}//${hostname}:3001`);
        }
      }
      
      let lastError: Error | null = null;
      let response: Response | null = null;
      
      // Tenta cada URL até uma funcionar
      for (const url of apiUrls) {
        try {
          response = await fetch(`${url}/send-email`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              company: formData.company || "",
              message: formData.message,
            }),
          });

          if (response.ok) {
            break; // Sucesso, para de tentar
          }
        } catch (error) {
          lastError = error as Error;
          continue; // Tenta próxima URL
        }
      }

      if (!response || !response.ok) {
        throw lastError || new Error("Erro ao enviar mensagem");
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
          <span className="section-badge">Contato</span>
          <h2>Pronto para Desenvolver Seu Projeto Digital?</h2>
          <div className="contact-benefits">
            <div className="benefit-item">
              <FontAwesomeIcon icon={faCheck} />
              <span>Retorno em até 24h</span>
            </div>
            <div className="benefit-item">
              <FontAwesomeIcon icon={faCheck} />
              <span>Sem compromisso</span>
            </div>
            <div className="benefit-item">
              <FontAwesomeIcon icon={faCheck} />
              <span>Consultoria inicial gratuita</span>
            </div>
          </div>
          <div className="contact-info">
            <div className="info-item">
              <div className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="text">
                <h4>Email</h4>
                <p>contato@adfsolucoesdigital.com.br</p>
              </div>
            </div>
            <div className="info-item">
              <div className="icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="text">
                <h4>Telefone</h4>
                <p>(11) 94523-9024</p>
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
            <label htmlFor="name" className="sr-only">
              Nome completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nome completo"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "error" : ""}
              disabled={isSubmitting}
              aria-required="true"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <span id="name-error" className="error-message" role="alert">
                {errors.name}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
              disabled={isSubmitting}
              aria-required="true"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <span id="email-error" className="error-message" role="alert">
                {errors.email}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="sr-only">
              Telefone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Telefone"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? "error" : ""}
              disabled={isSubmitting}
              aria-required="true"
              aria-invalid={errors.phone ? "true" : "false"}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone && (
              <span id="phone-error" className="error-message" role="alert">
                {errors.phone}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="company" className="sr-only">
              Empresa (opcional)
            </label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Empresa (opcional)"
              value={formData.company}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="sr-only">
              Sua mensagem
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Sua mensagem"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? "error" : ""}
              disabled={isSubmitting}
              aria-required="true"
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <span id="message-error" className="error-message" role="alert">
                {errors.message}
              </span>
            )}
          </div>

          <div className="form-submit">
            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-btn"
            >
              {isSubmitting ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  Solicitar Orçamento Gratuito
                  <FontAwesomeIcon icon={faArrowRight} />
                </>
              )}
            </button>
            <p className="form-note">
              🔒 Seus dados estão seguros. Não enviamos spam.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
