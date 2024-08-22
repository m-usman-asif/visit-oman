import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL, 
});

axiosInstance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
axiosInstance.interceptors.response.use(
    (response) => {
      
        return response.data?.data[0]?.attributes ?? response;
    },
    (error) => {
        return Promise.reject(error);
    }
);
export default axiosInstance;