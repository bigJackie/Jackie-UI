[[toc]]
# Paper（纸张）
`j-paper`组件是一块可调节的 ***<u>paper</u>***，是许多组件的基础，提供长度、宽度、颜色、阴影等可调节参数。 

## API

## 示例
### 属性
#### 高度（海拔）
:::demo
```html
<template>
  <j-container>
    <j-row justify="space-around" gap="24">
      <j-col
        v-for="elevation in elevations"
        :key="elevation"
        cols="24"
        lg="8"
        xl="8"
      >
        <j-paper
          class="pa-12"
          color="grey-300"
        >
          <j-paper
            :elevation="elevation"
            class="mx-auto"
            height="100"
            width="100"
            @click="a"
          ></j-paper>
          {{elevation}}
        </j-paper>
      </j-col>
    </j-row>
  </j-container>
</template>

<script>
  export default {
    data(){
      return {
        elevations: [6, 12, 18],
      }
    },
    methods:{
      a(){
        console.log(1);
      }
    }
  }
</script>
```
:::