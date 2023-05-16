import styled from "styled-components";
export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: #0f0f11;
  overflow: hidden;
  top: 0;

  .ContainerLogo {
    position: absolute;
    top: 50px;
    left: 10%;
    .logo {
      max-width: 120px;
    }
  }

  .containerTextAcessibilty {
    position: absolute;
    bottom: 50px;
    right: 10%;

    .textAcessibility {
      font-family: "Roboto";
      font-size: 15px;
      text-align: center;
      color: #ffffff;
      margin-bottom: 20px;
    }

    .goPage {
      display: block;
      margin: auto;
      padding: 8px 10px;
      background: #985eff;
      border-radius: 4px;
      text-transform: uppercase;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;
