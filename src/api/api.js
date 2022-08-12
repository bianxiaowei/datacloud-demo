"use strict";

import { authStatus, loginUrl } from "./config";

import { Notification } from "element-ui";
import Vue from "vue";
import VueJsonp from "vue-jsonp";
import axios from "axios";
import { isLoading } from "../store/modules/common";

// Vue.prototype.axios = axios
Vue.use(VueJsonp);
export const baseConfig = {
  url: "/",
  // baseURL: '/',
  // @mark 最小化，baseURL 根据根目录设置
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest"
  },
  timeout: 15000,
  responseType: "json",
};


axios.defaults.withCredentials=true
// axios.interceptors.request.use(async (request) => {
//   // let curUrl = location.href;
//   let result = await Vue.jsonp(authStatus, {});
//   if (result && (result.hasLogin === "false" || !result.hasLogin)) {
//     console.log(loginUrl);
//     // location.href = `${login}${curUrl}`;
//     location.href = loginUrl
//   }
//   return request;
// });
// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    let data = response.data;
    if (!data.success && data.message) {
      if (data.code === 1000) {
        //用户没有登录
        // location.href = `${login}${location.href}`;
        console.log(loginUrl);
        location.href = loginUrl;
      } else {
        Notification({
          title: "请求错误：" + data.message,
          type: "error",
        });
      }
      if (isLoading) {
        isLoading.close();
      }
    }
    return response;
  },
  function (error) {
    if (isLoading) {
      isLoading.close();
    }
    Notification({
      title: "请求错误：" + error,
      type: "error",
    });
    return Promise.reject(error);
  }
);

export default {
  loginUrl: loginUrl,
  // 门户最小化登录接口
  doLogin: (params) =>
    axios.get(
      "/bigdata-portal-web/login/doLogin", {
        params
      }
    ),

  // 登出接口
  logout: (params) =>
    axios.get(
      "/bigdata-portal-web/login/logout", {
        params
      }
    ),

  checkIsLogin: () =>
    Vue.jsonp(authStatus, {}),
};
