import styled from 'styled-components';
import star from '../imgs/Star.png';

const Page = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Logo = styled.div`
  font-size: 50px;
`;

const Img = styled.img`
  width: 115px;
  margin-top: 100px;
  margin-bottom: 50px;
`;

const Desc = styled.div`
  margin: 5px;
  font-size: 22px;
`;

const URL = styled.div`
  color: #734bfb;
  margin: 10px;
  font-size: 30px;
  border-bottom: 1px solid #734bfb;
`;

const Sized = styled.div`
  height: 100px;
`;

export default function FirstPage() {
  return (
    <>
      <Page>
        <Logo> SPACE PIC </Logo>
        <Img src={star} alt="star" />
        <Desc> 우리는 이러쿵저러쿵할 예정이며,</Desc>
        <Desc>그로인해 유저는 이러한 장점을 누릴 수 있습니다!</Desc>
        <Desc>들어가보실까용? </Desc>
        <URL> Share your experience </URL>
        <Sized />
      </Page>
    </>
  );
}
