// import { Link } from "react-router-dom";
import "animate.css";
import { ContainerStory } from "./style.js";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export function StoryFirstPart() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <ContainerStory>
      <div className="Patterns containerText">
        <h2 className="mediumTittleFirstPart " data-aos="fade-down">
          Desde de 2020, trabalhei com a internet ao meu favor
          <span className="purpleText"> de forma autônoma. </span>
        </h2>
        <p className="textFirstPart" data-aos="fade-down">
          Cooperava com empresas que possuíam apenas comércios onlines e queriam
          impulsionar suas vendas através do Marketing.
        </p>
      </div>
    </ContainerStory>
  );
}
