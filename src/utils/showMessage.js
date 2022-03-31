import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/Icon";
import showMessage from "./showMessage.module.less"
//全局使用 showMessage
//import showMessage from "./utils/showMessage";
//Vue.prototype.\$showMessage=showMessage;
//1.09.5
/**
 * 弹出消息
 * @param {String} content 消息内容 
 * @param {String} type 消息类型 info error success warn
 * @param {Number} duration 多久后消失
 * @param {HTMLElement} container 存放容器，消息会显示到该容器的正中；如果不传显示到页面正中
 */

export default function (options = {}) {
  const content = options.content || "";
  const type = options.type || "info";
  const duration = options.duration || 1000;
  const container = options.container || document.body;
  //创建消息元素
  const div = document.createElement("div");
  const iconDom = getComponentRootDom(Icon, { //获取某个组件渲染的 Dom 根元素
    type,
  });

  // console.log(iconDom);
  // console.log(iconDom.outerHTML);
  div.innerHTML = `<span class="${showMessage.icon}">${iconDom.outerHTML}</span><div>${content}</div>`;
  //设置样式
  const typeClassName = showMessage[`message-${type}`];  //对应类型样式名
  div.className = `${showMessage.message} ${typeClassName}`;
  //将div加入到容器中
  // if (!container) {
  //   container = document.body;
  // } else {}
  //容器position是否改动过
  if (options.container) {
    if (getComputedStyle(container).position === "static") {
      container.style.position = "relative";
    }
  }


  container.appendChild(div);

  //浏览器强行渲染导致 feflow 重排
  div.clientHeight;
  //升起正常位置

  div.style.opacity = 1;
  div.style.transform = `translate(-50%,-50%)`;

  //等一段时间，消失
  setTimeout(() => {
    div.style.opacity = 0;
    div.style.transform = `translate(-50%,-50%) translateY(-25px)`;
    div.addEventListener( //消失后触发事件，将其移除。 注册 transitionend 事件监听
      "transitionend", function () {
        div.remove();
        //有就运行回调函数
        options.callback && options.callback();
      }, { once: true })
  }, duration);
  //1.00.17
}