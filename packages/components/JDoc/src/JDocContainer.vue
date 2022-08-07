<template>
  <div
    :style="{ border: $slots.highlight ? '' : 'none' }"
    class="j-doc-container"
    @mouseenter="is_hover = true"
    @mouseleave="is_hover = false"
  >
    <div class="j-component" :class="{ 'pa-0': !$slots.highlight }">
      <slot name="component"></slot>
    </div>
    <div class="j-code-block" :class="{ 'is-fold': !is_expanded }" :style="{ '--highlight--height': highlight_height }">
      <!-- <div class="description" v-if="$slots.default">
        <slot></slot>
      </div> -->
      <div class="highlight" v-if="$slots.highlight">
        <slot name="highlight"></slot>
      </div>
    </div>
    <div v-if="$slots.highlight" class="j-doc-container-action flex flex-row justify-end">
      <j-icon class="mr-2" name="code" @click="is_expanded = !is_expanded"></j-icon>
    </div>
  </div>
</template>

<script type="text/babel">
import { stripScript, stripStyle, stripTemplate } from "../../../utils/md-loader/util";
export default {
  name: "JDocContainer",
  data() {
    return {
      is_hover: false,
      is_expanded: false,
      highlight_height: "0px",
    };
  },
  methods: {},
  created() {
    const highlight = this.$slots.highlight;
    if (highlight && highlight[0]) {
      let code = "";
      let cur = highlight[0];
      if (cur.tag === "pre" && cur.children && cur.children[0]) {
        cur = cur.children[0];
        if (cur.tag === "code") {
          code = cur.children[0].text;
        }
      }
      // if (code) {
      //   this.codepen.html = stripTemplate(code);
      //   this.codepen.script = stripScript(code);
      //   this.codepen.style = stripStyle(code);
      // }
    }
  },
  mounted() {
    if (this.$slots.highlight) {
      let highlight = this.$slots.highlight[0];
      this.highlight_height = getComputedStyle(highlight.elm).height;
    }
  },
};
</script>
