import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Header from '../components/Header';
import { RHFUpload } from '../components/hook-form';
import styled from 'styled-components';
import FormProvider from '../components/hook-form/FormProvider';

const Pick = styled.div`
  position: relative;
  letter-spacing: 0.46px;
`;
const FrameChild = styled.img`
  position: relative;
  width: 36.83px;
  height: 19.83px;
`;
const PickParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
  color: #fff;
`;
const MemoParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
`;
const FrameParent = styled.div`
  position: absolute;
  top: 142px;
  left: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
  font-size: 30px;
  font-family: 'Neue Haas Grotesk Text Pro';
`;

const photoFormSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  date: Yup.date().required('Date is required'),
  place: Yup.string().required('Place is required'),
  with: Yup.string(),
  recode: Yup.string(),
});

export default function AddPhoto() {
  const [step, setStep] = useState(1);
  const history = useHistory();

  const methods = useForm({
    defaultValues: {
      title: '',
      date: '',
      place: '',
      with: '',
      recode: '',
      image: null,
    },
    mode: 'onChange',
    resolver: yupResolver(photoFormSchema),
  });

  const { register, handleSubmit, watch, setValue, getValues } = methods;

  const handleDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];

    const newFile = Object.assign(file, {
      preview: URL.createObjectURL(file),
    });

    if (file) {
      setValue('image', newFile);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRemoveFile = () => {
    setValue('image', null);
  };

  const goToNextStep = () => {
    setStep(step + 1);
  };

  const imageFile = watch('image');

  const onSubmit = (data) => {
    const date = new Date(data.date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedDate = `${year}/${month.toString().padStart(2, '0')}/${day
      .toString()
      .padStart(2, '0')}`;

    const postData = {
      meaning: data.recode,
      memberId: 1,
      title: data.title,
      place: data.place,
      people: data.with,
      pictureDate: formattedDate,
    };

    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append(
      'post',
      new Blob([JSON.stringify(postData)], {
        type: 'application/json',
      })
    );

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/api/post/add`, formData, {
        'Content-Type': 'multipart/form-data',
      })
      .then((result) => {
        alert('성공적으로 업로드 되었습니다.');
        history.push('/');
      })
      .catch((e) => {
        console.log('error');
        console.log(e);
      });
  };

  const imageForm = (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 502,
        height: 552,
        p: 4,
      }}
    >
      <RHFUpload
        name="image"
        maxSize={3145728}
        onDrop={handleDrop}
        onDelete={handleRemoveFile}
        sx={{ height: 1 }}
      />
    </Paper>
  );

  const memoForm = (
    <Table
      sx={{
        td: { border: 0 },
        'td:nth-of-type(1)': { width: 100 },
        'td:nth-of-type(2)': { width: 400 },
        'td:first-of-type': { verticalAlign: 'top' },
      }}
    >
      <TableBody>
        <TableRow>
          <TableCell>
            <Typography variant="h6" sx={{ color: '#fff' }}>
              Title
            </Typography>
          </TableCell>
          <TableCell>
            <TextField
              {...register('title', { required: true })}
              size="small"
              sx={{ width: 1, border: '1px solid #fff' }}
              placeholder="제목을 작성해주세요."
              name="title"
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography variant="h6" sx={{ color: '#fff' }}>
              Date
            </Typography>
          </TableCell>
          <TableCell>
            <TextField
              {...register('date', { required: true })}
              size="small"
              sx={{ width: 1, border: '1px solid #fff' }}
              placeholder="날짜를 입력해주세요."
              type="date"
              name="date"
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography variant="h6" sx={{ color: '#fff' }}>
              Place
            </Typography>
          </TableCell>
          <TableCell>
            <TextField
              {...register('place', { required: true })}
              size="small"
              sx={{ width: 1, border: '1px solid #fff' }}
              placeholder="방문했던 장소를 기록해주세요."
              name="place"
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography variant="h6" sx={{ color: '#fff' }}>
              With
            </Typography>
          </TableCell>
          <TableCell>
            <TextField
              {...register('with')}
              size="small"
              sx={{ width: 1, border: '1px solid #fff' }}
              placeholder="함께한 사람들을 기록해보세요."
              name="with"
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography variant="h6" sx={{ color: '#fff' }}>
              Recode
            </Typography>
          </TableCell>
          <TableCell>
            <TextField
              {...register('recode')}
              size="small"
              sx={{ width: 1, border: '1px solid #fff' }}
              placeholder="내용을 입력해주세요."
              multiline
              rows={7}
              name="recode"
            />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );

  const checkForm = (
    <Table
      sx={{
        'td:nth-of-type(1)': { width: 100 },
        'td:nth-of-type(2)': { width: 400 },
        'tr:last-child td': { borderBottom: 0 },
        'td:first-of-type': { verticalAlign: 'top' },
      }}
    >
      <TableBody>
        <TableRow>
          <TableCell>
            <Typography variant="h6" sx={{ color: '#fff' }}>
              Title
            </Typography>
          </TableCell>
          <TableCell>{getValues('title')}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography variant="h6" sx={{ color: '#fff' }}>
              Date
            </Typography>
          </TableCell>
          <TableCell>{getValues('date')}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography variant="h6" sx={{ color: '#fff' }}>
              Place
            </Typography>
          </TableCell>
          <TableCell>{getValues('place')}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography variant="h6" sx={{ color: '#fff' }}>
              With
            </Typography>
          </TableCell>
          <TableCell>
            {getValues('with') === '' ? '없음' : getValues('with')}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography variant="h6" sx={{ color: '#fff' }}>
              Recode
            </Typography>
          </TableCell>
          <TableCell sx={{ whiteSpace: 'pre-wrap' }}>
            {getValues('recode') === '' ? '없음' : getValues('recode')}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );

  let formContent;
  switch (step) {
    case 1:
      formContent = imageForm;
      break;
    case 2:
      formContent = memoForm;
      break;
    case 3:
      formContent = checkForm;
      break;
    default:
      formContent = checkForm;
  }

  const ImagePreview = () => (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: 400,
        maxWidth: 400,
        px: 5,
        py: 4,
        gap: 3,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: 1,
        }}
      >
        <Typography variant="h6" color="primary.main">
          선택한 사진
        </Typography>
        <IconButton
          onClick={() => {
            setValue('image', null);
            setStep(1);
          }}
          color="primary"
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Avatar
        src={watch('image').preview}
        alt=""
        sx={{ width: 1, height: 'auto' }}
        variant="rounded"
      />

      {step === 3 ? (
        <Button
          onClick={handleSubmit(onSubmit)}
          variant="contained"
          color="primary"
          sx={{ width: 1, p: 1 }}
        >
          완료
        </Button>
      ) : (
        <Button
          onClick={goToNextStep}
          variant="contained"
          color="primary"
          sx={{ width: 1, p: 1 }}
        >
          확인
        </Button>
      )}
    </Paper>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <FrameParent>
        <PickParent>
          <Pick style={{ color: step === 1 ? '#fff' : '#9f9f9f' }}>
            01 Pick
          </Pick>
          {step === 1 ? (
            <FrameChild alt="" src="/vector-12.svg" />
          ) : (
            <FrameChild alt="" src="/vector-13.svg" />
          )}
        </PickParent>
        <MemoParent>
          <Pick style={{ color: step === 2 ? '#fff' : '#9f9f9f' }}>
            02 Memo
          </Pick>
          {step === 2 ? (
            <FrameChild alt="" src="/vector-12.svg" />
          ) : (
            <FrameChild alt="" src="/vector-13.svg" />
          )}
        </MemoParent>
        <Pick style={{ color: step === 3 ? '#fff' : '#9f9f9f' }}>03 Check</Pick>
      </FrameParent>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ mt: 20, ml: 40, display: 'flex', gap: 8 }}>
          <Box>{formContent}</Box>
          {watch('image') && <ImagePreview />}
        </Box>
      </FormProvider>
    </Box>
  );
}
