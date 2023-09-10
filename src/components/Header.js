import styled from 'styled-components';
import LogoPng from '../imgs/Logo.png';

const HeaderBar = styled.div`
  height: 80px;
  background-color: #dddddd;
  display: flex;
  align-items: center;
  width: 100%;
`;

const Logo = styled.img`
  margin-left: 200px;
  width: 150px;
`;

export default function Header() {
  return (
    <>
      <HeaderBar>
        <Logo src={LogoPng} />
      </HeaderBar>
    </>
  );
}
