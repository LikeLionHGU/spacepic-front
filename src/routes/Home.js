import styled from 'styled-components';
import FirstPage from '../components/FirstPage';
import GalleryView from '../components/GalleryView';
import MiddleSlide from '../components/MiddleSlide';
import background from '../assets/imgs/bgimg.png';
import ReloadBtn from '../components/ReloadBtn';
import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';

const Scroll = styled.div`
  height: 100vh;
  overflow-y: auto;
  scroll-behavior: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const BgImg = styled.div`
  height: 150vh;
  width: 100vw;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export default function Home() {
  const outerDivRef = useRef();
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.
      const MiddleSlide = pageHeight * 0.7;

      console.log('pageHeight', pageHeight);
      console.log('MiddleSlide', MiddleSlide);
      console.log('scrollTop', scrollTop);

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < MiddleSlide) {
          //현재 1페이지
          console.log('현재 1페이지, down');
          outerDivRef.current.scrollTo({
            top: MiddleSlide + 5,
            left: 0,
            behavior: 'smooth',
          });
        } else if (scrollTop >= MiddleSlide && scrollTop < pageHeight) {
          //현재 2페이지
          console.log('현재 2페이지, down');
          outerDivRef.current.scrollTo({
            top: pageHeight * 1.5 + 10,
            left: 0,
            behavior: 'smooth',
          });
        } else {
          // 현재 3페이지
          console.log('현재 3페이지, down 자유롭게 스크롤되게 하고 싶어');
          // outerDivRef.current.scrollTo({
          //   top: pageHeight * 2 + 15,
          //   left: 0,
          //   behavior: 'smooth',
          // });
          // outerDivRef.current.scrollTo({});
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log('현재 1페이지, up');
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log('현재 2페이지, up');
          outerDivRef.current.scrollTo({
            top: MiddleSlide + 5,
            left: 0,
            behavior: 'smooth',
          });
        } else {
          // 현재 3페이지
          console.log('현재 3페이지, up');
          //   outerDivRef.current.scrollTo({
          //     top: pageHeight * 1.5,
          //     left: 0,
          //     behavior: 'smooth',
          //   });
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener('wheel', wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener('wheel', wheelHandler);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>SPACEPIC</title>
      </Helmet>
      <Scroll ref={outerDivRef} roll>
        <BgImg>
          <FirstPage />
          <MiddleSlide />
        </BgImg>
        <GalleryView />
      </Scroll>
      <ReloadBtn />
    </>
  );
}
