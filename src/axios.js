import axios from 'axios';

// ----------------------------------------------------------------------

export const API_URL = process.env.REACT_APP_API_URL;
const axiosInstance = axios.create({ baseURL: API_URL });

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || 'Something went wrong'
    )
);

export default axiosInstance;

// ----------------------------------------------------------------------

export const fetcher = async (args) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosInstance.get(url, { ...config });

  return res.data;
};
