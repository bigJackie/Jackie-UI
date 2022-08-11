<template>
  <div
    class="j-col"
    :class="[
      `col-${parseInt(cols)}`,
      xs ? `col-xs-${parseInt(xs)}` : '',
      sm ? `col-sm-${parseInt(sm)}` : '',
      md ? `col-md-${parseInt(md)}` : '',
      lg ? `col-lg-${parseInt(lg)}` : '',
      xl ? `col-xl-${parseInt(xl)}` : '',
      offset ? `col-offset-${parseInt(offset)}` : '',
      offsetXs ? `col-offset-xs-${parseInt(offsetXs)}` : '',
      offsetSm ? `col-offset-sm-${parseInt(offsetSm)}` : '',
      offsetMd ? `col-offset-md-${parseInt(offsetMd)}` : '',
      offsetLg ? `col-offset-lg-${parseInt(offsetLg)}` : '',
      offsetXl ? `col-offset-xl-${parseInt(offsetXl)}` : '',
    ]"
    :style="{ padding: `0 ${parseInt(row.gap / 2)}px` }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "JCol",
  props: {
    // 默认列数
    cols: { type: Number | String, default: 24 },
    xs: { type: Number | String, default: undefined },
    sm: { type: Number | String, default: undefined },
    md: { type: Number | String, default: undefined },
    lg: { type: Number | String, default: undefined },
    xl: { type: Number | String, default: undefined },
    // 默认偏移
    offset: { type: Number | String, default: undefined },
    offsetXs: { type: Number | String, default: undefined },
    offsetSm: { type: Number | String, default: undefined },
    offsetMd: { type: Number | String, default: undefined },
    offsetLg: { type: Number | String, default: undefined },
    offsetXl: { type: Number | String, default: undefined },
  },
  inject: ["row"],
};
</script>
