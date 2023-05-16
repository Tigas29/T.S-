import styled, { keyframes } from "styled-components";

export default function Workspace() {
  const animate = keyframes`
      0%{background-position:left};
    100%{background-position:right}
  
  `;
  const Container = styled.div`
    min-height: 100vh;
    position: relative;
    background-image: linear-gradient(
      117.4deg,
      #121214,
      #101012,
      #0f0f11,
      #0f0f11,
      #0c0c0e,
      #0c0c0e,
      #ffffff,
      #ededed,
      #ffffff,
      #e1e1e1,
      #d9d9d9
    );
    background-size: 350%;
    animation: ${animate} 5.5s linear alternate;
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
      <div className="gradient">Hello</div>
    </Container>
  );
}
