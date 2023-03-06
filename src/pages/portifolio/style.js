import styled from "styled-components";

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
  min-height: 100vh;

  hr {
    width: 3px;
    min-height: 72%;
    position: absolute;
    background-color: #985eff;
    left: -1.5rem;
    top: 27%;
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
