import axios from 'axios';

export const GetPhotos = async () => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/post/get`);
  return response;
};
