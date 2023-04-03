import styled, { css, keyframes } from "styled-components";
const Media = {
  Laptop: "@media(max-width:1220px)",
  Nav: "@media(max-width:1000px)",
  Tablet: "@media(max-width:1000px)",
  PhoneLarge: "@media(max-width:600px)",
};
const animate = keyframes`
      0%{background-position:left};
    100%{background-position:right}
  
  `;

export const Container = styled.div`
  width: 100%;
  position: relative;
  background: linear-gradient(
    117.4deg,
    #121214 0%,
    #101012 22.59%,
    #0f0f11 57.77%,
    #0f0f11 77.2%,
    #0c0c0e 98.23%,
    #0c0c0e 100.86%
  );
  z-index: 1;
  overflow-x: hidden;
  /* background-size: 330%; */
  animation: 1.5s linear;
  &::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background: linear-gradient(
      157.27deg,
      #ffffff 0%,
      #ededed 30.81%,
      #ffffff 53.58%,
      #e1e1e1 70.36%,
      #d9d9d9 98.61%
    );
    opacity: 0;
    transition: opacity 0.5s linear;
  }
  ${({ isanimation }) =>
    isanimation &&
    css`
      &::before {
        content: "";
        background: linear-gradient(
          157.27deg,
          #ffffff 0%,
          #ededed 30.81%,
          #ffffff 53.58%,
          #e1e1e1 70.36%,
          #d9d9d9 98.61%
        );
        transition: opacity 0.5s linear;
        opacity: 1;
      }
    `}

  hr {
    width: 3px;
    min-height: 72%;
    position: absolute;
    background-color: #985eff;
    left: -1.5rem;
    top: 27%;
    transition: all 0.5s linear 0.1s;

    ${({ isanimation }) =>
      isanimation &&
      css`
        transition: all 0.5s linear 0.1s;
        background: #1e1e1e;
        opacity: 0.8;
      `}

    ${Media.Tablet} {
      top: 13%;
      min-height: 80%;
    }
  }
`;

export const ConfigSize = styled.div`
  width: 80%;
  max-width: 80rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  position: relative;
`;
