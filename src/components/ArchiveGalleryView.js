import { useQuery } from 'react-query';
import styled from 'styled-components';
import { useState } from 'react';
import { GetPhotos } from '../apis/photoApi';
import { useRecoilValue } from 'recoil';
import { MemberIdState } from '../store/atom';

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
];

const Photo = styled.div`
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  border-right: ${(props) =>
    props.index % 3 === 0 ? 'none' : '1px solid white'};
`;

const Img = styled.img`
  width: 300px;
  height: 434px;
  object-fit: cover;
`;

const Page = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* width: 1000px; */
  min-height: 100vh;
  border-left: 1px solid white;
  padding-left: 15px;
`;

const PhotoFrame = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  grid-auto-flow: dense;
  /* gap: 40px; */
  z-index: -1;
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

export default function ArchiveGalleryView() {
  const memberId = useRecoilValue(MemberIdState);

  const { data: photos } = useQuery(
    ['GetPhotos', GetPhotos],
    () => GetPhotos(memberId).then((response) => response.data),
    {
      onSuccess: (data) => {
        console.log(data);
      },
    }
  );

  return (
    <>
      <Page>
        <PhotoFrame>
          {Pics?.map((photo) => (
            <Photo key={photo.postId} num={photo.postId} index={photo.postId}>
              <Img src={photo.photoUrl} alt={photo.desc} />
              <Context> {photo.desc} </Context>
            </Photo>
          ))}
        </PhotoFrame>
      </Page>
    </>
  );
}
