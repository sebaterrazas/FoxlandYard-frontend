import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://foxlandyard-api.onrender.com',
});

export default instance;