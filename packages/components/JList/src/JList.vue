<template>
  <div
    v-on="$listeners"
    class="j-list flex flex-column"
    :class="[
      {
        'is-dense': dense,
        'is-disabled': disabled,
        'is-flat': flat,
        'is-nav': nav,
        'is-rounded': rounded,
        'is-shaped': shaped,
      },
      `elevation-${parseInt(elevation)}`,
    ]"
    :style="{
      backgroundColor: color,
      height: `${parseInt(height)}px`,
      maxHeight: `${parseInt(maxHeight)}px`,
      minHeight: `${parseInt(minHeight)}px`,
      width: `${parseInt(width)}px`,
      maxWidth: `${parseInt(maxWidth)}px`,
      minWidth: `${parseInt(minWidth)}px`,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "JList",
  props: {
    // 颜色
    color: { type: String, default: undefined },
    // 降低高度
    dense: { type: Boolean, default: false },
    // 禁用子级j-list-item
    disabled: { type: Boolean, default: false },
    // 删除 j-list-item 上突出显示的背景
    flat: { type: Boolean, default: false },
    // 组件海拔
    elevation: { type: Number | String, default: undefined },
    // 减小 j-list-item 的宽度并圆角化
    nav: { type: Boolean, default: false },
    // 圆角
    rounded: { type: Boolean, default: false },
    shaped: { type: Boolean, default: false },
    // 高度
    height: { type: Number | String, default: undefined },
    // 最大高度
    maxHeight: { type: Number | String, default: undefined },
    // 最小高度
    minHeight: { type: Number | String, default: undefined },
    // 宽度
    width: { type: Number | String, default: undefined },
    // 最大宽度
    maxWidth: { type: Number | String, default: undefined },
    // 最小宽度
    minWidth: { type: Number | String, default: undefined },
    // List-group 唯一
    singleGroup: { type: Boolean, default: false },
  },
  methods: {
    init() {
      if (this.singleGroup) {
        let children = this.$children;
        for (let i = 0; i < children.length; i++) {
          children[i].$data.single = true;
          console.log(children[i].$data.single);
        }
      }
    },
  },
  mounted() {
    this.init();
  },
};
</script>
