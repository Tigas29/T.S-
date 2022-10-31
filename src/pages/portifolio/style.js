import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
`;

export const FrontCover = styled.div`
  width: 80%;
  max-width: 80rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
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
  }
`;
