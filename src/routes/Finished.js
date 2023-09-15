import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
`;

const Center = styled.div`
  max-width: 100vw;
  min-width: 390px;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin: 20px;
`;
const TextSub = styled.div`
  font-size: 14px;
  color: #9fa3aa;
`;

const FeedbackBtn = styled.button`
  padding: 15px 40px;
  border-radius: 30px;
  border: none;
  background-color: #d3b3fb;
  margin: 20px;
  font-weight: bold;
`;

export default function Finished() {
  const gotoFeedbackForm = () => {
    window.location.href = 'https://forms.gle/9Z1Z1Z1Z1Z1Z1Z1Z1';
  };

  return (
    <>
      <Page>
        <Center>
          <Title>사진 업로드를 완료했습니다!</Title>
          <TextSub>저희 서비스에 리뷰를 남겨주세요</TextSub>
          <TextSub>보내주신 리뷰는 저희의 소중한 자산이 됩니다:)</TextSub>
          <FeedbackBtn onClick={gotoFeedbackForm}> 리뷰 작성하기 </FeedbackBtn>
        </Center>
      </Page>
    </>
  );
}
