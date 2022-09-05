import { reqgetCategoryList, reqGetBannerList,  } from "@/api";
const state = {
  categoryList: [],
  bannerList: [],

};
const mutations = {
  GETCATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  
};
const actions = {
  async getCategoryList({ commit }) {
    let result = await reqgetCategoryList();
    if (result.code == 200) {
      commit("GETCATEGORYLIST", result.data);
      console.log(result);
    }
   
  },
  async getBannerList({ commit }) {
    let result = await reqGetBannerList();
    if (result.code == 200) {
      commit("GETBANNERLIST", result.data);
      
    }
  },
  
};
//计算属性
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
