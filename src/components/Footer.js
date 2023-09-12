import styled from 'styled-components';

const Div = styled.div`
  width: 100vw;
  height: 30vh;
  background: linear-gradient(to top, #a15ef6, black); /* 보라색 그라데이션 */
  color: white; /* 글자 색을 흰색으로 설정 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Footer() {
  return (
    <>
      <Div> </Div>
    </>
  );
}
