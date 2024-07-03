import styled, { keyframes, css } from "styled-components";

const Media = {
  Laptop: "@media(max-width:1220px)",
  Nav: "@media(max-width:1000px)",
  Tablet: "@media(max-width:768px)",
  PhoneLarge: "@media(max-width:600px)",
};

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
  overflow: hidden;
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
          #ffffff 30.81%,
          #ffffff 53.58%,
          #e1e1e1 70.36%,
          #d9d9d9 98.61%
        );
        transition: opacity 0.5s linear;
        opacity: 1;
      }
    `}

  .containerBanner {
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 2rem;
    position: relative;

    img {
      position: absolute;
      width: 100%;
      height: 50vh;
      opacity: 0.3;
      object-fit: cover;
      z-index: -1;
    }

    h1 {
      font-family: "Roboto";
      color: var(--header-link);
      margin-bottom: 1rem;

      ${Media.PhoneLarge} {
        font-size: 1.6rem;
      }
    }
  }
`;

export const ConfigSize = styled.div`
  width: 90%; /* Ajuste para ocupar toda a largura disponível */
  max-width: 80rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin: auto;
  position: relative;
  color: var(--light);

  ${Media.Tablet} {
    width: 90%; /* Ajuste para ocupar toda a largura disponível */
    max-width: 80rem;
  }

  .gap {
    margin-top: 1.5rem; /* Ajuste o espaçamento vertical conforme necessário */
    margin-bottom: 1.5rem; /* Adicionando um espaço uniforme abaixo de cada seção */
  }

  .imageSection {
    width: 100%;
    max-height: 500px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      ${Media.Tablet} {
        height: 300px;
      }
    }
  }

  h2,
  h3 {
    color: var(--purple);
    font-size: 1.8rem; /* Reduzindo o tamanho da fonte para telas menores */
    text-align: left;
    margin-bottom: 1rem;
  }

  h3 {
    color: var(--light);
  }

  p,
  li {
    color: var(--std-color);
    line-height: 1.6;
    margin-bottom: 1rem;
    text-align: left;
  }

  a {
    color: var(--header-link-hover);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  pre,
  code {
    background-color: var(--bg);
    color: var(--light);
    padding: 0.5rem;
    border-radius: 5px;
    width: 100%;
    overflow-x: auto;
    margin-bottom: 1rem;
    text-align: left;
  }

  ul,
  ol {
    padding-left: 1.5rem;

    li {
      margin-bottom: 0.5rem;
    }
  }

  .mediaSection {
    width: 90%; /* Ajuste para ocupar toda a largura disponível */
    max-width: 80rem;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto; /* Centraliza o conteúdo horizontalmente */
    padding: 0 1rem; /* Adiciona margens laterais */
    max-width: 100%; /* Garante que o vídeo não ultrapasse a largura do contêiner */
    box-sizing: border-box; /* Garante que padding não aumente a largura total */

    ${Media.PhoneLarge} {
      width: 100%; /* Ajuste para ocupar toda a largura disponível */
      height: 40vh;

      max-width: 100%; /* Garante que o iframe ocupe toda a largura em telas pequenas */
    }
  }

  .mediaSection iframe {
    width: 100%; /* O vídeo ocupa toda a largura do contêiner */
    max-width: 100%; /* Garante que o vídeo não ultrapasse a largura do contêiner */
    height: 100%; /* O vídeo ocupa toda a largura do contêiner */
    max-height: 100%; /* Garante que o vídeo não ultrapasse a largura do contêiner */
    margin-bottom: 1rem; /* Espaçamento inferior para separar do próximo conteúdo */

    ${Media.Laptop} {
      max-width: 80%; /* Reduz a largura máxima do iframe para telas maiores */
    }

    ${Media.Tablet} {
      max-width: 90%; /* Ajusta a largura máxima do iframe para tablets */
    }

    ${Media.PhoneLarge} {
      max-width: 100%; /* Garante que o iframe ocupe toda a largura em telas pequenas */
    }
  }

  ${Media.PhoneLarge} {
    h2,
    h3 {
      font-size: 1.6rem; /* Reduzir ainda mais o tamanho da fonte para telas pequenas */
    }

    pre {
      width: 88%; /* Ajusta o tamanho do bloco de código para 80% da largura disponível */
    }
  }
`;
