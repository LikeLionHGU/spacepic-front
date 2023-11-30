import { directive } from '@babel/types';
import { Directions } from '@mui/icons-material';
import { Box, Grid } from '@mui/material';
import { display } from '@mui/system';
import picture from '../../assets/imgs/picutre.png'
import styled from 'styled-components';
import { ReactComponent as MainDesc } from '../../assets/imgs/LogoW.icon.svg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Pics = [
  {
    postId: 1,
    ranking: 1,
    desc: '김세정씨와 김나영씨 그리고 구구단',
    photoUrl: 'https://i.pinimg.com/736x/3f/0b/c4/3f0bc45edd547370e6aff78ef949b833.jpg',
  },
  {
    postId: 2,
    ranking: 2,
    desc: '에이프릴 나은',
    photoUrl: 'https://i.pinimg.com/736x/40/62/1e/40621edbace8925c63ef4757e8f48f59.jpg',
  },
  {
    postId: 3,
    ranking: 3,
    desc: '에이프릴 나은22',
    photoUrl: 'https://i.pinimg.com/736x/a2/6e/c2/a26ec20255eb3233ab4949902674e7c7.jpg',
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
  padding-top: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: white;
`;

const Event = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  line-height: 1.5;
  margin: 30px 0px;
`;

const AddPhotoButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 77px;
  height: 36px;
  background-color: #494949;
  color: white;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  outline: none;
`;

const Picturecontainer = styled.div`
  padding-right: 100px;
`

export default function EventView() {
  return (
    <Container>
      <Event>
        <MainDesc />
        <div>이번주 컨셉 주제: 크리스마스와 종강을 기다리는 여러분을 표현해주세요! </div>
      </Event>
      
      <Link to="/addphoto" underline="none">
        <AddPhotoButton>개시하기</AddPhotoButton>
      </Link>

      {/* TODO: 랭크 순위 배치 */}
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={20}>
          <Item>
            <div style={{display: 'flex'}}>
                <Picturecontainer>
                  <p style={{paddingTop: "30"}}>2<span>Ranking</span></p>
                  <img src={picture} alt='src/assets/imgs/picture.png' width="342px" height="229px"></img>
                  <p style={{color: 'white'}}>좋은 사람들과 함께 사진dis</p>
                </Picturecontainer>
                <Picturecontainer>
                  <p>1</p>
                  <img src={picture} alt='src/assets/imgs/picture.png' width="342px" height="229px"></img>
                </Picturecontainer>
                <Picturecontainer>
                  <p>3</p>
                  <img src={picture} alt='src/assets/imgs/picture.png' width="342px" height="229px"></img>
                </Picturecontainer>
            </div>
            </Item>
        </Grid>
      </Grid>
    </Box>
      {/* TODO: 나머지 전부 투표 배치  */}
    </Container>
  );
}

