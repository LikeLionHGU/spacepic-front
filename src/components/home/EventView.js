import styled from 'styled-components';
import LogoW from '../../assets/imgs/LogoW.svg';
import bgVector from '../../assets/imgs/bgVector.png';
import btmVector from '../../assets/imgs/Union.png';
import AddDialog from '../Add-dialog';
import TopThree from './TopThree';
import EventVote from './EventVote';
import { useQuery } from 'react-query';
import { GetPhotos } from '../../apis/photoApi';
import { useRecoilValue } from 'recoil';
import { MemberIdState } from '../../store/atom';

const Container = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const TopImg = styled.img`
  width: 100%;
  z-index: -1;
  position: absolute;
  top: 0;
`;

const Logo = styled.img`
  max-width: 180px;
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
  font-size: 18px;
  line-height: 1.5;
  margin: 20px 0px;
`;

export default function EventView() {
  const memberId = useRecoilValue(MemberIdState);

  const { data: photos, refetch: refetchPhotos } = useQuery(
    ['GetPhotos', GetPhotos],
    () => GetPhotos(memberId).then((response) => response.data),
    {
      onSuccess: (data) => {
        console.log(data);
      },
    }
  );

  const topPhotos = photos?.slice(0, 3);

  return (
    <Container>
      <TopImg src={bgVector} alt="bgVector" />
      <Logo src={LogoW} />
      <Event>
        <div style={{ fontWeight: 'bold' }}> CONCEPT :</div>
        크리스마스와 종강을 기다리는 여러분을 표현해주세요!
      </Event>
      <AddDialog />

      {/* TODO: 랭크 순위 배치 */}
      <TopThree topPhotos={topPhotos} />

      {/* TODO: 나머지 전부 투표 배치  */}
      <EventVote photos={photos} refetchPhotos={refetchPhotos} />

      <BottomImg src={btmVector} alt="btmVector" />
    </Container>
  );
}
