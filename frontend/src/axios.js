import axios from 'axios';

const instance = axios.create({
  //   baseURL: 'https://bagniverse-backend.vercel.app'
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://bagniverse-backend.vercel.app'
      : '',
});

export default instance;
