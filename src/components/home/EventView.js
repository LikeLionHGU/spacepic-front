import { directive } from '@babel/types';
import { Directions } from '@mui/icons-material';
import { Box, Grid } from '@mui/material';
import { display } from '@mui/system';
import picture from '../../assets/imgs/picutre.png'
import styled from 'styled-components';
import { ReactComponent as SpicImg } from '../../assets/imgs/Spacepic.logo.svg';
import { ReactComponent as Vector1 } from '../../assets/imgs/starVector.svg';
import { ReactComponent as Vector2 } from '../../assets/imgs/starVector2.svg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { ReactComponent as MainDesc } from '../../assets/imgs/LogoW.svg';
import bgVector from '../../assets/imgs/bgVector.png';
import btmVector from '../../assets/imgs/Union.png';
import EventVote from './EventVote';
import AddDialog from '../Add-dialog';
import { useState } from 'react';

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
  flex-direction: column;
  padding-top: 150px;
  align-items : center;
  height: 100vh;
  color: white;
`;



const Container = styled.div`
  padding-top: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: white;
`;

const TopImg = styled.img`
  width: 100%;
  z-index: -1;
  position: absolute;
  top: 0;
`;

const BottomImg = styled(TopImg)`
  top: 100%;
`;

const Event = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  line-height: 1.5;
  margin: 30px 0px;
`;

const Svgcode = `
  <svg xmlns="http://www.w3.org/2000/svg" width="97" height="57" viewBox="0 0 97 57" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M82.1666 13.5501C78.7704 5.78352 71.019 0.356445 62 0.356445C51.9121 0.356445 43.4101 7.14619 40.8144 16.4051C40.4629 16.379 40.1084 16.3632 39.7514 16.3582C35.7479 10.9 29.2878 7.35645 22 7.35645C9.84974 7.35645 0 17.2062 0 29.3564C0 41.5067 9.84974 51.3564 22 51.3564C25.3156 51.3564 28.4599 50.623 31.2795 49.3094C33.7304 50.6159 36.5287 51.3564 39.5 51.3564C45.8077 51.3564 51.336 48.0192 54.4155 43.0141C54.5542 43.065 54.6934 43.1146 54.8334 43.1628C58.2296 50.9294 65.981 56.3564 75 56.3564C87.1503 56.3564 97 46.5067 97 34.3564C97 24.7153 90.7983 16.5227 82.1666 13.5501Z" fill="white"/>
  </svg>
`

const EncodeSvg = encodeURIComponent(Svgcode);

const AddPhotoButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 97px;
  height: 56px;
  background-color: transparent;
  background-image: url("data:image/svg+xml,${EncodeSvg}");
  color: black;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  outline: none;
`;

const Picturecontainer = styled.div`
  
  padding-right: 50px;
  padding-top: 30px;
`
const SecondPicturecontainer = styled.div`
  padding-right: 100px;
  

`
const PicturecontainerIncontainer = styled.div`
  text-align: center;
  padding-left : 60px;
`

export default function EventView() {
  return (
    
    <Container>
      <TopImg src={bgVector} alt="bgVector" />
      <MainDesc />
      <Event>
        <div> CONCEPT :</div>
        크리스마스와 종강을 기다리는 여러분을 표현해주세요!
      </Event>

      <AddDialog />

      {/* TODO: 랭크 순위 배치 */}
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={20}>
          <Item>
            <div style={{display: 'flex', minWidth: '300px', maxWidth: '2000px', flexWrap: 'nowrap' }}>
                <Picturecontainer>
                  <p style={{position: 'relative', left: '55%', top: '-2%', zIndex: '5', color: 'black'}}>2nd</p>
                  <Vector2 style={{position: 'relative', top: '-75%',left: '50%'}}>2nd</Vector2>
                  <img src={Pics[0].photoUrl} alt='src/assets/imgs/picture.png' width="342px" height="229px "></img>
                  <PicturecontainerIncontainer><p>{Pics[0].desc}</p></PicturecontainerIncontainer>
                </Picturecontainer>
                <SecondPicturecontainer>
                  <p  style={{position: 'relative', left: '57%', top: '-1%', zIndex: '5', fontSize: '20px', color: 'black'}}>1st</p>
                  <Vector1 style={{position: 'relative',top: '-75%', left: '50%'}}>1st</Vector1>
                  <img src={Pics[1].photoUrl} alt='src/assets/imgs/picture.png' width="391px" height="263px"></img>
                  <PicturecontainerIncontainer><p>{Pics[1].desc}</p></PicturecontainerIncontainer>
                </SecondPicturecontainer>
                <Picturecontainer>
                  <p  style={{position: 'relative', left: '55%', top: '-2%', zIndex: '5', color: 'black'}}>3nd</p>
                  <Vector2 style={{position: 'relative',top: '-75%', left: '50%'}}>3rd</Vector2>
                  <img src={Pics[2].photoUrl} alt='src/assets/imgs/picture.png' width="342px" height="229px"></img>
                  <PicturecontainerIncontainer><p>{Pics[2].desc}</p></PicturecontainerIncontainer>
                </Picturecontainer>
            </div>
            </Item>
        </Grid>
      </Grid>
    </Box>
      {/* TODO: 나머지 전부 투표 배치  */}

      <BottomImg src={btmVector} alt="btmVector" />
    </Container>
  );
}

