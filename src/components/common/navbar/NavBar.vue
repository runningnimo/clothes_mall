<template>
  <div class="nav_bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="less" scoped>
.nav_bar {
  height: 44px;
  display: flex;
  line-height: 44px;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
  font-size: 24px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  .left .right {
    width: 60px;
  }
  .center {
    text-align: center;
    flex: 1;
  }
}
</style>
