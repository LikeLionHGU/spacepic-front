import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';
import { AiFillCamera } from 'react-icons/ai';
import axios from 'axios';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { TextField } from '@mui/material';

const Page = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  color: white;
`;

const Center = styled.div`
  max-width: 100vw;
  height: 100vh;
  background-color: #1c1c1c;
  color: white;
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
  margin-bottom: 20px;
`;

const CustomFileUpload = styled.label`
  border: 2px solid #565656;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 525px;
  cursor: pointer;
  background-color: #707070;
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

const photoFormSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  recode: Yup.string(),
});

export default function AddPhotoView() {
  const [mainImg, setMainImg] = useState(null);
  const [photoSentence, setPhotoSentence] = useState('');
  const history = useHistory();

  const methods = useForm({
    defaultValues: {
      title: '',
      recode: '',
      image: null,
    },
    mode: 'onChange',
    resolver: yupResolver(photoFormSchema),
  });

  const { register, handleSubmit, watch, setValue, getValues } = methods;

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append('file', mainImg); // 'file'는 서버에서 이미지를 받는 필드명
    formData.append(
      'post',
      new Blob([JSON.stringify(photoSentence)], {
        type: 'application/json',
      })
    );

    // axios
    //   .post(`${process.env.REACT_APP_BASE_URL}/api/post/add`, formData, {
    //     'Content-Type': 'multipart/form-data',
    //   })
    //   .then((result) => {
    //     console.log('up');
    //   })
    //   .catch((e) => {
    //     console.log('error');
    //     console.log(e);
    //   });

    // history.push('/finished');
  };

  const onMainUpload = (e) => {
    const file = e.target.files[0];
    setMainImg(file);
  };

  const takeitback = (e) => {
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
              <div
                style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}
              >
                <TextSub onClick={takeitback}>취소</TextSub>
                <TextSub onClick={handleSubmit(onSubmit)}>완료</TextSub>
              </div>
            </Header>
            <Img>
              {mainImg == null ? (
                <CustomFileUpload>
                  <input accept="image/*" type="file" onChange={onMainUpload} />
                  <AiFillCamera size={24} />
                </CustomFileUpload>
              ) : (
                mainImg && (
                  <img
                    width={'350px'}
                    src={URL.createObjectURL(mainImg)}
                    alt="Main"
                  />
                )
              )}
            </Img>

            <TextField
              {...register('title', { required: true })}
              size="small"
              sx={{ width: 1, border: '1px solid #fff' }}
              placeholder="사진의 제목을 작성해보세요"
              name="title"
            />
            <div style={{ margin: '20px' }} />
            <TextField
              {...register('recode')}
              size="small"
              sx={{ width: '100%', border: '1px solid #fff' }}
              placeholder="네컷사진과 함께 짧은 기록을 남겨보세요!"
              multiline
              rows={7}
              name="recode"
            />
          </div>
        </Center>
      </Page>
    </>
  );
}
