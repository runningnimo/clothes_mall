<template>
  <div class="goods_list">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GoodsList'
}
</script>

<style lang="less" scoped>
.goods_lsit {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
