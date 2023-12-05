import styled from 'styled-components';
import { ReactComponent as MainDesc } from '../../assets/imgs/LogoW.svg';
import bgVector from '../../assets/imgs/bgVector.png';
import btmVector from '../../assets/imgs/Union.png';
import EventVote from './EventVote';
import AddDialog from '../Add-dialog';
import { useState } from 'react';

const Container = styled.div`
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
      <MainDesc />
      <Event>
        <div> CONCEPT :</div>
        크리스마스와 종강을 기다리는 여러분을 표현해주세요!
      </Event>

      <AddDialog />

      {/* TODO: 랭크 순위 배치 */}

      {/* TODO: 나머지 전부 투표 배치  */}

      <BottomImg src={btmVector} alt="btmVector" />
    </Container>
  );
}
