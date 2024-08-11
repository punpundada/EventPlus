import axios from "axios";
import { ACCESS_TOKEN } from "./tokenName";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL!,
});

axiosInstance.interceptors.request.use(
  (config) => {
    try {
      const token = localStorage.getItem(ACCESS_TOKEN);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    } catch (error) {
      console.error(error);
      return config;
    }
  },
  (error) => {
    console.error(error)
    return Promise.reject(error);
  }
);

export default axiosInstance;
