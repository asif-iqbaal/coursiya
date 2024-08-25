import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, // Backend server URL
  // You can add more default settings here, like headers, timeout, etc.
});

export default instance;
