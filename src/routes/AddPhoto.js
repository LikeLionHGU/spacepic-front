import { useState } from 'react';
import styled from 'styled-components';
import { AiFillCamera } from 'react-icons/ai';
import { Form, Input } from 'antd';
import axios from 'axios';
import { Container } from '@mui/material';
// import axios from 'axios';

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
  /* background-color: lightblue; */
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const TextSub = styled.div`
  font-size: 14px;
  font-weight: bold;
  display: flex;
  text-align: start;
  margin-left: 5px;
`;

const Img = styled.div`
  margin-bottom: 30px;
`;

const CustomFileUpload = styled.label`
  border: 2px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 525px;
  cursor: pointer;
  background-color: #f7f7f7;
  color: #333;
  border-radius: 4px;
  font-size: 16px;

  &:hover {
    background-color: #e0e0e0;
  }

  input[type='file'] {
    display: none;
  }
`;

export default function AddPhoto() {
  const [mainImg, setMainImg] = useState(null);
  const [photoSentence, setPhotoSentence] = useState('');

  const onSubmit = () => {
    const formData = new FormData();
    formData.append('file', mainImg); // 'image'는 서버에서 이미지를 받는 필드명
    formData.append('post', photoSentence);
    console.log(formData.get('image'));

    axios
      .post(`http://27.96.135.222:8080/api/post/add`, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(result => {
        console.log('up');
        console.log(result);
        // navigate('/');
      })
      .catch(e => {
        console.log('error');
        console.log(e);
      });
  };

  const onMainUpload = e => {
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setMainImg(reader.result || null);
    };

    console.log(reader.result);
  };

  const takeitback = e => {
    setMainImg(null);
  };

  return (
    <>
      <Page>
        {/* <Container> */}
        <Center>
          <div style={{ padding: '20px' }}>
            <Header>
              <Title> 이미지 업로드 </Title>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
                <TextSub onClick={takeitback}>취소</TextSub>
                <TextSub onClick={onSubmit}>완료</TextSub>
              </div>
            </Header>
            <Img>
              {mainImg == null ? (
                <CustomFileUpload>
                  <input accept="image/*" multiple type="file" onChange={onMainUpload} />
                  <AiFillCamera size={24} />
                </CustomFileUpload>
              ) : (
                mainImg && <img width={'350px'} src={mainImg} alt="Main" />
                // mainImg && <img width={'350px'} src={URL.createObjectURL(mainImg)} alt="Main" />
              )}
            </Img>

            <Form.Item name="photo_sentence">
              <Input
                size="large"
                placeholder="간단한 문구를 작성하세요"
                onChange={e => setPhotoSentence(e.target.value)}
              />
            </Form.Item>
          </div>
        </Center>
        {/* </Container> */}
      </Page>
    </>
  );
}
