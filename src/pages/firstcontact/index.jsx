import Spline from "@splinetool/react-spline";
import { Container } from "./style";
import logo from "../../imgs/Logo.svg";
import { Link } from "react-router-dom";
import "animate.css";
export function FirstContact() {
  return (
    <>
      <Container>
        <div className="ContainerLogo">
          <img className="logo" src={logo} alt="Logotipo" />
        </div>
        <Spline
          className="background"
          scene="https://prod.spline.design/DgWDTJH6-HdI215B/scene.splinecode"
        />
        <div class="animate__animated animate__bounceInRight animate__delay-2s">
          <div className="containerTextAcessibilty">
            <p className="textAcessibility">Ainda não carregou ?</p>
            <Link to="/home">
              <button className="goPage textAcessibility">clique aqui </button>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
