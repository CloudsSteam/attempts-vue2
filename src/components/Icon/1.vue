<template>
  <i
    class="iconfont icon-container"
    :class="fontClass"
  ></i>
</template>

<script>
const classMap = {
  home: "iconzhuye",
  success: "iconzhengque",
  error: "iconcuowu",
  close: "iconguanbi",
  warn: "iconjinggao",
  info: "iconxinxi",
  blog: "iconblog",
  code: "iconcode",
  about: "iconset_about_hov",
  weixin: "iconweixin",
  mail: "iconemail",
  github: "icongithub",
  qq: "iconsign_qq",
  arrowUp: "iconiconfonticonfonti2copy",
  arrowDown: "iconiconfonticonfonti2",
  empty: "iconempty",
  chat: "iconliuyan"
};

// 集体导出export const types =Object.keys(classMap);
// 快速原型开发用到时候再导入
//import Icon,{types}from "./";
//export default{
//  data(){
//    return{
//      types,  types作为数据导出
//    };
//  },
//};

export default {
  props: {
    type: {
      type: String,
      required: true
    }
  },
  computed: {
    //图标类样式
    fontClass () {
      return classMap[this.type];
    }
  }
};
</script>
<style scoped>
/* @import "//at.alicdn.com/t/font_2815674_5q5f9r21l62.css"; */
@import "//at.alicdn.com/t/font_2164449_nalfgtq7il.css";
i {
  display: block;
}
</style>