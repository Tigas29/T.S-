import { keyframes } from "styled-components";
import styled from "styled-components";
const Media = {
  Laptop: "@media(max-width:1220px)",
  Nav: "@media(max-width:1000px)",
  Tablet: "@media(max-width:1000px)",
  OtherTablet: "@media(max-width:700px)",
  PhoneLarge: "@media(max-width:600px)",
};
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

    ${Media.PhoneLarge} {
      justify-content: center;
      flex-direction: column;
      min-height: 32rem;
      gap: 1rem;
    }
    .leftSideText {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      h1 {
        font-family: "Roboto";
        font-weight: 700;
        color: #985eff;
        ${Media.PhoneLarge} {
          font-size: 2.5rem;
        }
      }

      h2 {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 200;
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
      ${Media.PhoneLarge} {
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: row;
        gap: 2rem;
        min-height: auto;
        width: 100%;
      }
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
    color: #bfbfbf;
    opacity: 0.4;
    display: block;
    text-align: center;
    margin: auto;
    animation: ${Down} 3s infinite, cubic-bezier(0.45, 0.05, 0.55, 0.95);
    animation-delay: 1s;
    cursor: pointer;
    ${Media.PhoneLarge} {
      margin-top: -2.9rem;
    }
  }
`;
