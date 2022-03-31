// 16.28
import "./mock";  //mock要写在最前面，不用则注释
// import "./mock/index";
import Vue from 'vue';
import App from './App.vue';
import "./styles/global.less";
// Vue.config.productionTip = false
import router from "./route";
import "./eventBus";
import store from "./store";
store.dispatch("setting/fetchSetting");
// import "./api/banner";
// import "./api/blog";



// //手写纯DOM操作
// import styles from "./styles/message.module.less";
// console.log(styles);//不加module为空对象
// const div = document.createElement("div");
// div.className = styles.message;
// div.innerText = "尹崽憨批眼里只有我哈哈";
// document.body.appendChild(div);

// window.showMessage = showMessage;
// import showMessage from "./utils/showMessage";
// showMessage("宝你来了 ! !", "success", 2000);


import showMessage from "./utils/showMessage";
Vue.prototype.$showMessage = showMessage; //全局注册工具

import vLoading from "./directives/loading";
Vue.directive("loading", vLoading);//(命名，配置对象)全局注册指令
import vLazy from "./directives/lazy";  //图片懒加载
Vue.directive("lazy", vLazy);


new Vue({
  //1 render(h){
  //   return h(App);   //组件也是虚拟节点对象，渲染的不是普通节点而是组件
  // },
  //2 components: {
  //   App
  // },
  // template: '<App />'
  store,
  router,
  render: h => h(App),

}).$mount('#app');

// 测试事件总线
// import eventBus from "./eventBus";

// function handler1 (data) {
//   console.log("handler1", data);
// }
// function handler2 (data) {
//   console.log("handler2", data);
// }
// eventBus.$on("event1", handler1);
// eventBus.$on("event1", handler2);
// eventBus.$on("event2", handler1);

// window.eventBus = eventBus;
// window.handler1 = handler1;
// window.handler2 = handler2;

// 测试mock数据
// import * as blogApi from "./api/blog";

// blogApi.getBlogTypes().then((r) => {
//   console.log("博客分类", r);
// })

// blogApi.getBlogs(2, 10, 3).then((r) => {
//   console.log("博客", r);
// });


//获取博客
// blogApi.getBlog("dengyunhai").then((r) => {
//   console.log(r);
// });
// //提交评论
// blogApi.postComment({
//   nickname: "昵称",
//   content: "评论内容，纯文本",
//   blogId: "123",
// }).then((r) => {
//   console.log(r);
// });

// //获取评论
// blogApi.getComments("123123").then((r) => {
//   console.log(r);

// });

// import { getSetting } from "./api/setting";
// getSetting().then((resp) => {
//   console.log(resp);
// });