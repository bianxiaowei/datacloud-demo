import axios from 'axios'
import Vue from 'vue'
import VueJsonp from 'vue-jsonp'

Vue.use(VueJsonp)

import {
  loginUrl,
  authStatus,
  serveUrl
} from './config'
import {
  Notification
} from 'element-ui';

const ajax = axios.create({
  // @mark：线上校验baseURL
  // baseURL: '/',
  baseURL: serveUrl,
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
});

ajax.interceptors.request.use(async (request) => {
  let result = await Vue.jsonp(authStatus, {})
  if(result && result.hasLogin === "false" || !result.hasLogin) {
    debugger
    location.href = loginUrl
  }
  return request
})

ajax.interceptors.response.use(function (response) {
  let data = response.data;
  if (!data.success && data.message) {
    if (data.code === 1000) { //用户没有登录
      location.href = loginUrl;
    } else if (data.code === 2000) {
      debugger
      console.log(serveUrl);
      location.href = serveUrl;
    } else {
      Notification({
        title: '请求错误：' + data.message,
        type: 'error'
      });
    }
  }
  return response.data;
}, function (error) {
  Notification({
    title: '请求错误：' + error,
    type: 'error'
  });
  return Promise.reject(error);
});

export default (url = '', data = {}, type = "GET") => {
  let dataType;
  if (type === "GET") {
    dataType = "params"
  } else {
    dataType = "data"
  }
  const options = {
    method: type,
    [dataType]: data,
    url,
  };
  return ajax(options);
}
