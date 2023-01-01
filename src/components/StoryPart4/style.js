import styled from "styled-components";

const Media = {
  Laptop: "@media(max-width:1220px)",
  Nav: "@media(max-width:1000px)",
  Tablet: "@media(max-width:1000px)",
  PhoneLarge: "@media(max-width:600px)",
};
export const ContainerStory = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: CENTER;
  align-items: flex-start;
  position: relative;
  /* width: 100%; */
  .Patterns {
    font-family: "Roboto";
    color: #ffffff;
    margin: 10rem;
  }
  .purpleText {
    color: #985eff;
    font-weight: 700;
    font-size: 35px;
  }
  .mediumTittleFirstPart {
    font-weight: 700;
    text-align: center;
    font-size: 35px;
    text-decoration-line: underline;
    opacity: 0.8;
  }

  .purpleLine {
    position: absolute;
    left: 16rem;
    background: #985eff;
    border: none;
    width: 7px;
    min-height: 90vh;
  }
`;
