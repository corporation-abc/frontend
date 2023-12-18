"use client";

import React from "react";
import { styled } from "styled-components";
import { LuShare } from "react-icons/lu";
import { AiOutlineHome } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Share from "../../components/Share";

const Page = () => {
  const router = useRouter();

  return (
    <Container>
      <MipiWrapper>
        <Header>
          <Title>Brick Suit Guy</Title>
          <SubTitle>No. col313</SubTitle>
        </Header>
        <Body>
          <ImgWrapper />
        </Body>
        <DetailWrapper>
          <DetailImg></DetailImg>
        </DetailWrapper>
        <Footer>
          <FooterContents>
            <Btn>
              {/* <LuShare /> */}
              <Share />
            </Btn>
            <Btn>
              <AiOutlineHome
                onClick={() => {
                  router.push("/");
                }}
              />
            </Btn>
            <More>more</More>
          </FooterContents>
        </Footer>
      </MipiWrapper>
    </Container>
  );
};

export default Page;

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
  font-size: 26px;
  font-style: normal;
  font-weight: 800;
  line-height: 21px;
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
  background: url(<path-to-image>), white 50% / cover no-repeat;
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
