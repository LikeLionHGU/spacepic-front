import axios from 'axios';

export const GetDummyPhotos = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/api/get/sample`
  );
  return response;
};

export const GetPhotos = async (memberId) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/api/post/get/member/${memberId}`
  );
  return response;
};
