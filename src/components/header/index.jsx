import { HeaderContainer } from "./style";
import logo from "../../imgs/Logo.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
export function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const path = useLocation().pathname;
  useEffect(() => {
    function scrollUp() {
      window.scrollTo(0, 0);
    }
    scrollUp();
  }, [path]);

  return (
    <div>
      <HeaderContainer isVisible={menuIsVisible}>
        <div className="header">
          <div className="content">
            <div className="logoSide">
              <img src={logo} alt="logotipo" />
            </div>
            <AiOutlineMenu
              onClick={() => setMenuIsVisible(true)}
              className="menu"
            />
            <AiOutlineClose
              onClick={() => setMenuIsVisible(false)}
              className="menu closeMenu"
            />
            <li className="menuSide">
              <Link to="">
                <ul
                  className={`${
                    path === "/home" ? " color Options" : "Options"
                  }`}
                >
                  console.log("tiagoSantos")
                </ul>
              </Link>
              <Link to="">
                <ul
                  className={`${path === "/" ? " color Options" : "Options"}`}
                >
                  aboutMe
                </ul>
              </Link>
              <Link to="">
                <ul
                  className={`${path === "/" ? " color Options" : "Options"}`}
                >
                  works
                </ul>
              </Link>
            </li>
          </div>
        </div>
      </HeaderContainer>
    </div>
  );
}
