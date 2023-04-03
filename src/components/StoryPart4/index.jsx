// import { Link } from "react-router-dom";
import "animate.css";
import { ContainerStory } from "./style.js";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export function StoryFourthPart() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <ContainerStory>
      <div className="Patterns containerText" data-aos="fade-down">
        <h2 className="mediumTittleFirstPart ">Hoje em dia</h2>
      </div>
    </ContainerStory>
  );
}
