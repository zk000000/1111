import { reqShopCart, reqDeleteCart, reqUpdateChecked } from '@/api'
import { SET_USERID } from '@/utils/USER_ID';
let state = {
     USER_ID: SET_USERID(),
     shopCartInfo: []
};
let mutations = {
     GETSHOPCART(state, payload) {
          state.shopCartInfo = payload;
     }
};
let actions = {
     //购物车的数据
     async getShopCart({ commit, state, dispatch }) {
          let result = await reqShopCart();
          if (result.code == 200) {
               commit('GETSHOPCART', result.data);
          }
     },
     //删除数据
     async deleteCartById({ commit, state, dispatch }, skuId) {
          let result = await reqDeleteCart(skuId);
          if (result.code == 200) {
               return 'ok';
          } else {
               return Promise.reject();
          }
     },
     //修改勾选状态
     async changeChecked({ commit, state, dispatch }, { skuId, isChecked }) {
          let result = await reqUpdateChecked(skuId, isChecked);
          if (result.code == 200) {
               return 'ok';
          } else {
               return Promise.reject();
          }

     },
     //修改全部商品的勾选的状态
     allUpdateChecked({ commit, state, dispatch }, isChecked) {
          let arr = [];
          //购物车商品的个数,进行遍历
          state.shopCartInfo[0].cartInfoList.forEach(item => {
               let ps = dispatch("changeChecked", { skuId: item.skuId, isChecked });
               arr.push(ps);
          })
          return Promise.all(arr);
     },
     //删除选中的商品
     deleteAllCart({ commit, state, dispatch }) {
          let arr = [];
          //获取仓库里面购物车的数据
          state.shopCartInfo[0].cartInfoList.forEach(item => {
               //商品的勾选状态是勾选的,发请求一个一个删除
               if (item.isChecked == 1) {
                    let ps = dispatch('deleteCartById', item.skuId);
                    arr.push(ps);
               }
          })
          return Promise.all(arr);
     }

};
let getters = {

     //计算数组里面第一个元素：对象
     CartInfo(state) {
          return state.shopCartInfo[0] || {};
     },
};

//对外暴露
export default {
     state,
     mutations,
     actions,
     getters
}