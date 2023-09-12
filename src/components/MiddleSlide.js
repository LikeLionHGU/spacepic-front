import styled from 'styled-components';

const Page = styled.div`
  height: 50vh;
  width: 100vw;
  /* background-color: gray; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Desc = styled.div`
  margin: 5px;
  font-size: 16px;
`;

export default function MiddleSlide() {
  return (
    <>
      <Page>
        <Desc> Spacepic에서 당신의 행성을 공유하세요! </Desc>
        <div style={{ height: '50px' }} />
        <Desc> 우리는 이러쿵저러쿵할 예정이며,</Desc>
        <Desc>그로인해 유저는 이러한</Desc>
        <Desc> 장점을 누릴 수 있습니다!</Desc>
        <Desc>들어가보실까용? </Desc>
      </Page>
    </>
  );
}
