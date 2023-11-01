import styled from 'styled-components';
import { ReactComponent as Logo } from '../assets/imgs/Logo.svg';
import { Link } from 'react-router-dom';
import { BiSolidUserCircle } from 'react-icons/bi';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import GoogleButton from '../auth/GoogleLogin';
import { Typography } from 'antd';

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
  justify-content: space-between;
  padding: 75px 50px;
  position: fixed;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  font-size: 20px;
  gap: 20px;
`;

const Btn = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  gap: 10px;
  color: #9f9f9f;
  &:hover {
    color: white;
  }
`;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#F0F0F0',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          {/* <Link to="/login"> */}
          <Btn onClick={handleOpen}>
            Login <BiSolidUserCircle size={24} />
          </Btn>
          {/* </Link> */}
        </Buttons>
      </HeaderBar>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Logo />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Login
          </Typography>

          <GoogleButton />
        </Box>
      </Modal>
    </>
  );
}
