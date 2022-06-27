<template>
  <div class="j-list-item-title">
    <span class="j-list-item-title__text">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "JListItemTitle",
};
</script>

<style lang="scss" scoped>
@include b(list-item-text) {
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  @include e(text) {
    // transform: translateY(-1px);
  }
}
</style>
