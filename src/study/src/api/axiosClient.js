import axios from "axios";
import queryString from "query-string";

const AxiosClient = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  baseURL: "http://localhost:8081/api/v1/user",
  headers: {
    "content-type": "application/json",
  },
  // paramsSerializer: (params) => queryString.stringify(params)
});

AxiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  config.params = config.params || {};
  return config;
});

AxiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);

export default AxiosClient;
