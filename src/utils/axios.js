import axios from 'axios';

const clienteAxios = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:8081',
});

export default clienteAxios;
