<template>
  <div class="j-app-bar">
    <slot></slot>
  </div>
</template>

<script>
import JHeader from "../../JHeader/src/JHeader.vue";
export default {
  components: { JHeader },
  name: "JAppBar",
  props: {
    // 绝对定位
    absolute: {
      type: Boolean,
      default: false,
    },
    // 应用程序
    app: {
      type: Boolean,
      default: false,
    },
    // 底部对齐
    bottom: {
      type: Boolean,
      default: false,
    },
    // 颜色
    color: {
      type: String,
      dafault: "#fff",
    },
    // 海拔
    elevation: {
      type: Number | String,
      default: undefined,
    },
    // 平坦 删除框的阴影
    flat: {
      type: Boolean,
      default: false,
    },
    // 线框
    outlined: {
      type: Boolean,
      default: false,
    },
    // 圆角
    rounded: {
      type: Boolean,
      default: false,
    },
    // 对角圆角
    shaped: {
      type: Boolean,
      default: false,
    },
    // 高度
    height: {
      type: Number | String,
      default: undefined,
    },
    // 宽度
    width: {
      type: Number | String,
      default: undefined,
    },
    // 最大高度
    maxHeight: {
      type: Number | String,
      default: undefined,
    },
    // 最大宽度
    maxWidth: {
      type: Number | String,
      default: undefined,
    },
    // 最小高度
    minHeight: {
      type: Number | String,
      default: undefined,
    },
    // 最小宽度
    minWidth: {
      type: Number | String,
      default: undefined,
    },
    // 图片
    src: {
      type: String | Object,
      default: undefined,
    },
    // 组件显示
    value: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@include b(app-bar) {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 16px;
  width: 100%;
  box-sizing: border-box;
  height: 48px;
  border-radius: $app-bar-border-radius;
  border-width: 0 0 thin;
  border-bottom-color: rgba(0, 0, 0, 0.12) !important;
  border-style: solid;
}
</style>
