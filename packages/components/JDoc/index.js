import JDocMenu from "./src/JDocMenu";
import JDocTitle from "./src/JDocTitle";
import JDocContainer from "./src/JDocContainer";
export default Vue => {
  Vue.component(JDocMenu.name, JDocMenu);
  Vue.component(JDocTitle.name, JDocTitle);
  Vue.component(JDocContainer.name, JDocContainer);
};
