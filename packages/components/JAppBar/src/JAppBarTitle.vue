<template>
  <div class="j-app-bar-title">
    <span class="j-app-bar-title__text">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "JAppBarTitle",
};
</script>

<style lang="scss" scoped>
@include b(app-bar-title) {
  color: $font-color;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  @include e(text) {
    // transform: translateY(-1px);
  }
}
</style>
