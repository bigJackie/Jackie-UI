## Input 输入框

通过鼠标或键盘输入字符

:::warning
Input 为受控组件，它**总会显示 Vue 绑定值**。

通常情况下，应当处理 `input` 事件，并更新组件的绑定值（或使用`v-model`）。否则，输入框内显示的值将不会改变。

不支持 `v-model` 修饰符。
:::


### 禁用状态

:::demo 通过 `disabled` 属性指定是否禁用 input 组件
```html
<j-container>
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
</j-container>

<script>
export default {
  data() {
    return {
      groups: [
        {
          head: { name: "介绍", icon: "notes" },
          items: [
            { name: "JUI简介", to: "/introduction/brief/" },
            { name: "版本路线", to: "/introduction/version-map/" },
          ],
        },
        {
          head: { name: "快速入门", icon: "timer" },
          items: [
            { name: "安装", to: "/getting-started/installation/" },
            { name: "快速上手", to: "/getting-started/quick-start/" },
            { name: "浏览器支持", to: "/getting-started/browser-support/" },
          ],
        },
        {
          head: { name: "特性", icon: "edit-markup" },
          items: [
            { name: "国际化", to: "/features/i18n/" },
            { name: "主题", to: "/styles/theme/" },
          ],
        },
        {
          head: { name: "样式", icon: "color-bucket" },
          items: [
            { name: "海拔", to: "/styles/elevation/" },
            { name: "颜色", to: "/styles/color/" },
            { name: "文本", to: "/styles/text/" },
            { name: "间距", to: "/styles/spacing/" },
            { name: "弹性布局(Flex)", to: "/styles/flex/" },
            { name: "边框(Border)", to: "/styles/border/" },
            { name: "过渡动画", to: "/styles/transitions/" },
          ],
        },
        {
          head: { name: "组件", icon: "template" },
          items: [{ name: "Lists(列表)", to: "/components/lists/" }],
        },
        { head: { name: "指令", icon: "code-slash" }, items: [{}] },
      ],
    }
  }
}
</script>
```
:::


