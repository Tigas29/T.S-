import { keyframes } from "styled-components";
import styled from "styled-components";

const Down = keyframes`
  0%   { transform: translateY(0);  opacity: 0.4 }
        50%  { transform: translateY(10px); opacity: 0.1}
        100%{ opacity:  0.4;}
`;
export const Cover = styled.div`
  width: 100%;

  .frontCoverContainerBouthSides {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .leftSideText {
      h1 {
        font-family: "Roboto";
        font-weight: 700;
        font-size: 40px;
        color: #985eff;
      }

      h2 {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 200;
        font-size: 35px;
        opacity: 0.7;
        color: #bfbfbf;
      }
    }

    .socialMediasIconsLink {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      flex-direction: column;
      gap: 100px;
      min-height: 90vh;

      .iconsMedia {
        color: #985eff;
        width: 1.5rem;
        height: 1.5rem;
        cursor: pointer;
      }
    }
  }
  .scrolldownButton {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 25px;
    color: #bfbfbf;
    opacity: 0.4;
    display: block;
    text-align: center;
    margin: auto;
    animation: ${Down} 3s infinite, cubic-bezier(0.45, 0.05, 0.55, 0.95);
    animation-delay: 1s;
    cursor: pointer;
  }
`;
