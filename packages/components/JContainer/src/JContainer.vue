<template>
  <div class="j-container" :class="{ 'is-vertical': isVertical, 'is-app': app, 'is-absolute': absolute }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "JContainer",
  props: {
    direction: String,
    app: {
      type: Boolean,
      default: false,
    },
    absolute: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isVertical() {
      if (this.direction === "vertical") {
        return true;
      } else if (this.direction === "horizontal") {
        return false;
      } else {
        if (this.direction != undefined) this.$debugger.warn("Container方向类型错误");
      }
      return this.$slots && this.$slots.default
        ? this.$slots.default.some(vnode => {
            const tag = vnode.componentOptions && vnode.componentOptions.tag;
            return tag === "j-header" || tag === "j-app-bar" || tag === "j-footer";
          })
        : false;
    },
  },
};
</script>
