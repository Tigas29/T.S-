import { Container, FrontCover } from "./style";
// import { Link } from "react-router-dom";
import "animate.css";
import { Header } from "../../components/header/index";
import "animate.css";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
export function Portifolio() {
  return (
    <>
      <Header />
      <Container>
        <FrontCover>
          <div className="frontCoverContainerBouthSides">
            <div className="leftSideText">
              <div class="animate__animated animate__fadeInDown">
                <h1>Tiago Santos</h1>
                <div class="animate__animated animate__fadeInDown animate__delay-2s">
                  <h2>Web developer</h2>
                </div>
              </div>
            </div>
            <div className="socialMediasIconsLink">
              <a
                href="https://www.linkedin.com/in/tiagosantos-dev/"
                target="blanked"
              >
                <AiFillLinkedin className="iconsMedia" />
              </a>
              <a
                href="https://github.com/Tigas29?tab=repositories"
                target="blanked"
              >
                <AiFillGithub className="iconsMedia" />
              </a>
              <a
                href="https://www.instagram.com/_santostiagoo/"
                target="blanked"
              >
                <AiOutlineInstagram className="iconsMedia" />
              </a>
            </div>
          </div>
          {/* <span className="scrolldownButton">Scroll dowm</span> */}
        </FrontCover>
      </Container>
    </>
  );
}
