import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes'

Vue.use(VueRouter);

export default new VueRouter({
    routes,
    //滚动行为
    scrollBehavior(to, from, savedPosition) {
      return { y: 0 };
    },
})