import JAside from "./src/JAside";
import JFooter from "./src/JFooter";
import JHeader from "./src/JHeader";
import JMain from "./src/JMain";
import JContainer from "./src/JContainer";
export default Vue => {
  Vue.component(JAside.name, JAside);
  Vue.component(JFooter.name, JFooter);
  Vue.component(JHeader.name, JHeader);
  Vue.component(JMain.name, JMain);
  Vue.component(JContainer.name, JContainer);
};
