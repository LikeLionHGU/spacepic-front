import { useQuery } from 'react-query';
import styled from 'styled-components';
import { GetDummyPhotos } from '../apis/photoApi';
import { useEffect } from 'react';

const Photo = styled.div`
  margin: 10px;
  box-sizing: border-box;
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
    ['GetDummyPhotos', GetDummyPhotos],
    () => GetDummyPhotos().then((response) => response.data),
    {}
  );

  const preparedData = {
    0: [],
    1: [],
    2: [],
  };
  useEffect(() => {
    const prepare = () => {
      // Clear previous data
      preparedData[0] = [];
      preparedData[1] = [];
      preparedData[2] = [];

      var i = 0;
      // Ensure that 'photos' is not undefined before using forEach
      if (photos) {
        photos.forEach((photo) => {
          preparedData[i % 3].push(photo);
          i++;
        });
      }
    };

    prepare();
  }, []);

  const dataArrays = [preparedData[0], preparedData[1], preparedData[2]];

  return (
    <>
      <Page>
        {dataArrays.map((dataArray, index) => (
          <PhotoFrame1 key={index}>
            {dataArray.map((photo) => (
              <Photo key={photo.postId} num={photo.postId}>
                <Img src={photo.imageUrl} alt={photo.title} />
                {index % 2 === 1 ? (
                  <Context size="100px"> {photo.title} </Context>
                ) : (
                  <Context> {photo.title} </Context>
                )}
              </Photo>
            ))}
          </PhotoFrame1>
        ))}
      </Page>
    </>
  );
}
