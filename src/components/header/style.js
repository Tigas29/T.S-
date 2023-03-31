import styled, { css } from "styled-components/";
const Media = {
  Nav: "@media(max-width:1000px)",
  PhoneLarge: "@media(max-width:600px)",
};
export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 99;
  width: 100%;
  .header {
    position: absolute;
    width: 100%;
    background: linear-gradient(
      180deg,
      #0f0f12 26.43%,
      rgba(15, 15, 17, 0) 73.78%
    );
    transition: all 0.5s linear 0.1s;

    ${({ isanimation }) =>
      isanimation &&
      css`
        background: linear-gradient(
          180deg,
          #fff 26.43%,
          rgba(15, 15, 17, 0) 73.78%
        );
        transition: all 0.5s linear 0.1s;
      `}
    z-index: -2;
    .logoSide {
      ${({ isanimation }) =>
        isanimation &&
        css`
          filter: saturate(0);
          filter: brightness(0);
        `}
    }
    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 6rem;
      width: 80%;
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
          opacity: 1;
          transition: all 0.5s linear 0.1s;
          ${({ isVisible }) =>
            isVisible &&
            css`
              opacity: 0;
              transition: all 0.5s linear 0.1s;
            `}
        }
      }
      .closeMenu {
        position: absolute;
        opacity: 0;
        z-index: -1;
        right: 5%;
        transition: all 0.1s linear;

        ${Media.Nav} {
          ${({ isVisible }) =>
            isVisible &&
            css`
              z-index: 0;
              opacity: 1;
            `}
        }
      }
      .menuSide {
        ${Media.Nav} {
          width: 100%;
          min-height: 100vh;
          margin-left: 100%;
          padding: 0 45px 36px 0px;

          position: absolute;
          top: -36px;
          bottom: 34px;
          z-index: -2;

          align-items: flex-end;
          justify-content: flex-end;
          flex-direction: column;
          gap: 50px;

          backdrop-filter: blur(5px);
          ${({ isVisible }) =>
            isVisible &&
            css`
              transition: margin-left 0.8s cubic-bezier(0.65, 0.05, 0.36, 1);
              opacity: 1;
              margin-left: 1px;
              left: -42px;
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
          ${({ isanimation }) =>
            isanimation &&
            css`
              font-weight: 400;
              color: #1e1e1e;
            `}
          &:hover {
            transition: all 0.2s linear;
            color: #985eff;
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
        .color {
          color: #985eff;
          font-weight: 400;
          ${({ isanimation }) =>
            isanimation &&
            css`
              color: #1e1e1e;
            `}
        }
      }
    }
  }
`;
