import axios from "axios";

const service = axios.create({
  baseURL: "/api/",
  timeout: 5000,
});

// 请求拦截
service.interceptors.request.use(
  config => {
      return config;
  },
  error => {
      // 请求错误处理
      return Promise.reject(error);
  }
)

// 响应拦截
service.interceptors.response.use(
  respond => {
    return respond.data.result;
  },
  err => {
    return Promise.reject(err);
  }
);

export default service;
