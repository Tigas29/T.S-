import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import FadeLoader from "react-spinners/FadeLoader";

export default function Loading() {
  const [loading, setLoading] = useState(true);
  const contentRef = useRef(null);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      if (contentRef.current) {
        setLoading(false);
      }
    }, 1000);
  }, [contentRef]);

  const CONTAINER = styled.div`
    .Icon {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background-color: #393939;
      position: fixed;
      z-index: 9999999999999999999999999;
    }
  `;
  return (
    <CONTAINER>
      {loading ? (
        <div className="Icon">
          <FadeLoader
            color={"#682ae9"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div ref={contentRef}></div>
      )}
    </CONTAINER>
  );
}
