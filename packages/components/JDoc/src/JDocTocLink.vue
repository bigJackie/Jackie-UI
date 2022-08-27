<template>
  <div class="j-doc-toc-link" :class="{ 'is-selected': selected }" @click="linkto">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "JDocTocLink",
  data() {
    return {
      selected: false,
      hash: this.$attrs.hash,
    };
  },
  methods: {
    linkto() {
      this.selected = true;
    },
  },
  computed: {
    getRoute() {
      return this.$route;
    },
  },
  watch: {
    getRoute(val) {
      if (val && val.hash && val.hash != `#${this.hash}`) this.selected = false;
    },
  },
};
</script>
