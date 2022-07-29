<template>
  <main class="j-main">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: "JMain",
  props: {},
};
</script>

<style lang="scss" scoped>
@include b(main) {
  display: block;
  flex: 1;
  flex-basis: auto;
  overflow: auto;
  box-sizing: border-box;
  // padding: $main-padding;
}
</style>
