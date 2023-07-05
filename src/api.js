import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://foxlandyard-api.onrender.com',
  // baseURL: 'http://localhost:1234',
});

export default instance;