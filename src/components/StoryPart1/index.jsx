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
          Com mais de 4 anos ajudando médicos a expandirem suas práticas,
          <br />
          construindo presença digital de
          <span className="purpleText"> forma estratégica. </span>
        </h2>
        <p className="textFirstPart" data-aos="fade-down">
          Auxiliei profissionais da saúde a atrair pacientes particulares e
          alcançar independência, utilizando estratégias personalizadas de
          marketing e branding.
        </p>
      </div>
    </ContainerStory>
  );
}
