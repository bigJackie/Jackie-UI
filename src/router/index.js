import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("../views/Index.vue"),
  },
  {
    path: "/styles",
    name: "Styles",
    component: () => import("../views/Index.vue"),
    children: [{ path: "border", name: "Border", component: () => import("../views/styles/Border.vue") }],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
