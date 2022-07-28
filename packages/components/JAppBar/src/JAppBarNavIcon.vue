<template>
  <div class="j-app-bar-nav-icon">
    <j-icon name="menu" v-on="$listeners"></j-icon>
  </div>
</template>

<script>
export default {
  name: "JAppBarNavIcon",
};
</script>

<style lang="scss" scoped>
@include b(app-bar-nav-icon) {
  margin-right: 12px;
}
</style>
