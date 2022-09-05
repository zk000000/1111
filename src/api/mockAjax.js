//对于axios进行二次封装
import axios from "axios";
import store from '@/store';

//底下的代码也是创建axios实例
let requests = axios.create({
  //基础路径
  baseURL: "/mock",
  //请求不能超过5S
  timeout: 10000,
});

//请求拦截器----在项目中发请求（请求没有发出去）可以做一些事情
requests.interceptors.request.use((config) => {
  
  return config;
});

//响应拦截器
requests.interceptors.response.use(
  (res) => {
    
    return res.data;
  },
  (err) => {
    alert("服务器响应数据失败");
  }
);

export default requests;
