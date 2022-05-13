import axios from "axios"

// 1、创建axios实例对象
const request = axios.create({
  baseURL: "http://localhost:3000"
})

request.interceptors.request.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

request.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});


let get = (url, params, header) => {
  return request({
    method: "get",
    url: url,
    data: params,
    headers: header || {},
  });
};
let post = (url, params, header) => {
  return request({
    method: "post",
    url: url,
    data: params,
    headers: header || {
      "Content-Type": "application/json",
    },
  });
};
let del = (url, params, header) => {
  return request({
    method: "post",
    url: url,
    data: params,
    headers: header || {},
  });
};
let put = (url, params, header) => {
  return request({
    method: "post",
    url: url,
    data: params,
    headers: header || {},
  });
};

export { get, post, del, put };