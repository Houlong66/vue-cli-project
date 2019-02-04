<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="svgIcon"></use>
  </svg>
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    iconName: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ""
    }
  },
  computed: {
    svgIcon() {
      return `#icon-${this.iconName}`;
    },
    svgClass() {
      if (this.className) {
        return `icon ${this.className}`;
      } else {
        return "icon";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>