<template>
  <div class="home_tab_control">
    <TabControl
      :titles="titles"
      @tabControlSelected="tabControlSelected"
    ></TabControl>
  </div>
</template>

<script>
import TabControl from '@/components/common/tabcontrol/TabControl.vue'

export default {
  name: 'HomeTabControl',
  components: {
    TabControl
  },
  data() {
    return {
      titles: ['精选', '流行', '夏季']
    }
  },
  methods: {
    tabControlSelected(index) {
      // 子向父传值
      // console.log(index, 'hometabcontrol')
      this.$emit('deliGoodsIndex', index)
    }
  }
}
</script>

<style lang="less" scoped>
.home_tab_control {
  position: sticky;
  top: 44px;
  background-color: #fff;
}
</style>
