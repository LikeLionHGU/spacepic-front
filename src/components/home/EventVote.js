import { useQuery } from 'react-query';
import styled from 'styled-components';
import { GetPhotos, likePhoto } from '../../apis/photoApi';
import { useRecoilValue } from 'recoil';
import { useState } from 'react';
import DetailModal from '..//DetailModal';
import { Box } from '@mui/material';
import { MemberIdState } from '../../store/atom';

const Photo = styled.div`
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  border-right: ${(props) =>
    props.index % 3 === 0 ? 'none' : '1px solid white'};
  position: relative;
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

export default function EventVote() {
  const memberId = useRecoilValue(MemberIdState);

  const { data: photos, refetch: refetchPhotos } = useQuery(
    ['GetPhotos', GetPhotos],
    () => GetPhotos(memberId).then((response) => response.data),
    {
      onSuccess: (data) => {
        console.log(data);
      },
    }
  );

  const like = async (postId, memberId) => {
    await likePhoto(postId, memberId);
    refetchPhotos();
  };

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
            <Photo key={photo.postId} num={photo.postId} index={index + 1}>
              <Box
                sx={{
                  position: 'absolute',
                  top: 6,
                  left: 'calc(50% - 28px)',
                  width: 56,
                  height: 56,
                  backgroundImage: photo.isLiked
                    ? 'url(/images/yellow-star.svg)'
                    : 'url(/images/grey-star.svg)',
                  backgroundSize: 'cover',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    transition: 'all 0.3s ease-in-out',
                  },
                }}
                onClick={() => like(photo.postId, memberId)}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: -2,
                    left: 0,
                    width: 56,
                    height: 56,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {photo.likeCount ?? 0}
                </Box>
              </Box>
              <Img
                src={photo.imageUrl}
                alt={photo.title}
                onClick={() => handleOpenModal(photo)}
              />
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
