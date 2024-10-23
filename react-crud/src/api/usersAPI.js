import axios from "axios";

const url = import.meta.env.VITE_URL_BACK;

export const usersAPI = {
  getAllUsers: async () => {
    try {
      const response = await axios.get(url);
      return response;
    } catch (error) {
      return error;
    }
  },

  createUser: async (formData) => {
    try {
      const res = await axios.post(url, formData);
      return res;
    } catch (error) {
      return error;
    }
  },

  UpdateUser: () => {},

  DeleteUser: () => {},
};
