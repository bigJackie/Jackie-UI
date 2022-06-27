<template>
  <j-app id="app">
    <j-container app>
      <j-navigation-bar mini v-model="drawer">
        <j-list nav>
          <j-list-group
            v-for="(group, group_id) in groups"
            :key="group_id"
            :prepend-icon="group.head.icon"
            :title="group.head.name"
          >
            <j-list-item no-icon :to="item.to" v-for="(item, item_id) in group.items" :key="item_id">
              <j-list-item-content>{{ item.name }}</j-list-item-content>
            </j-list-item>
          </j-list-group>
        </j-list>
      </j-navigation-bar>
      <j-container>
        <j-app-bar>
          <j-app-bar-nav-icon @click="drawer = !drawer"></j-app-bar-nav-icon>
          <j-app-bar-title>JACKIE UI</j-app-bar-title>
        </j-app-bar>
        <j-main>
          <router-view />
        </j-main>
      </j-container>
    </j-container>
  </j-app>
</template>

<script>
export default {
  methods: {},
  data() {
    return {
      drawer: true,
      groups: [
        {
          head: { name: "介绍", icon: "notes" },
          items: [
            { name: "JUI简介", to: "/introduction/brief" },
            { name: "版本路线", to: "/introduction/version-map" },
          ],
        },
        {
          head: { name: "快速入门", icon: "timer" },
          items: [
            { name: "安装", to: "/getting-started/installation" },
            { name: "快速上手", to: "/getting-started/quick-start" },
            { name: "浏览器支持", to: "/getting-started/browser-support" },
          ],
        },
        { head: { name: "特性", icon: "edit-markup" }, items: [{ name: "", to: "" }] },
        { head: { name: "样式动画", icon: "color-bucket" }, items: [{}] },
        {
          head: { name: "组件", icon: "template" },
          items: [{ name: "Lists(列表)", to: "/components/lists" }],
        },
        { head: { name: "指令", icon: "code-slash" }, items: [{}] },
      ],
    };
  },
  mounted() {
    // console.log(document.styleSheets.length);
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
