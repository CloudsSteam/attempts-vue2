import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes"
import { titleController } from "@/utils";
if (!window.VueRouter) {  //不存在cdn就默认
  Vue.use(VueRouter);   //使用一个vue插件
}


const router = new VueRouter({
  //配置
  routes, //路由匹配规则
  mode: "history",
  //更改跳转模式hash默认兼容性好，改变路径也是改变hash部分
  //  history跳转 location.pathname  H5无刷新history.pushState(null,null,"/blog")
});

router.afterEach((to, from) => {
  // console.log(to.meta.title);
  titleController.setRouteTitle(to.meta.title);

});
export default router;