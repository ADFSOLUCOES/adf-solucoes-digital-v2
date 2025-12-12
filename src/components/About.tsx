import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faLightbulb,
  faChartLine,
  faUsers,
  faStar,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/components/About.scss";

const About = () => {
  return (
    <section id="sobre" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Sobre Nós</h2>
            <p className="about-description">
              A ADF Soluções Digital é uma empresa especializada em desenvolvimento de
              e-commerces de alto impacto, com foco em performance, conversão e
              experiência do usuário. Como parceira da VTEX, Wake e Deco,
              atuamos como o braço de tecnologia de empresas que desejam escalar
              no digital.
            </p>

            <div className="about-features">
              <div className="feature">
                <div className="icon">
                  <FontAwesomeIcon icon={faRocket} />
                </div>
                <div className="text">
                  <h4>Alta Performance</h4>
                  <p>Sites rápidos e otimizados</p>
                </div>
              </div>

              <div className="feature">
                <div className="icon">
                  <FontAwesomeIcon icon={faChartLine} />
                </div>
                <div className="text">
                  <h4>Conversão</h4>
                  <p>Estratégias para aumentar vendas</p>
                </div>
              </div>

              <div className="feature">
                <div className="icon">
                  <FontAwesomeIcon icon={faUsers} />
                </div>
                <div className="text">
                  <h4>UX Design</h4>
                  <p>Experiência do usuário excepcional</p>
                </div>
              </div>

              <div className="feature">
                <div className="icon">
                  <FontAwesomeIcon icon={faCode} />
                </div>
                <div className="text">
                  <h4>Tecnologia</h4>
                  <p>Soluções modernas e escaláveis</p>
                </div>
              </div>
            </div>

            <div className="about-values">
              <div className="value-item">
                <h3>Missão</h3>
                <div className="icon">
                  <FontAwesomeIcon icon={faLightbulb} />
                </div>
                <p>
                  Desenvolver soluções digitais inovadoras que impulsionem o
                  crescimento dos nossos clientes, garantindo excelência em
                  performance e experiência do usuário.
                </p>
              </div>

              <div className="value-item">
                <h3>Visão</h3>
                <div className="icon">
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <p>
                  Ser referência nacional em desenvolvimento de e-commerce,
                  reconhecida pela qualidade técnica e pelo compromisso com
                  resultados.
                </p>
              </div>
            </div>
          </div>

          <div className="about-image">
            <img
              src="/images/sobre-nos.png"
              alt="ADF Soluções Digital - Desenvolvimento de E-commerce"
            />
            {/* <div className="experience-badge">
              <h3>
                5+<span>anos</span>
              </h3>
              <p>de experiência em e-commerce</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
