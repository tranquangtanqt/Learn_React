import AxiosClient from "./axiosClient";

const TodoApi = {
  getAll: () => {
    const url = "/todo/getall";
    return AxiosClient.get(url);
  },

  create: (params) => {
    const url = "/todo/detail/create";
    return AxiosClient.postForm(url, params);
  }
};

export default TodoApi;
