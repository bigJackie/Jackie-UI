<template>
  <div
    v-on="$listeners"
    class="j-list-item flex justify-start align-center"
    :class="{ 'is-link': link || to, 'is-no-icon': noIcon, 'is-active': active }"
    :style="{
      height: `${parseInt(height)}px !important`,
    }"
    @click="activate"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "JListItem",
  props: {
    // 高度
    height: { type: Number | String, default: undefined },
    // 链接
    link: { type: Boolean, default: false },
    // 跳转路由
    to: { type: String | Object, default: undefined },
    noIcon: { type: Boolean, default: false },
  },
  data() {
    return {
      active: false,
    };
  },
  methods: {
    activate() {
      if (this.to) {
        this.$Eventbus.$emit("list-item-to");
        this.active = true;
        if (this.to && this.$route.path !== this.to) {
          this.$router.push({ path: this.to });
        }
      }
    },
    deActivate() {
      this.active = false;
    },
  },
  mounted() {
    this.$Eventbus.$on("list-item-to", () => {
      this.deActivate();
    });
  },
};
</script>

<style lang="scss">
@include b(list-item) {
  /* DEFALUT */
  height: 56px;
  position: relative;
  box-sizing: border-box;
  padding: 0 16px;

  /* 禁用选择 */
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  @include when(no-icon) {
    @include b(list-item-content) {
      margin-left: 48px;
    }
  }

  /* 背景 */
  &::before {
    content: "";
    width: 100%;
    background-color: currentcolor;
    position: absolute;
    background-color: cfff;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
  }
  @include when(link) {
    cursor: pointer;
    &:hover {
      &::before {
        background-color: $color-hover;
        opacity: 0.04;
      }
    }
  }

  /* ACTIVE */
  @include when(active) {
    color: $color-primary;
    &::before {
      background-color: $color-primary;
      opacity: 0.12;
    }
  }

  /* CONTENT */
  @include b(list-item-content) {
    flex: 1 1 100%;
    text-align: start;
  }

  /* TITLE */
  @include b(list-item-title) {
    font-size: 16px;
    flex: 1 1 100%;
    text-align: start;
    font-weight: 500;
  }

  /* SUBTITLE */
  @include b(list-item-subtitle) {
    font-size: 14px;
    color: $font-color;
    font-weight: 400;
  }

  /* ICON */
  @include b(list-item-icon) {
    margin-right: 24px;
  }
}
</style>
