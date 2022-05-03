// import Home from "@/views/Home";
// import About from "@/views/About";
// import Blog from "@/views/Blog";
// import Project from "@/views/Project";
// import Message from "@/views/Message";
// import Search from "@/views/Search";
// import BlogDetail from "@/views/Blog/Detail";

import "nprogress/nprogress.css";
import NotFound from "@/views/NotFound.vue"
import { start, done, configure } from "nprogress";

configure({
  trickleSpeed: 20,
  // showSpinner: false,小圈圈在转
});


function delay (duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

function getPageComponent (pageCompResolver) { //不能直接用path因为要交给webpack，动态依赖关系可能分辨不出，所以写出函数
  return async () => {
    start();  //开始加载
    if (process.env.NODE_ENV === "development") {
      await delay(50);
    }
    const comp = await pageCompResolver();
    done(); //加载结束
    return comp;
  };
}

// 采用动态依赖，Promise完成后得到一个组件

export default [

  {
    name: "/", path: "/",
    component: getPageComponent(
      () => import(/* webpackChunkName: "home" */ "@/views/Home")),  //还是异步吧不如加载太快
    meta: { title: "首页" },
  }, //webpackChunkName:为了方便查看动态打包结果
  { name: "About", path: "/about", component: getPageComponent(() => import(/* webpackChunkName: "about" */ "@/views/About")), meta: { title: "关于", }, },
  { name: "Blog", path: "/blog", component: getPageComponent(() => import(/* webpackChunkName: "blog" */"@/views/Blog")), meta: { title: "文章", }, },
  { name: "CategoryBlog", path: "/blog/cate/:categoryId", component: getPageComponent(() => import(/* webpackChunkName: "blog" */"@/views/Blog")), meta: { title: "文章", }, },
  { name: "BlogDetail", path: "/blog/:id", component: getPageComponent(() => import(/* webpackChunkName: "blogdetail" */"@/views/Blog/Detail")), meta: { title: "文章详情", }, },
  { name: "Project", path: "/project", component: getPageComponent(() => import(/* webpackChunkName: "project" */"@/views/Project")), meta: { title: "项目&效果", }, },
  { name: "Message", path: "/message", component: getPageComponent(() => import(/* webpackChunkName: "message" */"@/views/Message")), meta: { title: "任务板", }, },
  { name: "Search", path: "/search", component: getPageComponent(() => import(/* webpackChunkName: "search" */"@/views/Search")), meta: { title: "Search", }, },
  { name: "NotFound", path: "*", component: NotFound, }
];
