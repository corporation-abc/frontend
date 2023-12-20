'use client';

import React from 'react';
import { styled } from 'styled-components';
import { AiOutlineHome } from 'react-icons/ai';
import Share from '../../components/Share';
import { useRecoilValue } from 'recoil';
import { legoResult } from '../../store/result';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Result = () => {
  const result = useRecoilValue(legoResult);
  const router = useRouter();
  console.log('result', result.image);

  return (
    <Container>
      <MipiWrapper>
        <Header>
          <Title>{result.name}</Title>
          <SubTitle>{result.class_name}</SubTitle>
        </Header>
        <Body>
          <ImgWrapper imageUrl={result.image} />
        </Body>
        <DetailWrapper></DetailWrapper>
        <Footer>
          <FooterContents>
            <Btn>
              <Share />
            </Btn>
            <Btn>
              <AiOutlineHome
                onClick={() => {
                  router.push('/');
                }}
              />
            </Btn>
            <More>
              <Link href={result.url}>more</Link>
            </More>
          </FooterContents>
        </Footer>
      </MipiWrapper>
    </Container>
  );
};

export default Result;

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
`;

const Header = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

const Body = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  color: #000;
  text-align: center;
  font-size: 25px;
  font-style: normal;
  font-weight: 800;
  line-height: 28px;
`;

const SubTitle = styled.div`
  color: #828282;
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
`;
const ImgWrapper = styled.div`
  width: 23rem;
  height: 23rem;
  flex-shrink: 0;
  border-radius: 16px;
  border: 2px solid #dcdcdc;
  background: url(${(props) => props.imageUrl}) center / contain no-repeat;
  background-color: white;
`;

const DetailWrapper = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailImg = styled.div`
  width: 80%;
  height: 12rem;
  background-color: white;
`;

const Footer = styled.div`
  width: 100%;
  height: 12%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterContents = styled.div`
  width: 60%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Btn = styled.div`
  width: 45px;
  height: 45px;
  border: 2px solid #dcdcdc;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const More = styled.div`
  width: 70px;
  height: 48px;
  border: 2px solid #dcdcdc;
  border-radius: 1rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
