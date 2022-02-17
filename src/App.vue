<template>
  <div id="app">
    <router-view></router-view>
    <TabBarInstance></TabBarInstance>
  </div>
</template>

<script>
import TabBarInstance from '@/components/tabbar/TabBarInstance.vue'
export default {
  name: 'App',
  components: {
    TabBarInstance
  }
}
</script>

<style>
@import './assets/css/base.css';
</style>
