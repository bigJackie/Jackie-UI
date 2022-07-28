<<<<<<< HEAD
<template></template>
=======
<template>
  <j-container app>
    <j-navigation-bar mini v-model="drawer">
      <j-list rounded>
        <j-list-group prepend-icon="notes" title="介绍">
          <j-list-item>asd</j-list-item>
          <j-list-item>asd</j-list-item>
          <j-list-item>asd</j-list-item>
        </j-list-group>
        <j-list-group prepend-icon="notes" title="介绍">
          <j-list-item>asd</j-list-item>
          <j-list-item>asd</j-list-item>
          <j-list-item>asd</j-list-item>
          <j-list-item>asd</j-list-item>
        </j-list-group>
        <j-list-group prepend-icon="notes" title="介绍">
          <j-list-item>asd</j-list-item>
          <j-list-item>asd</j-list-item>
          <j-list-item>asd</j-list-item>
          <j-list-group prepend-icon="notes" title="介绍">
            <j-list-item>asd</j-list-item>
            <j-list-item>asd</j-list-item>
          </j-list-group>
        </j-list-group>
      </j-list>
    </j-navigation-bar>
    <j-container>
      <j-app-bar>
        <j-app-bar-nav-icon @click="drawer = !drawer"></j-app-bar-nav-icon>
        <j-app-bar-title>JACKIE UI</j-app-bar-title>
      </j-app-bar>
    </j-container>
  </j-container>
</template>
>>>>>>> 1f14aba... 1

<script>
export default {
  methods: {},
  data() {
<<<<<<< HEAD
    return {};
=======
    return {
      drawer: true,
    };
  },
  mounted() {
    // console.log(document.styleSheets.length);
>>>>>>> 1f14aba... 1
  },
};
</script>

<style></style>
