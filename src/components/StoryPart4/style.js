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
  position: relative;
  width: 100%;
  align-items: flex-start;
  ${Media.PhoneLarge} {
    margin-top: 2rem;
  }
  .Patterns {
    font-family: "Roboto";
    color: #1e1e1e;
    opacity: 0.8;
  }
  .mediumTittleFirstPart {
    font-weight: 700;
    font-size: 3rem;
    text-decoration-line: underline;
    ${Media.Tablet} {
      width: 100%;
      font-size: 2rem;
    }
    ${Media.PhoneLarge} {
      font-size: 1.8rem;
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

  .background {
    position: absolute;
    right: -20%;
    bottom: 20%;
    max-width: 800px;

    ${Media.PhoneLarge} {
      right: 0;
    }
  }
`;
