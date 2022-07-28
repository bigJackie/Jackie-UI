<template>
  <div class="j-list-group flex flex-column" :style="{ '--content-height': `${content_height}px` }">
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
      <j-list-item-title v-show="title">{{ title }}</j-list-item-title>
      <j-list-item-icon
        class="j-list-group-icon__append"
        :class="{ 'is-expand': isExpanded }"
        v-show="appendIcon"
        :name="appendIcon"
      ></j-list-item-icon>
    </j-list-item>
    <div class="j-list-group__content" :class="{ 'is-expand': isExpanded }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "JListGroup",
  props: {
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
  },
  data() {
    return {
      isExpanded: false,
      content_height: 0,
    };
  },
  methods: {
    getHeight() {
      let children = this.$slots.default;
      for (let i = 0; i < children.length; i++) {
        this.content_height += children[i].elm.getBoundingClientRect().height;
        if (children[i].componentInstance)
          if (children[i].componentInstance.$data.content_height) {
            this.content_height += children[i].componentInstance.$data.content_height;
          }
      }
    },
  },
  mounted() {
    this.getHeight();
  },
};
</script>

<style lang="scss" scoped>
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
  }
}
</style>
