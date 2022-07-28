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

<style lang="scss" scoped>
@include b(container) {
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;

  @include when(vertical) {
    flex-direction: column;
  }

  @include when(app) {
    height: 100vh;
    width: 100vw;
    position: fixed;
    left: 0;
    top: 0;
  }

  @include when(absolute) {
    position: absolute;
    width: 100%;
  }
}
</style>
