// import { Link } from "react-router-dom";
import "animate.css";
import { ContainerStory } from "./style.js";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { RiComputerLine } from "react-icons/ri";
export function StoryFifthPart() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <ContainerStory>
      <h3 className="title Patterns">Desenvolvedor web em acensão</h3>
      <div className="cardContainer rowTable">
        <div className="card columnTable">
          <div className="cardTopPart rowTable">
            <RiComputerLine className="icon" />
            <div className="text columnTable">
              <p className="Patterns">Front End Dev</p>
              <h3 className="Patterns">ReactJs</h3>
            </div>
          </div>
          <div className="textMidPart rowTable">
            <div className="line columnTable">
              <p> &lt;h3&gt;</p>
              <span />
              <p> &lt;/h3&gt;</p>
            </div>
            <p>Lorem impsum</p>
          </div>
        </div>
      </div>
    </ContainerStory>
  );
}
