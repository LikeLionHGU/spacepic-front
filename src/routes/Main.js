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
    desc: '에이프릴 나은',
    photoUrl: 'https://i.pinimg.com/736x/40/62/1e/40621edbace8925c63ef4757e8f48f59.jpg',
  },
  {
    id: 6,
    desc: '김세정씨와 김나영씨 그리고 구구단',
    photoUrl: 'https://i.pinimg.com/736x/3f/0b/c4/3f0bc45edd547370e6aff78ef949b833.jpg',
  },
  {
    id: 7,
    desc: '엔믹스 누군지 모르는 분과 혜원',
    photoUrl:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjA4MDNfODkg/MDAxNjU5NTEyNjYzNzMw.J6v8-zDCkkIgZirM1vDBWPMTPyk8ZHCvic6T51NNW6Qg.Ee4l6XSm4CLTf3B-EOwZhBCRysJKHVtDCTUdzJSC0yQg.JPEG.anknara/ffb5940a4b36502b2745856dcfe7c0f7.jpg?type=w800',
  },
  {
    id: 8,
    desc: '에이프릴 나은22',
    photoUrl: 'https://i.pinimg.com/736x/a2/6e/c2/a26ec20255eb3233ab4949902674e7c7.jpg',
  },
];

const Page = styled.div`
  margin: 50px 250px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const PhotoFrame = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 20px;
  /* display: grid;
  grid-template-columns: repeat(4, 1fr); */
  /* grid-auto-rows: 1fr; */
`;

const Photo = styled.div`
  /* width: 275px; */
  /* width: calc(25% - 20px); */
  /* height: auto; */
  /* height: ${props => (props.num % 2 === 1 ? '500px' : '600px')}; */
  /* background-color: ${props => (props.num % 2 === 1 ? 'red' : 'blue')}; */
  margin: 10px;
  box-sizing: border-box;
`;

const Img = styled.img`
  width: 275px;
  height: 415px;
`;

const Context = styled.div`
  border: 1px solid black;
  width: 275px;
  height: ${props => props.size || '200px '};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const preparedData = {
  0: [],
  1: [],
  2: [],
  3: [],
};
const prepare = () => {
  var i = 0;
  PhotoArray.forEach(photo => {
    preparedData[i % 4].push(photo);
    i++;
  });
};

export default function Main() {
  prepare();
  const dataArrays = [preparedData[0], preparedData[1], preparedData[2], preparedData[3]];

  return (
    <>
      <Header />
      <Page>
        {dataArrays.map((dataArray, index) => (
          <PhotoFrame key={index}>
            {dataArray.map(photo => (
              <Photo key={photo.id} num={photo.id}>
                <Img src={photo.photoUrl} alt={photo.desc} />
                {photo.id % 2 === 1 ? (
                  <Context size="125px"> 홀수 / {photo.desc} </Context>
                ) : (
                  <Context> 짝수 / {photo.desc} </Context>
                )}
              </Photo>
            ))}
          </PhotoFrame>
        ))}
      </Page>
    </>
  );
}
