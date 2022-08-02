<template>
  <div
    class="j-doc-title text-start"
    :class="{ 'text-h3': h1, 'text-h4': h2, 'text-h5': h3, 'text-h6': h4 && !h1 && !h2 && !h3 }"
    :href="href"
  >
    <a class="j-doc-title__pound">#</a>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "JDocTitle",
  props: {
    href: { type: String, default: undefined },
    h1: { type: Boolean, default: false },
    h2: { type: Boolean, default: false },
    h3: { type: Boolean, default: false },
    h4: { type: Boolean, default: true },
  },
  data() {
    return {};
  },
};
</script>
