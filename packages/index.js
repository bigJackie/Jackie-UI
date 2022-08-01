import JApp from "components/JApp";
import JContainer from "components/JContainer";
import JHeader from "components/JHeader";
import JMain from "components/JMain";
import JFooter from "components/JFooter";
import JAside from "components/JAside";

import JAppBar from "components/JAppBar";
import JNavigationBar from "components/JNavigationBar";
import JIcon from "components/JIcon";
import JButton from "components/JButton";
import JScorll from "components/JButton";

import JList from "components/JList";

/* Doc */
import JDoc from "components/JDoc";

import Vue from "vue";
import JDebugger from "../packages/utils/debugger";
Vue.prototype.$debugger = new JDebugger();
Vue.prototype.$Eventbus = new Vue();

import GGIcons from "vue2-css.gg";
Vue.use(GGIcons);

import directives from "./directives";
console.log(directives);
Vue.use(directives.install);

const components = [
  JApp,
  JContainer,
  JHeader,
  JMain,
  JFooter,
  JAside,
  JAppBar,
  JNavigationBar,
  JIcon,
  JButton,
  JScorll,
  JList,
  JDoc,
];

const install = function (Vue) {
  if (install.installed) return;
  components.map(component => {
    Vue.use(component);
  });
};
//  全局引用可自动安装
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  JApp,
  JContainer,
  JHeader,
  JMain,
  JFooter,
  JAside,
  JAppBar,
  JNavigationBar,
  JIcon,
  JButton,
  JScorll,
  JList,
  JDoc,
};

export {
  JApp,
  JContainer,
  JHeader,
  JMain,
  JFooter,
  JAside,
  JAppBar,
  JNavigationBar,
  JIcon,
  JButton,
  JScorll,
  JList,
  JDoc,
};
