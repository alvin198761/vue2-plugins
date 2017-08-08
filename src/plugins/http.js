import axios from 'axios';
import {Modal} from 'iview';

axios.defaults.headers.post['Content-Type'] = 'application/json';
let instance = axios.create({});
// Add a response interceptor
instance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.message === 'Network Error') {
    Modal.error({
      title: "提示",
      content: "回话过期，请重新登录",
      okText: "确定",
      onOk: function () {
        window.location.href = '/';
      }
    })
  }
  // Do something with response error
  return Promise.reject(error);
});

export default instance;

