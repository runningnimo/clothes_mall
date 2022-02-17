<template>
  <div class="wrapper">
    <div class="content" ref="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'Scroll',
  data() {
    return {
      scroll: null
    }
  },
  components: {},
  mounted() {
    this.bscroll = new Bscroll(this.$refs.content, {
      click: true
    })
  }
}
</script>

<style></style>
