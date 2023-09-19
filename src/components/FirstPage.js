import styled from 'styled-components';
import star from '../assets/imgs/Star.png';
import Logo from '../assets/imgs/Logo.png';

const Page = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Img = styled.img`
  width: 60px;
`;

const LogoImg = styled.img`
  width: 275px;
  margin-top: 50px;
  margin-bottom: 40px;
`;

const Desc = styled.div`
  margin: 5px;
  font-size: 18px;
`;

const SizedBox = styled.div`
  height: 250px;
`;

export default function FirstPage() {
  return (
    <>
      <Page>
        <Img src={star} alt="star" />
        <LogoImg src={Logo} alt="logo" />
        <Desc> 네컷사진에 진심인 사람들을 위한 </Desc>
        <Desc> 아카이빙에 진심인 사람들을 위한 </Desc>
        <SizedBox />
        <Desc>
          SPACEPIC은 여러분의 이야기와 순간들을 더 특별하게 만들어주는 곳입니다.
        </Desc>
        <Desc>
          지금 바로 이곳에서 사진을 게시하여, 소중한 순간들로 공간을 함께
          채워보세요.
        </Desc>
      </Page>
    </>
  );
}
