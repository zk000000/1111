//detail模块的小仓库
import { reqDetailList, reqAddOrUpdateCart } from '@/api';
import { SET_USERID } from '@/utils/USER_ID';

let state = {
     //商品详情的数据
     detailInfo: {},
     USER_ID: SET_USERID(),
};
let mutations = {
     GETDETAILINFO(state, detailInfo) {
          state.detailInfo = detailInfo;
     }
};
let actions = {

     async getDetailInfo({ state, commit, dispatch }, skuId) {
          //商品详情请求，需要携带商品ID
          let result = await reqDetailList(skuId);
          if (result.code == 200) {
               commit('GETDETAILINFO', result.data);
          }
     },
     async addOrUpdateCart({ state, commit, dispatch }, { skuId, skuNum }) {
          let result = await reqAddOrUpdateCart(skuId, skuNum);

          if (result.code == 200) {
               return "ok";
          } else {
               return Promise.reject();
          }
         

     }
};
let getters = {
     categoryView(state) {
          return state.detailInfo.categoryView || {}
     },
     //商品信息的数据
     skuInfo() {
          return state.detailInfo.skuInfo || {}
     },
     //商品销售属性列表的数据
     spuSaleAttrList() {
          return state.detailInfo.spuSaleAttrList || []
     }
};

export default {
     state,
     mutations,
     actions,
     getters
}