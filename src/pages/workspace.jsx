import styled from "styled-components";

export default function Workspace() {
  const Container = styled.div`
    overflow-x: hidden;
    background-color: gray;
    min-height: 200vh;
    position: relative;

    .animationIcon {
      display: block;
      position: absolute;
      width: 5rem;
      height: 5rem;
      background-color: black;
      border-radius: 50%;
    }
  `;

  return (
    <Container>
      <p>Testando work spcae</p>
      <span className="animationIcon" />
    </Container>
  );
}
