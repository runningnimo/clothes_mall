<template>
  <div class="tab_bar_item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item_icon"></slot>
    </div>
    <div v-else>
      <slot name="item_icon_active"></slot>
    </div>
    <div class="{active:isActive}">
      <slot name="item_text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  data() {
    return {
      isActive: false
    }
  },
  props: {},
  methods: {
    itemClick() {
      console.log(this, this._uid)
    }
  }
}
</script>

<style>
.tab_bar_item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab_bar_item img {
  width: 24px;
  height: 24px;
}
.active {
  color: pink;
}
</style>
