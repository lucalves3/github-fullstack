import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api/users',
timeout: 4000,
headers: {
  'content-type': 'application/json',
},});

api.defaults.headers = true;

export default api;