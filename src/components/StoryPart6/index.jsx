// import { Link } from "react-router-dom";
import "animate.css";
import { ContainerStory } from "./style.js";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import arrow from "../../imgs/arrowRed.png";
import { RiArrowGoForwardLine } from "react-icons/ri";
export function StorySixthPart() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <ContainerStory>
      <h3 className="title Patterns">
        Agora você tem duas escolhas a fazer, qual você vai escolher?
      </h3>

      <div className="contianerOptions">
        <div className="buttonContainer rowTable">
          <button>Lorem imspum</button>
          <img src={arrow} alt="seta vermelha" className="icon" />
        </div>
        <div className="buttonContainer rowTable">
          <button>Lorem imspum</button>
        </div>
      </div>
    </ContainerStory>
  );
}
