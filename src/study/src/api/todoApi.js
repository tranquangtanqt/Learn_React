import axiosClient from "./axiosClient";

const todoApi = {
  getAll: () => {
    const url = "/todo";
    return axiosClient.get(url);
  },

  getById: (id) => {
    const url = `/todo/${id}`;
    return axiosClient.get(url);
  }
  // create: (params) => {
  //   const url = "/todo/detail/create";
  //   return axiosClient.postForm(url, params);
  // }
};

export default todoApi;
