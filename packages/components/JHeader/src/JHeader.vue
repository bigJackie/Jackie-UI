<template>
  <div class="j-header" :style="{ height: h }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "JHeader",
  props: {
    height: {
      type: String | Number,
      default: "60px",
    },
  },
  computed: {
    h() {
      if (isNaN(parseInt(this.height))) {
        this.$debugger.warn("Header高度输入类型错误");
        return "60px";
      } else return `${parseInt(this.height)}px`;
    },
  },
};
</script>

<style lang="scss" scoped>
@include b(header) {
  padding: $header-padding;
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>
