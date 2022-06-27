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

<style lang="scss">
@include b(list) {
  box-sizing: border-box;

  @include b(list-item) {
    &::before {
      border-radius: #{map-get($border-radius-breakpoints, "sm")}px !important;
    }
  }
  /* dense */
  @include when(dense) {
    @include b(list-item) {
      height: 40px;
    }
  }
  /* disabled */
  @include when(disabled) {
    @include b(list-item) {
    }
  }
  /* flat */
  @include when(flat) {
    @include b(list-item) {
    }
  }

  /* nav */
  @include when(nav) {
    padding: 4px 8px 0;
    @include b(list-item) {
      box-sizing: border-box;
      height: 36px;
      margin-bottom: 4px;
      &:last-child {
        margin: 0;
      }
      @include e(head) {
        margin: 0;
      }
    }
  }

  /* FLAT */
  @include when(flat) {
    @include b(list-item) {
      &::before {
        border-radius: #{map-get($border-radius-breakpoints, 0)}px !important;
      }
    }
  }

  /* rounded */
  @include when(rounded) {
    @include b(list-item) {
      &::before {
        border-radius: #{map-get($border-radius-breakpoints, "pill")}px !important;
      }
    }
  }

  /* shaped */
  @include when(shaped) {
    @include b(list-item) {
    }
  }
}
</style>
