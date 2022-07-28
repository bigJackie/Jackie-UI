import JAppBar from "./src/JAppBar";
import JAppBarNavIcon from "./src/JAppBarNavIcon";
import JAppBarTitle from "./src/JAppBarTitle";
export default Vue => {
  Vue.component(JAppBar.name, JAppBar);
  Vue.component(JAppBarNavIcon.name, JAppBarNavIcon);
  Vue.component(JAppBarTitle.name, JAppBarTitle);
};
