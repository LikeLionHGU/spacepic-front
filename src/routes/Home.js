import styled from 'styled-components';
import FirstPage from '../components/FirstPage';
import GalleryView from '../components/GalleryView';
import background from '../assets/imgs/bgimg.png';
import ReloadBtn from '../components/ReloadBtn';
import { Helmet } from 'react-helmet';

import Footer from '../components/Footer';
import Header from '../components/Header';

const BgImg = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 300vh;
  width: 100vw;
  position: fixed;
  z-index: -1;
`;

export default function Home() {
  return (
    <>
      <Helmet>
        <title>SPACEPIC</title>
      </Helmet>
      <Header />

      <Footer />
    </>
  );
}
