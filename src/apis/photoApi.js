import axios from 'axios';

export const GetPhotos = async (memberId) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/api/post/get/member/${memberId}`
  );
  return response;
};
