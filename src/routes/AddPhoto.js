import { useState } from 'react';
import styled from 'styled-components';
import { AiFillCamera } from 'react-icons/ai';
import axios from 'axios';
import TextField from '@mui/material/TextField';

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

  const onSubmit = async () => {
    const formData = new FormData();
    const postData = {
      meaning: photoSentence,
    };
    formData.append('post', JSON.stringify(postData));
    formData.append('file', mainImg);
    console.log(formData.get('file'));
    console.log(formData.get('post'));

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    await axios
      .post(`http://27.96.135.222:8080/api/post/add`, formData, config)
      .then(response => {
        console.log('업로드 성공');
        console.log(response.data);
      })
      .catch(error => {
        console.log('업로드 오류');
        console.error(error);
      });
  };

  const onMainUpload = e => {
    const file = e.target.files[0];
    setMainImg(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      console.log('result', reader.result);
    };
  };

  const takeitback = e => {
    setMainImg(null);
    setPhotoSentence('');
  };

  return (
    <>
      <Page>
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
                  <input accept="image/*" type="file" onChange={onMainUpload} />
                  <AiFillCamera size={24} />
                </CustomFileUpload>
              ) : (
                mainImg && <img width={'350px'} src={URL.createObjectURL(mainImg)} alt="Main" />
              )}
            </Img>
            <TextField
              id="outlined-basic"
              variant="outlined"
              style={{ width: '100%' }}
              value={photoSentence}
              onChange={e => setPhotoSentence(e.target.value)}
            />
          </div>
        </Center>
      </Page>
    </>
  );
}
