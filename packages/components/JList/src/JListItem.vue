<template>
  <div
    v-waves
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
