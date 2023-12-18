"use client";

import { useCallback, useRef, useState } from "react";
import { styled } from "styled-components";
import Image from "next/image";
import Webcam from "react-webcam";
import Loading from "../components/Loading";
import { ShowImg } from "../apis";
import { useMutation } from "react-query";
import { useRouter } from "next/navigation";

const Home = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const webcamRef = useRef(null);
  const router = useRouter();

  const { mutate, isLoading } = useMutation({
    mutationKey: ["LEGO"],
    mutationFn: () => ShowImg(),
    onSuccess: () => {
      router.push("/result");
    },
  });

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
    // mutate.mutate();
  }, [webcamRef]);

  console.log("***", imageSrc); // img src

  return (
    <Container>
      <MipiWrapper>
        <Header>
          <Image src="/images/MIPI.svg" alt="home" width={230} height={230} />
        </Header>
        <Nav>미니 피규어를 중앙에 맞춰주세요.</Nav>
        <WebcamWrapper>
          {isLoading ? (
            <LoadingOverlay>
              <Loading />
            </LoadingOverlay>
          ) : (
            <Webcam
              ref={webcamRef}
              style={{
                width: "85%",
                borderRadius: "0.8rem",
              }}
            />
          )}
        </WebcamWrapper>
        <SearchWrapper>
          <SearchButton onClick={capture}>
            <Image src="/images/Vector.svg" alt="home" width={26} height={26} />
          </SearchButton>
        </SearchWrapper>
      </MipiWrapper>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const MipiWrapper = styled.div`
  width: 550px;
  background-color: #fff9ee;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Nav = styled.div`
  width: 100%;
  height: 2%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WebcamWrapper = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchWrapper = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 1rem;
`;

const SearchButton = styled.div`
  width: 72px;
  height: 72px;
  background-color: #ec0707;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const LoadingOverlay = styled.div`
  width: 85%;
  height: 70%;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #a1a1a1;
`;
