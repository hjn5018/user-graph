import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

export const getUsers = async () => {
  const response = await apiClient.get('/users');
  return response.data;
};

export const getFollows = async () => {
  const response = await apiClient.get('/follows');
  return response.data;
};
