import axios from 'axios';

const BASE_URL = 'https://ecrz-back.onrender.com/';
const TIMEOUT = 5000;

export const client = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});
