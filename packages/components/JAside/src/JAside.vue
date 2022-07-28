<template>
  <div class="j-aside" :style="{ width: w }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "JAside",
  props: {
    width: {
      type: String | Number,
      default: "256px",
    },
  },
  computed: {
    w() {
      if (isNaN(parseInt(this.width))) {
        this.$debugger.warn("Width宽度输入类型错误");
        return "256px";
      } else return `${parseInt(this.width)}px`;
    },
  },
};
</script>

<style lang="scss" scoped>
@include b(aside) {
  overflow: auto;
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>
