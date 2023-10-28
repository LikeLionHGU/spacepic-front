import styled from 'styled-components';
import { ReactComponent as Logo } from '../assets/imgs/Logo.svg';
import { Link } from 'react-router-dom';

const HeaderBar = styled.div`
  height: 80px;
  width: 100vw;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  font-size: 20px;
  gap: 20px;
`;

const Btn = styled.div`
  color: #9f9f9f;
  &:hover {
    color: white;
  }
`;

export default function Header() {
  return (
    <>
      <HeaderBar>
        <Link to="/">
          <Logo />
        </Link>
        <Buttons>
          <Link to="/">
            <Btn>Home</Btn>
          </Link>
          <Link to="/archive">
            <Btn>Archive</Btn>
          </Link>
          <Link to="/login">
            <Btn>Login</Btn>
          </Link>
        </Buttons>
      </HeaderBar>
    </>
  );
}
