<template>
  <div class="j-row" :style="{ margin: `0 ${-parseInt(gap / 2)}px`, '--row-gap': `${gap}px` }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "JRow",
  provide() {
    return {
      row: this,
    };
  },
  props: {
    // 默认间隔
    gap: { type: Number | String, default: 0 },
  },
};
</script>
