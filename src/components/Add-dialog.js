import React, { useState } from 'react';
import { Modal } from 'antd';
import AddPhoto from '../assets/imgs/postIcon.svg';
import ThreeIcon from '../assets/imgs/ThreeIcon.svg';
import styled from 'styled-components';

const AddPhotoBtn = styled.img`
  width: 100px;
  margin-bottom: 40px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

const Icon = styled.img`
  width: 150px;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

const Desc = styled.div`
  font-size: 18px;
  margin: 20px 0px;
  text-align: center;
  line-height: 1.5;
  color: #8c8c8c;
`;

export default function AddDialog() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <AddPhotoBtn onClick={showModal} src={AddPhoto} />
      <Modal
        centered
        open={isModalOpen}
        footer={false}
        onCancel={handleCancel}
        width={800}
      >
        <Container>
          <Icon src={ThreeIcon} alt="ThreeIcon" />
          <Title> 스픽과 함께 시작해볼까요!</Title>
          <Desc>
            <div style={{ fontWeight: 'bold' }}>
              회원가입 한번이면 충분해요!
            </div>
            <div>아래의 QR코드를 통해 간편 회원가입 후,</div>
            <div> 여러분의 크리스마스를 네컷사진으로 뽐내보세요:)</div>
          </Desc>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
            alt="ThreeIcon"
          />
        </Container>
      </Modal>
    </>
  );
}
