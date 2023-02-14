import { CircleLoader } from "react-awesome-loaders";
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
  z-index: 99999999999999999999999;
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
          <CircleLoader
            meshColor={"#985EFF"}
            lightColor={"#E0E7FF"}
            duration={1.5}
            desktopSize={"90px"}
            mobileSize={"64px"}
          />
        </LOADING>
      ) : (
        <></>
      )}
    </>
  );
}
