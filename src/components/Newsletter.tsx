import React from "react";
import "../styles/components/Newsletter.scss";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <h2>Fique por dentro das novidades</h2>
          <p>
            Receba as últimas atualizações sobre tecnologia e desenvolvimento
            direto no seu email.
          </p>
          <form className="newsletter-form">
            <div className="input-group">
              <input type="email" placeholder="Seu melhor email" required />
              <button type="submit" className="btn-primary">
                Inscrever-se
              </button>
            </div>
            <small>
              Nós respeitamos sua privacidade. Cancele quando quiser.
            </small>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
