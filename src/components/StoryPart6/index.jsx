// import { Link } from "react-router-dom";
import "animate.css";
import { ContainerStory } from "./style.js";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
<<<<<<< HEAD
import arrow from "../../imgs/arrowRed.png";
import { RiArrowGoForwardLine } from "react-icons/ri";
export function StorySixthPart() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
=======
import redArrow from "../../imgs/handsPhotoMatrix/redArrow.svg";
import blueArrow from "../../imgs/handsPhotoMatrix/blueArrow.svg";
export function StorySixPart() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
>>>>>>> 024125e42d192ec56a0037e02710cb7e1dde343a
  }, []);

  return (
    <ContainerStory>
<<<<<<< HEAD
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
=======
      <h3 className="title Patterns" data-aos="fade-down">
        Agora, você tem duas escolhas
      </h3>
      <div className="handsContainer row">
        <div
          className="OptionContainer  row opt1 "
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="buttonContainer row">
            <img src={redArrow} alt="arrow" />
            <a href="https://github.com/Tigas29" target="_blanked">
              <button className="redButton Patterns">Projetos</button>
            </a>
          </div>
        </div>
        <div
          className="OptionContainer row  opt2"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="buttonContainer row">
            <a href="www.linkedin.com/in/tigass" target="_blanked">
              <button className="blueButton Patterns">Sobre mim</button>
            </a>
            <img src={blueArrow} alt="arrow" />
          </div>
>>>>>>> 024125e42d192ec56a0037e02710cb7e1dde343a
        </div>
      </div>
    </ContainerStory>
  );
}
