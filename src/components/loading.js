import { BoxesLoader } from "react-awesome-loaders";
import { useEffect, useState } from "react";
import styled from "styled-components";

const LOADING = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #393939;
  position: fixed;
  z-index: 9999999999999999999999999;
`;

export default function Loading() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <LOADING>
          <BoxesLoader
            boxColor={"#985EFF"}
            style={{ marginBottom: "20px" }}
            desktopSize={"128px"}
            mobileSize={"80px"}
          />
        </LOADING>
      ) : (
        <></>
      )}
    </>
  );
}
