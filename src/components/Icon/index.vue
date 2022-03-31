<template>
  <i
    class="iconfont icon-container"
    :class="fontClass"
  ></i>
</template>

<script>
const classMap = {
  home: "icon-zhuye",
  success: "icon-zhengque",
  error: "icon-cuowu",
  close: "icon-guanbi",
  warn: "icon-jinggao",
  info: "icon-xinxi",
  blog: "icon-blog",
  code: "icon-code",
  about: "icon-about",
  weixin: "icon-weixin",
  mail: "icon-mail_",
  github: "icon-github",
  qq: "iconsign_qq",
  arrowUp: "icon-arrow-up",
  arrowDown: "icon-arrow",
  empty: "icon-empty",
  chat: "icon-zhiyeshengyamubiao",
  search: "icon-search",
  jiankangma: "icon-jiankangma"
};
export const types = Object.keys(classMap);
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    // 图标类样式
    fontClass () {
      return classMap[this.type];
    },
  },
};
</script>

<style scoped>
/* //at.alicdn.com/t/font_2164449_nalfgtq7il.css */
@import "//at.alicdn.com/t/font_3291209_y1h7hli8kva.css";
.iconfont {
  color: inherit;
  font-size: inherit;
}
</style>