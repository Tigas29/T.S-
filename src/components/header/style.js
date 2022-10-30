import styled, { css } from "styled-components/";
const Media = {
  Laptop: "@media(max-width:1220px)",
  Nav: "@media(max-width:1000px)",
  Tablet: "@media(max-width:1000px)",
  PhoneLarge: "@media(max-width:600px)",
};
export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 99;
  width: 100%;
  background: linear-gradient(
    180deg,
    #0f0f12 26.43%,
    rgba(15, 15, 17, 0) 73.78%
  );
  .header {
    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 6rem;
      max-width: 80rem;
      margin: auto;
      ${Media.Nav} {
        width: 90%;
      }

      .menu {
        display: none;
        ${Media.Nav} {
          display: block;
          width: 3em;
          height: 3em;
          color: #f0f0f0;
          transition: all 0.5s linear 0.1s;
          opacity: 1;
          ${({ isVisible }) =>
            isVisible &&
            css`
              opacity: 0;
            `}
        }
      }
      .closeMenu {
        position: absolute;
        opacity: 0;
        /* display: none; */
        z-index: -1;
        right: 25px;
        transition: all 0.1s linear 0.3s;

        ${Media.Nav} {
          ${({ isVisible }) =>
            isVisible &&
            css`
              z-index: 0;
              opacity: 1;
              display: block;
            `}
        }
      }
      .menuSide {
        ${Media.Nav} {
          align-items: flex-end;
          justify-content: flex-end;
          position: absolute;
          flex-direction: column;
          top: -10rem;
          margin-left: 100%;
          z-index: 99;
          min-height: 100vh;
          width: 90vw;
          padding: 8rem 0 0;
          z-index: -2;
          transition: margin-left 1s cubic-bezier(0.65, 0.05, 0.36, 1) 0.1s;
          gap: 50px;
          ${({ isVisible }) =>
            isVisible &&
            css`
              margin-left: 1px;
            `}
        }

        width: 30rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        .Options {
          font-family: "Roboto";
          font-weight: 300;
          color: #f0f0f0;
          font-size: 17px;
          &:hover {
            color: #985eff;
            font-weight: 400;
            transition: all 0.2s linear;
          }
          ${Media.Nav} {
            font-size: 2rem;
            font-weight: 400;
            &:hover {
              font-weight: 700;
            }
          }
          ${Media.PhoneLarge} {
            font-size: 1rem;
          }
        }
      }
    }
  }
`;
