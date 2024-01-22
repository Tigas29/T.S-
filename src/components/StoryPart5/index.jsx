// import { Link } from "react-router-dom";
import "animate.css";
import { ContainerStory } from "./style.js";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdOutlineDesignServices } from "react-icons/md";
import { DiReact } from "react-icons/di";
export function StoryFifthPart() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const cards = [
    {
      icons: <DiReact className="icon" />,
      title: "Front end Developer",
      titleSecondary: "React Js Javascript",
      text: "Como desenvolvedor JavaScript que utiliza React, tenho habilidades sólidas em HTML, CSS e JavaScript que me permitem criar experiências de usuário interativas no front-end. No back-end, estou usando PHP e tenho a capacidade de gerenciar dados e infraestrutura do servidor.",
      id: 1,
      data: "fade-right",
      delay: "300",
    },
    {
      icons: <MdOutlineDesignServices className="icon" />,
      title: "Design",
      titleSecondary: "Figma,Photoshop",
      text: "Como designer e web designer, possuo habilidades sólidas em várias áreas de design, incluindo UX e UI. Sou experiente em trabalhar com ferramentas como Photoshop, Figma e Canvas para criar protótipos de design de alta qualidade.",
      id: 2,
      data: "fade-left",
      delay: "800",
    },
  ];
  return (
    <ContainerStory>
      <h3 className="title Patterns" data-aos="fade-down">
        Desenvolvedor em acensão
      </h3>
      <p className="Patterns" data-aos="fade-down">
        Decidi concentrar minha carreira e aplicar meus conhecimentos de outras
        áreas para ampliar minha expertise no desenvolvimento para web.
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
                <p className="Patterns"> &lt;h3&gt;</p>
                <span className="Patterns" />
                <p className="Patterns"> &lt;/h3&gt;</p>
              </div>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </ContainerStory>
  );
}
