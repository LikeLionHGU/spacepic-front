import styled from 'styled-components';
import FirstPage from '../components/FirstPage';
import GalleryView from '../components/GalleryView';
import MiddleSlide from '../components/MiddleSlide';
import background from '../assets/imgs/bgimg.png';
import ReloadBtn from '../components/ReloadBtn';

const BgImg = styled.div`
  height: 150vh;
  width: 100vw;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export default function Home() {
  return (
    <>
      <BgImg>
        <FirstPage />
        <MiddleSlide />
      </BgImg>
      <GalleryView />
      <ReloadBtn />
    </>
  );
}
