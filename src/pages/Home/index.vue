<template>
  <div>
    <TypeNav />
    <ListContainer />
     <TodayRecommend />
    <Rank />
    <!--<Like ref="like"></Like>-->
    <Floor />
    <Brand />
    <span>{{ count }}</span> 
  </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer";
import TodayRecommend from "@/pages/Home/TodayRecommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";

import { mapState } from "vuex";

export default {
  name: "",
  components: {
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  mounted(){
    this.$store.dispatch('getUserInfo');
  },
  computed: {
    ...mapState(["count"]),
  },
};
</script>

<style>
</style>