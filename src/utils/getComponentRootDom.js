import Vue from "vue";
//根据组件和其属性获取某个组件渲染的Dom根元素
export default function getComponentRootDom (comp, props) {// 组件 属性
  const vm = new Vue({
    render: (h) => h(comp, { props }),  //渲染组件，传组件的属性
  });
  vm.$mount();    //挂载生成真实DOM元素
  return vm.$el;  //挂载完实例属性叫el就是真实dom返回
}
