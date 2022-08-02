<template>
  <div class="j-scroll" ref="j-scroll">
    <!-- 滚动条 -->
    <div
      class="j-scroll-bar"
      ref="j-scroll-bar"
      @mousedown="onMouseDown"
      :class="{ 'j-scroll-bar-hide': !scroll_bar.isShow }"
    ></div>
    <!-- 显示区域 -->
    <div ref="contentView">
      <slot></slot>
    </div>
    <!-- 下拉 -->
    <!-- 上拉 -->
  </div>
</template>

<script>
export default {
  name: "JScroll",
  props: {
    // 颜色
    color: {
      type: String,
      default: "rgba(0, 0, 0, 0.2)",
    },
    // 平坦
    flat: {
      type: Boolean,
      default: true,
    },
    // 滚动条宽度
    barWidth: {
      default: "10",
    },
    // 滚动条偏移
    barOffset: {
      default: "2",
    },
    // 高度
    height: {},
    maxHeight: {},
    minHeight: {},
    // 滚动至顶部触发事件
    scrollToTopFn: {
      type: Function,
      default: function () {},
    },
    // 滚动至底部触发事件
    scrollToBottomFn: {
      type: Function,
      default: function () {},
    },
    // 消逝
    fade: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll_bar: {
        is_drag_scroll_bar: false,
        start_y: 0,
        end_y: 0,
        moveY: 0,
        scrollY: 0,
        scrollTop: 0,
        lastScrollTop: 0,
        scrollHeight: 0,
        isShow: true,
      },
      scroll_panel: {
        scroll_max_height: 0,
        scroll_height: 0,
      },
    };
  },
  methods: {
    // 初始化属性
    init() {
      const j_scroll = this.$refs["j-scroll"];
      const scroll_bar = this.$refs["j-scroll-bar"];

      // 初始化参数
      Number.isNaN(parseInt(this.barWidth)) ? null : (scroll_bar.style.width = `${this.barWidth}px`);
      Number.isNaN(parseFloat(this.barOffset)) ? null : (scroll_bar.style.right = `${this.barOffset}px`);
      scroll_bar.style.backgroundColor = this.color;

      Number.isNaN(parseInt(this.height)) ? null : (j_scroll.style.height = `${this.height}px`);
      Number.isNaN(parseInt(this.maxHeight)) ? null : (j_scroll.style.maxHeight = `${this.maxHeight}px`);
      Number.isNaN(parseInt(this.minHeight)) ? null : (j_scroll.style.minHeight = `${this.minHeight}px`);
      // 监听滚动事件
      window.addEventListener("mousemove", this.onMouseMove);
      window.addEventListener("mouseup", this.onMouseUp);
      j_scroll.addEventListener("scroll", this.onScroll);
    },
    // 初始化Bar
    initScroll_bar(el) {
      const scroll_bar = this.$refs["j-scroll-bar"];

      const scroll_height = el.scrollHeight;
      const client_height = el.clientHeight;

      this.scroll_panel.scroll_max_height = scroll_height - client_height;

      // console.log(this.scroll_panel.scroll_max_height);
      let bar_height = (client_height * client_height) / scroll_height;
      scroll_bar.style.height = scroll_height == client_height ? "" : `${bar_height}px`;
    },

    // 属性监听
    initMutation() {
      const __this = this;
      const j_scroll = this.$refs["j-scroll"];
      const config = { childList: true, attributes: true, characterData: true, subtree: true };
      const callback = function (mutations) {
        let display = window.getComputedStyle(j_scroll).getPropertyValue("display");
        if (display != "none") {
          __this.initScroll_bar(j_scroll);
        }
      };
      const observer = new MutationObserver(callback);
      observer.observe(j_scroll, config);
    },
    // 滚动监听
    onScroll(e) {
      const target = e.target;
      const scroll_bar = target.children[0];

      const scroll_top = target.scrollTop;
      const scroll_height = target.scrollHeight;
      const client_height = target.clientHeight;

      let bar_top = (scroll_top * client_height) / scroll_height + scroll_top;
      scroll_bar.style.transform = `translateY(${bar_top}px)`;
    },
    // 鼠标按下
    onMouseDown(e) {
      this.scroll_bar.is_drag_scroll_bar = true;
      this.scroll_bar.start_y = e.clientY;
    },
    // 鼠标移动
    onMouseMove(e) {
      if (this.scroll_bar.is_drag_scroll_bar) {
        const target = e.target;
        const j_scroll = this.$refs["j-scroll"];

        this.scroll_bar.end_y = e.clientY;

        const start_y = this.scroll_bar.start_y;
        const end_y = e.clientY;
        j_scroll.scrollTo(0, end_y - start_y + this.scroll_panel.scroll_height);
      }
    },
    // 鼠标抬起
    onMouseUp(e) {
      const start_y = this.scroll_bar.start_y;
      const end_y = e.clientY;
      const max_height = this.scroll_panel.scroll_max_height;
      let move_y = end_y - start_y;
      if (this.scroll_panel.scroll_height + move_y > max_height) this.scroll_panel.scroll_height = max_height;
      else if (this.scroll_panel.scroll_height + move_y < 0) this.scroll_panel.scroll_height = 0;
      this.scroll_panel.scroll_height += move_y;
      // console.log(this.scroll_panel.scroll_height + move_y, max_height);

      // this.scroll_panel.scroll_height += end_y - start_y;
      this.scroll_bar.is_drag_scroll_bar = false;
    },
  },
  mounted() {
    // 初始化属性
    this.init();
    // 初始化属性监听
    this.initMutation();
  },
  computed: {},
  watch: {
    _props: {
      // 属性监听
      handler() {
        this.init();
      },
      deep: true,
    },
  },
};
</script>
