import styled from 'styled-components';
import logofooter from '../assets/imgs/LogoFooter.png';

const Div = styled.div`
  width: 100vw;
  height: 30vh;
  background: linear-gradient(to top, #a15ef6, black);
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  z-index: -1;
`;

const Img = styled.img`
  width: 125px;
  z-index: 1;
  margin-bottom: 60px;
`;

const Text = styled.div`
  z-index: 1;
  margin-bottom: 60px;
  color: #31006f;
  font-size: 20px;
`;

export default function Footer() {
  return (
    <>
      <Div>
        <Img src={logofooter} alt="logo" />
        <Text>copyright © 2023 SPACEPIC 멋쟁이사자처럼</Text>
      </Div>
    </>
  );
}
