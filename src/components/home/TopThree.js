import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Grid } from '@mui/material';
import picture from '../../assets/imgs/picutre.png';
import Star1 from '../../assets/imgs/Star1.svg';
import Star2 from '../../assets/imgs/Star2.svg';
import Star3 from '../../assets/imgs/Star3.svg';

const Pics = [
  {
    postId: 1,
    ranking: 1,
    desc: '좋은 사람들과 좋은 시간 :)',
    photoUrl: picture,
  },
  {
    postId: 2,
    ranking: 2,
    desc: '좋은 사람들과 좋은 시간 :)',
    photoUrl: picture,
  },
  {
    postId: 3,
    ranking: 3,
    desc: '좋은 사람들과 좋은 시간 :)',
    photoUrl: picture,
  },
];

const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  gap: 20px;
`;

const Img = styled.img`
  width: 100%;
  height: 200px;
`;

const PictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Rank = styled.img`
  position: absolute;
  top: ${({ top }) => top || '-25%'};
  z-index: 10;
  filter: drop-shadow(0px 4px 4px rgba(255, 255, 255, 0.25));
`;

const Title = styled.div`
  position: absolute;
  bottom: 0; // 하단에 위치
  left: 50%; // 가로 중앙에 위치
  transform: translateX(-50%) translateY(120%); // 가로 중앙 정렬을 위해 X축으로 -50% 이동
  padding: 5px; // 패딩
  font-family: 'Apple SD Gothic Neo', san-serif;
`;

export default function TopThree({ topPhotos }) {
  // TODO: topPhotos를 받아와서 랭킹순으로 정렬해서 보여주기
  const [clickedPhoto1, setClickedPhoto1] = useState(false);
  const [clickedPhoto2, setClickedPhoto2] = useState(false);
  const [clickedPhoto3, setClickedPhoto3] = useState(false);

  const togglePhotoClick = (photoNumber) => {
    if (photoNumber === 1) setClickedPhoto1(!clickedPhoto1);
    if (photoNumber === 2) setClickedPhoto2(!clickedPhoto2);
    if (photoNumber === 3) setClickedPhoto3(!clickedPhoto3);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1, marginTop: '50px' }}>
        <Grid container spacing={2}>
          <Grid item xs={20}>
            <Item>
              <PictureContainer onClick={() => togglePhotoClick(1)}>
                <Rank src={Star2} />
                <Img src={Pics[1]?.photoUrl} />
                {clickedPhoto1 && <Title>{Pics[1]?.desc}</Title>}
              </PictureContainer>
              <PictureContainer onClick={() => togglePhotoClick(2)}>
                <Rank src={Star1} top="-32%" />
                <Img src={Pics[0]?.photoUrl} />
                {clickedPhoto2 && <Title>{Pics[0]?.desc}</Title>}
              </PictureContainer>
              <PictureContainer onClick={() => togglePhotoClick(3)}>
                <Rank src={Star3} />
                <Img src={Pics[2]?.photoUrl} />
                {clickedPhoto3 && <Title>{Pics[2]?.desc}</Title>}
              </PictureContainer>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
