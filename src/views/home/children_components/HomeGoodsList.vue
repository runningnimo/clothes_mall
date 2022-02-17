<template>
  <div class="goods">
    <GoodsListItem
      v-for="(item, i) in goods[showGoodsType].list"
      :key="i"
      :good="item"
    >
    </GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from '@/components/content/goods/GoodsListItem.vue'
export default {
  name: 'HomeGoodsList',
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    },
    showGoodsType: {
      type: String,
      default: ''
    }
  },
  mounted() {
    console.log(this.showGoodsType)
  }
}
</script>

<style>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  margin-top: 10px;
}
</style>
