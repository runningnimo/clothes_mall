<template>
  <NavBar class="home_navbar">
    <div slot="center">购物街</div>
  </NavBar>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
export default {
  name: 'HomeNavBar',
  components: {
    NavBar
  }
}
</script>

<style>
.home_navbar {
  z-index: 1;
}
</style>
