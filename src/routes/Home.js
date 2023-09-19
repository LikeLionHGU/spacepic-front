import styled from 'styled-components';
import FirstPage from '../components/FirstPage';
import GalleryView from '../components/GalleryView';
import background from '../assets/imgs/bgimg.png';
import ReloadBtn from '../components/ReloadBtn';
import { useRef } from 'react';
import { Helmet } from 'react-helmet';

const Scroll = styled.div`
  height: 100vh;
  overflow-y: auto;
  /* scroll-behavior: auto; */
  /* position: relative; */

  &::-webkit-scrollbar {
    display: none;
  }
`;

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
  // const outerDivRef = useRef();
  // const [scroll, setScroll] = useState(0);

  // useEffect(() => {
  //   const wheelHandler = (e) => {
  //     e.preventDefault();
  //     const { deltaY } = e;
  //     const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
  //     const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

  //     console.log('pageHeight', pageHeight);
  //     console.log('scrollTop', scrollTop);
  //     console.log('scroll', scroll);

  //     if (deltaY > 0) {
  //       // if (scrollTop >= scroll && scrollTop < pageHeight * (scroll + 1)) {
  //       //   //현재 1페이지
  //       //   console.log('현재 1페이지, down');
  //       //   outerDivRef.current.scrollTo({
  //       //     top: pageHeight * (scroll + 1) + 10,
  //       //     left: 0,
  //       //     behavior: 'smooth',
  //       //   });
  //       //   setScroll(scroll + 1);
  //       //   console.log('now scroll', scroll);
  //       // }
  //       if (scrollTop >= 0 && scrollTop < pageHeight) {
  //         //현재 1페이지
  //         console.log('현재 1페이지, down');
  //         outerDivRef.current.scrollTo({
  //           top: pageHeight + 10,
  //           left: 0,
  //           behavior: 'smooth',
  //         });
  //       } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
  //         //현재 2페이지
  //         console.log('현재 2페이지, down');
  //         outerDivRef.current.scrollTo({
  //           top: pageHeight * 2 + 10,
  //           left: 0,
  //           behavior: 'smooth',
  //         });
  //       } else {
  //         // 현재 3페이지
  //         console.log('현재 3페이지, down 자유롭게 스크롤되게 하고 싶어');
  //         outerDivRef.current.scrollTo({
  //           top: pageHeight * 3 + 15,
  //           left: 0,
  //           behavior: 'smooth',
  //         });
  //       }
  //     } else {
  //       // 스크롤 올릴 때
  //       if (scrollTop >= 0 && scrollTop < pageHeight) {
  //         //현재 1페이지
  //         console.log('현재 1페이지, up');
  //         outerDivRef.current.scrollTo({
  //           top: 0,
  //           left: 0,
  //           behavior: 'smooth',
  //         });
  //       } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
  //         //현재 2페이지
  //         console.log('현재 2페이지, up');
  //         outerDivRef.current.scrollTo({
  //           top: pageHeight + 5,
  //           left: 0,
  //           behavior: 'smooth',
  //         });
  //       } else {
  //         // 현재 3페이지
  //         console.log('현재 3페이지, up');
  //         outerDivRef.current.scrollTo({
  //           top: pageHeight * 1.5,
  //           left: 0,
  //           behavior: 'smooth',
  //         });
  //       }
  //     }
  //   };
  //   const outerDivRefCurrent = outerDivRef.current;
  //   outerDivRefCurrent.addEventListener('wheel', wheelHandler);
  //   return () => {
  //     outerDivRefCurrent.removeEventListener('wheel', wheelHandler);
  //   };
  // }, []);

  return (
    <>
      <Helmet>
        <title>SPACEPIC</title>
      </Helmet>
      <BgImg />
      {/* <Scroll ref={outerDivRef} roll> */}
      <FirstPage />
      <GalleryView />
      {/* </Scroll> */}
      <ReloadBtn />
    </>
  );
}
