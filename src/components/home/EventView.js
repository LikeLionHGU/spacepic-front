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
  padding-top: 30px;
`
const SecondPicturecontainer = styled.div`
  padding-right: 100px;

`
const PicturecontainerIncontainer = styled.div`
  text-align: center;
`

export default function EventView() {
  return (
    <Container>
      <Event>
        <MainDesc />
        <div style={{paddingTop: "28px", textAlign: 'center'}}><p>이번주 컨셉 주제:<br />크리스마스와 종강을 기다리는 여러분을 표현해주세요!</p></div>
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
                  <img src={Pics[0].photoUrl} alt='src/assets/imgs/picture.png' width="342px" height="229px"></img>
                  <PicturecontainerIncontainer><p>{Pics[0].desc}</p></PicturecontainerIncontainer>
                </Picturecontainer>
                <SecondPicturecontainer>
                  <img src={Pics[1].photoUrl} alt='src/assets/imgs/picture.png' width="391px" height="263px"></img>
                  <PicturecontainerIncontainer><p>{Pics[1].desc}</p></PicturecontainerIncontainer>
                </SecondPicturecontainer>
                <Picturecontainer>
                  <img src={Pics[2].photoUrl} alt='src/assets/imgs/picture.png' width="342px" height="229px"></img>
                  <PicturecontainerIncontainer><p>{Pics[2].desc}</p></PicturecontainerIncontainer>
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

