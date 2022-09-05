//对于axios进行二次封装
import axios from "axios";

//在当前模块中引入store
import store from '@/store';

//创建axios实例
let requests = axios.create({
  //基础路径
  baseURL: "/api",
  //请求不能超过5S
  timeout: 10000,
});

//请求拦截器----
requests.interceptors.request.use((config) => {

  if (store.state.shopcart.USER_ID) {
    config.headers.userTempId = store.state.shopcart.USER_ID;
  }
  //需要携带token带给服务器nprogress.start(); */
  if (store.state.user.token) {
    config.headers.token = store.state.user.token;
  }

  
  return config;
});

//响应拦截器----
requests.interceptors.response.use(
  (res) => {
    
    return res.data;
  },
  (err) => {
    alert("服务器响应数据失败");
  }
);

//暴露一个axios实例
export default requests;
