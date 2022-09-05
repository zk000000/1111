import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TypeNav from '@/components/TypeNav'
import Carsousel from "@/components/Carousel";
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carsousel.name, Carsousel);

Vue.config.productionTip = false
//引入仓库
import store from './store';
//执行一次
 import "@/mock/mockServer";
 import "swiper/css/swiper.css";
 Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
