// import { Link } from "react-router-dom";
import "animate.css";
import { ContainerStory } from "./style.js";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import redArrow from "../../imgs/handsPhotoMatrix/redArrow.svg";
import blueArrow from "../../imgs/handsPhotoMatrix/blueArrow.svg";

export function StorySixPart() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <ContainerStory>
      <h3 className="title Patterns" data-aos="fade-down">
        Agora, você tem duas escolhas
      </h3>
      <div className="handsContainer row">
        <div
          className="OptionContainer row opt1"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="buttonContainer row">
            <img src={redArrow} alt="arrow" />
            <a
              href="https://api.whatsapp.com/send?phone=5511956829886&text=Ol%C3%A1,%20estou%20preparado%20para%20saber%20mais%20em%20como%20posso%20transformar%20minha%20carreira%20m%C3%A9dica!"
              target="_blanked"
            >
              <button className="redButton Patterns">
                Quero Transformar Minha Carreira
              </button>
            </a>
          </div>
        </div>
        <div
          className="OptionContainer row opt2"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="buttonContainer row">
            <a href="#" target="_blanked">
              <button className="blueButton Patterns">
                Prefiro Continuar na Mesmice
              </button>
            </a>
            <img src={blueArrow} alt="arrow" />
          </div>
        </div>
      </div>
    </ContainerStory>
  );
}
