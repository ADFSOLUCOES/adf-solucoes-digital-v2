import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/components/Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: null, message: "" });
    setIsSubmitting(true);

    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);

      const response = await fetch(
        "https://formsubmit.co/contato@adfsolucoes.com",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setStatus({
          type: "success",
          message:
            "Mensagem enviada com sucesso! Entraremos em contato em breve.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
        form.reset();
      } else {
        throw new Error("Falha ao enviar mensagem");
      }
    } catch (err) {
      console.error("Erro ao enviar mensagem:", err);
      setStatus({
        type: "error",
        message: "Erro ao enviar mensagem. Por favor, tente novamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="contact">
      <div className="container">
        <div className="contact-content">
          <h2>Solicite um Orçamento</h2>
          <p>
            Estamos prontos para ajudar você a transformar seu negócio digital.
            Preencha o formulário e entraremos em contato em breve.
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
                <p>+55 (11) 9999-9999</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <div className="text">
                <h4>Endereço</h4>
                <p>São Paulo, SP</p>
              </div>
            </div>
          </div>
        </div>

        <form
          action="https://formsubmit.co/contato@adfsolucoes.com"
          method="POST"
          onSubmit={handleSubmit}
          className="contact-form"
        >
          <input
            type="hidden"
            name="_subject"
            value="Novo contato - ADF Soluções"
          />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={window.location.href} />

          {status.type && (
            <div className={`form-message ${status.type}`}>
              {status.message}
            </div>
          )}

          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Nome completo"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Telefone"
              value={formData.phone}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="company"
              placeholder="Empresa"
              value={formData.company}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Mensagem"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="form-submit">
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
