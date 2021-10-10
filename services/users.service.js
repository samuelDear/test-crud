import { apiUrl } from 'config';
import { fetchWrapper } from 'helpers';

const baseUrl = `${apiUrl}/users`;

const getAllUsers = () => {
  return fetchWrapper.get(baseUrl);
};

const getUserById = id => {
  return fetchWrapper.get(`${baseUrl}/${id}`);
};

const createUser = params => {
  return fetchWrapper.post(baseUrl, params);
};

const updateUser = (id, params) => {
  return fetchWrapper.put(`${baseUrl}/${id}`, params);
};

const deleteUser = id => {
  return fetchWrapper.delete(`${baseUrl}/${id}`);
};

export const userService = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
