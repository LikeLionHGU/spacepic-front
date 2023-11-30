import React from 'react';
import {
  Dialog as MuiDialog,
  DialogTitle as MuiDialogTitle,
  DialogContent,
  DialogActions,
  // Button as MuiBtn,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import styled from 'styled-components';

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
    width: 1000px;
    height: 530px;
    border-radius: none;
  }
`;
const DialogTitle = styled(MuiDialogTitle)`
  .MuiPaper-root {
    background-color: #1c1c1c;
    color: #000000;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  margin-right: 16px;
  width: 300px;
  height: 380px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Description = styled.p`
  color: #ffffff;
  font-size: 16px;
`;

const Location = styled.p`
  color: #ffffff;
  font-size: 14px;
`;

const Date = styled.p`
  color: #ffffff;
`;

const Title = styled.h2`
  color: #ffffff;
  font-size: 22px;
`;

const StyledButton = styled.button`
  background: none;
  color: #ffffff;
  padding: 10px 10px;
  font-size: 10x;
  border: none;
  cursor: pointer;
`;

export default function DetailModal({ open, onClose, selectedPhoto }) {
  return (
    <ThemeProvider theme={theme}>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>저장 기록 보기</DialogTitle>
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
                    <Description>{selectedPhoto.meaning}</Description>
                  </TextWrapper>
                </ContentWrapper>
              </>
            )}
          </>
        </DialogContent>
        <DialogActions>
          <StyledButton onClick={onClose}>CLOSE</StyledButton>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
