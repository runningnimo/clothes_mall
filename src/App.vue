<template>
  <div id="app">
    <TabBar>
      <TabBarItem>
        <img slot="item_icon" src="~assets/images/tabbar/01.png" alt="" />
        <img
          slot="item_icon_active"
          src="~assets/images/tabbar/02.png"
          alt=""
        />
        <div slot="item_text">首页</div>
      </TabBarItem>
      <TabBarItem>
        <img slot="item_icon" src="~assets/images/tabbar/03.png" alt="" />
        <img
          slot="item_icon_active"
          src="~assets/images/tabbar/04.png"
          alt=""
        />
        <div slot="item_text">分类</div>
      </TabBarItem>
      <TabBarItem>
        <img slot="item_icon" src="~assets/images/tabbar/05.png" alt="" />
        <img
          slot="item_icon_active"
          src="~assets/images/tabbar/06.svg"
          alt=""
        />
        <div slot="item_text">购物车</div>
      </TabBarItem>
      <TabBarItem>
        <img slot="item_icon" src="~assets/images/tabbar/07.gif" alt="" />
        <img
          slot="item_icon_active"
          src="~assets/images/tabbar/08.svg"
          alt=""
        />
        <div slot="item_text">我的</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
import TabBar from 'components/tabbar/TabBar.vue'
import TabBarItem from 'components/tabbar/TabBarItem.vue'

export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
@import './assets/css/base.css';
</style>

// 发现的问题 1、svg/png文件不能读取(路径前加~) 2、less不能使用
