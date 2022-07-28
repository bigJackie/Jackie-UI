<template>
  <div class="j-list-item-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "JListItemContent",
};
</script>

<style lang="scss">
@include b(list-item-content) {
  box-sizing: border-box;
}
</style>
