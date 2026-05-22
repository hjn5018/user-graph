import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api',
});

export const getUsers = async () => {
  const response = await apiClient.get('/users');
  return response.data;
};

export const getFollows = async () => {
  const response = await apiClient.get('/follows');
  return response.data;
};
