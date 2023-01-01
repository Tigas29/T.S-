import styled from "styled-components";

const Media = {
  Laptop: "@media(max-width:1220px)",
  Nav: "@media(max-width:1000px)",
  Tablet: "@media(max-width:1000px)",
  PhoneLarge: "@media(max-width:600px)",
};
export const ContainerStory = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .Patterns {
    font-family: "Roboto";
    color: #ffffff;
  }
  .mediumTittleFirstPart {
    font-weight: 700;
    font-size: 35px;

    .purpleText {
      color: #985eff;
    }
  }
  .textFirstPart {
    margin-top: 1rem;
    width: 80%;
    font-weight: 400;
    font-size: 25px;
    line-height: 35px;
  }

  .purpleLine {
    position: absolute;
    left: 16rem;
    background: #985eff;
    border: none;
    width: 7px;
    min-height: 70vh;
  }
`;
