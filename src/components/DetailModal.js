import React from 'react';
import {
  Dialog as MuiDialog,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const theme = createTheme({
  components: {
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          color: '#FFFFFF',
          fontSize: 24, // 원하는 폰트 색상으로 변경해주세요
        },
      },
    },
    MuiBtn: {
      styleOverrides: {
        root: {
          color: '#FFFFFF',
        },
      },
    },
  },
});

const Dialog = styled(MuiDialog)`
  .MuiDialog-paper {
    background-color: #1c1c1c;
    width: 800px;
    height: 600px;
    border-radius: none;
    max-width: none;
  }
  font-family: 'Apple SD Gothic Neo', san-serif;
`;

const DialogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #1c1c1c;
  padding: 18px 35px 0px;
`;

const DialogTitle = styled(MuiDialogTitle)`
  .MuiPaper-root {
    background-color: #1c1c1c;
    color: #000000;
  }
  padding: 10px !important;
`;

const DialogContent = styled(MuiDialogContent)`
  padding: 10px !important;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 5px 35px;
`;

const Image = styled.img`
  margin-right: 30px;
  width: 300px;
  height: 100%;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  position: relative;
`;

const Description = styled.p`
  color: #ffffff;
  flex: 3;
  font-size: 16px;
  font-weight: 400;
`;

const Location = styled.p`
  color: #ffffff;
  flex: 1;
  font-size: 14px;
  min-height: 10px;
  font-weight: 350;
`;

const Date = styled.p`
  color: #ffffff;
  flex: 1;
  font-size: 14px;
  min-height: 10px;
  font-weight: 350;
`;

const Title = styled.h2`
  color: #ffffff;
  flex: 2;
  font-size: 22px;
  min-height: 40px;
  font-weight: 500;
`;

const CustomIconButton = styled(IconButton)`
  position: absolute;
  svg {
    font-size: 3rem;
  }
`;

export default function DetailModal({ open, onClose, selectedPhoto }) {
  return (
    <ThemeProvider theme={theme}>
      <Dialog open={open} onClose={onClose}>
        <DialogHeader>
          <DialogTitle>저장 기록 보기</DialogTitle>
          <CustomIconButton aria-label="close" onClick={onClose}>
            <CloseIcon style={{ color: '#FFFFFF ' }} />
          </CustomIconButton>
        </DialogHeader>
        <DialogContent>
          <>
            {selectedPhoto && (
              <>
                <ContentWrapper>
                  <Image
                    src={selectedPhoto.imageUrl}
                    alt={selectedPhoto.meaning}
                  />
                  <TextWrapper>
                    <Title>{selectedPhoto.title}</Title>
                    <Location>{selectedPhoto.place}</Location>
                    <Date>{selectedPhoto.pictureDate}</Date>
                    <br></br>
                    <Description>{selectedPhoto.meaning}</Description>
                  </TextWrapper>
                </ContentWrapper>
              </>
            )}
          </>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
}
