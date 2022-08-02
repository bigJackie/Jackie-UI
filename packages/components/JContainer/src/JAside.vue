<template>
  <nav class="j-aside" :style="{ width: w }">
    <slot></slot>
  </nav>
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
