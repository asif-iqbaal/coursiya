import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000', // Backend server URL
  // You can add more default settings here, like headers, timeout, etc.
});

export default instance;
