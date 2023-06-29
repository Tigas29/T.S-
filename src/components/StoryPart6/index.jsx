// import { Link } from "react-router-dom";
import "animate.css";
import { ContainerStory } from "./style.js";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import arrow from "../../imgs/handsPhotoMatrix/redArrow.svg";
import arrow2 from "../../imgs/handsPhotoMatrix/blueArrow.svg";
export function StorySixPart() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <ContainerStory>
      <h3 className="title Patterns" data-aos="fade-down">
        Agora, você tem duas escolhas
      </h3>
      <div className="container2">
        <div className="emacensão " data-aos="fade-up" data-aos-delay="500">
          <div className="buttonContainer">
            <img src={arrow} alt="arrow" />
            <button>Behance</button>
          </div>
        </div>
        <div
          className="emacensão second"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="buttonContainer">
            <button className="blue">Projetos</button>
            <img src={arrow2} alt="arrow" />
          </div>
        </div>
      </div>
    </ContainerStory>
  );
}
