<template>
  <div id="app">
    <router-view></router-view>
    <TabBar>
      <TabBarItem path="/home">
        <img slot="item_icon" src="~assets/images/tabbar/01.png" alt="" />
        <img
          slot="item_icon_active"
          src="~assets/images/tabbar/02.png"
          alt=""
        />
        <div slot="item_text">首页</div>
      </TabBarItem>
      <TabBarItem path="/category">
        <img slot="item_icon" src="~assets/images/tabbar/03.png" alt="" />
        <img
          slot="item_icon_active"
          src="~assets/images/tabbar/04.png"
          alt=""
        />
        <div slot="item_text">分类</div>
      </TabBarItem>
      <TabBarItem path="/cart">
        <img slot="item_icon" src="~assets/images/tabbar/05.png" alt="" />
        <img
          slot="item_icon_active"
          src="~assets/images/tabbar/06.svg"
          alt=""
        />
        <div slot="item_text">购物车</div>
      </TabBarItem>
      <TabBarItem path="/profile">
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
