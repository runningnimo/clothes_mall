<template>
  <div class="tab_bar">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.tab_bar {
  background-color: #f6f6f6;
  box-shadow: 0 2px 1px rgba(0 0 0 0.1);
  width: 100%;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px 0 0 0;
}
</style>
