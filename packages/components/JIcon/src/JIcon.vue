<template>
  <i class="j-icon" v-on="$listeners" :style="{ cursor: hasClickEvent ? 'pointer' : 'deafult' }">
    <slot v-if="false"></slot>
    <GGIcons :name="name" :size="getSize()" :color="disabled ? 'rgba(0,0,0,.4)' : color" />
  </i>
</template>

<script>
export default {
  name: "JIcon",
  props: {
    // 图标
    name: {
      type: String,
      require: true,
      default: "",
    },
    // 大小
    size: {
      type: String | Number,
      default: "24",
    },
    // 颜色
    color: {
      type: String,
      default: "rgba(0,0,0,.54)",
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 大图标
    large: {
      type: Boolean,
      default: false,
    },
    // 小图标
    small: {
      type: Boolean,
      default: false,
    },
    // 更小图标
    xSmall: {
      type: Boolean,
      default: false,
    },
    // 更大图标
    xLarge: {
      type: Boolean,
      default: false,
    },
    // 按钮放置在元素左边时，增加margin
    left: {
      type: Boolean,
      default: false,
    },
    // 按钮放置在元素右边时，增加margin
    right: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      hasClickEvent: false,
    };
  },
  mounted() {
    // 判断是否含有单击事件
    if (this.$listeners.click || this.$listeners.dblclick || this.$listeners.mousedown || this.$listeners.mouseup)
      this.hasClickEvent = true;
  },
  methods: {
    // 获取Icon大小
    getSize() {
      if (this.xSmall) return "12px";
      else if (this.small) return "16px";
      else if (this.large) return "36px";
      else if (this.xLarge) return "40px";
      else return this.size.toString();
    },
  },
};
</script>

<style lang="scss" scoped>
@include b(icon) {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
