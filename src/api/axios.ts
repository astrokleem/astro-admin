import axios from 'axios';

import config from './config';

const baseURL = config.API_URL;

export const publicApi = axios.create({
  baseURL,
});

export const privateApi = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
