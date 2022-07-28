<template>
  <div class="j-list-item-group flex flex-column">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "JListItemGroup",
};
</script>

<style lang="scss" scoped>
@include b(list-item-group) {
}
</style>
