import axios, { AxiosRequestConfig } from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const Authorization = process.env.REACT_APP_AUTHORIZATION;

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 30000,
  headers: {
    apiKey,
    Authorization,
  },
});

const addAppIdRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  return {
    ...config,
    params: {
      ...config.params,
    },
  };
};

api.interceptors.request.use(addAppIdRequest);

export default api;
