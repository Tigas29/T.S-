import { Cover } from "./style";
// import { Link } from "react-router-dom";
import "animate.css";
import { Typewriter } from "react-simple-typewriter";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineBehanceSquare,
} from "react-icons/ai";

export function FrontCover() {
  function ScrollDown() {
    window.scrollTo(0, 1000);
  }

  return (
    <>
      <Cover>
        <div className="frontCoverContainerBouthSides">
          <div className="leftSideText">
            <h1 class="animate__animated animate__fadeInDown animate__slow	1s ">
              Tiago Santos
            </h1>

            <h2 class="animate__animated animate__fadeInLeft animate__delay-1s ">
              <Typewriter
                words={[
                  ".......",
                  "Marketing para médicos",
                  "Product Manager",
                  "Scrum Master",
                  "Pragmático",
                ]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
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
            <a href="https://www.behance.net/tiagosantos67" target="blanked">
              <AiOutlineBehanceSquare className="iconsMedia" />
            </a>
          </div>
        </div>
        <span className="scrolldownButton" onClick={ScrollDown}>
          Scroll dowm
        </span>
      </Cover>
    </>
  );
}
