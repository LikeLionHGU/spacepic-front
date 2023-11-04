import { useQuery } from 'react-query';
import styled from 'styled-components';
import { useState } from 'react';
import { GetPhotos } from '../apis/photoApi';
import AddPhoto from '../routes/AddPhoto';
import { useEffect } from 'react';
import Modal from './Modal';

const Pics = [
  {
    postId: 1,
    desc: '김세정씨와 김나영씨 그리고 구구단',
    photoUrl:
      'https://i.pinimg.com/736x/3f/0b/c4/3f0bc45edd547370e6aff78ef949b833.jpg',
  },
  {
    postId: 2,
    desc: '에이프릴 나은',
    photoUrl:
      'https://i.pinimg.com/736x/40/62/1e/40621edbace8925c63ef4757e8f48f59.jpg',
  },
  {
    postId: 3,
    desc: '에이프릴 나은22',
    photoUrl:
      'https://i.pinimg.com/736x/a2/6e/c2/a26ec20255eb3233ab4949902674e7c7.jpg',
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
    photoUrl:
      'https://i.pinimg.com/736x/40/62/1e/40621edbace8925c63ef4757e8f48f59.jpg',
  },
  {
    postId: 6,
    desc: '김세정씨와 김나영씨 그리고 구구단',
    photoUrl:
      'https://i.pinimg.com/736x/3f/0b/c4/3f0bc45edd547370e6aff78ef949b833.jpg',
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
    photoUrl:
      'https://i.pinimg.com/736x/a2/6e/c2/a26ec20255eb3233ab4949902674e7c7.jpg',
  },
  {
    postId: 9,
    desc: '김세정씨와 김나영씨 그리고 구구단',
    photoUrl:
      'https://i.pinimg.com/736x/3f/0b/c4/3f0bc45edd547370e6aff78ef949b833.jpg',
  },
  {
    postId: 10,
    desc: '에이프릴 나은',
    photoUrl:
      'https://i.pinimg.com/736x/40/62/1e/40621edbace8925c63ef4757e8f48f59.jpg',
  },
  {
    postId: 11,
    desc: '에이프릴 나은22',
    photoUrl:
      'https://i.pinimg.com/736x/a2/6e/c2/a26ec20255eb3233ab4949902674e7c7.jpg',
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
    photoUrl:
      'https://i.pinimg.com/736x/40/62/1e/40621edbace8925c63ef4757e8f48f59.jpg',
  },
  {
    postId: 14,
    desc: '김세정씨와 김나영씨 그리고 구구단',
    photoUrl:
      'https://i.pinimg.com/736x/3f/0b/c4/3f0bc45edd547370e6aff78ef949b833.jpg',
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
    photoUrl:
      'https://i.pinimg.com/736x/a2/6e/c2/a26ec20255eb3233ab4949902674e7c7.jpg',
  },
  {
    postId: 17,
    desc: '김세정씨와 김나영씨 그리고 구구단',
    photoUrl:
      'https://i.pinimg.com/736x/3f/0b/c4/3f0bc45edd547370e6aff78ef949b833.jpg',
  },
  {
    postId: 18,
    desc: '에이프릴 나은',
    photoUrl:
      'https://i.pinimg.com/736x/40/62/1e/40621edbace8925c63ef4757e8f48f59.jpg',
  },
  {
    postId: 19,
    desc: '에이프릴 나은22',
    photoUrl:
      'https://i.pinimg.com/736x/a2/6e/c2/a26ec20255eb3233ab4949902674e7c7.jpg',
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
    photoUrl:
      'https://i.pinimg.com/736x/40/62/1e/40621edbace8925c63ef4757e8f48f59.jpg',
  },
  {
    postId: 22,
    desc: '김세정씨와 김나영씨 그리고 구구단',
    photoUrl:
      'https://i.pinimg.com/736x/3f/0b/c4/3f0bc45edd547370e6aff78ef949b833.jpg',
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
    photoUrl:
      'https://i.pinimg.com/736x/a2/6e/c2/a26ec20255eb3233ab4949902674e7c7.jpg',
  },
  {
    postId: 25,
    desc: '김세정씨와 김나영씨 그리고 구구단',
    photoUrl:
      'https://i.pinimg.com/736x/3f/0b/c4/3f0bc45edd547370e6aff78ef949b833.jpg',
  },
  {
    postId: 26,
    desc: '에이프릴 나은',
    photoUrl:
      'https://i.pinimg.com/736x/40/62/1e/40621edbace8925c63ef4757e8f48f59.jpg',
  },
  {
    postId: 27,
    desc: '에이프릴 나은22',
    photoUrl:
      'https://i.pinimg.com/736x/a2/6e/c2/a26ec20255eb3233ab4949902674e7c7.jpg',
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
    photoUrl:
      'https://i.pinimg.com/736x/40/62/1e/40621edbace8925c63ef4757e8f48f59.jpg',
  },
  {
    postId: 30,
    desc: '김세정씨와 김나영씨 그리고 구구단',
    photoUrl:
      'https://i.pinimg.com/736x/3f/0b/c4/3f0bc45edd547370e6aff78ef949b833.jpg',
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
    photoUrl:
      'https://i.pinimg.com/736x/a2/6e/c2/a26ec20255eb3233ab4949902674e7c7.jpg',
  },
];

const Photo = styled.div`
  margin: 10px;
  box-sizing: border-box;
`;

const Img = styled.img`
  width: 300px;
  height: 434px;
  object-fit: cover;
`;

const preparedData = {
  0: [],
  1: [],
  2: [],
};

const prepare = () => {
  var i = 0;
  Pics.forEach((photo) => {
    preparedData[i % 3].push(photo);
    i++;
  });
};

const Page = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 1000px;
  border-left: 1px solid white;
  padding-left: 15px;
`;

const PhotoFrame1 = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 10px;
  border-right: 1px solid white;
`;
const Context = styled.div`
  width: 100%;
  height: ${(props) => props.size || '55px '};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 18px;
  border-bottom: 1px solid white;
  margin-bottom: 10px;
`;

export default function GalleryView() {
  const { data: photos } = useQuery(
    ['GetPhotos', GetPhotos],
    () => GetPhotos().then((response) => response.data),
    {}
  );

  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleOpenModal = (photo) => {
    setModalData(photo);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setModalData(null);
    setOpenModal(false);
  };

  useEffect(() => {
    prepare();
  }, [photos]);

  const dataArrays = [preparedData[0], preparedData[1], preparedData[2]];

  return (
    <>
      <Page>
        {dataArrays.map((dataArray, index) => (
          <PhotoFrame1 key={index}>
            {dataArray.map((photo) => (
              <Photo
                key={photo.postId}
                num={photo.postId}
                onClick={() => handleOpenModal(photo)}
              >
                <Img src={photo.photoUrl} alt={photo.desc} />
                {index % 2 === 1 ? (
                  <Context size="100px"> {photo.desc} </Context>
                ) : (
                  <Context> {photo.desc} </Context>
                )}
              </Photo>
            ))}
          </PhotoFrame1>
        ))}
      </Page>
      {openModal && (
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          photos={photos}
          selectedPhoto={modalData}
        />
      )}
    </>
  );
}
