<template>
  <div class="j-list-item-icon">
    <j-icon :name="name" color="currentColor" v-on="$listeners"></j-icon>
  </div>
</template>

<script>
export default {
  name: "JListItemIcon",
  props: {
    name: {
      type: String,
      default: "",
    },
  },
};
</script>
