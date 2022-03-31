<template>
  <div
    @click="handleClick"
    v-show="show"
    class="to-top-container"
  >
    Top
  </div>
</template>

<script>
import store from "@/store/top";
import { mapState } from "vuex";
export default {
  // data () {
  //   return {
  //     show: false,
  //   };
  // },
  computed: mapState("top", { show: "data" }),
  watch: {
    '$route': 'top',
    immediate: true,
  },

  //mixins监听滚动emit提交事件总线mainScroll以滚动,Top.vue$on收到滚动执行方法(判断是否滚动距离满足大于显示条件)
  //Top.vue点击事件emit提交事件总线setMainScroll，mixins收到监听执行方法(改变高度)
  created () {
    // console.log(this.$route);

    this.$bus.$on("mainScroll", this.handleScroll);//事件总线检测到滚动一定距离使Top显现
  },
  destroyed () {
    this.$bus.$off("mainScroll", this.handleScroll)
  },
  methods: {
    top () {
      // console.log("watch是否有效");
      this.$store.commit("top/setData", false)
    },
    handleScroll (dom) {
      // console.log(dom);
      if (!dom) {
        this.$store.commit("top/setData", false)
        return;
      }
      if (dom.scrollTop >= 500) {
        this.$store.commit("top/setData", true)
      } else {
        this.$store.commit("top/setData", false)
      }
    },
    handleClick () {
      //回到顶部
      this.$bus.$emit("setMainScroll");//触发事件总线scrollTop变为0回到最上方
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.to-top-container {
  background: @primary;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  z-index: 99;
  right: 50px;
  bottom: 50px;
  cursor: pointer;
  line-height: 50px;
  color: #fff;
  text-align: center;
}
</style>