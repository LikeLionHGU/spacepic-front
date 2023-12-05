import axiosInstance from '../axios';

export const likePhoto = async (postId, memberId) => {
  const response = await axiosInstance.post('/post/like', {
    memberId,
    postId,
  });
  return response;
};
