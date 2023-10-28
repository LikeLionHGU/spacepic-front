import { useQuery } from 'react-query';
import styled from 'styled-components';
import { useState } from 'react';
import { GetPhotos } from '../apis/photoApi';

const Page = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: yellow; */
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
  width: 300px;
  height: 434px;
  object-fit: cover;
`;

const Div = styled.div`
  width: 300px;
  height: 434px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;

const BlackDiv = styled.div`
  width: 300px;
  height: 434px;
  display: flex;
  flex-direction: column; /* 텍스트를 세로 중앙 정렬하기 위해 컨테이너를 세로 방향으로 설정 */
  justify-content: center; /* 수직 가운데 정렬 */
  align-items: center; /* 수평 가운데 정렬 */
  text-align: center;
  font-size: 20px;
  color: white;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.5);
`;

const InnerText = styled.div`
  /* background-color: rgba(0, 0, 0, 0.5); */
  padding: 0 30px; /* 내부 텍스트에만 양 옆으로 10px의 공간을 추가 */
  white-space: pre-line; /* 단어 단위로 줄 바꿈 허용 */
  overflow-wrap: break-word; /* 긴 단어를 여러 줄로 나누기 */
`;

export default function GetPhotosGalleryView() {
  const [isHovered, setIsHovered] = useState(-1);

  const { data: photos } = useQuery(
    ['GetPhotos', GetPhotos],
    () => GetPhotos().then((response) => response.data),
    {}
  );

  const handleMouseEnter = (index) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(-1);
  };

  return (
    <>
      <Page>
        <PhotoFrame>
          {photos?.map((photo) => (
            <Photo
              key={photo?.postId}
              num={photo?.postId}
              onMouseEnter={() => handleMouseEnter(photo?.postId - 1)}
              onMouseLeave={handleMouseLeave}
            >
              {isHovered === photo?.postId - 1 ? (
                <Div src={photo?.imageUrl}>
                  <BlackDiv>
                    <InnerText> {photo?.meaning}</InnerText>{' '}
                  </BlackDiv>
                </Div>
              ) : (
                // <Img src={photo?.photoUrl} alt={photo?.desc} />
                <Img src={photo?.imageUrl} alt={photo?.meaning} />
                // photoUrl imageUrl  // desc meaning
              )}
            </Photo>
          ))}
        </PhotoFrame>
      </Page>
    </>
  );
}
