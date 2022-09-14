import axiosClient from "./axiosClient";

const todoDetailApi = {
  create: (todoDetail) => {
    const url = "/todo/detail";
    return axiosClient.postForm(url, todoDetail);
  },
  update: (todoDetail) => {
    const url = "/todo/detail";
    return axiosClient.put(url, todoDetail);
  },
  delete: (id) => {
    const url = `/todo/detail/${id}`;
    return axiosClient.delete(url);
  }
};

export default todoDetailApi;