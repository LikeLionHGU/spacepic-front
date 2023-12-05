import { directive } from '@babel/types';
import { Directions } from '@mui/icons-material';
import { Box, Grid } from '@mui/material';
import { display } from '@mui/system';
import picture from '../../assets/imgs/picutre.png'
import styled from 'styled-components';
import LogoW from '../../assets/imgs/LogoW.svg';
import { ReactComponent as SpicImg } from '../../assets/imgs/Spacepic.logo.svg';
import { ReactComponent as Vector1 } from '../../assets/imgs/starVector.svg';
import { ReactComponent as Vector2 } from '../../assets/imgs/starVector2.svg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import bgVector from '../../assets/imgs/bgVector.png';
import btmVector from '../../assets/imgs/Union.png';
import AddDialog from '../Add-dialog';
import TopThree from './TopThree';

const Container = styled.div`
  padding-top: 150px;
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

const Logo = styled.img`
  max-width: 200px;
`;

const BottomImg = styled(TopImg)`
  top: 100%;
`;

const Event = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  line-height: 1.5;
  margin: 30px 0px;
`;

export default function EventView() {
  return (
    
    <Container>
      <TopImg src={bgVector} alt="bgVector" />
      <Logo src={LogoW} />
      <Event>
        <div> CONCEPT :</div>
        크리스마스와 종강을 기다리는 여러분을 표현해주세요!
      </Event>

      <AddDialog />

      {/* TODO: 랭크 순위 배치 */}
      <TopThree />

      {/* TODO: 나머지 전부 투표 배치  */}

      <BottomImg src={btmVector} alt="btmVector" />
    </Container>
  );
}

