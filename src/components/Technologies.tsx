import "../styles/components/Technologies.scss";

const technologies = [
  {
    name: "VTEX",
    description: "Plataforma líder em e-commerce enterprise",
    image: "/images/vtex-logo.png",
  },
  {
    name: "Deco",
    description: "Framework moderno para desenvolvimento web",
    image: "/images/deco-logo.png",
  },
  {
    name: "React.js",
    description: "Biblioteca JavaScript para interfaces modernas",
    icon: "React.js",
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    description: "JavaScript com tipagem estática",
    icon: "TypeScript",
    color: "#3178C6",
  },
  {
    name: "SASS",
    description: "Pré-processador CSS avançado",
    icon: "SASS",
    color: "#CC6699",
  },
  {
    name: "GraphQL",
    description: "Linguagem de consulta para APIs",
    icon: "GraphQL",
    color: "#E535AB",
  },
];

const Technologies = () => {
  return (
    <section id="tecnologias" className="technologies">
      <div className="container">
        <h2>Tecnologias de Ponta</h2>
        <div className="technologies-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="technology-card">
              {tech.image ? (
                <img src={tech.image} alt={tech.name} className="tech-logo" />
              ) : (
                <div
                  className="tech-circle"
                  style={{ backgroundColor: `${tech.color}20` }}
                >
                  <span style={{ color: tech.color }}>{tech.icon}</span>
                </div>
              )}
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
