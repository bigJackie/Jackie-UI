<template>
  <div class="j-footer" :style="{ height: h }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "JFooter",
  props: {
    height: {
      type: String | Number,
      default: "60px",
    },
  },
  computed: {
    h() {
      if (isNaN(parseInt(this.height))) {
        this.$debugger.warn("Footer高度输入类型错误");
        return "60px";
      } else return `${parseInt(this.height)}px`;
    },
  },
};
</script>
