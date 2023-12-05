import { useQuery } from 'react-query';
import styled from 'styled-components';
import { GetPhotos } from '../apis/photoApi';
import { useRecoilValue } from 'recoil';
import { MemberIdState } from '../store/atom';
import { useState } from 'react';
import DetailModal from './DetailModal';

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

  return (
    <>
      <Page>
        <PhotoFrame>
          {photos?.map((photo, index) => (
            <Photo
              onClick={() => handleOpenModal(photo)}
              key={photo.postId}
              num={photo.postId}
              index={index + 1}
            >
              <Img src={photo.imageUrl} alt={photo.title} />
              <Context>{photo.title}</Context>
            </Photo>
          ))}
        </PhotoFrame>
      </Page>
      {openModal && (
        <DetailModal
          open={openModal}
          onClose={handleCloseModal}
          selectedPhoto={modalData}
        />
      )}
    </>
  );
}
