import styled from "styled-components";
import background from "../../imgs/backgroundChoices.png";

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
  padding-top: 10rem;
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
    font-weight: 300;
    font-size: 3rem;
    text-align: center;
    ${Media.Tablet} {
      width: 100%;
      font-size: 2rem;
    }
    ${Media.PhoneLarge} {
      font-size: 1.8rem;
    }

    .relative {
      position: relative;
      width: 125%;
      height: 37rem;
    }
  }
  .contianerOptions {
    background-image: url(${background});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    height: 50vh;
    width: 125%;
    .buttonContainer {
      top: 10rem;
      left: 30%;
      flex-direction: row-reverse;
      align-items: flex-start;
      position: absolute;
      &:last-child {
        left: inherit;
        right: 30%;
      }

      .icon {
        width: 5rem;
        height: 5rem;
        color: red;
        margin-top: 2rem;
      }
      button {
        background: red;
        padding: 1rem;
      }
    }
  }
`;
