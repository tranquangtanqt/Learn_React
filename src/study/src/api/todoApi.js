import AxiosClient from "./axiosClient";

const TodoApi = {
  getAll: (params) => {
    const url = "/todo/getall";
    return AxiosClient.get(url, { params });
  },

  create: (params) => {
    const url = "/todo/detail/create";
    return AxiosClient.postForm(url, {params});
  }
};

export default TodoApi;
