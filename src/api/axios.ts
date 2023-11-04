import axios from 'axios';

import config from './config';

const baseURL = config.API_URL;

export const publicApi = axios.create({
  baseURL,
});

const token = JSON.parse(localStorage.getItem("auth-storage") as string)?.state
  ?.token;
export const privateApi = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
