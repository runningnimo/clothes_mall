<template>
  <div>
    <Swiper>
      <SwiperItem v-for="(item, i) in banners" :key="i">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import Swiper from '@/components/common/swiper/Swiper.vue'
import SwiperItem from '@/components/common/swiper/SwiperItem.vue'

export default {
  name: 'HomeSwiper',
  data() {
    return {}
  },
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  methods: {}
}
</script>

<style></style>
