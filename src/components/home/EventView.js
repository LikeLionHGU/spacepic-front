import { directive } from '@babel/types';
import { Directions } from '@mui/icons-material';
import { Box, Grid } from '@mui/material';
import { display } from '@mui/system';
import picture from '../../assets/imgs/picutre.png'
import styled from 'styled-components';
import { ReactComponent as MainDesc } from '../../assets/imgs/LogoW.icon.svg';
import { ReactComponent as SpicImg } from '../../assets/imgs/Spacepic.logo.svg';
import { ReactComponent as Vector1 } from '../../assets/imgs/starVector.svg';
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
        <SpicImg />
          <Vector1 style={{position: 'absolute', top: '53%', left: '45%'}}/>
          <Vector1 style={{position: 'absolute', top: '53%', left: '35%'}}/>
          <Vector1 style={{position: 'absolute', top: '53%', left: '55%'}}/>
        <svg xmlns="http://www.w3.org/2000/svg" width="1280" height="779" viewBox="0 0 1280 779" fill="none" style={{position: 'absolute', width: '100%', height: '100%', top: '90px', left: 0, zIndex: -1}}>
  <mask id="path-1-inside-1_1465_1298" fill="white">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M109.916 569.832C164.875 569.832 216.199 554.272 259.724 527.315C289.576 553.869 328.904 570 372 570C410.699 570 446.359 556.993 474.849 535.112C495.303 595.67 549.141 640.853 614.467 648.765C631.988 723.418 699.003 779 779 779C829.845 779 875.446 756.546 906.428 721.013C947.899 753.579 1000.18 773 1057 773C1191.76 773 1301 663.758 1301 529C1301 517.517 1300.21 506.219 1298.67 495.158C1390.64 460.201 1456 371.233 1456 267C1456 132.243 1346.76 23 1212 23C1077.24 23 968 132.243 968 267C968 278.483 968.793 289.781 970.328 300.842C903.458 326.259 850.656 380.229 826.816 447.859C818 445.264 808.884 443.367 799.533 442.235C787.246 389.883 750.619 346.91 702.244 325.907C694.14 240.119 621.908 173 534 173C481.318 173 434.266 197.105 403.273 234.888C398.94 234.077 394.549 233.432 390.106 232.959C365.683 100.413 249.526 0 109.916 0C-47.4387 0 -175 127.561 -175 284.916C-175 442.271 -47.4387 569.832 109.916 569.832Z"/>
  </mask>
  <path d="M259.724 527.315L260.388 526.568L259.831 526.073L259.197 526.465L259.724 527.315ZM474.849 535.112L475.796 534.792L475.349 533.467L474.24 534.319L474.849 535.112ZM614.467 648.765L615.441 648.537L615.281 647.857L614.587 647.773L614.467 648.765ZM906.428 721.013L907.045 720.227L906.298 719.64L905.674 720.356L906.428 721.013ZM1298.67 495.158L1298.32 494.223L1297.57 494.506L1297.68 495.296L1298.67 495.158ZM970.328 300.842L970.683 301.777L971.428 301.494L971.318 300.704L970.328 300.842ZM826.816 447.859L826.534 448.819L827.444 449.087L827.759 448.192L826.816 447.859ZM799.533 442.235L798.559 442.463L798.719 443.143L799.413 443.227L799.533 442.235ZM702.244 325.907L701.248 326.001L701.304 326.589L701.846 326.824L702.244 325.907ZM403.273 234.888L403.089 235.871L403.67 235.979L404.046 235.522L403.273 234.888ZM390.106 232.959L389.122 233.14L389.258 233.874L390 233.953L390.106 232.959ZM259.197 526.465C215.826 553.326 164.684 568.832 109.916 568.832V570.832C165.066 570.832 216.572 555.217 260.25 528.166L259.197 526.465ZM372 569C329.158 569 290.064 552.965 260.388 526.568L259.059 528.063C289.087 554.773 328.65 571 372 571V569ZM474.24 534.319C445.919 556.07 410.471 569 372 569V571C410.927 571 446.8 557.915 475.458 535.905L474.24 534.319ZM614.587 647.773C549.651 639.907 496.129 594.992 475.796 534.792L473.901 535.432C494.476 596.348 548.631 641.799 614.347 649.758L614.587 647.773ZM779 778C699.478 778 632.858 722.747 615.441 648.537L613.493 648.994C631.118 724.088 698.528 780 779 780V778ZM905.674 720.356C874.874 755.68 829.544 778 779 778V780C830.146 780 876.018 757.412 907.182 721.671L905.674 720.356ZM1057 772C1000.41 772 948.346 752.659 907.045 720.227L905.81 721.8C947.451 754.499 999.949 774 1057 774V772ZM1300 529C1300 663.205 1191.21 772 1057 772V774C1192.31 774 1302 664.31 1302 529H1300ZM1297.68 495.296C1299.21 506.311 1300 517.563 1300 529H1302C1302 517.471 1301.2 506.127 1299.66 495.021L1297.68 495.296ZM1455 267C1455 370.805 1389.91 459.409 1298.32 494.223L1299.03 496.093C1391.37 460.994 1457 371.662 1457 267H1455ZM1212 24C1346.21 24 1455 132.795 1455 267H1457C1457 131.69 1347.31 22 1212 22V24ZM969 267C969 132.795 1077.79 24 1212 24V22C1076.69 22 967 131.69 967 267H969ZM971.318 300.704C969.79 289.689 969 278.437 969 267H967C967 278.529 967.796 289.873 969.337 300.979L971.318 300.704ZM827.759 448.192C851.501 380.839 904.087 327.089 970.683 301.777L969.973 299.907C902.828 325.428 849.811 379.618 825.873 447.527L827.759 448.192ZM799.413 443.227C808.709 444.353 817.77 446.238 826.534 448.819L827.099 446.9C818.23 444.289 809.06 442.381 799.653 441.242L799.413 443.227ZM701.846 326.824C749.935 347.703 786.346 390.424 798.559 442.463L800.507 442.006C788.146 389.343 751.303 346.117 702.642 324.99L701.846 326.824ZM534 174C621.388 174 693.192 240.722 701.248 326.001L703.239 325.813C695.087 239.517 622.429 172 534 172V174ZM404.046 235.522C434.858 197.961 481.63 174 534 174V172C481.006 172 433.675 196.249 402.5 234.253L404.046 235.522ZM390 233.953C394.416 234.423 398.782 235.065 403.089 235.871L403.457 233.905C399.098 233.089 394.681 232.44 390.212 231.964L390 233.953ZM109.916 1C249.035 1 364.786 101.06 389.122 233.14L391.089 232.777C366.581 99.7664 250.017 -1 109.916 -1V1ZM-174 284.916C-174 128.114 -46.8864 1 109.916 1V-1C-47.991 -1 -176 127.009 -176 284.916H-174ZM109.916 568.832C-46.8864 568.832 -174 441.719 -174 284.916H-176C-176 442.823 -47.991 570.832 109.916 570.832V568.832Z" fill="url(#paint0_linear_1465_1298)" mask="url(#path-1-inside-1_1465_1298)"/>
  <defs>
    <linearGradient id="paint0_linear_1465_1298" x1="640.5" y1="6.23974e-08" x2="641" y2="559" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
    </linearGradient>
  </defs>
</svg>
        <div style={{paddingTop: "28px", textAlign: 'center'}}><p>CONCEPT:<br />크리스마스와 종강을 기다리는 여러분을 표현해주세요!</p></div>
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

