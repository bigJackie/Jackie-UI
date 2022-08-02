<template>
  <div v-on="$listeners" class="j-list-group flex flex-column" :style="{ '--content-height': `${content_height}px` }">
    <div class="j-list-item__head" v-if="$slots.head" @click="isExpanded = !isExpanded">
      <slot name="head"></slot>
    </div>
    <j-list-item
      link
      class="j-list-item__head"
      :class="{ 'is-expand': isExpanded }"
      v-else
      @click="isExpanded = !isExpanded"
    >
      <j-list-item-icon v-show="prependIcon" :name="prependIcon"></j-list-item-icon>
      <j-list-item-content>
        <j-list-item-title v-show="title">{{ title }}</j-list-item-title>
      </j-list-item-content>
      <j-list-item-icon
        class="j-list-group-icon__append"
        :class="{ 'is-expand': isExpanded }"
        v-show="appendIcon"
        :name="appendIcon"
      ></j-list-item-icon>
    </j-list-item>
    <div class="j-list-group__content" :class="{ 'is-expand': isExpanded, 'is-disabled': disabled }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "JListGroup",
  props: {
    selected: { type: Number, default: undefined },
    prependIcon: { type: String, default: "" },
    appendIcon: { type: String, default: "chevron-down" },
    title: { type: String, default: "" },
    disabled: { type: Boolean, default: false },
    autoFold: { type: Boolean, default: false },
    singleGroup: { type: Boolean, default: false },
  },
  data() {
    return {
      isExpanded: false,
      content_height: 0,
      single: false,
    };
  },
  methods: {
    init() {
      let children = this.$slots.default;
      for (let i = 0; i < children.length; i++) {
        let margin =
          parseInt(getComputedStyle(children[i].elm).marginBottom) +
          parseInt(getComputedStyle(children[i].elm).marginTop);
        this.content_height += children[i].elm.getBoundingClientRect().height + margin;
        if (children[i].componentInstance)
          if (children[i].componentInstance.$data.content_height) {
            this.content_height += children[i].componentInstance.$data.content_height;
          }
      }
      if (this.singleGroup) {
        let children = this.$children;
        for (let i = 0; i < children.length; i++) {
          children[i].$data.single = true;
          console.log(children[i].$data.single);
        }
      }
    },
    fold() {
      let children = this.$children;
      for (let i = 0; i < children.length; i++) {
        if (children[i].fold) {
          children[i].fold();
        }
      }
      this.isExpanded = false;
    },
  },
  watch: {
    isExpanded(val) {
      if (!val && this.autoFold) {
        this.fold();
      }
      if (val && this.single) {
        let uid = this._uid;
        let ele = this.$parent.$children;
        for (let i in ele) {
          if (ele[i]._uid !== uid && ele[i].fold) {
            ele[i].fold();
          }
        }
      }
    },
  },
  mounted() {
    this.init();
  },
};
</script>
