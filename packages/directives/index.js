// directives/index.js
import waves from "./waves";

// 自定义指令 对象，方便注册
const directives = {
  waves,
};

// >--> 批量注册指令
export default {
  install(Vue) {
    Object.keys(directives).forEach(key => {
      Vue.directive(key, directives[key]);
    });
  },
};
