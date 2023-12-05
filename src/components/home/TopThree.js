import styled from 'styled-components';
import { directive } from '@babel/types';
import { Directions } from '@mui/icons-material';
import { Box, Grid } from '@mui/material';
import { display } from '@mui/system';
import picture from '../../assets/imgs/picutre.png';
import { ReactComponent as SpicImg } from '../../assets/imgs/Spacepic.logo.svg';
import { ReactComponent as Vector1 } from '../../assets/imgs/starVector.svg';
import { ReactComponent as Vector2 } from '../../assets/imgs/starVector2.svg';
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
  flex-direction: row;
  align-items: center;
  color: white;
`;

const Picturecontainer = styled.div`
  padding-right: 50px;
  padding-top: 30px;
`;
const SecondPicturecontainer = styled.div`
  padding-right: 100px;
`;
const PicturecontainerIncontainer = styled.div`
  text-align: center;
  padding-left: 60px;
`;

export default function TopThree() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={20}>
            <Item>
              <Picturecontainer>
                <p
                  style={{
                    position: 'relative',
                    left: '55%',
                    top: '-2%',
                    zIndex: '5',
                    color: 'black',
                  }}
                >
                  2nd
                </p>
                <Vector2
                  style={{ position: 'relative', top: '-75%', left: '50%' }}
                >
                  2nd
                </Vector2>
                <img
                  src={Pics[0].photoUrl}
                  alt="src/assets/imgs/picture.png"
                  width="342px"
                  height="229px "
                />
                <PicturecontainerIncontainer>
                  <p>{Pics[0].desc}</p>
                </PicturecontainerIncontainer>
              </Picturecontainer>
              <SecondPicturecontainer>
                <p
                  style={{
                    position: 'relative',
                    left: '57%',
                    top: '-1%',
                    zIndex: '5',
                    fontSize: '20px',
                    color: 'black',
                  }}
                >
                  1st
                </p>
                <Vector1
                  style={{ position: 'relative', top: '-75%', left: '50%' }}
                >
                  1st
                </Vector1>
                <img
                  src={Pics[1].photoUrl}
                  alt="src/assets/imgs/picture.png"
                  width="391px"
                  height="263px"
                ></img>
                <PicturecontainerIncontainer>
                  <p>{Pics[1].desc}</p>
                </PicturecontainerIncontainer>
              </SecondPicturecontainer>
              <Picturecontainer>
                <p
                  style={{
                    position: 'relative',
                    left: '55%',
                    top: '-2%',
                    zIndex: '5',
                    color: 'black',
                  }}
                >
                  3nd
                </p>
                <Vector2
                  style={{ position: 'relative', top: '-75%', left: '50%' }}
                >
                  3rd
                </Vector2>
                <img
                  src={Pics[2].photoUrl}
                  alt="src/assets/imgs/picture.png"
                  width="342px"
                  height="229px"
                ></img>
                <PicturecontainerIncontainer>
                  <p>{Pics[2].desc}</p>
                </PicturecontainerIncontainer>
              </Picturecontainer>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
