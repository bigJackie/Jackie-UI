<template>
  <div class="jbutton">
    <div>{{ name }}</div>
  </div>
</template>

<script>
export default {
  name: "JButton",
  props: {
    name: {
      type: String,
      default: "Jbutton2",
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.jbutton {
  border: 1px solid black;
}
</style>
