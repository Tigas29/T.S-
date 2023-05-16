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
          De 2020 até 2022 eu trabalhava como
          <span className="purpleText"> Social Media </span> de forma autônoma.
        </h2>
        <p className="textFirstPart" data-aos="fade-down">
          Trabalhava para empresas que possuíam apenas comércios onlines e
          queriam impulsionar suas vendas através de Marketing e post para redes
          sociais.
        </p>
      </div>
    </ContainerStory>
  );
}
