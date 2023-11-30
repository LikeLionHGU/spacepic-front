import styled from 'styled-components';
import { ReactComponent as MainDesc } from '../../assets/imgs/LogoW.icon.svg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

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

export default function EventView() {
  return (
    <Container>
      <MainDesc />
      <Event>
        <div>이번주 컨셉 주제: </div>
        크리스마스와 종강을 기다리는 여러분을 표현해주세요!
      </Event>

      <Link to="/addphoto" underline="none">
        <AddPhotoButton>개시하기</AddPhotoButton>
      </Link>

      {/* TODO: 랭크 순위 배치 */}

      {/* TODO: 나머지 전부 투표 배치  */}
    </Container>
  );
}
