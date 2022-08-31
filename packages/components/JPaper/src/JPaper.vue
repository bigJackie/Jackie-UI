<!-- <template>
  <div
    v-waves="
      $listeners.click || $listeners.dblclick || $listeners.mousedown || $listeners.mouseup
        ? !calm
          ? true
          : false
        : false
    "
    v-on="$listeners"
  >
    <slot></slot>
  </div>
</template> -->

<script>
export default {
  name: "JPaper",
  props: {
    // 颜色
    color: { type: String, default: "#fff" },
    // 海拔
    elevation: { type: Number | String, default: undefined },
    // 高度
    height: { type: Number | String, default: undefined },
    // 宽度
    width: { type: Number | String, default: undefined },
    // 最大高度
    maxHeight: { type: Number | String, default: undefined },
    // 最大宽度
    maxWidth: { type: Number | String, default: undefined },
    // 最小高度
    minHeight: { type: Number | String, default: undefined },
    // 最小宽度
    minWidth: { type: Number | String, default: undefined },
    // 线框
    outlined: { type: Boolean, default: false },
    // 圆角
    rounded: { type: Boolean, default: false },
    // 对角圆角
    shaped: { type: Boolean, default: false },
    // 自定义元素标签
    tag: { type: String, default: "div" },
    // 删除点击波纹效果
    calm: { type: Boolean, default: false },
  },
  render(h) {
    return h(
      this.tag,
      {
        style: {
          backgroundColor: this.color,
          width: `${parseInt(this.width)}px`,
          height: `${parseInt(this.height)}px`,
          maxWidth: `${parseInt(this.maxWidth)}px`,
          maxHeight: `${parseInt(this.maxHeight)}px`,
          minWidth: `${parseInt(this.minWidth)}px`,
          minHeight: `${parseInt(this.minHeight)}px`,
        },
        class: [
          {
            "is-outlined": this.outlined,
            "is-rounded": this.rounded,
            "is-shaped": this.shaped,
          },
          "j-paper",
          `elevation-${parseInt(this.elevation)}`,
          this.color,
        ],
        directives: [{ name: "waves" }],
        listeners: this.$listeners,
      },
      this.$slots.default
    );
  },
};
</script>
