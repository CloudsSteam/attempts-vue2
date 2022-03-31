//指令的配置
// {
//   bind (el, binding) {//只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
//     console.log("bind", el, binding);
//   },
//   inserted (el, binding) {//被绑定元素插入父节点时调用
//     console.log("inserted", el, binding);
//   },
//   update (el, binding) {//所在组件的 VNode 更新时调用
//     console.log("update", el, binding);
//   },
// / unbind：只调用一次，指令与元素解绑时调用。
// }


import loadingUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";
//得到el中loading效果的img元素
function getLoadingImage (el) {
  // console.log(el);
  // return el.querySelector("img[data-role=loading]");//为什么要用data-role?
  //data-* 全局属性 是一类被称为自定义数据属性的属性, HTMLElement.dataset.属性可以访问它们
  return el.querySelector("img[data-role=loading]");
}

function createLoadingImg () {
  const img = document.createElement("img");
  img.dataset.role = "loading";   // HTMLElement.dataset  等同 HTMLElement[data-role
  img.src = loadingUrl;
  img.className = styles.loading;    //注意这里是设置类名
  return img;
}

//导出指令配置对象
//通常用bind和update直接写入一个function导出
export default function (el, binding) {
  //根据binding.value的值,决定创建或删除img元素
  const curImg = getLoadingImage(el);
  // console.log(el);
  if (binding.value) {
    if (!curImg) {
      const img = createLoadingImg();
      el.appendChild(img);
    }
  } else {
    if (curImg) {
      curImg.remove();
    }
  }
}
