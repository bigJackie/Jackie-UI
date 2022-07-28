<template>
<<<<<<< HEAD
  <div
    ref="j-list-group"
    v-on="$listeners"
    class="j-list-group flex flex-column"
    :style="{ '--content-height': `${content_height}px` }"
  >
=======
  <div class="j-list-group flex flex-column" :style="{ '--content-height': `${content_height}px` }">
>>>>>>> 1f14aba... 1
    <div class="j-list-item__head" v-if="$slots.head" @click="isExpanded = !isExpanded">
      <slot name="head"></slot>
    </div>
    <j-list-item
      class="j-list-item__head"
      :class="{ 'is-expand': isExpanded }"
      v-else
      @click="isExpanded = !isExpanded"
    >
      <j-list-item-icon v-show="prependIcon" :name="prependIcon"></j-list-item-icon>
<<<<<<< HEAD
      <j-list-item-content>
        <j-list-item-title v-show="title">{{ title }}</j-list-item-title>
      </j-list-item-content>
=======
      <j-list-item-title v-show="title">{{ title }}</j-list-item-title>
>>>>>>> 1f14aba... 1
      <j-list-item-icon
        class="j-list-group-icon__append"
        :class="{ 'is-expand': isExpanded }"
        v-show="appendIcon"
        :name="appendIcon"
      ></j-list-item-icon>
    </j-list-item>
<<<<<<< HEAD
    <div class="j-list-group__content" :class="{ 'is-expand': isExpanded, 'is-disabled': disabled }">
=======
    <div class="j-list-group__content" :class="{ 'is-expand': isExpanded }">
>>>>>>> 1f14aba... 1
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "JListGroup",
  props: {
<<<<<<< HEAD
    selected: { type: Number, default: undefined },
    prependIcon: { type: String, default: "" },
    appendIcon: { type: String, default: "chevron-down" },
    title: { type: String, default: "" },
    disabled: { type: Boolean, default: false },
    autoFold: { type: Boolean, default: false },
    singleGroup: { type: Boolean, default: false },
=======
    prependIcon: {
      type: String,
      default: "",
    },
    appendIcon: {
      type: String,
      default: "chevron-down",
    },
    title: {
      type: String,
      default: "",
    },
>>>>>>> 1f14aba... 1
  },
  data() {
    return {
      isExpanded: false,
      content_height: 0,
<<<<<<< HEAD
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
=======
    };
  },
  methods: {
    getHeight() {
      let children = this.$slots.default;
      for (let i = 0; i < children.length; i++) {
        this.content_height += children[i].elm.getBoundingClientRect().height;
>>>>>>> 1f14aba... 1
        if (children[i].componentInstance)
          if (children[i].componentInstance.$data.content_height) {
            this.content_height += children[i].componentInstance.$data.content_height;
          }
      }
<<<<<<< HEAD

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
=======
    },
  },
  mounted() {
    this.getHeight();
>>>>>>> 1f14aba... 1
  },
};
</script>

<<<<<<< HEAD
<style lang="scss">
=======
<style lang="scss" scoped>
>>>>>>> 1f14aba... 1
@include b(list-group) {
  /* 禁用选择 */
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  /* LIST-ITEM__HEAD */
  @include b(list-item) {
    @include e(head) {
      cursor: pointer;
      /* ACTIVE */
      @include when(expand) {
        color: $color-primary;
        &:hover {
          &::before {
            background-color: $color-primary;
            opacity: 0.04;
          }
        }
      }
<<<<<<< HEAD
=======

>>>>>>> 1f14aba... 1
      /* HOVER */
      &:hover {
        &::before {
          background-color: $color-hover;
          opacity: 0.04;
        }
      }
    }
  }

  /* LIST-GROUP-ICON__APPEND */
  @include b(list-group-icon) {
    @include e(append) {
      margin-right: 0px;
      transform: rotateZ(0deg);
      transition: all 0.2s ease-in-out;
      @include when(expand) {
        transform: rotateZ(180deg);
        transition: all 0.2s ease-in-out;
      }
    }
  }

  /* LIST-GROUP__CONTENT */
  @include e(content) {
    overflow: hidden;
    max-height: 0px;
    transition: all 0.2s ease-in-out;
    @include when(expand) {
      max-height: var(--content-height);
      transition: all 0.2s ease-in-out;
    }
<<<<<<< HEAD

    /* DISABLED */
    @include when(disabled) {
      @include b(list-item) {
        cursor: default !important;
        &:hover {
          &::before {
            opacity: 0 !important;
          }
        }
      }
    }
=======
>>>>>>> 1f14aba... 1
  }
}
</style>
