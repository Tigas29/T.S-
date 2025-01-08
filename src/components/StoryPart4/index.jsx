// import { Link } from "react-router-dom";
import "animate.css";
import { ContainerStory } from "./style.js";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import background from "../../imgs/suspenseBackground.png";
export function StoryFourthPart() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <ContainerStory>
      {/* <img
        className="background"
        src={background}
        alt="background "
        data-aos="fade-down"
      /> */}
      <div className="Patterns containerText" data-aos="fade-down">
        <h2 className="mediumTittleFirstPart ">
          Hoje em dia, ajudo médicos a<br />
          <span className="purpleText">construir seu legado.</span>
        </h2>
        <p className="textFirstPart">
          Seja o médico que define seu futuro, atrai pacientes certos e alcança
          resultados extraordinários.
        </p>
      </div>
    </ContainerStory>
  );
}
