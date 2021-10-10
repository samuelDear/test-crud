import { apiUrl, fetchUtil } from '../config';

const baseUrl = `${apiUrl}/users`;

const getAllUsers = () => {
  return fetchUtil.get(baseUrl);
};

const getUserById = id => {
  return fetchUtil.get(`${baseUrl}/${id}`);
};

const createUser = params => {
  return fetchUtil.post(baseUrl, params);
};

const updateUser = (id, params) => {
  return fetchUtil.put(`${baseUrl}/${id}`, params);
};

const deleteUser = id => {
  return fetchUtil.delete(`${baseUrl}/${id}`);
};

export const userService = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
