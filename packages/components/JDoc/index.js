import JDoc from "./src/JDoc";
import JDocTitle from "./src/JDocTitle";
import JDocContainer from "./src/JDocContainer";
import JDocTocLink from "./src/JDocTocLink";
export default Vue => {
  Vue.component(JDoc.name, JDoc);
  Vue.component(JDocTitle.name, JDocTitle);
  Vue.component(JDocContainer.name, JDocContainer);
  Vue.component(JDocTocLink.name, JDocTocLink);
};
