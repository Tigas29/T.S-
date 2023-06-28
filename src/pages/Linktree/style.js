import styled from "styled-components";
export const Container = styled.main`
  background: linear-gradient(
    136deg,
    #121214 0%,
    #101012 22.4%,
    #0f0f11 57.28%,
    #0f0f11 76.54%,
    #0c0c0e 97.4%,
    #0c0c0e 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: white;
  .col {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
  .imgBackground {
    position: absolute;
    right: 0;
    top: 0;
    width: 30vw;
    height: 30vw;
    &:last-child {
      right: inherit;
      top: inherit;
      left: 0;
      bottom: 0;
    }
  }

  section {
    width: 25rem;
    margin: auto;
    min-height: 90vh;
    gap: 1rem;
    padding: 2rem;
  }

  .introductionContainer {
    text-align: center;
    gap: 0.3rem;
    img {
      width: 7rem;
      height: 7rem;
    }
    h1 {
      color: #f3f4f6;
      font-size: 1.5rem;
      font-family: Roboto;
    }
    h2 {
      color: #6b7280;
      font-size: 1rem;
      font-family: Roboto;
    }
  }

  ol {
    gap: 0.3rem;
  }

  .linksContainer {
    width: 100%;
    gap: 0.6rem;
    .link {
      width: 100%;
      height: 6rem;
      gap: 0.3rem;
      border-radius: 5.787px;
      background: #985eff;
      flex-shrink: 0;
      cursor: pointer;
      transition: all 0.3s;

      h3 {
        color: #fff;
        text-align: center;
        font-size: 1.266rem;
        font-family: Roboto;
        font-weight: 500;
      }

      p {
        color: #fff;
        text-align: center;
        font-size: 1.266rem;
        font-family: Roboto;
        opacity: 0.5;
      }
    }
    .behance:hover {
      background-color: #053eff;
    }
    .linkedin:hover {
      background-color: #0e76a8;
    }
    .github:hover {
      background-color: #171515;
    }
  }
`;
