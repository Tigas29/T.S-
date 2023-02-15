import styled from "styled-components";
import { useState, useEffect } from "react";
import FadeLoader from "react-spinners/FadeLoader";

export default function Loading() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
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
            color={"#ff55ff"}
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
