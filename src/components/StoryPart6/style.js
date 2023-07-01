<<<<<<< HEAD
import styled from "styled-components";
import background from "../../imgs/backgroundChoices.png";

=======
import styled, { keyframes } from "styled-components";
import background from "../../imgs/handsPhotoMatrix/leftHand.png";
import background2 from "../../imgs/handsPhotoMatrix/RightHand.png";
const breathingRed = keyframes`
  0% {

          box-shadow: 0px 0px 200px 12px #ff1e3a;

  }

  50% {
          box-shadow: 0px 0px 100px 12px #ff1e3a;

  }


  100% {

          box-shadow: 0px 0px 180px 12px #ff1e3a;
  
  }
`;

const breathingBlue = keyframes`
  0% {

          box-shadow: 0px 0px 200px 12px #539ef4;

  }

  50% {
          box-shadow: 0px 0px 100px 12px #539ef4;

  }


  100% {

          box-shadow: 0px 0px 180px 12px #539ef4;
  
  }
`;
>>>>>>> 024125e42d192ec56a0037e02710cb7e1dde343a
const Media = {
  Laptop: "@media(max-width:1220px)",
  Nav: "@media(max-width:1000px)",
  Tablet: "@media(max-width:1000px)",
  PhoneLarge: "@media(max-width:600px)",
};
export const ContainerStory = styled.div`
<<<<<<< HEAD
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
=======
  padding-top: 20rem;
  min-height: 100vh;
  display: flex;
  flex-direction: Column;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
  ${Media.PhoneLarge} {
    min-height: 100vh;

    justify-content: space-around;
  }
  .Patterns {
    font-family: "Roboto";
    color: #fff;
    opacity: 0.8;
  }

  .row {
>>>>>>> 024125e42d192ec56a0037e02710cb7e1dde343a
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
<<<<<<< HEAD
  .columnTable {
=======
  .col {
>>>>>>> 024125e42d192ec56a0037e02710cb7e1dde343a
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .title {
    font-weight: 300;
    font-size: 3rem;
<<<<<<< HEAD
    text-align: center;
=======
>>>>>>> 024125e42d192ec56a0037e02710cb7e1dde343a
    ${Media.Tablet} {
      width: 100%;
      font-size: 2rem;
    }
    ${Media.PhoneLarge} {
      font-size: 1.8rem;
    }
<<<<<<< HEAD

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
=======
  }
  .handsContainer {
    width: 100%;
    justify-content: space-between;
    ${Media.PhoneLarge} {
      flex-direction: column;
      justify-content: space-evenly;
      gap: 3rem;
      margin-top: -10rem;
    }
  }
  .OptionContainer {
    width: 50%;
    min-height: 50vh;
    background-size: contain;
    background-repeat: no-repeat;
    ${Media.PhoneLarge} {
      background-image: inherit !important;
      min-height: 10vh;
    }
    .buttonContainer {
      margin-top: -10rem;
      ${Media.PhoneLarge} {
        margin-top: 0;
      }
      img {
        ${Media.Laptop} {
          width: 7rem;
          height: 7rem;
        }
        ${Media.Tablet} {
          width: 5rem;
          height: 5rem;
        }

        ${Media.PhoneLarge} {
          display: none;
        }
      }
      a,
      button {
        background-color: transparent;
        font-weight: 300;
        font-size: 2.2rem;
        padding: 0.3rem 2rem;
        cursor: pointer;
        color: #fafafa;
        margin-top: -5rem;

        ${Media.Laptop} {
          font-size: 1.8rem;
        }
        ${Media.Tablet} {
          font-size: 1.2rem;
        }
        ${Media.PhoneLarge} {
          font-size: 1.8rem;
        }
      }
    }
  }
  .opt1 {
    background-position: left;
    background-image: url(${background});

    .redButton {
      border: 1px solid #8c2e2e;
      box-shadow: 0px 0px 200px 12px #ff1e3a;
      transition: all 0.3s;

      &:hover {
        animation: ${breathingRed} 3s linear infinite;
        transition: all 0.3s;
      }
    }
  }
  .opt2 {
    background-position: right;
    background-image: url(${background2});

    .blueButton {
      border: 1px solid #539ef4;
      box-shadow: 0px 0px 200px 12px #539ef4;
      transition: all 0.3s;

      &:hover {
        animation: ${breathingBlue} 3s linear infinite;
        transition: all 0.3s;
>>>>>>> 024125e42d192ec56a0037e02710cb7e1dde343a
      }
    }
  }
`;
