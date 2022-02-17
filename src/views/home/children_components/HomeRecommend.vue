<template>
  <div class="home_recommend">
    <div class="home_recommend_item" v-for="(item, i) in recommends" :key="i">
      <a :href="item.link"><img :src="item.image" alt="" /></a>
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
.home_recommend {
  display: flex;
  padding: 10px 0 20px 0;
  border-bottom: 8px solid #ccc;
  .home_recommend_item {
    flex: 1;
    width: 25vw;
    text-align: center;
    img {
      width: 90%;
      margin: 0 0 5px 0;
    }
  }
}
</style>
