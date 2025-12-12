import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faChartLine,
  faRocket,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/components/Stats.scss";

interface Stat {
  icon: any;
  number: string;
  label: string;
  suffix?: string;
}

const stats: Stat[] = [
  {
    icon: faUsers,
    number: "150+",
    label: "Clientes Atendidos",
  },
  {
    icon: faChartLine,
    number: "300%",
    label: "Aumento Médio em Vendas",
  },
  {
    icon: faRocket,
    number: "95+",
    label: "Performance Score Médio",
    suffix: "/100",
  },
  {
    icon: faStar,
    number: "4.9",
    label: "Avaliação dos Clientes",
    suffix: "/5.0",
  },
];

const Stats: React.FC = () => {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">
                <FontAwesomeIcon icon={stat.icon} />
              </div>
              <div className="stat-content">
                <div className="stat-number">
                  {stat.number}
                  {stat.suffix && <span className="stat-suffix">{stat.suffix}</span>}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

