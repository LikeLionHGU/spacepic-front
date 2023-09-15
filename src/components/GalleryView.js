import { useQuery } from 'react-query';
import styled from 'styled-components';
import Footer from './Footer';
import { useState } from 'react';
import { GetPhotos } from '../apis/photoApi';

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
  grid-column-gap: 25px;
  grid-row-gap: 60px;
  margin: 100px 0px;
`;

const Photo = styled.div`
  margin: 10px;
  box-sizing: border-box;
`;

const Img = styled.img`
  width: 282px;
  height: 422px;
  object-fit: cover;
`;
const Div = styled.div`
  width: 282px;
  height: 422px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function GetPhotosGalleryView() {
  const [isHovered, setIsHovered] = useState(-1);

  const { data: photos } = useQuery(['GetPhotos', GetPhotos], () => GetPhotos().then(response => response.data), {});

  const handleMouseEnter = index => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(-1);
  };

  return (
    <>
      <Page>
        <PhotoFrame>
          {photos?.map(photo => (
            <Photo
              key={photo?.postId}
              num={photo?.postId}
              onMouseEnter={() => handleMouseEnter(photo?.postId - 1)}
              onMouseLeave={handleMouseLeave}
            >
              {isHovered === photo?.postId - 1 ? (
                <Div>{photo?.meaning}</Div>
              ) : (
                <Img src={photo?.imageUrl} alt={photo?.meaning}></Img>
              )}
            </Photo>
          ))}
        </PhotoFrame>
      </Page>
      <Footer />
    </>
  );
}
