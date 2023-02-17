import styled from "styled-components";

const Media = {
  Laptop: "@media(max-width:1220px)",
  Nav: "@media(max-width:1000px)",
  Tablet: "@media(max-width:1000px)",
  PhoneLarge: "@media(max-width:600px)",
};
export const ContainerStory = styled.div`
  min-height: 43rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  ${Media.PhoneLarge} {
    margin-top: 2rem;
  }
  .Patterns {
    font-family: "Roboto";
    color: #ffffff;
  }
  .mediumTittleFirstPart {
    font-weight: 700;
    font-size: 3rem;
    ${Media.Tablet} {
      width: 100%;
      font-size: 2rem;
    }
    ${Media.PhoneLarge} {
      font-size: 1.8rem;
    }
    .purpleText {
      color: #985eff;
    }
  }
  .textFirstPart {
    margin-top: 1rem;
    width: 80%;
    font-weight: 400;
    font-size: 2rem;
    ${Media.Tablet} {
      width: 100%;
      font-size: 1.5rem;
    }
    ${Media.PhoneLarge} {
      font-size: 1.2rem;
    }
  }

  .purpleLine {
    position: absolute;
    left: 16rem;
    background: #985eff;
    border: none;
    width: 2px;
    min-height: 20rem;
    margin-top: 2rem;
    ${Media.Tablet} {
      left: 6rem;
    }
    ${Media.PhoneLarge} {
      margin-top: 1rem;
      left: 3rem;
    }
  }
`;
