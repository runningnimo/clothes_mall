<template>
  <div>
    <div class="wrap">
      <ul>
        <li>1212</li>
        <li>1231</li>
        <li>1231</li>
        <li>31231</li>
        <li>332131</li>
        <li>1321</li>
        <li>123</li>
        <li>2131</li>
        <li>123</li>
        <li>123</li>
        <li>1212</li>
        <li>1231</li>
        <li>1231</li>
        <li>31231</li>
        <li>332131</li>
        <li>1321</li>
        <li>123</li>
        <li>2131</li>
        <li>123</li>
        <li>123</li>
        <li>1212</li>
        <li>1231</li>
        <li>1231</li>
        <li>31231</li>
        <li>332131</li>
        <li>1321</li>
        <li>123</li>
        <li>2131</li>
        <li>123</li>
        <li>123</li>
        <li>1212</li>
        <li>1231</li>
        <li>1231</li>
        <li>31231</li>
        <li>332131</li>
        <li>1321</li>
        <li>123</li>
        <li>2131</li>
        <li>123</li>
        <li>123</li>
        <li>1212</li>
        <li>1231</li>
        <li>1231</li>
        <li>31231</li>
        <li>332131</li>
        <li>1321</li>
        <li>123</li>
        <li>2131</li>
        <li>123</li>
        <li>123</li>
        <li>1212</li>
        <li>1231</li>
        <li>1231</li>
        <li>31231</li>
        <li>332131</li>
        <li>1321</li>
        <li>123</li>
        <li>2131</li>
        <li>123</li>
        <li>123</li>
        <li>1212</li>
        <li>1231</li>
        <li>1231</li>
        <li>31231</li>
        <li>332131</li>
        <li>1321</li>
        <li>123</li>
        <li>2131</li>
        <li>123</li>
        <li>123</li>
        <li>1212</li>
        <li>1231</li>
        <li>1231</li>
        <li>31231</li>
        <li>332131</li>
        <li>1321</li>
        <li>123</li>
        <li>2131</li>
        <li>123</li>
        <li>123</li>
        <li>1212</li>
        <li>1231</li>
        <li>1231</li>
        <li>31231</li>
        <li>332131</li>
        <li>1321</li>
        <li>123</li>
        <li>2131</li>
        <li>123</li>
        <li>123</li>
        <li>1212</li>
        <li>1231</li>
        <li>1231</li>
        <li>31231</li>
        <li>332131</li>
        <li>1321</li>
        <li>123</li>
        <li>2131</li>
        <li>123</li>
        <li>123</li>
        <li>1212</li>
        <li>1231</li>
        <li>1231</li>
        <li>31231</li>
        <li>332131</li>
        <li>1321</li>
        <li>123</li>
        <li>2131</li>
        <li>123</li>
        <li>123</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
  name: 'Category',
  data() {
    return {
      bscroll: null
    }
  },
  mounted() {
    this.bscroll = new Bscroll(document.querySelector('.wrap'), {
      probeType: 3,
      pullUpLoad: true,
      click: true
    })
    this.bscroll.on('scroll', (position) => {
      console.log(position)
    })
    this.bscroll.on('pullingUp', () => {
      console.log('上拉加载更多')
    })
  }
}
</script>

<style scoped>
div {
  height: 500px;
  border: 2px solid red;
}
</style>
