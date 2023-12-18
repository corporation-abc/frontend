import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;
  color: white;
  font-weight: 600;
  font-size: 1.5rem;
`;

const Loader = styled.div`
  border: 6px solid #f3f3f383;
  border-top: 6px solid #ffffff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;

const Loading = () => {
  return (
    <div>
      <LoaderContainer>
        <Loader />
        미니 피규어 찾는 중
      </LoaderContainer>
    </div>
  );
};

export default Loading;
