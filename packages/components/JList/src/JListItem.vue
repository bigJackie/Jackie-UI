<template>
  <div
    v-waves="link || to"
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
    isActive: { type: Boolean, deafault: false },
  },
  data() {
    return {
      active: false,
      independent: true,
    };
  },
  mounted() {
    let path = sessionStorage.getItem("path");
    // console.log(this.isActive && this.to == path);
    console.log(this.to, path, this.to == path);
    // 硬编码 有待改进
    if (
      (this.isActive && this.to == path) ||
      (this.to == path && this.to) ||
      (this.isActive && !path) ||
      (this.isActive && path == "/")
    ) {
      if (this.independent) this.$Eventbus.$emit("list-item-to", false);
      this.active = true;
      this.$Eventbus.$emit("list-group-expand", this.$el);
    }
    this.$Eventbus.$on("list-item-to", val => {
      val ? this.activate() : this.deActivate();
    });
    this.$Eventbus.$on("list-item-active", val => {
      if (this.to == val) {
        this.activate();
        this.$Eventbus.$emit("list-group-expand", this.$el);
      }
    });
  },
  computed: {
    getRoute() {
      if (this.active) return this.$route;
    },
  },
  watch: {
    getRoute(val) {
      if (val && this.to && val.path != this.to) this.$Eventbus.$emit("list-item-active", val.path);
    },
  },
  methods: {
    activate() {
      if (this.to) {
        if (this.independent) this.$Eventbus.$emit("list-item-to", false);
        this.active = true;
        // sessionStorage.setItem("path", this.to);
        if (this.to && this.$route.path !== this.to) {
          this.$router.push({ path: this.to });
        }
      }
    },
    deActivate() {
      this.active = false;
    },
  },
};
</script>
