import JList from "./src/JList";
import JListItem from "./src/JListItem";
import JListGroup from "./src/JListGroup";
import JListItemGroup from "./src/JListItemGroup";
import JListItemIcon from "./src/JListItemIcon";
import JListItemTitle from "./src/JListItemTitle";
import JListItemSubtitle from "./src/JListItemSubtitle";
export default Vue => {
  Vue.component(JList.name, JList);
  Vue.component(JListItem.name, JListItem);
  Vue.component(JListGroup.name, JListGroup);
  Vue.component(JListItemGroup.name, JListItemGroup);
  Vue.component(JListItemIcon.name, JListItemIcon);
  Vue.component(JListItemTitle.name, JListItemTitle);
  Vue.component(JListItemSubtitle.name, JListItemSubtitle);
};
