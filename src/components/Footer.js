import styled from 'styled-components';

const Div = styled.div`
  width: 100vw;
  height: 30vh;
  background: linear-gradient(to top, #a15ef6, black);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Footer() {
  return (
    <>
      <Div>{/* 미래의 푸터 내용 */}</Div>
    </>
  );
}
