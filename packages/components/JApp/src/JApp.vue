<template>
  <div class="j-application">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "JApp",
};
</script>

<style lang="scss">
@include b(application) {
}
</style>
