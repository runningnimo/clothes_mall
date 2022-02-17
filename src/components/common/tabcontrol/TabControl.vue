<template>
  <div class="tab_control">
    <div
      class="tab_control_item"
      v-for="(item, index) in titles"
      :key="index"
      :class="{ active: index === currentIndex }"
      @click="itemSelect(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    itemSelect(index) {
      this.currentIndex = index
      this.$emit('tabControlSelected', index)
      console.log(index, 'tabcontrol')
    }
  }
}
</script>

<style lang="less" scoped>
.tab_control {
  display: flex;
  padding: 5px 0;
  .tab_control_item {
    flex: 1;
    text-align: center;
    span {
      font-size: 20px;
    }
  }
}
.active {
  color: var(--color-high-text);
  span {
    border-bottom: 3px solid var(--color-tint);
    padding: 5px;
  }
}
</style>
