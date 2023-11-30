import styled from 'styled-components';
import { ReactComponent as MainDesc } from '../../assets/imgs/LogoW.icon.svg';

const Container = styled.div`
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

export default function EventView() {
  return (
    <Container>
      <MainDesc />
      <Event>
        <div>이번주 컨셉 주제: </div>
        크리스마스와 종강을 기다리는 여러분을 표현해주세요!
      </Event>

      {/* TODO: 랭크 순위 배치 */}

      {/* TODO: 나머지 전부 투표 배치  */}
    </Container>
  );
}
