import styled from 'styled-components';
import { likePhoto } from '../../apis/photoApi';
import { useState } from 'react';
import DetailModal from '..//DetailModal';
import { Box } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { MemberIdState } from '../../store/atom';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const Photo = styled.div`
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const Page = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
`;

const PhotoFrame = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
  margin-bottom: 10px;
`;

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip
    {...props}
    classes={{ popper: className }}
    placement="top"
    arrow
    PopperProps={{
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, -3],
          },
        },
      ],
    }}
  />
))`
  & .${tooltipClasses.tooltip} {
    background-color: white;
    color: black;
    font-size: 0.9rem;
    border-radius: 0px;
    font-family: 'Apple SD Gothic Neo', san-serif;
    font-weight: 400;
  }

  & .${tooltipClasses.arrow} {
    color: white;
  }
`;

export default function EventVote({ photos, refetchPhotos }) {
  const memberId = useRecoilValue(MemberIdState);

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
              <CustomTooltip title="별을 눌러 좋아요를 표시해보세요!" arrow>
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
              </CustomTooltip>
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
