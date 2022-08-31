import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);
//加载path模块

function getDocsName(path) {
  path = path[0].toUpperCase() + path.substr(1);
  return path.split(".")[0];
}

import docs_dir from "../../packages/docs/index";
let doc_path = {
  styles: [],
  components: [],
};
for (let dir_index in docs_dir) {
  let docs = docs_dir[dir_index];
  for (let i in docs) {
    const doc = {
      path: `/${dir_index}/${docs[i].split(".")[0]}`,
      name: `${getDocsName(docs[i])}`,
      component: () => import(`docs/${dir_index}/${docs[i]}`),
    };
    doc_path[dir_index].push(doc);
  }
}

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
    children: doc_path["styles"],
  },
  {
    path: "/components",
    name: "Components",
    component: () => import("../views/Index.vue"),
    children: doc_path["components"],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
