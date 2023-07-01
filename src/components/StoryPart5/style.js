import styled from "styled-components";
import background from "../../imgs/backgroundfinalPart.png";

const Media = {
  Laptop: "@media(max-width:1220px)",
  Nav: "@media(max-width:1000px)",
  Tablet: "@media(max-width:1000px)",
  PhoneLarge: "@media(max-width:600px)",
};
export const ContainerStory = styled.div`
  min-height: 44rem;
  display: flex;
  flex-direction: Column;
  justify-content: space-evenly;
  position: relative;
  width: 100%;
  align-items: center;
  padding-top: 20rem;
  ${Media.Laptop} {
    gap: 3rem;
  }

  ${Media.PhoneLarge} {
    padding-top: inherit;
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
    ${Media.Tablet} {
      width: 100%;
      font-size: 2rem;
    }
    ${Media.PhoneLarge} {
      font-size: 1.8rem;
    }
  }
  .cardContainer {
    width: 100%;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    flex-wrap: wrap;
    margin: auto;
    margin-left: 3rem;
    ${Media.Laptop} {
      gap: 3rem;
      margin-left: inherit;
    }

    .card {
      width: 20rem;
      flex-direction: column;
      align-items: flex-start;
      margin: auto;
      .cardTopPart {
        ${Media.PhoneLarge} {
          flex-direction: column;
          align-items: flex-start;
        }
        .icon {
          width: 5rem;
          height: 5rem;
        }
        .text {
          align-items: flex-start;
          gap: 0.5rem;

          p,
          h3 {
            font-weight: bold;
            position: relative;
            font-size: 1.3rem;
          }

          h3 {
            font-size: 1.5rem;
          }
          p::before {
            content: "";
            position: absolute;
            bottom: 0;
            width: 100%;
            background-color: red;
            height: 7px;
            background: #985eff;
            z-index: -1;
          }
        }
      }
      .textMidPart {
        ${Media.PhoneLarge} {
          margin-top: 1rem;
        }
        .line {
          ${Media.PhoneLarge} {
            display: none;
          }
          p {
            font-family: "Roboto";
            font-size: 1.2rem;
            color: #1e1e1e;
          }
          span {
            display: block;
            width: 3px;
            min-height: 15rem;
            background: #1e1e1e;
            opacity: 0.3;
          }
        }
      }
    }
    ${Media.PhoneLarge} {
      margin-top: 2rem;
    }
  }
`;
