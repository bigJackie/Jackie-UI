# 颜色
通过**scss**，你可以使用[ Material Design 规范](https://material.io/design/color/the-color-system.html)中所有的颜色。这些颜色你都可以在任何vue文件中通过**class 颜色预置类**使用

## 颜色预置类
规范中的每种颜色都会被转换为 background 和 text 变体，以便通过一个类在你的应用中设置样式，例如 `<div class="red">` 或 `<span class="text-red">`。

:::demo
```html
<template>
  <div class="purple darken-2 text-center">
    <span class="text-white">Lorem ipsum</span>
  </div>
</template>
```
:::

## 色彩表
以下是按原色分组的 Material Design 调色板列表。
:::block
```html
<j-container class="flex flex-wrap">
	<div v-for="(color, colors_id) in colors" :key="colors_id">
		<j-list width="200">
		<j-list-item :class="[`${color.name}`, `text-white`]">{{color.name.toUpperCase()}}</j-list-item>
		<div v-for="(item, color_id) in color.val" :key="color_id">
		<j-list-item  :class="[`${color.name}-${item.name}`]" class="flex justify-space-between">
			<span :class="{'text-white': item.name > 500}">{{item.name}}</span>
			<span :class="{'text-white': item.name > 500}">{{item.val.toUpperCase()}}</span>
		</j-list-item>
		</div>
		</j-list>
	</div>
	<j-list width="200">
			<j-list-item class="black flex justify-space-between">
				<span class="text-white">black</span>
				<span class="text-white">#000000</span>
			</j-list-item>
			<j-list-item class="white flex justify-space-between">
				<span>white</span>
				<span>#FFFFFF</span>
			</j-list-item>
		</j-list>
</j-container>

<script>
export default {
 data() {
	return {
		colors:[
			{
				name:"red",
				val: [
					{name: 50, val: "#ffebee"},
					{name: 100, val: "#ffcdd2"},
					{name: 200, val: "#ef9a9a"},
					{name: 300, val: "#e57373"},
					{name: 400, val: "#ef5350"},
					{name: 500, val: "#f44336"},
					{name: 600, val: "#e53935"},
					{name: 700, val: "#d32f2f"},
					{name: 800, val: "#c62828"},
					{name: 900, val: "#b71c1c"},
					{name: "A100", val: "#ff8a80"},
					{name: "A200", val: "#ff5252"},
					{name: "A400", val: "#ff1744"},
					{name: "A700", val: "#d50000"},
				]
			},
			{
				name:"pink",
				val: [{name: 50, val: "#fce4ec"},
					{name: 100, val: "#f8bbd0"},
					{name: 200, val: "#f48fb1"},
					{name: 300, val: "#f06292"},
					{name: 400, val: "#ec407a"},
					{name: 500, val: "#e91e63"},
					{name: 600, val: "#d81b60"},
					{name: 700, val: "#c2185b"},
					{name: 800, val: "#ad1457"},
					{name: 900, val: "#880e4f"},
					{name: "A100", val: "#ff80ab"},
					{name: "A200", val: "#ff4081"},
					{name: "A400", val: "#f50057"},
					{name: "A700", val: "#c51162"},]
			},
			{
				name:"purple",
				val: [
					{name: 50, val: "#f3e5f5"},
					{name: 100, val: "#e1bee7"},
					{name: 200, val: "#ce93d8"},
					{name: 300, val: "#ba68c8"},
					{name: 400, val: "#ab47bc"},
					{name: 500, val: "#9c27b0"},
					{name: 600, val: "#8e24aa"},
					{name: 700, val: "#7b1fa2"},
					{name: 800, val: "#6a1b9a"},
					{name: 900, val: "#4a148c"},
					{name: "A100", val: "#ea80f"},
					{name: "A200", val: "#e040f"},
					{name: "A400", val: "#d500f"},
					{name: "A700", val: "#aa00f"},]
			},
			{
				name:"deep-purple",
				val: [
					{name: 50, val: "#ede7f6"},
					{name: 100, val: "#d1c4e9"},
					{name: 200, val: "#b39ddb"},
					{name: 300, val: "#9575cd"},
					{name: 400, val: "#7e57c2"},
					{name: 500, val: "#673ab7"},
					{name: 600, val: "#5e35b1"},
					{name: 700, val: "#512da8"},
					{name: 800, val: "#4527a0"},
					{name: 900, val: "#311b92"},
					{name: "A100", val: "#b388ff"},
					{name: "A200", val: "#7c4dff"},
					{name: "A400", val: "#651fff"},
					{name: "A700", val: "#6200ea"},]
			},
			{
				name:"indigo",
				val: [
					{name: 50, val: "#e8eaf6"},
					{name: 100, val: "#c5cae9"},
					{name: 200, val: "#9fa8da"},
					{name: 300, val: "#7986cb"},
					{name: 400, val: "#5c6bc0"},
					{name: 500, val: "#3f51b5"},
					{name: 600, val: "#3949ab"},
					{name: 700, val: "#303f9f"},
					{name: 800, val: "#283593"},
					{name: 900, val: "#1a237e"},
					{name: "A100", val: "#8c9eff"},
					{name: "A200", val: "#536dfe"},
					{name: "A400", val: "#3d5afe"},
					{name: "A700", val: "#304ffe"},]
			},
			{
				name:"blue",
				val: [
					{name: 50, val: "#e3f2fd"},
					{name: 100, val: "#bbdefb"},
					{name: 200, val: "#90caf9"},
					{name: 300, val: "#64b5f6"},
					{name: 400, val: "#42a5f5"},
					{name: 500, val: "#2196f3"},
					{name: 600, val: "#1e88e5"},
					{name: 700, val: "#1976d2"},
					{name: 800, val: "#1565c0"},
					{name: 900, val: "#0d47a1"},
					{name: "A100", val: "#82b1ff"},
					{name: "A200", val: "#448aff"},
					{name: "A400", val: "#2979ff"},
					{name: "A700", val: "#2962ff"},]
			},
			{
				name:"light-blue",
				val: [
					{name: 50, val: "#e1f5fe"},
					{name: 100, val: "#b3e5fc"},
					{name: 200, val: "#81d4fa"},
					{name: 300, val: "#4fc3f7"},
					{name: 400, val: "#29b6f6"},
					{name: 500, val: "#03a9f4"},
					{name: 600, val: "#039be5"},
					{name: 700, val: "#0288d1"},
					{name: 800, val: "#0277bd"},
					{name: 900, val: "#01579b"},
					{name: "A100", val: "#80d8ff"},
					{name: "A200", val: "#40c4ff"},
					{name: "A400", val: "#00b0ff"},
					{name: "A700", val: "#0091ea"},]
			},
			{
				name:"cyan",
				val: [
					{name: 50, val: "#e0f7fa"},
					{name: 100, val: "#b2ebf2"},
					{name: 200, val: "#80deea"},
					{name: 300, val: "#4dd0e1"},
					{name: 400, val: "#26c6da"},
					{name: 500, val: "#00bcd4"},
					{name: 600, val: "#00acc1"},
					{name: 700, val: "#0097a7"},
					{name: 800, val: "#00838f"},
					{name: 900, val: "#006064"},
					{name: "A100", val: "#84fff"},
					{name: "A200", val: "#18fff"},
					{name: "A400", val: "#00e5f"},
					{name: "A700", val: "#00b8d"},]
			},
			{
				name:"teal",
				val: [
					{name: 50, val: "#e0f2f1"},
					{name: 100, val: "#b2dfdb"},
					{name: 200, val: "#80cbc4"},
					{name: 300, val: "#4db6ac"},
					{name: 400, val: "#26a69a"},
					{name: 500, val: "#009688"},
					{name: 600, val: "#00897b"},
					{name: 700, val: "#00796b"},
					{name: 800, val: "#00695c"},
					{name: 900, val: "#004d40"},
					{name: "A100", val: "#a7ffe"},
					{name: "A200", val: "#64ffd"},
					{name: "A400", val: "#1de9b"},
					{name: "A700", val: "#00bfa"},]
			},
			{
				name:"green",
				val: [
					{name: 50, val: "#e8f5e9"},
					{name: 100, val: "#c8e6c9"},
					{name: 200, val: "#a5d6a7"},
					{name: 300, val: "#81c784"},
					{name: 400, val: "#66bb6a"},
					{name: 500, val: "#4caf50"},
					{name: 600, val: "#43a047"},
					{name: 700, val: "#388e3c"},
					{name: 800, val: "#2e7d32"},
					{name: 900, val: "#1b5e20"},
					{name: "A100", val: "#b9f6ca"},
					{name: "A200", val: "#69f0ae"},
					{name: "A400", val: "#00e676"},
					{name: "A700", val: "#00c853"},]
			},
			{
				name:"light-green",
				val: [
					{name: 50, val: "#f1f8e9"},
					{name: 100, val: "#dcedc8"},
					{name: 200, val: "#c5e1a5"},
					{name: 300, val: "#aed581"},
					{name: 400, val: "#9ccc65"},
					{name: 500, val: "#8bc34a"},
					{name: 600, val: "#7cb342"},
					{name: 700, val: "#689f38"},
					{name: 800, val: "#558b2f"},
					{name: 900, val: "#33691e"},
					{name: "A100", val: "#ccff90"},
					{name: "A200", val: "#b2ff59"},
					{name: "A400", val: "#76ff03"},
					{name: "A700", val: "#64dd17"},]
			},
			{
				name:"lime",
				val: [
					{name: 50, val: "#f9fbe7"},
					{name: 100, val: "#f0f4c3"},
					{name: 200, val: "#e6ee9c"},
					{name: 300, val: "#dce775"},
					{name: 400, val: "#d4e157"},
					{name: 500, val: "#cddc39"},
					{name: 600, val: "#c0ca33"},
					{name: 700, val: "#afb42b"},
					{name: 800, val: "#9e9d24"},
					{name: 900, val: "#827717"},
					{name: "A100", val: "#f4ff81"},
					{name: "A200", val: "#eeff41"},
					{name: "A400", val: "#c6ff00"},
					{name: "A700", val: "#aeea00"},]
			},
			{
				name:"yellow",
				val: [
					{name: 50, val: "#fffde7"},
					{name: 100, val: "#fff9c4"},
					{name: 200, val: "#fff59d"},
					{name: 300, val: "#fff176"},
					{name: 400, val: "#ffee58"},
					{name: 500, val: "#ffeb3b"},
					{name: 600, val: "#fdd835"},
					{name: 700, val: "#fbc02d"},
					{name: 800, val: "#f9a825"},
					{name: 900, val: "#f57f17"},
					{name: "A100", val: "#ffff8d"},
					{name: "A200", val: "#ffff00"},
					{name: "A400", val: "#ffea00"},
					{name: "A700", val: "#ffd600"},]
			},
			{
				name:"amber",
				val: [
					{name: 50, val: "#fff8e1"},
					{name: 100, val: "#ffecb3"},
					{name: 200, val: "#ffe082"},
					{name: 300, val: "#ffd54f"},
					{name: 400, val: "#ffca28"},
					{name: 500, val: "#ffc107"},
					{name: 600, val: "#ffb300"},
					{name: 700, val: "#ffa000"},
					{name: 800, val: "#ff8f00"},
					{name: 900, val: "#ff6f00"},
					{name: "A100", val: "#ffe57f"},
					{name: "A200", val: "#ffd740"},
					{name: "A400", val: "#ffc400"},
					{name: "A700", val: "#ffab00"},]
			},
			{
				name:"orange",
				val: [
					{name: 50, val: "#fff3e0"},
					{name: 100, val: "#ffe0b2"},
					{name: 200, val: "#ffcc80"},
					{name: 300, val: "#ffb74d"},
					{name: 400, val: "#ffa726"},
					{name: 500, val: "#ff9800"},
					{name: 600, val: "#fb8c00"},
					{name: 700, val: "#f57c00"},
					{name: 800, val: "#ef6c00"},
					{name: 900, val: "#e65100"},
					{name: "A100", val: "#ffd180"},
					{name: "A200", val: "#ffab40"},
					{name: "A400", val: "#ff9100"},
					{name: "A700", val: "#ff6d00"},]
			},
			{
				name:"deep-orange",
				val: [
					{name: 50, val: "#fbe9e7"},
					{name: 100, val: "#ffccbc"},
					{name: 200, val: "#ffab91"},
					{name: 300, val: "#ff8a65"},
					{name: 400, val: "#ff7043"},
					{name: 500, val: "#ff5722"},
					{name: 600, val: "#f4511e"},
					{name: 700, val: "#e64a19"},
					{name: 800, val: "#d84315"},
					{name: 900, val: "#bf360c"},
					{name: "A100", val: "#ff9e80"},
					{name: "A200", val: "#ff6e40"},
					{name: "A400", val: "#ff3d00"},
					{name: "A700", val: "#dd2c00"},]
			},
			{
				name:"brown",
				val: [
					{name: 50, val: "#efebe9"},
					{name: 100, val: "#d7ccc8"},
					{name: 200, val: "#bcaaa4"},
					{name: 300, val: "#a1887f"},
					{name: 400, val: "#8d6e63"},
					{name: 500, val: "#795548"},
					{name: 600, val: "#6d4c41"},
					{name: 700, val: "#5d4037"},
					{name: 800, val: "#4e342e"},
					{name: 900, val: "#3e2723"},
				]
			},
			{
				name:"grey",
				val: [
					{name: 50, val: "#fafafa"},
					{name: 100, val: "#f5f5f5"},
					{name: 200, val: "#eeeeee"},
					{name: 300, val: "#e0e0e0"},
					{name: 400, val: "#bdbdbd"},
					{name: 500, val: "#9e9e9e"},
					{name: 600, val: "#757575"},
					{name: 700, val: "#616161"},
					{name: 800, val: "#424242"},
					{name: 900, val: "#212121"},
				
					]
			},
			{
				name:"blue-grey",
				val: [
					{name: 50, val: "#eceff1"},
					{name: 100, val: "#cfd8dc"},
					{name: 200, val: "#b0bec5"},
					{name: 300, val: "#90a4ae"},
					{name: 400, val: "#78909c"},
					{name: 500, val: "#607d8b"},
					{name: 600, val: "#546e7a"},
					{name: 700, val: "#455a64"},
					{name: 800, val: "#37474f"},
					{name: 900, val: "#263238"},
					]
			},
		]
	}
 }
}
</script>

```
:::