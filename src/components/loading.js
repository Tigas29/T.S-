import styled from "styled-components";
import { useState, useEffect } from "react";
import FadeLoader from "react-spinners/FadeLoader";

export default function Loading() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

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
        <></>
      )}
    </CONTAINER>
  );
}
