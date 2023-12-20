import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://10.150.150.214:8000',
  timeout: 30000,
  headers: { 'Content-Type': 'application/json' },
});

export default instance;
