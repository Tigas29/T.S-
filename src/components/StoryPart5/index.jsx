// import { Link } from "react-router-dom";
import "animate.css";
import { ContainerStory } from "./style.js";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUserTie } from "react-icons/fa"; // Ícone para Autonomia Profissional
import { GiTargetArrows } from "react-icons/gi"; // Ícone para Presença de Alto Impacto

export function StoryFifthPart() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const cards = [
    {
      icons: <FaUserTie className="icon" />, // Ícone atualizado
      title: "Autonomia Profissional",
      titleSecondary: "Controle e Liberdade",
      text: "Conquiste independência total na sua prática médica. Atraia pacientes particulares, controle seu crescimento e elimine a dependência de convênios.",
      id: 1,
      data: "fade-right",
      delay: "300",
    },
    {
      icons: <GiTargetArrows className="icon" />, // Ícone atualizado
      title: "Presença de Alto Impacto",
      titleSecondary: "Marketing e Branding",
      text: "Destaque-se no mercado médico com estratégias de marketing que transformam sua marca em referência, atraindo pacientes que valorizam excelência.",
      id: 2,
      data: "fade-left",
      delay: "800",
    },
  ];

  return (
    <ContainerStory>
      <h3 className="title Patterns" data-aos="fade-down">
        Seu Próximo Passo
      </h3>
      <p className="Patterns" data-aos="fade-down">
        Descubra como alcançar o reconhecimento e o sucesso que sua prática
        médica merece.
      </p>
      <div className="cardContainer rowTable">
        {cards.map((item) => (
          <div
            className="card columnTable"
            key={item.id}
            data-aos={item.data}
            data-aos-delay={item.delay}
          >
            <div className="cardTopPart rowTable">
              {item.icons}
              <div className="text columnTable">
                <p className="Patterns">{item.title}</p>
                <h3 className="Patterns">{item.titleSecondary}</h3>
              </div>
            </div>
            <div className="textMidPart rowTable">
              <div className="line columnTable">
                <p className="Patterns"> &lt;&gt;</p>
                <span className="Patterns" />
                <p className="Patterns">&lt;&gt;</p>
              </div>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </ContainerStory>
  );
}
