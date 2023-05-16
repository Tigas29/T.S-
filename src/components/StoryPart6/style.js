import styled from "styled-components";
import background from "../../imgs/handLeft.png";

const Media = {
  Laptop: "@media(max-width:1220px)",
  Nav: "@media(max-width:1000px)",
  Tablet: "@media(max-width:1000px)",
  PhoneLarge: "@media(max-width:600px)",
};
export const ContainerStory = styled.div`
  min-height: 30rem;
  display: flex;
  flex-direction: Column;
  justify-content: space-evenly;
  position: relative;
  width: 100%;
  align-items: center;
  gap: 3rem;
  ${Media.Laptop} {
    gap: 3rem;
  }

  .Patterns {
    font-family: "Roboto";
    color: #1e1e1e;
    opacity: 0.8;
  }

  .rowTable {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
  .columnTable {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .title {
    padding-top: 30rem;
    padding-bottom: 30rem;
    font-weight: 300;
    font-size: 3rem;
    ${Media.Tablet} {
      width: 100%;
      font-size: 2rem;
    }
    ${Media.PhoneLarge} {
      font-size: 1.8rem;
    }
  }
  .container2 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
  .emacensão {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 50%;
    height: 50vh;
    background-image: url(${background});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left;
    &:last-child {
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }
    .buttonContainer {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-top: -10rem;
      &:last-child {
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
      }
      button {
        background-color: transparent;
        border: 1px solid #8c2e2e;
        box-shadow: 0px 0px 200px 12px #ff1e3a;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 300;
        font-size: 40px;
        display: flex;
        align-items: center;
        text-align: center;
        padding: 0.3rem 2rem;
        cursor: pointer;
        color: #fafafa;
        margin-top: -5rem;
      }
    }
  }
`;
