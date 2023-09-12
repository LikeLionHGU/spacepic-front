import styled from 'styled-components';
import star from '../assets/imgs/Star.png';

const Page = styled.div`
  height: 100vh;
  width: 100vw;
  /* background-color: black; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Logo = styled.div`
  font-size: 50px;
  font-family: 'IBM Plex Mono', monospace;
`;

const Img = styled.img`
  width: 60px;
  margin-top: 100px;
  margin-bottom: 50px;
`;

const Desc2 = styled.div`
  margin: 5px;
  font-size: 16px;
`;

const Desc1 = styled(Desc2)`
  margin-bottom: 30px;
`;

const URL = styled.div`
  color: #734bfb;
  margin-top: 75px;
  font-size: 16px;
  border-bottom: 1px solid #734bfb;
`;

const Sized = styled.div`
  height: 100px;
`;

export default function FirstPage() {
  return (
    <>
      <Page>
        <Logo> Space pic </Logo>
        <Img src={star} alt="star" />
        <Desc1> Spacepic에서 당신의 행성을 공유하세요! </Desc1>
        <Desc2> 우리는 이러쿵저러쿵할 예정이며,</Desc2>
        <Desc2>그로인해 유저는 이러한 </Desc2>
        <Desc2> 장점을 누릴 수 있습니다!</Desc2>
        <Desc2>들어가보실까용? </Desc2>
        <URL> Share your experience </URL>
        <Sized />
      </Page>
    </>
  );
}
