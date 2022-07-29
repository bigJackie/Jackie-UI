<template>
  <j-aside
    class="j-navigation-bar"
    :class="{ 'is-hide': !drawer, 'is-mini': mini, 'is-no-border': noBorder, 'is-right': right }"
    :style="{
      width: `${parseInt(width)}px`,
      height: height == '100%' ? '100%' : `${parseInt(height)}px`,
      backgroundColor: color,
      backgroundImage: `url('${src}')`,
      backgroundSize: fullSrc ? '100% 100%' : 'auto 100%',
    }"
  >
    <div class="j-navigation-bar__prepend">
      <slot name="prepend"></slot>
    </div>
    <slot></slot>
    <div class="j-navigation-bar__append">
      <slot name="append"></slot>
    </div>
  </j-aside>
</template>

<script>
export default {
  name: "JNavigationBar",
  model: {
    prop: "drawer",
    event: "change",
  },
  props: {
    // 是否打开抽屉
    drawer: { type: Boolean, default: true },
    // 背景颜色
    color: { type: String, default: undefined },
    // 宽度
    width: { type: Number | String, default: "256px" },
    // 高度
    height: { type: Number | String, default: "100%" },
    // 背景图片
    src: {
      type: String,
      // default: "https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg",
    },
    // 背景图片铺满
    fullSrc: { type: Boolean, default: false },
    // 迷你导航
    mini: { type: Boolean, default: false },
    // 隐藏边框
    noBorder: { type: Boolean, default: false },
    // 右侧
    right: { type: Boolean, default: false },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@include b(navigation-bar) {
  transition: all ease-in-out 0.5s;
  border-width: 0 thin 0 0;
  border-color: rgba(0, 0, 0, 0.12) !important;
  border-style: solid;
  box-sizing: border-box;
  background-repeat: no-repeat;

  @include when(right) {
    border-width: 0 0 0 thin;
    float: right;
  }

  @include when(no-border) {
    border: none;
  }

  @include when(hide) {
    width: 0px !important;
    border-width: 0;
    transition: all ease-in-out 0.5s;
  }

  @include when(mini) {
  }

  @media only screen and (max-width: getBreakPoint(sm)) {
    position: absolute;
    z-index: 999;
  }

  @include e(prepend) {
    width: 100%;
  }

  @include e(append) {
    width: 100%;
  }
}
</style>
