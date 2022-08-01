<template>
  <div class="j-doc-container" @mouseenter="is_hover = true" @mouseleave="is_hover = false">
    <div class="j-component">
      <slot name="component"></slot>
    </div>
    <div class="j-code-block" :class="{ 'is-fold': !is_expanded }" :style="{ '--highlight--height': highlight_height }">
      <!-- <div class="description" v-if="$slots.default">
        <slot></slot>
      </div> -->
      <div class="highlight">
        <slot name="highlight"></slot>
      </div>
    </div>
    <div class="j-doc-container-action flex flex-row justify-end">
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
    let highlight = this.$slots.highlight[0];
    this.highlight_height = getComputedStyle(highlight.elm).height;
  },
};
</script>

<style lang="scss">
@include b(doc-container) {
  box-sizing: border-box;
  border: $border-width solid $border-color;
  border-radius: #{map-get($border-radius-items, "md")} !important;

  /* COMPONENT */
  @include b(component) {
    box-sizing: border-box;
    padding: 10px;
  }

  /* COMPONENT */

  /* COMPONENT */
  @include b(code-block) {
    border-width: $border-width 0 0 0;
    border-style: solid;
    border-color: $border-color;
    overflow: hidden;
    transition: all 0.2s ease-in-out;
    height: var(--highlight--height);

    @include when("fold") {
      height: 0px;
      transition: all 0.2s ease-in-out;
      border-width: 0;
    }
  }

  /* COMPONENT */
  @include b(doc-container-action) {
    border-width: $border-width 0 0 0;
    border-style: solid;
    border-color: $border-color;
    height: 40px;
  }
}
</style>
