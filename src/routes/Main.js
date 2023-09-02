import styled from 'styled-components';
import Header from '../components/Header';

const PhotoArray = [
  {
    id: 1,
    desc: '김세정씨와 김나영씨 그리고 구구단',
    photoUrl: 'https://i.pinimg.com/736x/3f/0b/c4/3f0bc45edd547370e6aff78ef949b833.jpg',
  },
  {
    id: 2,
    desc: '에이프릴 나은',
    photoUrl: 'https://i.pinimg.com/736x/40/62/1e/40621edbace8925c63ef4757e8f48f59.jpg',
  },
  {
    id: 3,
    desc: '에이프릴 나은22',
    photoUrl: 'https://i.pinimg.com/736x/a2/6e/c2/a26ec20255eb3233ab4949902674e7c7.jpg',
  },
  {
    id: 4,
    desc: '엔믹스 누군지 모르는 분과 혜원',
    photoUrl:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjA4MDNfODkg/MDAxNjU5NTEyNjYzNzMw.J6v8-zDCkkIgZirM1vDBWPMTPyk8ZHCvic6T51NNW6Qg.Ee4l6XSm4CLTf3B-EOwZhBCRysJKHVtDCTUdzJSC0yQg.JPEG.anknara/ffb5940a4b36502b2745856dcfe7c0f7.jpg?type=w800',
  },
  {
    id: 5,
    desc: '몰라요! 하지만 아름다우시네요!',
    photoUrl:
      'https://postfiles.pstatic.net/MjAyMjAyMDZfMTM3/MDAxNjQ0MTA5NTAwNDE1.yK-HfolvLk80qaQYJohM86lF7gSSHS8XpTj0pBqpPT0g.BQK2eQnPU-sXxi6_Th6Vt8YHde35xns_HVI3Y5kC2xUg.JPEG.anknara/f4cc1c3cb6375f9e3263f3de372c69e6.jpg?type=w773',
  },
  {
    id: 6,
    desc: '트와이스 ',
    photoUrl:
      'https://postfiles.pstatic.net/MjAyMjAyMTBfNTYg/MDAxNjQ0NDIwMjE0NTk4.W_ECc2TTwo35JQGgKlR5bFcdcJOqhrjIszdetSW0vi4g.GFYhCYawiBjnvFJ8Rewy_nJ9jh3A3JtQhn3nUBywsoYg.JPEG.anknara/a57c81d238ac9db99d65a6bf0ae3f422.jpg?type=w773',
  },
  {
    id: 7,
    desc: '귀여우시네요 당신!',
    photoUrl:
      'https://postfiles.pstatic.net/MjAyMTEyMzBfODcg/MDAxNjQwNzkyNTkzMDE1.8gCgR-7e8VeLOCilAee6bP7hYyQoB-rtzn093bEL41Ig.XNyuy3DWGEk0NBbWQoKN6tOqTnduICxLvxo_XuZwtFIg.JPEG.anknara/E7JAyeYVkAcq8ut.jpeg.jpg?type=w773',
  },
  {
    id: 8,
    desc: '또다른 엔믹스! 이쁘시네요!',
    photoUrl:
      'https://postfiles.pstatic.net/MjAyMjA4MDNfMTA3/MDAxNjU5NTEyNjg3NzM5.8U8yL9oFFmKMg_OX9PXmNMCL57VQeO-nYqoA2p5capEg.bl0X5e77ifWECs9GGumRy2i5fC4Gz6LGj_stxmPI_pkg.JPEG.anknara/f95794e537f591f4f1df9282b7ce5eb9.jpg?type=w773',
  },
];

const Page = styled.div`
  margin: 50px 200px;
`;

const Photo = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Img = styled.img`
  width: 275px;
  height: 415px;
`;

const Context = styled.div`
  border: 1px solid black;
  width: 275px;
  height: ${props => props.size || '200px'};
`;

export default function Main() {
  return (
    <>
      <Header />
      <Page>
        <Photo>
          {PhotoArray.map(photo => (
            <div key={photo.id}>
              <Img src={photo.photoUrl} alt={photo.desc} />
              {photo.id % 2 === 1 ? <Context size="125px"> 홀수 </Context> : <Context> 짝수 </Context>}
            </div>
          ))}
        </Photo>
      </Page>
    </>
  );
}
