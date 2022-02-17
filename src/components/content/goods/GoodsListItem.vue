<template>
  <div class="goods_list_item">
    <a :href="good.link">
      <img :src="good.img" alt="" />
      <p>{{ good.title }}</p>
      <span>{{ good.price }}</span>
      <i></i><span>{{ good.cfav }}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    good: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
.goods_list_item {
  width: 48%;
  text-align: center;
  img {
    width: 100%;
  }
  p {
    overflow: inherit;
  }
}
</style>
