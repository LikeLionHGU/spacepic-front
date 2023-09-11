import styled from 'styled-components';
import Footer from './Footer';

const Pics = [
  {
    postId: 1,
    desc: '김세정씨와 김나영씨 그리고 구구단',
    photoUrl: 'https://i.pinimg.com/736x/3f/0b/c4/3f0bc45edd547370e6aff78ef949b833.jpg',
  },
  {
    postId: 2,
    desc: '에이프릴 나은',
    photoUrl: 'https://i.pinimg.com/736x/40/62/1e/40621edbace8925c63ef4757e8f48f59.jpg',
  },
  {
    postId: 3,
    desc: '에이프릴 나은22',
    photoUrl: 'https://i.pinimg.com/736x/a2/6e/c2/a26ec20255eb3233ab4949902674e7c7.jpg',
  },
  {
    postId: 4,
    desc: '엔믹스 누군지 모르는 분과 혜원',
    photoUrl:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjA4MDNfODkg/MDAxNjU5NTEyNjYzNzMw.J6v8-zDCkkIgZirM1vDBWPMTPyk8ZHCvic6T51NNW6Qg.Ee4l6XSm4CLTf3B-EOwZhBCRysJKHVtDCTUdzJSC0yQg.JPEG.anknara/ffb5940a4b36502b2745856dcfe7c0f7.jpg?type=w800',
  },
  {
    postId: 5,
    desc: '에이프릴 나은',
    photoUrl: 'https://i.pinimg.com/736x/40/62/1e/40621edbace8925c63ef4757e8f48f59.jpg',
  },
  {
    postId: 6,
    desc: '김세정씨와 김나영씨 그리고 구구단',
    photoUrl: 'https://i.pinimg.com/736x/3f/0b/c4/3f0bc45edd547370e6aff78ef949b833.jpg',
  },
  {
    postId: 7,
    desc: '엔믹스 누군지 모르는 분과 혜원',
    photoUrl:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjA4MDNfODkg/MDAxNjU5NTEyNjYzNzMw.J6v8-zDCkkIgZirM1vDBWPMTPyk8ZHCvic6T51NNW6Qg.Ee4l6XSm4CLTf3B-EOwZhBCRysJKHVtDCTUdzJSC0yQg.JPEG.anknara/ffb5940a4b36502b2745856dcfe7c0f7.jpg?type=w800',
  },
  {
    postId: 8,
    desc: '에이프릴 나은22',
    photoUrl: 'https://i.pinimg.com/736x/a2/6e/c2/a26ec20255eb3233ab4949902674e7c7.jpg',
  },
  {
    postId: 9,
    desc: '김세정씨와 김나영씨 그리고 구구단',
    photoUrl: 'https://i.pinimg.com/736x/3f/0b/c4/3f0bc45edd547370e6aff78ef949b833.jpg',
  },
  {
    postId: 10,
    desc: '에이프릴 나은',
    photoUrl: 'https://i.pinimg.com/736x/40/62/1e/40621edbace8925c63ef4757e8f48f59.jpg',
  },
  {
    postId: 11,
    desc: '에이프릴 나은22',
    photoUrl: 'https://i.pinimg.com/736x/a2/6e/c2/a26ec20255eb3233ab4949902674e7c7.jpg',
  },
  {
    postId: 12,
    desc: '엔믹스 누군지 모르는 분과 혜원',
    photoUrl:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjA4MDNfODkg/MDAxNjU5NTEyNjYzNzMw.J6v8-zDCkkIgZirM1vDBWPMTPyk8ZHCvic6T51NNW6Qg.Ee4l6XSm4CLTf3B-EOwZhBCRysJKHVtDCTUdzJSC0yQg.JPEG.anknara/ffb5940a4b36502b2745856dcfe7c0f7.jpg?type=w800',
  },
  {
    postId: 13,
    desc: '에이프릴 나은',
    photoUrl: 'https://i.pinimg.com/736x/40/62/1e/40621edbace8925c63ef4757e8f48f59.jpg',
  },
  {
    postId: 14,
    desc: '김세정씨와 김나영씨 그리고 구구단',
    photoUrl: 'https://i.pinimg.com/736x/3f/0b/c4/3f0bc45edd547370e6aff78ef949b833.jpg',
  },
  {
    postId: 15,
    desc: '엔믹스 누군지 모르는 분과 혜원',
    photoUrl:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjA4MDNfODkg/MDAxNjU5NTEyNjYzNzMw.J6v8-zDCkkIgZirM1vDBWPMTPyk8ZHCvic6T51NNW6Qg.Ee4l6XSm4CLTf3B-EOwZhBCRysJKHVtDCTUdzJSC0yQg.JPEG.anknara/ffb5940a4b36502b2745856dcfe7c0f7.jpg?type=w800',
  },
  {
    postId: 16,
    desc: '에이프릴 나은22',
    photoUrl: 'https://i.pinimg.com/736x/a2/6e/c2/a26ec20255eb3233ab4949902674e7c7.jpg',
  },
  {
    postId: 17,
    desc: '김세정씨와 김나영씨 그리고 구구단',
    photoUrl: 'https://i.pinimg.com/736x/3f/0b/c4/3f0bc45edd547370e6aff78ef949b833.jpg',
  },
  {
    postId: 18,
    desc: '에이프릴 나은',
    photoUrl: 'https://i.pinimg.com/736x/40/62/1e/40621edbace8925c63ef4757e8f48f59.jpg',
  },
  {
    postId: 19,
    desc: '에이프릴 나은22',
    photoUrl: 'https://i.pinimg.com/736x/a2/6e/c2/a26ec20255eb3233ab4949902674e7c7.jpg',
  },
  {
    postId: 20,
    desc: '엔믹스 누군지 모르는 분과 혜원',
    photoUrl:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjA4MDNfODkg/MDAxNjU5NTEyNjYzNzMw.J6v8-zDCkkIgZirM1vDBWPMTPyk8ZHCvic6T51NNW6Qg.Ee4l6XSm4CLTf3B-EOwZhBCRysJKHVtDCTUdzJSC0yQg.JPEG.anknara/ffb5940a4b36502b2745856dcfe7c0f7.jpg?type=w800',
  },
  {
    postId: 21,
    desc: '에이프릴 나은',
    photoUrl: 'https://i.pinimg.com/736x/40/62/1e/40621edbace8925c63ef4757e8f48f59.jpg',
  },
  {
    postId: 22,
    desc: '김세정씨와 김나영씨 그리고 구구단',
    photoUrl: 'https://i.pinimg.com/736x/3f/0b/c4/3f0bc45edd547370e6aff78ef949b833.jpg',
  },
  {
    postId: 23,
    desc: '엔믹스 누군지 모르는 분과 혜원',
    photoUrl:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjA4MDNfODkg/MDAxNjU5NTEyNjYzNzMw.J6v8-zDCkkIgZirM1vDBWPMTPyk8ZHCvic6T51NNW6Qg.Ee4l6XSm4CLTf3B-EOwZhBCRysJKHVtDCTUdzJSC0yQg.JPEG.anknara/ffb5940a4b36502b2745856dcfe7c0f7.jpg?type=w800',
  },
  {
    postId: 24,
    desc: '에이프릴 나은22',
    photoUrl: 'https://i.pinimg.com/736x/a2/6e/c2/a26ec20255eb3233ab4949902674e7c7.jpg',
  },
  {
    postId: 25,
    desc: '김세정씨와 김나영씨 그리고 구구단',
    photoUrl: 'https://i.pinimg.com/736x/3f/0b/c4/3f0bc45edd547370e6aff78ef949b833.jpg',
  },
  {
    postId: 26,
    desc: '에이프릴 나은',
    photoUrl: 'https://i.pinimg.com/736x/40/62/1e/40621edbace8925c63ef4757e8f48f59.jpg',
  },
  {
    postId: 27,
    desc: '에이프릴 나은22',
    photoUrl: 'https://i.pinimg.com/736x/a2/6e/c2/a26ec20255eb3233ab4949902674e7c7.jpg',
  },
  {
    postId: 28,
    desc: '엔믹스 누군지 모르는 분과 혜원',
    photoUrl:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjA4MDNfODkg/MDAxNjU5NTEyNjYzNzMw.J6v8-zDCkkIgZirM1vDBWPMTPyk8ZHCvic6T51NNW6Qg.Ee4l6XSm4CLTf3B-EOwZhBCRysJKHVtDCTUdzJSC0yQg.JPEG.anknara/ffb5940a4b36502b2745856dcfe7c0f7.jpg?type=w800',
  },
  {
    postId: 29,
    desc: '에이프릴 나은',
    photoUrl: 'https://i.pinimg.com/736x/40/62/1e/40621edbace8925c63ef4757e8f48f59.jpg',
  },
  {
    postId: 30,
    desc: '김세정씨와 김나영씨 그리고 구구단',
    photoUrl: 'https://i.pinimg.com/736x/3f/0b/c4/3f0bc45edd547370e6aff78ef949b833.jpg',
  },
  {
    postId: 31,
    desc: '엔믹스 누군지 모르는 분과 혜원',
    photoUrl:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjA4MDNfODkg/MDAxNjU5NTEyNjYzNzMw.J6v8-zDCkkIgZirM1vDBWPMTPyk8ZHCvic6T51NNW6Qg.Ee4l6XSm4CLTf3B-EOwZhBCRysJKHVtDCTUdzJSC0yQg.JPEG.anknara/ffb5940a4b36502b2745856dcfe7c0f7.jpg?type=w800',
  },
  {
    postId: 32,
    desc: '에이프릴 나은22',
    photoUrl: 'https://i.pinimg.com/736x/a2/6e/c2/a26ec20255eb3233ab4949902674e7c7.jpg',
  },
];

const Page = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PhotoFrame = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  margin: 50px 0px;
`;

const Photo = styled.div`
  margin: 10px;
  box-sizing: border-box;
`;

const Img = styled.img`
  width: 275px;
  height: 415px;
`;



export default function GalleryView() {
  return (
    <>
      <Page>
        <PhotoFrame>
          {Pics.map(photo => (
            <Photo key={photo.id} num={photo.id}>
              <Img src={photo.photoUrl} alt={photo.desc} />
            </Photo>
          ))}
        </PhotoFrame>
      </Page>
      <Footer />
    </>
  );
}
