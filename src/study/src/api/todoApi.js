import AxiosClient from "./axiosClient";

const TodoApi = {
  getAll: (params) => {
    const url = "/getalltodo";
    return AxiosClient.get(url, { params });
  },
};

export default TodoApi;
