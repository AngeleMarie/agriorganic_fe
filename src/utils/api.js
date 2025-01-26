import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:7654/api/v1', // Update this URL if necessary
});

// Add a request interceptor to include the token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('jwtToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
// https://ecommerce-kpd4.onrender.com

