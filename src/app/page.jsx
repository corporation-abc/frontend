'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import Image from 'next/image';
import Loading from '../components/Loading';
import instance from '../apis/httpClinet';
import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import { legoResult } from '../store/result';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photoDataURL, setPhotoDataURL] = useState(null);
  const router = useRouter();
  const videoRef = useRef(null);
  const setResult = useSetRecoilState(legoResult);

  useEffect(() => {
    const initWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        console.log('Stream:', stream);

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing webcam:', error);
      }
    };

    initWebcam();

    return () => {
      const stream = videoRef.current ? videoRef.current.srcObject : null;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, [videoRef]);

  const takePhoto = useCallback(() => {
    setIsLoading(true);

    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    context.scale(-1, 1);
    context.translate(-canvas.width, 0);

    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    canvas.toBlob(async (blob) => {
      const formData = new FormData();
      formData.append('file', blob, 'captured-photo.jpg');

      try {
        const response = await instance
          .post('/', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((response) => {
            console.log('Success:', response.data);
            router.push('/result');
            setResult({
              class_name: response.data.class_name,
              confidence: response.data.confidence,
              name: response.data.name,
              url: response.data.url,
              image: response.data.image,
            });
          });
      } catch (error) {
        console.error('Error uploading photo:', error);
      } finally {
        setIsLoading(false);
      }
    }, 'image/jpeg');
  }, [setIsLoading, setHasPhoto, setPhotoDataURL]);

  return (
    <Container>
      <MipiWrapper>
        <Header>
          <Image src='/images/MIPI.svg' alt='home' width={230} height={230} />
        </Header>
        <Nav>미니 피규어를 중앙에 맞춰주세요.</Nav>
        <WebcamWrapper>
          {isLoading ? (
            <LoadingOverlay>
              <Loading />
            </LoadingOverlay>
          ) : (
            <Video ref={videoRef} autoPlay playsInline></Video>
          )}
        </WebcamWrapper>
        <SearchWrapper>
          <SearchButton onClick={takePhoto}>
            <Image src='/images/Vector.svg' alt='home' width={26} height={26} />
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

const Video = styled.video`
  width: 85%;
  height: 85%;
`;
